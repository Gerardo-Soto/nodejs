import {ConnectionError, ValidationError} from './errorByClasses.mjs';

export const validateUser = ({name, age, mail} = {}) => {
    if (!name) throw new ValidationError('name is required')
    if (!age) throw new ValidationError('age is required')
    if (!mail) throw new ValidationError('mail is required')
    
    // login
    try {
        mongodb.connect()
    } catch (error) {
        // enviar traza original a un servidor NUESTRO, NO al usuario
        // sendBeaconError(error)
        throw new ConnectionError('database is not available') 
    }
}