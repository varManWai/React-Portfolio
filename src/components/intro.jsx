import '../App.css';
import logo from "../assets/personalImage.png";

import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Intro = () => {
    return (
        <section id="home" className="section marginTop20 disable-text-selection">
            <Grid container  columnSpacing={{ xs: 0, sm: 0, md: 0 }} className="alignCenter">
                <Grid xs={12} sm={12} md={6} className="alignCenter">
                    <img className="introImage" src={logo} alt="This is my selfie" srcSet="" />
                </Grid>
                <Grid xs={12} sm={12} md={6} className="alignCenter">
                    <div>
                        <h1 className="header1">Hello, I am <span className="highlight">Lai Man Wai</span></h1>
                        <h2 className="header2">A Software Engineer based in Malaysia</h2>

                        <div className='info_btn_alignLeft marginTop40'>
                            <div>
                                <a href="#contact" className='info_btn1 info_btn_spacing header2 justify'>Contact Me</a>
                            </div>
                            <div>
                                <a href="#about" className='info_btn2 info_btn_spacing header2 justify'>Learn More <ArrowForwardIcon className='info_icon'/></a>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
}

export default Intro;