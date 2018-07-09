jest.mock('commander', () => {
    const jestFn = {
            default: this,
            version: jest.fn(() => jestFn),
            command: jest.fn(() => jestFn),
            description: jest.fn(() => jestFn),
            action: jest.fn(action => {
                let input = ["GOOD","BAD"]
                action(input)
                return jestFn
            }),
            parse: jest.fn(() => jestFn)
        }
    return jestFn
})

jest.mock('../../lib/index', () => {
    let impFun = (param) => {
        if(param=="BAD")
            throw "Boon"
        return "OK"
      }
      return {
        convertRaw: jest.fn().mockImplementation(impFun),
        convertString: jest.fn().mockImplementation(impFun)
      }
})

jest.mock('../../package.json', () => {
    const randomNumber = () => Math.floor((Math.random() * 10) + 1)
    return {
        version: `${randomNumber()}.${randomNumber()}.${randomNumber()}`
    }
})

const commander = require('commander'),
    rawToGuid = require('../../bin/raw-to-guid'),
    index = require('../../lib/index')
    packageJson = require('../../package.json')

describe('command line', () => {
    it("is version from package.json", () => {
        throw ""
        expect(commander.version.mock.calls[0][0]).toBe(packageJson.version)
    })

    it("is has command to convert from raw with correct description", () => {
        expect(commander.command.mock.calls[0][0]).toBe("fromRaw [guid...]")
        expect(commander.description.mock.calls[0][0]).toBe("converts raw guid to string format")
        expect(commander.action.mock.calls[0][0]).toBeInstanceOf(Function)
        expect(index.convertRaw.mock.calls[0][0]).toEqual("GOOD")
    })

    it("is has command to convert from string with correct description", () => {
        expect(commander.command.mock.calls[1][0]).toBe("fromString [guid...]")
        expect(commander.description.mock.calls[1][0]).toBe("converts string guid to raw format")
        expect(commander.action.mock.calls[1][0]).toBeInstanceOf(Function)
        expect(index.convertString.mock.calls[0][0]).toEqual("GOOD")
    })
})