import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import PageHeader from '../components/common/PageHeader';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { resetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the email from the query parameter if it exists
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    try {
      setLoading(true);
      await resetPassword(email);
      setIsSubmitted(true);
      toast.success('Password reset email sent');
      
      // Redirect to Gmail
      window.location.href = 'https://mail.google.com';
    } catch (error: any) {
      console.error(error);
      let errorMessage = 'Failed to send password reset email';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address';
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Forgot Password - Event Explorer</title>
      </Helmet>
      
      <PageHeader 
        title="Reset Your Password" 
        description="Enter your email address to receive a password reset link."
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8" data-aos="fade-up">
            <Link to="/login" className="inline-flex items-center text-primary-600 hover:text-primary-500 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Login
            </Link>
            
            <h2 className="text-2xl font-bold mb-6">Forgot Your Password?</h2>
            
            {isSubmitted ? (
              <div className="text-center">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  <p className="font-medium">Password reset email sent!</p>
                  <p className="mt-2">Please check your email for instructions on how to reset your password.</p>
                </div>
                <p className="text-gray-600 mb-4">
                  If you don't see the email in your inbox, please check your spam folder.
                </p>
                <Link to="/login" className="btn btn-primary">
                  Return to Login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field pl-10"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Reset Password'}
                </button>
                
                <p className="text-center text-gray-600">
                  Remember your password?{' '}
                  <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
                    Login
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;