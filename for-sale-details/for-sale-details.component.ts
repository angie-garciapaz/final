import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Classifieds} from '../classifieds.model';
import {ClassifiedsService} from '../classifieds.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-for-sale-details',
  templateUrl: './for-sale-details.component.html',
  styleUrls: ['./for-sale-details.component.css']
})
export class ForSaleDetailsComponent implements OnInit {
  classifieds: Classifieds;
  id: string;

  constructor(private classifiedsService: ClassifiedsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.classifieds = this.classifiedsService.getClassified(this.id);
      }
    );
  }

  onDelete() {
    this.classifiedsService.deleteClassified(this.classifieds);
    this.router.navigate(['/classifieds']);
  }

}
