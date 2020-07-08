import './pages/index.css';
// import Email from './js/smtp';

/* function ddd() {
  const efficiencyBtn = document.querySelector('.button__efficiency');
  efficiencyBtn.addEventListener('click', () => {
    if (process.env.JWT_SECRET) {
      Email.send({
        SecureToken: process.env.JWT_SECRET,
        To: process.env.MAIL_TO,
        From: process.env.MAIL_FROM,
        Subject: process.env.MAIL_SUBJECT,
        Body: '<h1>Аквафор Про</h1>',
        /* Attachments: [{   name: 'smtpjs.png',
            path: 'https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png',
          },
        ],
      }).then((message) => alert(message));
    }
  });
}
*/
function main() {
  const headerGamburgerBtn = document.querySelector('.header__gamburger');
  console.log(headerGamburgerBtn);

  headerGamburgerBtn.addEventListener('click', () => {
    headerGamburgerBtn.classList.toggle('header__gamburger-change');
  });
  /*  const popUp = document.querySelector('.popup.popup-video');
  const logosPlayBtn = document.querySelector('.logos__play');
  const popUpCloseBtn = document.querySelector('.popup__close');
  const popupContentImg = popUp.querySelector('.popup__content_img');

  popUpCloseBtn.addEventListener('click', () => {
    popUp.classList.remove('popup_is-opened');
    popupContentImg.src = '';
  });

  window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup')) {
      popUp.classList.remove('popup_is-opened');
      popupContentImg.src = '';
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      popUp.classList.remove('popup_is-opened');
      popupContentImg.src = '';
    }
  });

  logosPlayBtn.addEventListener('click', () => {
    popupContentImg.src =
      'https://aquaphor.store/wp-content/uploads/2020/07/AQUAPHOR_Professional.mp4';
    popUp.classList.add('popup_is-opened');
  });
  */
}

main();
