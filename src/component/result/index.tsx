import { Box, Container, Stack } from "@mui/material";
import { candidatesById } from "../../data";
import BackButton from "../quiz/BackButton";

interface Props {
  candidateIds: string[]
  back: () => void
}

const Result = (props: Props) => {
  return (
    <Stack
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
        Results
      </Box>
      <Box component="ol">{
        props.candidateIds.map(c => (
          <Box component="li" key={c}>{candidatesById[c].name}</Box>
        ))
      }</Box>
      <BackButton onClick={props.back} />
    </Stack>
  )
};

export default Result;
