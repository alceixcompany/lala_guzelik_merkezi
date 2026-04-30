'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const faqs = [
  {
    question: 'İlk randevu öncesinde herhangi bir hazırlık yapmalı mıyım?',
    answer:
      'Randevu türüne göre kısa yönlendirmeler paylaşıyoruz. Cilt bakımlarında makyajsız gelmeniz yeterli olurken, lazer epilasyon gibi işlemlerde seans öncesi dikkat edilmesi gereken adımları size önceden iletiyoruz.',
  },
  {
    question: 'Hangi bakımın bana uygun olduğunu nasıl belirliyorsunuz?',
    answer:
      'Her misafirimiz için kısa bir ihtiyaç analizi yapıyoruz. Cilt yapınız, beklentiniz ve rutinleriniz değerlendirilerek size en uygun uygulama öneriliyor.',
  },
  {
    question: 'Lazer epilasyon seans aralıkları neye göre değişiyor?',
    answer:
      'Bölge, tüy yapısı ve kişinin ihtiyacına göre seans aralıkları değişebilir. Genellikle düzenli aralıklarla plan yapılıyor ve süreç boyunca bireysel takip sağlanıyor.',
  },
  {
    question: 'Kaş ve kirpik işlemlerinde doğal bir görünüm sağlanır mi?',
    answer:
      'Evet. En önem verdiğimiz konulardan biri yüz ifadenize uygun, abartıdan uzak ve zarif bir sonuç elde etmek. Tasarım ve uygulamalar bu anlayışla yapılıyor.',
  },
  {
    question: 'Hijyen konusunda nasıl bir süreç izliyorsunuz?',
    answer:
      'Tüm uygulama alanları düzenli olarak hazırlanıyor, kullanılan ürün ve ekipmanlar titizlikle kontrol ediliyor. Misafirlerimizin hem güvenli hem de rahat hissetmesi bizim için öncelikli.',
  },
  {
    question: 'Randevu değişikliği veya iptal yapabilir miyim?',
    answer:
      'Elbette. Mümkün olduğunca erken haber vermeniz yeterli. Uygunluk durumuna göre yeni bir randevu planı birlikte oluşturuyoruz.',
  },
] as const;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#fcf6ee] py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.92),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(191,151,96,0.10),transparent_28%)]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#dbc29d] bg-white/80 px-6 py-3 text-sm font-medium tracking-[0.18em] text-[#b18449] shadow-[0_12px_30px_rgba(191,151,96,0.08)] backdrop-blur">
            <FiHelpCircle className="h-4 w-4" />
            SIK SORULAN SORULAR
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#171717] sm:text-5xl">
            Akliniza takilan sorular icin
            <span className="block text-[#b88b4c]">kisa ve net yanitlar</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f5a54]">
            Randevu sureci, uygulamalar ve merkez deneyimiyle ilgili en cok
            merak edilen konulari sizin icin bir araya getirdik.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[28px] border bg-white/80 shadow-[0_18px_40px_rgba(124,96,54,0.05)] transition-all duration-300 ${
                  isActive ? 'border-[#dcb889]' : 'border-[#ece0d0]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
              >
                  <h3 className="text-base font-medium leading-7 text-[#1f1f1f] sm:text-lg">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[#dcb889] bg-[#f8efe2] text-[#b88b4c]'
                        : 'border-[#ece0d0] bg-white text-[#8b8378]'
                    }`}
                  >
                    <FiChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#f1e7da] px-5 pb-5 pt-4 sm:px-7">
                      <p className="max-w-4xl text-sm leading-7 text-[#645d56]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
