export interface Opportunity {
  id: string
  title: { tr: string; en: string }
  body: { tr: string; en: string }
}

export const opportunities: Opportunity[] = [
  {
    id: 'awareness',
    title: { tr: 'Ürün Farkındalığını Artırmak', en: 'Increasing Product Awareness' },
    body: {
      tr: 'TE Connectivity ürün ailelerini katalog üzerinden değil, uygulamalar ve gerçek müşteri örnekleriyle OEM, pano imalatçısı, danışman, EPC ve mühendislere tanıtmak.',
      en: 'Promoting TE Connectivity product families not simply through catalogues, but through applications, engineering solutions, and real customer use cases for OEMs, panel builders, consultants, EPCs, and engineers.',
    },
  },
  {
    id: 'technical-sales',
    title: { tr: 'Teknik Satış & Uygulama Desteği', en: 'Technical Sales & Application Support' },
    body: {
      tr: 'Müşterinin "bu uygulama için hangi ürünü kullanmalıyım" sorusuna önce uygulamayı anlayıp sonra doğru TE Connectivity çözümünü geliştiren bir teknik satış yapısı kurmak.',
      en: 'Building a technical sales structure that understands the customer\'s application first and then develops the correct TE Connectivity solution — not just selling components individually.',
    },
  },
  {
    id: 'oem-access',
    title: { tr: "OEM ve Pano İmalatçılarına Güçlü Erişim", en: 'Stronger Access to OEMs & Panel Builders' },
    body: {
      tr: 'TE Connectivity ürünlerini tekil proje satışlarının ötesine taşıyıp, imalatçıların standart tasarımlarının bir parçası haline getirmek — bir bileşen yüzlerce pano ve projede tekrar kullanılabilir.',
      en: 'Moving beyond individual project sales to establish TE Connectivity products as standard components within manufacturers\' designs — a single component can then be used across hundreds of panels and projects.',
    },
  },
  {
    id: 'local-stock',
    title: { tr: 'Yerel Stok & Hızlı Teslimat', en: 'Local Stock & Fast Delivery' },
    body: {
      tr: 'Hızlı hareket eden ve stratejik önemdeki TE Connectivity ürünleri için yerel stok kurarak, müşterilerin uzun uluslararası teslim sürelerine takılmadan ürüne ulaşmasını sağlamak.',
      en: 'Establishing local stock for carefully selected fast-moving and strategically important TE Connectivity products, so customers can obtain what they need without long international lead times.',
    },
  },
  {
    id: 'after-sales',
    title: { tr: 'Satış Sonrası Teknik Destek', en: 'After-Sales Technical Support' },
    body: {
      tr: 'Ürün seçimi, uygulama mühendisliği, montaj, devreye alma, alternatif ürün seçimi ve arıza tespiti dahil olmak üzere Türkiye\'de TE Connectivity müşterileri için yerel teknik temas noktası olmak.',
      en: 'Becoming a local technical point of contact for TE Connectivity customers in Türkiye — covering product selection, application engineering, installation, commissioning, and troubleshooting.',
    },
  },
  {
    id: 'new-products',
    title: { tr: 'Yeni TE Connectivity Ürünlerini Türkiye\'ye Tanıtmak', en: 'Introducing New TE Connectivity Products to Türkiye' },
    body: {
      tr: 'Global TE Connectivity portföyünü sistematik olarak analiz ederek Türkiye\'de potansiyeli olan ürünleri, hedef sektörleri ve müşterileri belirlemek — talebi yaratmak, sadece karşılamak değil.',
      en: 'Systematically analyzing the global TE Connectivity portfolio to identify which products have potential in Türkiye, which industries should use them, and who the target customers are — creating demand, not just meeting it.',
    },
  },
  {
    id: 'marketing',
    title: { tr: 'Pazarlama & Marka Görünürlüğü', en: 'Marketing & Brand Visibility' },
    body: {
      tr: 'TE Connectivity Days, fuarlar, teknik seminerler, müşteri atölyeleri, dijital pazarlama ve ortak sponsorluklarla markayı mühendislerin sürekli karşılaştığı bir isim haline getirmek.',
      en: 'Making TE Connectivity a brand that engineers and manufacturers encounter continuously — through TE Connectivity Days, exhibitions, technical seminars, customer workshops, digital marketing, and joint sponsorships.',
    },
  },
  {
    id: 'sub-distributor',
    title: { tr: 'Alt Bayi & Satış Kanalı Geliştirme', en: 'Sub-Distributor & Sales Channel Development' },
    body: {
      tr: 'Türkiye\'nin coğrafi büyüklüğü göz önüne alındığında, seçilmiş bölge ve sektörlerde kontrollü bir alt bayi ağı kurup; stok, teknik destek, fiyatlandırma ve eğitimin merkezi koordinasyonunu Green Pi\'nin üstlenmesi.',
      en: 'Establishing a controlled sub-distributor network in selected regions and industries, with Green Pi acting as the central partner for stock, technical support, pricing, and training while regional partners increase market coverage.',
    },
  },
]

export interface RoleTransformation {
  from: { tr: string; en: string }
  to: { tr: string; en: string }
  body: { tr: string; en: string }
}

export const roleTransformations: RoleTransformation[] = [
  {
    from: { tr: 'Distribütör', en: 'Distributor' },
    to: { tr: 'Pazar Geliştirici', en: 'Market Developer' },
    body: {
      tr: 'TE Connectivity ürünlerini sadece dağıtmak değil, marka için yeni müşteriler, uygulamalar ve pazarlar yaratmak.',
      en: 'Not simply distributing TE Connectivity products, but creating new customers, applications, and markets for the brand.',
    },
  },
  {
    from: { tr: 'Ürün Tedarikçisi', en: 'Product Supplier' },
    to: { tr: 'Çözüm Ortağı', en: 'Solution Partner' },
    body: {
      tr: 'Sadece bir ürün kodu sağlamak değil, doğru TE Connectivity teknolojisi ve mühendislik yaklaşımıyla müşteri sorunlarını çözmek.',
      en: 'Not simply providing a product code, but solving customer challenges through the right TE Connectivity technology and engineering approach.',
    },
  },
  {
    from: { tr: 'Bireysel Satış', en: 'Individual Sales' },
    to: { tr: 'Sürdürülebilir Büyüme', en: 'Sustainable Growth' },
    body: {
      tr: 'OEM anlaşmaları, yıllık satın alma programları, standart ürünler ve tekrarlayan gelirle büyüyen bir pazar payına geçiş.',
      en: 'Moving toward OEM agreements, annual purchasing programs, standardized products, recurring revenue, and growing market share.',
    },
  },
]
