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
find the commit named "custom interceptor" to see the minimal code

---

Serialization in Interceptor

See /src/users/dto/user.dto.ts

See /src/interceptors/serialize.interceptor.ts

try to send a request where the interceptor is used

---

Custom decorator:

See /src/interceptors/serialize.interceptor.ts
See the use of Serialize
