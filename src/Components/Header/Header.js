import React from "react";

import "./header.css";

function Header() {
    return (
        <header>
        {/* // <header style={styles.headerStyle} className="header"> */}
            <div className = "header">
                 <img src ="https://api.freelogodesign.org/files/f077bb1a586a4cc7afd80d94fe0a7eb1/thumb/logo_200x200.png?v=637652428960000000" alt = "logo" />
            </div>
        </header>         
    )
}

export default Header;