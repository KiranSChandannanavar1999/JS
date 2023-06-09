// SCOPE
var a = 12;
const b = 33;
let c = 44;
var d = 50;

document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
document.write(`<p>c = ${c}</p>`);
document.write(`<p>d = ${d}</p>`);

if(d > 20){
    //block

    var x = 100; // Global Scope
    let y = 200; // Local Scope
    const z = 300; // Local Scope

    document.write(`<p>x = ${x}</p>`);
    document.write(`<p>y = ${y}</p>`);
    document.write(`<p>z = ${z}</p><hr>`);
}

    document.write(`<p>x = ${x}</p>`);
     //document.write(`<p>y = ${y}</p>`); // p3.html:42 Uncaught ReferenceError
    //document.write(`<p>z = ${z}</p>`);  // p3.html:43 Uncaught ReferenceError

    var isAdmin = false;
    document.write(`<p>isAdmin = ${typeof(isAdmin )}</p>`);
    document.write(`<p>isAdmin = ${isAdmin}</p>`);

    var title = "Welcome to JS"; /* string and char => string */
    document.write(`<p>title = ${typeof(title)}</p>`);
    document.write(`<p>title = ${title}</p>`);

    var xx = 12342;
    document.write(`<p>xx = ${typeof(xx)}</p>`);
    document.write(`<p>xx = ${xx}</p>`);

    var yy = 34.343; /* number , float , hexa and expontial => number*/
    document.write(`<p>yy = ${typeof(yy)}</p>`);
    document.write(`<p>yy = ${yy}</p>`);

    //Array
    var colors = ["orange", "blue", "red", "green", 100, true, 500.5]
    document.write(`<p>colors = ${typeof(colors)}</p>`);
    document.write(`<p>colors = ${colors}</p>`);

    //object
    var user = {
        // key : value, => property
        name: "kiran ",
        email: "kkirans5777@gmail.com"
    };
    document.write(`<p>user = ${typeof(user)}</p>`);
    document.write(`<p>user = ${user}</p>`);

    // function block = behaviours
            // fuction name (params)
            function defaultFun() // Function Declaration
            {
                document.write(`<p> This is DEFAULT FUNCTION.</p>`);
            }
            defaultFun(); // Function Calling

            function paramterFun(name, email){
                document.write(`<p>This is PARAMETERIZED FUNCTION.</p>`);
                document.write(`<p>First parameter is : ${name}</p>`);
                document.write(`<p>Second parameter is : ${email}</p>`);
            }
            paramterFun("Javascript", "admin@javascript.com");
       

