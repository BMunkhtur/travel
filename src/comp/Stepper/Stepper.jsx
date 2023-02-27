import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { ArrowDropDown } from "@mui/icons-material";
const steps = [
  "Аялалын мэдээлэл",
  "Хэрэглэчийн мэдээлэл",
  "Дансны мэдээлэл",
  "Баталгаажуулалт",
];
export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          marginTop: "10%",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 ? (
          <Grid>
            <Grid>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                }}
              >
                <img src="pic/12.png" alt="" width={420} height={310} />
                <Box
                  sx={{
                    color: "dark",
                    position: "absolute",
                    top: "75%",
                    left: "10%",
                    color: "white",
                    fontSize: "28px",
                  }}
                >
                  name
                </Box>
              </Box>
            </Grid>{" "}
          </Grid>
        ) : (
          <div></div>
        )}
        {activeStep === 1 ? (
          <Grid>
            {" "}
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Имайл хаяг"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Утас"
                name="phone"
                autoComplete="phone"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Хаяг"
                name="address"
                autoComplete="address"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id=""
                label="test"
                name="test"
                autoComplete="test"
                autoFocus
              />
            </Box>
          </Grid>
        ) : (
          <div></div>
        )}
        {activeStep === 2 ? (
          <Grid>
            <ArrowDropDown></ArrowDropDown>
            <TextField
              margin="normal"
              required
              fullWidth
              id=""
              label="Дансны нэр"
              name="test"
              autoComplete="test"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id=""
              label="Дансны дугаар"
              name="test"
              autoComplete="test"
              autoFocus
            />
          </Grid>
        ) : (
          <div></div>
        )}
        {activeStep === 3 ? <Grid>d</Grid> : <div></div>}

        {activeStep === 4 ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Захиалга амжилттай</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Цэвэрлэх</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Буцах
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Алгасах
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Баталгаажуулах" : "Дараах"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}
