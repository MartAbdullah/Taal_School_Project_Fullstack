import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, FileText, ArrowRight } from 'lucide-react';
import DashboardStats from './DashboardStats';

const HomePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Students',
      description: 'Manage student records and performance tracking',
      icon: <Users className="text-blue-600" size={32} />,
      path: '/students',
      color: 'bg-blue-50',
      borderColor: 'border-blue-100',
      stats: '1,240 Registered'
    },
    {
      title: 'Courses',
      description: 'Browse curriculum and educational materials',
      icon: <BookOpen className="text-orange-600" size={32} />,
      path: '/courses',
      color: 'bg-orange-50',
      borderColor: 'border-orange-100',
      stats: '48 Active Courses'
    },
    {
      title: 'Questions',
      description: 'Access exam database and practice tests',
      icon: <FileText className="text-teal-600" size={32} />,
      path: '/questions',
      color: 'bg-teal-50',
      borderColor: 'border-teal-100',
stats: '4,120 Questions'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-10 py-12 space-y-12 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-950 font-sans tracking-tight leading-tight">
          Welcome to <span className="bg-linear-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">Career Academy</span>
        </h1>
        <p className="text-lg font-medium text-gray-500 max-w-2xl leading-relaxed">
          Manage your educational ecosystem from one central hub. Streamline student tracking, course management, and academic evaluations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {menuItems.map((item) => (
          <div 
            key={item.title}
            onClick={() => navigate(item.path)}
            className={`group p-8 rounded-4xl border ${item.borderColor} ${item.color} cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowRight className="text-gray-400 group-hover:text-gray-600" size={20} />
            </div>
            
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 ring-1 ring-black/5">
              {item.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{item.title}</h3>
            <p className="text-sm font-semibold text-gray-500 leading-relaxed mb-6 italic">{item.description}</p>
            
            <div className="pt-6 border-t border-black/5">
               <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">{item.stats}</span>
            </div>
          </div>
        ))}
      </div>
      
      <DashboardStats />
    </div>
  );
};

export default HomePage;
