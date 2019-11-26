import { r as registerInstance, d as getIonMode, h, H as Host } from './core-ac546284.js';
import './animation-ed5fbd06.js';
import { m as menuController } from './index-0a82db46.js';
import { u as updateVisibility } from './menu-toggle-util-e7845e20.js';

const MenuToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.onClick = () => {
            return menuController.toggle(this.menu);
        };
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const mode = getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, h("slot", null)));
    }
    static get style() { return ":host(.menu-toggle-hidden) {\n  display: none;\n}"; }
};

export { MenuToggle as ion_menu_toggle };
