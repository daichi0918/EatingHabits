import { Box, Spinner, Stack, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { HeaderLayout } from "../templates/HeaderLayout";
import { useAllUsers } from "../../hooks/useAllUsers"
import { Link } from "react-router-dom";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), [])
  return (
    <HeaderLayout>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>

      ) : (
          <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <Link to={`/home/user_management/list`} key={user.id} >
                <WrapItem mx="auto">
                  <UserCard userName={user.name} userEmail={user.email} userGender={user.gender} />
                </WrapItem>
              </Link>

            ))}

          </Wrap>
        )}

    </HeaderLayout>
  )
})
