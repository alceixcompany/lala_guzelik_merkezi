'use client'
import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  isActive: boolean;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  imageUrl: string;
  thumbnailUrl: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  order: number;
}

const Gallery = () => {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories
        const categoriesSnapshot = await getDocs(collection(db, 'gallery_categories'));
        const categoriesData = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryCategory[];
        
        // Client-side sorting
        categoriesData.sort((a, b) => (a.order || 0) - (b.order || 0));
        setCategories(categoriesData);

        // Fetch gallery items
        const itemsSnapshot = await getDocs(collection(db, 'gallery_items'));
        const itemsData = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryItem[];
        
        // Filter active items, sort by order, and take only the latest 6
        const activeItems = itemsData.filter(item => item.isActive);
        activeItems.sort((a, b) => (a.order || 0) - (b.order || 0));
        const latestItems = activeItems.slice(0, 3);
        
        setGalleryItems(latestItems);
        
      } catch (error) {
        console.error('Galeri verisi yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Kategori Yok';
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-[10px]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Galeri yükleniyor...</p>
          </div>
        </div>
      </section>
    );
  }

  if (galleryItems.length === 0) {
    return null; // Don't show anything if no gallery items
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f2e9] py-24 sm:py-28">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(191,151,96,0.1),transparent_30%)]" />
      
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 pt-[10px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#dbc29d] bg-white/80 px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#b18449] shadow-[0_12px_30px_rgba(191,151,96,0.08)] backdrop-blur mb-8">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
            ÇALIŞMA ÖRNEKLERİMİZ
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight text-[#171717] sm:text-5xl">
            Güzelliğinize ilham veren
            <span className="block text-[#b88b4c]">gerçek dönüşümler</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#60584f]">
            Merkezimizde uyguladığımız özel bakım süreçlerinden seçilmiş en özel kareler.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(124,96,54,0.08)] hover:shadow-[0_30px_70px_rgba(124,96,54,0.15)] transition-all duration-700 transform hover:-translate-y-2 border border-[#eadcc8]/30"
            >
              {/* Image Container */}
              <div className="relative h-[340px] overflow-hidden">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-[#fdfaf5] flex items-center justify-center">
                    <span className="text-6xl opacity-20">📷</span>
                  </div>
                )}
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                   <Link 
                    href="/galeri"
                    className="inline-flex items-center text-white font-medium text-sm group/link"
                  >
                    Detayları Görüntüle
                    <div className="ml-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover/link:bg-white group-hover/link:text-[#b18449] transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Content Below Image */}
              <div className="p-8">
                <h3 className="font-serif text-2xl text-[#171717] mb-3 group-hover:text-[#b18449] transition-colors duration-300">
                  {item.title}
                </h3>
                
                {item.description && (
                  <div 
                    className="text-[#60584f] text-sm leading-relaxed line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <Link 
            href="/galeri"
            className="inline-flex items-center group relative"
          >
            <div className="relative z-10 bg-[#b18449] hover:bg-[#a4763c] text-white px-12 py-5 rounded-full font-bold tracking-[0.1em] text-sm transition-all duration-300 shadow-xl shadow-[#b18449]/20 flex items-center gap-4">
              TÜM GALERİYİ KEŞFEDİN
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
