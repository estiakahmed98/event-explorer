import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User as UserIcon,
  Mail, 
  Phone,
  Users,
  ChevronLeft,
  Share2
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import events from '../data/events';
import PageHeader from '../components/common/PageHeader';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [reserveName, setReserveName] = useState('');
  const [reserveEmail, setReserveEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { currentUser } = useAuth();
  
  useEffect(() => {
    if (id) {
      const foundEvent = events.find(e => e.id === id);
      if (foundEvent) {
        setEvent(foundEvent);
        
        // Pre-fill form with user data if available
        if (currentUser) {
          setReserveName(currentUser.displayName || '');
          setReserveEmail(currentUser.email || '');
        }
      }
      setLoading(false);
    }
  }, [id, currentUser]);
  
  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reserveName || !reserveEmail) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Seat reserved successfully!');
    }, 1000);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  if (!event) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
        <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{event.name} - Event Explorer</title>
      </Helmet>
      
      <PageHeader 
        title={event.name}
        description={`${event.category.charAt(0).toUpperCase() + event.category.slice(1)} • ${event.date}`}
        bgImage={event.thumbnail}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3" data-aos="fade-up">
              <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-500 mb-6">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Events
              </Link>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <img 
                  src={event.thumbnail} 
                  alt={event.name} 
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {event.category}
                    </span>
                    <span className="inline-block bg-accent-100 text-accent-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      ${event.entryFee}
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {event.remainingSeats} seats left
                    </span>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.name}</h1>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2 text-primary-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2 text-primary-500" />
                      <span>Capacity: {event.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none mb-8">
                    <h2 className="text-xl font-semibold mb-3">About This Event</h2>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h2 className="text-xl font-semibold mb-3">Organizer</h2>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <UserIcon className="w-5 h-5 mr-2 text-primary-500" />
                        <span>{event.organizerName}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-5 h-5 mr-2 text-primary-500" />
                        <span>{event.organizerEmail}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 mr-2 text-primary-500" />
                        <span>{event.organizerPhone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      className="inline-flex items-center text-gray-600 hover:text-primary-500"
                      onClick={() => {
                        navigator.share({
                          title: event.name,
                          text: `Check out this event: ${event.name}`,
                          url: window.location.href,
                        }).catch(err => {
                          console.error('Share failed:', err);
                        });
                      }}
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share this Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 mt-8 lg:mt-0" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Reserve Your Seat</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center">
                      <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                        <p className="font-medium">Reservation Successful!</p>
                        <p className="mt-2">Thank you for reserving your seat for {event.name}.</p>
                      </div>
                      <p className="text-gray-600 mb-4">
                        We've sent you a confirmation email with all the details.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn btn-outline"
                      >
                        Make Another Reservation
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleReserve} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          value={reserveName}
                          onChange={(e) => setReserveName(e.target.value)}
                          className="input-field"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={reserveEmail}
                          onChange={(e) => setReserveEmail(e.target.value)}
                          className="input-field"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full btn btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Processing...' : 'Reserve Seat'}
                        </button>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4">
                        By reserving, you agree to our terms and conditions. Your information is secure and will only be used for this event.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;