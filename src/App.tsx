import { useState } from 'react';
import { State } from './lib';
import { candidateIds } from './data';
import Quiz from './component/quiz';
import Result from './component/result';

const App = () => {
  const [state, setState] = useState(State.create(candidateIds));
  const [pair, setPair] = useState(state.getNextPair());
  const pushResponse = (response: boolean) => {
    const stateNext = state.pushResponse(response);
    setState(stateNext);
    console.log(stateNext.graph);
    const pairNext = stateNext.getNextPair();
    setPair(pairNext);
  }
  return pair ?
    <Quiz
      leftId={pair[0]}
      rightId={pair[1]}
      numPairsKnown={state.getNumPairsKnown()}
      numPairsTotal={state.getNumPairsTotal()}
      estimatedNumQuestionsRemaining={state.getEstimatedNumQuestionsRemaining()}
      pushResponse={pushResponse}
    /> :
    <Result
      candidateIds={state.getResult()}
    />
}

export default App;
