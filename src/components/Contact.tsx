import React from 'react';
import Link from 'next/link';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="iletisim" className="relative overflow-hidden bg-[#f8f2e9] py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(191,151,96,0.10),transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#dbc29d] bg-white/80 px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#b18449] shadow-[0_12px_30px_rgba(191,151,96,0.08)] backdrop-blur">
            İLETİŞİME GEÇİN
          </div>

          <h2 className="mt-8 font-serif text-4xl text-[#171717] sm:text-5xl">
            Bize kolayca
            <span className="block text-[#b88b4c]">ulaşabilirsiniz</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base leading-7 text-[#625b53] sm:text-lg">
            Randevu, bilgi ve size uygun bakım planlaması için bizimle iletişime
            geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-14">
          <div className="rounded-[28px] border border-[#eadcc8] bg-white/80 p-7 text-center shadow-[0_18px_40px_rgba(124,96,54,0.06)]">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#f6ecdf] flex items-center justify-center text-[#b88b4c] shadow-inner">
              <FiPhone className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[#1f1f1f] mb-3">Telefon</h3>
            <a
              href="tel:+905326991552"
              className="text-lg font-medium text-[#a4763c] hover:text-[#8f6734] transition-colors"
            >
              +90 532 699 15 52
            </a>
            <p className="text-[#6a645d] text-sm mt-3">Randevu ve bilgi için hemen ulaşın</p>
          </div>

          <div className="rounded-[28px] border border-[#eadcc8] bg-white/80 p-7 text-center shadow-[0_18px_40px_rgba(124,96,54,0.06)]">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#f6ecdf] flex items-center justify-center text-[#b88b4c] shadow-inner">
              <FiMail className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[#1f1f1f] mb-3">E-posta</h3>
            <a
              href="mailto:info@lalaguzellik.com"
              className="text-base font-medium text-[#a4763c] hover:text-[#8f6734] transition-colors break-all"
            >
              info@lalaguzellik.com
            </a>
            <p className="text-[#6a645d] text-sm mt-3">Sorularınız için bize yazabilirsiniz</p>
          </div>

          <div className="rounded-[28px] border border-[#eadcc8] bg-white/80 p-7 text-center shadow-[0_18px_40px_rgba(124,96,54,0.06)]">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#f6ecdf] flex items-center justify-center text-[#b88b4c] shadow-inner">
              <FiMapPin className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-[#1f1f1f] mb-3">Adres</h3>
            <p className="text-base text-[#2f2f2f]">
              Bulgurlu, Söğütlü Çayır Cd. No:25
            </p>
            <p className="text-[#6a645d] text-sm mt-3">34696 Üsküdar / İstanbul</p>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-[30px] border border-[#e7d5bf] bg-[linear-gradient(90deg,rgba(255,255,255,0.80),rgba(249,239,226,0.96))] p-8 shadow-[0_20px_50px_rgba(124,96,54,0.06)]">
            <h3 className="text-2xl font-serif text-[#1f1f1f] mb-4">Detaylı İletişim Formu</h3>
            <p className="text-[#655f57] mb-6 max-w-2xl mx-auto leading-7">
              Beklentilerinizi bizimle paylaşın, size uygun bakım ve randevu
              planını birlikte oluşturalım.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center rounded-full bg-[#b88b4c] px-7 py-3 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#a4763c]"
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
