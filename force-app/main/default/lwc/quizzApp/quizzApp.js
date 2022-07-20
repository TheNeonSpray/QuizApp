import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {

    selected = {} //Here we're going to store the answers 
    correctAnswers = 0; //to show the correct number of answers
    isSubmitted = false; //this property is use to show the result

    // All the questions
    myQuestions = [
        {
            id:1,
            question: "Which of the following is not a template loop?",
            options:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            answer:"c"
        },
        {
            id:2,
            question: "Select the invalid file extension in LWC folder",
            options:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            answer:"b"
        },
        {
            id:3,
            question: "Which one of the following is not directive?",
            options:{
                a:"@track",
                b:"for:each",
                c:"if:true"
            },
            answer:"a"
        }
    ]
    // checks if all the questions have selected options
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    // change the color of the toast depending of the number of correct answers
    get isScoredFull(){
        return `slds-notify slds-notify_toast ${this.myQuestions.length === this.correctAnswers? 'slds-theme_success':'slds-theme_error'}`
    }
    // capture the selected value
    changeHandler(event){
        const {name,value} = event.target; //obj destructuring
        this.selected={...this.selected, [name]:value} //spread operator (what already is in there plus the new selected value)
    }
    // form submit handler
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id]=== item.answer);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }
    // start over the form
    resetHandler(){
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }

}