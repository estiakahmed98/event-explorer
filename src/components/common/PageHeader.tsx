import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, bgImage }) => {
  const bgStyle = bgImage 
    ? { backgroundImage: `url(${bgImage})` }
    : { background: 'linear-gradient(to right, #6366F1, #4F46E5)' };

  return (
    <div 
      className="relative py-20 bg-primary-600 text-white bg-cover bg-center"
      style={bgStyle}
    >
      {bgImage && <div className="absolute inset-0 bg-black opacity-60"></div>}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            {title}
          </h1>
          {description && (
            <p 
              className="text-lg text-primary-100"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;