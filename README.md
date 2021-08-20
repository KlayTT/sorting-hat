# Welcome to Sorting Hat

The Site - https://ecstatic-thompson-aa4212.netlify.app/

Clone this Repo !

$ git clone git@github.com:KlayTT/sorting-hat.git
$ cd sorting-hat

The User :
- The users would be for harry poter fans who would like to spice their lives up with a personal sorting hats application.
- User can enter any name they choose and it will automatically randomimze a house for them.
-users can also expel the student to Voldemort's army if they so desire.

The Features :

- Student Builder : Entering a name will generate a card, a house name at random, a user id, and a user enetered name.
- Expel : The expel button allows the user to transfer their card when selected. This will in turn send the users card they selected to the Voldermart's army.

Loom Video - https://www.loom.com/share/32cf2cbe71454b07aba5cd1284f8af50

Links : 
Figma - https://www.figma.com/proto/jOnpwu7OEpbSSYwSqTNkFB/Untitled?node-id=0%3A1
Project Board - https://github.com/KlayTT/sorting-hat/projects/1

Code Snippets :

const expelStudent = (event) => {
    
  const targetId = event.target.id;
  const targetType = event.target.type;

  if(targetType === "button"){
    vmArmy.push(student.splice(targetId, 1)[0]);
    expelBuilder(vmArmy);
    studentBuilder(student);
  };
      
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  if (document.querySelector("#studentName").value == "") {
      document.getElementById('errors').innerHTML="*Please enter a username*";
  } else {
    const { hName } =  sortedHouses();
    const newStudent = {
        name: document.querySelector("#studentName").value,
        house: hName,
      };
      student.push(newStudent);
      studentBuilder(student);
  };

};


ScreenShits : 

https://prnt.sc/1qcu3zs

Contributors :
Klay Thacker 
Github :
https://github.com/KlayTT