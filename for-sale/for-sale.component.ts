import {Component, OnDestroy, OnInit} from '@angular/core';
import {Classifieds} from '../classifieds.model';
import {ClassifiedsService} from '../classifieds.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit, OnDestroy {
  classifieds: Classifieds[] = [];
  subscription: Subscription;
  term: string;

  constructor(private classifiedService: ClassifiedsService) {
  }

  ngOnInit() {
    this.subscription = this.classifiedService.classifiedListChangedEvent.subscribe(
      (classifieds: Classifieds[]) => {
        this.classifieds = classifieds;
      }
    );

    this.classifiedService.getClassifieds();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onKeyPress(value: string) {
    this.term = value;

  }
}
