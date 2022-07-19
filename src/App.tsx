import React from "react";
import banner from "./g-banner-transparent.png";
import logo from "./logo64.png";
import livestream from "./g-livestream.png";
import instagram from "./g-instagram.png";
import twitter from "./g-twitter.png";

function App() {
  return (
    <div id="root">
      <header>
        <img alt="logo" src={banner} />
      </header>
      <main>
        <p>
          <strong>Here comes the music of the future!</strong>
        </p>
        <p id="inner-dialog">
          <i>Uhm, that should be convincing enough... Perfect!</i>
        </p>
        <p>Hang on a minute, you actual believed that? HAHA! </p>
        <p>
          Anyways, you should check out our music. We do like a live techno esq
          thing on some crazy cool equipment. <br></br>Who knows, it might be
          your kind of jam...
        </p>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/channel/UC7nKgwyOW6FkC3HxEnxHxJg"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="livestream" src={livestream} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/generativegig/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="instagram" src={instagram} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/generativegig"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="twitter" src={twitter} />
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <img alt="logo" src={logo} />
      </footer>
    </div>
  );
}

export default App;
