export const articleValidator = {
    validate: (data) => {
        const errors = [];
        if (!data.title)
            errors.push('Title is required.');
        if (!data.body)
            errors.push('Body is required.');
        return { isValid: errors.length === 0, errors };
    },
};
export const validateContent = (validators, data) => {
    const results = validators.map((validator) => validator.validate(data));
    const errors = results.flatMap((result) => result.errors || []);
    return { isValid: errors.length === 0, errors };
};
