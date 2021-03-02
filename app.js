function mySearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mySearch");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }




//   login section........................




var auth = firebase.auth()

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .catch(e => alert(e.message))
    alert("signed Up")
}


function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)

        .catch(e => alert(e))
    alert("signed In"+":" +email.value)
}


function signOut(){
    auth.signOut();
    alert("signed Out")
}


// take user to another page when he/she sign in,out or up

auth.onAuthStateChanged(function(user){
    if(user){
    //is signed in
        var user = user.email;
        alert("Active user"+":" +email.value)
    }
    else{
        alert("you are signed out")

    }

})


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;

      var user = user.email;
            //   alert("Active user"+":" + email.value)
      // ...
    } else {
      // User is signed out
      alert("please sign in to proceed")
    }
  })



   // Submit the form
   function reset() {
    document.getElementById("reset").reset();
  }
  