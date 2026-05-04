'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Haber {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const News = () => {
  const [haberler, setHaberler] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const newsSnapshot = await getDocs(collection(db, 'haberler'));
        const newsData = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Haber[];

        const activeNews = newsData.filter((haber) => haber.isActive);
        activeNews.sort((a, b) => (a.order || 0) - (b.order || 0));
        setHaberler(activeNews.slice(0, 3));
      } catch (error) {
        console.error('Haber verisi yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="lale-dark-section py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--lale-gold)] border-t-transparent" />
            <p className="mt-4 text-sm tracking-[0.16em] text-[var(--lale-ivory)]">
              GÜNCEL İÇERİKLER HAZIRLANIYOR
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (haberler.length === 0) {
    return null;
  }

  const [featuredNews, ...otherNews] = haberler;

  return (
    <section className="lale-dark-section py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
            GÜNCEL NOTLAR
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
            Güzellik dünyasından ilham veren
            <span className="block text-[var(--lale-gold)]">bakım ve trend içerikleri</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
            Merkezimizde uyguladığımız bakım yaklaşımları, sezonun öne çıkan
            önerileri ve güzellik rutinlerinize eşlik edecek pratik bilgiler.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="lale-card-dark overflow-hidden rounded-[10px]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px]">
                {featuredNews.imageUrl ? (
                  <Image
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full min-h-[320px] items-center justify-center bg-[linear-gradient(135deg,#06231f,#0d4d3f)] text-6xl text-[var(--lale-gold)]">
                    ✦
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06231f]/72 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full border border-[rgba(212,175,55,0.48)] bg-[rgba(6,35,31,0.74)] px-4 py-2 text-xs font-medium tracking-[0.16em] text-[var(--lale-gold)] backdrop-blur">
                  ÖNE ÇIKAN YAZI
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="text-sm tracking-[0.12em] text-[#a17a45]">
                    {new Date(featuredNews.createdAt).toLocaleDateString('tr-TR')}
                  </p>

                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[var(--lale-ivory)]">
                    {featuredNews.title}
                  </h3>

                  {featuredNews.subtitle && (
                    <p className="mt-4 text-base leading-7 text-[rgba(251,250,246,0.76)]">
                      {featuredNews.subtitle}
                    </p>
                  )}

                  <p className="mt-5 text-sm leading-7 text-[rgba(251,250,246,0.66)]">
                    {featuredNews.description}
                  </p>

                  {featuredNews.tags && featuredNews.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featuredNews.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[rgba(212,175,55,0.34)] bg-[rgba(13,77,63,0.45)] px-3 py-1 text-xs text-[var(--lale-gold)]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link
                    href={`/haberler/${createSlug(featuredNews.title)}`}
                    className="lale-gold-button gap-3"
                  >
                    Yazıyı Oku
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            {otherNews.map((haber) => (
              <article
                key={haber.id}
                className="lale-card-dark rounded-[10px] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[8px] bg-[rgba(13,77,63,0.44)]">
                    {haber.imageUrl ? (
                      <Image
                        src={haber.imageUrl}
                        alt={haber.title}
                        fill
                        className="object-cover grayscale"
                        sizes="112px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-3xl text-[var(--lale-gold)]">
                        ✦
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs tracking-[0.14em] text-[var(--lale-gold)]">
                      {new Date(haber.createdAt).toLocaleDateString('tr-TR')}
                    </p>

                    <Link href={`/haberler/${createSlug(haber.title)}`}>
                      <h3 className="mt-2 line-clamp-2 text-xl font-semibold text-[var(--lale-ivory)] transition-colors hover:text-[var(--lale-gold)]">
                        {haber.title}
                      </h3>
                    </Link>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[rgba(251,250,246,0.66)]">
                      {haber.description}
                    </p>

                    <Link
                      href={`/haberler/${createSlug(haber.title)}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--lale-gold)] transition-colors hover:text-[var(--lale-gold-soft)]"
                    >
                      Devamını Oku
                      <FiArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/haberler"
            className="lale-outline-button"
          >
            Tüm İçerikleri Gör
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
