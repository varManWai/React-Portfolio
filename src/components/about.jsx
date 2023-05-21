import { Grid } from "@mui/material";

const About = () => {
    return (
        <div className="section">
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid xs={12} sm={12} md={12}>
                    <h1 className="header1 hr-lines">ABOUT <span className="highlight">ME</span></h1>
                </Grid>
                <Grid xs={12} sm={12} md={12} >
                    <p className="header2 justify">I'm currently working at <a href="" className="link highlight">Silverlake Axis</a> as an industrial trainee.</p>

                    <p className="header2 justify">After that, I will graduate with my Bachelor of Software System Development from <a href="" className="link highlight">Tunku Abdul Rahman University of Management and Technology</a>.</p>

                    <p className="header2 justify">I am looking for a job opportunity after graduation.</p>
                </Grid>
            </Grid>


        </div>
    );
}

export default About;