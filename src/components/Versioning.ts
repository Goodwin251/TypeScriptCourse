import { BaseContent } from './BaseContent.js';

export type Versioned<T extends BaseContent> = T & {
  version: number;
  previousVersion?: T;
};

export const createVersionedContent = <T extends BaseContent>(
  content: T
): Versioned<T> => {
  return { ...content, version: 1 };
};

export const updateVersionedContent = <T extends BaseContent>(
  versionedContent: Versioned<T>,
  updates: Partial<T>
): Versioned<T> => {
  const newVersion = {
    ...versionedContent,
    ...updates,
    version: versionedContent.version + 1,
    previousVersion: { ...versionedContent },
  };
  delete newVersion.previousVersion.previousVersion; // Обмеження глибини
  return newVersion;
};
