import { Grid } from "@mui/material";

const Experiences = () => {
    return (
        <section id="work" className="section disable-text-selection">
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid xs={12} sm={12} md={12}>
                    <h1 className="header1 hr-pnes2">EXPERIENCES</h1>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <div className="paper-cont">
                        <div>
                            <h3 className="inline header3-withoutMar"><span className="highlight">Silverlake Axis</span></h3>
                            <h3 className="inline header3-withoutMar">Feb 2023 - Aug 2024</h3>                            
                        </div>
                        <h2 className="header2-withoutMar">Software Engineer</h2>
                        
                        {/* <p className="paragraph justify about_margin_bottom">I'm a recent Software System Development graduate with a passion for building innovative solutions. During my studies, I actively expanded my skills through <span className="highpght">self-learning.</span></p> */}
                        <p className="paragraph-withoutMar justify about_margin_bottom">created WebService Java methods and objects, then uploaded the source code to Gitea for collaboration.</p>
                        
                    </div>
                </Grid>
            </Grid>
        </section>
    );
}

export default Experiences;