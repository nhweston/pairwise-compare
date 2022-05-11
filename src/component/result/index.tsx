import { Box, Container, Stack } from "@mui/material";
import { candidatesById, CandidateId, Ballot } from "../../data";
import BackButton from "../quiz/BackButton";

interface Props {
  ballot: Ballot
  candidateIds: CandidateId[]
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
      }}
    >
      <Box component="p" style={{ fontSize: 'calc(6vmin)' }}>
        Results
      </Box>
      <Box component="ol" style={{ fontSize: '16px' }}>{
        props.candidateIds.map(c => (
          <Box component="li" key={c}>{candidatesById[c].name} <b>(Group {props.ballot[c]})</b></Box>
        ))
      }</Box>
      <BackButton onClick={props.back} />
    </Stack>
  )
};

export default Result;
