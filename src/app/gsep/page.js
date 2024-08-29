"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CircleAnimation = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: circle,
          //   start: "top center", // Start when the top of the circle is at the center of the viewport
          end: "+=2000px", // Scroll distance for the entire animation
          scrub: true, // Link the animation progress directly to the scroll position
          markers: false, // Set to true to see debug markers (optional)
        },
      })
      .fromTo(
        circle,
        { x: "calc(100vw - 100px)", duration: 1 },
        { x: "0vw" } // Start from the center
      ) // Move to the right edge
      .fromTo(
        circle,
        { x: "calc(100vw - 100px)" }, // Start from the right edge
        { x: "0vw", duration: 1 }
      ); // Move back to the center
  }, []);

  return (
    <div style={{ height: "300vh", width: "100vw", background: "white" }}>
      {" "}
      {/* Extra height to allow scrolling */}
      <div
        ref={circleRef}
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          left: "25vw", // Initial position
          top: "50%", // Center vertically
          transform: "translate(-50%, -50%)", // Center the circle
        }}
      />
    </div>
  );
};

export default CircleAnimation;
