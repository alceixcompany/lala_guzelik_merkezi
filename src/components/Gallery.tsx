'use client'
import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

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
      <section className="lale-dark-section py-20">
        <div className="max-w-6xl mx-auto px-4 pt-[10px]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[var(--lale-gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[rgba(251,250,246,0.72)]">Galeri yükleniyor...</p>
          </div>
        </div>
      </section>
    );
  }

  if (galleryItems.length === 0) {
    return null; // Don't show anything if no gallery items
  }

  return (
    <section className="lale-dark-section py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-16 pt-[10px]">
          <div className="lale-kicker mb-8 bg-[rgba(6,35,31,0.56)]">
            ÇALIŞMA ÖRNEKLERİMİZ
          </div>

          <h2 className="font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
            Güzelliğinize ilham veren
            <span className="block text-[var(--lale-gold)]">gerçek dönüşümler</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
            Merkezimizde uyguladığımız özel bakım süreçlerinden seçilmiş en özel kareler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group lale-card-dark relative overflow-hidden rounded-[10px] transition-all duration-700 hover:-translate-y-2 hover:border-[rgba(212,175,55,0.4)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="relative h-[340px] overflow-hidden">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--lale-emerald-deep)] flex items-center justify-center">
                    <span className="text-6xl text-[var(--lale-gold)] opacity-60">✦</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,35,31,0.08),rgba(6,35,31,0.68))]" />
                <div className="absolute left-6 top-6 rounded-full border border-[rgba(212,175,55,0.34)] bg-[rgba(6,35,31,0.68)] px-4 py-2 text-xs font-medium tracking-[0.14em] text-[var(--lale-gold)] backdrop-blur">
                  {getCategoryName(item.categoryId)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Link 
                    href="/galeri"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--lale-gold)] transition-colors hover:text-[var(--lale-gold-soft)]"
                  >
                    Detayları Görüntüle
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="p-8">
                <h3 className="mb-3 font-serif text-2xl text-[var(--lale-ivory)] transition-colors duration-300 group-hover:text-[var(--lale-gold)]">
                  {item.title}
                </h3>
                
                {item.description && (
                  <div 
                    className="text-sm leading-7 text-[rgba(251,250,246,0.66)] line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link 
            href="/galeri"
            className="lale-outline-button gap-3"
          >
            Tüm Galeriyi Keşfedin
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
