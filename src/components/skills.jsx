import { Grid } from "@mui/material";


import docker from "../assets/skills/docker.svg";
import express from "../assets/skills/express-original.svg";
import firebase from "../assets/skills/firebase.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import gitlab from "../assets/skills/gitlab.svg";
import java from "../assets/skills/java.svg";
import javascript from "../assets/skills/javascript.svg";
import jenkins from "../assets/skills/jenkins.svg";
import jira from "../assets/skills/jira.svg";
import jira2 from "../assets/skills/jira2.svg";
import json from "../assets/skills/json.svg";
import linux from "../assets/skills/linux.svg";
import mongodb from "../assets/skills/mongodb.svg";
import mysql from "../assets/skills/mysql.svg";
import next from "../assets/skills/next-js.svg";
import nodejs from "../assets/skills/nodejs-original.svg";
import react from "../assets/skills/react-javascript-js-framework-facebook.svg";
import scss2 from "../assets/skills/scss2.svg";
import tailwind from "../assets/skills/tailwind-css.svg";
import windows from "../assets/skills/windows.svg";
import xml from "../assets/skills/xml.svg";
import yaml from "../assets/skills/yaml.svg";

const Skills = () => {
    return (
        <section id="skills" className="section disable-text-selection">
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }} className="alignCenter">
                <Grid xs={12} sm={12} md={12}>
                    <h1 className="header1 hr-lines3">SKILLS</h1>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <h2 className="header2"><span className="highlight">My Skills</span></h2>
                </Grid>
                <Grid xs={12} sm={12} md={12} className="skills-cont">
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={java} alt="This is Skills icon" srcSet="" /><span className="skills">java</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={javascript} alt="This is Skills icon" srcSet="" /><span className="skills">javascript</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={next} alt="This is Skills icon" srcSet="" /><span className="skills">next</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={react} alt="This is Skills icon" srcSet="" /><span className="skills">react</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={nodejs} alt="This is Skills icon" srcSet="" /><span className="skills">nodejs</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={express} alt="This is Skills icon" srcSet="" /><span className="skills">express</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={scss2} alt="This is Skills icon" srcSet="" /><span className="skills">scss2</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={tailwind} alt="This is Skills icon" srcSet="" /><span className="skills">tailwind</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={mongodb} alt="This is Skills icon" srcSet="" /><span className="skills">mongodb</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={mysql} alt="This is Skills icon" srcSet="" /><span className="skills">mysql</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={firebase} alt="This is Skills icon" srcSet="" /><span className="skills">firebase</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={json} alt="This is Skills icon" srcSet="" /><span className="skills">json</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={xml} alt="This is Skills icon" srcSet="" /><span className="skills">xml</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={yaml} alt="This is Skills icon" srcSet="" /><span className="skills">yaml</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={git} alt="This is Skills icon" srcSet="" /><span className="skills">git</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={github} alt="This is Skills icon" srcSet="" /><span className="skills">github</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={gitlab} alt="This is Skills icon" srcSet="" /><span className="skills">gitlab</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={docker} alt="This is Skills icon" srcSet="" /><span className="skills">docker</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={jenkins} alt="This is Skills icon" srcSet="" /><span className="skills">jenkins</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={jira} alt="This is Skills icon" srcSet="" /><span className="skills">jira</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={jira2} alt="This is Skills icon" srcSet="" /><span className="skills">jira2</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={windows} alt="This is Skills icon" srcSet="" /><span className="skills">windows</span></button>
                    <button className="skills-cont-btn" disabled><img className="SkillsIcon" src={linux} alt="This is Skills icon" srcSet="" /><span className="skills">linux</span></button>
                </Grid>
            </Grid>
        </section>
    );
}

export default Skills;