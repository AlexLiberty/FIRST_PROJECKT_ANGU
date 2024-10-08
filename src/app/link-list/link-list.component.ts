import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})

export class LinkListComponent {
  @Input() links = [
    { icon: 'fa-brands fa-wikipedia-w fa-xl', url: 'https://en.wikipedia.org/wiki/Bill_Gates', title: "Bill Gates on Wikipedia" },
    { icon: 'fa-solid fa-hand-holding-heart fa-xl', url: 'https://www.gatesfoundation.org/', title: "Bill & Melinda Gates Foundation" },
    { icon: 'fa-solid fa-blog fa-xl', url: 'https://www.gatesnotes.com/', title: "Bill Gates Blog" },
    { icon: 'fa-brands fa-square-x-twitter fa-xl', url: 'https://x.com/billgates?mx=2', title: "Bill Gates on Twitter" }
  ];

  newLinkIcon = 'fa-brands fa-wikipedia-w fa-xl';
  newLinkTitle = '';
  newLinkUrl = '';

  addLink() {
    if (this.newLinkUrl && this.newLinkTitle) {
      this.links.push({ icon: this.newLinkIcon, url: this.newLinkUrl, title: this.newLinkTitle });
      this.newLinkTitle = '';
      this.newLinkUrl = '';
    }
  }

  isHovered = false;
}
