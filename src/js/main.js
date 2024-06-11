// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import * as bootstrap from 'bootstrap';

Neutralino.init();
Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit();
});
