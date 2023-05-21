import { Grid } from "@mui/material";

const Projects = () => {
    return (
        <div className="section">
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid xs={12} sm={12} md={12}>
                    <h1 className="header1 hr-lines">PROJECTS</h1>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, maiores a exercitationem cumque dolor facere possimus hic, id impedit repellat fugit rerum ipsam placeat officia.</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;