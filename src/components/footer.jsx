import { Grid, Item } from "@mui/material";

const Footer = () => {
    return (
        <section id="contactMe" className="footer disable-text-selection">
            <div className="subFooter">
                <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid xs={12} sm={6} md={6} >
                        <div>
                            <h1 className="footer_logo">LMW</h1>
                            <p className="paragraph justify">The day I understood everything, was the day I stopped trying to figure everything out. The day I knew peace was the day I let everything go.</p>
                            <p className="paragraph">- from C. JoyBell C</p>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={2} md={4}> </Grid>
                    <Grid xs={12} sm={4} md={2}>
                        <div>
                            <h2 className="header2">Contact Me</h2>
                            <a className="contactMeLink" href="http://" target="_blank" rel="noopener noreferrer" >Email</a>
                            <a className="contactMeLink" href="http://" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
                            <a className="contactMeLink" href="http://" target="_blank" rel="noopener noreferrer" >Github</a>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={12} md={12}>
                        <hr />
                    </Grid>
                    <Grid xs={12} sm={12} md={12}>
                        <p className="paragraph">© 2023 Lai Man Wai. All right reserved.</p>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

export default Footer;