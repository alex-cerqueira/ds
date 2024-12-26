import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Paintbrush, Layers, Box, Type, Palette } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Getting Started', icon: <Box className="w-5 h-5" />, path: '/' },
    { name: 'Design Tokens', icon: <Palette className="w-5 h-5" />, path: '/design-tokens' },
    { name: 'Components', icon: <Layers className="w-5 h-5" />, path: '/components' },
    { name: 'Typography', icon: <Type className="w-5 h-5" />, path: '/typography' },
    { name: 'Colors', icon: <Paintbrush className="w-5 h-5" />, path: '/colors' },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
      <nav className="mt-8">
        <div className="px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-2 my-1 text-sm rounded-md ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;