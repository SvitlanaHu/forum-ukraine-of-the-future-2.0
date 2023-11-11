import { galleryItems } from './gallery-item.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
            <li
              class="gallery__item"
              style="border-radius: 36px;
              background: transparent;
              box-shadow: none;">
                <a
                  class="gallery__item"
                  href="${original}" 
                  style= "box-shadow: none;" style="border-radius: 36px;"
                >
                  <img
                    class="gallery__image"
                    src="${preview}" 
                    alt="${description}" 
                    style="border: 1px solid transparent;
                           border-radius: 36px;
                           padding: 5px; 
                           background: rgba(255, 255, 255, 0.3); box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%);"
                   />
                   <a
                      class="link-download link"
                      href="${original}"
                      download
                    >
                      <svg class="icon-download" width="18" height="18">
                        <use href="./img/symbol-defs.svg#icon-download"></use>
                        <span class="signature-download">Завантажити</span>
                      </svg>
                    </a>
                </a>
            </li>`;
        })
        .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});