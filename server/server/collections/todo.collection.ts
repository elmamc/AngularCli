import { MongoObservable } from 'meteor-rxjs';

import { ToDo } from '../models/collection.model';
export const Todos = new MongoObservable.Collection<ToDo>('todos');
