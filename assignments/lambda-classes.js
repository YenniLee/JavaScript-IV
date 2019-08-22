// CODE here for your Lambda Classes
//build classes for INSTRUCTORS extends from person, STUDENTS extends from person, and PROJECT MANAGERS extends from instructors 


class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age; 
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instAtts){
        super(instAtts);
        this.specialty = instAtts.specialty;
        this.favLanaguage = instAtts.favLanguage;
        this.catchPhrase = instAtts.catchPhrase;
    }
    demo(subject){
        return `Today we are leaning about ${subject}.`
    }
    grade(student, subject){
        console.log(`${this.name} receives a perfect score on ${subject}!`)
    }
}

class Student extends Person{
    constructor(studentAtts){
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
    }
    listSubjects(){

    }
    PRAssignment(){

    }
    sprintChallenge(){

    }
}

class ProjectManager extends Instructor{
    constructor(tlAtts){
        super(tlAtts);
        this.gradClassName = tlAtts.gradClassName;
        this.favInstructor = tlAtts.favInstructor;
    }
    standup(){

    }
    debugsCode(){

    }
} 