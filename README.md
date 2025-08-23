# Detodo

##  Data flow Table

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>File/Folder</th>
      <th>Responsibility</th>
      <th>Data Flow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entry Point</td>
      <td><code>index.js</code></td>
      <td>Starts the server and loads the app</td>
      <td>Loads <code>app.js</code> and begins listening for requests</td>
    </tr>
    <tr>
      <td>App Setup</td>
      <td><code>app.js</code></td>
      <td>Initializes Express, middleware, and routes</td>
      <td>Applies middleware → mounts route files</td>
    </tr>
    <tr>
      <td>Routing</td>
      <td><code>routes/todo.routes.js</code><br><code>routes/user.routes.js</code></td>
      <td>Maps HTTP endpoints to controller functions</td>
      <td>Receives request → passes to controller</td>
    </tr>
    <tr>
      <td>Middleware</td>
      <td><code>utils/validators.js</code></td>
      <td>Validates or transforms incoming data</td>
      <td>Intercepts request → validates → calls <code>next()</code></td>
    </tr>
    <tr>
      <td>Controller</td>
      <td><code>controllers/todo.controller.js</code><br><code>controllers/user.controller.js</code></td>
      <td>Handles request logic and response formatting</td>
      <td>Receives validated data → calls service → sends response</td>
    </tr>
    <tr>
      <td>Service</td>
      <td><code>services/todo.service.js</code><br><code>services/user.service.js</code></td>
      <td>Contains business logic and DB interactions</td>
      <td>Receives data → interacts with model → connects/disconnects DB → returns result</td>
    </tr>
    <tr>
      <td>Model</td>
      <td><code>models/todo.model.js</code><br><code>models/user.model.js</code></td>
      <td>Defines schema and connects to database</td>
      <td>Receives data → validates schema → saves to DB</td>
    </tr>
    <tr>
      <td>Database</td>
      <td><code>db/connect.js</code></td>
      <td>Establishes connection to MongoDB</td>
      <td>Connects once during app startup</td>
    </tr>
  </tbody>
</table>



## 🧹 DRY & Scalable Benefits

- Controllers handle HTTP logic.
- Services encapsulate business logic.
- Models define DB structure.
- Routes map endpoints to controllers.
- App.js wires everything together.
- Utils can hold validators, formatters, etc.





## new format and Table

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>File/Folder</th>
      <th>Responsibility</th>
      <th>Data Flow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entry Point</td>
      <td><code>src/index.ts</code></td>
      <td>Starts the server</td>
      <td>Loads <code>app.ts</code> and begins listening for requests</td>
    </tr>
    <tr>
      <td>App Setup</td>
      <td><code>src/app.ts</code></td>
      <td>Initializes Express, middleware, and routes</td>
      <td>Applies middleware → mounts route files → connects DB</td>
    </tr>
    <tr>
      <td>Routing</td>
      <td><code>todos/todo.routes.ts</code><br><code>users/user.routes.ts</code></td>
      <td>Maps HTTP endpoints to controller functions</td>
      <td>Receives request → passes to controller</td>
    </tr>
    <tr>
      <td>Validation</td>
      <td><code>todos/todo.validator.ts</code><br><code>users/user.validator.ts</code></td>
      <td>Validates request data before processing</td>
      <td>Intercepts request → validates → calls <code>next()</code></td>
    </tr>
    <tr>
      <td>Controller</td>
      <td><code>todos/todo.controller.ts</code><br><code>users/user.controller.ts</code></td>
      <td>Handles request logic and response formatting</td>
      <td>Receives validated data → calls service → sends response</td>
    </tr>
    <tr>
      <td>Service</td>
      <td><code>todos/todo.service.ts</code><br><code>users/user.service.ts</code></td>
      <td>Contains business logic and DB operations</td>
      <td>Receives data → interacts with Prisma client → returns result</td>
    </tr>
    <tr>
      <td>Prisma Client</td>
      <td><code>prisma/client.ts</code></td>
      <td>Exports Prisma instance for DB access</td>
      <td>Used by service layer to query Neon/PostgreSQL</td>
    </tr>
    <tr>
      <td>Database Schema</td>
      <td><code>prisma/schema.prisma</code></td>
      <td>Defines models and relationships</td>
      <td>Used by Prisma to generate typed client</td>
    </tr>
    <tr>
      <td>Utilities</td>
      <td><code>utils/errorHandler.ts</code></td>
      <td>Handles errors and reusable helpers</td>
      <td>Used across controllers and middleware</td>
    </tr>
  </tbody>
</table>

