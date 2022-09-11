// import { extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         backgroundColor: "gray.100",
//         color: "gray.800"
//       }
//     }
//   }
// });

// export default theme

import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#EDF2F7'
    }
  },
});

export default theme
