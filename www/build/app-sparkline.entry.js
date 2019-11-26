import { r as registerInstance, h } from './core-ac546284.js';

const AppSparkline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    renderGra(containerID, config) {
        var type = config.type || 'bar';
        var opts = {};
        switch (type) {
            case 'box':
                opts = {
                    type: type,
                    fillColor: false,
                    height: '50'
                };
                break;
            case 'bullet':
                opts = {
                    type: type,
                    fillColor: false
                };
                break;
            case 'discrete':
                opts = {
                    type: type,
                    fillColor: false,
                    height: '50',
                    width: config.values.length * 10
                };
                break;
            case 'line':
                opts = {
                    type: type,
                    fillColor: false,
                    height: '50',
                    width: config.values.length * 10
                };
                break;
            case 'pie':
                opts = {
                    type: type,
                    fillColor: false,
                    height: config.height || '50px',
                    width: config.width || '50px'
                };
                break;
            default:
                // bar
                opts = {
                    type: 'bar',
                    fillColor: false,
                    height: '50px',
                    barWidth: 4
                };
                break;
        }
        console.log(JSON.stringify(config));
        console.log(JSON.stringify(opts));
        $("#" + containerID).sparkline(config.values, opts);
    }
    componentDidLoad() {
        let config = {
            type: 'pie',
            values: [1, 4, 2]
        };
        this.renderGra('idpie', config);
        config.type = 'line';
        this.renderGra('idline', config);
        config.type = 'bar';
        this.renderGra('idbar', config);
        config.type = 'bullet';
        this.renderGra('idbullet', config);
        config.type = 'discrete';
        this.renderGra('iddisc', config);
    }
    render() {
        const gridstyle = { width: '150px' };
        return [
            h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Sparkline"))),
            h("ion-content", { class: "ion-padding" }, h("p", null, "jQuery sparkline - Stencil Example"), h("ion-label", null, "Esempio"), h("ion-grid", { style: gridstyle }, h("ion-row", null, h("ion-col", null, "Pie:"), h("ion-col", null, h("span", { id: 'idpie' }))), h("ion-row", null, h("ion-col", null, "Line:"), h("ion-col", null, h("span", { id: 'idline' }))), h("ion-row", null, h("ion-col", null, "Bar:"), h("ion-col", null, h("span", { id: 'idbar' }))), h("ion-row", null, h("ion-col", null, "Discrete:"), h("ion-col", null, h("span", { id: 'iddisc' }))), h("ion-row", null, h("ion-col", null, "Bullet:"), h("ion-col", null, h("span", { id: 'idbullet' })))))
        ];
    }
    static get style() { return ""; }
};

export { AppSparkline as app_sparkline };
