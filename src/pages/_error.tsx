import { NextPageContext } from 'next'

interface Props {
  statusCode?: number
  message?: string
}

function Error({ statusCode, message }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {statusCode ? `Error ${statusCode}` : 'An error occurred'}
        </h1>
        <p className="text-gray-600 mb-6">
          {message || 
            (statusCode
              ? `A server-side error occurred`
              : 'An error occurred on client')}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
