import { FC, memo, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useAllLists } from "../../hooks/useAllLists";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { ListAdd } from "../organisms/list/ListAdd";
import { ListType } from "../../types/api/list";
import { ListDeleteDialog } from "../organisms/list/ListDeleteDialog";
import { AuthContext } from "../../App";
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
import CssBaseline from '@mui/material/CssBaseline';


export const Lists: FC = memo(() => {

  const { userId } = useContext(AuthContext);

  const [lists, setLists] = useState<Array<ListType>>([]);

  const [trigger, setTrigger] = useState(false);

  const { getLists, loading } = useAllLists();

  useEffect(() => getLists(userId, setLists), [trigger])

  return (
    <HomeHeaderLayout>
      <CssBaseline />
      {loading ? (
        <Stack alignItems="center" justifyContent="center" style={{ marginTop: '300px' }}>
          <Box sx={{ alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        </Stack>

      ) : (
          <>
            {/* <Box
              sx={{
                paddingTop: 12,
                marginTop: 2,
                marginBottom: 0,
                paddingBottom: 0,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f9f5eb'
              }}> */}
            <Grid container style={{ marginTop: '200px' }}>
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
            {/* </Box> */}

          </>
        )
      }
    </HomeHeaderLayout >
  )
})
