import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Box, Type, Paintbrush } from 'lucide-react';

const Card = ({ title, description, icon: Icon, link }: {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}) => (
  <Link
    to={link}
    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
      <h3 className="ml-2 text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const Home = () => {
  const cards = [
    {
      title: 'Design Tokens',
      description: 'Explore our design tokens including colors, typography, spacing, and more.',
      icon: Palette,
      link: '/design-tokens'
    },
    {
      title: 'Components',
      description: 'Browse our collection of reusable UI components.',
      icon: Box,
      link: '/components'
    },
    {
      title: 'Typography',
      description: 'Learn about our type scale, fonts, and text styles.',
      icon: Type,
      link: '/typography'
    },
    {
      title: 'Colors',
      description: 'View our color palette and usage guidelines.',
      icon: Paintbrush,
      link: '/colors'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Design System</h1>
        <p className="mt-2 text-gray-600">
          Welcome to our design system. Here you'll find everything you need to create consistent and beautiful interfaces.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;