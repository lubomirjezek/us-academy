import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../../../ui/modal/services/modal.service';

@Component({
  selector: 'parkouracademy-reservation-success-modal',
  templateUrl: './reservation-success-modal.component.html',
  styleUrls: ['./reservation-success-modal.component.scss']
})
export class ReservationSuccessModalComponent implements OnInit {

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit() { }

}
