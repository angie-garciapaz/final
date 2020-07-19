import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {Classifieds} from '../classifieds.model';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-for-sale-items',
  templateUrl: './for-sale-items.component.html',
  styleUrls: ['./for-sale-items.component.css']
})
export class ForSaleItemsComponent implements OnInit {
  @Input() classifieds: Classifieds;
  @Output() classifiedSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
