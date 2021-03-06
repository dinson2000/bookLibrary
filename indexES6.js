class Book{
    constructor(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
    }
}

  class Display{
    add(book){
        console.log("ADDING BOOK");
       let tableBody = document.getElementById("tableBody");
    //    localStorage.setItem as
        let uiString = `
          <tr>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.type}</td>
          </tr>`;
        tableBody.innerHTML += uiString;
        // console.log(uiString);
      };
      // Implementing the clear function
      clear() {
        let libraryForm = document.getElementById("libraryForm");
      
        libraryForm.reset();
      };
      // Implementiong the validate function
      validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
          return false;
        } else {
          return true;
        }
      };
      show(type,displayMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `
          <div class="alert alert-${type} alert-dismissible fade show" role="alert">
          <strong>${type.toUpperCase()}:</strong> ${displayMessage}.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
          setTimeout(() => {
              message.innerHTML="";
          }, 5000);
      };
  }
  // Add submit event listener to libraryForm
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.addEventListener("submit", libraryFormSubmit);
  
  function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
  
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    let type;
    if (fiction.checked) {
      type = fiction.value;
    } else if (programming.checked) {
      type = programming.value;
    } else if (cooking.checked) {
      type = cooking.value;
    }
  
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
      display.add(book);
      display.clear();
      display.show("success","YOUR BOOK HAS BEEN SUCCESSFULLY ADDED");
    } else {
      // Else show error
      display.show("danger","ERROR IN ADDING BOOK PLEASE CHECK AGAIN");
    }
    // localStorage.clear();
    // localStorage.setItem("name","dinesh");
    // let a=localStorage.getItem("name");
    // console.log(a);
  }