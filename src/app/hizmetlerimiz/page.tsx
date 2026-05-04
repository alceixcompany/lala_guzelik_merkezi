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
    <main className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <section className="lale-page-hero flex min-h-[450px] h-[60vh] items-center">
        <div className="absolute inset-0">
          <Image
            src="/banner/hizmetlerimiz_banner.png"
            alt="Lale Güzellik Merkezi Hizmetlerimiz"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,35,31,0.96)_0%,rgba(6,35,31,0.90)_34%,rgba(6,35,31,0.62)_58%,rgba(6,35,31,0.18)_78%,rgba(6,35,31,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(13,77,63,0.42),rgba(6,35,31,0.16)_40%,transparent_66%)]" />
        </div>
        
        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-2xl pt-[20px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--lale-gold)]" />
              <span className="text-sm tracking-[0.3em] text-[var(--lale-gold)] uppercase font-medium">PROFESYONEL ÇÖZÜMLER</span>
            </div>
            
            <h1 className="mb-6 font-serif text-[64px] leading-[0.9] text-[var(--lale-ivory)] sm:text-[86px]">
              İmza <span className="block text-[var(--lale-gold)]">Bakımlar</span>
            </h1>
            
            <p className="max-w-lg text-lg leading-relaxed text-[rgba(251,250,246,0.74)] sm:text-xl">
              Cildinize, bedeninize ve ruhunuza iyi gelecek uzman uygulamalarımızla tanışın.
            </p>
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
              İMZA BAKIMLAR
            </div>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
              İhtiyacınıza göre şekillenen
              <span className="block text-[var(--lale-gold)]">premium bakım seçimleri</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
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
                  className="lale-card-dark overflow-hidden rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.42)] hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,35,31,0.48)] via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(6,35,31,0.78)] text-[var(--lale-gold)] shadow-sm backdrop-blur">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>

                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lale-gold)]">
                        Özel Bakım
                      </p>
                      <h3 className="mt-3 font-serif text-3xl text-[var(--lale-ivory)]">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[rgba(251,250,246,0.68)] sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {service.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 text-sm text-[rgba(251,250,246,0.70)]"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(212,175,55,0.12)]">
                              <FiCheck className="h-4 w-4 text-[var(--lale-gold)]" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`/hizmetlerimiz/${service.slug}`}
                          className="lale-gold-button gap-3"
                        >
                          Detayları İncele
                          <FiArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/iletisim"
                          className="lale-outline-button"
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

      <section className="lale-dark-section py-24 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
              NEDEN LALE
            </div>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
              Sonuçtan önce
              <span className="block text-[var(--lale-gold)]">deneyime de özen gösteriyoruz</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
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
                  className="lale-card-dark rounded-[14px] p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(212,175,55,0.12)] text-[var(--lale-gold)] shadow-inner">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-[var(--lale-ivory)]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(251,250,246,0.68)] sm:text-base">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 sm:py-28">
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-7 lg:px-10">
          <div className="lale-card-dark rounded-[14px] p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Randevu Planlama
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--lale-ivory)] sm:text-5xl">
              Size en uygun bakım planını birlikte oluşturalım
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[rgba(251,250,246,0.68)] sm:text-lg">
              İster ilk kez gelin ister rutininizi güçlendirmek isteyin, size en uygun
              uygulamayı birlikte belirleyelim ve keyifli bir merkez deneyimi planlayalım.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/iletisim"
                className="lale-gold-button gap-3"
              >
                İletişime Geçin
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/galeri"
                className="lale-outline-button"
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
