import { Box, Container, Grid, Stack } from '@mui/material';
import { CandidateId } from '../../data';
import BackButton from './BackButton';
import CandidateCard from './CandidateCard';
import ProgressBar from './ProgressBar';

interface Props {
  leftId: CandidateId
  rightId: CandidateId
  numPairsKnown: number
  numPairsTotal: number
  estimatedNumQuestionsRemaining: number
  pushResponse: (response: boolean) => void
  back: () => void
}

const Quiz = (props: Props) => {
  return (
    <Stack
      sx={{
        padding: '8px',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ProgressBar progress={props.numPairsKnown / props.numPairsTotal} />
      <Box component="p" sx={{ fontSize: 'calc(6vmin)' }}>
        Which do you prefer?
      </Box>
      <Grid container spacing={2} maxWidth="600px">
        <Grid item xs={6}>
          <CandidateCard
            candidateId={props.leftId}
            onClick={() => props.pushResponse(true)}
          />
        </Grid>
        <Grid item xs={6}>
          <CandidateCard
            candidateId={props.rightId}
            onClick={() => props.pushResponse(false)}
          />
        </Grid>
      </Grid>
      <BackButton onClick={props.back} />
    </Stack>
  )
};

export default Quiz;
