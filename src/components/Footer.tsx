import * as React from "react";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import Link from "next/link";
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
  const dummyPage = "/dummy";
  //======================================return
  return (
    <div className="">
      <div className="container mx-auto border-t text-base-content border-slate-500 ">
        <footer className="grid px-2 py-8 grid-cols-2 md:grid-cols-3 lg:px-2 footer">
          <div>
            <span className="footer-title">Services</span>
            {links.services.map((link) => (
              <Link
                key={link.label}
                href={dummyPage || link.href}
                className="link link-hover"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-title">Company</span>
            {links.company.map((link) => (
              <Link
                key={link.label}
                href={dummyPage || link.href}
                className="link link-hover"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-title">Legal</span>
            {links.legal.map((link) => (
              <Link
                key={link.label}
                href={dummyPage || link.href}
                className="link link-hover"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
        <footer className="px-2 pt-5 pb-10 border-t border-base-300 footer row-between">
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
