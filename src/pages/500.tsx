import Link from 'next/link'

export default function Custom500() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">500 - Server Error</h1>
        <p className="text-gray-600 mb-6">
          An error occurred on our server. We have been notified and are working to fix the issue.
          Please try again later.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors inline-block"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
