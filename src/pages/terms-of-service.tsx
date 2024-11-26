import type { NextPage } from 'next'
import Head from 'next/head'

const TermsOfService: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service | Find a Plumber London</title>
        <meta name="description" content="Find a Plumber London's terms of service - Read about our terms and conditions for using our plumbing services platform." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Guidelines and rules for using our plumber listing service
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using Find a Plumber London's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>

              <h2>2. Service Description</h2>
              <p>
                Find a Plumber London is an information aggregation service that displays publicly available plumbing business listings in London. We collect and display information from various third-party APIs and public sources to provide a convenient way to find plumbing services in London.
              </p>

              <h2>3. Information Accuracy</h2>
              <p>
                While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or reliability of the information displayed on our website. The information is sourced from third-party APIs and may not always reflect current circumstances. Users should independently verify any information before making decisions based on it.
              </p>

              <h2>4. Third-Party Data Sources</h2>
              <p>
                Our service aggregates data from various third-party API providers. We do not create, modify, or verify the accuracy of this data. The information displayed is provided "as is" from our data sources. We regularly update our listings but cannot guarantee real-time accuracy.
              </p>

              <h2>5. Limitations of Liability</h2>
              <p>
                Find a Plumber London acts solely as an information provider and is not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The quality of services provided by listed plumbers</li>
                <li>Any disputes between users and plumbing service providers</li>
                <li>The accuracy of business information, including but not limited to contact details, service areas, or operating hours</li>
                <li>Any losses or damages resulting from reliance on information provided on our website</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>
                All content on this website, excluding the plumber listings data, is the property of Find a Plumber London. The plumber listings data is owned by respective third-party data providers and is displayed under their terms of service.
              </p>

              <h2>7. Website Usage</h2>
              <p>
                Users agree to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use the website for lawful purposes only</li>
                <li>Not attempt to manipulate or misuse the displayed information</li>
                <li>Not attempt to scrape or mass-download information from the website</li>
                <li>Not use the service for any commercial purposes without our express written permission</li>
              </ul>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the website after any changes constitutes acceptance of the new terms. Users should regularly review these terms for updates.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us through our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}

export default TermsOfService
