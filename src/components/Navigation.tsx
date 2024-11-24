import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Website Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.svg"
                alt="Find a Plumber In London Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-blue-600">Find a Plumber In London</span>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/areas" className="text-white hover:text-gray-300">
              Areas
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Phone Number Box */}
          {/* <div className="flex items-center">
            <Link
              href="tel:020XXXXXXXX"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span>020 XXXX XXXX</span>
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
