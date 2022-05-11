import { Box, Container, Stack } from "@mui/material";

interface Props {
  onClick?: () => void
}

const BackButton = (props: Props) => {
  if (!props.onClick) {
    return (
      <Stack
        sx={{
          width: '100px',
          height: '50px',
          bgcolor: 'white',
          color: 'black',
          padding: '16px 8px 8px 8px',
          fontSize: 16,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '16px',
        }}
        onClick={props.onClick}
      >&nbsp;</Stack>
    );
  }
  return (
    <Stack
      sx={{
        width: '100px',
        height: '50px',
        bgcolor: 'white',
        color: 'black',
        border: '1px solid',
        padding: '16px 8px 8px 8px',
        borderRadius: 2,
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px',
      }}
      onClick={props.onClick}
    >Back</Stack>
  )
};

export default BackButton;
