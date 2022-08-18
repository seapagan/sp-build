// import the main CSS. This needs to be first, though you can replace with
// your own filenames if required.
import "./styles/site.css";
/* -------------------------------------------------------------------------- */
/*                remove everything below for your own projects               */
/* -------------------------------------------------------------------------- */
import styles from "./styles/styles.module.scss";

// prove that our JS file is loaded
const msg =
  "If both these boxes have white text and blue background, then the " +
  "JavaScript, CSS/SCSS and CSS modules are working properly.";
document.getElementById("js-test").innerText = msg;
document.getElementById("js-test").classList.add(`${styles.moduleTest}`);

// Testing that the .env file is read
console.log(process.env.MY_TEST_VARIABLE);
console.log(process.env.EXPANDED_VARIABLE);
console.log(process.env.MY_OTHER_TEST);
