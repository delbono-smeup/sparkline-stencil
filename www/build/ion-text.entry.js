import { r as registerInstance, d as getIonMode, h, H as Host } from './core-ac546284.js';
import { c as createColorClasses } from './theme-215399f6.js';

const Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign({}, createColorClasses(this.color), { [mode]: true }) }, h("slot", null)));
    }
    static get style() { return ":host(.ion-color) {\n  color: var(--ion-color-base);\n}"; }
};

export { Text as ion_text };
