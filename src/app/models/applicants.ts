export interface Applicant {
  id: number;
  fullName: string;
  skills: string[];
  status: 'new' | 'interviewed' | 'hired' | 'rejected'; 
  interviewsDone: string; 
}
