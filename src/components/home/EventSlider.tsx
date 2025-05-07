import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import events from '../../data/events';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventSlider = () => {
  const { currentUser } = useAuth();
  const featuredEvents = events.filter(event => event.featured);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Featured Events
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Discover trending and popular events happening in your area. 
            Don't miss out on these exciting opportunities!
          </p>
        </div>

        <div 
          className="relative"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            {featuredEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.thumbnail} 
                      alt={event.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                        {event.description}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EventSlider;