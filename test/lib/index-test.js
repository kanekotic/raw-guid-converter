jest.mock('../../lib/raw-to-guid', () => jest.fn())
jest.mock('../../lib/guid-to-raw', () => jest.fn())

const index = require('../../lib/index'),
    convertRaw = require('../../lib/raw-to-guid'),
    convertGuid = require('../../lib/guid-to-raw')

    
describe('index should export functions', () => {
    it('calls raw to guid in rawConvert', () => {
        expect(index.convertRaw).toEqual(convertRaw)
    })
    it('calls guid to raw in guidConvert', () => {
        expect(index.convertGuid).toEqual(convertGuid)
    })
})