import React from 'react';

interface PracticeCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ title, description, icon, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-br from-navy to-steel">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">{icon}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
        <p className="text-steel leading-relaxed">{description}</p>
        <button className="mt-4 btn-primary">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PracticeCard; 