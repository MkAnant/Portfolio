import React from "react";
import Button from "./Button/Button";
import "./Hero.css"

export default function Hero() {
    return <>
    <section>
        <div className="hero-headings">
            <h2 className="cursive-font">Hello there, I'm Anant (: meaning Infinity :)</h2>
            <p className="cursive-font">An ambivert with a craving for either being all disciplined or having fun, 
                but often it's some tasteful desserts that win over these :p</p>
            <div className="one-zero">
                <div className="infinite">
                    <h1 className="extro-color">1</h1>
                    <Button type="primary-button" value="My Extro Works" />
                </div>
                <h1 className="serif-font-bold">   /    </h1>
                <div className="infinite">
                    <h1 className="intro-color">0</h1>
                    <Button type="secondary-button" value="My Intro Works" />
                </div>
            </div>
        </div>
    </section>
    </>
}