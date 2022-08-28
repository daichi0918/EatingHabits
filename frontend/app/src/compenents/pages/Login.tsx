import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">EH manager</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          {/* <Input placeholder="Email" />
          <Input placeholder="Password" /> */}
          <Input placeholder="ユーザーID" />
          <PrimaryButton>LOGIN</PrimaryButton>
        </Stack>

      </Box>
    </Flex>
  )
})
