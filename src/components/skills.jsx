import { Grid } from "@mui/material";

const Skills = () => {
    return (
        <section id="skills" className="section disable-text-selection">
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }} className="alignCenter">
                <Grid xs={12} sm={12} md={12}>
                    <h1 className="header1 hr-lines3">SKILLS</h1>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <h2 className="header2">Working <span className="highlight">MY Skills</span></h2>
                </Grid>
            </Grid>
        </section>
    );
}

export default Skills;