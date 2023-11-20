import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, switchMap } from 'rxjs';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Employees } from 'src/app/interfaces';

@Component({
  selector: 'app-relocate-employee-popup',
  templateUrl: './relocate-employee-popup.component.html',
  styleUrls: ['./relocate-employee-popup.component.scss']
})
export class RelocateEmployeePopupComponent implements OnInit {
constructor(private _employeesService : EmployeesService , private _fb:FormBuilder , private _config : DynamicDialogConfig , private Ref : DynamicDialogRef){}
data : Employees = {}
  ngOnInit(): void {
    this.data = this._config.data

    this.relocateForm.get('description')?.disable()
    this.relocateForm
    .get('department')
    ?.valueChanges.pipe(
      switchMap((selectedDepartmentId) =>
        this.DepartmentList$.pipe(
          map((departments) =>
            departments.find((dept : any) => dept.label === selectedDepartmentId)
          )
        )
      )
    )
    .subscribe((selectedDepartment) => {
      if (selectedDepartment) {
        this.relocateForm.get('description')?.setValue(selectedDepartment.description);
      } else {
        this.relocateForm.get('description')?.setValue('');
      }
    });
  }
DepartmentList$ = this._employeesService.getDepartments(this._config.data.department)
relocateForm : FormGroup = this._fb.group({
  department : '',
  description : ''
});

onChangeDepartment() {
   this.Ref.close({ ...this.data , ...this.relocateForm.value })
}
}
