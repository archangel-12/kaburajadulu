import type { BlogPost } from '@/components/blog/BlogSection';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    category: 'Berita',
    date: '3 April 2025',
    imageUrl: '/images/blog/seoul-subway.jpg',
    title: 'Puisi berjudul \'Aku\' karya Chairil Anwar ditampilkan di stasiun kereta bawah tanah kota Seoul',
    link: '/blog/puisi-chairil-anwar-seoul'
  },
  {
    id: '2',
    category: 'Beasiswa',
    date: '19 Maret 2025',
    imageUrl: '/images/blog/seoul-university.jpg',
    title: 'Seoul University Scholarship 2025 in South Korea (Fully Funded)',
    link: '/blog/seoul-university-scholarship-2025'
  },
  {
    id: '3',
    category: 'Lowongan',
    date: '1 Maret 2025',
    imageUrl: '/images/blog/network-engineer.jpg',
    title: 'Network Engineer by IT / Staffing Industry in IT & Telecommunication, Tokyo, Japan',
    link: '/blog/network-engineer-tokyo'
  }
];