export const galleryItems = [
  {
    preview: 'img/min-size/WH001-min.jpg',
    original: 'img/full-size/WH001.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-001',
  },
  {
    preview: 'img/min-size/WH002-min.jpg',
    original: 'img/full-size/WH002.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-002',
  },
  {
    preview: 'img/min-size/WH003-min.jpg',
    original: 'img/full-size/WH003.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-003',
  },
  {
    preview: 'img/min-size/WH004-min.jpg',
    original: 'img/full-size/WH004.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-004',
  },
  {
    preview: 'img/min-size/WH005-min.jpg',
    original: 'img/full-size/WH005.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-005',
  },
  {
    preview: 'img/min-size/WH006-min.jpg',
    original: 'img/full-size/WH006.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-006',
  },
  {
    preview: './img/min-size/WH007-min.jpg',
    original: './img/full-size/WH007.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-007',
  },
  {
    preview: './img/min-size/WH008-min.jpg',
    original: './img/full-size/WH008.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-008',
  },
  {
    preview: './img/min-size/WH009-min.jpg',
    original: './img/full-size/WH009.jpg',
    description: 'Forum Ukraine of the future 2.0. Slide-009',
  },

];

for (let i = 10; i < 100; i++) {
  const item = {
    preview: `./img/min-size/WH0${i}-min.jpg`,
    original: `./img/full-size/WH0${i}.jpg`,
    description: `Forum Ukraine of the future 2.0. Slide-0${i}`,
  }
  galleryItems.push(item);
}
for (let i = 100; i < 753; i++) {
  const item = {
    preview: `./img/min-size/WH${i}-min.jpg`,
    original: `./img/full-size/WH${i}.jpg`,
    description: `Forum Ukraine of the future 2.0. Slide-${i}`,
  }
  galleryItems.push(item);
}