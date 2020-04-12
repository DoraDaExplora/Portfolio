import { JobInterface } from './job.interface';

export interface JobItemInterface {
  key: keyof JobInterface;
  value: boolean;
}
