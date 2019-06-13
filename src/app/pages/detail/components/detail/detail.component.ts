import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Training } from '../../../../models/training';
import { selectDetail } from '../../reducers/detail.reducer';
import { GetDetail } from '../../actions/detail.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'parkouracademy-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();
  training: Observable<Training>;
  background: string;
  isFullYear: FormControl = new FormControl(false);

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((params: { [key: string]: string }) => {
        this.fetchDetail(params.id);
      });

    this.training = this.store
      .pipe(
        select(selectDetail)
      );
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  fetchDetail(id: string): void {
    this.store.dispatch(new GetDetail({
      id: id
    }));
  }

}
