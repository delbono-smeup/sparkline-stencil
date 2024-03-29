import { r as registerInstance, e as createEvent, d as getIonMode, h, H as Host, f as getElement } from './core-ac546284.js';
import { c as createColorClasses } from './theme-215399f6.js';

const Segment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.didInit = false;
        /**
         * If `true`, the user cannot interact with the segment.
         */
        this.disabled = false;
        /**
         * If `true`, the segment buttons will overflow and the user can swipe to see them.
         */
        this.scrollable = false;
        this.ionChange = createEvent(this, "ionChange", 7);
        this.ionStyle = createEvent(this, "ionStyle", 7);
    }
    valueChanged(value) {
        if (this.didInit) {
            this.updateButtons();
            this.ionChange.emit({ value });
        }
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    connectedCallback() {
        if (this.value === undefined) {
            const checked = this.getButtons().find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.updateButtons();
        this.didInit = true;
    }
    emitStyle() {
        this.ionStyle.emit({
            'segment': true
        });
    }
    updateButtons() {
        const value = this.value;
        for (const button of this.getButtons()) {
            button.checked = (button.value === value);
        }
    }
    getButtons() {
        return Array.from(this.el.querySelectorAll('ion-segment-button'));
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign({}, createColorClasses(this.color), { [mode]: true, 'segment-disabled': this.disabled, 'segment-scrollable': this.scrollable }) }));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return ".sc-ion-segment-md-h {\n  --indicator-color-checked: initial;\n  --ripple-color: currentColor;\n  --color-activated: initial;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n}\n\n.segment-disabled.sc-ion-segment-md-h, .sc-ion-segment-md-s > .segment-button-disabled {\n  pointer-events: none;\n}\n\n.segment-scrollable.sc-ion-segment-md-h {\n  -ms-flex-pack: start;\n  justify-content: start;\n  width: auto;\n  overflow-x: scroll;\n}\n\n.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar {\n  display: none;\n}\n\n.sc-ion-segment-md-h {\n  --background: none;\n  --background-checked: none;\n  --background-hover: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.04);\n  --background-activated: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.16);\n  --color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);\n  --color-checked: var(--ion-color-primary, #3880ff);\n  --color-checked-disabled: var(--color-checked);\n  --indicator-color: transparent;\n}\n\n.segment-disabled.sc-ion-segment-md-h {\n  opacity: 0.3;\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button {\n  --background-activated: rgba(var(--ion-color-base-rgb), 0.16);\n  --ripple-color: var(--ion-color-base);\n  background: transparent;\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked {\n  --indicator-color-checked: var(--ion-color-base);\n  color: var(--ion-color-base);\n}\n\n.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated {\n  color: var(--ion-color-base);\n}\n\n\@media (any-hover: hover) {\n  .sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button:hover {\n    background: rgba(var(--ion-color-base-rgb), 0.04);\n  }\n}\n.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button {\n  color: var(--ion-toolbar-color-unchecked, var(--color));\n}\n\n.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked {\n  --indicator-color-checked: var(--ion-toolbar-color-checked, var(--color-checked));\n  color: var(--ion-toolbar-color-checked, var(--color-checked));\n}\n\n.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button {\n  --background-hover: rgba(var(--ion-color-contrast-rgb), 0.04);\n  --background-activated: var(--ion-color-base);\n  --color: rgba(var(--ion-color-contrast-rgb), 0.6);\n  --color-checked: var(--ion-color-contrast);\n  --indicator-color-checked: var(--ion-color-contrast);\n}"; }
};

export { Segment as ion_segment };
