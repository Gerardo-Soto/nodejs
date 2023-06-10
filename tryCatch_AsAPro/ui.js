import { ValidationError, ConnectionError } from './errorByClasses.mjs'
import { validateUser } from './validations.mjs'


const user = {
    name: 'Gerard',
    age: 28,
    mail: '1'
};

try {
    validateUser(user)
    console.log('user validated');
} catch (error) {
    
    if (error instanceof ConnectionError) {
        console.error(`catch ConnectionError: ${error.name}, ${error.constructor.name}`);
        // retry after a few seconds
        setTimeout(() => {
            validateUser(user)
        }, 2000);
    }

    if (error instanceof ValidationError) {
        console.error(`catch ValidationError: ${error.name}`);
        // showUIModalValidation()
    }
}