import { r as registerInstance, e as createEvent, d as getIonMode, h, H as Host, f as getElement } from './core-ac546284.js';
import { c as createColorClasses, h as hostContext } from './theme-215399f6.js';
import { f as findItemLabel, r as renderHiddenInput } from './helpers-6ef17316.js';

const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputId = `ion-cb-${checkboxIds++}`;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If `true`, the checkbox will visually appear as indeterminate.
         */
        this.indeterminate = false;
        /**
         * If `true`, the user cannot interact with the checkbox.
         */
        this.disabled = false;
        /**
         * The value of the toggle does not mean if it's checked or not, use the `checked`
         * property for that.
         *
         * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
         * it's only used when the toggle participates in a native `<form>`.
         */
        this.value = 'on';
        this.onClick = () => {
            this.setFocus();
            this.checked = !this.checked;
            this.indeterminate = false;
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionChange = createEvent(this, "ionChange", 7);
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
        this.ionStyle = createEvent(this, "ionStyle", 7);
    }
    componentWillLoad() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }
    disabledChanged() {
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    }
    setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }
    render() {
        const { inputId, indeterminate, disabled, checked, value, color, el } = this;
        const labelId = inputId + '-lbl';
        const mode = getIonMode(this);
        const label = findItemLabel(el);
        if (label) {
            label.id = labelId;
        }
        renderHiddenInput(true, el, this.name, (checked ? value : ''), disabled);
        let path = indeterminate
            ? h("path", { d: "M6 12L18 12" })
            : h("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8" });
        if (mode === 'md') {
            path = indeterminate
                ? h("path", { d: "M2 12H22" })
                : h("path", { d: "M1.73,12.91 8.1,19.28 22.79,4.59" });
        }
        return (h(Host, { onClick: this.onClick, role: "checkbox", "aria-disabled": disabled ? 'true' : null, "aria-checked": `${checked}`, "aria-labelledby": labelId, class: Object.assign({}, createColorClasses(color), { [mode]: true, 'in-item': hostContext('ion-item', el), 'checkbox-checked': checked, 'checkbox-disabled': disabled, 'checkbox-indeterminate': indeterminate, 'interactive': true }) }, h("svg", { class: "checkbox-icon", viewBox: "0 0 24 24" }, path), h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: btnEl => this.buttonEl = btnEl })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ":host {\n  /**\n   * \@prop --size: Size of the checkbox icon\n   *\n   * \@prop --background: Background of the checkbox icon\n   * \@prop --background-checked: Background of the checkbox icon when checked\n   *\n   * \@prop --border-color: Border color of the checkbox icon\n   * \@prop --border-radius: Border radius of the checkbox icon\n   * \@prop --border-width: Border width of the checkbox icon\n   * \@prop --border-style: Border style of the checkbox icon\n   * \@prop --border-color-checked: Border color of the checkbox icon when checked\n   *\n   * \@prop --transition: Transition of the checkbox icon\n   *\n   * \@prop --checkmark-color: Color of the checkbox checkmark when checked\n   */\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --border-color-checked: var(--ion-color-primary, #3880ff);\n  --checkmark-color: var(--ion-color-primary-contrast, #fff);\n  --transition: none;\n  display: inline-block;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2;\n}\n\n:host(.ion-color) {\n  --background-checked: var(--ion-color-base);\n  --border-color-checked: var(--ion-color-base);\n  --checkmark-color: var(--ion-color-contrast);\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.checkbox-icon {\n  border-radius: var(--border-radius);\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.checkbox-icon path {\n  fill: none;\n  stroke: var(--checkmark-color);\n  stroke-width: 1;\n  opacity: 0;\n}\n\n:host(.checkbox-checked) .checkbox-icon,\n:host(.checkbox-indeterminate) .checkbox-icon {\n  border-color: var(--border-color-checked);\n  background: var(--background-checked);\n}\n\n:host(.checkbox-checked) .checkbox-icon path,\n:host(.checkbox-indeterminate) .checkbox-icon path {\n  opacity: 1;\n}\n\n:host(.checkbox-disabled) {\n  pointer-events: none;\n}\n\n:host {\n  --border-radius: calc(var(--size) * .125);\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --transition: background 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  --size: 18px;\n  width: var(--size);\n  height: var(--size);\n}\n\n.checkbox-icon path {\n  stroke-dasharray: 30;\n  stroke-dashoffset: 30;\n  stroke-width: 3;\n}\n\n:host(.checkbox-checked) .checkbox-icon path,\n:host(.checkbox-indeterminate) .checkbox-icon path {\n  stroke-dashoffset: 0;\n  -webkit-transition: stroke-dashoffset 90ms linear 90ms;\n  transition: stroke-dashoffset 90ms linear 90ms;\n}\n\n:host(.checkbox-disabled) {\n  opacity: 0.3;\n}\n\n:host(.in-item) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 18px;\n  margin-bottom: 18px;\n  display: block;\n  position: static;\n}\n\n:host(.in-item[slot=start]) {\n  margin-left: 4px;\n  margin-right: 36px;\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 4px;\n    margin-inline-start: 4px;\n    -webkit-margin-end: 36px;\n    margin-inline-end: 36px;\n  }\n}"; }
};
let checkboxIds = 0;

export { Checkbox as ion_checkbox };
