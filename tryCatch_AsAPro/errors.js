// Before (junior):
// throw new Error('ConnectionError')
// throw new Error('ValidationError')

// Pro:
// throw new ConnectionError()
// throw new ValidationError()

const createErrorFactory = function(name) {
    class CustomizedError extends Error {
        constructor (message) {
            super(message)
            this.name = name
        }
    }
}

export const ConnectionError = createErrorFactory('ConnectionError')

export const ValidationError = createErrorFactory('ValidationError')