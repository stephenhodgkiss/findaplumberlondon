import Head from 'next/head'

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Find a Plumber London</title>
        <meta name="description" content="Find a Plumber London's privacy policy - Learn how we collect, use, and protect your personal information." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                How we collect, use, and protect your personal information
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="mb-12">
                <h2>Introduction</h2>
                <p>
                  Find a Plumber London ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div className="mb-12">
                <h2>Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Fill out forms on our website</li>
                  <li>Contact us via phone or email</li>
                  <li>Request plumbing services</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p>This information may include:</p>
                <ul>
                  <li>Name and contact details</li>
                  <li>Address and location information</li>
                  <li>Service preferences and requirements</li>
                  <li>Payment information</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Connect you with suitable plumbers in your area</li>
                  <li>Process your service requests</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our website and services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2>Information Sharing</h2>
                <p>We may share your information with:</p>
                <ul>
                  <li>Plumbers in our network (to fulfill your service requests)</li>
                  <li>Service providers (e.g., payment processors, email services)</li>
                  <li>Legal authorities (when required by law)</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>

              <div className="mb-12">
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Object to processing of your information</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2>Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies to improve your browsing experience on our website. You can control cookies through your browser settings.
                </p>
              </div>

              <div className="mb-12">
                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul>
                  <li>Email: privacy@findaplumberlondon.com</li>
                  <li>Phone: 020 XXXX XXXX</li>
                  <li>Address: [Your Business Address]</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
