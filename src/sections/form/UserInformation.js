import { useState } from "react";

// material-ui
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const UserInformation = () => {
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [bloodGroup, setBloodGroup] = useState('');

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleRadioChange = (event) => {
    setGender(event.target.value);
  };

  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="First Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Middle Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Last Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Mobile No" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Email" />
      </Grid>
      <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={birthday}
        onChange={(newValue) => {
            setBirthday(newValue)
        }}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Age" />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
  <InputLabel id="blood-group-select-label">Blood Group</InputLabel>
  <Select
    labelId="blood-group-select-label"
    value={bloodGroup}
    label="Blood Group"
    onChange={handleBloodGroupChange}
  >
    <MenuItem value="a">A</MenuItem>
    <MenuItem value="b">B</MenuItem>
    <MenuItem value="ab">AB</MenuItem>
    <MenuItem value="o">O</MenuItem>
  </Select>
</FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Height" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Weight" />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id="gender-radio-buttons-label" color="secondary">
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender-radio-buttons-label"
            value={gender}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id="marital-status-radio-label" color="secondary">
            Marital Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="marital-status-radio-label"
            value={maritalStatus}
            onChange={handleMaritalStatusChange}
          >
            <FormControlLabel value="single" control={<Radio />} label="Single" />
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="Married"
            />
             <FormControlLabel
              value="divorced"
              control={<Radio />}
              label="Divorced"
            />
             <FormControlLabel
              value="widowed"
              control={<Radio />}
              label="Widowed"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default UserInformation;
