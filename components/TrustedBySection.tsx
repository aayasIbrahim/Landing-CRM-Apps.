"use client";
import Image from "next/image";

const logos = [
  { id: 1, name: "OpenZeppelin", src: "/logos/openzeppelin.png" },
  { id: 2, name: "Oracle", src: "/logos/oracle.png" },
  { id: 3, name: "Morpheus", src: "/logos/morpheus.png" },
  { id: 4, name: "Samsung", src: "/logos/samsung.png" },
  { id: 5, name: "Monday.com", src: "/logos/monday.png" },
  { id: 6, name: "Segment", src: "/logos/segment.png" },
  { id: 7, name: "Protonet", src: "/logos/protonet.png" },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 md:py-12 bg-white overflow-hidden relative shadow-lg">
      <div className="container mx-auto px- sm:px-6 lg:px-8  ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 text-center md:text-left text-2xl md:text-4xl font-extrabold text-gray-800 mb-12 px-4">
          <p>Over 32k+ software businesses growing with</p>

          <div className="flex justify-center items-center mt-2 md:mt-0">
            <Image
              src="/CF Logo Black.png" // ✅ From public folder
              alt="Coursefiction logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-blue-700 font-extrabold">
              Coursefiction
            </span>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Scrolling Track */}
          <ul className="flex animate-marquee gap-x-12">
            {logos.concat(logos).map((logo, index) => (
              <li
                key={index}
                className="flex justify-center items-center h-12 w-32 md:w-40 flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;
