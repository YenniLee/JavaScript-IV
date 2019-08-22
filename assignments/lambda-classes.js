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
        return `${student} receives a perfect score on ${subject}!`;
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
        console.log(...this.favSubjects);
    }
    PRAssignment(){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor{
    constructor(tlAtts){
        super(tlAtts);
        this.gradClassName = tlAtts.gradClassName;
        this.favInstructor = tlAtts.favInstructor;
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
} 

const kyle = new Student({
    name: 'Kyle',
    location: 'LA',
    age: 18,
    previousBackground: "beginner",
    className: "WEB22",
    favSubjects: ["HTML", "CSS", "JavaScript"]
  });

  const ashley = new Student({
    name: 'Ashley',
    location: 'Florida',
    age: 24,
    previousBackground: "marketing",
    className: "WEB23",
    favSubjects: ["HTML", "CSS", "Python"]
  });

  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const marie = new Instructor({
    name: 'Marie',
    location: 'Portland, OR',
    age: 28,
    favLanguage: 'Java',
    specialty: 'Full Stack',
    catchPhrase: `Where's the food`
  });

  const max = new ProjectManager({
    name: 'Max',
    location: 'Canada',
    age: 36,
    gradClassName: "WEB17",
    favInstructor: "Ryan"
  });

  const tina = new ProjectManager({
    name: 'Tina',
    location: 'Washington',
    age: 32,
    gradClassName: "WEB16",
    favInstructor: "Josh"
  });


console.log(kyle.listSubjects("lunch"));// HTML CSS JavaScript
console.log(kyle.sprintChallenge("JavaScript Fundamentals"));//Kyle has begun sprint challenge on JavaScript Fundamentals.
console.log(tina.debugsCode("Ada", "class inheritance"));//Tina debugs Ada's code on class inheritance.
console.log(marie.grade("Brit", "Advanced CSS"));//Brit receives a perfect score on Advanced CSS!
console.log(max.standup("Web23"));//Max announces to Web23, @channel standy times!
console.log(marie.speak());//Hello my name is Marie, I am from Portland, OR.
console.log(ashley.speak()); //Hello my name is Ashley, I am from Florida.
console.log(fred.demo("flexbox")); //Today we are leaning about flexbox.


