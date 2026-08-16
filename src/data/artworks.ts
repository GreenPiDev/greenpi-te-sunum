export interface Artwork {
  id: string
  title: { tr: string; en: string }
  year: string
  medium: { tr: string; en: string }
  size: string
  gradient: string
}

export const artworks: Artwork[] = [
  {
    id: 'ilk-isik',
    title: { tr: 'İlk Işık', en: 'First Light' },
    year: '2024',
    medium: { tr: 'Tuval üzerine yağlıboya', en: 'Oil on canvas' },
    size: '140 × 180 cm',
    gradient: 'radial-gradient(120% 120% at 20% 20%, #e8a26f 0%, #c1552c 45%, #3a1f14 100%)',
  },
  {
    id: 'sessiz-oda',
    title: { tr: 'Sessiz Oda', en: 'Silent Room' },
    year: '2023',
    medium: { tr: 'Karışık teknik', en: 'Mixed media' },
    size: '100 × 120 cm',
    gradient: 'radial-gradient(120% 120% at 80% 30%, #9a9188 0%, #4a453f 50%, #0b0a09 100%)',
  },
  {
    id: 'bellek-katmanlari',
    title: { tr: 'Bellek Katmanları', en: 'Layers of Memory' },
    year: '2022',
    medium: { tr: 'Tuval üzerine yağlıboya', en: 'Oil on canvas' },
    size: '160 × 200 cm',
    gradient: 'radial-gradient(120% 120% at 30% 70%, #c1552c 0%, #6b2f1a 45%, #0b0a09 100%)',
  },
  {
    id: 'ic-mekan',
    title: { tr: 'İç Mekan No. 3', en: 'Interior No. 3' },
    year: '2021',
    medium: { tr: 'Tuval üzerine yağlıboya', en: 'Oil on canvas' },
    size: '90 × 110 cm',
    gradient: 'radial-gradient(120% 120% at 60% 20%, #e8a26f 0%, #9a9188 50%, #1a1613 100%)',
  },
  {
    id: 'aksam-uzeri',
    title: { tr: 'Akşam Üzeri', en: 'Evening' },
    year: '2020',
    medium: { tr: 'Karışık teknik', en: 'Mixed media' },
    size: '120 × 150 cm',
    gradient: 'radial-gradient(120% 120% at 40% 40%, #4a453f 0%, #c1552c 55%, #0b0a09 100%)',
  },
]
