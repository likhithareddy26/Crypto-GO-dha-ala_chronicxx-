import React from 'react';
import { Activity } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
        <Activity className="inline-block mr-2 text-blue-500" size={32} />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          {title}
        </span>
      </h1>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default Header;