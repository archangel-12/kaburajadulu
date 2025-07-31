import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { BlogCard } from './BlogCard';

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  imageUrl: string;
  title: string;
  link?: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const categories = ['Semua', 'Lowongan', 'Beasiswa', 'Event', 'Kelas Bahasa', 'Berita'];

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredPosts = selectedCategory === 'Semua' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const handleCardClick = (link?: string) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="flex items-center justify-between w-full h-10 mb-12">
          <div className="flex items-center gap-10">
            <h2 className="text-[32px] font-bold text-gray-900 leading-none">Blog</h2>
            
            <div className="flex items-center gap-4 w-[595px] h-[21px]">
              {categories.map((category, index) => (
                <React.Fragment key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "text-[17px] text-gray-900 transition-all whitespace-nowrap",
                      selectedCategory === category 
                        ? "font-semibold text-blue-600 border-b-2 border-blue-600" 
                        : "font-normal hover:opacity-70"
                    )}
                  >
                    {category}
                  </button>
                  {index < categories.length - 1 && (
                    <div className="w-1 h-1 bg-gray-900 opacity-20 rounded-full"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <button className="text-[17px] text-gray-900 hover:opacity-70 transition-opacity">
            Lainnya
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              category={post.category}
              date={post.date}
              imageUrl={post.imageUrl}
              title={post.title}
              onClick={() => handleCardClick(post.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};