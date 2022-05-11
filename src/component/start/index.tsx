import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { AustralianState, states } from '../../data';

interface Props {
  selectState: (state: AustralianState) => void
}

const Start = (props: Props) => {
  return (
    <Stack
      sx={{
        padding: '8px',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box component="p" sx={{ margin: '16px', fontSize: 'calc(6vmin)' }}>
        Preferences Calculator
      </Box>
      <Box component="p" sx={{ margin: '16px', fontSize: 'calc(4vmin)' }}>
        Select your state or territory
      </Box>
      <Stack>{
        states.map(s => (<Button key={s} onClick={() => props.selectState(s)}>{s}</Button>))
      }</Stack>
    </Stack>
  )
};

export default Start;
