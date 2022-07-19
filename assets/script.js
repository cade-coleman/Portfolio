const aboutMeEl = $('#aboutMe');
const pg1 = document.querySelector('#page-1');
const pg2 = document.querySelector('#page-2');




// From w3school

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function pullBio(){
// console.log('it works');
// pg1.classList.add('hidden');
// pg2.classList.remove('hidden');
// }



// aboutMeEl.on('click', pullBio);