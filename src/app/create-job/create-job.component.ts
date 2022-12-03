import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray }  from '@angular/forms';


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {
 title = 'jobPost';


   jobPostForm = new FormGroup({
    positionTitle: new FormControl(''),
    jobType: new FormControl(''),
    salaryRange:new FormGroup({
      salaryType: new FormControl(''),
      salaryMinimum: new FormControl(''),
      wage: new FormControl(''),
      salaryMaximum: new FormControl(''), 

    }),
    requiredQualification: new FormControl(''),
    description: new FormControl(''),
    closingDate: new FormControl(''),
    jobCity: new FormControl(''),
    howToApply: new FormControl(''),
    email: new FormControl(''),
    website: new FormControl(''),
    customeQuestionList: new FormArray([
      new FormGroup({
        answereType:new FormControl(''),
        question:new FormControl(''),
      })
      
      ]),
  });
  

    // value2='';
    salaryTypeModel: string='';
    howToApplyModel: string='';
    formError: any={};
    areErrors=false;
    questions: any=[{"answereType":"text" , "question":""}];

    formObject=this.jobPostForm.controls;
    customeQuestionList=this.formObject.customeQuestionList;
    salaryRange=this.formObject.salaryRange;

   public validateForm(): void {
     this.buildData();
     return;
    this.formError={};

    this.formError.positionTitle_required=this.formObject.positionTitle.value==""?"* Title is mandatory field":"";
    this.formError.positionTitle_max30=this.formObject.positionTitle.value!.length>30?"* Title should be less than 30 character":"";
    
    this.formError.jobType_required=this.formObject.jobType.value==""?"* Job Type is mandatory field":"";
    this.formError.jobType_max255=this.formObject.jobType.value!.length>30?"* Job Type should be less than 30 character":"";
    
    // this.formError.salaryType_required=this.formObject.salaryType.value==""?"* Salary Type is mandatory field":"";
    // if(this.formObject.salaryType.value=="Hourly"){
      // this.formError.wage_required=this.formObject.wage.value==""?"* Wage is mandatory field":"";  
    // }else{
      // this.formError.salaryMinimum_required=this.formObject.salaryMinimum.value==""?"* Minimum salary is mandatory field":"";  
      // this.formError.salaryMaximum_required=this.formObject.salaryMaximum.value==""?"* Maximum salary is mandatory field":""; 
    // }
    this.formError.requiredQualification_required=this.formObject.requiredQualification.value==""?"* Required Qualificateion salary is mandatory field":""; 
    this.formError.description_max255=this.formObject.description.value!.length>255?"* Description should be less than 255 character":"";
    this.areErrors=false;

    Object.entries(this.formError).forEach(([key, value], index) => {
      // console.log(key, value, index);
        if(value!=""){
          this.areErrors=true;
          return;
        }
    });
    if(this.areErrors==false){
      this.buildData();
    }
  }

  buildData():void{
    this.formError.dummyData="";
    this.formError.dummyData=JSON.stringify(this.jobPostForm.value);
    return;
    for (const field in this.jobPostForm.controls) { // 'field' is a string
        this.formError.dummyData+=field+" : "+this.jobPostForm.get(field)!.value+"<br>";
        if(field=="customeQuestionList"){
          for(const i in this.jobPostForm.get(field)!.value){
              this.formError.dummyData+="  -  -   -   -"+JSON.stringify(this.jobPostForm.get(field)!.value[i])+"<br>";
          }
        }
      }

      
  }

  addNewQuestion():void{
    // this.questions.push({"answereType":"text" , "question":""});
    this.customeQuestionList.push(
      new FormGroup({
        answereType:new FormControl(''),
        question:new FormControl(''),
      })  
    );
  }
  deleteQuestion(i: number):void{
    // this.questions.splice(i,1);
    this.customeQuestionList.removeAt(i);
  }
}
