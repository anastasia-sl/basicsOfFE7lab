import React, { useState } from "react";
import './style.css';

function Image() {
    const [size, setSize] = useState(200); // Початковий розмір зображення

    const handleIncrease = () => setSize(size + 20);
    const handleDecrease = () => setSize(size - 20);
    const handleRemove = () => setSize(0);
    const handleReset = () => setSize(200);

    return (
        <div>
            {size > 0 && (
                <img
                    src="./img/Florentia-Флоренція-пейзаж-1024x683.jpg"
                    alt="img"
                    style={{ width: size, height: "auto" }}
                />
            )}
            <div className="image-buttons">
                <button onClick={handleIncrease}>Збільшити</button>
                <button onClick={handleDecrease}>Зменшити</button>
                <button onClick={handleRemove}>Видалити</button>
                <button onClick={handleReset}>Відновити</button>
            </div>
        </div>
    );
}

export default Image;
