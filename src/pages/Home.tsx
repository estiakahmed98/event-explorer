import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import EventSlider from '../components/home/EventSlider';
import EventList from '../components/home/EventList';
import Features from '../components/home/Features';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Event Explorer - Discover Local Events</title>
        <meta name="description" content="Discover and explore upcoming local events including conferences, workshops, concerts, and more." />
      </Helmet>
      
      <Hero />
      <EventSlider />
      <EventList />
      <Features />
      <Newsletter />
    </>
  );
};

export default Home;