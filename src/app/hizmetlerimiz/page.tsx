import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiFeather, FiHeart, FiShield, FiSmile, FiSun } from 'react-icons/fi';

const services = [
  {
    slug: 'cilt-bakimi',
    icon: FiSmile,
    title: 'Cilt Bakımı',
    description:
      'Cildinizin ihtiyacına uygun arındırma, nemlendirme ve canlandırma uygulamalarıyla daha dengeli ve ışıltılı bir görünüm hedefliyoruz.',
    highlights: ['Kişisel cilt analizi', 'Derin temizlik', 'Nem dengesi desteği'],
    image: '/hizmetler/hizmet1.jpeg',
  },
  {
    slug: 'lazer-epilasyon',
    icon: FiSun,
    title: 'Lazer Epilasyon',
    description:
      'Modern cihazlar ve planlı seans akışı ile konforlu bir süreçte pürüzsüz görünüme ulaşmanıza destek oluyoruz.',
    highlights: ['Bölgesel uygulama', 'Düzenli takip', 'Konforlu seans planı'],
    image: '/hizmetler/hizmet2.webp',
  },
  {
    slug: 'kas-ve-kirpik',
    icon: FiFeather,
    title: 'Kaş ve Kirpik',
    description:
      'Kaş tasarımı ve kirpik uygulamalarında yüzünüze uyumlu, belirgin ama doğal bir etki oluşturuyoruz.',
    highlights: ['Doğal yüz uyumu', 'Zarif bitiş', 'Kişisel tasarım yaklaşımı'],
    image: '/hizmetler/himzet3.jpg',
  },
  {
    slug: 'vucut-bakimi',
    icon: FiHeart,
    title: 'Vücut Bakımı',
    description:
      'Rahatlama, toparlanma ve yenilenme hissi veren profesyonel bakımlarla kendinize ayırdığınız zamanı özel hale getiriyoruz.',
    highlights: ['Rahatlatıcı deneyim', 'Bütünsel yaklaşım', 'Kişisel seans planı'],
    image: '/hizmetler/hizmet4.webp',
  },
] as const;

const values = [
  {
    icon: FiShield,
    title: 'Güven Veren Süreç',
    description: 'Hijyen, doğru ürün seçimi ve profesyonel uygulama adımlarıyla her seansı özenle yönetiyoruz.',
  },
  {
    icon: FiHeart,
    title: 'Sakin Deneyim',
    description: 'Randevu öncesinden seans sonrasına kadar sizi yormayan, dingin ve özel hissettiren bir akış sunuyoruz.',
  },
  {
    icon: FiSmile,
    title: 'Kişisel Yaklaşım',
    description: 'Her misafirin beklentisini ve ihtiyacını dinleyerek ona en uygun bakım ritüelini birlikte planlıyoruz.',
  },
] as const;

const ServicesPage = () => {
  return (
    <main className="bg-[#fbf6ef]">
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/banner/hizmetlerimiz_banner.png"
            alt="Lala Güzellik Merkezi Hizmetlerimiz"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          {/* Elegant Overlay like About Page */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,0.95)_0%,rgba(247,241,232,0.8)_35%,rgba(247,241,232,0.4)_60%,transparent_100%)]" />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        
        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-2xl pt-[20px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#b89562]" />
              <span className="text-sm tracking-[0.3em] text-[#343434] uppercase font-medium">PROFESYONEL ÇÖZÜMLER</span>
            </div>
            
            <h1 className="font-serif text-[64px] sm:text-[86px] leading-[0.9] text-[#111111] mb-6">
              İmza <span className="block text-[#b78a49]">Bakımlar</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#2d2d2d] leading-relaxed max-w-lg">
              Cildinize, bedeninize ve ruhunuza iyi gelecek uzman uygulamalarımızla tanışın.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fcf8f3] py-24 sm:py-28">
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
              İhtiyacınıza göre şekillenen
              <span className="block text-[#b88b4c]">premium bakım seçimleri</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f5a54]">
              Her bakım öncesinde sizi dinliyor, beklentinize uygun uygulama akışını
              planlıyor ve sürecin tamamında konforu korumaya odaklanıyoruz.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="overflow-hidden rounded-[34px] border border-[#eadcc8] bg-white/80 shadow-[0_24px_80px_rgba(124,96,54,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(124,96,54,0.12)]"
                >
                  <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-[280px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1811]/30 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/88 text-[#b88b4c] shadow-sm backdrop-blur">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>

                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#b18449]">
                        Özel Bakım
                      </p>
                      <h3 className="mt-3 font-serif text-3xl text-[#1a1a1a]">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#645f58] sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {service.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 text-sm text-[#6c675f]"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f8efe2]">
                              <FiCheck className="h-4 w-4 text-[#c49a5e]" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`/hizmetlerimiz/${service.slug}`}
                          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b88b4c] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#a4763c]"
                        >
                          Detayları İncele
                          <FiArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/iletisim"
                          className="inline-flex items-center justify-center rounded-full border border-[#d7b687] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#a4763c] transition-colors hover:bg-[#fbf3e7]"
                        >
                          Randevu Oluştur
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fcf6ee] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(191,151,96,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#dbc29d] bg-white/80 px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#b18449] shadow-[0_12px_30px_rgba(191,151,96,0.08)] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
              NEDEN LALA
              <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
            </div>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-[#171717] sm:text-5xl">
              Sonuçtan önce
              <span className="block text-[#b88b4c]">deneyime de özen gösteriyoruz</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f5a54]">
              Merkezimize gelen herkesin kendini rahat, güvende ve özel hissetmesini
              önemsiyoruz. Bu anlayış, tüm hizmetlerimizin temelini oluşturuyor.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-[30px] border border-[#eadcc8] bg-white/80 p-7 shadow-[0_20px_50px_rgba(124,96,54,0.07)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6ecdf] text-[#b88b4c] shadow-inner">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-[#1f1f1f]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#645f58] sm:text-base">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f2e9] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.92),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(191,151,96,0.10),transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-7 lg:px-10">
          <div className="rounded-[34px] border border-[#e7d5bf] bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(249,239,226,0.96))] p-8 shadow-[0_20px_50px_rgba(124,96,54,0.06)] sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#b18449]">
              Randevu Planlama
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#1f1f1f] sm:text-5xl">
              Size en uygun bakım planını birlikte oluşturalım
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#655f57] sm:text-lg">
              İster ilk kez gelin ister rutininizi güçlendirmek isteyin, size en uygun
              uygulamayı birlikte belirleyelim ve keyifli bir merkez deneyimi planlayalım.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b88b4c] px-8 py-4 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#a4763c]"
              >
                İletişime Geçin
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/galeri"
                className="inline-flex items-center justify-center rounded-full border border-[#d7b687] bg-white/70 px-8 py-4 text-sm font-semibold tracking-[0.08em] text-[#a4763c] transition-colors hover:bg-[#fbf3e7]"
              >
                Galeriyi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
