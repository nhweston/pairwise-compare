import { Box } from "@mui/material";
import { candidatesById } from "../../data";

interface Props {
  candidateId: string
  onClick: () => void
}

const CandidateCard = (props: Props) => {
  const { name } = candidatesById[props.candidateId];
  return (
    <Box
      sx={{
        width: 400,
        height: 300,
        bgcolor: 'white',
        color: 'black',
        border: '1px solid',
        p: 1,
        borderRadius: 2,
        fontSize: 36,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        '&:hover': {
          bgcolor: '#EEEEEE',
        },
      }}
      onClick={props.onClick}
    >{name}</Box>
  )
};

export default CandidateCard;
