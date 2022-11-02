import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Limitedoffer from '../Limitedoffer/Limitedoffer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Limitedoffer></Limitedoffer>
            <Canvas camera={{fov:70,position: [0,0,65]}}>
                <Suspense fallback={null}>
                    <ambientLight></ambientLight>

                </Suspense>
            </Canvas>
            
        </div>
    );
};

export default Home;