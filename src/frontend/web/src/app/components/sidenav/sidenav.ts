import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Tolbar } from "../tolbar/tolbar";

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, Tolbar],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  showFiller = false;
}
