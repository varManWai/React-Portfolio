import { Grid } from "@mui/material";

const Experiences = () => {
    return (
        <div className="section">
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid xs={12} sm={12} md={12}>
                    <h1 className="header1 hr-lines2">EXPERIENCES</h1>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <h2 className="header2">Working <span className="highlight">Experiences</span></h2>
                </Grid>
            </Grid>
        </div>
    );
}

export default Experiences;