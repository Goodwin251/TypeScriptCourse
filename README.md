# Lab 5 - TypeScript CMS Type System

Branch of 5 laboratory work for TypeScript course.

This repository demonstrates a CMS (Content Management System) type system built using TypeScript. Below is a detailed list of all functions and methods split by files with short comments describing their functionality.

[Return to main branch](https://github.com/Goodwin251/TypeScriptCourse/tree/main)

## Created by Solodkyi Yaroslav, student PD-42

___

## **BaseContent.ts**

```typescript
// Interface for base content with common properties like id, createdAt, updatedAt, and status.
export interface BaseContent { ... }
```

```typescript
// Interface for articles extending BaseContent with additional fields like title, body, author, and tags.
export interface Article extends BaseContent { ... }
```

## **Validation.ts**

```typescript
// Type defining the structure of a validation result with isValid flag and errors array.
export type ValidationResult { ... }
```

```typescript
// Generic type for a validator with a validate method for specific content types.
export type Validator<T> { ... }
```

```typescript
// Validator implementation for the Article type to validate fields like title and body.
export const articleValidator: Validator<Article> { ... }
```

```typescript
// Function to validate content using an array of validators and return a consolidated result.
export const validateContent<T>(validators: Validator<T>[], data: T): ValidationResult { ... }
```

## **AccessControl.ts**

```typescript
// Type defining roles (admin, editor, viewer) for access control.
export type Role { ... }
```

```typescript
// Type defining permissions (create, read, update, delete) for specific content statuses.
export type Permission { ... }
```

```typescript
// Generic type defining access control for a BaseContent object with permissions for statuses.
export type AccessControl<T extends BaseContent> { ... }
```

## **Versioning.ts**

```typescript
// Generic type for versioned content, including version number and a reference to the previous version.
export type Versioned<T extends BaseContent> { ... }
```

```typescript
// Function to create a versioned object from a BaseContent object with an initial version.
export const createVersionedContent<T extends BaseContent>(content: T): Versioned<T> { ... }
```

```typescript
// Function to update a versioned object, increment the version, and maintain a reference to the previous version.
export const updateVersionedContent<T extends BaseContent>(
  versionedContent: Versioned<T>,
  updates: Partial<T>
): Versioned<T> { ... }
```

```typescript
// Function to update a versioned object, increment the version, and maintain a reference to the previous version.
export const updateVersionedContent<T extends BaseContent>(
  versionedContent: Versioned<T>,
  updates: Partial<T>
): Versioned<T> { ... }
```

## **main.ts**

```typescript
// Create a new article object with BaseContent and Article-specific properties.
const article: Article { ... }
```

```typescript
// Validate an article using the validateContent function and articleValidator.
const validationResult = validateContent([articleValidator], article);
```

```typescript
// Create an access control object for an article with role-based permissions.
const articleAccessControl: AccessControl<Article> { ... }
```

```typescript
// Create a versioned object for an article.
const versionedArticle = createVersionedContent(article);
```

```typescript
// Update a versioned article, increment the version, and add new properties.
const updatedArticle = updateVersionedContent(versionedArticle, { ... });
```
