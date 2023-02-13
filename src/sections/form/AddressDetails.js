import { useState } from "react";

// material-ui
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    address1: yup.string().required('AddressLine 1 is a required field'),
    address2: yup.string().required('AddressLine 2 is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field'),
    country: yup.string().required('Country is a required field'),
    pin: yup.string().required('PinCode is a required field')

  });

const AddressDetails = () => {
  const cities = ["Ahemdabad", "Banglore", "Mumbai", "Jaipur"];
  const states = ["Gujrat", "Karanataka", "Maharastra", "Rajasthan"];
  const countries = ["India", "UK", "Russia", "Chaina"];

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      code: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('adress details', values)
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField id='address1' name= 'address1' fullWidth label="Address Line 1" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id='address2' name= 'address2' fullWidth label="Address Line 2" />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="city-select-label">City</InputLabel>
          <Select
            labelId="city-select-label"
            label="City"
            name="city"
            id= "city"
            value={city}
            onChange={handleCityChange}
          >
            {cities.map((city, i) => {
              return (
                <MenuItem value={city} key={i}>
                  {city}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="state-select-label">State</InputLabel>
          <Select
            labelId="state-select-label"
            label="State"
            name="state"
            id= "state"
            value={state}
            onChange={handleStateChange}
          >
            {states.map((state, i) => {
              return (
                <MenuItem value={state} key={i}>
                  {state}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            label="Country"
            name="country"
            id= "country"
            value={country}
            onChange={handleCountryChange}
          >
            {countries.map((country, i) => {
              return (
                <MenuItem value={country} key={i}>
                  {country}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="pin" name="pin" fullWidth label="Pin Code" />
      </Grid>
    </Grid>
    </form>
    </>
  );
};

export default AddressDetails;
