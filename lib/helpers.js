const parse = (pattern, raw) => {
    if(!pattern.test(raw))
        throw "wrong format"
    pattern.test(raw)
    return pattern.exec(raw).slice(1,6)
}

module.exports = { parse }