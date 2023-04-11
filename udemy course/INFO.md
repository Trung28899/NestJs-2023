In TypeORM, save() and remove() are expected
to be call with entity instances in order for hooks to run, not plain object

insert(), update() and delete() won't execute hooks and can be used with plain object

Here are some examples of hoosk:
import { AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';
