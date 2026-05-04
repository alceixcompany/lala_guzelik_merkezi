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
      className="lale-dark-section py-24 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
            NEDEN BİZİ SEÇERLER
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
            Güzelliğinize sadece uygulama değil,
            <span className="block text-[var(--lale-gold)]">güven veren bir imza sunuyoruz</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
            Merkezimize gelen herkesin kendini rahat, özel ve iyi hissetmesini
            önemsiyoruz. Bu nedenle sadece sonuç odaklı değil, deneyim odaklı bir
            bakım anlayışıyla çalışıyoruz.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-6xl">
          <div className="lale-card-dark rounded-[10px] p-6 sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden rounded-[8px]">
                <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.42)] bg-[rgba(6,35,31,0.74)] px-4 py-2 text-xs font-medium tracking-[0.14em] text-[var(--lale-gold)] backdrop-blur">
                  <FiStar className="h-4 w-4" />
                  PREMIUM DENEYİM
                </div>

                <Image
                  src="/banner/guzelik_merkezi.png"
                  alt="Güzellik merkezi atmosferi"
                  width={900}
                  height={700}
                  className="h-[380px] w-full object-cover object-[68%_center] grayscale"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,35,31,0.45)] via-transparent to-transparent" />
              </div>

              <div>
                <blockquote className="font-serif text-3xl leading-tight text-[var(--lale-ivory)]">
                  “Kendinizi iyi hissettiren bakım, aynaya baktığınızda da fark
                  edilir.”
                </blockquote>

                <p className="mt-5 text-sm leading-7 text-[rgba(251,250,246,0.68)]">
                  Hedefimiz sadece güzel görünmeniz değil; merkezin kapısından
                  girdiğiniz andan ayrıldığınız ana kadar kendinizi iyi
                  hissetmeniz.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-[8px] border border-[rgba(212,175,55,0.16)] bg-[rgba(251,250,246,0.05)] p-4">
                    <p className="text-xs tracking-[0.16em] text-[var(--lale-gold)]">
                      ODAK NOKTAMIZ
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--lale-ivory)]">
                      Doğal ışıltı
                    </p>
                  </div>

                  <div className="rounded-[8px] border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)] p-4">
                    <p className="text-xs tracking-[0.16em] text-[var(--lale-gold)]">
                      DENEYİM
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--lale-ivory)]">
                      Sakin ve özenli
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/hakkimizda"
                    className="lale-gold-button gap-3"
                  >
                    Merkezimizi Keşfedin
                    <FiArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/iletisim"
                    className="lale-outline-button"
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
