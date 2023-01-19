import { App } from './App.js';

App.init(process.argv).then((app) => {
    app.start();
});
