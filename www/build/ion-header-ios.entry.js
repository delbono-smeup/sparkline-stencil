import { r as registerInstance, d as getIonMode, h, H as Host } from './core-ac546284.js';

const Header = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { role: "banner", class: {
                [mode]: true,
                // Used internally for styling
                [`header-${mode}`]: true,
                [`header-translucent`]: this.translucent,
                [`header-translucent-${mode}`]: this.translucent,
            } }));
    }
    static get style() { return "ion-header {\n  display: block;\n  position: relative;\n  -ms-flex-order: -1;\n  order: -1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-header ion-toolbar:first-child {\n  padding-top: var(--ion-safe-area-top, 0);\n}\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n}\n\n.header-ios[no-border] ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n\@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {\n  .header-translucent-ios {\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    backdrop-filter: saturate(180%) blur(20px);\n  }\n\n  .header-translucent-ios ion-toolbar {\n    --opacity: .8;\n    --backdrop-filter: saturate(180%) blur(20px);\n  }\n}"; }
};

export { Header as ion_header };
