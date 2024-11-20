import React, { useState } from "react";

function Header() {
    const headers = [
        { id: 1, text: "Слинько Анастасія Віталіївна" },
        { id: 2, text: "Місце народження: 22 червня, 2005 року, м. Харків" },
        { id: 3, text: "Освіта: Народна українська академія, м. Харків" },
        { id: 4, text: "Київський політехнічний інститут імені Ігоря Сікорського, м. Київ" },
    ];

    const [activeHeader, setActiveHeader] = useState(null);

    const handleClick = (id) => {
        setActiveHeader((prev) => (prev === id ? null : id));
    };

    return (
        <div>
            {headers.map((header) => (
                <h4
                    key={header.id}
                    id={`header${header.id}`}
                    style={{
                        backgroundColor: activeHeader === header.id ? "lightblue" : "",
                        color: activeHeader === header.id ? "darkblue" : "",
                        cursor: "pointer",
                    }}
                    onClick={() => handleClick(header.id)}
                >
                    {header.text}
                </h4>
            ))}
        </div>
    );
}

export default Header;
