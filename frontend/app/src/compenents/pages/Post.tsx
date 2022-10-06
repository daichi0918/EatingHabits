import { FC, memo, useEffect, useState, useContext } from "react";

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";

export const Post: FC = memo(() => {
  return (
    <HomeHeaderLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="memo"
            multiline
            rows="3"
            defaultValue=""
            margin="normal"
            variant="outlined"
          // value={memo}
          />
        </Box>
      </Container>
    </HomeHeaderLayout>

  )
})
