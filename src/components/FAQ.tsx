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
    <section className="lale-dark-section py-24 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="lale-kicker bg-[rgba(6,35,31,0.56)]">
            <FiHelpCircle className="h-4 w-4" />
            SIK SORULAN SORULAR
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--lale-ivory)] sm:text-5xl">
            Aklınıza takılan sorular için
            <span className="block text-[var(--lale-gold)]">kısa ve net yanıtlar</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(251,250,246,0.72)]">
            Randevu süreci, uygulamalar ve merkez deneyimiyle ilgili en çok
            merak edilen konuları sizin için bir araya getirdik.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[10px] border bg-[rgba(6,35,31,0.72)] shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-all duration-300 ${
                  isActive ? 'border-[rgba(212,175,55,0.48)]' : 'border-[rgba(212,175,55,0.18)]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                >
                  <h3 className="text-base font-medium leading-7 text-[var(--lale-ivory)] sm:text-lg">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[var(--lale-gold)] bg-[rgba(212,175,55,0.12)] text-[var(--lale-gold)]'
                        : 'border-[rgba(212,175,55,0.18)] bg-[rgba(251,250,246,0.06)] text-[rgba(251,250,246,0.58)]'
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
                    <div className="border-t border-[rgba(212,175,55,0.12)] px-5 pb-5 pt-4 sm:px-7">
                      <p className="max-w-4xl text-sm leading-7 text-[rgba(251,250,246,0.68)]">
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
