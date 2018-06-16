const convert = require('../../lib/guid-to-raw')
    
describe('raw to guid conversion', () => {

    [
        ["4630880E6D0B3640AB446C6FB3C44FE3","0E883046-0B6D-4036-AB44-6C6FB3C44FE3".toLowerCase()],
        ["6C6F59B2D4C5144AB7786A304CCB597F","B2596F6C-C5D4-4A14-B778-6A304CCB597F".toLowerCase()]
    ].forEach(guid => {
        it(`should convert lower case ${guid[1]} string into ${guid[0]} raw lower case formated guid`, () => {
            expect(convert(guid[1])).toEqual(guid[0])
        })
        
    });

    [
        ["4630880E6D0B3640AB446C6FB3C44FE3","0E883046-0B6D-4036-AB44-6C6FB3C44FE3"],
        ["6C6F59B2D4C5144AB7786A304CCB597F","B2596F6C-C5D4-4A14-B778-6A304CCB597F"]
    ].forEach(guid => {
        it(`should convert upper case ${guid[1]} string into ${guid[0]} raw formated guid`, () => {
            expect(convert(guid[1])).toEqual(guid[0])
        })
        
    });

    [
        "aaa",
        "111",
        "0E883046-0B6D-4036-AB44-6C6FB3C44FE",
        "6C6F59B2D4C5144AB7786A304CCB597F1234",
        "6C6F59B2D4C5144AB7786A304CCB597F"
    ].forEach(input => {
        it(`${input} is not correct format throws error`, () => {
            let err
            try {
                convert(input)
            } catch (error) {
                err = error
            }
            expect(err).toEqual("wrong format")
        })
    });
    
})