import { Box, Container } from "@mui/material";
import { candidatesById } from "../../data";

interface Props {
  candidateIds: string[]
}

const Result = (props: Props) => {
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
        Results
      </Box>
      <Box component="ol">{
        props.candidateIds.map(c => (
          <Box component="li" key={c}>{candidatesById[c].name}</Box>
        ))
      }</Box>
    </Container>
  )
};

export default Result;
