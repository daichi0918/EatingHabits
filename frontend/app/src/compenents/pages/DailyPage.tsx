import React, { FC, memo, useEffect, useState, useContext, useCallback } from "react";
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
  },
  {
    id: createEventId(),
    title: "昼",
    start: todayStr // 時刻はTで結ぶ
  },
];


export const DailyPage: FC = memo(() => {

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt("イベントのタイトルを入力してください")?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }, []);
  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (
      window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)
    ) {
      clickInfo.event.remove();
    }
  }, []);

  const { userId } = useContext(AuthContext);

  const [lists, setLists] = useState<Array<ListType>>([]);

  const [trigger, setTrigger] = useState(false);

  const { getLists, loading } = useAllLists();

  useEffect(() => getLists(userId, setLists), [trigger])

  return (
    <HomeHeaderLayout>
      <StyledFullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        initialEvents={INITIAL_EVENTS}
        locales={allLocales}
        locale="ja"
        eventsSet={handleEvents}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
      <AddButton onClick={() => console.log("aaa")} />
    </HomeHeaderLayout>
  )
})
