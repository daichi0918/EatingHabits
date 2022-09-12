// import {
//   Spinner,
//   Center,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
//   Grid,
//   Flex
// } from "@chakra-ui/react";
// import { DeleteIcon } from "@chakra-ui/icons"
import { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAllLists } from "../../hooks/useAllLists";
import { HeaderLayout } from "../templates/HeaderLayout";
import { ListAdd } from "../organisms/list/ListAdd";
import { ListType } from "../../types/api/list";
import { ListDeleteDialog } from "../organisms/list/ListDeleteDialog";
import { Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';


export const Lists: FC = memo(() => {

  const [lists, setLists] = useState<Array<ListType>>([]);

  const [trigger, setTrigger] = useState(false);

  const { getLists, loading } = useAllLists();

  const { userId } = useParams();

  useEffect(() => getLists(userId, setLists), [trigger])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  return (
    <HeaderLayout>
      {loading ? (
        // <Center h="100vh">
        //   <Spinner />
        // </Center>
        <Stack alignItems="center" justifyContent="center" style={{ marginTop: '300px' }}>
          <Box sx={{ alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        </Stack>

      ) : (
          <>
            {/* <Flex justify='center'>
              <div style={{ margin: "0 auto" }}>
                <TableContainer>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>Name</Th>
                        <Th>Delete</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {lists.map((list) => (
                        <Tr>
                          <Td>{list.name}</Td>
                          <Td>
                            <ListDeleteDialog userId={userId} id={list.id} setTrigger={setTrigger} />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
              <Center>
                <ListAdd userId={userId} lists={lists} setLists={setLists} setTrigger={setTrigger} />
              </Center> */}
            <Grid container style={{ marginTop: '100px' }}>
              <Grid item xs>
              </Grid>
              <Grid item xs={7.5}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {lists.map((list) => (
                    <ListItem
                      key={list.id}
                      disableGutters
                      secondaryAction={
                        <ListDeleteDialog userId={userId} id={list.id} setTrigger={setTrigger} />
                      }
                    >
                      <ListItemText primary={list.name} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
            <ListAdd userId={userId} lists={lists} setLists={setLists} setTrigger={setTrigger} />
          </>

        )
      }
    </HeaderLayout >
  )
})
