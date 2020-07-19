import {Classifieds} from './classifieds.model';
import {MOCKCLASSIFIEDS} from './MOCKCLASSIFIEDS';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ClassifiedsService {
  classifieds: Classifieds[] = [];
  classifiedListChangedEvent = new Subject<Classifieds[]>();
  maxClassifiedId: number;

  constructor(private http: HttpClient) {
  }

  getClassifieds() {
    this.http.get('https://ag-only.firebaseio.com/classifieds.json')
      .subscribe(
        (classifieds: Classifieds[]) => {
          this.classifieds = classifieds;

          this.maxClassifiedId = this.getMaxId();

          this.classifieds.sort((a, b) =>
            (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

          this.classifiedListChangedEvent.next(this.classifieds.slice());
        },

        (error: any) => {
          console.log(error());
        }
      );
  }

  getClassified(id: string): Classifieds {
    for (const classifieds of this.classifieds) {
      if (classifieds.id === id) {
        return classifieds;
      }
    }

    return null;
  }


  getMaxId(): number {
    let maxId = 0;

    for (const classified of this.classifieds) {
      const currentId = parseInt(classified.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  storeClassified() {
    const contacts = JSON.stringify(this.classifieds);

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put('https://ag-only.firebaseio.com/classifieds.json', contacts, {headers: headers})
      .subscribe(
        () => {
          this.classifiedListChangedEvent.next(this.classifieds.slice());
        }
      );
  }

  updateClassified(originalClassified: Classifieds, newClassified: Classifieds) {
    if (!originalClassified || !newClassified) {
      return;
    }

    const pos = this.classifieds.indexOf(originalClassified);

    if (pos < 0) {
      return;
    }

    newClassified.id = originalClassified.id;

    this.classifieds[pos] = newClassified;

    this.storeClassified();
  }

  deleteClassified(classified: Classifieds) {
    if (!classified) {
      return;
    }

    const pos = this.classifieds.indexOf(classified);
    if (pos < 0) {
      return;
    }

    this.classifieds.splice(pos, 1);
    this.storeClassified();
  }
}
