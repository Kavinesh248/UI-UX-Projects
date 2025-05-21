import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = function () {
  const sectionRef = useRef(null);
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);

  useGSAP(() => {
    const projects = [
      projectRef1.current,
      projectRef2.current,
      projectRef3.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          {/* LEFT SIDE */}
          <div ref={projectRef1} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ride" />
            </div>

            <div className="text-content">
              <h2>
                On-Demand Rides made Simple with a Powerful, User-Friendly App
                called Ryde.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo & TailwindCss for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="project-list-wrapper">
            <div ref={projectRef2} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <div>Library Management Platform</div>
            </div>

            <div ref={projectRef3} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/project3.png"
                  alt="YC - Directory - A Startup Showcase App"
                />
              </div>
              <div>Library Management Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
