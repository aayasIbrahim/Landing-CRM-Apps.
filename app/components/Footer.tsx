"use client"

import React, { useState, FormEvent, SVGProps } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  // ==== Data Types ====
  interface LinkItem {
    name: string;
    href: string;
  }

  interface SocialIcon {
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    href: string;
  }

  // ==== Footer Data ====
  const companyLinks: LinkItem[] = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
  ];

  const resourceLinks: LinkItem[] = [
    { name: "Templates", href: "/templates" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Free resources", href: "/free-resources" },
    { name: "Contract templates", href: "/contract-templates" },
  ];

  // ==== Inline SVG Icons (Typed) ====
  const LinkedInIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.333 16.333h-2.666v-4.333c0-1.02-.02-2.333-1.428-2.333-1.429 0-1.643 1.117-1.643 2.25v4.416H7.999V7.5h2.56V8.65h.036c.355-.675 1.222-1.385 2.52-1.385 2.69 0 3.185 1.77 3.185 4.07v4.998zm-11.428-9.98c0 1.25-.973 2.25-2.222 2.25S.457 7.596 1.706 6.346s2.222-2.25 2.222-1.002zM2.857 23.5h2.666V13.5H2.857v10zM22.5 0H1.5C.672 0 0 .672 0 1.5v21C0 23.328.672 24 1.5 24h21c.828 0 1.5-.672 1.5-1.5V1.5C24 .672 23.328 0 22.5 0z" />
    </svg>
  );

  const DiscordIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.2 1.8L2.2 12.2l5.4 3.7.8 1.1-1.3 2.3.9.7 2.1-1.9 1.1.7 4.2 3.1 3.4-3.1-2.1-1.4 1.2-1.8 1.4-.9 4.3-1.8-1.5-1.7zm-1.8 1.7l1.7 1.2-1.5 1.7-1.8-1.2 1.6-1.7zm-7.7 8.3l-1.3-1.3-1.3 1.3-1.7-1.2 1.3-1.3-1.3-1.3 1.7-1.2 1.3 1.3 1.3-1.3 1.7 1.2-1.3 1.3 1.3 1.3-1.7 1.2z" />
    </svg>
  );

  const TwitterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.687l-7.562 8.761L24 22.846h-6.236l-5.636-7.23-3.619 7.23H.001l8.038-15.004L.25 1.153h6.326l4.908 6.957L18.901 1.153zm-2.074 19.992h2.51l-5.385-6.52L6.152 4.004H3.593l5.807 7.02L16.827 21.145z" />
    </svg>
  );

  const MediumIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 24h4V0h-4v24zm-6 0h4V6H4v18zm12 0h4V12h-4v12z" />
    </svg>
  );

  // ==== Social Icon List ====
  const socialIcons: SocialIcon[] = [
    { Icon: LinkedInIcon, href: "https://linkedin.com" },
    { Icon: DiscordIcon, href: "https://discord.com" },
    { Icon: TwitterIcon, href: "https://twitter.com" },
    { Icon: MediumIcon, href: "https://medium.com" },
  ];

  // ==== Styling ====
  const bgColor = "bg-[#1e1747]";
  const textColor = "text-gray-200";
  const headingColor = "text-white";
  const blueButton = "bg-[#00c9ff] hover:bg-[#00b0e0]";

  return (
    <footer className={`${bgColor} ${textColor} font-inter`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 lg:gap-x-12">

          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1 pr-6">
            <h3 className={`text-xl font-semibold mb-6 ${headingColor}`}>Coursefiction</h3>
            <p className="text-sm leading-relaxed mb-6">
              Simple innate summer fat appear basket his desire joy.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition duration-200 rounded-full bg-transparent hover:bg-white/10"
                >
                  <item.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className={`text-sm ${textColor} hover:text-white transition`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className={`text-sm ${textColor} hover:text-white transition`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className={`text-xl font-semibold mb-6 ${headingColor}`}>Join Our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow p-3 text-sm rounded-lg bg-white/10 border border-transparent focus:border-white/50 focus:outline-none placeholder-gray-400 text-white transition duration-200 shadow-inner"
              />
              <button
                type="submit"
                className={`p-3 text-sm font-bold rounded-lg whitespace-nowrap text-white transition duration-300 shadow-lg ${blueButton}`}
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-3 text-gray-400 max-w-sm">
              * Will send you weekly updates for your better finance management.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-sm text-gray-400">
            Copyright &copy; Coursefiction 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
