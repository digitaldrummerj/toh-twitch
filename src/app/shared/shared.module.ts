import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  declarations: [],
})
export class SharedModule {}
