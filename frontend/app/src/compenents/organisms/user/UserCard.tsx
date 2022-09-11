// import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  userName: string;
  userEmail: string;
  userGender: string;
}

export const UserCard: FC<Props> = memo((props) => {
  const { userName, userEmail, userGender } = props;
  return (
    <div>usercard</div>
    // <Box w="200px" h="160px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
    //   <Stack textAlign="center">
    //     <Text fontSize="lg" fontWeight="bold">{userName}</Text>
    //     <Text fontSize="sm" color="gray">{userEmail}</Text>
    //     <Text>{userGender}</Text>
    //   </Stack>
    // </Box>
  )
})
