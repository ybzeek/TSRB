import merchScreen from "./screens/merchscreen.js";
import ProductScreen from "./screens/productScreen.js";
import { parseRequestUrl } from "./utils.js";
const routes = {
    "/": merchScreen,
    "/product/:id": ProductScreen,
};
const router = () => {
    const request = parseRequestUrl();
    const parseUrl =
        (request.resource ? `/${request.resource}`: '/') + 
        (request.id ? '/:id': '') +
        (request.verb ? `/${request.verb}`: '');
    const main = document.getElementById("main-container");
    main.innerHTML = merchScreen.render();
};

window.addEventListener("load", router);