import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Applicant } from '../../models/applicants';
import { ApplicantService } from '../../services/applicant.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h1>Dashboard Candidats</h1>
      
      <div class="stats">
        <div class="card">
          <h3>{{ statusCount().new }}</h3>
          <p>new</p>
        </div>
        <div class="card">
          <h3>{{ statusCount().interviewed }}</h3>
          <p>interviewed</p>
        </div>
        <div class="card">
          <h3>{{ statusCount().hired }}</h3>
          <p>hired</p>
        </div>
        <div class="card">
          <h3>{{ statusCount().rejected }}</h3>
          <p>rejected</p>
        </div>
      </div>

      <div class="top-applicants">
        <h2>Plus d'entretiens</h2>
        <div *ngFor="let candidate of topInterviewed()" class="candidate">
          <span>{{ candidate.fullName }}</span>
          <span>{{ candidate.interviewsDone }} entretiens</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin: 20px 0;
    }
    
    .card {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      text-align: center;
    }
    
    .card h3 {
      margin: 0;
      font-size: 2em;
      color: #333;
    }
    
    .candidate {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #eee;
    }
  `]
})
export class RecruiterDashboardComponent {

  applicantService = inject(ApplicantService);
  constructor(){
     this.applicantService.getAllApplicants()
  }

  applicants =  this.applicantService.applicants;

  statusCount = computed(() => {
    const list = this.applicants();
    return {
      new: list.filter(c => c.status === 'new').length,
      interviewed: list.filter(c => c.status === 'interviewed').length,
      hired: list.filter(c => c.status === 'hired').length,
      rejected: list.filter(c => c.status === 'rejected').length
    };
  });

  topInterviewed = computed(() => 
    this.applicants()
      .sort((a, b) => parseInt(b.interviewsDone) - parseInt(a.interviewsDone))
      .slice(0, 3)
  );
}