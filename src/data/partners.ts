export interface Partner {
  name: string
  scope: { tr: string; en: string }
  /** Slug matching public/images/brands/{logo}.png — omitted when no brand logo applies. */
  logo?: string
}

export interface PartnerGroup {
  id: string
  label: { tr: string; en: string }
  partners: Partner[]
}

export const partnerGroups: PartnerGroup[] = [
  {
    id: 'distributorship',
    label: { tr: 'Distribütörlük', en: 'Distributorship' },
    partners: [
      {
        name: 'AITE Fuse',
        logo: 'aite-fuse',
        scope: {
          tr: 'Endüstriyel, güç dağıtımı, pano imalatı ve OEM uygulamaları için sigorta ve koruma çözümleri.',
          en: 'Fuse and protection solutions for industrial, power distribution, panel manufacturing, and OEM applications.',
        },
      },
    ],
  },
  {
    id: 'dealership',
    label: { tr: 'Yetkili Bayilik & Ürün Temsilciliği', en: 'Authorized Dealership & Product Representation' },
    partners: [
      {
        name: 'TE Connectivity',
        logo: 'te-connectivity',
        scope: {
          tr: 'Endüstriyel ve güç dağıtımı uygulamaları için klemens, röle, bağlantı teknolojileri ve ölçüm ürünleri.',
          en: 'Terminal blocks, relays, connection technologies, and measurement products for industrial and power distribution applications.',
        },
      },
      {
        name: 'Schneider Electric',
        logo: 'schneider-electric',
        scope: {
          tr: 'Güç kalitesi kayıt cihazları ve izleme sistemlerine odaklı özel çözümler.',
          en: 'Specialized solutions focusing on Power Quality Recorders and monitoring systems.',
        },
      },
      {
        name: 'Siemens',
        logo: 'siemens',
        scope: {
          tr: 'Güç kalitesi kayıt cihazları ve izleme sistemlerine odaklı özel çözümler.',
          en: 'Specialized solutions focusing on Power Quality Recorders and monitoring systems.',
        },
      },
      {
        name: 'REPL',
        logo: 'repl',
        scope: {
          tr: 'Güç dağıtımı ve OG altyapısı için orta gerilim kablo başlıkları ve aksesuarları.',
          en: 'Medium Voltage cable terminations and accessories for power distribution and MV infrastructure.',
        },
      },
      {
        name: 'Inotel',
        logo: 'inotel',
        scope: {
          tr: 'Elektriksel izleme, koruma, kontrol ve otomasyon çözümleri.',
          en: 'Electrical monitoring, protection, control, and automation solutions.',
        },
      },
      {
        name: 'Raycap',
        logo: 'raycap',
        scope: {
          tr: 'Endüstriyel ve enerji uygulamaları için sürge ve elektriksel koruma çözümleri.',
          en: 'Surge protection and electrical protection solutions for industrial and energy applications.',
        },
      },
      {
        name: 'Sertech',
        logo: 'sertech',
        scope: {
          tr: 'Endüstriyel uygulamalar için özel elektrik ürünleri ve çözümleri.',
          en: 'Specialized electrical products and solutions for industrial applications.',
        },
      },
      {
        name: 'Gromtor',
        logo: 'gromtor',
        scope: {
          tr: 'Elektriksel koruma ve ilgili endüstriyel çözümler.',
          en: 'Electrical protection and related industrial solutions.',
        },
      },
      {
        name: 'ATEX / Ex-Proof',
        scope: {
          tr: 'Özel Ex-proof gereksinimleri olan tesisler için patlayıcı ortam ekipmanları.',
          en: 'Equipment designed for hazardous and explosive atmospheres, serving facilities with Ex-proof requirements.',
        },
      },
    ],
  },
  {
    id: 'projectPartnerships',
    label: { tr: 'Proje Ortaklıkları', en: 'Project Partnerships' },
    partners: [
      {
        name: 'EAE',
        logo: 'eae',
        scope: {
          tr: 'Elektrik dağıtım sistemleri, bara sistemleri ve altyapı uygulamalarında proje işbirliği.',
          en: 'Project cooperation for electrical distribution systems, busbar systems, and infrastructure applications.',
        },
      },
      {
        name: 'Astor',
        logo: 'astor',
        scope: {
          tr: 'Trafolar, güç dağıtım ekipmanları ve enerji altyapısı çözümlerinde proje işbirliği.',
          en: 'Project cooperation in transformers, power distribution equipment, and energy infrastructure solutions.',
        },
      },
      {
        name: 'Europower',
        logo: 'europower',
        scope: {
          tr: 'Orta gerilim sistemleri, güç dağıtım ekipmanları ve entegre enerji çözümlerinde proje işbirliği.',
          en: 'Project cooperation in Medium Voltage systems, power distribution equipment, and integrated energy solutions.',
        },
      },
    ],
  },
]
