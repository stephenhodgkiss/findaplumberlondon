import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find a Plumber In London</h3>
            <p className="text-gray-400 mb-4">Your trusted network of professional plumbers across London. Available 24/7 for all your plumbing needs.</p>
            {/* <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>020 XXXX XXXX</span>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/emergency-plumbing" className="text-gray-400 hover:text-white">Emergency Plumbing</Link>
              </li>
              <li>
                <Link href="/services/commercial-plumbing" className="text-gray-400 hover:text-white">Commercial Plumbing</Link>
              </li>
              <li>
                <Link href="/services/residential-plumbing" className="text-gray-400 hover:text-white">Residential Plumbing</Link>
              </li>
              <li>
                <Link href="/services/gas-plumbing" className="text-gray-400 hover:text-white">Gas Plumbing</Link>
              </li>
              <li>
                <Link href="/services/water-heater" className="text-gray-400 hover:text-white">Water Heater Services</Link>
              </li>
              <li>
                <Link href="/services/drain-cleaning" className="text-gray-400 hover:text-white">Drain Cleaning</Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/areas/central-london" className="text-gray-400 hover:text-white">Central London</Link>
              </li>
              <li>
                <Link href="/areas/north-london" className="text-gray-400 hover:text-white">North London</Link>
              </li>
              <li>
                <Link href="/areas/south-london" className="text-gray-400 hover:text-white">South London</Link>
              </li>
              <li>
                <Link href="/areas/east-london" className="text-gray-400 hover:text-white">East London</Link>
              </li>
              <li>
                <Link href="/areas/west-london" className="text-gray-400 hover:text-white">West London</Link>
              </li>
              <li>
                <Link href="/areas" className="text-gray-400 hover:text-white">View All Areas</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO Footer */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-400">
            <h2 className="text-white text-lg font-semibold mb-4">Professional Plumbing Services in London</h2>
            <p className="mb-4">
              Find a Plumber London connects you with qualified, experienced plumbers across the Greater London area. 
              Our network of professional plumbers provides comprehensive plumbing services including emergency repairs, 
              installations, maintenance, and specialized solutions for both residential and commercial properties.
            </p>
            <p className="mb-4">
              Available 24/7 for emergency plumbing services in London, our certified plumbers are equipped to handle 
              all types of plumbing issues from leak repairs and drain cleaning to boiler installations and central 
              heating services. We pride ourselves on quick response times, competitive rates, and high-quality workmanship.
            </p>
            <p>
              Whether you need a plumber in Central London, North London, South London, East London, or West London, 
              our extensive network ensures that help is always nearby. All our plumbers are fully licensed, insured, 
              and committed to delivering exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Find a Plumber London. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
