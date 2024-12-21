//import the variable 'day' from switchDayStatement.js
//import {day} from './switchDayStatement.js';
let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;
    
    case 4:
        day = 'Thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;
   default:
        day = 'Error! Kindly Check Your Switch Code!';
}

//console.log(day);
let currentDay = day;
/* =====Set If Using Ternary===== */
 // Function to manually passing the current day
const alarms = (alarmnow) => {
   return alarmnow === 'Sunday' ? 'Sunday Alarm: 7AM'
   : alarmnow === 'Monday' ? 'Monday Alarm: 4AM'
   : alarmnow === 'Tuesday' ? 'Tuesday Alarm: 3AM'
   : alarmnow === 'Wednesday' ? 'Wednesday Alarm: 3:30AM'
   : alarmnow === 'Thursday' ? 'Thursday Alarm: 2:30AM'
   : alarmnow === 'Friday' ? 'Friday Alarm: 3AM'
   : alarmnow === 'Saturday' ? 'Saturday Alarm: 5AM': 'test'  
   ;
}
console.log(alarms('Tuesday'));

//auto get the current day
const alarms1 = () => {
   return currentDay === 'Sunday' ? 'Sunday Alarm: 7AM'
   : currentDay === 'Monday' ? 'Monday Alarm: 4AM'
   : currentDay === 'Tuesday' ? 'Tuesday Alarm: 3AM'
   : currentDay === 'Wednesday' ? 'Wednesday Alarm: 3:30AM'
   : currentDay === 'Thursday' ? 'Thursday Alarm: 2:30AM'
   : currentDay === 'Friday' ? 'Friday Alarm: 3AM'
   : currentDay === 'Saturday' ? 'Saturday Alarm: 5AM'
   : 'Date is out of bounds!';
}
//console.log(alarms(currentDay));

/* =====Set If Using Switch Statement ===== */

/* switch(currentDay){
      case 'Sunday':
         console.log(`${currentDay} Alarm: 7AM`);
         break;
      case 'Monday':
         console.log(`${currentDay} Alarm: 4AM`);
         break;
      case 'Tuesday':
         console.log(`${currentDay} Alarm: 3:15AM`);
         break;
      case 'Wednesday':
         console.log(`${currentDay} Alarm: 3:30AM`);
         break;
      case 'Thursday':
         console.log(`${currentDay} Alarm: 2:30AM`);
         break;
      case 'Friday':
         console.log(`${currentDay} Alarm: 3:20AM`);
         break;
      case 'Saturday':
         console.log(`${currentDay} Alarm: 5AM`);
         break;
      default:
         console.log('default');
} */

// Using IF STATEMENT (identify the problem)

/* if (currentDay == 'Sunday'){
   console.log(`${currentDay} Alarm: 7AM`);
   }else if(currentDay == 'Monday'){
   console.log(`${currentDay} Alarm: 4AM`);
      }else if(currentDay == 'Monday'){
      console.log(`${currentDay} Alarm: 4AM`);
      }else if(currentDay == 'Monday'){
         console.log(`${currentDay} Alarm: 4AM`);
      }else if(currentDay == 'Monday'){
             console.log(`${currentDay} Alarm: 4AM`);
      }else if(currentDay == 'Monday'){
         console.log(`${currentDay} Alarm: 4AM`);
      }else if(currentDay == 'Monday'){
   console.log(`${currentDay} Alarm: 4AM`);
   }else{
   console.log('Error Curreny Date');
   } */
   
