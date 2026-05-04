import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--lale-emerald-deep)]">
      <div className="absolute inset-0">
        <Image
          src="/banner/guzelik_merkezi.png"
          alt="Güzellik Merkezi"
          fill
          priority
          className="object-cover object-[70%_center] lg:object-right"
          sizes="100vw"
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,35,31,0.96)_0%,rgba(6,35,31,0.92)_30%,rgba(6,35,31,0.78)_52%,rgba(6,35,31,0.36)_75%,rgba(6,35,31,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(13,77,63,0.42),rgba(6,35,31,0.24)_36%,transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(212,175,55,0.12),transparent_24%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,var(--lale-emerald-deep))]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-28 sm:px-7 lg:px-10">
        <div className="max-w-[650px] pt-10">
          <div className="inline-flex items-center gap-3 border-y border-[rgba(212,175,55,0.26)] py-3 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--lale-gold)] sm:text-sm">
            Doğallık · Güzellik · Güven
          </div>

          <h1 className="mt-8 font-serif text-[56px] leading-[0.92] text-[var(--lale-ivory)] sm:text-[88px] lg:text-[104px]">
            Lale
            <span className="block text-[var(--lale-gold)]">Güzellik Evi</span>
          </h1>

          <p className="mt-5 font-script text-[38px] leading-none text-[var(--lale-gold)] sm:text-[56px]">
            Güzelliğinize Değer Katın
          </p>

          <div className="mt-9 flex items-center gap-4">
            <div className="h-px w-24 bg-[var(--lale-gold)]" />
            <p className="font-serif text-sm uppercase tracking-[0.24em] text-[rgba(251,250,246,0.74)]">
              Premium Bakım
            </p>
          </div>

          <p className="mt-7 max-w-[520px] text-lg leading-8 text-[rgba(251,250,246,0.74)] sm:text-xl">
            Zümrüt yeşili ve altın detayların zarafetiyle, cildinize ve
            ruhunuza iyi gelecek profesyonel güzellik deneyimleri sunuyoruz.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Link href="/iletisim" className="lale-gold-button">
              Randevu Al
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="lale-outline-button"
            >
              Hizmetleri İncele
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[rgba(212,175,55,0.18)] py-5">
            <div>
              <p className="font-serif text-2xl text-[var(--lale-gold)]">15+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[rgba(251,250,246,0.60)]">Bakım</p>
            </div>
            <div className="border-l border-[rgba(212,175,55,0.18)] pl-5">
              <p className="font-serif text-2xl text-[var(--lale-gold)]">5000+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[rgba(251,250,246,0.60)]">Misafir</p>
            </div>
            <div className="border-l border-[rgba(212,175,55,0.18)] pl-5">
              <p className="font-serif text-2xl text-[var(--lale-gold)]">4.9</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[rgba(251,250,246,0.60)]">Memnuniyet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
