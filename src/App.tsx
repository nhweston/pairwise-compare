import { Component, useEffect, useState } from 'react';
import { QuizState } from './lib';
import { AustralianState, ballots, CandidateId, candidates, getCandidateList } from './data';
import Quiz from './component/quiz';
import Result from './component/result';
import Start from './component/start';

const App = () => {
  const [ausState, setAusState] = useState<AustralianState | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [pair, setPair] = useState<[CandidateId, CandidateId] | null>(null);
  const pushResponse = (response: boolean) => {
    const stateNext = quizState!.pushResponse(response);
    setQuizState(stateNext);
    const pairNext = stateNext.getNextPair() as [CandidateId, CandidateId];
    setPair(pairNext);
  }
  const back = () => {
    if (!quizState) {
      return;
    }
    const statePrev = quizState.previous;
    setQuizState(statePrev);
    if (!statePrev) {
      setPair(null);
      setAusState(null);
      return;
    }
    setPair(statePrev.getNextPair() as [CandidateId, CandidateId]);
  };
  const selectState = (state: AustralianState) => {
    setAusState(state);
    const newQuizState = QuizState.create(getCandidateList(state));
    setQuizState(newQuizState);
    setPair(newQuizState.getNextPair()! as [CandidateId, CandidateId]);
  }
  // preload images
  useEffect(() => {
    candidates.forEach(({ image }) => {
      const images = typeof image === 'string' ? [image] : image ? image : [];
      for (const i of images) {
        const img = new Image();
        img.src = i;
      }
    });
  });
  if (quizState && pair) {
    return (
      <Quiz
        leftId={pair[0]}
        rightId={pair[1]}
        numPairsKnown={quizState.getNumPairsKnown()}
        numPairsTotal={quizState.getNumPairsTotal()}
        estimatedNumQuestionsRemaining={quizState.getEstimatedNumQuestionsRemaining()}
        pushResponse={pushResponse}
        back={back}
      />
    );
  }
  if (quizState) {
    return (
      <Result
        ballot={ballots[ausState!]}
        candidateIds={quizState.getResult() as [CandidateId, CandidateId]}
        back={back}
      />
    );
  }
  return <Start selectState={selectState} />
}

export default App;
