import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Harsha Kota
          </Link>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Projects</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Skills</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

