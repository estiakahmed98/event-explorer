import { Search, Calendar, Star, Bell } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-12 h-12 text-primary-500" />,
      title: 'Discover Events',
      description: 'Find events based on your interests, location, and availability with our powerful search tools.'
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary-500" />,
      title: 'Easy Booking',
      description: 'Reserve your spot for any event with just a few clicks. No complicated processes.'
    },
    {
      icon: <Star className="w-12 h-12 text-primary-500" />,
      title: 'Rate & Review',
      description: 'Share your experiences and help others discover great events through ratings and reviews.'
    },
    {
      icon: <Bell className="w-12 h-12 text-primary-500" />,
      title: 'Event Notifications',
      description: 'Get timely reminders about your upcoming events and never miss an important date.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Why Choose Event Explorer?
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Our platform offers a seamless experience for discovering and attending local events. 
            Here's what makes us stand out from the crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-transform hover:-translate-y-2 duration-300"
              data-aos="fade-up" 
              data-aos-delay={100 * index}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;