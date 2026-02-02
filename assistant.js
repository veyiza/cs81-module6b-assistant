function PersonalAssistant(Niviel) {
  this.name = Niviel ;       
  this.tasks = [];         
  this.mood = "neutral";   
}

PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`${this.name} added a new task: "${task}"`);
};

PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const finished = this.tasks.shift();
    console.log(`${this.name} completed: "${finished}"`);
  } else {
    console.log(`${this.name} has no tasks left!`);
  }
};

PersonalAssistant.prototype.reportMood = function() {
  console.log(`${this.name}'s current mood is: ${this.mood}`);
};

// Simulating 
let myAssistant = new PersonalAssistant("Niviel");

console.log(`Hey, I'm ${myAssistant.name}, your personal assistant for today!`);

// Three tasks
myAssistant.addTask("Finish homework");
myAssistant.addTask("Clean my room");
myAssistant.addTask("Hangout with friends");

myAssistant.mood = "motivated";
myAssistant.reportMood();

myAssistant.completeTask();
myAssistant.completeTask();

myAssistant.mood = "tired";
myAssistant.reportMood();

console.log("Remaining tasks:", myAssistant.tasks.join(", "));
