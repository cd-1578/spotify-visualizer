import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [SearchBarComponent, MatCardModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {}
