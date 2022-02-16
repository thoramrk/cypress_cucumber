//*** Let name it cucumber-html-report.js **
const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "report",  // ** Path of .json file **//
reportPath: "./report/cucuhtml/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "95",
},
device: "Local test machine",
platform: {
name: "Cypress",
version: "Catalina",
},
},

});