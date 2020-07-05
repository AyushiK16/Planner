class Button {

    constructor() {
      this.dashboardButton = createButton('Dashboard');
      this.reminderButton = createButton('Reminders');
      this.syllabusButton = createButton('Syllabus');
      this.toDoButton = createButton('To-Do List');
      this.breakGames = createButton('Break Games');
      this.title = createElement('h2');
    }
  
    display(){
      this.title.html("Student Planner 1.0");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.dashboardButton.position(76, 500);
      this.reminderButton.position(152, 500);
      this.syllabusButton.position(228, 500);
      this.toDoButton.position(304, 500);
      this.breakGames.position(380, 500);
  
  
      this.dashboardButton.mousePressed(()=>{
        //background(dashboardImage);
        bgSprite.addImage(dashboardImage);
        //"pictures/dashboard.png"
        console.log("dash");
      });

      this.toDoButton.mousePressed(()=>{
        //background(toDoImage);
        bgSprite.addImage(dashboardImage);
        console.log("todo");
      });

      this.syllabusButton.mousePressed(()=>{
        //background(syllabusImage);
        bgSprite.addImage(dashboardImage);
        console.log("sy");
      });

      this.reminderButton.mousePressed(()=>{
        //background(reminderImage);
        bgSprite.addImage(dashboardImage);
        console.log("rem");
      });

      this.breakGames.mousePressed(()=>{
        //background(breakImage);
        bgSprite.addImage(dashboardImage);
        console.log("dash");
      });
  
    }
  
  }
  