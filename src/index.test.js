beforeEach(() => {
  // set up the dom so the test has something to access
  document.body.innerHTML = `
    <p data-testid="js-test" id='js-test'></p>
  `;
});

test("This test file is run properly", () => {
  expect(true).toBeTruthy();
});

test("it should output to the console 3 times", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  require("./index.js");

  expect(consoleSpy).toHaveBeenCalledTimes(3);
});
