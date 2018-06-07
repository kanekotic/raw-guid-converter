const convert = require('../../lib/index.js').convertRaw

var button = document.getElementById('convert')
button.addEventListener('click', ()=> document.getElementById('stringGuid').value = convert(document.getElementById('rawGuid').value))