// Ferramentas
// node, npm, nvm

function main() {
    console.log('main is running...')
    // Dynamic types

    const text = 'text'
    const integerNumber = 10
    const decimalNumber = 10.3
    const arr = []
    const dictionary = {}

    console.log(typeof (text))
    console.log(typeof (integerNumber))
    console.log(typeof (decimalNumber))
    console.log(typeof (arr))
    console.log(typeof (dictionary))

    console.log(Object.getPrototypeOf(arr).constructor.name)
    console.log(Object.getPrototypeOf(dictionary).constructor.name)

    console.log(arr instanceof Array)

    // using a builder function
    loggerBuilder('[funny logs]')('business message...')
    const logger = new Logger('[funny logs]')
    logger.log('business message...')
    logger.prefix = '[funny logs]'
    logger.log('business message...')
    console.log(logger.prefix);
}

function loggerBuilder(prefix) {
    return (txt) => console.log(`${prefix}[customized functional logging]: ${txt}`);
}

class Logger {
    constructor(prefix) {
        this._prefix = prefix;
    }

    log(message) {
        console.log(this._prefix + "[customized oo logging]: " + message);
    }

    get prefix() {
        return this._prefix
    }

    set prefix(newPrefix) {
        if (newPrefix === this._prefix) {
            console.log('useless setter invocation, skipping...')
            return;
        }

        this._prefix = newPrefix
    }
}

main()
