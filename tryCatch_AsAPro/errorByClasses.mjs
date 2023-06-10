export class ConnectionError extends Error {
    constructor (message) {
        super(message)
        this.name = 'ConnectionError'
        this.stack = ''
    }
}


export class ValidationError extends Error {
    constructor (message) {
        super(message)
        this.name = 'ValidationError'
    }
}