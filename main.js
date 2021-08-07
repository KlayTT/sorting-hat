const house = [
{
    id: 1,
    hName: "The Big house",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6D43eFqJfmxm_hYmBA4lmv5hlVDcJUioUA&usqp=CAU",

},
{
    id: 2,
    hName: "The Smol house",
    img: "https://i.pinimg.com/originals/c7/ce/d5/c7ced5c1092dff4b2aa3ac89b6974ac2.jpg",

},
{
    id: 3,
    hName: "The Wand house",
    img: "https://4.bp.blogspot.com/-FfxqfrKt9UA/V_ENUpNkHuI/AAAAAAABCrE/a16s6N7zEBIsWl8-QAw5oQk9AMMcYFr2gCEw/s1600/ravenclaw.jpg",

},
{
    id: 4,
    hName: "The Road house",
    img: "https://static.wikia.nocookie.net/harrypotter/images/9/98/Gryffindor.jpg/revision/latest/scale-to-width-down/200?cb=20110503103732",

},
];

const randomHouse = house[Math.floor(Math.random() * house.length)];

const student = [];

const vmArmy = [];

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const cards = () => {
    const domString = `
    <div class="card" style="width:80rem">
        <div class="card-header">
      Welcome to Harry P world
    </div>
    <div class="card-body">
      <p class="card-text">Never read Harry P I hope this house organizer finds you well.</p>
        <button type="button" onclick="houseForm()" class="btn btn-primary">Let's Start Sorting</button>
    <p class="card-text">Enter your name below and begin the wicked house adventure!</p>
  </div>
</div>
    `;

    renderToDom("#headerCard", domString);
};

const houseForm = () => {
    const domString = `
    <div class="mb-3"> 
        <label for="formHeader" onsumbmit="return validation();" class="form-label">Enter First Year's Name</label>
            <input type="text" class="form-control" id="studentName" placeholder="Student Name">
        <button type="button"  id="formButton" class="btn btn-primary">Sort it Up!</button>
      <div id ="errors">
      </div>    
    </div>
    `;

    renderToDom("#houseForm" ,domString);
    const form = document.querySelector("#formButton");
    form.addEventListener("click", handleFormSubmit);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  if (document.querySelector("#studentName").value == "") {
      document.getElementById('errors').innerHTML="*Please enter a username*";
  } else { 
    const newStudent = {
        name: document.querySelector("#studentName").value,
        house: randomHouse.hName,
      };
      student.push(newStudent);
      studentBuilder(student);
  };

};

 const studentBuilder = (array) => {
    let domString = "";
    array.forEach((object, i) => {
        domString += `
        <div class="card" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${object.name}</h5>
            <p class="card-text">${object.house}</p>
              
              <button type="button" id=${i} id="expelButton" class="btn btn-primary">Expel</button>
          </div>
        </div>
        `
      renderToDom("#studentCard", domString);
      const expel = document.querySelector("#expelButton");
      expel.addEventListener("click", expelStudent);
}
)};

const expelStudent = (event) => {
    
  const targetId = event.target.id;
  const targetType = event.target.type;

  if(targetType === "button"){
    vmArmy.push(students.splice(targetId, 1)[0]);
    expelBuilder(vmArmy);
    console.log(vmArmy);
  }; 
};
const expelBuilder = (array) => {
  let domString = "";
  array.forEach((object) => {  
    domString += `
    <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title">${object.name}</h5>
          </div>
    </div>
    `;
    renderToDom("#expelCard", domString);
    
  }
  )};

/* const hadleExpelSubmit = (event) => {
  event.preventDefault();
    
      const form = document.querySelector("#formButton");
      form.addEventListener("click", handleFormSubmit);
}; */

const init = () => {
    cards();
    /* buttonEvents(); */
    /* houseForm(); */
};

init();

/* const handleFormSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
        name: document.querySelector("#studentName").value,
        house: randomHouse.hName,
        expelled: false,
      };
      student.push(newStudent);
      studentBuilder(student);
      
}; */

/* const expelBuilder = (array) => {
  let domString = "";  
    domString += `
    <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title">${object.name}</h5>
        <p class="card-text">${object.house}</p>
          </div>
    </div>
    `;
    renderToDom("#expelCard", domString);
  }; */
  
/* <div class="headerCard" style="width: 80rem;">
        <div class="card-body">
            <h5 class="card-title">Welcome to Harry P world</h5>
        <p class="card-text">Never read Harry P I hope this house organizer finds you well.</p>
    <button type="button" onclick="toggleForm()">Sort Me!</a>
  </div>
</div> */