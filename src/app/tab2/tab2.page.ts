import {Component, OnInit, ViewChild} from '@angular/core';
import {DataxService} from '../api/datax.service';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    public items: any;
    public page: number;
    @ViewChild('mySlider') slides: IonSlides;

    constructor(public data: DataxService) {
        this.page = 1;
        this.items = [];
    }

    ngOnInit() {
        this.listar(0);
    }

    public swipeLast(ix: number) {
        let inx = 0;
        (ix == 0) ? inx = 0 : inx = (this.items.length - 1);
        this.slides.slideTo(inx);
    }

    public swipeNext() {
        this.slides.slideNext();
    }

    public swipeBack() {
        this.slides.slidePrev();
    }

    public masnuevas() {
        this.listar(this.page++);
    }

    public async listar(index: number) {
        console.log(index);
        this.items = [];
        try {
            let items: any = await this.data.getServis('images/search?limit=18&mime_types=&order=Random&size=small&page=' + index + '&category_ids=1&sub_id=demo-b7e1c3');
            this.items = items;
        } catch (e) {
            console.log(e);
        }
    }

}
