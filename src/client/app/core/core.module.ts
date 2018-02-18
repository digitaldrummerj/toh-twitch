import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToastService } from './toast.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule, // because we use <router-outloet> & routerLink
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  providers: [ToastService],
})
export class CoreModule {}
