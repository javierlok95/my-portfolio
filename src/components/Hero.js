import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import "./hero.css"
import hero from '../images/hero-img.png';

const Hero = () => {
    const textRef = useRef();

    useEffect(() => {
        const textOptions = {
            showCursor: true,
            typeSpeed: 50,
            backSpeed: 90,
            smartBackspace: false,
            shuffle: true,
            startDelay: 500,
            backDelay: 1000,
            loop: true,
            loopCount: Infinity,
            strings: ["Front-end Developer"],
        };
        const typed = new Typed(textRef.current, textOptions);
    }, []);

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={hero}
                        className="d-block mx-lg-auto" alt="Front-End Developer" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <div className="lc-block mb-3">
                        <div editable="rich">
                            <h2 className="fw-bold display-5">Hi There!, I'm</h2>
                            <h1 className="fw-bold display-5">Javier Lok Chan</h1>
                            <h3>
                                <span ref={textRef} />
                            </h3>
                        </div>
                    </div>
                    <div className="lc-block mb-3">
                        <div editable="rich">
                            <p className="lead-word">HTML - CSS - Javascript - React</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero;