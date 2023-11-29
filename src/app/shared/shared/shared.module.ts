import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
const PrimCompontents = [
  TableModule,
  InputTextModule,
  ButtonModule,
  DynamicDialogModule,
  DropdownModule,
  PasswordModule,
  CheckboxModule,
  MenubarModule,
  MenuModule
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ...PrimCompontents
  ],
  exports : [
  ...PrimCompontents
  ]
})
export class SharedModule { }
