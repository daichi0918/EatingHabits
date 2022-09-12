// import { Button } from "@chakra-ui/react";
import { Button } from "@mui/material";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    // <Button onClick={onClick}>
    //   {children}
    // </Button>
    <Button onClick={onClick}>
      {children}
    </Button>
  )
})
