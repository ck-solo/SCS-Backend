# 🌐 HTTP Request Methods Explained

## ✅ 1. GET
- **Purpose**: Request data from a server.
- **Use Case**: Fetching a webpage or data (e.g., `GET /users`).
- **Safe & Idempotent**: Yes.

## ✅ 2. POST
- **Purpose**: Send data to the server to create a resource.
- **Use Case**: Submitting forms, creating new users (e.g., `POST /signup`).
- **Safe & Idempotent**: No.

## ✅ 3. PUT
- **Purpose**: Update or replace an existing resource.
- **Use Case**: Updating user info (e.g., `PUT /users/123`).
- **Safe & Idempotent**: Idempotent (multiple requests = same result).

## ✅ 4. PATCH
- **Purpose**: Partially update a resource.
- **Use Case**: Updating only the user’s email (e.g., `PATCH /users/123`).
- **Safe & Idempotent**: Idempotent.

## ✅ 5. DELETE
- **Purpose**: Remove a resource from the server.
- **Use Case**: Deleting a user or a post (e.g., `DELETE /posts/99`).
- **Safe & Idempotent**: Idempotent.

## ✅ 6. HEAD
- **Purpose**: Similar to GET but only returns headers (no body).
- **Use Case**: Check if a resource exists or get metadata.
- **Safe & Idempotent**: Yes.

## ✅ 7. OPTIONS
- **Purpose**: Describes communication options for the target resource.
- **Use Case**: Used in CORS requests to check allowed methods.
- **Safe & Idempotent**: Yes.

## ✅ 8. CONNECT
- **Purpose**: Establish a tunnel to the server (usually for SSL/HTTPS).
- **Use Case**: Proxying or secure connections (e.g., `CONNECT www.example.com:443`).
- **Safe & Idempotent**: No.

## ✅ 9. TRACE
- **Purpose**: Echoes the received request for debugging.
- **Use Case**: Diagnostics and debugging.
- **Safe & Idempotent**: Yes.

---

> 🧠 **Tip**: 
> - **Safe methods** don’t modify resources (`GET`, `HEAD`, `OPTIONS`, `TRACE`).
> - **Idempotent methods** give the same result no matter how many times you send them (`GET`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `TRACE`).



# 🌐 HTTP Status Codes Explained

## 📘 1xx — Informational
> Request received, still processing

- **100 Continue** — Client can continue with the request.
- **101 Switching Protocols** — Server agrees to switch protocols.
- **102 Processing** — Server has received and is processing the request.

---

## ✅ 2xx — Success
> Request was successfully received, understood, and accepted

- **200 OK** — Standard success response.
- **201 Created** — Resource successfully created.
- **202 Accepted** — Request accepted but not yet processed.
- **204 No Content** — Success, but no content to return.

---

## 🧠 3xx — Redirection
> Further action needed to complete the request

- **301 Moved Permanently** — URL has been moved permanently.
- **302 Found** — URL temporarily redirected.
- **304 Not Modified** — Cached version can be used.

---

## ⚠️ 4xx — Client Errors
> The request has an error (client-side issue)

- **400 Bad Request** — Invalid syntax or bad request.
- **401 Unauthorized** — Authentication required.
- **403 Forbidden** — You don’t have permission.
- **404 Not Found** — Resource not found.
- **405 Method Not Allowed** — HTTP method not allowed for this route.
- **408 Request Timeout** — Request took too long.
- **429 Too Many Request**
