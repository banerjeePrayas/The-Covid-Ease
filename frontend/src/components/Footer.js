import {memo} from 'react';
import {Twitter, GitHub, Instagram, Database, Mail, Send} from 'react-feather';
// import {useTranslation} from 'react-i18next';

function Footer() {
//   const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://github.com/banerjeePrayas/The-Covid-Ease"
          target="_blank"
          rel="noopener noreferrer"
        >
          The-Covid-Ease
        </a>
      </div>

      <h5>{'We stand with everyone fighting on the frontlines'}</h5>

      <div className="links">
        <a
          href="https://github.com/banerjeePrayas/The-Covid-Ease"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub size={48} />
        </a>

        {/* <a
          className="api"
          href="https://api.covid19india.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database size={48} />
        </a> */}

        {/* <a
          href="https://t.me/covid19indiaorg"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send size={48} />
        </a> */}

        <a
          href="https://twitter.com/covid19indiaorg"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter size={48} />
        </a>

        <a
          href="https://instagram.com/covid19indiaorg"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <Instagram size={48} />
        </a>

        <a
          href="mailto:admin@thecovidease.com"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={48} />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
