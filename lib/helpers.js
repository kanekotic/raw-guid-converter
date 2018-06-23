buffer = require('buffer/').Buffer

const parse = (pattern, raw) => {
    if(!pattern.test(raw))
        throw "wrong format"
    pattern.test(raw)
    return pattern.exec(raw).slice(1,6)
}

const swap = (array) => {
    let arrayLocal = Object.assign([],array)
    arrayLocal[0] = buffer.from(arrayLocal[0],'hex').swap32().toString('hex')
    arrayLocal[1] = buffer.from(arrayLocal[1],'hex').swap16().toString('hex')
    arrayLocal[2] = buffer.from(arrayLocal[2],'hex').swap16().toString('hex')
    return arrayLocal
}

const transform = (pattern, raw) => {
    return swap(parse(pattern, raw))
}

module.exports = { transform }