import React from 'react';
import Link from 'next/link';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="iletisim" className="lale-dark-section py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
            İLETİŞİME GEÇİN
          </div>

          <h2 className="mt-8 font-serif text-4xl text-[var(--lale-ivory)] sm:text-5xl">
            Bize kolayca
            <span className="block text-[var(--lale-gold)]">ulaşabilirsiniz</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base leading-7 text-[rgba(251,250,246,0.72)] sm:text-lg">
            Randevu, bilgi ve size uygun bakım planlaması için bizimle iletişime
            geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-14">
          <div className="lale-card-dark rounded-[10px] p-7 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[rgba(212,175,55,0.12)] flex items-center justify-center text-[var(--lale-gold)] shadow-inner">
              <FiPhone className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--lale-ivory)] mb-3">Telefon</h3>
            <a
              href="tel:+905326991552"
              className="text-lg font-medium text-[var(--lale-gold)] hover:text-[var(--lale-gold-soft)] transition-colors"
            >
              +90 532 699 15 52
            </a>
            <p className="text-[rgba(251,250,246,0.62)] text-sm mt-3">Randevu ve bilgi için hemen ulaşın</p>
          </div>

          <div className="lale-card-dark rounded-[10px] p-7 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[rgba(212,175,55,0.12)] flex items-center justify-center text-[var(--lale-gold)] shadow-inner">
              <FiMail className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--lale-ivory)] mb-3">E-posta</h3>
            <a
              href="mailto:info@lalaguzellik.com"
              className="text-base font-medium text-[var(--lale-gold)] hover:text-[var(--lale-gold-soft)] transition-colors break-all"
            >
              info@lalaguzellik.com
            </a>
            <p className="text-[rgba(251,250,246,0.62)] text-sm mt-3">Sorularınız için bize yazabilirsiniz</p>
          </div>

          <div className="lale-card-dark rounded-[10px] p-7 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[rgba(212,175,55,0.12)] flex items-center justify-center text-[var(--lale-gold)] shadow-inner">
              <FiMapPin className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--lale-ivory)] mb-3">Adres</h3>
            <p className="text-base text-[var(--lale-ivory)]">
              Bulgurlu, Söğütlü Çayır Cd. No:25
            </p>
            <p className="text-[rgba(251,250,246,0.62)] text-sm mt-3">34696 Üsküdar / İstanbul</p>
          </div>
        </div>

        <div className="text-center">
          <div className="lale-card-dark rounded-[10px] p-8">
            <h3 className="text-2xl font-serif text-[var(--lale-ivory)] mb-4">Detaylı İletişim Formu</h3>
            <p className="text-[rgba(251,250,246,0.66)] mb-6 max-w-2xl mx-auto leading-7">
              Beklentilerinizi bizimle paylaşın, size uygun bakım ve randevu
              planını birlikte oluşturalım.
            </p>
            <Link
              href="/iletisim"
              className="lale-gold-button"
            >
              Formu Doldur
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
