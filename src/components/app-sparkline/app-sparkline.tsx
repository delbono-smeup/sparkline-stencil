import { Component, h } from '@stencil/core';
//import $ from "jquery";
//import 'jquery-sparkline';

declare const $: any;

@Component({
    tag: 'app-sparkline',
    styleUrl: 'app-sparkline.css'
  })
  export class AppSparkline {
    
    private renderGra(containerID, config) {
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
            values: [1,4,2]
        };
        this.renderGra('idpie',config); 
        
        config.type = 'line';
        this.renderGra('idline',config); 

        config.type = 'bar';
        this.renderGra('idbar',config);

        config.type = 'bullet';
        this.renderGra('idbullet',config);

        config.type = 'discrete';
        this.renderGra('iddisc',config);
    }

    render() {
        const gridstyle={width: '150px'}; 

        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Sparkline</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">
                <p>jQuery sparkline - Stencil Example</p>
                <ion-label>Esempio</ion-label>
                
                <ion-grid style={gridstyle}>
                    <ion-row>
                        <ion-col>
                            Pie:
                        </ion-col>
                        <ion-col>
                            <span id='idpie'></span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            Line:
                        </ion-col>
                        <ion-col>
                            <span id='idline'></span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            Bar:
                        </ion-col>
                        <ion-col>
                            <span id='idbar'></span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            Discrete:
                        </ion-col>
                        <ion-col>
                            <span id='iddisc'></span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            Bullet:
                        </ion-col>
                        <ion-col>
                            <span id='idbullet'></span>
                        </ion-col>
                    </ion-row>
                </ion-grid>
           </ion-content>
        ];
    }
}