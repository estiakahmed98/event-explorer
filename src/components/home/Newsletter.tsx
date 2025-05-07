import { useState } from 'react';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // In a real application, you would send this to a server
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };
  
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 
            className="text-3xl font-bold mb-4"
            data-aos="fade-up"
          >
            Stay Updated With Event News
          </h2>
          <p 
            className="text-primary-100 mb-8"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Subscribe to our newsletter and be the first to know about upcoming events, 
            exclusive offers, and exciting news.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit"
              className="btn bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
            >
              Subscribe
            </button>
          </form>
          
          <p 
            className="text-sm text-primary-200 mt-4"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;