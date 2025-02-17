"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "./components/CustomCursor";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Page6 from "./components/page6";
import Footer from "./components/footer";

export default function Home() {
  const scrollRef = useRef<HTMLElement | null>(null);
  const locoScroll = useRef<any>(null); // Store Locomotive instance
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
      });

      locoScroll.current.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollRef.current!, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.current.scrollTo(value, 0, 0)
            : locoScroll.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main")?.style.transform
          ? "transform"
          : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.current.update());
      ScrollTrigger.refresh();
    };

    initLocomotiveScroll();

    return () => {
      if (locoScroll.current) {
        locoScroll.current.destroy();
      }
    };
  }, []);

  return (
    <main
      ref={scrollRef}
      id="main"
      data-scroll-container
      className="scroll-container bg-[#0F0D0D] text-white cursor-none overflow-hidden"
    >
      <CustomCursor />

      {/* Navbar */}
      <nav className="fixed w-full h-[55px] flex justify-between items-center px-8 z-[100] mix-blend-difference bg-[#0F0D0D]">
        <h1 className="text-white">KWE</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <h4 className="uppercase">Home</h4>
          <h4 className="uppercase">Work</h4>
          <h4 className="uppercase">Studio</h4>
          <h4 className="uppercase">Contact</h4>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {/* Hamburger Icon */}
            <div className="w-5 h-5 flex flex-col justify-between">
              <span className={`h-1 w-full bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-1 w-full bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-1 w-full bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0F0D0D] z-50 flex flex-col items-center justify-center gap-6 text-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h4 className="uppercase cursor-pointer" onClick={() => setMenuOpen(false)}>Home</h4>
        <h4 className="uppercase cursor-pointer" onClick={() => setMenuOpen(false)}>Work</h4>
        <h4 className="uppercase cursor-pointer" onClick={() => setMenuOpen(false)}>Studio</h4>
        <h4 className="uppercase cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</h4>
      </div>

      {/* Hero Section */}
      <section id="hero-section" className="min-h-screen flex flex-col items-start pt-[20vh] md:pt-[12vw] px-8">
        <div id="hero-title">
          <h1 className="text-[8vw] mb-6 font-medium leading-tight">Digitally Crafted</h1>
          <h2 className="text-[8vw] font-medium ml-[10vw] leading-tight">Brand Experiences</h2>
        </div>
        <video id="hero-video" className="  w-full md:w-3/5 mt-[5vw] md:mt-[10vw] mx-auto" autoPlay muted loop src="/images/new.mp4"></video>
      </section>

      {/* About Us Section */}
      <section id="about-us-section" className="min-h-[80vh] px-4 md:px-8 mt-[-20vh] md:py-16  border-b border-gray-600">
        <div id="about-us-text">
          <h1 className="text-[7vw]  md:text-[5vw] md:pt-9 font-medium text-gray-100">We are KWE Studio,</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-9 md:mt-9">
          <div className="w-full md:w-2/5">
            <h2 className="text-[5vw] md:text-[4vw] font-light leading-tight md:leading-[4vw] text-gray-100">
              A CREATIVE COLLECTIVE MADE TO UNLOCK YOUR BRAND’S POTENTIAL
            </h2>
          </div>
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <p className="text-lg text-gray-100">
              We weave together bold strategy and creative execution to produce thought-provoking
              digital experiences. We take a highly personalized approach to delivering branding, web
              design, and content marketing solutions.
            </p>
            <button className="w-full mt-4 px-4 py-2 bg-[#EDBFFF] text-gray-900 rounded-full">
              About us
            </button>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" className="min-h-screen px-4 md:px-8 py-10 md:py-16">
        <h1 className="text-[6vw] md:text-[5vw] font-medium text-gray-100">Selected Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-8">
          <video className="w-full" autoPlay loop muted src="/images/new2.mp4" />
          <video className="w-full" autoPlay loop muted src="/images/new.mp4"></video>
          <video className="w-full" autoPlay loop muted src="/images/new.mp4"></video>
          <video className="w-full" autoPlay loop muted src="/images/new3.mp4"></video>
        </div>
      </section>

      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </main>
  );
}
