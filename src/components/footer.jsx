import { Grid, Item } from "@mui/material";

const Footer = () => {
    return (
        <div className="footer">
            <Grid container  columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid xs={12} sm={6} md={6} >
                    <div>
                        <h1 className="logo">LAI MAN WAI</h1>
                        <p className="paragraph justify">The day I understood everything, was the day I stopped trying to figure everything out. The day I knew peace was the day I let everything go.</p>
                        <p>- from C. JoyBell C</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={2} md={4}> </Grid>
                <Grid xs={12} sm={4} md={2}>
                    <div>
                        <h2 className="header2">Contact Me</h2>
                        <p className="paragraph">Email</p>
                        <p className="paragraph">LinkedIn</p>
                        <p className="paragraph">Github</p>
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
    );
}

export default Footer;