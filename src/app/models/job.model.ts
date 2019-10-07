export class Job {
  id?: string;
  position?: string;
  city?: string;
  country?: string;
  salary?: number;
  stack?: string[];
  type?: string;
  description?: string;
  companyId?: string;
  suggestedToUserId?: string[];
  appliedUserId?: string[];
  interviewUserId?: string[];

  constructor(id: string, position: string, city: string, country: string, salary: number, stack: string[], type: string, description: string, companyId: string, suggestedToUserId: string[], appliedUserId: string[], interviewUserId: string[]) {
    this.id = id;
    this.position = position;
    this.city = city;
    this.country = country;
    this.salary = salary;
    this.stack = stack;
    this.type = type;
    this.description = description;
    this.companyId = companyId;
    this.suggestedToUserId = suggestedToUserId;
    this.appliedUserId = appliedUserId;
    this.interviewUserId = interviewUserId;
  }
}
