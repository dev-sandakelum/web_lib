export const IntroToOOPQuiz = {
  id: "oop1",
  title: "Introduction to Object Oriented Programming - Lesson 01",
  category: "Object Oriented Programming",
  questions: [
    
    {
      question: "Which access control modifiers are listed in the course outline?",
      options: [
        "Public, private, protected, default",
        "Public, private, static, final",
        "Open, closed, sealed, default",
        "Public, internal, sealed, abstract",
      ],
      correctIndex: 0,
    },
    {
      question: "Which design pattern is specifically mentioned in the course outline?",
      options: ["Factory", "Observer", "Singleton", "Adapter"],
      correctIndex: 2,
    },
    {
      question: "Which two items are mentioned under 'Introduction to Threads' in the course outline?",
      options: [
        "Thread class and Runnable interface",
        "Executor and Future",
        "Process class and Callable interface",
        "Timer and TimerTask",
      ],
      correctIndex: 0,
    },
    {
      question: "Which GUI toolkits are mentioned in the course outline?",
      options: ["JavaFX/SceneBuilder", "AWT/Swing", "Qt/GTK", "React/Angular"],
      correctIndex: 1,
    },
    {
      question: "Which keywords are listed under Exception handling in the course outline?",
      options: [
        "exceptions, throw, try/catch, throws",
        "error, raise, handle, finally",
        "assert, verify, catch, rethrow",
        "trap, signal, catch, escape",
      ],
      correctIndex: 0,
    },
    {
      question: "What is Programming, as defined in the lecture?",
      options: [
        "The process of designing hardware circuits",
        "The process of writing computer programs",
        "The process of debugging existing software",
        "The process of managing software teams",
      ],
      correctIndex: 1,
    },
    {
      question: "Object-oriented programming is described as which of the following?",
      options: [
        "A programming language",
        "A paradigm based on wrapping pieces of data and behavior related to that data into special bundles called objects",
        "A compiler optimization technique",
        "A type of operating system",
      ],
      correctIndex: 1,
    },
    {
      question: "In OOP, objects are constructed from a set of 'blueprints' defined by a programmer. What are these blueprints called?",
      options: ["Methods", "Classes", "Interfaces", "Modules"],
      correctIndex: 1,
    },
    {
      question: "In the fundamentals of object orientation, how is a program viewed?",
      options: [
        "As a sequence of procedures executed in order",
        "As a collection of objects that pass messages to each other",
        "As a single monolithic function",
        "As a list of data structures only",
      ],
      correctIndex: 1,
    },
    {
      question: "What happens when an object receives a message in an object-oriented system?",
      options: [
        "The message is always ignored",
        "Each object decides what to do with the received message",
        "The compiler decides the outcome at build time",
        "The message is forwarded to the operating system",
      ],
      correctIndex: 1,
    },
    {
      question: "How is an object-oriented system described in the lecture?",
      options: [
        "A set of procedures organized into libraries",
        "A set of interacting objects organized into classes",
        "A collection of independent scripts",
        "A single executable file",
      ],
      correctIndex: 1,
    },
    {
      question: "In object orientation, where is the focus placed?",
      options: [
        "On function, not on data",
        "On data and not on function",
        "On hardware, not on software",
        "On algorithms only",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the lecture, which of the following is NOT a primary focus in object orientation?",
      options: [
        "Definition of data and its attributes",
        "How data will be manipulated",
        "The exact mechanism of manipulation (procedure or algorithm)",
        "Grouping of data into objects",
      ],
      correctIndex: 2,
    },
    {
      question: "Why is Object Orientation used, according to the lecture?",
      options: [
        "To make programs run faster on old hardware",
        "For keeping large software projects manageable by human programmers",
        "To eliminate the need for testing",
        "To reduce the number of programming languages",
      ],
      correctIndex: 1,
    },
    {
      question: "Which four benefits are listed under 'Why Object Orientation?'",
      options: [
        "Speed, memory, portability, security",
        "Modularity, information-hiding, code re-use, pluggability and debugging ease",
        "Compilation, linking, loading, execution",
        "Abstraction, recursion, iteration, concurrency",
      ],
      correctIndex: 1,
    },
    {
      question: "What does Modularity mean in the OOP context?",
      options: [
        "All source code must be in one file",
        "The source code for an object can be written and maintained independently of the source code for other objects",
        "Objects cannot be passed around in the system",
        "Only one module can exist per program",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the main idea of Information-hiding?",
      options: [
        "Encrypting all object data before storage",
        "By interacting only with an object's methods, the details of its internal implementation remain hidden from the outside world",
        "Hiding the entire class from the compiler",
        "Removing comments from the source code",
      ],
      correctIndex: 1,
    },
    {
      question: "What advantage does Code re-use provide, according to the lecture?",
      options: [
        "It forces every developer to write objects from scratch",
        "It allows specialists to implement/test/debug complex, task-specific objects which you can then trust to run in your own code",
        "It removes the need for classes",
        "It makes programs run without a compiler",
      ],
      correctIndex: 1,
    },
    {
      question: "What real-world analogy is used to explain 'Pluggability and debugging ease'?",
      options: [
        "Rewriting a book from the first page",
        "If a bolt breaks, you replace it, not the entire machine",
        "Replacing the whole car when a tyre goes flat",
        "Painting a house to fix a leak",
      ],
      correctIndex: 1,
    },
    {
      question: "In the cookie analogy used in the lecture, what represents the class?",
      options: ["The cookies", "The cookie cutter", "The oven", "The dough"],
      correctIndex: 1,
    },
    {
      question: "In the cookie analogy, what do the cookies represent?",
      options: [
        "Classes",
        "Instances (objects) of the class",
        "Methods",
        "Packages",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Procedural Approach for the bank scenario, what construct was used to group account data?",
      options: ["class Account", "struct Account", "interface Account", "enum Account"],
      correctIndex: 1,
    },
    {
      question: "Which of the following is a drawback of the Procedural Approach listed in the lecture?",
      options: [
        "Data is fully protected from external access",
        "All data is shared with no protection",
        "It is easier to modify than OOP",
        "It manages complexity better than OOP",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Object Oriented Approach to analyzing a problem statement, what do nouns represent?",
      options: [
        "Actions (methods) on the objects",
        "Objects (classes) in the domain",
        "Variables only",
        "Return types",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Object Oriented Approach to analyzing a problem statement, what do verbs represent?",
      options: [
        "Objects (classes) in the domain",
        "Actions (methods) on the objects",
        "Data types",
        "Access modifiers",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Procedural vs Object Oriented comparison of the bank scenario, which terms belong to the Object Oriented view?",
      options: [
        "Withdraw, deposit, transfer",
        "Customer, money, account",
        "Input, process, output",
        "Compile, link, run",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the key idea behind 'Mapping the world to software'?",
      options: [
        "Software objects must be written in binary",
        "Objects in the problem domain are mapped to objects in software",
        "Real world problems cannot be modeled in software",
        "Every problem maps to exactly one function",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Object Oriented Approach, what is grouped together?",
      options: [
        "Data and operations",
        "Files and folders",
        "Compilers and interpreters",
        "Hardware and software",
      ],
      correctIndex: 0,
    },
    {
      question: "According to the lecture, what is the relationship between classes and objects?",
      options: [
        "Classes reflect instances, objects reflect concepts",
        "Classes reflect concepts, objects reflect instances that embody those concepts",
        "Both classes and objects are concepts",
        "Objects exist only in source code",
      ],
      correctIndex: 1,
    },
    {
      question: "Which Java statement correctly instantiates an object from the BankAccount class, as shown in the lecture?",
      options: [
        "BankAccount myAccount = BankAccount;",
        "myAccount = new BankAccount();",
        "new myAccount = BankAccount();",
        "BankAccount() = new myAccount;",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is a characteristic of a CLASS (as opposed to an object)?",
      options: [
        "It has its own copy of data",
        "It occupies memory at runtime",
        "It is visible in source code and the code is not duplicated",
        "It is active in a running program",
      ],
      correctIndex: 2,
    },
    {
      question: "Which of the following is a characteristic of an OBJECT (as opposed to a class)?",
      options: [
        "It is only visible in source code",
        "It has its own copy of data, occupies memory, and is active in the running program",
        "Its code is never duplicated",
        "It cannot perform any operations",
      ],
      correctIndex: 1,
    },
    {
      question: "What is an Object, according to the lecture?",
      options: [
        "A blueprint of a class",
        "An instance of a class",
        "A collection of unrelated functions",
        "A memory address only",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of these are the three characteristics of objects described in the lecture?",
      options: [
        "State, Behavior, Identity",
        "Data, Function, Memory",
        "Input, Process, Output",
        "Class, Object, Instance",
      ],
      correctIndex: 0,
    },
    {
      question: "What does the 'State' of an object refer to?",
      options: [
        "The methods an object can perform",
        "The properties and their values (e.g., a Dog's name, color, breed)",
        "The unique ID of the object",
        "The memory address of the object",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the 'Behavior' of an object define?",
      options: [
        "The values of its attributes",
        "Its interaction with the outside world through methods (e.g., a Dog barking, a Bank Account withdrawing)",
        "How much memory it occupies",
        "Its unique serial number",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the purpose of an object's 'Identity'?",
      options: [
        "To define the object's methods",
        "To differentiate two objects of the same class (e.g., ID, Account Number, Serial No)",
        "To store the object's balance",
        "To determine the object's class",
      ],
      correctIndex: 1,
    },
    {
      question: "When starting object-oriented design, what steps does the lecture recommend?",
      options: [
        "Write code first, then identify data",
        "Think the real world, be natural, identify objects, then think about each object's possible states and behaviors",
        "Start by writing the database schema",
        "Begin with the user interface design",
      ],
      correctIndex: 1,
    },
    {
      question: "Whose '5 rules' of object orientation are presented in the lecture?",
      options: ["James Gosling", "Alan Kay", "Bjarne Stroustrup", "Grady Booch"],
      correctIndex: 1,
    },
    {
      question: "Which of the following is one of Alan Kay's 5 rules?",
      options: [
        "Only some things are objects",
        "Everything is an object",
        "Objects cannot have their own memory",
        "Objects have no type",
      ],
      correctIndex: 1,
    },
    {
      question: "According to Alan Kay's rules, what is a program?",
      options: [
        "A bunch of objects telling each other what to do by sending messages",
        "A sequence of procedures called in order",
        "A single class with many functions",
        "A database of variables",
      ],
      correctIndex: 0,
    },
    {
      question: "According to Alan Kay's rules, what is true about objects of a particular type?",
      options: [
        "They can each receive only unique messages",
        "All objects of a particular type can receive the same messages (invoke methods)",
        "They cannot invoke methods",
        "They must be of different types to communicate",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a Class, according to the lecture?",
      options: [
        "An instance of an object",
        "A blueprint of an object",
        "A running process in memory",
        "A collection of unrelated variables",
      ],
      correctIndex: 1,
    },
    {
      question: "In the bicycle example used to explain classes, what is your particular bicycle called in object-oriented terms?",
      options: [
        "A class of bicycles",
        "An instance of the class of objects known as bicycles",
        "A blueprint for bicycles",
        "A method of the bicycle class",
      ],
      correctIndex: 1,
    },
    {
      question: "What is an Instance, according to the lecture?",
      options: [
        "A specific realization of any object",
        "A general template for objects",
        "A type of method",
        "The source code file of a class",
      ],
      correctIndex: 0,
    },
    {
      question: "What is Instantiation?",
      options: [
        "Deleting an object from memory",
        "The creation of a real instance or particular realization of an abstraction or template, such as a class of objects or a computer process",
        "Renaming a class",
        "Compiling source code into bytecode",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is listed as an advantage of OOP in the lecture?",
      options: [
        "It increases software maintenance and developing costs",
        "It reduces software maintenance and developing costs",
        "It makes partitioning work in a project harder",
        "It prevents systems from scaling up",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the Advantages of OOP slide, how can object-oriented systems be scaled?",
      options: [
        "They cannot be scaled at all",
        "They can be easily upgraded from small to large scale",
        "They can only be scaled by rewriting from scratch",
        "They scale only downward",
      ],
      correctIndex: 1,
    },
    {
      question: "Which IDE is introduced in the lecture for the course?",
      options: ["Eclipse", "NetBeans", "IntelliJ IDEA", "Visual Studio Code"],
      correctIndex: 2,
    },
    {
      question: "Which book by Kathy Sierra and Bert Bates is listed in the references?",
      options: [
        "How To Program (Early Objects)",
        "Headfirst Java",
        "Effective Java",
        "Thinking in Java",
      ],
      correctIndex: 1,
    },
    {
      question: "Who are the authors of 'How To Program (Early Objects)' listed in the references?",
      options: [
        "Kathy Sierra and Bert Bates",
        "H. Deitel and P. Deitel",
        "K. C. Laudon and J. P. Laudon",
        "Grady Booch and James Rumbaugh",
      ],
      correctIndex: 1,
    },
  ],
};

export const ClassesAndObjectsQuiz = {
  id: "oop2",
  title: "Classes and Objects - Lesson 02",
  category: "Object Oriented Programming",
  questions: [
    {
      question: "Which of the following is NOT one of the concepts listed under 'Object Oriented Programming - Concepts'?",
      options: ["Inheritance", "Polymorphism", "Recursion", "Encapsulation"],
      correctIndex: 2,
    },
    {
      question: "According to the lecture, what does Object Oriented Programming simplify by providing its concepts?",
      options: [
        "Hardware design and manufacturing",
        "Software development and maintenance",
        "Database normalization",
        "Network configuration",
      ],
      correctIndex: 1,
    },
    {
      question: "What is an Object?",
      options: [
        "A blueprint of a class",
        "An instance of a class",
        "A type of access modifier",
        "A reserved Java keyword",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Characteristics of an Object, what does 'State' represent?",
      options: [
        "The data of an object",
        "The methods of an object",
        "The memory address of an object",
        "The package of an object",
      ],
      correctIndex: 0,
    },
    {
      question: "In the Characteristics of an Object, what does 'Identity' do?",
      options: [
        "It stores all the field values",
        "It is used internally by the JVM to identify each object uniquely",
        "It defines the return type of methods",
        "It controls access to the class",
      ],
      correctIndex: 1,
    },
    {
      question: "Under 'Understanding Objects', which four properties do objects have?",
      options: [
        "State, Behavior, Identity, Type",
        "Name, Size, Colour, Weight",
        "Fields, Methods, Classes, Packages",
        "Public, Private, Protected, Default",
      ],
      correctIndex: 0,
    },
    {
      question: "In the life cycle of an object, what must happen before an object can be created from a class?",
      options: [
        "The class must be compiled twice",
        "The class must be loaded",
        "The object must be garbage collected",
        "The constructor must be deleted",
      ],
      correctIndex: 1,
    },
    {
      question: "Which keyword is used to create an object from a class?",
      options: ["create", "object", "new", "instance"],
      correctIndex: 2,
    },
    {
      question: "What happens at the end of an object's life cycle?",
      options: [
        "The object is copied into the class file",
        "The object is removed from memory and Java drops its internal reference to it",
        "The object is converted into a class",
        "The object is saved permanently to disk",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a Class?",
      options: [
        "A blueprint of an object",
        "A running instance in memory",
        "A type of method",
        "A reserved variable name",
      ],
      correctIndex: 0,
    },
    {
      question: "What is the basic form of a class declaration?",
      options: [
        "declare ClassName { class body }",
        "class ClassName { class body }",
        "new ClassName { class body }",
        "public ClassName ( class body )",
      ],
      correctIndex: 1,
    },
    {
      question: "In the extended form of a class declaration, which keywords are used for inheritance and interfaces respectively?",
      options: [
        "inherits and uses",
        "extends and implements",
        "imports and includes",
        "derives and applies",
      ],
      correctIndex: 1,
    },
    {
      question: "In the body of a class, what defines the fields of a class?",
      options: [
        "Method declarations",
        "Variable declarations",
        "Constructor declarations",
        "Import statements",
      ],
      correctIndex: 1,
    },
    {
      question: "What are Initializers in the body of a class?",
      options: [
        "Blocks of code run every time a method is called",
        "Stand-alone blocks of code that are run only once, when the class is initialized",
        "Statements that import external packages",
        "Variables that store default values",
      ],
      correctIndex: 1,
    },
    {
      question: "Which two kinds of initializers are mentioned in the lecture?",
      options: [
        "Static initializers and instance initializers",
        "Public initializers and private initializers",
        "Default initializers and parameterized initializers",
        "Inner initializers and outer initializers",
      ],
      correctIndex: 0,
    },
    {
      question: "What is a class that is included inside another class called?",
      options: [
        "A sibling class",
        "An inner class or a nested class",
        "A parent class",
        "An abstract class",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the 'Ordering Elements in a Class' table, where does the package declaration go?",
      options: [
        "Anywhere inside the class",
        "The first line in the file",
        "Immediately after the class declaration",
        "At the end of the file",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the 'Ordering Elements in a Class' table, where do import statements go?",
      options: [
        "Before the package declaration",
        "Immediately after the package",
        "Inside the class body",
        "After the method declarations",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the 'Ordering Elements in a Class' table, which element is the only REQUIRED one?",
      options: [
        "Package declaration",
        "Import statements",
        "Class declaration",
        "Field declarations",
      ],
      correctIndex: 2,
    },
    {
      question: "Which of the following follows the class naming convention given in the lecture?",
      options: [
        "student",
        "Student",
        "STUDENT_CLASS",
        "class1",
      ],
      correctIndex: 1,
    },
    {
      question: "What type of word should be used for class names as much as possible?",
      options: ["Verbs", "Nouns", "Adjectives", "Adverbs"],
      correctIndex: 1,
    },
    {
      question: "How must a public class named Student be saved?",
      options: [
        "student.java",
        "Student.java",
        "Student.class",
        "Any file name with a .java extension",
      ],
      correctIndex: 1,
    },
    {
      question: "How many public classes can be placed in the same source file?",
      options: ["Only one", "Two", "Unlimited", "At least three"],
      correctIndex: 0,
    },
    {
      question: "What is a Field in Java?",
      options: [
        "A variable defined in the body of a class, outside any of the class's methods",
        "A variable defined inside a method",
        "A parameter passed into a constructor",
        "A block of executable statements",
      ],
      correctIndex: 0,
    },
    {
      question: "Fields are also known by which other name, and what is their scope?",
      options: [
        "Local variables, available only within one method",
        "Class variables, available to all the methods of a class",
        "Static blocks, available only at compile time",
        "Temporary variables, cleared after each call",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a Java method?",
      options: [
        "A collection of statements grouped together to perform an operation, which only runs when it is called",
        "A variable that stores object data",
        "A file containing Java source code",
        "A reserved keyword used to create objects",
      ],
      correctIndex: 0,
    },
    {
      question: "In the 'Parts of Method declaration' table, which elements are REQUIRED?",
      options: [
        "Access modifier and optional specifier",
        "Return type, method name, and parameter list (which can be empty parentheses)",
        "Optional exception list and access modifier",
        "Only the method body",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the 'Parts of Method declaration' table, is the access modifier required?",
      options: [
        "Yes, always required",
        "No, it is not required",
        "Only for private methods",
        "Only when a return type is present",
      ],
      correctIndex: 1,
    },
    {
      question: "Which access modifier allows a method to be called from any class?",
      options: ["private", "protected", "public", "default"],
      correctIndex: 2,
    },
    {
      question: "Which access modifier allows a method to be called only from within the same class?",
      options: ["public", "private", "protected", "default"],
      correctIndex: 1,
    },
    {
      question: "Which access modifier allows a method to be called from classes in the same package or from subclasses?",
      options: ["public", "private", "protected", "default"],
      correctIndex: 2,
    },
    {
      question: "What is special about the 'default' (package private) access in Java?",
      options: [
        "It uses the keyword 'default'",
        "There is no keyword for it — you simply omit the access modifier",
        "It is the same as public",
        "It can only be applied to constructors",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the three steps involved in creating an object?",
      options: [
        "Declaration, Instantiation, Initialization",
        "Compilation, Linking, Execution",
        "Import, Extend, Implement",
        "Allocation, Deallocation, Garbage collection",
      ],
      correctIndex: 0,
    },
    {
      question: "In the statement `Employee e = new Employee();`, what does the 'new' operator do?",
      options: [
        "It deletes the previous object",
        "It allocates memory for the object and returns a reference to the newly created object",
        "It renames the class",
        "It converts the object into a class",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the three ways to initialize an object in Java, according to the lecture?",
      options: [
        "By reference variable, by method, by constructor",
        "By loop, by condition, by array",
        "By import, by extend, by implement",
        "By compiler, by JVM, by JRE",
      ],
      correctIndex: 0,
    },
    {
      question: "In the Employee example, `emp.id=101;` is an example of which initialization technique?",
      options: [
        "Initialization through a constructor",
        "Initialization through a reference variable",
        "Initialization through a method",
        "Initialization through an initializer block",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Student example, the `insertRecord(String s, int i)` method is used to demonstrate which initialization technique?",
      options: [
        "Initialization through a reference variable",
        "Initialization through a method",
        "Initialization through a constructor",
        "Initialization through a static block",
      ],
      correctIndex: 1,
    },
    {
      question: "When is a constructor called?",
      options: [
        "Every time a method of the object is invoked",
        "When a new instance of an object is created (it's the 'new' keyword that calls it)",
        "Only when the program terminates",
        "Whenever a field is accessed",
      ],
      correctIndex: 1,
    },
    {
      question: "Can you call a constructor again after the object has been created?",
      options: [
        "Yes, at any time",
        "No, after creating the object you can't call the constructor again",
        "Yes, but only from a subclass",
        "Yes, but only once more",
      ],
      correctIndex: 1,
    },
    {
      question: "Why is a constructor called a 'constructor'?",
      options: [
        "Because it constructs the class file at compile time",
        "Because it constructs the values at the time of object creation",
        "Because it builds the package structure",
        "Because it constructs the method signatures",
      ],
      correctIndex: 1,
    },
    {
      question: "What happens if a class doesn't have any constructor written for it?",
      options: [
        "The program fails to compile",
        "The Java compiler creates a default constructor",
        "The object cannot be created",
        "All fields become inaccessible",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following are the rules for creating a Java constructor?",
      options: [
        "Constructor name must be same as its class name, and it must have no explicit return type",
        "Constructor name must be lowercase, and it must return void",
        "Constructor name must be different from the class name, and it must return an int",
        "Constructor must always be private and static",
      ],
      correctIndex: 0,
    },
    {
      question: "What are the two types of Java constructors listed in the lecture?",
      options: [
        "Static constructor and dynamic constructor",
        "Default constructor (no-arg constructor) and parameterized constructor",
        "Public constructor and private constructor",
        "Inner constructor and outer constructor",
      ],
      correctIndex: 1,
    },
    {
      question: "Why do constructors have no return type?",
      options: [
        "Because they can never return anything",
        "Because they implicitly return an object of their class",
        "Because the JVM ignores their return value",
        "Because return types are only allowed in static methods",
      ],
      correctIndex: 1,
    },
    {
      question: "What does a default constructor do to the instance variables?",
      options: [
        "It leaves them undefined",
        "It initializes all instance variables to zero or null",
        "It initializes them to random values",
        "It deletes them from memory",
      ],
      correctIndex: 1,
    },
    {
      question: "Which book by Kathy Sierra and Bert Bates appears in the references for this lesson?",
      options: [
        "How To Program (Early Objects)",
        "Headfirst Java",
        "Effective Java",
        "Java: The Complete Reference",
      ],
      correctIndex: 1,
    },
  ],
};

export const ClassesAndObjectsPart2Quiz = {
  id: "oop2b",
  title: "Classes and Objects - Lesson 02 Part 02",
  category: "Object Oriented Programming",
  questions: [
    {
      question: "In the Account class example, why does `a=a; b=b;` inside setData fail to update the object's values?",
      options: [
        "Because the method is declared public",
        "Because both the local and instance variables have the same name",
        "Because int cannot be assigned inside a method",
        "Because the class has no constructor",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the solution given for the local/instance variable name clash in the Account example?",
      options: [
        "Use the 'static' keyword on the fields",
        "Use the 'this' reference, e.g. this.a = a;",
        "Rename the class",
        "Make the method private",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the 'this' keyword represent?",
      options: [
        "A reference that every object has to itself",
        "A reference to the parent class",
        "A reference to the main method",
        "A reference to the package",
      ],
      correctIndex: 0,
    },
    {
      question: "In `this.a = a;`, which side becomes the instance variable and which becomes the local variable?",
      options: [
        "Left-hand side is the local variable, right-hand side is the instance variable",
        "Left-hand side becomes the instance variable, right-hand side becomes the local variable",
        "Both sides refer to the instance variable",
        "Both sides refer to the local variable",
      ],
      correctIndex: 1,
    },
    {
      question: "Where can the 'this' keyword be used?",
      options: [
        "Only inside the main method",
        "In the body of a class constructor or method, to refer to the current object",
        "Only inside static methods",
        "Only in interface declarations",
      ],
      correctIndex: 1,
    },
    {
      question: "When using 'this' to call another constructor, where must that call appear?",
      options: [
        "Anywhere inside the constructor body",
        "In the very first statement of the constructor",
        "In the last statement of the constructor",
        "Outside the constructor",
      ],
      correctIndex: 1,
    },
    {
      question: "How many other constructors can a single constructor call directly using 'this'?",
      options: [
        "None",
        "Only one other constructor, but constructors can be chained",
        "Exactly two",
        "Any number, in any order",
      ],
      correctIndex: 1,
    },
    {
      question: "What restriction applies to chained constructor calls?",
      options: [
        "You can't create loops in which constructors call one another",
        "Chained constructors must all be private",
        "Chained constructors must have the same parameters",
        "Chaining is only allowed in static classes",
      ],
      correctIndex: 0,
    },
    {
      question: "What is Constructor Chaining?",
      options: [
        "Linking two classes with the extends keyword",
        "The ability to call a constructor inside another constructor",
        "Creating several objects in a loop",
        "Declaring multiple constructors with the same signature",
      ],
      correctIndex: 1,
    },
    {
      question: "Which keyword is used for constructor chaining within the SAME class?",
      options: ["super", "this", "new", "static"],
      correctIndex: 1,
    },
    {
      question: "Which keyword is used for constructor chaining to ANOTHER class (to be discussed under Inheritance)?",
      options: ["this", "extends", "super", "implements"],
      correctIndex: 2,
    },
    {
      question: "What is an Initializer block?",
      options: [
        "A block of code placed inside a constructor",
        "A lonely block of code placed outside any method, constructor, or other block of code",
        "A method that must be called manually",
        "A special type of import statement",
      ],
      correctIndex: 1,
    },
    {
      question: "When are initializer blocks executed?",
      options: [
        "Only when the default constructor is used",
        "Whenever an instance of a class is created, regardless of which constructor is used",
        "Only once, when the program starts",
        "Only when explicitly called by name",
      ],
      correctIndex: 1,
    },
    {
      question: "If a class contains more than one initializer, in what order are they executed?",
      options: [
        "In reverse order of appearance",
        "In the order in which they appear in the program",
        "In alphabetical order",
        "In random order determined by the JVM",
      ],
      correctIndex: 1,
    },
    {
      question: "When are initializers executed in relation to constructors?",
      options: [
        "Initializers are executed before any class constructors",
        "Initializers are executed after all constructors",
        "Initializers replace the constructor entirely",
        "Initializers and constructors run at the same time",
      ],
      correctIndex: 0,
    },
    {
      question: "What is the special kind of initializer block that lets you initialize static fields called?",
      options: [
        "An instance initializer",
        "A static initializer",
        "A constructor initializer",
        "A final initializer",
      ],
      correctIndex: 1,
    },
    {
      question: "What is an Anonymous object in Java?",
      options: [
        "An object stored in a private field",
        "An object which has no reference",
        "An object created inside a constructor",
        "An object with no methods",
      ],
      correctIndex: 1,
    },
    {
      question: "Which statement calls the fact(5) method through an anonymous object?",
      options: [
        "Calculation c = new Calculation(); c.fact(5);",
        "new Calculation().fact(5);",
        "Calculation.fact(5);",
        "fact(5).new Calculation();",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is a way an object can become unreferenced?",
      options: [
        "By calling its constructor a second time",
        "By nulling the reference, e.g. e = null;",
        "By making the class public",
        "By adding a new field to the class",
      ],
      correctIndex: 1,
    },
    {
      question: "In the code `Employee e1=new Employee(); Employee e2=new Employee(); e1=e2;`, what happens?",
      options: [
        "Both objects are destroyed immediately",
        "The first object referred to by e1 becomes available for garbage collection",
        "e2 becomes unreferenced",
        "A compilation error occurs",
      ],
      correctIndex: 1,
    },
    {
      question: "In Java, what does the term 'garbage' mean?",
      options: ["Syntax errors", "Unreferenced objects", "Unused classes", "Deprecated methods"],
      correctIndex: 1,
    },
    {
      question: "What is Garbage Collection?",
      options: [
        "The process of reclaiming the runtime unused memory automatically",
        "The process of compiling source code",
        "A manual method to free memory that the programmer must call",
        "A way to store objects on disk",
      ],
      correctIndex: 0,
    },
    {
      question: "Which of the following is an advantage of the Java Garbage Collector?",
      options: [
        "It requires the programmer to write cleanup code",
        "It is done automatically by the garbage collector (a part of JVM), so no extra effort is needed",
        "It prevents objects from ever being created",
        "It speeds up the compiler",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the term 'static' mean in Java?",
      options: [
        "A field or method that is associated with the class itself, not with a particular instance",
        "A field that can never be changed",
        "A method that runs only once per object",
        "A class that cannot be compiled",
      ],
      correctIndex: 0,
    },
    {
      question: "How do you access a static field or method?",
      options: [
        "By creating an instance of the class first",
        "By specifying the class name, not a variable that references an object",
        "Only from within a constructor",
        "Only through the 'this' keyword",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is listed as a common use of static fields and methods?",
      options: [
        "To keep count of how many instances of a class have been created",
        "To prevent the class from compiling",
        "To make all fields private automatically",
        "To force garbage collection",
      ],
      correctIndex: 0,
    },
    {
      question: "Which statement about the static keyword and variables is correct?",
      options: [
        "Both fields and local variables can be static",
        "Fields can be static, but local variables can't",
        "Only local variables can be static",
        "Neither fields nor local variables can be static",
      ],
      correctIndex: 1,
    },
    {
      question: "When are static fields created and initialized?",
      options: [
        "Every time an object is destroyed",
        "When the class is first loaded — when a static member is referred to or when an instance is created, whichever comes first",
        "Only when the main method finishes",
        "Only when explicitly requested by the programmer",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the best-known static method in Java?",
      options: ["toString", "main", "equals", "run"],
      correctIndex: 1,
    },
    {
      question: "Which statement about accessing members from a static method is correct?",
      options: [
        "A static method can freely access non-static methods and fields",
        "You can't access a non-static method or field from a static method, because the static method has no instance of the class to reference",
        "Static methods can only access other static methods, never static fields",
        "Static methods cannot access anything at all",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the 'What can call what?' table, can an instance method call a static method or variable?",
      options: [
        "No, it is illegal",
        "Yes, using the classname or a reference variable",
        "Yes, but only inside a constructor",
        "Only if the static member is public",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the 'What can call what?' table, can a static method call an instance method or variable?",
      options: [
        "Yes, using the classname",
        "Yes, using a reference variable",
        "No, it is not legal",
        "Only if the instance method is public",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the correct syntax for a static initializer?",
      options: [
        "static() { statements }",
        "static { statements }",
        "initializer static { statements }",
        "public static init { statements }",
      ],
      correctIndex: 1,
    },
    {
      question: "When are static initializers executed?",
      options: [
        "The first time you access a static member, or the first time you create an instance — and before the constructor is executed",
        "Only after all constructors have finished",
        "Every time any method of the class is called",
        "Only when the program terminates",
      ],
      correctIndex: 0,
    },
    {
      question: "How do you prevent a class from being instantiated?",
      options: [
        "By removing all its fields",
        "By providing a single private constructor",
        "By declaring the class as static",
        "By omitting the main method",
      ],
      correctIndex: 1,
    },
    {
      question: "What happens if you don't provide a constructor in your class?",
      options: [
        "The class cannot be instantiated at all",
        "Java automatically inserts a default constructor, which happens to be public",
        "Java inserts a private constructor",
        "The code fails to compile",
      ],
      correctIndex: 1,
    },
    {
      question: "Which class is given as an example of why you might want to prevent instantiation?",
      options: ["String class", "Math class", "Object class", "Scanner class"],
      correctIndex: 1,
    },
    {
      question: "According to the Summary of Access Modifiers, which modifier allows access from a member in another class in the same package?",
      options: [
        "Only public",
        "Default (package private), protected and public — but not private",
        "Only private",
        "None of them",
      ],
      correctIndex: 1,
    },
    {
      question: "According to the Summary of Access Modifiers, which modifier allows access from a method/field in a non-superclass class in a different package?",
      options: ["private", "default (package private)", "protected", "public"],
      correctIndex: 3,
    },
    {
      question: "In the homework on Order of Initialization, what is initialized first if there is a superclass?",
      options: [
        "The constructor",
        "The superclass",
        "Instance variable declarations",
        "Static initializers",
      ],
      correctIndex: 1,
    },
  ],
};