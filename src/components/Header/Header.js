import React from "react";
import "./Header.css";

export default function Header({ title }) {
    return (
        <>
            <h1 className="header">{title}</h1>
            {/* <h3 title="Header" data-testid="Header-3" className="header">
                Hello
            </h3> */}
        </>
    );
}
