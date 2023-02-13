import React, { useState } from "react";

// material-ui
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

// project imports
import AddressDetails from "../sections/form/AddressDetails";
import UserInformation from "../sections/form/UserInformation";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function StepWrapper({ children, value, index, ...other }) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`form-tabpanel-${index}`}
        aria-labelledby={`form-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  return (
    <>
      <Card sx={{ py: 3, m: 5 }}>
        <CardContent>
        <>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Alert sx={{ my: 3 }}>
                All steps completed - you&apos;re finished
              </Alert>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset} color="error" variant="contained">
                  Reset
                </Button>
              </Box>
            </>
          ) : (
            <>
              <StepWrapper value={activeStep} index={0}>
              <UserInformation/>
              </StepWrapper>
              <StepWrapper value={activeStep} index={1}>
               <AddressDetails />
              </StepWrapper>
              <StepWrapper value={activeStep} index={2}>
                <Typography>
                  Vivamus sed odio dictum, sollicitudin neque in, sagittis erat.
                  Cras feugiat faucibus luctus. Pellentesque sit amet sagittis
                  sapien. Nunc pharetra molestie ante, non posuere est tincidunt
                  quis. Nunc venenatis lobortis magna sit amet sollicitudin. Nam
                  porta neque eu condimentum dignissim. Cras vestibulum dui et
                  ex dignissim gravida. Nam elementum nec urna ut sagittis.
                  Nullam id scelerisque nunc, in ultricies orci.
                </Typography>
              </StepWrapper>
              <Stack direction='row' spacing={2} sx={{pl: 4}}>
              <Button
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  variant="contained"
                  color={
                    activeStep === steps.length - 1 ? "success" : "primary"
                  }
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Stack>
            </>
          )}
        </>
        </CardContent>
      </Card>
    </>
  );
};

export default Form;
