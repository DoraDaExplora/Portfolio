import { JobInterface } from './job.interface';

export interface VacancyInterface {
  key: string;
  vacancyTitle: string;
  vacancySkills: {
    experience: boolean;
    management: boolean;
    networking: boolean;
    cableManagement: boolean;
    student: boolean;
    remoteWork: boolean;
    communicative: boolean;
    teamwork: boolean;
    learning: boolean;
    dedicated: boolean;
    stressResistance: boolean;
    adaptive: boolean;
  };
}
