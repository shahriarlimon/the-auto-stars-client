import React from 'react';

const Blogs = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">JAVACRIPT AND NODE JS</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Difference between javascript and nodejs</h2>
                <p className="leading-relaxed">JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language. It needs libraries that may be easily accessed from JavaScript programming to make it more useful.JavaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is very simple to create, and any running environment is equivalent to a proper browser. On the other hand, Node.js only supports the V8 engine, which is exclusive to Google Chrome. However, written JavaScript code can run in any environment, regardless of whether it supports the V8 engine.</p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700"> DATABASE</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Differences between sql and nosql databases?</h2>
                <p className="leading-relaxed">SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
               
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">JSON WEB TOKEN</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What is the purpose of jwt and how does it work</h2>
                <p className="leading-relaxed">JWT can be used as an access token to prevent unwanted access to a protected resource. They're often used as Bearer tokens, which the API will decode and validate before sending a response.JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blogs;