export interface Fields {
    [field: string]: {
        value: string
        regexp: RegExp
    }
}

type ValidatedFields<Obj> = Record<keyof Obj, boolean>

/**
 * It takes an object of type `Fields` and returns an object of type `validatedFields` where each
 * property is a boolean
 * @param fields - An object with the names of the fields to validate as keys, and an
 * object with the regular expression and the value to validate as values.
 *
 * @returns {ValidatedFields} An object that associates field names with a boolean that determines if the field is valid.
 */
export function validateFields<T extends Fields>(fields: T): ValidatedFields<T> {
    let validatedFields = {} as ValidatedFields<T>

    for (const key in fields) {
        const { regexp, value } = fields[key]
        validatedFields[key] = regexp.test(value)
    }
    return validatedFields
}
