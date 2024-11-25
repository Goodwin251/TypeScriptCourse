import { Article } from './BaseContent.js';

export type ValidationResult = {
  isValid: boolean;
  errors?: string[];
};

export type Validator<T> = {
  validate: (data: T) => ValidationResult;
};

export const articleValidator: Validator<Article> = {
  validate: (data: Article) => {
    const errors: string[] = [];
    if (!data.title) errors.push('Title is required.');
    if (!data.body) errors.push('Body is required.');
    return { isValid: errors.length === 0, errors };
  },
};

export const validateContent = <T>(
  validators: Validator<T>[],
  data: T
): ValidationResult => {
  const results = validators.map((validator) => validator.validate(data));
  const errors = results.flatMap((result) => result.errors || []);
  return { isValid: errors.length === 0, errors };
};
