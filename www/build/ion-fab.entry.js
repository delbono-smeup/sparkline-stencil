import { r as registerInstance, d as getIonMode, h, H as Host, f as getElement } from './core-ac546284.js';

const Fab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the fab will display on the edge of the header if
         * `vertical` is `"top"`, and on the edge of the footer if
         * it is `"bottom"`. Should be used with a `fixed` slot.
         */
        this.edge = false;
        /**
         * If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.
         * That means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.
         */
        this.activated = false;
        this.onClick = () => {
            const hasList = !!this.el.querySelector('ion-fab-list');
            const getButton = this.getFab();
            const isButtonDisabled = getButton && getButton.disabled;
            if (hasList && !isButtonDisabled) {
                this.activated = !this.activated;
            }
        };
    }
    activatedChanged() {
        const activated = this.activated;
        const fab = this.getFab();
        if (fab) {
            fab.activated = activated;
        }
        Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(list => {
            list.activated = activated;
        });
    }
    componentDidLoad() {
        if (this.activated) {
            this.activatedChanged();
        }
    }
    /**
     * Close an active FAB list container.
     */
    async close() {
        this.activated = false;
    }
    getFab() {
        return this.el.querySelector('ion-fab-button');
    }
    render() {
        const { horizontal, vertical, edge } = this;
        const mode = getIonMode(this);
        return (h(Host, { onClick: this.onClick, class: {
                [mode]: true,
                [`fab-horizontal-${horizontal}`]: horizontal !== undefined,
                [`fab-vertical-${vertical}`]: vertical !== undefined,
                'fab-edge': edge
            } }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "activated": ["activatedChanged"]
    }; }
    static get style() { return ":host {\n  position: absolute;\n  z-index: 999;\n}\n\n:host(.fab-horizontal-center) {\n  left: 50%;\n  margin-left: -28px;\n}\n:host-context([dir=rtl]):host(.fab-horizontal-center), :host-context([dir=rtl]).fab-horizontal-center {\n  left: unset;\n  right: unset;\n  right: 50%;\n}\n\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.fab-horizontal-center) {\n    margin-left: unset;\n    -webkit-margin-start: -28px;\n    margin-inline-start: -28px;\n  }\n}\n\n:host(.fab-horizontal-start) {\n  left: calc(10px + var(--ion-safe-area-left, 0px));\n}\n:host-context([dir=rtl]):host(.fab-horizontal-start), :host-context([dir=rtl]).fab-horizontal-start {\n  left: unset;\n  right: unset;\n  right: calc(10px + var(--ion-safe-area-left, 0px));\n}\n\n:host(.fab-horizontal-end) {\n  right: calc(10px + var(--ion-safe-area-right, 0px));\n}\n:host-context([dir=rtl]):host(.fab-horizontal-end), :host-context([dir=rtl]).fab-horizontal-end {\n  left: unset;\n  right: unset;\n  left: calc(10px + var(--ion-safe-area-right, 0px));\n}\n\n:host(.fab-vertical-top) {\n  top: 10px;\n}\n\n:host(.fab-vertical-top.fab-edge) {\n  top: -28px;\n}\n\n:host(.fab-vertical-bottom) {\n  bottom: 10px;\n}\n\n:host(.fab-vertical-bottom.fab-edge) {\n  bottom: -28px;\n}\n\n:host(.fab-vertical-center) {\n  margin-top: -28px;\n  top: 50%;\n}"; }
};

export { Fab as ion_fab };
