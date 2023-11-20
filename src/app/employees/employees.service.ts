import { Injectable } from '@angular/core';
import { Department, Employees } from '../interfaces';
import { Observable, map, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
employeesList : Employees[] =[
  {
    id: 1,
    name: 'John Doe',
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    performance: 4.5,
    department: 'IT',
  },
  {
    id: 2,
    name: 'Jane Smith',
    skills: ['Java', 'Spring Boot', 'SQL', 'React'],
    performance: 4.2,
    department: 'Software Engineering',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    skills: ['Python', 'Django', 'JavaScript', 'Vue.js'],
    performance: 4.8,
    department: 'Web Development',
  },
  {
    id: 4,
    name: 'Bob Williams',
    skills: ['C#', '.NET', 'ASP.NET', 'MVC'],
    performance: 4.0,
    department: 'Backend Development',
  },
  {
    id: 5,
    name: 'Eva Brown',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    performance: 4.7,
    department: 'Full Stack Development',
  },
  {
    id: 6,
    name: 'Michael Davis',
    skills: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    performance: 4.3,
    department: 'Backend Development',
  },
  {
    id: 7,
    name: 'Sophia Wilson',
    skills: ['Angular', 'TypeScript', 'RxJS', 'HTML'],
    performance: 4.6,
    department: 'Frontend Development',
  },
  {
    id: 8,
    name: 'David Rodriguez',
    skills: ['Python', 'Flask', 'SQLAlchemy', 'JavaScript'],
    performance: 4.4,
    department: 'Web Development',
  },
  {
    id: 9,
    name: 'Olivia Martinez',
    skills: ['Java', 'Spring MVC', 'Hibernate', 'JSP'],
    performance: 4.1,
    department: 'Software Engineering',
  },
  {
    id: 10,
    name: 'Daniel Lee',
    skills: ['React', 'Redux', 'Node.js', 'MongoDB'],
    performance: 4.9,
    department: 'Full Stack Development',
  },
  {
    id: 11,
    name: 'Emily White',
    skills: ['Python', 'Django', 'JavaScript', 'React'],
    performance: 4.2,
    department: 'Web Development',
  },
  {
    id: 12,
    name: 'Chris Turner',
    skills: ['Java', 'Spring Boot', 'Angular', 'HTML'],
    performance: 4.7,
    department: 'Software Engineering',
  },
  {
    id: 13,
    name: 'Sophie Harris',
    skills: ['JavaScript', 'Vue.js', 'Node.js', 'Express.js'],
    performance: 4.5,
    department: 'Full Stack Development',
  },
  {
    id: 14,
    name: 'Lucas Carter',
    skills: ['.NET', 'C#', 'ASP.NET', 'MVC'],
    performance: 4.0,
    department: 'Backend Development',
  },
  {
    id: 15,
    name: 'Isabella Walker',
    skills: ['React', 'Redux', 'TypeScript', 'HTML'],
    performance: 4.6,
    department: 'Frontend Development',
  },
  {
    id: 16,
    name: 'Ethan Hill',
    skills: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    performance: 4.3,
    department: 'Backend Development',
  },
  {
    id: 17,
    name: 'Mia Garcia',
    skills: ['Angular', 'TypeScript', 'RxJS', 'HTML'],
    performance: 4.8,
    department: 'Frontend Development',
  },
  {
    id: 18,
    name: 'Logan King',
    skills: ['Python', 'Flask', 'SQLAlchemy', 'JavaScript'],
    performance: 4.4,
    department: 'Web Development',
  },
  {
    id: 19,
    name: 'Zoe Phillips',
    skills: ['Java', 'Spring MVC', 'Hibernate', 'JSP'],
    performance: 4.1,
    department: 'Software Engineering',
  },
  {
    id: 20,
    name: 'Aiden Scott',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    performance: 4.9,
    department: 'Full Stack Development',
  },
];
departments :  Department[] = [
  { id: 1, name: 'IT', description: 'Information Technology' },
  { id: 2, name: 'Marketing', description: 'Marketing Department' },
  { id: 3, name: 'Sales', description: 'Sales Department' },
  { id: 4, name: 'Finance', description: 'Finance Department' },
  { id: 5, name: 'Human Resources', description: 'Human Resources Department' },
  { id: 6, name: 'Research and Development', description: 'R&D Department' },
  { id: 7, name: 'Customer Service', description: 'Customer Service Department' },
  { id: 8, name: 'Operations', description: 'Operations Department' },
  { id: 9, name: 'Quality Assurance', description: 'Quality Assurance Department' },
  { id: 10, name: 'Supply Chain', description: 'Supply Chain Department' },
  { id: 11, name: 'Legal', description: 'Legal Department' },
  { id: 12, name: 'Engineering', description: 'Engineering Department' },
  { id: 13, name: 'Public Relations', description: 'Public Relations Department' },
  { id: 14, name: 'Health and Safety', description: 'Health and Safety Department' },
  { id: 15, name: 'Training and Development', description: 'Training and Development Department' },
  { id: 16, name: 'Administration', description: 'Administration Department' },
  { id: 17, name: 'Procurement', description: 'Procurement Department' },
  { id: 18, name: 'Facilities Management', description: 'Facilities Management Department' },
  { id: 19, name: 'Information Security', description: 'Information Security Department' },
  { id: 20, name: 'Publications', description: 'Publications Department' },
]
 constructor() { }
  getEmployessInfo(): Observable<any> {
    return of(this.employeesList)
  }
  getDepartments(filterName?: string): Observable<any> {
    return of(this.departments).pipe(
      map((items) => {
        if (filterName) {
          return items
            .filter((val: any) => val.name !== filterName)
            .map((val: any) => ({ ...val, label: val.name, value: val.name }));
        } else {
          return items.map((val: any) => ({ ...val, label: val.name, value: val.name }));
        }
      }),
      take(1)
    );
  }
}
