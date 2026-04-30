import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const serviceItems = [
  {
    label: 'CİLT BAKIMI',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3c3 3 3 6 0 9-3-3-3-6 0-9Z"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
        <path
          d="M6 20c1.5-4 5-6 6-6s4.5 2 6 6"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: 'VÜCUT BAKIMI',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 5c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
        <path d="M15 5c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
        <path d="M7 20c0-4 2.2-7 5-7s5 3 5 7" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'LAZER EPİLASYON',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4v8" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M8 6l8 8" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M16 6 8 14" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M6.5 19.5c3.5-1.5 7.5-1.5 11 0" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'KAŞ & KİRPİK',
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 11c2-3 6-3 8 0" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M11 11c2-3 6-3 8 0" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path d="M8 16c1.5 1 3.5 1 5 0" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f1e8]">
      <div className="absolute inset-0">
        <Image
          src="/banner/guzelik_merkezi.png"
          alt="Güzellik Merkezi"
          fill
          priority
          className="object-cover object-[72%_center] lg:object-right"
          sizes="100vw"
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,0.99)_0%,rgba(247,241,232,0.95)_32%,rgba(247,241,232,0.62)_53%,rgba(247,241,232,0.12)_72%,rgba(247,241,232,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.85),rgba(255,255,255,0.28)_34%,transparent_58%)]" />
      <div className="absolute left-[-8%] top-[-4%] h-[120%] w-[64%] rotate-[-18deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0))] blur-2xl" />
      <div className="absolute inset-0 bg-black/[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="flex min-h-[calc(100vh-64px)] items-center py-12 sm:min-h-[calc(100vh-80px)] sm:py-16 lg:min-h-[calc(100vh-80px)]">
          <div className="max-w-[560px] pt-[20px]">
            <p className="text-[13px] sm:text-[16px] tracking-[0.42em] text-[#2b2b2b]">
              KENDİNİZİ ÖZEL
            </p>

            <h1 className="mt-4 font-serif text-[78px] leading-[0.88] text-[#111111] sm:text-[108px] lg:text-[124px]">
              HİSSEDİN
            </h1>

            <p
              className="mt-5 text-[36px] leading-none text-[#bb9154] sm:text-[52px] lg:text-[58px] font-script"
            >
              Güzelliğinize Değer Katın
            </p>

            <div className="mt-12 h-px w-28 bg-[#b89562]/65" />

            <p className="mt-7 max-w-[470px] text-xl leading-[1.45] text-[#2d2d2d] sm:text-[20px]">
              Cildinize, bedeninize ve ruhunuza iyi gelecek profesyonel çözümlerle
              kendinizi yeniden keşfedin.
            </p>


            <div className="mt-14">
              <Link
                href="/iletisim"
                className="inline-flex min-w-[228px] items-center justify-center gap-5 rounded-full bg-[#b78a49] px-10 py-4 text-[15px] font-medium tracking-[0.16em] text-white shadow-[0_20px_40px_rgba(183,138,73,0.22)] transition-all duration-300 hover:bg-[#a97d3e] hover:shadow-[0_24px_48px_rgba(183,138,73,0.3)]"
              >
                RANDEVU AL
                <span aria-hidden="true" className="text-2xl leading-none">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
