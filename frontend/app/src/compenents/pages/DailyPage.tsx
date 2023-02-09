import React, { FC, memo, useEffect, useState, useContext, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg
} from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { EventInput } from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales-all";


import { AddButton } from "../atoms/button/AddButton";
import { useAllDiaries } from "../../hooks/useAllDiaries";
import { DiaryIndexType } from "../../types/api/diary";
import { DiaryContext } from "../../providers/DiaryProvider";

const StyledFullCalendar = styled(FullCalendar)({
  padding: '2px 4px',
  marginTop: '15px'
})


let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, "");  // 今日の日付をYYYY-MM-DD形式にする
export const createEventId = () => String(eventGuid++);
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "朝",
    start: todayStr,
    color: '#E3C576',
    type: 1
  },
  {
    id: createEventId(),
    title: "昼",
    start: todayStr, // 時刻はTで結ぶ
    color: '#67a8dd',
    type: 2
  },
  {
    id: createEventId(),
    title: "夕",
    start: todayStr, // 時刻はTで結ぶ
    color: '#F08300',
    type: 3
  },
  {
    id: createEventId(),
    title: "その他",
    start: todayStr, // 時刻はTで結ぶ
    color: '#734e30',
    type: 4
  }
];


export const DailyPage: FC = memo(() => {

  const { userId } = useContext(AuthContext);

  const { setDiaryId, trigger, setTrigger } = useContext(DiaryContext)

  const [diaries, setDiaries] = useState<Array<EventInput>>([]);

  const { getDiaries, loading } = useAllDiaries();

  useEffect(() => { getDiaries(userId, setDiaries) }, [trigger])

  const navigate = useNavigate()

  const onClickDailyNew = () => navigate("/home/daily/new")

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );

  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    console.log("id:" + clickInfo.event.id)
    setDiaryId(clickInfo.event.id)

    navigate("/home/daily/edit")
  }, []);

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
            <StyledFullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              selectable={true}
              editable={true}
              initialEvents={diaries}
              locales={allLocales}
              locale="ja"
              eventsSet={handleEvents}
              // select={handleDateSelect}
              eventClick={handleEventClick}
            />
            <AddButton onClick={onClickDailyNew} />
          </>
        )
      }
    </HomeHeaderLayout>
  )
})
