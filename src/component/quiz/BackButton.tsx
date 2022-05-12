import { Button } from "@mui/material";

interface Props {
  onClick: () => void
}

const BackButton = (props: Props) => {
  return <Button onClick={props.onClick}>Back</Button>;
};

export default BackButton;
