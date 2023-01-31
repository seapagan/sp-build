import styles from "../styles/styles.module.scss";

export const changeText = () => {
  const msg =
    "If both these boxes have white text and blue background, then the " +
    "JavaScript, CSS/SCSS and CSS modules are working properly.";
  document.getElementById("js-test").innerText = msg;
  document.getElementById("js-test").classList.add(`${styles.moduleTest}`);
};

export const logEnv = () => {
  console.log(process.env.MY_TEST_VARIABLE);
  console.log(process.env.EXPANDED_VARIABLE);
  console.log(process.env.MY_OTHER_TEST);
};
