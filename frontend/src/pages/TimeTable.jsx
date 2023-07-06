import React from 'react';
import { DatePicker, DateRangePicker } from '@mui/lab';
import { TextField, Box } from '@mui/material';

export default function Calendrier() {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <DateRangePicker
        startText="Date de début"
        endText="Date de fin"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} variant="outlined" />
            <Box sx={{ mx: 2 }}> à </Box>
            <TextField {...endProps} variant="outlined" />
          </React.Fragment>
        )}
      />
      <DatePicker
        date={selectedDate}
        onChange={handleDateChange}
        renderInput={(props) => <TextField {...props} variant="outlined" />}
      />
    </Box>
  );
}


