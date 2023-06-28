function Navbar() {
    const Button = () => {
        return (        
            <>
                <button className="headerButton">Sign In</button>
                <button className="headerButton">Sign Up</button>
            </>
        )};

    return(
        <div className="nav-bar">
            <button className="logo">Logo</button>
            <ul className="list">
            <li className="listitems">Home</li>
            <li className="listitems">About</li>
            <li className="listitems">Contact</li>
            </ul>
            <Button />
        </div>
    )
}

export default Navbar