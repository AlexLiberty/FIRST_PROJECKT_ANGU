import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from '../link-list/link-list.component';
import { QuoteListComponent } from '../quote-list/quote-list.component';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, QuoteListComponent, LinkListComponent, BioComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Bill Gates';
  showSection: 'quotes' | 'bio' | 'links' | 'all' = 'all';
  showModal: boolean = true;

  backgrounds = [{ fileName: 'microsoft-logo.jpg' }];

  ngOnInit() {
    this.setBackground(this.backgrounds[0].fileName);
  }

  setBackground(imageName: string) {
    document.body.style.backgroundImage = `url(${imageName})`;
    this.showModal = false;
  }

  showQuotes() { this.showSection = 'quotes'; }
  showBio() { this.showSection = 'bio'; }
  showLinks() { this.showSection = 'links'; }
  showAll() { this.showSection = 'all'; }

  isSectionVisible(section: 'quotes' | 'bio' | 'links'): boolean {
    return this.showSection === 'all' || this.showSection === section;
  }
}
