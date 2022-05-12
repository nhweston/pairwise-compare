import { Box, Grid, Stack } from '@mui/material';
import { CandidateId } from '../../data';
import BackButton from './BackButton';
import CandidateCard from './CandidateCard';
import ProgressBar from './ProgressBar';

interface Props {
  swap: boolean
  leftId: CandidateId
  rightId: CandidateId
  numPairsKnown: number
  numPairsTotal: number
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
            candidateId={props.swap ? props.rightId : props.leftId}
            onClick={() => props.pushResponse(!props.swap)}
          />
        </Grid>
        <Grid item xs={6}>
          <CandidateCard
            candidateId={props.swap ? props.leftId : props.rightId}
            onClick={() => props.pushResponse(props.swap)}
          />
        </Grid>
      </Grid>
      <BackButton onClick={props.back} />
    </Stack>
  )
};

export default Quiz;
