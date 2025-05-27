import { Component, inject, Input, signal } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applicant-profile',
  imports: [CommonModule, NzCardModule, NzTagModule, NzDividerModule],
  templateUrl: './applicant-profile.component.html',
  styleUrl: './applicant-profile.component.css'
})
export class ApplicantProfileComponent {

  applicantService = inject(ApplicantService);
  private route = inject(ActivatedRoute);
  
  fullName ="d" ;

constructor() {
    this.fullName = this.route.snapshot.paramMap.get('fullName')!;
    this.applicantService.getApplicantByName(this.fullName);

  }

  
  applicant = this.applicantService.applicantCourant;
getStatusColor(status: string): string {
   switch (status) {
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
  }

}
