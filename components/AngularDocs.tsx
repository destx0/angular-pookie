import React from 'react';

export function AngularDocs() {
  return (
    <div className="prose dark:prose-invert max-w-none overflow-y-auto max-h-[calc(100vh-200px)]">
      <h1>Introduction to Angular</h1>

      <p>Angular is a popular open-source web application framework developed and maintained by Google. It's used for building dynamic, single-page web applications (SPAs) and is known for its powerful features and robust ecosystem.</p>

      <h2>Key Features of Angular</h2>

      <ol>
        <li><strong>Component-Based Architecture</strong>: Angular applications are built using components, which are self-contained units of functionality.</li>
        <li><strong>TypeScript</strong>: Angular uses TypeScript, a superset of JavaScript that adds optional static typing.</li>
        <li><strong>Two-Way Data Binding</strong>: This feature allows for automatic synchronization of data between the model and the view.</li>
        <li><strong>Dependency Injection</strong>: Angular has a built-in dependency injection system, making it easier to develop, understand, and test applications.</li>
        <li><strong>Reactive Programming</strong>: Angular integrates with RxJS, enabling reactive programming patterns.</li>
      </ol>

      <h2>Getting Started with Angular</h2>

      <p>To start developing with Angular, you'll need to:</p>

      <ol>
        <li>Install Node.js and npm</li>
        <li>Install the Angular CLI globally:
          <pre><code>npm install -g @angular/cli</code></pre>
        </li>
        <li>Create a new Angular project:
          <pre><code>ng new my-angular-app</code></pre>
        </li>
        <li>Navigate to your project directory and serve the application:
          <pre><code>cd my-angular-app
ng serve</code></pre>
        </li>
      </ol>

      <p>This is just a brief introduction to Angular. There's much more to learn about components, services, routing, and other Angular concepts!</p>
    </div>
  );
}