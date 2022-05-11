import { Component, useEffect, useState } from 'react';
import { State } from './lib';
import { candidateIds, candidates } from './data';
import Quiz from './component/quiz';
import Result from './component/result';

const App = () => {
  const [state, setState] = useState(State.create(candidateIds));
  const [pair, setPair] = useState(state.getNextPair());
  const pushResponse = (response: boolean) => {
    const stateNext = state.pushResponse(response);
    setState(stateNext);
    const pairNext = stateNext.getNextPair();
    setPair(pairNext);
  }
  const back = () => {
    const statePrev = state.previous!;
    setState(statePrev);
    setPair(statePrev.getNextPair());
  };
  useEffect(() => {
    candidates.forEach(({ image }) => {
      const images = typeof image === 'string' ? [image] : image ? image : [];
      for (const i of images) {
        const img = new Image();
        img.src = i;
      }
    });
  });
  return pair ?
    <Quiz
      leftId={pair[0]}
      rightId={pair[1]}
      numPairsKnown={state.getNumPairsKnown()}
      numPairsTotal={state.getNumPairsTotal()}
      estimatedNumQuestionsRemaining={state.getEstimatedNumQuestionsRemaining()}
      pushResponse={pushResponse}
      back={state.previous ? back : undefined}
    /> :
    <Result
      candidateIds={state.getResult()}
      back={back}
    />
}

export default App;
