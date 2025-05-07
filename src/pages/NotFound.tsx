import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Event Explorer</title>
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full mb-8">
            <Calendar className="w-12 h-12 text-primary-500" />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="btn btn-primary inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;