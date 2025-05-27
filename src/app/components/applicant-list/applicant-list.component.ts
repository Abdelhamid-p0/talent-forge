import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ApplicantCardComponent } from '../applicant-card/applicant-card.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  imports: [CommonModule , ApplicantCardComponent , NzSwitchModule , FormsModule, NzSelectModule],
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
})
export class ApplicantListComponent {
  applicantService = inject(ApplicantService);
  switchValue = signal(false);

constructor() {
    this.applicantService.getAllApplicants();
}


  readonly listOfOption: string[] = alphabet();
  listOfSelectedValue = ['a10', 'c12'];

  applicants = this.applicantService.applicants;

  
  
}

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;

  
}
