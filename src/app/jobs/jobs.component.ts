import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

students=[
    {  id: 1,Name: "Atam Jeet Singh"},
    {  id: 2,Name: "Arsh Deep Kaur"},
    {  id: 3,Name: "gagan Deep Singh"}
  ]; 


  jobList = [
    {
      "id": 1,
      "companyId": {
        "id": 23,
        "name": "Pragra"
      },
      "positionTitle": "Java Programmer",
      "jobType": "Full Time",
      "salaryRange": {
        "salaryType": "Annually",
        "salaryMinimum": "75000",
        "salaryMaximum": "80000",
        "wage": "string"
      },
      "closingDate": "2023-01-10",
      "requiredQualification": "Degree in Programming",
      "jobCity": [
        "Brampton"
      ],
      "description": "this will be my description for job upto 255 characters",
      "hoeToApply": [
        "Apply on Email"
      ],
      "email": "careers@pragra.com",
      "website": "string",
      "jobPostStatus": "Active",
      "customeQuestionList": [
        {
          "question": "How many years of java experience you have",
          "answereType": "number"
        }
      ]
    }
    ,
    {
      "id": 1,
      "companyId": {
        "id": 23,
        "name": "Pragra"
      },
      "positionTitle": "Java Programmer",
      "jobType": "Full Time",
      "salaryRange": {
        "salaryType": "Annually",
        "salaryMinimum": "75000",
        "salaryMaximum": "80000",
        "wage": "string"
      },
      "closingDate": "2023-01-10",
      "requiredQualification": "Degree in Programming",
      "jobCity": [
        "Brampton"
      ],
      "description": "this will be my description for job upto 255 characters",
      "hoeToApply": [
        "Apply on Email"
      ],
      "email": "careers@pragra.com",
      "website": "string",
      "jobPostStatus": "Active",
      "customeQuestionList": [
        {
          "question": "How many years of java experience you have",
          "answereType": "number"
        }
      ]
    }
    ,
    {
      "id": 1,
      "companyId": {
        "id": 23,
        "name": "Pragra"
      },
      "positionTitle": "Java Programmer",
      "jobType": "Full Time",
      "salaryRange": {
        "salaryType": "Annually",
        "salaryMinimum": "75000",
        "salaryMaximum": "80000",
        "wage": "string"
      },
      "closingDate": "2023-01-10",
      "requiredQualification": "Degree in Programming",
      "jobCity": [
        "Brampton"
      ],
      "description": "this will be my description for job upto 255 characters",
      "hoeToApply": [
        "Apply on Email"
      ],
      "email": "careers@pragra.com",
      "website": "string",
      "jobPostStatus": "Active",
      "customeQuestionList": [
        {
          "question": "How many years of java experience you have",
          "answereType": "number"
        }
      ]
    }
  ];


}
