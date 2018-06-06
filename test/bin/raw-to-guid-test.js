jest.mock('commander', () => {
    const jestFn = {
            default: this,
            version: jest.fn(() => jestFn),
            command: jest.fn(() => jestFn),
            description: jest.fn(() => jestFn),
            action: jest.fn(() => jestFn),
            parse: jest.fn(() => jestFn)
        }
    return jestFn
})
jest.mock('../../package.json', () => {
    const randomNumber = () => Math.floor((Math.random() * 10) + 1)
    return {
        version: `${randomNumber()}.${randomNumber()}.${randomNumber()}`
    }
})

const commander = require('commander'),
    rawToGuid = require('../../bin/raw-to-guid'),
    packageJson = require('../../package.json')

describe('some', () => {
    it("is version from package.json", () => {
        expect(commander.version.mock.calls[0][0]).toBe(packageJson.version)
    })

    it("is has command with correct description", () => {
        expect(commander.command.mock.calls[0][0]).toBe("fromRaw <rawGuid>")
        expect(commander.description.mock.calls[0][0]).toBe("converts raw guid to string format")
        expect(commander.action.mock.calls[0][0]).toBeInstanceOf(Function)
    })
})