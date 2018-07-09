const coffee = require('coffee'),
    executable = require.resolve('../../bin/raw-to-guid')
    
describe('cli', () => {

    [
        ["4630880E6D0B3640AB446C6FB3C44FE3","0E883046-0B6D-4036-AB44-6C6FB3C44FE3\n".toLowerCase()],
        ["6C6F59B2D4C5144AB7786A304CCB597F","B2596F6C-C5D4-4A14-B778-6A304CCB597F\n".toLowerCase()],
    ].forEach(guid => {
        it(`should convert ${guid[1]} string into ${guid[0]}`, done => {
            console.log(executable)
            coffee.fork(executable, ['fromRaw', guid[0]])
                .expect('stdout', guid[1])
                .expect('code', 0)
                .end(done)
        })
        
    });

    [
        [["6C6F59B2D4C5144AB7786A304CCB597F","4630880E6D0B3640AB446C6FB3C44FE3"],"B2596F6C-C5D4-4A14-B778-6A304CCB597F\n0E883046-0B6D-4036-AB44-6C6FB3C44FE3\n".toLowerCase()],
    ].forEach(guid => {
        it(`should convert miltiple ${guid[0][0]} ${guid[0][1]} string into ${guid[0][0]} ${guid[0][1]}`, done => {

            coffee.fork(executable, ['fromRaw', guid[0][0], guid[0][1]])
                .expect('stdout', guid[1])
                .expect('code', 0)
                .end(done)
        })
        
    });

    [
        ["4630880E6D0B3640AB446C6FB3C44FE3\n","0E883046-0B6D-4036-AB44-6C6FB3C44FE3".toLowerCase()],
        ["6C6F59B2D4C5144AB7786A304CCB597F\n","B2596F6C-C5D4-4A14-B778-6A304CCB597F".toLowerCase()]
    ].forEach(guid => {
        it(`should convert ${guid[1]} string into ${guid[0]}`,  (done) => {
            coffee.fork(executable, ['fromString', guid[1]])
                .expect('stdout', guid[0])
                .expect('code', 0)
                .end(done)
        })
        
    });

    [
        ["4630880E6D0B3640AB446C6FB3C44FE3\n6C6F59B2D4C5144AB7786A304CCB597F\n",["0E883046-0B6D-4036-AB44-6C6FB3C44FE3".toLowerCase(),"B2596F6C-C5D4-4A14-B778-6A304CCB597F".toLowerCase()]],
    ].forEach(guid => {
        it(`should convert miltiple ${guid[1][0]} ${guid[1][1]} string into ${guid[0]}`,  (done) => {
            coffee.fork(executable, ['fromString', guid[1][0], guid[1][1]])
                .expect('stdout', guid[0])
                .expect('code', 0)
                .end(done)
        })
        
    });

})