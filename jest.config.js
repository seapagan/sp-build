module.exports = {
  moduleFileExtensions: ["tsx", "ts", "js", "jsx"],
  // moduleDirectories:[],
  moduleNameMapper: {
    // eslint-disable-next-line
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    // "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(sa|sc|c)ss$": "identity-obj-proxy",
  },
};
