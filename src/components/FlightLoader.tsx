import React, { useEffect, useRef } from "react";

const FlightLoader = ({ onComplete }: { onComplete: () => void }) => {
    const planeRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        import("gsap").then(({ gsap }) => {
            const iconWidth = 320;
            const margin = 32;
            // Calculate distance to move completely off screen
            const distance = window.innerWidth + iconWidth;

            // Create a timeline for coordinated animations
            const tl = gsap.timeline({
                onComplete
            });

            // Animate the plane
            tl.fromTo(
                planeRef.current,
                { x: -iconWidth, y: 0, opacity: 1 }, // Start from slightly off-screen left
                {
                    x: distance,
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: "power1.inOut",
                }
            );

            // Animate the text to appear in center
            tl.fromTo(
                textRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 50
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                }
            );
        });
    }, [onComplete]);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-start bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("public/pexels-pixabay-314726.jpg")' }}
        >
            <div ref={planeRef} className="m-8 flex flex-col items-center">
                <img
                    src="public/n.png"
                    alt="Loader"
                    className="w-80 h-80 object-contain"
                />
            </div>
            <h1
                ref={textRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold text-blue-500 tracking-wider drop-shadow-lg"
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.1em'
                }}
            >
                Begin Your Journey
            </h1>
        </div>
    );
};

export default FlightLoader; 