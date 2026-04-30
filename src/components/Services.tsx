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
      className="relative overflow-hidden bg-[#fcf8f3] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(191,151,96,0.12),transparent_30%)]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a56f]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#dbc29d] bg-white/75 px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#b18449] shadow-[0_12px_30px_rgba(191,151,96,0.08)] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
            İMZA BAKIMLAR
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#171717] sm:text-5xl">
            Güzelliğinizi ortaya çıkaran
            <span className="block text-[#b88b4c]">özel bakım deneyimleri</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f5a54]">
            Hero bölümündeki sakin, aydınlık ve premium hissi devam ettiren hizmet
            seçimlerimizle her ziyaretinizi keyifli bir güzellik ritüeline
            dönüştürüyoruz.
          </p>
        </div>

        <div className="mt-16 rounded-[34px] border border-[#eadcc8] bg-white/70 p-8 shadow-[0_24px_80px_rgba(124,96,54,0.08)] backdrop-blur sm:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#b18449]">
              Guzellik Ritueli
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[#1a1a1a] sm:text-4xl">
              Ihtiyaciniza gore sekillenen profesyonel dokunuslar
            </h3>

            <p className="mt-6 text-base leading-8 text-[#5c5751] sm:text-lg">
              Her bakim oncesinde cilt ve beklenti analizi yaparak sizi yormayan,
              aksine tazeleyen bir seans plani kurguluyoruz. Sonuc kadar surecin
              de konforlu olmasina odaklaniyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[28px] border border-[#efe4d5] bg-[#fffdfa] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4b183] hover:shadow-[0_24px_40px_rgba(184,139,76,0.12)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6ecdf] text-[#b88b4c] shadow-inner">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-[#1f1f1f]">
                    {service.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#645f58]">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-[#6c675f]"
                      >
                        <FiCheck className="h-4 w-4 text-[#c49a5e]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-[#eadcc8] pt-10 sm:flex-row">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b88b4c] px-7 py-3 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#a4763c]"
            >
              Randevu Al
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/hakkimizda"
              className="inline-flex items-center justify-center rounded-full border border-[#d7b687] px-7 py-3 text-sm font-semibold tracking-[0.08em] text-[#a4763c] transition-colors hover:bg-[#fbf3e7]"
            >
              Merkezimizi Taniyin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
