import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employees } from 'src/app/interfaces';
import { DialogService } from 'primeng/dynamicdialog';
import { RelocateEmployeePopupComponent } from '../relocate-employee-popup/relocate-employee-popup.component';
import { Observable, catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent  {
  constructor(private _employeesService : EmployeesService , private _fb : FormBuilder , private _dialogService : DialogService , private _toaster : ToastrService){}
  serachForm : FormGroup = this._fb.group({
    skills : '',
    performance : ''
  })
  errorMessage : string = ''
  employeesList$ : Observable<Employees[]> = this._employeesService.getEmployessInfo().pipe(
    catchError((error) => {
      this.errorMessage = 'Error loading employees data. Please try again later.';
      return throwError(error);
    })
  )
  onRelocation(employee : Employees) {
    const dialogref = this._dialogService.open(RelocateEmployeePopupComponent, {
      header: 'Relocate Employee',
      width: '45%',
      height: '237px',
      data:employee
    });
    dialogref.onClose.subscribe(res=>{
      this.employeesList$
      .pipe(
        switchMap(data => {
          const employeeIndex = data.findIndex(elem => elem.id === res.id);
          if (employeeIndex !== -1) {
            // Update the department in the array
            data[employeeIndex].department = res.department;
          }
          return of(data);
        }),
        tap(updatedData => {
          // Update this.employeesList$ with the modified data
          this.employeesList$ = of(updatedData);
        })
      )
      .subscribe(() => {
        this._toaster.success(`${res.name} Updated Successfully`)
      });
    })


  }

  onFilter(): void {
    const filterSkills = this.serachForm.get('skills')?.value.toLowerCase();
    const filterPerformance = this.serachForm.get('performance')?.value

    this.employeesList$ = this._employeesService.getEmployessInfo().pipe(
      map((employees: Employees[]) => {
        // Apply the filter based on skills and performance
        return employees.filter(
          (employee : any) =>
            (employee.skills.some((skill : any) => skill.toLowerCase().includes(filterSkills)) ||
              filterSkills === '') &&
            (filterPerformance ? employee.performance >= filterPerformance : true)
        );
      })
    );
  }
}
