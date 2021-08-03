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

const student = [
{
    id: 1,
    studentName: "Carl Wheezer",
    houseId: 1,
    expelled: false,
    
},
];

const randomHouse = house[Math.floor(math.random() * house.length)];

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const cards = () => {
    const domString = `
    <div class="headerCard" style="width: 80rem;">
        <div class="card-body">
            <h5 class="card-title">Welcome to Harry P world</h5>
        <p class="card-text">Never read Harry P I hope this house organizer finds you well.</p>
    <a href="#" class="btn btn-primary">Sort Me!</a>
  </div>
</div>
    `;

    renderToDom("#headerCard", domString);
};

const houseForm = () => {
    domString = `
    <div class="mb-3">
        <label for="formHeader" class="form-label">Enter First Year's Name</label>
            <input type="text" class="form-control" id="studentName" placeholder="Student Name">
        <button type="button" class="btn btn-primary">Submit</button>
    </div>
    `
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
        studentName: document.querySelector("#studentName").value,
        houseId: randomHouse(),
      };
      student.push(newStudent);
      studentBuilder(student);
      
};

const expelStudent = (event) => {
    
    const targetId = event.target.id;
    const targetType = event.target.type;

    if(targetType === "button"){
      student.splice(targetId, 1);
      studentBuilder(student);
    };
};








const init = () => {
    cards();
};

init();