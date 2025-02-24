import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { CounterComponent } from "./counter/counter.component";
import { NamesListComponent } from "./names-list/names-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, FooterComponent, CounterComponent, NamesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
}
