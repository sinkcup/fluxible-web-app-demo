import Fluxible from 'fluxible';
import Application from './components/Application';
import ApiStore from './stores/ApiStore';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(ApiStore);

module.exports = app;
