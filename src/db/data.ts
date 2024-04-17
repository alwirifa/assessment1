const data = [
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.31861.jpg",
    title: "Dior Sauvage",
    description: "A captivating and masculine fragrance, Dior Sauvage is a modern classic. With fresh and spicy notes, it exudes confidence and sophistication.",
    category: "Man Perfume",
    price: 1500000,
    popularity: 4.3,
    availability: 80,
    id: 1
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.25967.jpg",
    title: "Bleu de Chanel",
    description: "Bleu de Chanel is an elegant and versatile fragrance suitable for any occasion. Its woody and aromatic scent leaves a lasting impression of refinement.",
    category: "Man Perfume",
    price: 1700000,
    popularity: 4.7,
    availability: 100,
    id: 2
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.9828.jpg",
    title: "Aventus Creed",
    description: "Aventus Creed is a legendary fragrance known for its fresh and fruity opening balanced with woody undertones. It's a scent that commands attention and admiration.",
    category: "Man Perfume",
    price: 2500000,
    popularity: 4.9,
    availability: 60,
    id: 3
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.48903.jpg",
    title: "1 Million Lucky Paco Rabanne",
    description: "1 Million Lucky by Paco Rabanne is a bold and invigorating scent that combines fresh and warm notes to create an irresistible fragrance for the modern man.",
    category: "Man Perfume",
    price: 1200000,
    popularity: 3.8,
    availability: 0,
    id: 4
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.29727.jpg",
    title: "Acqua di Giò Profumo",
    description: "Acqua di Giò Profumo is a sophisticated and masculine fragrance inspired by the freshness of the ocean. Its aromatic and aquatic notes evoke a sense of freedom and vitality.",
    category: "Man Perfume",
    price: 1800000,
    popularity: 4.5,
    availability: 90,
    id: 5
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.16657.jpg",
    title: "Eros Versace",
    description: "Eros by Versace is a powerful and seductive fragrance that blends fresh, woody, and oriental notes. It's a symbol of passion and desire.",
    category: "Man Perfume",
    price: 1600000,
    popularity: 4.2,
    availability: 75,
    id: 6
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.49144.jpg",
    title: "Wanted by Night Azzaro",
    description: "Wanted by Night by Azzaro is a daring and captivating fragrance with spicy and woody accords. It's designed for the confident and charismatic man who lives life to the fullest.",
    category: "Man Perfume",
    price: 1100000,
    popularity: 3.6,
    availability: 20,
    id: 7
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.30499.jpg",
    title: "Spicebomb Extreme Viktor&Rolf",
    description: "Spicebomb Extreme by Viktor&Rolf is an intense and explosive fragrance that combines spicy and warm notes to create a memorable olfactory experience. It's bold, daring, and unforgettable.",
    category: "Man Perfume",
    price: 2000000,
    popularity: 4.8,
    availability: 100,
    id: 8
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.61856.jpg",
    title: "Le Male Le Parfum Jean Paul Gaultier",
    description: "Le Male Le Parfum by Jean Paul Gaultier is a sensual and sophisticated fragrance with oriental and woody accords. It's a modern interpretation of the classic Le Male fragrance, designed for the confident and charismatic man.",
    category: "Man Perfume",
    price: 1900000,
    popularity: 4.6,
    availability: 50,
    id: 9
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.13016.jpg",
    title: "Dior Homme Intense",
    description: "Dior Homme Intense is a luxurious and elegant fragrance that blends floral and woody notes to create a sophisticated and masculine scent. It's perfect for evening wear and special occasions.",
    category: "Man Perfume",
    price: 1400000,
    popularity: 4.0,
    availability: 10,
    id: 10
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.59148.jpg",
    title: "Black Opium Yves Saint Laurent",
    description: "Black Opium by Yves Saint Laurent is a captivating and seductive fragrance for the modern woman. With notes of coffee, vanilla, and white flowers, it's a scent that exudes mystery and sensuality.",
    category: "Woman Perfume",
    price: 2200000,
    popularity: 4.7,
    availability: 85,
    id: 11
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.62533.jpg",
    title: "La Vie Est Belle Lancôme",
    description: "La Vie Est Belle by Lancôme is a joyful and feminine fragrance that celebrates life's beauty. With notes of iris, patchouli, and praline, it's a scent that radiates happiness and elegance.",
    category: "Woman Perfume",
    price: 2300000,
    popularity: 4.9,
    availability: 95,
    id: 12
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.26203.jpg",
    title: "Chanel Coco Mademoiselle",
    description: "Coco Mademoiselle by Chanel is a timeless and elegant fragrance that embodies the spirit of a modern woman. With notes of citrus, jasmine, and patchouli, it's a scent that exudes sophistication and charm.",
    category: "Woman Perfume",
    price: 2100000,
    popularity: 4.8,
    availability: 75,
    id: 13
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.17313.jpg",
    title: "Flowerbomb Viktor&Rolf",
    description: "Flowerbomb by Viktor&Rolf is a floral explosion that captivates the senses. With notes of jasmine, rose, and patchouli, it's a scent that evokes passion and romance.",
    category: "Woman Perfume",
    price: 2400000,
    popularity: 4.6,
    availability: 80,
    id: 14
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.12014.jpg",
    title: "Miss Dior Blooming Bouquet",
    description: "Miss Dior Blooming Bouquet is a fresh and romantic fragrance that captures the essence of springtime. With notes of peony, rose, and white musk, it's a scent that radiates femininity and grace.",
    category: "Woman Perfume",
    price: 2000000,
    popularity: 4.5,
    availability: 70,
    id: 15
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.21812.jpg",
    title: "Gucci Bloom",
    description: "Gucci Bloom is a rich and intoxicating fragrance that celebrates the vitality and diversity of women. With notes of tuberose, jasmine, and Rangoon creeper, it's a scent that blooms with elegance and sophistication.",
    category: "Woman Perfume",
    price: 2500000,
    popularity: 4.7,
    availability: 90,
    id: 16
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.22455.jpg",
    title: "Baccarat Rouge 540 Maison Francis Kurkdjian",
    description: "Baccarat Rouge 540 by Maison Francis Kurkdjian is an exquisite and luxurious fragrance that captures the essence of fine craftsmanship. With notes of jasmine, saffron, and cedarwood, it's a scent that exudes opulence and sophistication.",
    category: "Woman Perfume",
    price: 2600000,
    popularity: 4.9,
    availability: 100,
    id: 17
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.25202.jpg",
    title: "Narciso Rodriguez For Her",
    description: "Narciso Rodriguez For Her is a sensual and mysterious fragrance that celebrates the power of femininity. With notes of musk, rose, and peach, it's a scent that leaves a lasting impression of elegance and allure.",
    category: "Woman Perfume",
    price: 1900000,
    popularity: 4.4,
    availability: 65,
    id: 18
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.15527.jpg",
    title: "Good Girl Carolina Herrera",
    description: "Good Girl by Carolina Herrera is a bold and provocative fragrance that celebrates the duality of modern women. With notes of jasmine, tonka bean, and cocoa, it's a scent that embraces both innocence and seduction.",
    category: "Woman Perfume",
    price: 2200000,
    popularity: 4.6,
    availability: 85,
    id: 19
  },
  {
    img: "https://fimgs.net/mdimg/perfume/375x500.30489.jpg",
    title: "Mon Guerlain Guerlain",
    description: "Mon Guerlain by Guerlain is a tribute to the modern woman's femininity, strength, and sensuality. With notes of lavender, vanilla, and sandalwood, it's a scent that embodies timeless elegance and grace.",
    category: "Woman Perfume",
    price: 2100000,
    popularity: 4.5,
    availability: 70,
    id: 20
  }
];

export default data;
