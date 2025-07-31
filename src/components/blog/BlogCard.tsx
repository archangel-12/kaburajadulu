import React from 'react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  category: string;
  date: string;
  imageUrl: string;
  title: string;
  onClick?: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  category,
  date,
  imageUrl,
  title,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "w-[336px] h-[328px] p-2 bg-white rounded-2xl shadow-[4px_4px_20px_0px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-0 hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.12)]",
        "flex flex-col gap-2"
      )}
    >
      <div className="w-full h-[200px] rounded-xl overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-2 px-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-600 font-medium">{category}</span>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <span className="text-gray-500">{date}</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
};