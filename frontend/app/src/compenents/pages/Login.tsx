// import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState<string>('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const navigate = useNavigate();

  const onClickLogin = () => navigate("/home");

  return (
    <div>
      ログイン画面
    </div>
    // <Flex alignItems="center" justifyContent="center" height="100vh">
    //   <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
    //     <Heading as="h1" size="lg" textAlign="center">EH manager</Heading>
    //     <Divider my={4} />
    //     <Stack spacing={6} py={4} px={10}>
    //       {/* <Input placeholder="Email" />
    //       <Input placeholder="Password" /> */}
    //       <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
    //       <PrimaryButton onClick={onClickLogin}>LOGIN</PrimaryButton>
    //     </Stack>

    //   </Box>
    // </Flex>
  )
})
