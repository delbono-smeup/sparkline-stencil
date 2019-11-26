import { r as registerInstance, h } from './core-ac546284.js';

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-title", null, "Home"))),
            h("ion-content", { class: "ion-padding" }, h("p", null, "Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil and ionic/core! Check out the README for everything that comes in this starter out of the box and check out our docs on ", h("a", { href: "https://stenciljs.com" }, "stenciljs.com"), " to get started."), h("ion-button", { href: "/sparkline", expand: "block" }, "Sparkline widgets"), h("ion-button", { href: "/profile/ionic", expand: "block" }, "Profile page"))
        ];
    }
    static get style() { return ""; }
};

export { AppHome as app_home };
