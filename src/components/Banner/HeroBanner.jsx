import React, { useEffect, useRef } from 'react';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css'; 
import './HeroBanner.css';
import HeroForm from './EmailForm/HeroForm';
import DotLottieAnimation from "../../lotties/HeroAnimationCompressed.lottie"
const HeroBanner = () => {
    const lottieRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            lottieRef.current.play();
        }, 1000);
    }, []);
    return (
        <div className='banner'>
            <HeroForm />
            <div className="animation-container  ease-in-out">
                <DotLottiePlayer
                    lottieRef={lottieRef}
                    src = {DotLottieAnimation}
                    autoplay={false}
                    loop={true}
                />
            </div>
            
        </div>
    );
}

export default HeroBanner;