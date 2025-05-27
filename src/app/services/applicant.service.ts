import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Applicant } from '../models/applicants';
import { MOCK_APPLICANTS } from './mock_applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private http = inject(HttpClient);

  private _applicants = signal<Applicant[]>([]);

  private _applicantCourant = signal<Applicant>({
    id: 4,
    fullName: 'Ali Karim',
    skills: ['Angular', 'NestJS'],
    status: 'rejected',
    interviewsDone: '1',
  });

  public applicantCourant = computed(() => this._applicantCourant)

  public applicants = computed(() => this._applicants());

  getAllApplicants() {
      this.http.get<Applicant[]>('http://localhost:8081/api/v1/applicants').subscribe({
       next: (data) => {
          this._applicants.set(data);
       },
        error: (err) => {
          console.log(err);
          this._applicants.set(MOCK_APPLICANTS);
      }
    });
  }

  addApplicant( applicant :Applicant){
    this.http.post<Applicant>('http://localhost:8081/api/v1/applicants', applicant)
      .subscribe((newApplicant) => {
       this._applicants.update(list => [...list, newApplicant]);
      });     
  }

  getApplicantByName(name : string){
     this.http.get<Applicant>(`http://localhost:8081/api/v1/campaigns/${name}`).subscribe(
{
       next: (data) => {
          this._applicantCourant.set(data);
       },
        error: (err) => {
          console.log(err);
          this._applicantCourant.set(MOCK_APPLICANTS.find(app => app.fullName === name)!);
      }
}
     )
      }
}
