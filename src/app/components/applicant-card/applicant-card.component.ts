import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, signal, Signal } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Applicant } from '../../models/applicants';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { Router, RouterModule } from '@angular/router';
import { ApplicantService } from '../../services/applicant.service';


@Component({
  selector: 'app-applicant-card',
  imports: [CommonModule,NzCardModule,NzFloatButtonModule,NzBadgeModule,RouterModule],
  templateUrl: './applicant-card.component.html',
  styleUrl: './applicant-card.component.css'
})
export class ApplicantCardComponent {

  private router = inject(Router);



  private _applicant!: Applicant;

  @Input({ required: true })
  set applicant(value: Applicant) {
    this._applicant = value;
    this.status.set(value.status);
  }

  get applicant() {
    return this._applicant;
  }

  status = signal<string>('');

  color_status = computed<string>(() => {
    switch (this.status()) {
      case 'new':
        return 'cyan';
      case 'interviewed':
        return 'blue';
      case 'hired':
        return 'green';
      case 'rejected':
        return 'red';
      default:
        return 'default';
    }
  });

  goToProfile() {


    
       
    this.router.navigate(['/applicants', this.applicant.fullName]);
  }
}
