//1. 

function getCourse() {

    return 'INT201 Client Side Programming I';}
    //let getCourse = () => 'INT201 Client Side Programming I';
  
  //2. 
  
  function echo(text) {
  
    return text;}
    //let echo = text => text;
  
  //3. 
  
  function isKMUTTStudent(student) {
  
    if (student.id.length == 13) return true;
  
    else return false;}
    //let isKMUTTStudent = student => student.id.length == 13;
  
  //4. 
  
  function sum(num1, num2, num3) {
  
    return num1 + num2 + num3;}
    // let sum = (num1, num2, num3) => num1 + num2 + num3;
  
  //5. 
  
  function greetingSomeOne(name) {
  
    const greeting = ['hi', 'hello', 'hey'];
  
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
  
  }
  //let greetingSomeOne = name => {

  //  const greeting = ['hi', 'hello', 'hey'];

  // return `${greeting[Math.floor(Math.random(3))]}, ${name}`;

//}