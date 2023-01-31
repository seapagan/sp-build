// import the main CSS. This needs to be first, though you can replace with
// your own filenames if required.
/* -------------------------------------------------------------------------- */
/*                remove everything below for your own projects               */
/* -------------------------------------------------------------------------- */
import { changeText, logEnv } from "./modules/checkFunctionality";

import "./styles/site.css";

// prove that our JS file is loaded
changeText();

// Testing that the .env file is read
logEnv();
