"use client"

import { useState } from 'react'
import Link from 'next/link'
import BlogCard from '../BlogCard'
import { cn } from '@/lib/utils'

type Category = 'semua' | 'lowongan' | 'beasiswa' | 'event' | 'kelas-bahasa' | 'berita'

const categories: { id: Category; label: string }[] = [
  { id: 'semua', label: 'Semua' },
  { id: 'lowongan', label: 'Lowongan' },
  { id: 'beasiswa', label: 'Beasiswa' },
  { id: 'event', label: 'Event' },
  { id: 'kelas-bahasa', label: 'Kelas Bahasa' },
  { id: 'berita', label: 'Berita' }
]

// Sample blog posts - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'Puisi berjudul \'Aku\' karya Chairil Anwar ditampilkan di stasiun kereta bawah tanah kota Seoul',
    imageUrl: '/images/tokyo.webp',
    imageAlt: 'Tokyo cityscape',
    category: 'berita',
    date: '3 April 2023',
  },
  {
    id: 2,
    title: 'Seoul University Scholarship 2025 in South Korea (Fully Funded)',
    imageUrl: '/images/tokyo.webp',
    imageAlt: 'Seoul University',
    category: 'beasiswa',
    date: '19 Maret 2023',
  },
  {
    id: 3,
    title: 'Network Engineer by IT / Staffing Industry in IT & Telecommunication, Tokyo, Japan',
    imageUrl: '/images/tokyo.webp',
    imageAlt: 'Tokyo office building',
    category: 'lowongan',
    date: '1 Maret 2023',
  },
]

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('semua')

  const filteredPosts = selectedCategory === 'semua'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-10 mb-6">
          <h2 className="text-2xl font-bold">Blog</h2>
          <div className="flex items-center gap-8 mt-4 md:mt-0 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'text-sm whitespace-nowrap py-1 border-b-2 border-transparent transition-colors',
                  selectedCategory === category.id ? 'border-primary font-medium text-primary' : 'text-gray-500 hover:text-gray-700'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              category={categories.find(c => c.id === post.category)?.label || post.category}
              date={post.date}
              imageUrl={post.imageUrl}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection 