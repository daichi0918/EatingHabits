// import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Top: FC = memo(() => {
  const [userId, setUserId] = useState<string>('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const navigate = useNavigate();

  const onClickLogin = () => navigate("/home");

  return (
    <div>
      ログイン画面
    </div>
  )
})
