import { Stack } from "@mui/material";

interface Props {
  image: string | null
}

const CandidateImage = (props: Props) => {
  const { image } = props;
  return (
    <Stack
      justifyContent="center"
      sx={{
        width: '100%',
        height: '150px',
      }}
    >{
      image &&
        <img
          src={image}
          style={{
            objectFit: 'contain',
            maxHeight: '150px',
          }}
        />
    }</Stack>
  );
};

export default CandidateImage;
