import Image from "next/image";

const experiences = [
  { title: "Strategy", img1: "/images/img1.jpg", img2: "/images/img2.jpg" },
  { title: "Design", img1: "/images/img3.jpg", img2: "/images/img4.jpg" },
  { title: "Development", img1: "/images/img2.jpg", img2: "/images/img1.jpg" },
];

export default function Page4() {
  return (
    <section id="experience-section" className="min-h-screen w-full relative z-[9] py-[100px] px-[100px] flex flex-col gap-0">
      {experiences.map((exp, index) => (
        <div
          key={index}
          id={`experience-card-${index}`}
          className="group elem flex flex-col items-center justify-center relative w-full text-center"
        >
          {/* Images - Hidden Initially */}
          <div className="relative w-full flex justify-between items-center">
            <Image
              src={exp.img1}
              alt={exp.title}
              width={180}
              height={180}
              id={`experience-img1-${index}`}
              className="absolute left-20 opacity-0 translate-y-3 rotate-2 transition-all ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0"
            />
            <Image
              src={exp.img2}
              alt={exp.title}
              width={180}
              height={180}
              id={`experience-img2-${index}`}
              className="absolute right-20 opacity-0 translate-y-3 rotate-2 transition-all ease-out duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0"
            />
          </div>

          {/* Text - Always Visible */}
          <div className="text-div h-[30vh] pb-[-70px] overflow-hidden relative z-[8]">
            <h1
              id={`experience-title-${index}`}
              className="text-[5.5vw] font-semibold text-white transition-transform ease-out duration-500 group-hover:text-[#c47b9f]"
            >
              {exp.title}
            </h1>
          </div>
        </div>
      ))}
    </section>
  );
}
