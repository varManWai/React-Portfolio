import '../App.css';
import logo from "../assets/personal.svg";

import Grid from '@mui/material/Grid';

const Intro = () => {
    return (
        <div className="section">
            <Grid container  columnSpacing={{ xs: 0, sm: 0, md: 0 }} className="alignCenter">
                <Grid xs={12} sm={12} md={6} className="alignCenter">
                    <img className="introImage" src={logo} alt="This is my photo" srcSet="" />
                </Grid>
                <Grid xs={12} sm={12} md={6} className="alignCenter">
                    <div>
                        <h1 className="header1">Hello, I am <span className="highlight">Lai Man Wai</span></h1>
                        <h2 className="header2">A Software Engineer based in Malaysia</h2>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Intro;