import { Box, Container, Stack } from "@mui/material";
import { candidatesById } from "../../data";
import CandidateImage from "./CandidateImage";

interface Props {
  candidateId: string
  onClick: () => void
}

const CandidateCard = (props: Props) => {
  const { name, image, website } = candidatesById[props.candidateId];
  const links =
    typeof website === 'string' ?
    <p style={{ textAlign: 'center' }}><a href={website} target="_blank">View policies</a></p> : (
      <p style={{ textAlign: 'center' }}>View policies: {
        website.flatMap(([name, url], i) =>
          i === website.length - 1 ?
            [<a href={url} target="_blank">{name}</a>] :
            [<a href={url} target="_blank">{name}</a>, <span> | </span>]
        )
      }</p>
    );
  return (
    <>
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
      {links}
    </>
  )
};

export default CandidateCard;
