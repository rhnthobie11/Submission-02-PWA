import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, main,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      main: this._main,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    // menunjukkan dimana letak konten akan dimuat nantinya
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
