import type { NextPage } from 'next'
import Head from 'next/head'

const TermsOfService: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service | Find a Plumber London</title>
        <meta name="description" content="Find a Plumber London's terms of service - Read about our terms and conditions for using our plumbing services platform." />
      </Head>

      <main>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Find a Plumber London's website and services, you agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
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
