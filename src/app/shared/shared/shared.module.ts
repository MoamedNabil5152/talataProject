import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
const PrimCompontents = [
  TableModule,
  InputTextModule,
  ButtonModule,
  DynamicDialogModule,
  DropdownModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PrimCompontents
  ],
  exports : [
  ...PrimCompontents
  ]
})
export class SharedModule { }
