var firstButton;
var bg;
var dashboardImage, breakImage, reminderImage, syllabusImage, toDoImage
var bgSprite

function preload(){
  dashboardImage = loadImage("pictures/dashboard.png");
  breakImage = loadImage("pictures/breakGames.png")
  reminderImage = loadImage("pictures/reminders.png")
  syllabusImage = loadImage("pictures/syllabus.png")
  toDoImage = loadImage("pictures/toDoList.png")

}
function setup() {
  createCanvas(400,800);
  //rectMode(CENTER);
  bgSprite = createSprite(200, 400, 400, 800);
  firstButton = new Button();
}

function draw() {
  bgSprite.addImage(dashboardImage);
  background();  
  drawSprites();
  firstButton.display();
}

/*
STRUCTURE OF THE GAME
We will be needing:
- Main Menus:
  =Dashboard - everything for that day
  =To-Do List - Homework + Auto-generated task list
  =Syllabus - all subjects and their individual syllabus + their exam dates
  =Caclulator Page - percentage, 
  =Break Games - games that i will make 
  =Reminders - remind you to complete reminders
- An Animation Guide - guide through the app - cartoon
- Need a database to store the data collected
- Notifications ( reminders for compltetion and submission, etc)
- Search bar - search anything in the app

HLD - high level document - how the flow will go form one point to another.
Knowledge Base - additional things brilliant students can do ( other than school activites - can learn something on the app itslef
  like programing or maths tricks etc)
Make all the background and buttons
Login and Registeration Pages
Flow from on menu to another 
*/