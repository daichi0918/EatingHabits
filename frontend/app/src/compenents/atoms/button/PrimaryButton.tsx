// import { Button } from "@chakra-ui/react";
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
    <button>
      {children}
    </button>
  )
})
