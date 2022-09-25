// import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  name: string;
  quantity: any;
  expired_at: string;
  notified_at: string | undefined | null;
  image: string | undefined | null;
  memo: string | undefined | null;
}

export const FoodCard: FC<any> = memo((props) => {
  const { name, quantity, expired_at, notified_at, image, memo } = props;
  return (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: 'auto', transform: 'scale(0.8)' }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {quantity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">EDIT</Button>
          <Button size="small">DELETE</Button>
        </CardActions>
      </Card>
    </Box>

  )
})
