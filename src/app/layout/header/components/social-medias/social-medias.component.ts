import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../../models/link';

@Component({
  selector: 'parkouracademy-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss']
})
export class SocialMediasComponent implements OnInit {

  @Input() links: Link[];
  @Input() isScrolled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
