import type { FallbackProps } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : String(error)

  return (
    <div role="alert" className="flex-1 flex flex-col p-6 my-auto text-center justify-center items-center">
      <p className="text-3xl text-red-600 font-semibold">Something went wrong:</p>
      <pre className="text-xl text-gray-600 my-2">{message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg hover:bg-blue-600 transition"
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
