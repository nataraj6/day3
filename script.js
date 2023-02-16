
var json = [{
    "id" : "raj1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "day1",
    "mail": "natraj@gmail.com"
},
{
    "id" : "raj2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "day2",
    "mail": "nataraj2@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);



//create my own resume



let myResume={
    "basics": {
      "name": "natraj S",
      "email": "josephnataraj1996@gamil.com",
      "phone": 9524140227,
      "degree": "B.E",
      "location": {
        "address": "28/82,keerai kollai street,woraiyur,trichy",
        "postalCode": 620003,
        "city": "trichy",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/nataraj-selvaraj-932236180/",
          "github":"https://github.com/nataraj6"
        }
      ]
    },
    "work": [
      {
        "company": "Code bind technologies",
        "position": "Developer",
        "startDate": "2019-08-01",
        "endDate": "2023-02-16",
        "summary": "i am senior developer of this company and also trainer",
      },
    ],
    "education": [
      {
        "institution": "K.ramakrishnan College Of Engineering",
        "department": "EEE",
        "studyType": "fulltime",
        "batch start year": 2016,
        "batch end year": 2019,
        "gpa": 6.25,
      }
    ],
    "skills": [
      {
        "name": "HTML,CSS,PHP",
        "level": "inter",
        "project": [
          "Create in dynamic and static websites "
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "playing football,planting,",
      }
    ]
  }
  console.log(myResume);
  
