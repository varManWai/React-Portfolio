import '../App.css';
import logo from "../assets/personal.svg";

const Intro = () => {
    return (
        <div>
            
            <img className="introImage" src={logo} alt="This is my photo" srcSet="" />

            <div>
                <h1 className="header1">Hello, I am <span className="highlight">Lai Man Wai</span></h1>
                <h2 className="header2">A Software Engineer based in Malaysia</h2>
            </div>
        </div>
    );
}

export default Intro;