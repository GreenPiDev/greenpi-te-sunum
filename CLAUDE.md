# TE Connectivity Sunum Sitesi — Green Pi Energy

## Proje Amacı

Bu proje bir "satış" ürünü değil, **Green Pi Energy'nin TE Connectivity'ye göndereceği bir kurumsal sunum sitesi**. Amaç: "biz buyuz" demek — kurucu, şirket, proje referansları, marka portföyü ve TE Connectivity ile büyüme stratejisini profesyonel, güven verici bir tek-sayfa (single-page scroll) deneyimde anlatmak.

Proje, `ressam-sanatci-web-page` adlı bir sanatçı portföyü taslağının kopyası üzerine kuruludur (animasyon/scroll altyapısını yeniden yazmamak için). Mevcut GSAP + Lenis smooth-scroll + section-reveal altyapısı korunacak, ama **içerik modeli ve tasarım dili sıfırdan kurumsal bir enerji/mühendislik firmasına göre yeniden kurulacak**.

Kaynak içerik: `public/content.txt` (İngilizce, TE Connectivity'ye özel yazılmış). Site **İngilizce ağırlıklı** olacak (muhatap TE Connectivity), ama mevcut i18n (tr/en) altyapısı korunup Türkçe çeviri ikinci faz olarak eklenebilir.

Logo dosyaları: `public/sirket-logosu.png` (tam logo — "green Pi" yazısı + amblem), `public/sirket-logosu-2.png` (sadece amblem, yarım/ikon versiyon).

## Marka Renk Paleti (logodan türetildi)

| Rol | Renk | Hex (yaklaşık) |
|---|---|---|
| Ana yeşil | Green Pi yeşili | `#7CC142` |
| Ana mavi | Green Pi mavisi | `#2BA8E0` |
| Vurgu sarı | Amblem çevresindeki rakam/yazı sarısı | `#F5D033` |
| Koyu zemin | Mavi-siyah, kurumsal koyu ton | `#0B1E2D` |
| Açık zemin / kağıt | Kırık beyaz | `#F7F9FA` |
| Nötr gri | Amblemdeki π gri-mavi tonu | `#5A6B78` |

Mevcut `src/styles/index.css` içindeki `--color-ink / --color-canvas / --color-ember / --color-stone` (sıcak sanat galerisi paleti) bu tablo ile değiştirilecek. Tipografi de "Fraunces" (el yazısı/sanatsal serif) yerine kurumsal, teknik bir görünüm için değiştirilecek (örn. başlıkta güçlü bir sans-serif/display font, gövdede Inter kalabilir).

## Mevcut İskelet → Yeni İçerik Eşlemesi

Sanatçı portföyünden kalan section'lar, TE Connectivity sunumuna şöyle eşlenecek:

| Eski section | Eski amaç | Yeni amaç |
|---|---|---|
| `Hero.tsx` | Sanatçı adı/manifesto | Green Pi Energy başlığı + "Project Experience, Growth & TE Connectivity Strategy" alt başlığı, logo |
| `About.tsx` | Sanatçı biyografisi | Kurucu (Serhat Çelik) + Green Pi'nin hikayesi (enerjiden teknolojiye) |
| `Gallery.tsx` | Eser galerisi (`data/artworks.ts`) | Faaliyet alanları / ürün-hizmet kategorileri (MV, LV, SCADA, yenilenebilir enerji, mobil trafo vb.) — grid kart yapısı buna çok uygun |
| `Process.tsx` | Sanatçının çalışma süreci | Green Pi'nin mühendislik yaklaşımı ("solution-oriented, not product-oriented") + TE Connectivity ile büyüme yol haritası (500K → 1M → sürdürülebilir büyüme) |
| `Exhibitions.tsx` | Sergiler/katılımlar | Proje referansları (İller Bankası, Körfezray Metro, SDT vb.) + Ticaret anlaşmaları (Astor, Aksan Pano, Şahbaz Pano, Renpro) + fuar/etkinlik stratejisi (TE Connectivity Days, EIF Antalya, Green Pi Cup) |
| `Contact.tsx` | İletişim | İletişim / kapanış CTA — "Let's build the market for TE Connectivity together" |

Yeni eklenecek olası bir section: **Marka Portföyü** (Distributorship / Authorized Dealership / Project Partnerships — AITE Fuse, TE Connectivity, Schneider, Siemens, REPL, Inotel, Raycap vb.) — mevcut 6 section'a ek 7. section olarak eklenebilir ya da About/Gallery içine entegre edilebilir.

**Güncel section sırası (App.tsx):** Hero → About → Gallery (Faaliyetler) → Partners (Marka Portföyü) → Process (Yaklaşım & Strateji) → Opportunities (Pazar Geliştirme Fırsatları) → Exhibitions (Projeler & Referanslar) → Contact.

`src/data/artworks.ts` tamamen kaldırılıp yerine içerik odaklı veri dosyaları gelecek (örn. `src/data/activities.ts`, `src/data/projects.ts`, `src/data/partners.ts`, `src/data/agreements.ts`).

## Fazlar

### Faz 0 — Hazırlık ve İçerik Ayrıştırma
- `public/content.txt` içeriğini yapılandırılmış bölümlere ayır (4 ana blok zaten belli: 1-Founder, 2-About Green Pi Energy, 3-Project Experience & TE Strategy, 4-Brand Portfolio).
- Her blok için hangi bilgilerin site metni, hangilerinin sadece bizim referansımız (ör. anlaşma tutarları — kamuya açık sunumda gösterilip gösterilmeyeceği kullanıcıya sorulacak) olacağına karar ver.
- Logoların arkaplanının şeffaf/beyaz olup olmadığını kontrol et, gerekirse header/footer için uygun varyant seç (`sirket-logosu-2.png` ikon, kısıtlı alanlarda/favicon'da kullanılabilir).
- **Çıktı:** İçerik gerçekten section'lara bölünmüş bir taslak (bu dosyada özetlendi, detay uygulama sırasında netleşir).

### Faz 1 — Tasarım Sistemi (Renk, Tipografi, Tema)
- `src/styles/index.css` içindeki `@theme` bloğunu Green Pi paletiyle güncelle (yukarıdaki tablo).
- Font seçimini kurumsal bir görünüme çevir (display font önerisi: "Space Grotesk" veya "General Sans" gibi teknik/güçlü bir sans; gövdede Inter kalsın).
- Cursor, selection, scrollbar gibi mikro-detayları yeni palete göre güncelle.
- Logommeta (favicon, OG image) için `sirket-logosu-2.png` kullan.
- **Çıktı:** Yeni tema tüm sayfada (henüz eski içerikle) görünür durumda.

### Faz 2 — Hero + About (Kurucu & Şirket Hikayesi) ✅ Tamamlandı
- `Hero.tsx`: Logo, "Green Pi Energy" başlığı, "Project Experience, Growth & TE Connectivity Strategy" alt satırı, kısa bir güç cümlesi.
- `About.tsx`: Serhat Çelik / kuruluş hikayesi + "Energy + Engineering + Technology + Software + Agriculture" çeşitlenmesi.
- Görseller: `public/images/` altında kurumsal/enerji temalı yeni görseller gerekecek (mevcut tablo görselleri sanat eseri — hepsi değiştirilmeli). Kullanıcıdan görsel istenecek ya da placeholder ile ilerlenecek.
- **Çıktı:** Sitenin ilk ekranı ve "biz kimiz" bölümü tamamen yeni içerikle.

### Faz 3 — Faaliyet Alanları (Gallery → Activities) ✅ Tamamlandı
- `data/artworks.ts` yerine `data/activities.ts`: MV/LV distribution, transformers, SCADA/RTU, renewable energy, mobile substations, power quality, vb. kategoriler (content.txt madde 2).
- Grid kart tasarımını görsel yerine ikon/kısa açıklama ağırlıklı bir yapıya çevir (kurumsal sunumlarda fotoğraf yerine ikonografi daha uygun olabilir — kullanıcıyla netleştirilecek).
- **Çıktı:** Faaliyet alanları bölümü çalışır durumda.

### Faz 4 — Mühendislik Yaklaşımı & TE Connectivity Strateji Yol Haritası ✅ Tamamlandı
- `Process.tsx`'i "solution-oriented approach" + TE Connectivity büyüme modeli (500K → 1M → sürdürülebilir büyüme, OEM entegrasyonu, sub-distributor network) anlatan bir zaman çizelgesi/adım yapısına çevir.
- **Çıktı:** Strateji bölümü.

### Faz 5 — Proje Referansları, Anlaşmalar & Etkinlikler ✅ Tamamlandı
- `Exhibitions.tsx`'i proje referansları listesine çevir (İller Bankası, Körfezray Metro, SDT, Aksu Mining, Ford Başer, Artaş Mermer vb.) + devam eden projeler.
- Ticari anlaşmalar (Astor, Europower, Aksan Pano, Şahbaz Pano, Renpro) — rakamları göstermek isteyip istemediğini kullanıcıya sor.
- TE Connectivity Days / EIF Antalya / Green Pi Cup / Ankara Golf Club sponsorlukları için ayrı bir alt blok.
- **Çıktı:** Referans ve büyüme kanıtları bölümü.

### Faz 6 — Marka Portföyü (yeni section) ✅ Tamamlandı (12 marka logosu eklendi ve doğrulandı)
- Distributorship (AITE Fuse), Authorized Dealership (TE Connectivity, Schneider, Siemens, REPL, Inotel, Raycap, Sertech, Gromtor, ATEX), Project Partnerships (EAE, Astor, Europower).
- Logo grid + kısa açıklama formatı.
- **Çıktı:** Marka/partner güven bölümü.

### Faz 7 — İletişim / Kapanış ✅ Tamamlandı
- `Contact.tsx`'i "Let's build the market for TE Connectivity together" mesajıyla, iletişim bilgileri (info@greenpi.com.tr, Gümüş Cd. No:40, Konutkent, 06810 Yenimahalle/Ankara) ve CTA butonuyla güncellendi.
- **Çıktı:** Kapanış bölümü.

### Faz 7.5 — Pazar Geliştirme Fırsatları & içerik tamlık taraması ✅ Tamamlandı
- content.txt ile site içeriği satır satır karşılaştırıldı; eksik kalan önemli bloklar eklendi:
  - Yeni **`Opportunities.tsx`** section'ı: 8 maddelik "Market Development Opportunities" listesi (`src/data/opportunities.ts`) + "Green Pi'nin Rolü" 3 dönüşüm bloğu. Nav'a "Fırsatlar/Opportunities" linki eklendi.
  - `Process.tsx`'e **Hedef OEM'ler** pill-listesi (Astor, Europower, Elko, Çağdaş Pano, Hawk Power, CW Enerji, Voltberg, Ekos) ve **Vizyon** paragrafı (Avrupa/Orta Doğu/Kafkasya genişlemesi) eklendi.
  - `data/activities.ts`'e **Yazılım & Dijitalleşme** kartı eklendi (9. faaliyet).
  - `Partners.tsx`'e **"Daha Geniş Marka Ekosistemi"** notu eklendi (ABB, LS Electric, Jean Müller, Schrack, Miltera, Iskra).
  - `About.tsx` metnine kurucunun **tarım/hayvancılık** yatırımı detayı eklendi (Sarıkaya, Yozgat, 12 Aralık 2024).
- **Çıktı:** content.txt'teki tüm anlamlı içerik artık sitede karşılık buluyor.

### Faz 8 — i18n ✅ Tamamlandı (fazlarla paralel ilerledi)
- Her faz TR/EN birlikte dolduruldu, ayrı bir faz olarak beklemeye gerek kalmadı.
- **Çıktı:** Dil geçişi (TR/EN) tüm bölümlerde güncel içerikle çalışıyor.

### Faz 9 — Görseller ve Medya ✅ Envanter listelendi, teslim bekleniyor
- Sanat eseri görselleri (`about-hands.jpg`, `artwork-*.jpg`, vb.) kaldırılıp yerine: kurucu fotoğrafı, saha/proje fotoğrafları, trafo/MV pano görselleri, logo varyantları eklenecek.
- Kullanıcıdan görsel teslimi beklenecek; yoksa geçici stok görsel/placeholder ile ilerlenip sonradan değiştirilecek.
- **Çıktı:** Görsel envanteri tamamlanmış.

### Faz 10 — Cilalama & QA
- Responsive kontrol (mobil/tablet/masaüstü).
- Scroll animasyonlarının yeni, daha uzun içerikle performansı (özellikle Faz 5'teki uzun liste bölümleri).
- Erişilebilirlik (kontrast — yeni renk paletinde metin/zemin kontrastı test edilmeli, özellikle sarı vurgu rengi arka plan üstünde).
- SEO/meta etiketleri, sayfa başlığı ("Green Pi Energy × TE Connectivity").
- **Çıktı:** Yayına hazır sunum sitesi.

### Faz 11 — Yayınlama
- `npm run build` ile prod build kontrolü.
- GitHub'a push (`GreenPiDev/greenpi-te-sunum`), gerekirse bir hosting (Vercel/Netlify) bağlanması.
- **Çıktı:** TE Connectivity'ye gönderilebilir canlı link.

## Notlar / Açık Kararlar (güncellendi)

- **Rakamlar gösterilsin mi?** ✅ Karar verildi: EVET, anlaşma tutarları (USD 2.5M, EUR 75K/100K/150K, EUR 500K hedef) sitede gösterilecek.
- **Görsel eksikliği:** ✅ Karar verildi: Kullanıcıda henüz kurumsal görsel (kurucu fotoğrafı, saha/proje fotoğrafları, ürün/pano görselleri) yok. Placeholder/stok görsel KULLANILMAYACAK — görsel gerektiren alanlar, gerçek görsel gelene kadar görselsiz (temiz, tipografi/renk/ikon ağırlıklı) tasarlanacak. Layout'lar hem görselli hem görselsiz durumda iyi görünecek şekilde kurulacak.
- **Görsel listesi:** Her section'ın layout'u netleştikçe, o section için gereken görsellerin sayısı, önerilen boyut/oran ve dosya adı/klasör konumu kullanıcıya bildirilecek (bkz. section bazlı "Görsel İhtiyacı" notları, ilgili fazlar tamamlandıkça buraya eklenecek). Tüm görseller `public/images/` altına, iş temasına uygun isimlerle konacak (ör. `founder-serhat-celik.jpg`, `project-korfezray-metro.jpg`).
- **Dil önceliği:** Muhatap TE Connectivity olduğu için EN ana dil, TR ikincil.
- Fazlar sırayla değil, kullanıcı onayına göre ilerlenecek — her faz sonunda görsel/işlevsel kontrol yapılıp bir sonrakine geçilecek.
- **Teknik not (çözüldü):** Scroll-reveal animasyonlarında (`Partners.tsx`, `Exhibitions.tsx`, `Opportunities.tsx`) elemanları toplamak için render sırasında sıfırlanan ref-array deseni ("her render'da array=[] sonra push") kullanılmıyor — React StrictMode'da güvenilir çalışmadığı (bazı kartlar `opacity:0` durumunda takılı kalıyordu) tespit edildi. Bunun yerine `data-reveal` attribute + `sectionRef.current.querySelectorAll('[data-reveal]')` deseni kullanılıyor. Yeni scroll-reveal içeren bölüm eklenirse bu deseni takip et.

## Görsel İhtiyaç Listesi

Tüm görseller `public/images/` klasörüne, aşağıdaki isimlerle eklenecek (klasör henüz yok, ilk görsel eklendiğinde oluşturulacak). Format: JPG veya WEBP, sıkıştırılmış (~150-400KB civarı ideal, sitenin performansı için).

### Öncelik 1 — Yüksek etki (siteyi belirgin şekilde güçlendirir)

| # | Dosya adı | Kullanılacağı yer | Oran / min. boyut | Not |
|---|---|---|---|---|
| 1 | `hero-background.jpg` | `Hero.tsx` arka planı | Geniş, min. 1920×1080 (16:9 veya daha geniş) | Saha/trafo merkezi/pano fotoğrafı, koyu tonlu veya yüksek kontrastlı olması iyi olur — üzerine beyaz başlık metni biniyor. Şu an bu alanda marka renklerinden gradient + soluk amblem var, görsel eklenince o gradient katmanı korunup üstüne fotoğraf gelecek. |
| 2 | `founder-serhat-celik.jpg` | `About.tsx` — kurucu portresi | Dikey, min. 1200×1500 (4:5) | Serhat Çelik'in kurumsal/profesyonel bir portresi. |
| 3 | `projects-cover.jpg` | `Exhibitions.tsx` — "Selected Project Experience" bölüm başlığı üstü/yanı | Yatay, min. 1600×1000 | Saha çekimi: trafo merkezi, pano imalatı veya kurulum anı. Tek bir güçlü kapak görseli yeterli, proje başına ayrı görsel gerekmiyor. |

### Öncelik 2 — Opsiyonel / zenginleştirme

| # | Dosya adı | Kullanılacağı yer | Oran / min. boyut | Not |
|---|---|---|---|---|
| 4 | `process-engineering.jpg` | `Process.tsx` — strateji bölümü yanı | Dikey, min. 900×1200 (3:4) | Mühendislik/saha/ofis çekimi. Şu an bu alanda mavi çerçeveli "Growth Roadmap" kutusu var; bu görsel eklenirse kutunun yerini alabilir ya da yanına eklenebilir — birlikte karar veririz. |
| 5–12 | `activity-{id}.jpg` (ör. `activity-medium-voltage.jpg`) | `Gallery.tsx` — her faaliyet kartı | Yatay, min. 1200×900 (4:3) | 8 faaliyet kartının her biri için (ID'ler `src/data/activities.ts` içinde: medium-voltage, transformers, low-voltage, scada-energy-management, renewable-energy, mobile-substations, power-quality-protection, ev-charging-cables). Hepsi gelmese de olur — kısmi teslim edilirse sadece o kartlara görsel eklenir. |

### Marka logoları (Partners.tsx)

Klasör: `public/images/brands/`. Dosya formatı: tercihen **PNG (şeffaf arka planlı)** — bölüm açık renkli (bg-canvas) zeminde olduğu için şeffaf arka plan şart, beyaz kutulu/dolgulu logo dosyaları kullanma. **Kare (1:1) çerçevede** hazırlanacak — logo, karenin içine ortalanmış, kenarlarda fazla boşluk bırakmadan (logo kare alanın ~%80-90'ını kaplasın). Boyut: min. **400×400px**, ideal **512×512px**, dosya başına ~30-100KB hedeflenebilir.

Dosya adı = aşağıdaki slug + `.png` (veya `.svg`):

| Grup | Marka | Dosya adı |
|---|---|---|
| Distribütörlük | AITE Fuse | `aite-fuse.png` |
| Yetkili Bayilik | TE Connectivity | `te-connectivity.png` |
| Yetkili Bayilik | Schneider Electric | `schneider-electric.png` |
| Yetkili Bayilik | Siemens | `siemens.png` |
| Yetkili Bayilik | REPL | `repl.png` |
| Yetkili Bayilik | Inotel | `inotel.png` |
| Yetkili Bayilik | Raycap | `raycap.png` |
| Yetkili Bayilik | Sertech | `sertech.png` |
| Yetkili Bayilik | Gromtor | `gromtor.png` |
| Proje Ortaklığı | EAE | `eae.png` |
| Proje Ortaklığı | Astor | `astor.png` |
| Proje Ortaklığı | Europower | `europower.png` |

Not: "ATEX / Ex-Proof" bir marka değil ürün kategorisi olduğu için logo gerekmiyor. 12 logonun hepsi gelmese de olur — eksik olanlar şimdiki gibi sadece isim/metin olarak kalır, gelenler resimli görünür (kısmi teslim desteklenecek şekilde kodlanacak).

### Zaten mevcut olan görseller

- `public/sirket-logosu.png` — tam logo, Hero'da kullanılıyor.
- `public/sirket-logosu-2.png` — amblem/ikon, Hero arka plan dokusunda ve favicon olarak kullanılıyor.
