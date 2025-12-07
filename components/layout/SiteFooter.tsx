import React from "react";
import { MoveRight, Facebook, Twitter, Instagram, Youtube, Music, Mail, Linkedin } from "lucide-react";
import Button from "../ui/Button";

// Footer Data
const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { label: "Sheet Music", href: "#" },
      { label: "Digital Courses", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "Gift Cards", href: "#" },
    ]
  },
  learn: {
    title: "Learn",
    links: [
      { label: "Private Coaching", href: "#" },
      { label: "Group Classes", href: "#" },
      { label: "Masterclasses", href: "#" },
      { label: "Free Resources", href: "#" },
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Instructors", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ]
  },
};

const SocialIcon = ({ icon: Icon, href, label }: { icon: React.ElementType, href: string, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 bg-white border border-softBorder rounded-full text-bodyText/70 hover:text-white hover:bg-[#5B6EE1] hover:border-[#5B6EE1] transition-all duration-300 transform hover:scale-110 shadow-sm"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default function SiteFooter() {
  return (
    <footer className="bg-softBg border-t border-softBorder pt-16 pb-8">
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand & Newsletter - Spans 4 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Brand */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B6EE1] to-[#8EA3F4] flex items-center justify-center text-white shadow-md">
                <Music className="w-6 h-6" />
              </div>
              <span className="text-2xl font-heading font-bold text-headingText tracking-tight">
                Creator Hub
              </span>
            </div>

            <p className="text-bodyText/80 leading-relaxed max-w-sm">
              Empowering musicians with the tools, knowledge, and community
              to express their creativity and master the piano.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-headingText mb-3 uppercase tracking-wider">Join our Newsletter</h4>
              <form className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white border border-softBorder rounded-xl px-4 py-2.5 text-sm text-bodyText placeholder:text-bodyText/50 focus:outline-none focus:ring-2 focus:ring-[#5B6EE1]/20 transition-all"
                />
                <Button
                  variant="primary"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#5B6EE1] to-[#8EA3F4] text-white shadow-sm hover:shadow-md"
                  aria-label="Subscribe"
                >
                  <MoveRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Links Sections - Spans 8 columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-heading font-semibold text-headingText mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-bodyText/70 hover:text-[#5B6EE1] text-sm transition-colors duration-200 block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-softBorder pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-bodyText/60">
            &copy; {new Date().getFullYear()} <a href="https://portfolio-website-zeta-six-83.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B6EE1] transition-colors">Divyanshu Saini</a>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/divyanshu-saini-8ab623231/" label="Linkedin" />
            <SocialIcon icon={Instagram} href="https://www.instagram.com/a_divyansh.saini/" label="Instagram" />
            <SocialIcon icon={Youtube} href="https://www.youtube.com/" label="YouTube" />
          </div>
        </div>

      </div>
    </footer>
  );
}