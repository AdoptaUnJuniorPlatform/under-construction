import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import './AnimationSpace.css';

interface AnimationSpaceProps {
    children: React.ReactNode;
    theme: string;
    socialNetwork: React.ReactNode;
}

export const AnimationSpace = ({children, socialNetwork, theme}: AnimationSpaceProps) => {
    const [isAnimationFinished, setIsAnimationFinished] = React.useState(false);
    const windowWidth = useRef(window.innerWidth);

    const canvasRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            1000,
            canvas.clientWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        if (theme === "dark") {
            scene.background = new THREE.Color("#000000");
        }

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(canvas.clientWidth, window.innerHeight);

        if (canvas) {
            canvas.appendChild(renderer.domElement);
        }

        const particleGeometry = new THREE.BufferGeometry();
        const particlesCount = 500;
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }

        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: theme === "dark" ? "#7F7F7F" : "#000000",
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const animate = () => {
            requestAnimationFrame(animate);

            particles.rotation.x += 0.002;
            particles.rotation.y += 0.002;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            if (canvas) {
                camera.aspect = canvas.clientWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(canvas.clientWidth, window.innerHeight);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

            if (canvas && renderer.domElement) {
                canvas.removeChild(renderer.domElement);
            }
        };
    }, [theme]);

    onanimationstart = (event => {
        if (windowWidth.current <= 1024) {
            event.animationName === "textTransition" && setTimeout(() => setIsAnimationFinished(true), 10000);//TEXTO AMARILLO

        } else {
            event.animationName === "scroller" && setTimeout(() => setIsAnimationFinished(true), 34000);

        }
    });


    return (
        <div ref={canvasRef} className="animation">
            {isAnimationFinished ? socialNetwork : children}
        </div>
    );
};

