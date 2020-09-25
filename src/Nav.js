import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
                className="nav__logo" />

            <img
                src="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/71083781_10214932870304025_3054890081639727104_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=ioq9iawNkg4AX-qeqZu&_nc_ht=scontent.fbne6-1.fna&oh=37eebb1cd9b7fec4a350cf51f19e7a72&oe=5F9352F0"
                alt="Netflix Logos"
                className="nav__avatar" />
        </div>
    )
}

export default Nav
