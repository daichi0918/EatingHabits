import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
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
    <HomeHeaderLayout>
      {loading ? (
        <Stack alignItems="center" justifyContent="center" style={{ marginTop: '300px' }}>
          <Box sx={{ alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        </Stack>


      ) : (
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

    </HomeHeaderLayout>
  )
})
