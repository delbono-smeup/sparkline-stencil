import { r as registerInstance, B as Build } from './core-ac546284.js';
import { c as createOverlay, b as dismissOverlay, g as getOverlay } from './overlays-399f2aff.js';

const ToastController = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        if (Build.isDev) {
            console.warn(`[DEPRECATED][ion-toast-controller] Use the toastController export from @ionic/core:
  import { toastController } from '@ionic/core';
  const toast = await toastController.create({...});`);
        }
    }
    /**
     * Create a toast overlay with toast options.
     *
     * @param options The options to use to create the toast.
     */
    create(options) {
        return createOverlay('ion-toast', options);
    }
    /**
     * Dismiss the open toast overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
     * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
     */
    dismiss(data, role, id) {
        return dismissOverlay(document, data, role, 'ion-toast', id);
    }
    /**
     * Get the most recently opened toast overlay.
     */
    async getTop() {
        return getOverlay(document, 'ion-toast');
    }
};

export { ToastController as ion_toast_controller };
