import { QuizState } from "./lib";

const s2 = () => {
  const candidates = ['A', 'B'];
  return QuizState.create(candidates);
};

const s3 = () => {
  const candidates = ['A', 'B', 'C'];
  return QuizState.create(candidates);
};

test('initialisation: step', () => {
  expect(s2().step).toEqual(1);
});

test('initialisation: candidates', () => {
  expect(s3().candidates).toEqual(['A', 'B', 'C']);
})

test('initialisation: remaining', () => {
  const expected = [
    ['B', 'C'],
    ['A', 'C'],
    ['A', 'B']
  ];
  expect(s3().remaining).toEqual(expected);
});

test('initialisation: graph', () => {
  const expected = {
    'A': new Set(),
    'B': new Set(),
    'C': new Set(),
  };
  expect(s3().graph).toEqual(expected);
});

test('initialisation: table', () => {
  const empty = { 'A': null, 'B': null, 'C': null };
  const expected = {
    'A': empty,
    'B': empty,
    'C': empty,
  };
  expect(s3().table).toEqual(expected);
});

test('initial state: getNumPairs', () => {
  expect(s3().getNumPairsKnown()).toEqual(0);
  expect(s3().getNumPairsTotal()).toEqual(3);
});

test('initial state: getInferiorsOf', () => {
  expect(s3().getInferiorsOf('A')).toEqual([]);
});

test('initial state: getSuperiorsOf', () => {
  expect(s3().getSuperiorsOf('A')).toEqual([]);
});

test('initial state: getNextPair', () => {
  expect(s3().getNextPair()).toEqual(['A', 'B']);
});

test('step 2: remaining', () => {
  const expected = [['B', 'C'], ['A', 'C']];
  expect(s3().pushResponse(true).remaining).toEqual(expected);
});

test('step 2: graph', () => {
  const expected = {
    'A': new Set(['B']),
    'B': new Set(),
    'C': new Set(),
  };
  expect(s3().pushResponse(true).graph).toEqual(expected);
});

test('step 2: table', () => {
  const expected = {
    'A': { 'A': null, 'B': true, 'C': null },
    'B': { 'A': false, 'B': null, 'C': null },
    'C': { 'A': null, 'B': null, 'C': null },
  };
  expect(s3().pushResponse(true).table).toEqual(expected);
});

test('step 3(a): remaining', () => {
  const state = s3().pushResponse(true).pushResponse(false);
  expect(state.remaining).toEqual([]);
});

test('step 3(a): graph', () => {
  const expected = {
    'A': new Set(['B']),
    'B': new Set(),
    'C': new Set(['A']),
  };
  const state = s3().pushResponse(true).pushResponse(false);
  expect(state.graph).toEqual(expected);
});

test('step 3(a): table', () => {
  const expected = {
    'A': { 'A': null, 'B': true, 'C': false },
    'B': { 'A': false, 'B': null, 'C': false },
    'C': { 'A': true, 'B': true, 'C': null },
  };
  const state = s3().pushResponse(true).pushResponse(false);
  expect(state.table).toEqual(expected);
});

export { };
