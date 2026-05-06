'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '../../store';
import { sendContactMessage, fetchContactInfo, clearError } from '../../store/slices/contactSlice';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  urgency: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    urgency: 'normal',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const dispatch = useAppDispatch();
  const { isSending, error } = useAppSelector((state: RootState) => state.contact) as { isSending: boolean; error: string | null };

  useEffect(() => {
    dispatch(fetchContactInfo());
    dispatch(clearError());
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!formData.name || !formData.phone || !formData.email || !formData.serviceType || !formData.message) {
      return;
    }

    try {
      const messageData = {
        ...formData,
        subject: `${formData.serviceType} - ${formData.urgency}`,
        priority: formData.urgency === 'cok-acil' ? 'high' as const : formData.urgency === 'acil' ? 'medium' as const : 'low' as const,
      };

      await dispatch(sendContactMessage(messageData)).unwrap();

      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        urgency: 'normal',
        message: ''
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Mesaj gönderilirken hata:', err);
    }
  };

  return (
    <div className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <section className="lale-page-hero h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/banner/iletisim_banner.png"
            alt="Lalagüzeli İletişim"
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
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pt-[10px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--lale-gold)]" />
              <span className="text-sm tracking-[0.3em] text-[var(--lale-gold)] uppercase font-medium">Bize Ulaşın</span>
            </div>
            
            <h1 className="font-serif text-[64px] sm:text-[86px] leading-[0.9] text-[var(--lale-ivory)] mb-6">
              Sizi <span className="block text-[var(--lale-gold)]">Bekliyoruz</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[rgba(251,250,246,0.74)] leading-relaxed max-w-lg">
              Randevu planlamak veya hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="lale-dark-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lale-card-dark p-8 sm:p-12 rounded-[28px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(212,175,55,0.08)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="font-serif text-3xl sm:text-4xl text-[var(--lale-ivory)] mb-2">Mesaj Gönderin</h2>
                  <p className="text-[rgba(251,250,246,0.68)] mb-10">Size en kısa sürede dönüş sağlayacağız.</p>

                  {success && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-6 bg-[rgba(34,197,94,0.12)] rounded-[20px] border border-[rgba(34,197,94,0.24)] flex items-center gap-4 text-green-200"
                    >
                      <FiCheckCircle className="w-6 h-6 flex-shrink-0" />
                      <p className="font-medium">Mesajınız başarıyla iletildi! Uzmanlarımız sizi arayacaktır.</p>
                    </motion.div>
                  )}

                  {error && (
                    <div className="mb-8 p-6 bg-[rgba(239,68,68,0.12)] rounded-[20px] border border-[rgba(239,68,68,0.22)] text-red-200">
                      <p className="font-medium text-sm">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Ad Soyad</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-[rgba(251,250,246,0.06)] border border-[rgba(212,175,55,0.18)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm"
                          placeholder="İsminiz"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Telefon</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-[rgba(251,250,246,0.06)] border border-[rgba(212,175,55,0.18)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm"
                          placeholder="05xx xxx xx xx"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">E-posta</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-[rgba(251,250,246,0.06)] border border-[rgba(212,175,55,0.18)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm"
                        placeholder="e-posta@adresiniz.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Hizmet Türü</label>
                        <select 
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-[rgba(251,250,246,0.06)] border border-[rgba(212,175,55,0.18)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm appearance-none cursor-pointer"
                        >
                          <option value="">Hizmet seçiniz</option>
                          <option value="cilt-bakimi">Cilt Bakımı</option>
                          <option value="lazer-epilasyon">Lazer Epilasyon</option>
                          <option value="kas-kirpik">Kaş ve Kirpik</option>
                          <option value="vucut-bakimi">Vücut Bakımı</option>
                          <option value="bolgesel-zayiflama">Bölgesel Zayıflama</option>
                          <option value="ipek-kirpik">İpek Kirpik</option>
                          <option value="protez-tirnak">Protez Tırnak</option>
                          <option value="leke-bakimi">Leke Bakımı</option>
                          <option value="masaj">Masaj</option>
                          <option value="kalici-makyaj">Kalıcı Makyaj</option>
                          <option value="hydrafacial">Hydrafacial</option>
                          <option value="akne-bakimi">Akne Bakımı</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Aciliyet</label>
                        <select 
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-[rgba(251,250,246,0.06)] border border-[rgba(212,175,55,0.18)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm appearance-none cursor-pointer"
                        >
                          <option value="normal">Normal</option>
                          <option value="acil">Acil</option>
                          <option value="cok-acil">Çok Acil</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Mesajınız</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                        className="w-full px-8 py-5 bg-[rgba(251,250,246,0.06)] border border-[rgba(212,175,55,0.18)] rounded-[32px] focus:outline-none focus:border-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm resize-none"
                        placeholder="Size nasıl yardımcı olabiliriz?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-[var(--lale-gold)] text-[var(--lale-emerald-deep)] py-5 rounded-full font-bold tracking-[0.15em] text-sm hover:bg-[var(--lale-gold-soft)] transition-all shadow-[0_20px_40px_rgba(212,175,55,0.15)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:bg-gray-400"
                    >
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          GÖNDERİLİYOR...
                        </>
                      ) : (
                        <>
                          <FiSend className="w-4 h-4" />
                          MESAJ GÖNDER
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-serif text-3xl text-[var(--lale-ivory)] mb-8">İletişim Bilgilerimiz</h2>
                
                <div className="space-y-8">
                  {[
                    { icon: FiPhone, title: "Telefon", value: "0546 104 59 00", sub: "Randevu & Bilgi Hattı" },
                    { icon: FiMail, title: "E-posta", value: "info@lalaguzellik.com", sub: "7/24 Destek" },
                    { icon: FiMapPin, title: "Adres", value: "Şirinevler Mahallesi Meriç Sokak No: 18 Kat: 4 Daire: 4, Bahçelievler / İstanbul", sub: "Akbank'ın üstü" },
                    { icon: FiClock, title: "Çalışma Saatleri", value: "Randevu İle Hizmet Verilmektedir", sub: "Pazartesi - Cumartesi" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 bg-[rgba(212,175,55,0.10)] rounded-2xl flex items-center justify-center text-[var(--lale-gold)] shadow-sm border border-[rgba(212,175,55,0.18)] flex-shrink-0 group-hover:bg-[var(--lale-gold)] group-hover:text-[var(--lale-emerald-deep)] transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs tracking-widest text-[var(--lale-gold)] uppercase font-bold mb-1">{item.title}</h4>
                        <p className="text-lg text-[var(--lale-ivory)] font-serif mb-1">{item.value}</p>
                        <p className="text-sm text-[rgba(251,250,246,0.68)]">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square sm:aspect-video lg:aspect-auto lg:h-[350px] rounded-[32px] overflow-hidden border border-[rgba(212,175,55,0.18)] shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3184.0400509927945!2d28.842329076039675!3d40.99229797135275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzMyLjMiTiAyOMKwNTAnNDEuNyJF!5e1!3m2!1str!2saz!4v1778048676704!5m2!1str!2saz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Lalagüzeli Konum"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="lale-dark-section pb-32 px-5">
        <div className="max-w-5xl mx-auto p-12 sm:p-20 rounded-[32px] lale-card-dark text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[rgba(212,175,55,0.08)] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <h2 className="font-serif text-3xl sm:text-5xl text-[var(--lale-ivory)] mb-6">Bizi Sosyal Medyada <span className="text-[var(--lale-gold)]">Takip Edin</span></h2>
          <p className="text-[rgba(251,250,246,0.68)] text-lg mb-12 max-w-xl mx-auto">Güzellik ipuçları, yeni uygulamalar ve kampanyalarımızdan ilk siz haberdar olun.</p>
          
          <a 
            href="https://instagram.com/lalaguzeli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lale-gold-button"
          >
            INSTAGRAM'DA TAKİP ET
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
