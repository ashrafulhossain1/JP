function SimpleComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white shadow-2xl">
        <div className="card-body text-center">
          <h1 className="card-title text-3xl font-bold text-primary justify-center mb-4">
            🎉 Tailwind CSS & DaisyUI Working!
          </h1>
          <p className="text-gray-600 mb-6">
            This component uses both Tailwind utility classes and DaisyUI components.
          </p>
          <div className="space-y-3">
            <div className="badge badge-primary badge-lg">DaisyUI Badge</div>
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Success! Everything is working perfectly.</span>
            </div>
            <div className="card-actions justify-center">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => alert('DaisyUI Button clicked!')}
              >
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleComponent;
