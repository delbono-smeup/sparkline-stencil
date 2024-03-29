import { r as registerInstance, d as getIonMode, h, H as Host, f as getElement } from './core-ac546284.js';
import { c as createColorClasses } from './theme-215399f6.js';

const ToolbarTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getMode() {
        const mode = getIonMode(this);
        const toolbar = this.el.closest('ion-toolbar');
        return (toolbar && toolbar.mode) || mode;
    }
    render() {
        const mode = this.getMode();
        return (h(Host, { class: Object.assign({ [mode]: true, [`title-${mode}`]: true }, createColorClasses(this.color)) }, h("div", { class: "toolbar-title" }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Text color of the title\n   */\n  --color: initial;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  color: var(--color);\n}\n\n:host(.title-ios) {\n  left: 0;\n  top: 0;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n:host-context([dir=rtl]):host(.title-ios), :host-context([dir=rtl]).title-ios {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.title-ios) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 90px;\n    padding-inline-start: 90px;\n    -webkit-padding-end: 90px;\n    padding-inline-end: 90px;\n  }\n}\n\n:host(.title-md) {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.title-md) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 20px;\n    padding-inline-start: 20px;\n    -webkit-padding-end: 20px;\n    padding-inline-end: 20px;\n  }\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  pointer-events: auto;\n}"; }
};

export { ToolbarTitle as ion_title };
