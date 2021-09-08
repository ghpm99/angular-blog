import { Component, OnInit } from '@angular/core';
import { faInstagram,faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  instagramIcon =faInstagram;
  facebookIcon = faFacebook;
  linkedinIcon = faLinkedin;


  constructor() { }

  ngOnInit(): void {
  }

}
