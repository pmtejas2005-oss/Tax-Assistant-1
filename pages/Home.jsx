import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/tax-hero.svg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-indigo-600">TaxEase</h1>
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/login" className="px-4 py-2 text-indigo-600 hover:text-indigo-800">Log In</Link>
              <Link to="/signup" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Simplify Your Tax Filing
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Upload your documents, let our AI handle the calculations, and get personalized tax-saving suggestions.
              </p>
              <div className="mt-8">
                <Link to="/signup" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-lg font-medium">
                  Get Started for Free
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img 
                src={heroImage} 
                alt="Tax filing illustration" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How TaxEase Works
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-indigo-600 text-4xl font-bold mb-4">1</div>
                <h3 className="text-lg font-medium text-gray-900">Upload Documents</h3>
                <p className="mt-2 text-gray-500">
                  Easily upload your salary slips, invoices, and financial documents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-indigo-600 text-4xl font-bold mb-4">2</div>
                <h3 className="text-lg font-medium text-gray-900">AI Analysis</h3>
                <p className="mt-2 text-gray-500">
                  Our OCR and AI engine extracts and analyzes your financial data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-indigo-600 text-4xl font-bold mb-4">3</div>
                <h3 className="text-lg font-medium text-gray-900">Get Insights</h3>
                <p className="mt-2 text-gray-500">
                  Receive tax calculations, auto-filled forms, and personalized suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8 flex justify-between">
            <p className="text-gray-500">&copy; 2025 TaxEase. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;