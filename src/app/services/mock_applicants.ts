import { Applicant } from "../models/applicants";

export const MOCK_APPLICANTS: Applicant[] = [
  {
    id: 1,
    fullName: 'Lina Meriem',
    skills: ['Angular', 'TypeScript'],
    status: 'new',
    interviewsDone: '1',
  },
  {
    id: 2,
    fullName: 'Youssef Amine',
    skills: ['React', 'Node.js'],
    status: 'interviewed',
    interviewsDone: '2',
  },
  {
    id: 3,
    fullName: 'Sofia Zahra',
    skills: ['Vue', 'HTML', 'CSS'],
    status: 'hired',
    interviewsDone: '3',
  },
  {
    id: 4,
    fullName: 'Ali Karim',
    skills: ['Angular', 'NestJS'],
    status: 'rejected',
    interviewsDone: '1',
  },
  {
    id: 5,
    fullName: 'Fatima Elhana',
    skills: ['React', 'Angular'],
    status: 'new',
    interviewsDone: '0',
  }
];
