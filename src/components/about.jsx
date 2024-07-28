import { Grid } from "@mui/material";

import storyline1 from '../assets/personal_pic2.jpg';

const About = () => {
    return (
        <section id="about" className="section disable-text-selection ">
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }} className="alignCenter">
                <Grid xs={12} sm={12} md={12} >
                    <h1 className="header1 hr-lines">ABOUT <span className="highlight">ME</span></h1>
                </Grid>
                <Grid xs={12} sm={12} md={12} className="about_section ">
                    <div className="about_con1 ">
                        <div className="align_about_storyline ">
                            <img className="about_storyline_image " src={storyline1} alt="This is my selfie" srcSet="" />
                        </div>
                    </div>
                    
                    <div className="about_con2  ">
                        <p className="header2 justify about_headline">Software Engineer with over 2 years of working experience in FinTech.</p>
                        <p className="paragraph justify about_margin_bottom">I'm a recent Software System Development graduate with a passion for building innovative solutions. During my studies, I actively expanded my skills through <span className="highlight">self-learning.</span></p>
                        <p className="paragraph justify about_margin_bottom">For the past year and a half, I've been working at a <span className="highlight">FinTech MNC</span> serving banks and insurance companies across Asia. This experience has allowed me to apply my knowledge in a real-world setting.</p>
                        <p className="paragraph justify ">I'm a <span className="highlight">team player</span> with a strong work ethic and a love for learning new technologies. I'm eager to leverage my skills and contribute to your next project.</p>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
}

export default About;