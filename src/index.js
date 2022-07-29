// import the main CSS. This needs to be here
import "./styles/site.css";

// prove that our JS file is loaded, remove for your own projects!
const msg = "If you can read this, and the text below is in a blue box then"+
" the JavaScript and CSS are imported properly.";
document.getElementById("js-test").innerText = msg;
document.querySelector(".no-js").style.display = "none";
