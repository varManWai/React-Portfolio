

const NavBar = () => {
    return (
        <div>
            <h1 className="logo">LAI MAN WAI</h1>
            <div>
                <a href="#home" className="navbar_link paragraph">Home</a>
                <a href="#about" className="navbar_link paragraph">About</a>
                <a href="#experiences" className="navbar_link paragraph">Experiences</a>
                <a href="#projects" className="navbar_link paragraph">Projects</a>
                <button className="button paragraph">Contact Me</button>
            </div>

        </div>
    );
}

export default NavBar;