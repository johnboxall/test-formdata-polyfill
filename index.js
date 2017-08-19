const FormDataPolyFill = require('formdata-polyfill')

console.log(`Native FormData:`, Array.from(new FormData(document.forms[0])))
console.log(`Polyfilled FormData:`, Array.from(new FormDataPolyFill(document.forms[0])))