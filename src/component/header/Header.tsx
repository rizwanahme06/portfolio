'use client'
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Projects", href: "#project", current: false },
  { name: "Contact", href: "#Contact", current: false },
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-parent-class ">
      <div className="site-main-container mx-auto">
        <Link href="/">
        <Image
          src="/images/logo/logo2.png"
          alt="Logo"
          height={100}
          width={100}
          className="max-w-[70px] md:max-w-[100px] lg:max-w-[150]"
        />
        </Link>
        <nav className="nav">
          {navigation.map((data, index) => (
            <div key={index} className="px-5 py-3">
              <Link href={data.href}>
                {data.name}
              </Link>
            </div>
          ))}
          <button className="download-button">
            <a
              href="/pdf/resume/RizwanCV.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Download Resume
            </a>
          </button>
        </nav>
        {/* Mobile Menu Button */}
        
      <button
        className="side-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-20 h-20 text-white" />
        ) : (
          <Bars3Icon className="w-20 h-20 text-white" />
        )}
      </button>
      </div>

        {/* ✅ Mobile Menu (Toggles Correctly) */}
        <div className={`${isOpen ? "width100" : "width0"} bg-sitePrimaryColor`}>

        <nav className="flex flex-col space-y-4 px-5 py-4">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="nav-center mb-4"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="download-button">
            <a
              href="/pdf/resume/RizwanCV.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Download Resume
            </a>
          </button>
        </nav>
      </div>

    </header>
  );
};

export default Header;
