import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiArrowRight,
  FiStar,
} from 'react-icons/fi';

const WhyChooseUs = () => {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-hidden bg-[#fcf6ee] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(191,151,96,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#dbc29d] bg-white/80 px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#b18449] shadow-[0_12px_30px_rgba(191,151,96,0.08)] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
            NEDEN BİZİ SEÇERLER
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8ae6c]" />
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#171717] sm:text-5xl">
            Güzelliğinize sadece uygulama değil,
            <span className="block text-[#b88b4c]">özel bir ilgi sunuyoruz</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f5a54]">
            Merkezimize gelen herkesin kendini rahat, özel ve iyi hissetmesini
            önemsiyoruz. Bu nedenle sadece sonuç odaklı değil, deneyim odaklı bir
            bakım anlayışıyla çalışıyoruz.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-6xl">
          <div className="rounded-[34px] border border-[#eadcc8] bg-white/75 p-6 shadow-[0_24px_80px_rgba(124,96,54,0.08)] backdrop-blur sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden rounded-[28px]">
                <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-white/88 px-4 py-2 text-xs font-medium tracking-[0.14em] text-[#9f7740] backdrop-blur">
                  <FiStar className="h-4 w-4" />
                  PREMIUM DENEYİM
                </div>

                <Image
                  src="/banner/guzelik_merkezi.png"
                  alt="Güzellik merkezi atmosferi"
                  width={900}
                  height={700}
                  className="h-[380px] w-full object-cover object-[68%_center]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1813]/20 via-transparent to-transparent" />
              </div>

              <div>
                <blockquote className="font-serif text-3xl leading-tight text-[#1a1a1a]">
                  “Kendinizi iyi hissettiren bakım, aynaya baktığınızda da fark
                  edilir.”
                </blockquote>

                <p className="mt-5 text-sm leading-7 text-[#645e56]">
                  Hedefimiz sadece güzel görünmeniz değil; merkezin kapısından
                  girdiğiniz andan ayrıldığınız ana kadar kendinizi iyi
                  hissetmeniz.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#faf3e8] p-4">
                    <p className="text-xs tracking-[0.16em] text-[#a67a42]">
                      ODAK NOKTAMIZ
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#242424]">
                      Doğal ışıltı
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#faf3e8] p-4">
                    <p className="text-xs tracking-[0.16em] text-[#a67a42]">
                      DENEYİM
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#242424]">
                      Sakin ve özenli
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/hakkimizda"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b88b4c] px-7 py-3 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:bg-[#a4763c]"
                  >
                    Merkezimizi Keşfedin
                    <FiArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center rounded-full border border-[#d7b687] px-7 py-3 text-sm font-semibold tracking-[0.08em] text-[#a4763c] transition-colors hover:bg-[#fbf3e7]"
                  >
                    Randevu Planlayın
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
