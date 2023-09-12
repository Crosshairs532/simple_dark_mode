import { useState } from "react";
import './dark.css'
const Dark = () => {
    const [t, setT] = useState(false);

    const handleclick = () => {
        setT(!t)
    }
    return (
        <div className={`card ${t ? 'dark' : 'light'}`}>
            <img className="w-full" src='https://i.ibb.co/3p7Q22K/2.png' alt="" />
            <h3 className="text-xl font-bold mt-3">Hello Programmers</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo optio nam veniam magni adipisci! Vitae, tenetur. Expedita magnam asperiores eaque?</p>
            <button onClick={handleclick} className={`${t ? 'dark_button' : 'light_button'}`}>{t ? 'dark mode enabled' : 'light mode enabled'}</button>
        </div>
    );
};

export default Dark;