import { BaseContent } from './BaseContent.js';

export type Role = 'admin' | 'editor' | 'viewer';

export type Permission = {
  create: boolean;
  read: boolean;
  update: boolean;  
  delete: boolean;
};

export type AccessControl<T extends BaseContent> = {
    controlledObject: T;
    role: Role;
    permissions: Record<'draft' | 'published' | 'archived', Permission>; // Fixed
  };
  