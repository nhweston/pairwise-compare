export interface Candidate {
  name: string
  image?: string
  website?: string
}

export class State {

  readonly step: number;

  // list of all candidate IDs
  readonly candidates: string[];

  // remaining candidate pairs sorted by weight
  readonly remaining: [string, string][];

  // partial ordering determined so far
  // graph[a].includes(b) ==> a > b
  readonly graph: { [candidateId: string]: Set<string> };

  // tracks orderings between pairs of candidates
  // table[a][b] === a > b
  readonly table: { [a: string]: { [b: string]: boolean | null } };

  private constructor(
    step: number,
    candidates: string[],
    remaining: [string, string][],
    graph: State['graph'],
    table: State['table'],
  ) {
    this.step = step;
    this.candidates = candidates;
    this.remaining = remaining;
    this.graph = graph;
    this.table = table;
  }

  static create(candidates: string[]): State {
    const pairs: [string, string][] = [];
    for (let i = 0; i < candidates.length; i++) {
      for (let j = i + 1; j < candidates.length; j++) {
        pairs.push([candidates[i], candidates[j]]);
      }
    }
    // deterministic ordering of pairs
    const candidateWeights: { [candidateId: string]: number } =
      Object.fromEntries(candidates.map((c, i) => [c, i + 1]));
    const getPairWeight = (a: string, b: string) =>
      candidateWeights[a] + candidateWeights[b];
    pairs.sort(([a0, b0], [a1, b1]) => {
      const w0 = getPairWeight(a0, b0);
      const w1 = getPairWeight(a1, b1);
      const w = w1 - w0;
      if (w !== 0) {
        return w;
      }
      return candidateWeights[a1] - candidateWeights[a0];
    });
    const graph: State['graph'] = { };
    const table: State['table'] = { };
    for (const a of candidates) {
      graph[a] = new Set();
      const row: (typeof table)[string] = { };
      table[a] = row;
      for (const b of candidates) {
        row[b] = null;
      }
    }
    return new State(1, candidates, pairs, graph, table);
  }

  getEstimatedNumQuestionsRemaining(): number {
    const estimatedTotal = Math.pow(this.candidates.length, 4 / 3);
    const numPairsKnown = this.getNumPairsKnown();
    const numPairsTotal = this.getNumPairsTotal();
    const progressRemaining = 1 - numPairsKnown / numPairsTotal;
    return Math.round(estimatedTotal * progressRemaining);
  }

  getNextPair(): [string, string] | null {
    const { remaining } = this;
    return remaining[remaining.length - 1] || null;
  }

  getNumPairsKnown(): number {
    let result = 0;
    for (const row of Object.values(this.table)) {
      result += Object.values(row).filter(x => x).length;
    }
    return result;
  }

  getNumPairsTotal(): number {
    const { candidates } = this;
    return candidates.length * (candidates.length - 1) / 2;
  }

  // PRE: getNextPair returns null
  getResult(): string[] {
    const { candidates, graph } = this;
    const unwrap = (set: Set<string>) =>
      Array.from(set)[0];
    // find candidate with no inferiors
    let suprema = new Set(candidates);
    for (const inferiors of Object.values(graph)) {
      switch (inferiors.size) {
        case 0: {
          // infimum has no inferiors
          break;
        }
        case 1: {
          // this candidate cannot be the supremum
          suprema.delete(unwrap(inferiors));
          break;
        }
        default: {
          throw new Error('candidate with multiple inferiors');
        }
      }
    }
    if (suprema.size !== 1) {
      throw new Error('no unique supremum');
    }
    // traverse the graph to construct the result
    const result: string[] = [];
    const supremum = unwrap(suprema);
    for (let cursor = supremum; cursor; cursor = unwrap(graph[cursor])) {
      result.push(cursor);
    }
    return result;
  }

  // response === a > b where getNextPair() === [a, b]
  pushResponse(response: boolean): State {
    const { candidates, remaining, graph, table } = this;
    const pair = this.getNextPair();
    if (!pair) {
      throw new Error('no remaining pairs');
    }
    const [a, b] = response ? pair : [pair[1], pair[0]];
    // deep copy graph and table
    const graphNext: typeof graph = { ...graph };
    for (const [candidate, edges] of Object.entries(graph)) {
      graphNext[candidate] = new Set(edges);
    }
    const tableNext: typeof table = { };
    for (const [candidate, row] of Object.entries(table)) {
      tableNext[candidate] = { ...row };
    }
    const superiors = this.getSuperiorsOf(a);
    superiors.push(a);
    const inferiors = this.getInferiorsOf(b);
    inferiors.push(b);
    for (const superior of superiors) {
      const edges = graphNext[superior];
      const row = tableNext[superior];
      for (const inferior of inferiors) {
        edges.delete(inferior);
        row[inferior] = true;
        tableNext[inferior][superior] = false;
      }
    }
    graphNext[a].add(b);
    const remainingNext = [...remaining];
    for (;;) {
      const pair = remainingNext[remainingNext.length - 1];
      if (!pair) {
        break;
      }
      const [aNext, bNext] = pair;
      if (tableNext[aNext][bNext] === null) {
        break;
      }
      remainingNext.pop();
    }
    return new State(
      this.step + 1,
      candidates,
      remainingNext,
      graphNext,
      tableNext,
    );
  }

  getInferiorsOf(candidate: string): string[] {
    const row = this.table[candidate];
    return this.candidates.filter(c => row[c] === true);
  }

  getSuperiorsOf(candidate: string): string[] {
    const row = this.table[candidate];
    return this.candidates.filter(c => row[c] === false);
  }

}
