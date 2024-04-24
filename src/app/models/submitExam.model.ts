export interface SubmitExam {
    dates : Array<string>;
    subjects : Array<string>;
    marks : Array<number>;
    sem : number;
    department : string;
    studentId : number;
}