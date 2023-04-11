In TypeORM, save() and remove() are expected
to be call with entity instances in order for hooks to run, not plain object

insert(), update() and delete() won't execute hooks and can be used with plain object

Here are some examples of hoosk:
import { AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';

---

Interceptors can be use to intercept incoming request and / or outgoing reponses
Interceptors are very similar to middleware

We can apply interceptors to:

- Route handler, or
- Entire controller, or
- Apply interceptor globally, for every route

---

Building custom interceptor:

See /src/interceptors/serialize.interceptor.ts

See user.controller.ts

try to send a request where the interceptor is used
