jest.mock('../../lib/raw-to-guid', () => jest.fn())

const index = require('../../lib/index'),
    convertRaw = require('../../lib/raw-to-guid')

    
describe('index should export functions', () => {
    it('calls raw to guid in rawConver', () => {
        expect(index.convertRaw).toEqual(convertRaw)
    })
})