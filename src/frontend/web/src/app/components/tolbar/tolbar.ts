import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-tolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './tolbar.html',
  styleUrl: './tolbar.scss',
})
export class Tolbar {
  drawer = input.required<MatDrawer>();
  title:string = "Glyco"
}
