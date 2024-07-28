import * as React from "react";
import { useState } from "react";

import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SaveIcon from '@mui/icons-material/Save';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const theme = createTheme({
    palette: {
        theme:{
            highlight: "#23ce6b",
            primary: "#f6f8ff",
            paragraph: "#272d2d",
            hover: "#188747",
        },
    },
  });

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isAvaialble, setIsAvailable] = useState(false);

  const onEmailChange = (event) => {
    setInputData({ ...inputData, email: event.target.value });
  };
  const onNameChange = (event) => {
    setInputData({ ...inputData, name: event.target.value });
  };
  const onMsgChange = (event) => {
    setInputData({ ...inputData, message: event.target.value });
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData();

    formData.append("name", inputData.name);
    formData.append("email", inputData.email);
    formData.append("message", inputData.message);
    formData.append("access_key", process.env.REACT_APP_WEB3FORM_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setInputData({ email: "", name: "", message: "" });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setIsAvailable(true);

    setTimeout(() => {
      setIsAvailable(false);
    }, 10000);
  };

  return (
    <ThemeProvider theme={theme}>
    <section id="contact" className="section disable-text-selection">
      <Grid columnSpacing={{ xs: 0, sm: 0, md: 0 }} container direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Grid xs={12} sm={12} md={12}>
          <h1 className="header1 hr-lines2">CONTACT <span className="highlight">ME</span></h1>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <h2 className="header2 marginTop-0">Have any idea in mind?</h2>
          <p className="paragraph">My inbox in always available for new opportunities.</p>
          <div className="social-media">
            <a href="mailto:isaacworking31@gmail.com"><span><EmailIcon className="contact-icon" sx={{ fontSize: 30 }} />Email</span></a>
            <a href="https://www.linkedin.com/in/laimanwai/?trk=opento_sprofile_goalscard" rel="noopener noreferrer" target="_blank" ><span><LinkedInIcon className="contact-icon" sx={{ fontSize: 30 }} />LinkedIn</span></a>
            <a href="https://github.com/varManWai" rel="noopener noreferrer" target="_blank"  ><span><GitHubIcon className="contact-icon" sx={{ fontSize: 30 }} />Github</span></a>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} className="contact-form-cont">
            <div >
                <form onSubmit={onSubmit} >
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email"
                    color="success"
                    value={inputData.email}
                    onChange={onEmailChange}
                    placeholder="example@email.com"
                    inputProps={{ style: { fontSize: 16 } }} // font size of input text
                    InputLabelProps={{
                    shrink: true,
                    style: { fontSize: 16 },
                    }}
                    className="contact-form-fields"
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Name"
                    size="normal"
                    color="success"
                    value={inputData.name}
                    onChange={onNameChange}
                    placeholder="Full Name"
                    inputProps={{ sx: { fontSize: 16 } }} // font size of input text
                    InputLabelProps={{
                    sx:{ fontSize: 16 },
                    shrink: true,
                    }} // font size of input label
                    className="contact-form-fields"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    required
                    multiline
                    rows={4}
                    fullWidth
                    color="success"
                    value={inputData.message}
                    onChange={onMsgChange}
                    placeholder="Your Message"
                    inputProps={{ style: { fontSize: 16 } }} // font size of input text
                    InputLabelProps={{
                    shrink: true,
                    style: { fontSize: 16 },
                    }} // font size of input label
                    className="contact-form-fields"
                />
                {isAvaialble === false ? (
                    <ColorButton
                    type="submit"
                    variant="contained"
                    className="contact-btn"
                    style={{ fontSize: 16,backgroundColor:"#23ce6b", fontFamily:"Kanit", color:"#272d2d"}}
                    >
                    Send
                    </ColorButton>
                ) : (
                    <LoadingButton
                    type="submit"
                    variant="contained"
                    className="contact-btn align-center"
                    loading
                    loadingPosition="center"
                    startIcon={<SaveIcon style={{height:30, width:16}}/>}
                    >
                    {" "}
                    </LoadingButton>
                )}
                <div className="CM-result">{result}</div>
                </form>
            </div>
        </Grid>
      </Grid>
    </section>
    </ThemeProvider>
  );
};

export default Contact;
