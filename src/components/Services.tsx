'use client'
import React from 'react';
import Link from 'next/link';
import {
  FiArrowRight,
  FiCheck,
  FiFeather,
  FiHeart,
  FiSmile,
  FiSun,
} from 'react-icons/fi';

const services = [
  {
    icon: FiSmile,
    title: 'Cilt Bakımı',
    description:
      'Nem dengesi, arındırma ve canlandırma odaklı uygulamalarla cildinizin ihtiyacına uygun bakım planları hazırlıyoruz.',
    highlights: ['Kişisel cilt analizi', 'Parlak ve canlı görünüm'],
  },
  {
    icon: FiSun,
    title: 'Lazer Epilasyon',
    description:
      'Konforlu seans planı ve modern cihazlarla istenmeyen tüylerde uzun süreli pürüzsüzlük hedefleyen uygulamalar sunuyoruz.',
    highlights: ['Bölgesel uygulama seçenekleri', 'Düzenli takip süreci'],
  },
  {
    icon: FiFeather,
    title: 'Kaş ve Kirpik',
    description:
      'Yüz ifadenizi belirginleştiren kaş tasarımı, lifting ve kirpik bakımı ile doğal ama etkili bir sonuç elde ediyoruz.',
    highlights: ['Doğal yüz uyumu', 'Zarif ve bakımlı bitiş'],
  },
  {
    icon: FiHeart,
    title: 'Vücut Bakımı',
    description:
      'Rahatlama, toparlanma ve yenilenme hissi veren vücut bakım ritüelleriyle kendinize ayırdığınız zamanı özel kılıyoruz.',
    highlights: ['Rahatlatıcı deneyim', 'Bütünsel bakım yaklaşımı'],
  },
] as const;

const Services = () => {
  return (
    <section
      id="hizmetler"
      className="lale-dark-section pb-24 pt-36 sm:pb-28 sm:pt-44"
    >
      <div className="relative mt-20 mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
            İMZA BAKIMLAR
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
            Güzelliğinizi ortaya çıkaran
            <span className="block text-[var(--lale-gold)]">prestijli bakım deneyimleri</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
            Doğallık, zarafet ve güven hissini bir arada taşıyan uygulamalarla
            her ziyareti seçkin bir güzellik ritüeline dönüştürüyoruz.
          </p>
        </div>

        <div className="lale-card-dark mt-16 rounded-[10px] p-8 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--lale-gold)]">
              Güzellik Ritüeli
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[var(--lale-ivory)] sm:text-4xl">
              İhtiyacınıza göre şekillenen profesyonel dokunuşlar
            </h3>

            <p className="mt-6 text-base leading-8 text-[rgba(251,250,246,0.68)] sm:text-lg">
              Her bakım öncesinde cilt ve beklenti analizi yaparak sizi yormayan,
              aksine tazeleyen bir seans planı kurguluyoruz. Sonuç kadar sürecin
              de konforlu olmasına odaklanıyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[8px] border border-[rgba(212,175,55,0.18)] bg-[rgba(251,250,246,0.05)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.48)] hover:bg-[rgba(251,250,246,0.08)] hover:shadow-[0_24px_40px_rgba(0,0,0,0.22)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(212,175,55,0.12)] text-[var(--lale-gold)] shadow-inner">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-[var(--lale-ivory)]">
                    {service.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[rgba(251,250,246,0.68)]">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-[rgba(251,250,246,0.68)]"
                      >
                        <FiCheck className="h-4 w-4 text-[var(--lale-gold)]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-[rgba(13,77,63,0.14)] pt-10 sm:flex-row">
            <Link
              href="/iletisim"
              className="lale-gold-button gap-3"
            >
              Randevu Al
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/hakkimizda"
              className="lale-outline-button"
            >
              Merkezimizi Tanıyın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
