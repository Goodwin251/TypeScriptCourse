import { Article } from './components/BaseContent.js';
import { articleValidator, validateContent } from './components/Validation.js';
import { AccessControl } from './components/AccessControl.js';
import { createVersionedContent, updateVersionedContent } from './components/Versioning.js';

// Створення статті
const article: Article = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'draft',
  title: 'Understanding TypeScript',
  body: 'This article explains the basics of TypeScript.',
  author: 'John Doe',
};

// Валідація статті
const validationResult = validateContent([articleValidator], article);
console.log('Validation Result:', validationResult);

if (!validationResult.isValid) {
  console.error('Validation failed:', validationResult.errors);
} else {
  console.log('Article is valid.');
}

// Управління правами доступу
const articleAccessControl: AccessControl<Article> = {
    controlledObject: article,
  role: 'editor',
  permissions: {
    draft: { create: true, read: true, update: true, delete: true },
    published: { create: false, read: true, update: true, delete: false },
    archived: { create: false, read: true, update: false, delete: false },
  },
};

console.log('Access Control for Editor:', articleAccessControl);

// Демонстрація версіонування статті
const versionedArticle = createVersionedContent(article);
console.log('Versioned Article:', versionedArticle);

const updatedArticle = updateVersionedContent(versionedArticle, {
  status: 'published',
  updatedAt: new Date(),
});
console.log('Updated Versioned Article:', updatedArticle);
