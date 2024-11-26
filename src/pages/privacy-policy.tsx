import Head from 'next/head'

export default function PrivacyPolicy() {
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
                  Find a Plumber London ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website. Our service primarily aggregates publicly available plumber listing information from third-party APIs to help users find plumbing services in London.
                </p>
              </div>

              <div className="mb-12">
                <h2>Information We Collect</h2>
                <h3>1. Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul>
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referral source</li>
                </ul>

                <h3>2. Location Information</h3>
                <p>To provide relevant plumber listings in your area, we may:</p>
                <ul>
                  <li>Use your IP address to approximate your location</li>
                  <li>Request your browser location (with your permission)</li>
                  <li>Use postcodes or areas you enter in searches</li>
                </ul>

                <h3>3. Third-Party Data</h3>
                <p>Our plumber listings are sourced from third-party APIs. This information is publicly available and includes:</p>
                <ul>
                  <li>Business names and addresses</li>
                  <li>Contact information</li>
                  <li>Service areas and hours</li>
                  <li>Reviews and ratings</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2>How We Use Information</h2>
                <p>We use the collected information to:</p>
                <ul>
                  <li>Display relevant plumber listings based on your location</li>
                  <li>Improve our website's functionality and user experience</li>
                  <li>Generate anonymous usage statistics</li>
                  <li>Protect against misuse of our service</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2>Third-Party Services</h2>
                <p>We use the following third-party services:</p>
                <ul>
                  <li>Analytics services to understand website usage</li>
                  <li>API providers for plumber listing data</li>
                  <li>Content delivery networks (CDNs) for better performance</li>
                  <li>Security services to protect our website</li>
                </ul>
                <p>
                  These services may collect their own data according to their privacy policies. We encourage you to review their policies.
                </p>
              </div>

              <div className="mb-12">
                <h2>Data Storage and Security</h2>
                <p>
                  We implement appropriate security measures to protect the limited data we collect. However, please note that:
                </p>
                <ul>
                  <li>We primarily display publicly available information</li>
                  <li>We don't store or process any payment information</li>
                  <li>We don't maintain user accounts or profiles</li>
                  <li>We use industry-standard security measures for our website</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2>Cookies and Tracking</h2>
                <p>We use essential cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your location preferences</li>
                  <li>Improve website performance</li>
                  <li>Analyze website usage</li>
                  <li>Protect against automated abuse</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. Blocking some cookies may affect website functionality.
                </p>
              </div>

              <div className="mb-12">
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Request information about data we automatically collect</li>
                  <li>Opt-out of analytics tracking</li>
                  <li>Clear your browser data and cookies</li>
                </ul>
                <p>
                  Note: Since we display publicly available information, we cannot modify or delete plumber listing data obtained from our API providers.
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
                  If you have any questions about this Privacy Policy or our practices, please contact us through our website's contact form.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
