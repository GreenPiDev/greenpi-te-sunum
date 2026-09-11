export interface Activity {
  id: string
  title: { tr: string; en: string }
  description: { tr: string; en: string }
}

export const activities: Activity[] = [
  {
    id: 'medium-voltage',
    title: { tr: 'Orta Gerilim Sistemleri', en: 'Medium Voltage Solutions' },
    description: {
      tr: 'MV şalt sahası, RMU sistemleri, kesicili ve sigortalı şalt üniteleri, sayaç panoları, trafo koruma panoları ile besleme panoları. Kısa devre dayanımı, koruma koordinasyonu ve iletişim altyapısı tasarımın parçası.',
      en: 'MV switchgear, RMU systems, circuit breaker and fused switchgear, metering, transformer protection, and feeder panels — with short-circuit withstand, protection coordination, and communication infrastructure built into the design.',
    },
  },
  {
    id: 'transformers',
    title: { tr: 'Trafo Çözümleri', en: 'Transformer Solutions' },
    description: {
      tr: 'Hermetik tip, konservatörlü ve kuru tip trafolar dahil geniş bir yelpazede mühendislik ve tedarik hizmeti. Seçim; yük karakteristiği, çevresel koşullar, soğutma, kayıplar ve gelecekteki kapasite artışı gözetilerek yapılır.',
      en: 'Engineering and supply for hermetically sealed, conservator-type, and dry-type transformers. Selection accounts for load characteristics, environmental conditions, cooling, losses, and future capacity expansion.',
    },
  },
  {
    id: 'low-voltage',
    title: { tr: 'Alçak Gerilim Sistemleri', en: 'Low Voltage Systems' },
    description: {
      tr: 'Ana ve tali dağıtım panoları, MCC sistemleri, güç faktörü düzeltme panoları, otomasyon panoları ve otomatik transfer sistemleri. Öncelik: enerji sürekliliği, seçicilik, işletme güvenliği ve genişleyebilirlik.',
      en: 'Main and sub-distribution boards, MCC systems, power factor correction panels, automation panels, and automatic transfer systems — designed for continuity, selectivity, safety, and future expandability.',
    },
  },
  {
    id: 'scada-energy-management',
    title: { tr: 'SCADA, RTU & Enerji Yönetimi', en: 'SCADA, RTU & Energy Management' },
    description: {
      tr: 'SCADA, RTU, PLC uygulamaları, güç analizörleri, akıllı sayaçlar ve koruma röleleri; IEC 61850, Modbus, RS485 ve Ethernet/IP tabanlı iletişimle gerçek zamanlı izleme ve hızlı arıza tespiti.',
      en: 'SCADA, RTU, and PLC applications, power analyzers, smart meters, and protection relays over IEC 61850, Modbus, RS485, and Ethernet/IP — enabling real-time monitoring and faster fault detection.',
    },
  },
  {
    id: 'renewable-energy',
    title: { tr: 'Yenilenebilir Enerji', en: 'Renewable Energy' },
    description: {
      tr: 'Güneş enerjisi projelerinde AC/DC dağıtım sistemleri, 1500 VDC ekipmanları, DC koruma ve sürge koruma ürünleri, MC4 konnektörleri ile şebeke bağlantı ve enerji izleme sistemleri.',
      en: 'AC/DC distribution systems, 1500 VDC equipment, DC and surge protection products, MC4 connectors, and grid-connection and energy monitoring systems for solar energy projects.',
    },
  },
  {
    id: 'mobile-substations',
    title: { tr: 'Mobil Trafo Merkezi Çözümleri', en: 'Mobile Substation Solutions' },
    description: {
      tr: 'MV şalt, trafo, LV dağıtım, güç faktörü düzeltme, SCADA, yardımcı güç kaynakları ve jeneratörlerin tek platformda entegrasyonu — geçici güç ihtiyacı, acil durum, madencilik ve şantiye uygulamaları için.',
      en: 'MV switchgear, transformers, LV distribution, power factor correction, SCADA, auxiliary power, and generators integrated on a single mobile platform — for temporary power, emergency supply, mining, and construction sites.',
    },
  },
  {
    id: 'power-quality-protection',
    title: { tr: 'Güç Kalitesi & Koruma', en: 'Power Quality & Protection' },
    description: {
      tr: 'Güç faktörü düzeltme, harmonik filtreleme, koruma röleleri, sayaç sistemleri ile topraklama ve yıldırımdan korunma çözümleri — işletme güvenilirliğini ve sürekliliğini artırır.',
      en: 'Power factor correction, harmonic filtering, protection relays and metering, plus earthing and lightning protection — strengthening operational reliability and continuity.',
    },
  },
  {
    id: 'software-digitalization',
    title: { tr: 'Yazılım & Dijitalleşme', en: 'Software & Digitalization' },
    description: {
      tr: 'Temmuz 2026 itibarıyla enerji ve endüstriyel şirketler için CRM, ERP, B2B platformları, web tabanlı yönetim sistemleri ve pano imalatçılarına özel yazılım çözümleri geliştiriyoruz.',
      en: 'Since July 2026, developing CRM, ERP, B2B platforms, web-based management systems, and custom software solutions for energy and industrial companies, including panel builders.',
    },
  },
  {
    id: 'ev-charging-cables',
    title: { tr: 'Elektrikli Araç Şarjı & Kablo Altyapısı', en: 'EV Charging & Cable Infrastructure' },
    description: {
      tr: 'Elektrikli araç şarj altyapısı ile kablo ve kablo bağlantı aksesuarları — her ölçekteki proje için uçtan uca tedarik ve mühendislik desteği.',
      en: 'Electric vehicle charging infrastructure, along with cables and cable connection accessories — end-to-end supply and engineering support for projects of every scale.',
    },
  },
]
