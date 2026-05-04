'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="lale-dark-section lale-footer text-[var(--lale-ivory)]">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="border-t border-[rgba(212,175,55,0.28)] py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
            <div>
              <Image
                src="/Lale_logo.png"
                alt="Lale Güzellik Merkezi Logo"
                width={190}
                height={76}
                className="h-12 w-auto"
              />
              <p className="mt-6 max-w-sm text-sm leading-7 text-[rgba(251,250,246,0.70)]">
                Kendinizi özel hissedeceğiniz, sakin ve özenli bir güzellik
                deneyimi sunuyoruz. Cilt bakımı, lazer epilasyon, kaş-kirpik ve
                vücut bakımlarında yanınızdayız.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(212,175,55,0.38)] bg-[rgba(255,255,255,0.06)] text-[var(--lale-gold)] transition-colors hover:bg-[rgba(212,175,55,0.12)]"
                  title="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
                <a
                  href="tel:+905326991552"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(212,175,55,0.38)] bg-[rgba(255,255,255,0.06)] text-[var(--lale-gold)] transition-colors hover:bg-[rgba(212,175,55,0.12)]"
                  title="Telefon"
                >
                  <FiPhone className="h-4 w-4" />
                </a>
                <a
                  href="mailto:info@lalaguzellik.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(212,175,55,0.38)] bg-[rgba(255,255,255,0.06)] text-[var(--lale-gold)] transition-colors hover:bg-[rgba(212,175,55,0.12)]"
                  title="E-posta"
                >
                  <FiMail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Sayfalar</h3>
              <ul className="mt-5 space-y-3 text-sm text-[rgba(251,250,246,0.70)]">
                <li>
                  <Link href="/" className="transition-colors hover:text-[var(--lale-gold)]">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz" className="transition-colors hover:text-[var(--lale-gold)]">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="/galeri" className="transition-colors hover:text-[var(--lale-gold)]">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Bakımlar</h3>
              <ul className="mt-5 space-y-3 text-sm text-[rgba(251,250,246,0.70)]">
                <li>Cilt Bakımı</li>
                <li>Lazer Epilasyon</li>
                <li>Kaş ve Kirpik</li>
                <li>Vücut Bakımı</li>
                <li>Kişisel Danışmanlık</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">İletişim</h3>
              <ul className="mt-5 space-y-4 text-sm text-[rgba(251,250,246,0.70)]">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 h-4 w-4 text-[var(--lale-gold)]" />
                  <span>Bulgurlu, Söğütlü Çayır Cd. No:25 Üsküdar / İstanbul</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a href="tel:+905326991552" className="transition-colors hover:text-[var(--lale-gold)]">
                    +90 532 699 15 52
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a href="mailto:info@lalaguzellik.com" className="transition-colors hover:text-[var(--lale-gold)]">
                    info@lalaguzellik.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(212,175,55,0.28)] py-6">
          <div className="flex flex-col gap-3 text-center text-sm text-[rgba(251,250,246,0.58)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © 2025 <span className="font-medium text-[var(--lale-gold)]">Lale Güzellik Merkezi</span>. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center justify-center gap-5 md:justify-end">
              <a
                href="https://www.alceix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--lale-gold)]"
              >
                Hakları Alceix tarafından saklıdır
              </a>
              <Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">
                Gizlilik Politikası
              </Link>
              <Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
