import { BiChevronDown } from "react-icons/bi";
import { ImGithub } from "react-icons/im";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import { useScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import * as React from "react";

//----------------------------------------------------------------------RightNavbarContent
const RightNavbarContent = () => {
  return (
    <div className="gap-x-3 row-center">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn gap-1 bg-transparent btn-sm">
          <BiChevronDown size="24" />
          dropdown
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow dropdown-content menu bg-base-300 rounded-box w-52"
        >
          {[
            { label: "item 1", href: "" },
            { label: "item 2", href: "" },
          ].map((item, i) => (
            <li key={i}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <a
        className="link "
        href="https://github.com/Ali-Hussein-dev/website-starter"
      >
        <span className="sr-only">Github repo</span>
        <ImGithub size="30" />
      </a>
    </div>
  );
};
const links = [
  { label: "Section 1", href: "#section1" },
  { label: "Section 2", href: "#section2" },
  { label: "Section 3", href: "#section3" },
  { label: "Section 4", href: "#section4" },
];
//----------------------------------------------------------------------LinksList
const LinksList = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      {links.map((link, i) => (
        <ScrollLink
          to={link.href}
          activeClass="active"
          smooth
          key={i}
          className="btn font-bold bg-transparent border-none text-slate-100 btn-sm"
        >
          {link.label}
        </ScrollLink>
      ))}
    </div>
  );
};
//----------------------------------------------------------------------Navbar
export const Navbar = () => {
  const ref = React.useRef<HTMLHeadingElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useScroll();
  React.useEffect(() => scrollY.onChange(() => setY(scrollY.get())), [scrollY]);
  return (
    <>
      <Disclosure
        as="nav"
        ref={() => ref}
        className={`sticky top-0 px-2 z-10 ${
          y > height ? "bg-slate-900/20 backdrop-blur-lg" : ""
        }`}
      >
        {({ open: isOpen }) => (
          <>
            <div className="container mx-auto">
              <div className="h-16 row-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <picture>
                        <source></source>
                        <img
                          className="block w-auto h-12"
                          src="/logo.png"
                          alt="logo"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* //----------------------------------------------------------------------desktop */}
                      <LinksList />
                    </div>
                  </div>
                </div>
                {/* //----------------------------------------------------------------------mobile */}
                <div
                  className={`flex sm:hidden ${
                    y > height ? "backdrop-blur-lg" : ""
                  }`}
                >
                  {/* Mobile menu button */}
                  <Disclosure.Button className="btn inline-flex items-center justify-center border-none bg-inherit btn-circle">
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                      <AiOutlineClose
                        className="block w-6 h-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineMenuFold
                        className="block w-6 h-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:block">
                  <RightNavbarContent />
                </div>
              </div>
            </div>
            <Disclosure.Panel className="py-2 sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 ">
                <LinksList />
                <div className="divider" />
                <RightNavbarContent />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
