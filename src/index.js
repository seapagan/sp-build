// import the main CSS. This needs to be here
import "./styles/site.css";

/* -------------------------------------------------------------------------- */
/*                remove everything below for your own projects               */
/* -------------------------------------------------------------------------- */

// prove that our JS file is loaded
const msg =
  "If you can read this, and the text below is in a blue box then" +
  " the JavaScript and CSS are imported properly.";
document.getElementById("js-test").innerText = msg;
document.querySelector(".no-js").style.display = "none";

// Testing that the .env file is read
console.log(process.env.TEST_ENV_STRING);
console.log(process.env.TEST_ENV_VAR);
