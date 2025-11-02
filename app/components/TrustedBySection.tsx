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
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 overflow-hidden relative shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="flex justify-center items-center gap-5 text-center text-2xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Over 32k+ software businesses growing with{" "}
          <div className="flex justify-center items-center  mb-4 mt-1">
            <Image
              src="/CF Logo Black.png" // ✅ Path from the public folder root
              alt="logo"
              width={40}
              height={40}
              className="text-purple-700"
            />
            <div className=" ffont-extrabold text-purple-700 mt-2">Coursefiction</div>
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
