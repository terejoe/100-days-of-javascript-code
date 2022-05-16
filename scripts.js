class Book {
  constructor(name, course, author, img) {
    this.name = name;
    this.course = course;
    this.author = author;
    this.img = img;
  }
}

let formControls = document.querySelectorAll(".form-control");
let submitBtn = document.querySelector(".btn");


// submitBtn.disabled = false;

formControls.forEach(formControl => {
  formControl.addEventListener("blur", () => {
    if(formControl.value === ""){
      formControl.classList.add("fail");
      formControl.classList.remove("complete");
    }else{
      formControl.classList.add("complete");
      formControl.classList.remove("fail");
    }
    validate()
  });
}); 

function validate(){
  
  if ((formControls[0].classList.contains("complete")) && (formControls[1].classList.contains("complete")) && (formControls[2].classList.contains("complete"))) {
    submitBtn.disabled = false;
  }else{
    submitBtn.disabled= true;
  }
}

//Adding the values of the input into the course form with an image
function imgReload(){
  let num = Math.floor(Math.random() * 6);
  let img = `img/cust-${num}.jpg`;
  return img;
}

function clearFields() {
  formControls[0].value = "";
  formControls[1].value = "";
  formControls[2].value = "";
}


let load = document.querySelector(".loading");
let feedback = document.querySelector(".feedback");
submitBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  load.style.display = "block";
  feedback.style.display = "block";

  setTimeout(() => {
    load.style.display = "none";
    feedback.style.display = "none";

    runTemplate(book);

    clearFields();

  }, 2000);

  let nameInput = formControls[0].value;
  let courseInput = formControls[1].value;
  let authorInput = formControls[2].value;
  imgInput = imgReload();

  const book = new Book(nameInput, courseInput, authorInput, imgInput);
  
})

function runTemplate(book) {

  let newElement = document.createElement("div");
  newElement.classList.add("col-11", "mx-auto", "col-md-6", "col-lg-4", "my-3");
  newElement.innerHTML = `<div class="card text-left">
                  <img src="${book.img}" class="card-img-top" alt="">
                  <div class="card-body">
                    <!-- customer name -->
                    <h6 class="text-capitalize "><span class="badge bg-warning mr-2">name :</span><span id="customer-name">
                        ${book.name}</span></h6>
                    <!-- end of customer name -->
                    <!-- customer name -->
                    <h6 class="text-capitalize my-3"><span class="badge bg-success mr-2">course :</span><span
                        id="customer-course">
                        ${book.course}
                      </span></h6>
                    <!-- end of customer name -->
                    <!-- customer name -->
                    <h6 class="text-capitalize"><span class="badge bg-danger mr-2">author :</span><span id="course-author">
                        ${book.author}</span></h6>
                    <!-- end of customer name -->
                  </div>
                </div>
                <!-- single customer -->
                `
  document.querySelector(".customer-list").appendChild(newElement);
}