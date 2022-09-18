// import { Box, Spinner, Stack, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { HeaderLayout } from "../templates/HeaderLayout";
import { useAllUsers } from "../../hooks/useAllUsers"
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import { styled } from '@mui/system';

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), [])
  return (
    <HeaderLayout>
      {loading ? (
        <Stack alignItems="center" justifyContent="center" style={{ marginTop: '300px' }}>
          <Box sx={{ alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        </Stack>


      ) : (
          // <Wrap p={{ base: 4, md: 10 }}>
          //   {users.map((user) => (
          //     <Link to={`/home/user_management/${user.id}/list`} key={user.id} >
          //       <WrapItem mx="auto">
          //         <UserCard userName={user.name} userEmail={user.email} userGender={user.gender} />
          //       </WrapItem>
          //     </Link>

          //   ))}

          // </Wrap>
          <>
            {users.map((user) => (
              <Link to={`/home/list`} key={user.id} >
                <UserCard userName={user.name} userEmail={user.email} userGender={user.gender} />
              </Link>

            ))
            }
          </>
        )
      }

    </HeaderLayout>
  )
})
