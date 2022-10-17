import React, { FC, memo, useEffect, useState, useContext } from "react";
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
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


export const DailyPage: FC = memo(() => {

  const { userId } = useContext(AuthContext);

  const [lists, setLists] = useState<Array<ListType>>([]);

  const [trigger, setTrigger] = useState(false);

  const { getLists, loading } = useAllLists();

  useEffect(() => getLists(userId, setLists), [trigger])

  return (
    <HomeHeaderLayout>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </HomeHeaderLayout>
  )
})
