import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {DockModule} from 'primeng/dock';
import {ChartModule} from 'primeng/chart';


@NgModule({
  imports: [
    CommonModule,
    DockModule,
    SidebarModule,
    CardModule,
    ProgressSpinnerModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    RadioButtonModule,
    RatingModule,
    ToolbarModule,
    ChartModule],

    exports: [
      DockModule,
      SidebarModule,
      ProgressSpinnerModule,
      CardModule,
      InputTextModule,
      InputTextareaModule,
      InputNumberModule,
      ButtonModule,
      TableModule,
      DialogModule,
      ConfirmDialogModule,
      DropdownModule,
      RadioButtonModule,
      RatingModule,
      ToolbarModule,
      ChartModule
    ]
})
export class PrimeNgModulesModule {}
