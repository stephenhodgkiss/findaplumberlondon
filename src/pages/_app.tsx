import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

function ErrorFallback({ error }: { error: Error }) {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <div className="space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Try Again
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors inline-block"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  )
}
