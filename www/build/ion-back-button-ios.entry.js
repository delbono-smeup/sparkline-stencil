import { r as registerInstance, d as getIonMode, c as config, h, H as Host, f as getElement } from './core-ac546284.js';
import { o as openURL, c as createColorClasses } from './theme-215399f6.js';

const BackButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mode = getIonMode(this);
        /**
         * If `true`, the user cannot interact with the button.
         */
        this.disabled = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = async (ev) => {
            const nav = this.el.closest('ion-nav');
            ev.preventDefault();
            if (nav && await nav.canGoBack()) {
                return nav.pop({ skipIfBusy: true });
            }
            return openURL(this.defaultHref, ev, 'back');
        };
    }
    get backButtonIcon() {
        return this.icon != null ? this.icon : config.get('backButtonIcon', 'arrow-back');
    }
    get backButtonText() {
        const defaultBackButtonText = this.mode === 'ios' ? 'Back' : null;
        return this.text != null ? this.text : config.get('backButtonText', defaultBackButtonText);
    }
    get hasIconOnly() {
        return this.backButtonIcon && !this.backButtonText;
    }
    get rippleType() {
        // If the button only has an icon we use the unbounded
        // "circular" ripple effect
        if (this.hasIconOnly) {
            return 'unbounded';
        }
        return 'bounded';
    }
    render() {
        const { color, defaultHref, disabled, type, mode, hasIconOnly, backButtonIcon, backButtonText } = this;
        const showBackButton = defaultHref !== undefined;
        return (h(Host, { onClick: this.onClick, class: Object.assign({}, createColorClasses(color), { [mode]: true, 'button': true, 'back-button-disabled': disabled, 'back-button-has-icon-only': hasIconOnly, 'ion-activatable': true, 'ion-focusable': true, 'show-back-button': showBackButton }) }, h("button", { type: type, disabled: disabled, class: "button-native" }, h("span", { class: "button-inner" }, backButtonIcon && h("ion-icon", { icon: backButtonIcon, lazy: false }), backButtonText && h("span", { class: "button-text" }, backButtonText)), mode === 'md' && h("ion-ripple-effect", { type: this.rippleType }))));
    }
    get el() { return getElement(this); }
    static get style() { return ".sc-ion-back-button-ios-h {\n  \n  --background: transparent;\n  --color-focused: var(--color);\n  --color-hover: var(--color);\n  --icon-margin-top: 0;\n  --icon-margin-bottom: 0;\n  --icon-padding-top: 0;\n  --icon-padding-end: 0;\n  --icon-padding-bottom: 0;\n  --icon-padding-start: 0;\n  --margin-top: 0;\n  --margin-end: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --min-width: auto;\n  --min-height: auto;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --opacity: 1;\n  --ripple-color: currentColor;\n  --transition: background-color, opacity 100ms linear;\n  display: none;\n  min-width: var(--min-width);\n  min-height: var(--min-height);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n.ion-color.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios {\n  color: var(--ion-color-base);\n}\n\n.can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header .sc-ion-back-button-ios-h, .show-back-button.sc-ion-back-button-ios-h {\n  display: block;\n}\n\n.back-button-disabled.sc-ion-back-button-ios-h {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.button-native.sc-ion-back-button-ios {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: var(--margin-start);\n  margin-right: var(--margin-end);\n  margin-top: var(--margin-top);\n  margin-bottom: var(--margin-bottom);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  opacity: var(--opacity);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native.sc-ion-back-button-ios {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--margin-start);\n    margin-inline-start: var(--margin-start);\n    -webkit-margin-end: var(--margin-end);\n    margin-inline-end: var(--margin-end);\n  }\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native.sc-ion-back-button-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.button-inner.sc-ion-back-button-ios {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\nion-icon.sc-ion-back-button-ios {\n  padding-left: var(--icon-padding-start);\n  padding-right: var(--icon-padding-end);\n  padding-top: var(--icon-padding-top);\n  padding-bottom: var(--icon-padding-bottom);\n  margin-left: var(--icon-margin-start);\n  margin-right: var(--icon-margin-end);\n  margin-top: var(--icon-margin-top);\n  margin-bottom: var(--icon-margin-bottom);\n  display: inherit;\n  font-size: var(--icon-font-size);\n  font-weight: var(--icon-font-weight);\n  pointer-events: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-icon.sc-ion-back-button-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--icon-padding-start);\n    padding-inline-start: var(--icon-padding-start);\n    -webkit-padding-end: var(--icon-padding-end);\n    padding-inline-end: var(--icon-padding-end);\n  }\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-icon.sc-ion-back-button-ios {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--icon-margin-start);\n    margin-inline-start: var(--icon-margin-start);\n    -webkit-margin-end: var(--icon-margin-end);\n    margin-inline-end: var(--icon-margin-end);\n  }\n}\n\n\@media (any-hover: hover) {\n  .sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios {\n    background: var(--background-hover);\n    color: var(--color-hover);\n  }\n}\n.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios {\n  background: var(--background-focused);\n  color: var(--color-focused);\n}\n\n\@media (any-hover: hover) {\n  .ion-color.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios {\n    color: var(--ion-color-base);\n  }\n}\n.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios {\n  color: var(--ion-color-base);\n}\n\nion-toolbar.sc-ion-back-button-ios-h:not(.ion-color):not(.ion-color), ion-toolbar:not(.ion-color) .sc-ion-back-button-ios-h:not(.ion-color) {\n  color: var(--ion-toolbar-color, var(--color));\n}\n\n.sc-ion-back-button-ios-h {\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --border-radius: 4px;\n  --color: var(--ion-color-primary, #3880ff);\n  --icon-margin-end: -5px;\n  --icon-margin-start: -4px;\n  --icon-font-size: 1.85em;\n  --min-height: 32px;\n  font-size: 17px;\n}\n\n.button-native.sc-ion-back-button-ios {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  overflow: visible;\n  z-index: 99;\n}\n\n.activated.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios {\n  opacity: 0.4;\n}\n\n\@media (any-hover: hover) {\n  .sc-ion-back-button-ios-h:hover {\n    --opacity: .6;\n  }\n}\n.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n}"; }
};

export { BackButton as ion_back_button };
