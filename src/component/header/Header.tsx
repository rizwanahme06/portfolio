// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#project', current: false },
  { name: 'Contect', href: '#contect', current: false },
]

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }


const Header=()=>{
return (
  <header className="site-parent-class ">
  <div className="site-main-container mx-auto">
    <Image
      src="/images/logo/logo.png"
      alt="Logo"
      height={100}
      width={100}
    />
    <nav className="flex items-center">
      {navigation.map((data, index) => (
        <div key={index} className="px-5 py-3">
          <Link legacyBehavior href={data.href}>
            <a>{data.name}</a>
          </Link>
        </div>
      ))}
      <div className="download-button">
        <a
          href="/pdf/resume/RizwanCV.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  </div>
</header>


)
}

export default Header