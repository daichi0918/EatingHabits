// import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  userName: string;
  userEmail: string;
  userGender: string;
}

export const UserCard: FC<Props> = memo((props) => {
  const { userName, userEmail, userGender } = props;
  return (
    // <div>usercard</div>
    // <Box w="200px" h="160px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
    //   <Stack textAlign="center">
    //     <Text fontSize="lg" fontWeight="bold">{userName}</Text>
    //     <Text fontSize="sm" color="gray">{userEmail}</Text>
    //     <Text>{userGender}</Text>
    //   </Stack>
    // </Box>
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {userEmail}
          </Typography>
          <Typography variant="h5" component="div">
            {userName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {userGender}
          </Typography>
        </CardContent>
      </Card>
    </Box>


  )
})
