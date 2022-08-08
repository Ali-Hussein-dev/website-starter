import * as React from "react";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

const links = {
  social: [
    {
      name: "instagram",
      icon: BsInstagram,
      href: "www.instagram.com",
    },
    {
      name: "facebook",
      icon: BsFacebook,
      href: "www.facebook.com",
    },
    {
      name: "youtube",
      icon: BsYoutube,
      href: "www.youtube.com",
    },
  ],
  legal: [
    {
      href: "www.google.com",
      label: "Privacy Policy",
    },
    {
      href: "www.google.com",
      label: "Terms of Use",
    },
    {
      href: "www.google.com",
      label: "Cookie Policy",
    },
  ],
  company: [
    {
      href: "www.google.com",
      label: "About us",
    },
    {
      href: "www.google.com",
      label: "Contact",
    },
    {
      href: "www.google.com",
      label: "Jobs",
    },
    {
      href: "www.google.com",
      label: "Press kit",
    },
  ],
  services: [
    {
      href: "www.google.com",
      label: "Branding",
    },
    {
      href: "www.google.com",
      label: "Design",
    },
    {
      href: "www.google.com",
      label: "Marketing",
    },
    {
      href: "www.google.com",
      label: "Advertisement",
    },
  ],
};
//======================================
export const Footer = () => {
  //======================================return
  return (
    <div className="">
      <div className="container mx-auto border-t text-base-content border-slate-500 ">
        <footer className="p-10 footer ">
          <div>
            <span className="footer-title">Services</span>
            {links.services.map((link) => (
              <a key={link.label} href={link.href} className="link link-hover">
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <span className="footer-title">Company</span>
            {links.company.map((link) => (
              <a key={link.label} href={link.href} className="link link-hover">
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <span className="footer-title">Legal</span>
            {links.legal.map((link) => (
              <a key={link.label} href={link.href} className="link link-hover">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
        <footer className="px-10 py-4 border-t footer border-base-300">
          <div className="items-center grid-flow-col">
            <p className="font-bold">Your Company Ltd.</p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              {links.social.map((item) => (
                <a href={item.href} key={item.name} className="link link-hover">
                  <span className="sr-only">{item.name}</span>
                  <item.icon size="20" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
