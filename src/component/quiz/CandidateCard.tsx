import { Box, Container, Stack } from "@mui/material";
import { candidatesById } from "../../data";
import CandidateImage from "./CandidateImage";

interface Props {
  candidateId: string
  onClick: () => void
}

const CandidateCard = (props: Props) => {
  const { name, image } = candidatesById[props.candidateId];
  return (
    <Container
      disableGutters
      sx={{
        width: '100%',
        height: '250px',
        bgcolor: 'white',
        color: 'black',
        border: '1px solid',
        padding: '16px 8px 8px 8px',
        borderRadius: 2,
        fontSize: 36,
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          bgcolor: '#EEEEEE',
        },
      }}
      onClick={props.onClick}
    >
      <Stack>
        <CandidateImage image={image} />
        <Stack
          justifyContent="center"
          sx={{
            textAlign: 'center',
            fontSize: 16,
            height: '100px',
          }}
        >
        <p>{name}</p>
        </Stack>
      </Stack>
    </Container>
  )
};

export default CandidateCard;
