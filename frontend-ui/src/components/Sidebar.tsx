import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, LogOut, User, Settings, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Students', path: '/students', icon: <Users size={20} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={20} /> },
  ];

  return (
    <aside className={`bg-white shadow-xl transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col h-screen sticky top-0`}>
      <div className="p-6 flex items-center justify-between border-b border-gray-100">
        {isOpen && <h2 className="text-xl font-bold bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Career Academy</h2>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-orange-50 rounded-lg text-orange-600">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <nav className="flex-1 mt-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center space-x-4 p-3 rounded-xl transition-all ${
                isActive ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'text-gray-500 hover:bg-orange-50 hover:text-orange-600'
              }`
            }
          >
            {item.icon}
            {isOpen && <span className="font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center space-x-4 p-3 w-full text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all">
          <LogOut size={20} />
          {isOpen && <span className="font-medium">Quick Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
