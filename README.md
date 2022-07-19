General information:
It’s a small piece of the system to add exams for the students. You’ll need to create a page to display added questions of the exam on the page and page to add two types of the question: matching and multichoice.

Figma:
Link - https://www.figma.com/file/dscInKqA6cWhvnkshsv2Ea/Growth-Insight-(Copy)?node-id=853%3A47235

Main points:
Use React (TypeScript) with Redux toolkit.
Connect to the sockets with Socket.io library with the url: wss://front-test-sockets.herokuapp.com
To instantly get data, emit the event “get data”.
Listen to the “data” event, to receive updated information.
List of the schools will be from the socket message.
“Delete exam”, “Save exam” and “Assign to class” buttons can be just placeholders.
This data must be from the socket message.

All the data for the questions must be saved to the Redux and displayed from the Redux.
You can use any other libraries on the front-end if you want.
Remember to save/display images from/for the questions/answers.
