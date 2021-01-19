import {Component, OnInit} from '@angular/core';
import {DataxService} from '../api/datax.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    public items: any;
    public animal: any;
    public id: any;
    public obj = {
        id: '',
        name: '',
        description: '',
        life_span: '',
        origin: '',
        wikipedia_url: '',
        vetstreet_url: '',
        image: {
            url: ''
        },
    };

    constructor(public data: DataxService) {
        this.items = [];
        this.animal = this.obj;
        this.id = '';
    }

    ngOnInit() {
        this.listar();
    }

    public async listar() {
        try {
            let items: any = await this.data.getServis('breeds');
            this.items = items;
            this.id = 'abys';
            this.animal = items[0];
        } catch (e) {
            console.log(e);
        }
    }

    public cambio() {
        this.animal = this.obj;
        let rx: any = _.filter(this.items, {'id': this.id});
        this.animal = rx[0];
    }
}
