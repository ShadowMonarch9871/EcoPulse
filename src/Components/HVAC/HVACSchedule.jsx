import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  backdropClasses,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import BoxHeader from "../BoxHeader";
import DashboardBox from "../DashboardBox";
import { useTheme } from "@mui/material";
const HVACSchedule = () => {
  const { palette } = useTheme();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [rows, setRows] = useState((JSON.parse(localStorage.getItem('rows')))||[
    {
      name: "Row 1",
      time: "8:00AM-12:00PM",
      temperature: "20°C",
      humidity: "30%",
    },
    {
      name: "Row 2",
      time: "12:00PM-4:00PM",
      temperature: "21°C",
      humidity: "32%",
    },
    {
      name: "Row 3",
      time: "4:00PM-8:00PM",
      temperature: "22°C",
      humidity: "34%",
    },
    {
      name: "Row 4",
      time: "8:00PM-12:00AM",
      temperature: "23°C",
      humidity: "36%",
    },
    {
      name: "Row 5",
      time: "12:00AM-8:00AM",
      temperature: "24°C",
      humidity: "38%",
    },
  ]);

  const handleTemperatureChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].temperature = event.target.value;
    setRows(newRows);
    localStorage.setItem('rows', JSON.stringify(newRows));
  };
  
  const handleHumidityChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].humidity = event.target.value;
    setRows(newRows);
    localStorage.setItem('rows', JSON.stringify(newRows));
  };

  return (
    <DashboardBox>
      <BoxHeader
        title="HVAC Schedule"
        sideText="Change Temperature and Humidity"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TableContainer
        component={Paper}
        style={{ backgroundColor: palette.grey[400]}}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h2>Time</h2></TableCell>
              <TableCell align="right"><h2>Temperature(C)</h2></TableCell>
              <TableCell align="right"><h2>Humidity(%)</h2></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell align="right">
                  <TextField
                    value={row.temperature}
                    onChange={(event) => handleTemperatureChange(event, index)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    value={row.humidity}
                    onChange={(event) => handleHumidityChange(event, index)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardBox>
  );
};

export default HVACSchedule;
