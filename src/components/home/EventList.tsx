import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Filter } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import events from '../../data/events';

const EventList = () => {
  const { currentUser } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(events.map(event => event.category)))];
  
  // Filter events by selected category
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Upcoming Events
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto mb-8"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Browse through our collection of exciting upcoming events and find the perfect one for you.
          </p>
          
          {/* Category Filter */}
          <div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className="flex items-center mr-3 text-gray-700">
              <Filter className="w-4 h-4 mr-1" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id}
              className="card h-full flex flex-col"
              data-aos="fade-up" 
              data-aos-delay={100 * (index % 3)}
            >
              <div className="relative h-48">
                <img 
                  src={event.thumbnail} 
                  alt={event.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ${event.entryFee}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {event.description.substring(0, 100)}...
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  {currentUser ? (
                    <Link 
                      to={`/event/${event.id}`} 
                      className="w-full btn btn-primary text-center"
                    >
                      View More
                    </Link>
                  ) : (
                    <Link 
                      to="/login" 
                      className="w-full btn btn-primary text-center"
                    >
                      Login to View
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;