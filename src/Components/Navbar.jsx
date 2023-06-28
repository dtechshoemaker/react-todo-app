import { useState } from "react";

function Navbar() {
    const Button = () => {
        const [count, setCount] = useState(null);
        return (        
            <>  <p>You clicked {count} times</p>
                <button className="headerButton" onClick={() => {
                   setCount(count + 1);
                }}>Sign In</button>
                <button className="headerButton" onClick={() => {
                    setCount(count - 1);
                }}>Sign Up</button>
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