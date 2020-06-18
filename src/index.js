import './pages/index.css';
import Email from './js/smtp';

function main() {
  const efficiencyBtn = document.querySelector('.button__efficiency');

  efficiencyBtn.addEventListener('click', () => {
    if (process.env.JWT_SECRET) {
      Email.send({
        SecureToken: process.env.JWT_SECRET,
        To: process.env.MAIL_TO,
        From: process.env.MAIL_FROM,
        Subject: process.env.MAIL_SUBJECT,
        Body: '<h1>Аквафор Про</h1>',
        /*
        Attachments: [
          {
            name: 'smtpjs.png',
            path: 'https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png',
          },
        ],*/
      }).then((message) => alert(message));
    }
  });
}

main();
