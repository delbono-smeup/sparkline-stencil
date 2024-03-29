import { r as registerInstance, d as getIonMode, h, H as Host } from './core-ac546284.js';
import { c as createColorClasses } from './theme-215399f6.js';

const ListHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign({}, createColorClasses(this.color), { [mode]: true }) }, h("slot", null)));
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the list header\n   * \@prop --color: Color of the list header text\n   */\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px;\n  background: var(--background);\n  color: var(--color);\n  overflow: hidden;\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host {\n  --background: transparent;\n  --color: var(--ion-color-step-850, #262626);\n  padding-left: calc(var(--ion-safe-area-left, 0px) + 16px);\n  position: relative;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 16px);\n    padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 16px);\n  }\n}"; }
};

export { ListHeader as ion_list_header };
