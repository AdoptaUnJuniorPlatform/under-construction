import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import './AnimationSpace.css';

interface AnimationSpaceProps {
    children: React.ReactNode;
    theme: string;
    socialNetwork: React.ReactNode;
}

export const AnimationSpace = ({ children, socialNetwork, theme }: AnimationSpaceProps) => {
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

        const starGeometry = new THREE.BufferGeometry();
        const starsCount = 3000;
        const starVertices = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount * 3; i++) {
        starVertices[i] = (Math.random() - 0.5) * 10;
        }

        starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(starVertices, 3)
        );

        const starMaterial = new THREE.PointsMaterial({
        size: 0.8,
        color: theme === "dark" ? "#7F7F7F" : "#FFFFFF", 
        sizeAttenuation: true, 
        opacity: 0.6, 
        transparent: true,
        depthWrite: false,
    });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const animate = () => {
        requestAnimationFrame(animate);

        stars.rotation.x += 0.002;
        stars.rotation.y += 0.002;

        const distance = camera.position.z;
        stars.material.size = 0.01 / (distance * 0.4); 
        stars.material.needsUpdate = true;

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
        event.animationName === "textTransition" && setTimeout(() => setIsAnimationFinished(true), 50000);
        } else {
        event.animationName === "scroller" && setTimeout(() => setIsAnimationFinished(true), 54000);
        }
    });

    return (
        <div ref={canvasRef} className="animation">
        {isAnimationFinished ? socialNetwork : children}
        </div>
    );
    };
