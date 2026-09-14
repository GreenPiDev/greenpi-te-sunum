export interface ProductTarget {
  id: string
  name: { tr: string; en: string }
  year1: string
  year2: string
  year3: string
  year5: string
}

export const productTargets: ProductTarget[] = [
  {
    id: 'terminal-blocks',
    name: { tr: 'Terminal Blokları', en: 'Terminal Blocks' },
    year1: '€350K',
    year2: '€600K',
    year3: '€1.05M',
    year5: '€3.22M',
  },
  {
    id: 'relays',
    name: { tr: 'Röleler', en: 'Relays' },
    year1: '€250K',
    year2: '€450K',
    year3: '€790K',
    year5: '€2.41M',
  },
  {
    id: 'essailec',
    name: { tr: 'ESSAILEC', en: 'ESSAILEC' },
    year1: '€100K',
    year2: '€180K',
    year3: '€315K',
    year5: '€960K',
  },
  {
    id: 'measurement',
    name: {
      tr: 'Ölçüm, İzleme & Diğer TE Connectivity Ürünleri',
      en: 'Measurement, Monitoring & Other TE Connectivity Products',
    },
    year1: '€150K',
    year2: '€270K',
    year3: '€470K',
    year5: '€1.45M',
  },
]

export const totalTargets = {
  year1: '€850K',
  year2: '€1.50M',
  year3: '€2.625M',
  year5: '€8.04M',
}

export type YearKey = 'year1' | 'year2' | 'year3' | 'year5'

export interface GrowthPhase {
  id: string
  yearKey: YearKey
  yearLabel: { tr: string; en: string }
  phaseTitle: { tr: string; en: string }
  target: string
  body: { tr: string; en: string }
  objectives: { tr: string; en: string }[]
  outcome?: { tr: string; en: string }
}

export const growthPhases: GrowthPhase[] = [
  {
    id: 'year1',
    yearKey: 'year1',
    yearLabel: { tr: '1. Yıl', en: 'Year 1' },
    phaseTitle: { tr: 'Pazara Giriş & Temel Oluşturma', en: 'Market Entry & Foundation' },
    target: '€850K',
    body: {
      tr: 'İlk yılın amacı yalnızca €850K satış hacmine ulaşmak değil, TE Connectivity için Türkiye’de sürdürülebilir büyümenin altyapısını oluşturmaktır.',
      en: 'The goal of the first year is not simply to reach €850K in sales, but to build the infrastructure for TE Connectivity’s sustainable growth in Türkiye.',
    },
    objectives: [
      {
        tr: 'Astor, Europower, Elko, Çağdaş Pano, Hawk Power, CW Enerji, Voltberg ve Ekos gibi stratejik üreticilerle çalışmaların başlatılması',
        en: 'Initiate cooperation with strategic manufacturers such as Astor, Europower, Elko, Çağdaş Pano, Hawk Power, CW Enerji, Voltberg and Ekos',
      },
      {
        tr: 'En az 3–5 major OEM müşterisinde TE Connectivity ürünlerinin aktif olarak kullanılmaya başlanması',
        en: 'Begin active use of TE Connectivity products within at least 3–5 major OEM customers',
      },
      {
        tr: 'Terminal Blocks ve Relays ürün gruplarında lokal stok yapısının oluşturulması',
        en: 'Establish local stock for the Terminal Blocks and Relays product groups',
      },
      {
        tr: 'ESSAILEC ürün ailesi için hedef müşteri, proje ve sektör listesinin hazırlanması',
        en: 'Prepare the target customer, project and sector list for the ESSAILEC product family',
      },
      {
        tr: 'Düzenli teknik müşteri ziyaretlerinin gerçekleştirilmesi',
        en: 'Carry out regular technical customer visits',
      },
      {
        tr: 'Teknik ürün eğitimleri ve uygulama seminerlerinin düzenlenmesi',
        en: 'Organize technical product trainings and application seminars',
      },
      {
        tr: 'İlk TE Connectivity Days Türkiye organizasyonunun gerçekleştirilmesi',
        en: 'Hold the first TE Connectivity Days Türkiye event',
      },
      {
        tr: 'Sektörel fuarlarda TE Connectivity ürünlerinin aktif olarak tanıtılması',
        en: 'Actively promote TE Connectivity products at industry exhibitions',
      },
      {
        tr: 'Dijital pazarlama ve marka görünürlüğü çalışmalarının başlatılması',
        en: 'Launch digital marketing and brand visibility activities',
      },
      {
        tr: 'İlk alt bayi adaylarının belirlenmesi',
        en: 'Identify the first sub-distributor candidates',
      },
    ],
    outcome: {
      tr: "İlk yılın sonunda hedefimiz yalnızca satış yapmak değil; TE Connectivity'nin Türkiye'de daha geniş bir müşteri kitlesi tarafından tanınmaya ve tercih edilmeye başladığı sağlam bir ticari temel oluşturmaktır.",
      en: 'By the end of the first year, our goal is not only to generate sales, but to build a solid commercial foundation on which TE Connectivity becomes recognized and preferred by a wider customer base in Türkiye.',
    },
  },
  {
    id: 'year2',
    yearKey: 'year2',
    yearLabel: { tr: '2. Yıl', en: 'Year 2' },
    phaseTitle: { tr: 'OEM Genişlemesi & Standardizasyon', en: 'OEM Expansion & Standardization' },
    target: '€1.50M',
    body: {
      tr: 'İkinci yılda ana hedefimiz, ürün tanıtımından ürün standardizasyonu aşamasına geçmektir — TE Connectivity ürünlerinin BOM listelerine, üretim standartlarına, approved vendor listelerine, standart pano dizaynlarına ve yıllık satın alma programlarına dahil edilmesi hedeflenmektedir.',
      en: 'In the second year, our primary objective is to move from product introduction to product standardization — integrating TE Connectivity products into BOM lists, production standards, approved vendor lists, standard panel designs and annual purchasing programs.',
    },
    objectives: [
      {
        tr: 'En az 8–10 düzenli OEM müşterisine ulaşılması',
        en: 'Reach at least 8–10 regular OEM customers',
      },
      {
        tr: 'Terminal Blocks ve Relays ürün gruplarında stok seviyesinin artırılması',
        en: 'Increase stock levels for the Terminal Blocks and Relays product groups',
      },
      {
        tr: 'Bölgesel alt bayi sisteminin başlatılması',
        en: 'Launch the regional sub-distributor system',
      },
      {
        tr: 'TE Connectivity Days etkinliğinin yıllık hale getirilmesi',
        en: 'Make TE Connectivity Days an annual event',
      },
      {
        tr: 'İstanbul ve Ankara merkezli düzenli teknik seminerlerin gerçekleştirilmesi',
        en: 'Hold regular technical seminars centered in Istanbul and Ankara',
      },
      {
        tr: "TE Connectivity'nin yeni ürün gruplarının Türkiye pazarına tanıtılması",
        en: "Introduce TE Connectivity's new product groups to the Turkish market",
      },
      {
        tr: 'EPC firmaları ve mühendislik şirketleriyle şartname çalışmaları yapılması',
        en: 'Work with EPC firms and engineering companies on technical specifications',
      },
    ],
  },
  {
    id: 'year3',
    yearKey: 'year3',
    yearLabel: { tr: '3. Yıl', en: 'Year 3' },
    phaseTitle: { tr: 'Pazar Geliştirme & Ülke Geneli Büyüme', en: 'Market Development & Nationwide Growth' },
    target: '€2.625M',
    body: {
      tr: "Üçüncü yıl itibarıyla Green Pi Energy'nin rolü yalnızca bayi veya ürün tedarikçisi seviyesinde kalmayacak; hedeflenen pozisyon Market Development & Solution Partner olacaktır. Görevimiz yalnızca gelen taleplere fiyat vermek değil, yeni müşteri bulmak, yeni uygulama alanları oluşturmak, OEM standartlarına girmek ve TE Connectivity için yeni iş hacmi yaratmak olacaktır.",
      en: "By the third year, Green Pi Energy's role will move beyond that of a distributor or product supplier — the target position is Market Development & Solution Partner. Our task will not simply be to quote incoming requests, but to find new customers, create new application areas, enter OEM standards, and generate new business volume for TE Connectivity.",
    },
    objectives: [
      {
        tr: '15+ aktif OEM ve büyük endüstriyel müşteriye ulaşılması',
        en: 'Reach 15+ active OEM and major industrial customers',
      },
      {
        tr: 'TE Connectivity ürünlerinin önemli üreticilerde standart komponent haline gelmesi',
        en: 'Establish TE Connectivity products as standard components at major manufacturers',
      },
      {
        tr: 'Türkiye genelinde teknik satış ve alt bayi ağının geliştirilmesi',
        en: 'Develop the technical sales and sub-distributor network nationwide',
      },
      {
        tr: 'Büyük EPC ve altyapı projelerinde TE Connectivity ürünlerinin şartnamelere dahil edilmesi',
        en: 'Include TE Connectivity products in specifications for major EPC and infrastructure projects',
      },
      {
        tr: 'ESSAILEC ürün grubunun enerji, utility, trafo merkezi, koruma ve ölçüm sistemlerinde yaygınlaştırılması',
        en: 'Expand the ESSAILEC product group across energy, utility, substation, protection and measurement systems',
      },
      {
        tr: "Yeni TE Connectivity ürünlerinin Türkiye pazarına Green Pi tarafından kazandırılması",
        en: 'Bring new TE Connectivity products to the Turkish market through Green Pi',
      },
      {
        tr: 'Green Pi stoklarının ürün çeşitliliği ve miktar açısından önemli ölçüde büyütülmesi',
        en: "Significantly grow Green Pi's stock in both product variety and volume",
      },
    ],
  },
  {
    id: 'year5',
    yearKey: 'year5',
    yearLabel: { tr: '5. Yıl', en: 'Year 5' },
    phaseTitle: { tr: 'Stratejik Ortaklık & Pazar Liderliği', en: 'Strategic Partnership & Market Leadership' },
    target: '€8.04M',
    body: {
      tr: "Beşinci yıl hedefinin yalnızca €8 milyon üzeri satış hacmi olarak değerlendirilmesini istemiyoruz. Bu noktada Green Pi Energy'nin TE Connectivity ile hedeflediği ilişki, uzun vadeli, stratejik ve sürdürülebilir bir pazar geliştirme ortaklığıdır: TE Connectivity'nin Türkiye'deki en önemli pazar geliştirme ve çözüm ortaklarından biri olmak.",
      en: "We don't want the fifth-year target to be seen merely as more than €8 million in sales volume. At this point, the relationship Green Pi Energy aims to build with TE Connectivity is a long-term, strategic and sustainable market development partnership — to become one of TE Connectivity's key market development and solution partners in Türkiye.",
    },
    objectives: [
      { tr: 'Türkiye genelinde güçlü stok altyapısı', en: 'A strong nationwide stock infrastructure' },
      {
        tr: 'Bölgesel ve sektörel alt bayi ağı',
        en: 'A regional and sectoral sub-distributor network',
      },
      {
        tr: "Çok sayıda OEM'de standardize edilmiş TE Connectivity ürünleri",
        en: 'TE Connectivity products standardized across numerous OEMs',
      },
      {
        tr: 'Büyük endüstri ve enerji projelerinde aktif TE Connectivity kullanımı',
        en: 'Active use of TE Connectivity in major industrial and energy projects',
      },
      {
        tr: 'EPC ve danışmanlık şirketleri üzerinden şartnamelere giriş',
        en: 'Entry into specifications through EPC and consulting firms',
      },
      {
        tr: 'Yeni ürünlerin Türkiye pazarına sistematik olarak kazandırılması',
        en: 'Systematic introduction of new products to the Turkish market',
      },
      { tr: 'Yıllık TE Connectivity Days Türkiye', en: 'Annual TE Connectivity Days Türkiye' },
      { tr: 'Ortak fuar katılımları', en: 'Joint exhibition participation' },
      { tr: 'Müşteri ve mühendis eğitimleri', en: 'Customer and engineer training' },
      { tr: 'Teknik workshop ve seminerler', en: 'Technical workshops and seminars' },
      { tr: 'OEM development programları', en: 'OEM development programs' },
      {
        tr: 'Green Pi Cup, golf ve seçilmiş kurumsal organizasyonlarda ortak marka görünürlüğü',
        en: 'Joint brand visibility at Green Pi Cup, golf and selected corporate events',
      },
    ],
  },
]

export const growthModelBlocks: { tr: string; en: string }[] = [
  { tr: 'OEM Geliştirme', en: 'OEM Development' },
  { tr: 'Ürün Standardizasyonu', en: 'Product Standardization' },
  { tr: 'Yerel Stok', en: 'Local Stock' },
  { tr: 'Teknik Satış', en: 'Technical Sales' },
  { tr: 'Alt Bayi Ağı', en: 'Sub-Distributor Network' },
  { tr: 'Proje Şartnameleri', en: 'Project Specifications' },
  { tr: 'Yeni Ürün Tanıtımı', en: 'New Product Introduction' },
  { tr: 'Pazarlama & Etkinlikler', en: 'Marketing & Events' },
]

export const vendorListBlocks: { tr: string; en: string }[] = [
  { tr: 'BOM Listeleri', en: 'BOM Lists' },
  { tr: 'Onaylı Tedarikçi Listeleri', en: 'Approved Vendor Lists' },
  { tr: 'Pano Standartları', en: 'Panel Standards' },
  { tr: 'Teknik Şartnameler', en: 'Technical Specifications' },
  { tr: 'Yıllık Satın Alma Programları', en: 'Annual Purchasing Programs' },
]
