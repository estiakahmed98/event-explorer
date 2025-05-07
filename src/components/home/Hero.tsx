import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Hero = () => {
  const { currentUser } = useAuth();

  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
        style={{ opacity: 0.3 }}
      ></div>
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Discover Amazing Events Near You
          </h1>
          <p 
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Explore local concerts, workshops, exhibitions, and more. 
            Find your next unforgettable experience with Event Explorer.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <a 
              href="#events" 
              className="btn bg-white text-primary-700 hover:bg-gray-100"
            >
              Explore Events
            </a>
            {!currentUser && (
              <Link 
                to="/register" 
                className="btn bg-transparent border-2 border-white hover:bg-white/10"
              >
                Sign Up Free
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#F8FAFC" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;