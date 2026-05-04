'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiCheckCircle, FiExternalLink, FiMapPin, FiStar } from 'react-icons/fi';

const References = () => {
  const [counts, setCounts] = useState({
    reviews: 0,
    customers: 0,
    years: 0,
    satisfaction: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    reviews: 128,
    customers: 500,
    years: 8,
    satisfaction: 98,
  };

  const animateCount = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);

      callback(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            animateCount(0, targetCounts.reviews, 1800, (value) =>
              setCounts((prev) => ({ ...prev, reviews: value }))
            );
            animateCount(0, targetCounts.customers, 1800, (value) =>
              setCounts((prev) => ({ ...prev, customers: value }))
            );
            animateCount(0, targetCounts.years, 1800, (value) =>
              setCounts((prev) => ({ ...prev, years: value }))
            );
            animateCount(0, targetCounts.satisfaction, 1800, (value) =>
              setCounts((prev) => ({ ...prev, satisfaction: value }))
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetCounts.reviews, targetCounts.customers, targetCounts.years, targetCounts.satisfaction]);

  const reviews = [
    {
      name: 'Elif K.',
      service: 'Cilt Bakımı',
      location: 'İstanbul',
      rating: 5,
      time: '2 hafta önce',
      comment:
        'İlk girdiğim andan itibaren çok huzurlu bir ortam vardı. Cilt bakımı sonrasında yüzüm daha aydınlık ve dinlenmiş göründü.',
      image: '/img/ayşe.avif',
    },
    {
      name: 'Merve A.',
      service: 'Lazer Epilasyon',
      location: 'Ataşehir',
      rating: 5,
      time: '1 ay önce',
      comment:
        'Süreç detaylı anlatıldı, çok nazik yaklaştılar. Seanslar oldukça konforlu geçti ve düzenli takip yapmaları güven verdi.',
      image: '/img/banu.avif',
    },
    {
      name: 'Seda T.',
      service: 'Kaş ve Kirpik',
      location: 'Kadıköy',
      rating: 5,
      time: '3 hafta önce',
      comment:
        'Kaş tasarımında tam istediğim gibi doğal bir görünüm elde edildi. Fazla abartmadan yüzüme en uygun şekli verdiler.',
      image: '/img/ahmet.avif',
    },
    {
      name: 'Gizem Y.',
      service: 'Vücut Bakımı',
      location: 'Üsküdar',
      rating: 5,
      time: '5 gün önce',
      comment:
        'Bakım sonrası hem fiziksel olarak rahatladım hem de kendimi çok iyi hissettim. Ortam tertemiz ve ekip çok ilgiliydi.',
      image: '/img/ali.avif',
    },
  ] as const;

  return (
    <section
      id="referanslar"
      className="lale-dark-section py-24 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
            MÜŞTERİ DENEYİMLERİ
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
            Misafirlerimizin paylaştığı
            <span className="block text-[var(--lale-gold)]">gerçek deneyimler</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
            Google yorumu hissi veren, samimi ve doğal geri bildirimleri sitenin
            sakin premium diliyle bir araya getirdik.
          </p>
        </div>

        <div className="lale-card-dark mt-16 rounded-[10px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[10px] border border-[rgba(212,175,55,0.18)] bg-[rgba(251,250,246,0.05)] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-sm">
                  <span className="text-xl font-bold text-[#4285F4]">G</span>
                </div>
                <div>
                  <p className="text-sm tracking-[0.14em] text-[var(--lale-gold)]">
                    GOOGLE YORUMLARI
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-[var(--lale-ivory)]">
                    4.9 / 5.0
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-[var(--lale-gold)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-[rgba(251,250,246,0.68)]">
                Misafirlerimizin yorumlarında en çok; güler yüzlü yaklaşım,
                hijyen, doğal sonuç ve rahat hissettiren atmosfer öne çıkıyor.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-[8px] border border-[rgba(212,175,55,0.12)] bg-[rgba(251,250,246,0.06)] px-4 py-3">
                  <FiCheckCircle className="h-5 w-5 text-[var(--lale-gold)]" />
                  <span className="text-sm text-[rgba(251,250,246,0.74)]">Doğal ve zarif sonuç odaklı</span>
                </div>
                <div className="flex items-center gap-3 rounded-[8px] border border-[rgba(212,175,55,0.12)] bg-[rgba(251,250,246,0.06)] px-4 py-3">
                  <FiCheckCircle className="h-5 w-5 text-[var(--lale-gold)]" />
                  <span className="text-sm text-[rgba(251,250,246,0.74)]">Temiz ve huzurlu merkez deneyimi</span>
                </div>
                <div className="flex items-center gap-3 rounded-[8px] border border-[rgba(212,175,55,0.12)] bg-[rgba(251,250,246,0.06)] px-4 py-3">
                  <FiCheckCircle className="h-5 w-5 text-[var(--lale-gold)]" />
                  <span className="text-sm text-[rgba(251,250,246,0.74)]">Düzenli takip ve ilgili ekip</span>
                </div>
              </div>

              <div className="mt-7 rounded-[8px] border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.14em] text-[var(--lale-gold)]">
                      GÖRÜNTÜLEME
                    </p>
                    <p className="mt-1 text-sm text-[rgba(251,250,246,0.68)]">
                      Google benzeri yorum özeti
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--lale-gold)]">
                    İncele
                    <FiExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {reviews.map((review) => (
                <article
                  key={`${review.name}-${review.service}`}
                  className="rounded-[10px] border border-[rgba(212,175,55,0.18)] bg-[rgba(251,250,246,0.05)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={52}
                        height={52}
                        className="h-[52px] w-[52px] rounded-full object-cover grayscale"
                      />
                      <div>
                        <h4 className="text-base font-semibold text-[var(--lale-ivory)]">
                          {review.name}
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-xs text-[rgba(251,250,246,0.52)]">
                          <FiMapPin className="h-3.5 w-3.5" />
                          <span>{review.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-[rgba(251,250,246,0.52)]">{review.time}</div>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-[var(--lale-gold)]">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <FiStar key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[rgba(251,250,246,0.68)]">
                    {review.comment}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[rgba(212,175,55,0.12)] pt-4">
                    <span className="rounded-full border border-[rgba(212,175,55,0.18)] bg-[rgba(212,175,55,0.08)] px-3 py-1 text-xs text-[var(--lale-gold)]">
                      {review.service}
                    </span>
                    <span className="text-xs text-[rgba(251,250,246,0.52)]">Google üzerinden yorum</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            ref={statsRef}
            className="mt-10 grid gap-4 border-t border-[rgba(212,175,55,0.14)] pt-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="rounded-[8px] border border-[rgba(212,175,55,0.14)] bg-[rgba(251,250,246,0.05)] p-5 text-center">
              <div className="text-3xl font-semibold text-[var(--lale-gold)]">
                {counts.reviews}+
              </div>
              <p className="mt-2 text-sm text-[rgba(251,250,246,0.68)]">Yorum ve değerlendirme</p>
            </div>
            <div className="rounded-[8px] border border-[rgba(212,175,55,0.14)] bg-[rgba(251,250,246,0.05)] p-5 text-center">
              <div className="text-3xl font-semibold text-[var(--lale-gold)]">
                {counts.customers}+
              </div>
              <p className="mt-2 text-sm text-[rgba(251,250,246,0.68)]">Mutlu misafir</p>
            </div>
            <div className="rounded-[8px] border border-[rgba(212,175,55,0.14)] bg-[rgba(251,250,246,0.05)] p-5 text-center">
              <div className="text-3xl font-semibold text-[var(--lale-gold)]">
                {counts.years}+
              </div>
              <p className="mt-2 text-sm text-[rgba(251,250,246,0.68)]">Yıllık deneyim</p>
            </div>
            <div className="rounded-[8px] border border-[rgba(212,175,55,0.14)] bg-[rgba(251,250,246,0.05)] p-5 text-center">
              <div className="text-3xl font-semibold text-[var(--lale-gold)]">
                %{counts.satisfaction}
              </div>
              <p className="mt-2 text-sm text-[rgba(251,250,246,0.68)]">Memnuniyet oranı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
