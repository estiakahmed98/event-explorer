import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PageHeader from '../components/common/PageHeader';
import events from '../data/events';

interface Booking {
  id: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  thumbnail: string;
  bookingDate: string;
  status: 'confirmed' | 'cancelled' | 'pending';
}

// Mock data for bookings
const mockBookings: Booking[] = [
  {
    id: '1',
    eventId: '1',
    eventName: 'Tech Conference 2025',
    eventDate: 'June 15, 2025',
    eventTime: '9:00 AM - 6:00 PM',
    eventLocation: 'Tech Hub Convention Center',
    thumbnail: events[0].thumbnail,
    bookingDate: '2024-04-10',
    status: 'confirmed',
  },
  {
    id: '2',
    eventId: '2',
    eventName: 'Summer Music Festival',
    eventDate: 'July 21-23, 2025',
    eventTime: '2:00 PM - 1:00 AM',
    eventLocation: 'City Park Grounds',
    thumbnail: events[1].thumbnail,
    bookingDate: '2024-04-15',
    status: 'confirmed',
  },
  {
    id: '3',
    eventId: '4',
    eventName: 'Modern Art Exhibition',
    eventDate: 'September 10-25, 2025',
    eventTime: '10:00 AM - 8:00 PM',
    eventLocation: 'Metropolitan Art Gallery',
    thumbnail: events[3].thumbnail,
    bookingDate: '2024-04-18',
    status: 'pending',
  },
];

const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  
  const { currentUser } = useAuth();
  
  useEffect(() => {
    // In a real app, fetch bookings from an API
    // For demo, we'll use mock data
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 800);
  }, [currentUser]);
  
  const filteredBookings = activeTab === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === activeTab);
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Confirmed
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelled
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <>
      <Helmet>
        <title>My Bookings - Event Explorer</title>
      </Helmet>
      
      <PageHeader 
        title="My Bookings" 
        description="Manage all your event reservations in one place"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto" data-aos="fade-up">
            {/* Tabs */}
            <div className="bg-white rounded-t-xl shadow-sm border border-gray-200 p-4 flex space-x-4 overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Bookings
              </button>
              <button
                onClick={() => setActiveTab('confirmed')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === 'confirmed'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Confirmed
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === 'pending'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab('cancelled')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === 'cancelled'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancelled
              </button>
            </div>
            
            {/* Bookings List */}
            <div className="bg-white rounded-b-xl shadow-md border-x border-b border-gray-200 divide-y divide-gray-200">
              {loading ? (
                <div className="p-8 text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mb-4"></div>
                  <p className="text-gray-600">Loading your bookings...</p>
                </div>
              ) : filteredBookings.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600 mb-4">You don't have any {activeTab !== 'all' ? activeTab : ''} bookings yet.</p>
                  <Link to="/" className="btn btn-primary">
                    Explore Events
                  </Link>
                </div>
              ) : (
                filteredBookings.map((booking) => (
                  <div key={booking.id} className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <img 
                        src={booking.thumbnail} 
                        alt={booking.eventName} 
                        className="w-full h-32 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-3/4 flex flex-col">
                      <div className="flex flex-wrap justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {booking.eventName}
                        </h3>
                        {getStatusBadge(booking.status)}
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                          <span>{booking.eventDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary-500" />
                          <span>{booking.eventTime}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                          <span>{booking.eventLocation}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-4">
                        Booked on: {new Date(booking.bookingDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <div className="mt-auto flex flex-wrap gap-3">
                        <Link 
                          to={`/event/${booking.eventId}`} 
                          className="btn btn-sm btn-primary"
                        >
                          View Event
                        </Link>
                        {booking.status === 'confirmed' && (
                          <button className="btn btn-sm btn-outline text-red-500 border-red-500 hover:bg-red-50">
                            Cancel Booking
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBookings;