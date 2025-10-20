import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { BlogCard } from './BlogCard';
import type { CollectionEntry } from 'astro:content';

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  imageUrl: string;
  title: string;
  link?: string;
}

interface BlogSectionProps {
  posts: CollectionEntry<'blog'>[];
}

const categories = ['Semua', 'Lowongan', 'Beasiswa', 'Event', 'Kelas Bahasa', 'Berita'];

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredPosts = selectedCategory === 'Semua' 
    ? posts 
    : posts.filter(post => post.data.category === selectedCategory);

  const handleCardClick = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <section className="py-16 px-4">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 leading-none">Blog</h2>
            
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex items-center gap-4 w-max md:w-auto pb-2 md:pb-0">
                {categories.map((category, index) => (
                  <React.Fragment key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "text-[15px] md:text-[17px] text-gray-900 transition-all whitespace-nowrap",
                        selectedCategory === category 
                          ? "font-semibold text-blue-600 border-b-2 border-blue-600" 
                          : "font-normal hover:opacity-70"
                      )}
                    >
                      {category}
                    </button>
                    {index < categories.length - 1 && (
                      <div className="w-1 h-1 bg-gray-900 opacity-20 rounded-full flex-shrink-0"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          
          <button className="hidden md:block text-[17px] text-gray-900 hover:opacity-70 transition-opacity whitespace-nowrap">
            Lainnya
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              category={post.data.category}
              date={post.data.pubDate.toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
              imageUrl={post.data.image}
              title={post.data.title}
              onClick={() => handleCardClick(post.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};