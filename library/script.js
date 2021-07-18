const ACCORDION = document.getElementById("card-container");
const FORM = document.getElementById("bookForm");
const NEWBTN = document.getElementById("new");
NEWBTN.addEventListener("click", registerBook);
const MODAL = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == MODAL) {
    MODAL.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {    //reload books from localStorage at pageload
    if (localStorage.length !== 0){
        Object.keys(localStorage).forEach(function (key) {
            let loadBook = JSON.parse(localStorage.getItem(key));
            let storeTitle = loadBook.bookTitle;
            let storeFName = loadBook.firstName;
            let storeLName = loadBook.lastName;
            let storeGenre = loadBook.genre; 
            let storeIsbn = loadBook.isbn;
            let storeSummary = loadBook.summary;
            let storeRead = loadBook.read;
            createAccordion(storeTitle, storeFName, storeLName, storeGenre, storeIsbn, storeSummary, storeRead)
        });
    };
});

function registerBook () {                                   //create form after btn click
    let label = {"Book Title":"title", "First Name Author":"fn", 
    "Last Name Author":"ln", "ISBN":"isbn", "Summary":"summary"};

    let genre = ["Fantasy", "Adventure", "Romance", "Contemporary", "Dystopian",
        "Mystery", "Horror", "Thriller", "Paranormal", "Historical Fiction",
        "Science Fiction", "Memoir", "Cooking", "Art", "Self-Help / Personal",
        "Development", "Motivational", "Health", "History", "Travel",
        "Guide / How-to", "Families & Relationships", "Humor", "Children’s"];

    let dropdown = [];

    FORM.innerHTML = "";

    FORM.insertAdjacentHTML("beforeend", `
    <h2>Register New Book</h2>
    <br>
    `);

    Object.keys(label).forEach(function (key) {             //Form input boxes
        FORM.insertAdjacentHTML("beforeend",`
        <div class="mb-3">
            <label class="form-label">${key}</label>
            <input type="text" class="form-control" id="${label[key]}" required/>
        </div>
        `);
    }); 
    
    genre.forEach(function (key) {                          //dropdown list choices
        dropdown.push(`
        <option value="${key}">${key}</option>
    `)});

    FORM.insertAdjacentHTML("beforeend", `                       
    <select id="genre"> 
    <option disabled selected value>Please choose genre</option>        
    ${dropdown}</select>
    `);                                                     //dropdown list default selection

    FORM.insertAdjacentHTML("beforeend", `
        <br>
        <br>
        <input type="checkbox" id="read"/>
        <label>Read</label>
        <br>
    `);                                              //create read checkbox
    
    let saveForm = document.getElementById("save")
    saveForm.addEventListener("submit", () => {userInput;});
};

function userInput() {
    let TITLE = document.getElementById("title").value;
    let FIRSTN = document.getElementById("fn").value;
    let LASTN = document.getElementById("ln").value;
    let GENRE = document.getElementById("genre").value;
    let ISBN = document.getElementById("isbn").value;
    let SUMMARY = document.getElementById("summary").value;
    let READ = document.getElementById("read").checked;
    READ === true ? READ = "Yes" : READ = "No";
    new Book(TITLE, FIRSTN, LASTN, GENRE, ISBN, SUMMARY, READ);
    MODAL.setAttribute = ("display", "none");
    MODAL.innerHTML = "";
};

function Book(title, firstName, lastName, genre, isbn, summary, read) {
    this.bookTitle = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.genre = genre;
    this.isbn = isbn;
    this.summary = summary;
    this.read = read;
    localStorage.setItem(title, JSON.stringify(this));
    createAccordion(this.bookTitle, this.firstName, this.lastName, this.genre, this.isbn, this.summary, this.read)
};

function createAccordion (cTitle, cFirstN, cLastN, cGenre, cIsbn, cSummary, cRead) {
  ACCORDION.insertAdjacentHTML("afterbegin", `
    <div class="cardItem" style="background-color: pink; border-radius: 5px; box-shadow: 5px 10px 18px grey;">
      <div class="card-content">
        <div class="card-body">
          <p style="font-size: 2rem; color: #FFFFFF; font-weight: 700; text-align: center">  ${cTitle}</p>
          <p> Author: ${cFirstN} ${cLastN}</p>
          <p> Genre: ${cGenre}</p>
          <p> ISBN: ${cIsbn}</p>
          <p style = "overflow-wrap: break-word;"> Summary: ${cSummary}</p>
          <p> Read: ${cRead}</p>
        </div>
      </div>
    </div>
  `  
  )};