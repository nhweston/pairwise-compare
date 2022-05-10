import { Box, Container } from '@mui/material';
import CandidateCard from './CandidateCard';

interface Props {
  leftId: string
  rightId: string
  numPairsKnown: number
  numPairsTotal: number
  estimatedNumQuestionsRemaining: number
  pushResponse: (response: boolean) => void
}

const Quiz = (props: Props) => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
      }}
    >
      <Box component="p">
        Which do you prefer? ({props.numPairsKnown} / {props.numPairsTotal})
      </Box>
      <Box component="p">
        Estimated questions remaining: {props.estimatedNumQuestionsRemaining}
      </Box>
      <Box
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <CandidateCard
          candidateId={props.leftId}
          onClick={() => props.pushResponse(true)}
        />
        <CandidateCard
          candidateId={props.rightId}
          onClick={() => props.pushResponse(false)}
        />
      </Box>
    </Container>
  )
};

export default Quiz;
