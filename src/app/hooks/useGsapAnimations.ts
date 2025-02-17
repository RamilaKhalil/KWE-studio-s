"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

export function useGsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main") as HTMLElement,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : (locoScroll.scroll.instance as any).scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: (document.querySelector("#main") as HTMLElement).style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

   

    // Hero Section Animations
    gsap.from("#hero-title h1, #hero-title h2", {
      y: 10,
      rotate: 10,
      opacity: 0,
      delay: 0.3,
      duration: 0.7,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-title h1",
        scroller: "#main",
        start: "top -27%",
        end: "top 0",
        scrub: 3,
      },
    })
      .to("#hero-title h1", { x: -100 }, "anim")
      .to("#hero-title h2", { x: 100 }, "anim")
      .to("#hero-video", { width: "90%" }, "anim");

    // Background Color Change Animations
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-title h1",
        scroller: "#main",
        start: "top -90%",
        end: "top -100%",
        
        scrub: 3,
      },
    }).to("#main", { backgroundColor: "#d092de" });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-title h1",
        scroller: "#main",
        start: "top -200%",
        end: "top -100%",

        scrub: 3,
      },
    }).to("#main", { backgroundColor: "#0F0D0D" });

    // About Us Section Animations
    gsap.from("#about-us-text h1", {
      opacity: 1,
      color:"#1e1c1f",
      y: 50,
      duration: 1.5,

      scrollTrigger: {
        trigger: "#about-us-section",
        scroller: "#main",
        start: "top 140%",
        end: "top -20%",
      
        scrub: 3,
      },
    });

    // Selected Works Animations
    gsap.from(".selected-work-item", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#selected-works",
        scroller: "#main",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    });
    // Page 4 - Experience Section Animations
    gsap.utils.toArray(".experience-card").forEach((card: any, index) => {
      gsap.from(`#experience-card-${index}`, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: `#experience-card-${index}`,
          scroller: ".scroll-container",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      });

      gsap.from([`#experience-img1-${index}`, `#experience-img2-${index}`], {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: `#experience-card-${index}`,
          scroller: ".scroll-container",
          start: "top 85%",
          end: "top 50%",
          scrub: true,
        },
      });

      gsap.from(`#experience-title-${index}`, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: `#experience-card-${index}`,
          scroller: ".scroll-container",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });
    });
     // 🔹 Page5 - Client Hover Animation
     gsap.set("#client-hover-image img", { opacity: 0, scale: 0.8 });

     document.querySelectorAll(".client-box").forEach((box, index) => {
       box.addEventListener("mouseenter", () => {
         gsap.to("#client-hover-image img", {
           opacity: 1,
           scale: 1,
           duration: 0.3,
           ease: "power2.out",
         });
       });
 
       box.addEventListener("mouseleave", () => {
         gsap.to("#client-hover-image img", {
           opacity: 0,
           scale: 0.8,
           duration: 0.3,
           ease: "power2.out",
         });
       });
     });
 
     // 🔹 Clients Section Fade-in Animation
     gsap.from("#clients-title", {
       opacity: 0,
       y: 50,
       duration: 1.5,
       scrollTrigger: {
         trigger: "#clients-section",
         scroller: "#main",
         start: "top 90%",
         end: "top 50%",
         scrub: true,
       },
     });
 
     gsap.from(".client-box", {
       opacity: 1,
       y: 20,
       scale: 0.9,
       duration: 1,
       stagger: 0.2,
       scrollTrigger: {
         trigger: "#clients-list",
         scroller: "#main",
         start: "top 95%",
         end: "top 60%",
         scrub: true,
       },
     });
    return () => {
      locoScroll.destroy();
      ScrollTrigger.killAll();
    };
  });
}

  // ScrollTrigger.scrollerProxy("#main", {
  //          scrollTop(value: number | undefined) {
  //             if (value !== undefined) {
  //               locoScroll.scrollTo(value, { duration: 0 });
  //             } else {
  //               return (locoScroll as any).scroll.instance.scroll.y; 

  //               }
  //             },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       };
  //     },
  //     pinType: (document.querySelector("#main") as HTMLElement).style.transform
  //       ? "transform"
  //       : "fixed",
  //   });

    // ScrollTrigger.addEventListener("refresh", () => {
    //         locoScroll.update();
    //     });
   
