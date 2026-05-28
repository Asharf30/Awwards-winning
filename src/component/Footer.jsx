import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://youtube.com", icon: <FaYoutube />, color: "#ff0000" },
  { href: "https://discord.com", icon: <FaDiscord />, color: "#5865f2" },
  { href: "https://medium.com", icon: <FaMedium />, color: "#12100e" },
  { href: "https://twitter.com", icon: <FaTwitter />, color: "#1da1f2" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#00d4ff] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light transition-colors duration-300 hover:text-yellow-300 md:text-left">
          @Asharf 2026. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ "--social-hover": link.color }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light transition-colors duration-300 hover:text-black hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
