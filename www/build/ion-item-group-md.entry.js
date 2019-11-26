import { r as registerInstance, d as getIonMode, h, H as Host } from './core-ac546284.js';

const ItemGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { role: "group", class: {
                [mode]: true,
                // Used internally for styling
                [`item-group-${mode}`]: true,
                'item': true
            } }));
    }
    static get style() { return "ion-item-group {\n  display: block;\n}\n\n.item-group-md ion-item:last-child,\n.item-group-md ion-item-sliding:last-child ion-item {\n  --border-width: 0;\n}"; }
};

export { ItemGroup as ion_item_group };
