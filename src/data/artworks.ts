export interface Artwork {
  id: string
  title: { tr: string; en: string }
  year: string
  medium: { tr: string; en: string }
  size: string
  image: string
}

export const artworks: Artwork[] = [
  {
    id: 'ilk-isik',
    title: { tr: 'İlk Işık', en: 'First Light' },
    year: '2024',
    medium: { tr: 'Tuval üzerine yağlıboya', en: 'Oil on canvas' },
    size: '140 × 180 cm',
    image: '/images/artwork-ilk-isik.jpg',
  },
  {
    id: 'sessiz-oda',
    title: { tr: 'Sessiz Oda', en: 'Silent Room' },
    year: '2023',
    medium: { tr: 'Karışık teknik', en: 'Mixed media' },
    size: '100 × 120 cm',
    image: '/images/artwork-sessiz-oda.jpg',
  },
  {
    id: 'bellek-katmanlari',
    title: { tr: 'Bellek Katmanları', en: 'Layers of Memory' },
    year: '2022',
    medium: { tr: 'Tuval üzerine yağlıboya', en: 'Oil on canvas' },
    size: '160 × 200 cm',
    image: '/images/artwork-bellek-katmanlari.jpg',
  },
  {
    id: 'ic-mekan',
    title: { tr: 'İç Mekan No. 3', en: 'Interior No. 3' },
    year: '2021',
    medium: { tr: 'Tuval üzerine yağlıboya', en: 'Oil on canvas' },
    size: '90 × 110 cm',
    image: '/images/artwork-ic-mekan.jpg',
  },
  {
    id: 'aksam-uzeri',
    title: { tr: 'Akşam Üzeri', en: 'Evening' },
    year: '2020',
    medium: { tr: 'Karışık teknik', en: 'Mixed media' },
    size: '120 × 150 cm',
    image: '/images/artwork-aksam-uzeri.jpg',
  },
]
