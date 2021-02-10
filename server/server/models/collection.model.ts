import { CollectionObject } from './collection-object.model';
export interface ToDo extends CollectionObject{
  description: string;
  checked: boolean;
}
