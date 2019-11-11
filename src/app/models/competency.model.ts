export class Competency {
    id: string;
    name: string;
    value: string;
    confirmed: boolean;
    jobsId?: string[];
    usersId?: string[];

    constructor(
        value: string, 
        name: string,
        confirmed: boolean = false,
        id?: string, 
        jobsId?: string[], 
        usersId?: string[] 
    ) {
       this.id = id;
       this.name = name;
       this.confirmed = confirmed;
       this.value = value;
       this.jobsId = jobsId;
       this.usersId = usersId; 
    }
}