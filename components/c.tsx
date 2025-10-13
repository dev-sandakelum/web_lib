export default function CStudyGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Page 1: Selection Control Structures */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">
                Complete Quick Reference | All Topics Covered
              </p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              1. SELECTION CONTROL STRUCTURES
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 if Statement
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`if (condition) {
    statements;
}`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    Executes statements only if condition is <strong>TRUE</strong>
                  </li>
                  <li>Curly braces optional for single statement</li>
                  <li>Condition must be in parentheses</li>
                  <li>Single path execution</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 if-else Statement
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`if (condition) {
    statement1;
} else {
    statement2;
}`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>Executes statement1 if TRUE, statement2 if FALSE</li>
                  <li>Only ONE branch executes</li>
                  <li>else must immediately follow if block</li>
                  <li>Two-way decision making</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Nested if & if-else-if Ladder
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`if (exp1) {
    // code block 1
} else if (exp2) {
    // code block 2
} else if (exp3) {
    // code block 3
} else {
    // default code
}`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    Evaluated <strong>top to bottom</strong>
                  </li>
                  <li>First TRUE condition executes, rest skipped</li>
                  <li>else is optional - acts as default case</li>
                  <li>Best for multiple conditions with priority</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 switch Statement
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`switch (variable) {
    case constant1:
        statements;
        break;
    case constant2:
        statements;
        break;
    default:
        statements;
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-l-4 border-amber-500 rounded-lg p-4 shadow-lg relative">
                <div className="absolute top-2 right-3 text-2xl">⚠️</div>
                <strong className="block text-amber-900 font-bold mb-2 text-sm md:text-base">
                  ⚠️ SWITCH STATEMENT RULES:
                </strong>
                <span className="inline-block px-3 py-1 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full text-xs font-semibold mb-2 shadow">
                  MUST KNOW
                </span>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                  <li>
                    ✓ Case labels must be <strong>UNIQUE constants</strong>
                  </li>
                  <li>
                    ✓ Must be <strong>integral type</strong> (int/char) - NO floats
                  </li>
                  <li>
                    ✓ <strong>break</strong> prevents fall-through to next case
                  </li>
                  <li>
                    ✓ <strong>default</strong> is optional, can be placed anywhere
                  </li>
                  <li>✓ NO relational operators allowed (==, &lt;, &gt;, etc.)</li>
                  <li>✓ Case labels must end with colon (:)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: Repetition Control Structures */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Repetition Control Structures</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              2. REPETITION CONTROL STRUCTURES
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Types of Loops Comparison
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Loop Type</th>
                        <th className="px-3 py-2 text-left font-semibold">Test Location</th>
                        <th className="px-3 py-2 text-left font-semibold">Minimum Execution</th>
                        <th className="px-3 py-2 text-left font-semibold">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>while</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Pre-test (entry controlled)</td>
                        <td className="px-3 py-2 border border-gray-200">0 or more times</td>
                        <td className="px-3 py-2 border border-gray-200">Unknown iterations</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>for</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Pre-test (entry controlled)</td>
                        <td className="px-3 py-2 border border-gray-200">0 or more times</td>
                        <td className="px-3 py-2 border border-gray-200">Known iterations</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>do-while</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Post-test (exit controlled)</td>
                        <td className="px-3 py-2 border border-gray-200">1 or more times</td>
                        <td className="px-3 py-2 border border-gray-200">At least once execution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 while Loop
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`while (condition) {
    statements;
}`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    Tests condition <strong>BEFORE</strong> executing body
                  </li>
                  <li>
                    Variables in condition must be <strong>initialized first</strong>
                  </li>
                  <li>
                    Control variable must be <strong>modified in loop body</strong>
                  </li>
                  <li>May not execute at all if condition is initially false</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 for Loop
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`for (initialization; condition; update) {
    statements;
}`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-l-4 border-blue-500 rounded-lg p-4 shadow-lg mb-3">
                  <strong className="block text-blue-900 font-semibold mb-2 text-sm md:text-base">
                    📋 Execution Order:
                  </strong>
                  <ol className="list-decimal ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                    <li>
                      <strong>Initialization</strong> (executed once only)
                    </li>
                    <li>
                      <strong>Condition</strong> check
                    </li>
                    <li>
                      <strong>Execute body</strong> (if TRUE)
                    </li>
                    <li>
                      <strong>Update</strong> statement
                    </li>
                    <li>Repeat from step 2</li>
                  </ol>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>All three parts optional (but semicolons required)</li>
                  <li>
                    Can declare variable in init: <code className="bg-gray-100 px-1 rounded">for(int i=0; ...)</code>
                  </li>
                  <li>Best when iterations known beforehand</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 do-while Loop
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`do {
    statements;
} while (condition);`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    Tests condition <strong>AFTER</strong> executing body
                  </li>
                  <li>
                    Body executes <strong>AT LEAST ONCE</strong>
                  </li>
                  <li>
                    {"Don't"} forget <strong>semicolon</strong> after while
                  </li>
                  <li>Perfect for menu-driven programs</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-l-4 border-amber-500 rounded-lg p-4 shadow-lg relative">
                <div className="absolute top-2 right-3 text-2xl">⚠️</div>
                <strong className="block text-amber-900 font-bold mb-3 text-sm md:text-base">
                  ⚠️ COUNTER vs SENTINEL CONTROL:
                </strong>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg">
                    <strong className="block text-indigo-600 mb-2 text-sm">Counter-Controlled:</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>Known number of iterations</li>
                      <li>Uses control variable</li>
                      <li>Ex: Print 1 to 100</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong className="block text-purple-600 mb-2 text-sm">Sentinel-Controlled:</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>Unknown iterations</li>
                      <li>Special value terminates</li>
                      <li>Ex: Enter -99 to stop</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Jump Statements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                    <strong className="block text-indigo-600 mb-2 text-sm">break</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                      <li>
                        Exits loop <strong>completely</strong>
                      </li>
                      <li>Goes to first statement after loop</li>
                      <li>Used in switch and loops</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                    <strong className="block text-indigo-600 mb-2 text-sm">continue</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                      <li>
                        Skips <strong>current iteration</strong>
                      </li>
                      <li>Goes to next iteration</li>
                      <li>Used only in loops</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Nested Loops
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 3; j++) {
        // Inner loop completes all iterations
        // for each outer loop iteration
    }
}`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    Use <strong>distinct control variable names</strong>
                  </li>
                  <li>Inner loop completes fully for each outer iteration</li>
                  <li>
                    <strong>Total iterations = outer × inner</strong> (5 × 3 = 15)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3: Functions */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Functions in C</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              3. FUNCTIONS IN C
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Function Components
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`return_type function_name(parameter_list) {
    // local variable declarations
    // function statements
    return value;  // if return_type is not void
}`}
                  </pre>
                </div>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Component</th>
                        <th className="px-3 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>Return Type</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Data type of returned value (void if none)</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>Function Name</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">
                          Unique identifier (follows identifier rules)
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>Parameters</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Input values (optional, comma-separated)</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>Body</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">{"Statements to execute (enclosed in {})"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Three Aspects of Functions
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Aspect</th>
                        <th className="px-3 py-2 text-left font-semibold">Purpose</th>
                        <th className="px-3 py-2 text-left font-semibold">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>1. Declaration</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Inform compiler about function</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">int add(int, int);</code>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>2. Definition</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Actual implementation code</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">{"int add(int a, int b) {...}"}</code>
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>3. Call</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Execute the function</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">result = add(5, 3);</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Function Declaration (Prototype)
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Parameter names are optional
int addNum(int, int);

// Or with parameter names
int addNum(int a, int b);`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    Required if function defined <strong>AFTER main()</strong>
                  </li>
                  <li>Place before main() or at top of program</li>
                  <li>Must match function definition exactly</li>
                  <li>Acts as a promise to the compiler</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Arguments vs Parameters
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                    <strong className="block text-indigo-600 mb-2 text-sm">Arguments (Actual Parameters)</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                      <li>
                        Values passed at <strong>function call</strong>
                      </li>
                      <li>Can be constants, variables, expressions</li>
                      <li>
                        Example: <code className="bg-gray-100 px-1 rounded">add(10, 20)</code>
                      </li>
                      <li>Provide actual data</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                    <strong className="block text-indigo-600 mb-2 text-sm">Parameters (Formal Parameters)</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                      <li>
                        Variables in <strong>function definition</strong>
                      </li>
                      <li>Must be variables only</li>
                      <li>
                        Example: <code className="bg-gray-100 px-1 rounded">int add(int x, int y)</code>
                      </li>
                      <li>Receive the data</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-l-4 border-blue-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-blue-900 font-semibold mb-2 text-sm md:text-base">
                    📌 Key Points:
                  </strong>
                  <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                    <li>First argument matches first parameter</li>
                    <li>{"Arguments and parameters don't need same name"}</li>
                    <li>Number and type must match</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-l-4 border-amber-500 rounded-lg p-4 shadow-lg relative">
                <div className="absolute top-2 right-3 text-2xl">⚠️</div>
                <strong className="block text-amber-900 font-bold mb-3 text-sm md:text-base">
                  ⚠️ FUNCTION RULES - MEMORIZE THESE!
                </strong>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                  <li>✓ Can call any function from any other function</li>
                  <li>✓ Can call a function multiple times</li>
                  <li>✓ Can call itself (recursion)</li>
                  <li>✓ Order of definition ≠ order of calling</li>
                  <li>✓ Every C program must have main()</li>
                  <li>✗ NO function overloading in C</li>
                  <li>✗ Cannot have two functions with same name</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Pass by Value
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`void change(int x) {
    x = 10;  // Changes local copy only
}

int main() {
    int a = 5;
    change(a);
    printf("%d", a);  // Output: 5 (unchanged)
}`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    Function receives <strong>COPY</strong> of argument
                  </li>
                  <li>
                    Original argument <strong>unchanged</strong>
                  </li>
                  <li>Different memory locations for argument and parameter</li>
                  <li>Default method in C for primitive types</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Recursion
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;  // Base case
    else
        return n * factorial(n - 1);  // Recursive call
}`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">
                    ✅ Recursion Requirements:
                  </strong>
                  <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                    <li>
                      Must have a <strong>base case</strong> (stopping condition)
                    </li>
                    <li>Each call must move toward base case</li>
                    <li>Each call creates new memory space</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: Arrays */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Arrays in C</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              4. ARRAYS IN C
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 1D Array Basics
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Declaration
data_type array_name[size];
int marks[5];

// Declaration with initialization
int marks[5] = {10, 20, 30, 40, 50};

// Auto size (compiler counts elements)
int marks[] = {10, 20, 30};`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    <strong>Fixed size</strong>, same data type for all elements
                  </li>
                  <li>
                    Index starts at <strong>0</strong>, ends at <strong>(size-1)</strong>
                  </li>
                  <li>
                    Stored in <strong>continuous memory</strong> locations
                  </li>
                  <li>
                    Access element: <code className="bg-gray-100 px-1 rounded">array_name[index]</code>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-l-4 border-amber-500 rounded-lg p-4 shadow-lg relative">
                <div className="absolute top-2 right-3 text-2xl">⚠️</div>
                <strong className="block text-amber-900 font-bold mb-3 text-sm md:text-base">
                  ⚠️ ARRAY RULES - CRITICAL!
                </strong>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                  <li>✓ Size must be constant or constant expression</li>
                  <li>
                    ✓ <code className="bg-white px-1 rounded">int arr[10] = {"{0}"};</code> initializes all to zero
                  </li>
                  <li>✗ Cannot assign one array to another directly</li>
                  <li>✗ Cannot read/print entire array at once</li>
                  <li>⚠️ Accessing out of bounds causes undefined behavior</li>
                  <li>⚠️ No automatic bounds checking in C</li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Array Operations
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Traversing (printing) array
for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
}

// Input to array
for (int i = 0; i < size; i++) {
    scanf("%d", &arr[i]);
}

// Finding sum
int sum = 0;
for (int i = 0; i < size; i++) {
    sum += arr[i];
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 2D Arrays (Matrices)
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Declaration
data_type array[rows][columns];
int matrix[3][4];  // 3 rows, 4 columns

// Initialization
int x[2][3] = {{1,2,3}, {4,5,6}};

// Auto row size (column size required)
int x[][3] = {{1,2,3}, {4,5,6}};`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700 mb-3">
                  <li>
                    Access element: <code className="bg-gray-100 px-1 rounded">array[row_index][col_index]</code>
                  </li>
                  <li>
                    Stored <strong>row-wise</strong> in memory
                  </li>
                  <li>
                    Need <strong>nested loops</strong> to traverse
                  </li>
                  <li>Row index: 0 to (rows-1), Column index: 0 to (cols-1)</li>
                </ul>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Traversing 2D array
for (int r = 0; r < rows; r++) {
    for (int c = 0; c < cols; c++) {
        printf("%d ", arr[r][c]);
    }
    printf("\\n");  // New line after each row
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Arrays with Functions
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Passing 1D array - three ways
void func(int arr[], int size);
void func(int arr[10]);  // Size optional
void func(int *arr);     // Pointer notation

// Function call
func(myArray);  // No brackets!

// Passing 2D array
void func(int arr[][5], int rows);
// Column size MUST be specified`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">
                    ✅ Important Facts:
                  </strong>
                  <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                    <li>
                      Arrays passed by <strong>reference</strong> (address)
                    </li>
                    <li>
                      Changes inside function <strong>affect original</strong> array
                    </li>
                    <li>Array name = address of first element</li>
                    <li>No & needed when passing array name</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 5: Strings & Key Concepts */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Strings & Key Concepts</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              5. STRINGS IN C
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 String Basics
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Declaration with initialization
char str[20] = "Hello";  // Auto adds '\\0'

// Character array method
char str[] = {'H','e','l','l','o','\\0'};

// Declaration only
char str[20];`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-l-4 border-amber-500 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-2xl">⚠️</div>
                  <strong className="block text-amber-900 font-bold mb-3 text-sm md:text-base">
                    ⚠️ STRING ESSENTIALS:
                  </strong>
                  <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                    <li>
                      {"String = array of characters ending with"} <strong>{`'\\0'`}</strong>
                    </li>
                    <li>
                      Null character <strong>{`'\\0'`}</strong> marks end of string
                    </li>
                    <li>
                      Must allocate <strong>+1 space</strong> for {`'\\0'`}
                    </li>
                    <li>{`"Hello" needs 6 bytes (5 chars + 1 for '\\0')`}</li>
                  </ul>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 String Input/Output
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`char name[50];

// Using scanf (stops at whitespace)
scanf("%s", name);  // No & needed!
printf("%s", name);

// Using gets/puts (reads whole line)
gets(name);   // Reads line with spaces
puts(name);   // Prints with newline`}
                  </pre>
                </div>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-700">
                  <li>
                    <code className="bg-gray-100 px-1 rounded">scanf()</code> stops at first space/tab/newline
                  </li>
                  <li>
                    <code className="bg-gray-100 px-1 rounded">gets()</code> reads entire line including spaces
                  </li>
                  <li>
                    <code className="bg-gray-100 px-1 rounded">puts()</code> automatically adds newline
                  </li>
                  <li>
                    No <strong>&</strong> operator needed for string input
                  </li>
                </ul>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 String Functions (string.h)
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Function</th>
                        <th className="px-3 py-2 text-left font-semibold">Purpose</th>
                        <th className="px-3 py-2 text-left font-semibold">Example</th>
                        <th className="px-3 py-2 text-left font-semibold">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">strlen(s1)</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Get string length</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">{`strlen("Hi")`}</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">{`2 (excludes '\\0')`}</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">strcpy(s1, s2)</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Copy s2 to s1</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">{`strcpy(dest, "Hi")`}</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">{`dest = "Hi"`}</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">strcmp(s1, s2)</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Compare strings</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">{`strcmp("A", "B")`}</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">&lt; 0 (A before B)</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">strcat(s1, s2)</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Concatenate</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">{`strcat("Hi", "!")`}</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">{`"Hi!"`}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-l-4 border-blue-500 rounded-lg p-4 shadow-lg">
                <strong className="block text-blue-900 font-semibold mb-3 text-sm md:text-base">
                  📌 strcmp() RETURNS - MEMORIZE THIS!
                </strong>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800 mb-3">
                  <li>
                    <strong>0</strong> → Strings are equal
                  </li>
                  <li>
                    <strong>&lt; 0</strong> (negative) → s1 comes before s2 alphabetically
                  </li>
                  <li>
                    <strong>&gt; 0</strong> (positive) → s1 comes after s2 alphabetically
                  </li>
                </ul>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`strcmp("apple", "banana")  // Returns < 0
strcmp("cat", "cat")      // Returns 0
strcmp("zebra", "ant")    // Returns > 0`}
                  </pre>
                </div>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 mt-8 border-l-4 border-white/30">
              6. IMPORTANT CONCEPTS
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Logical Operators
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Operator</th>
                        <th className="px-3 py-2 text-left font-semibold">Meaning</th>
                        <th className="px-3 py-2 text-left font-semibold">Example</th>
                        <th className="px-3 py-2 text-left font-semibold">True When</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">&&</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">AND</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">(a &gt; 5 && b &lt; 10)</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Both conditions true</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">||</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">OR</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">(a == 0 || b == 0)</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">At least one true</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">!</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">NOT</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">!(a &gt; b)</code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Reverses condition</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Common Errors to Avoid
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-red-500">
                    <strong className="block text-red-700 mb-2 text-sm">❌ WRONG</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                      <li>
                        <code className="bg-gray-100 px-1 rounded">if (x = 5)</code> Assignment!
                      </li>
                      <li>Forgetting break in switch</li>
                      <li>
                        <code className="bg-gray-100 px-1 rounded">arr[10]</code> for size 10
                      </li>
                      <li>Infinite loop (no update)</li>
                      <li>Missing ; after do-while</li>
                      <li>Float in switch case</li>
                      <li>
                        <code className="bg-gray-100 px-1 rounded">printf("%d", arr)</code>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-green-500">
                    <strong className="block text-green-700 mb-2 text-sm">✅ CORRECT</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                      <li>
                        <code className="bg-gray-100 px-1 rounded">if (x == 5)</code> Comparison
                      </li>
                      <li>Always use break</li>
                      <li>
                        <code className="bg-gray-100 px-1 rounded">arr[9]</code> (0 to 9)
                      </li>
                      <li>Update control variable</li>
                      <li>
                        <code className="bg-gray-100 px-1 rounded">{`} while (cond);`}</code>
                      </li>
                      <li>Only int/char allowed</li>
                      <li>
                        <code className="bg-gray-100 px-1 rounded">printf("%d", arr[i])</code>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 When to Use Which Loop?
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Loop</th>
                        <th className="px-3 py-2 text-left font-semibold">Use When</th>
                        <th className="px-3 py-2 text-left font-semibold">Example Scenario</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>for</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Known iterations</td>
                        <td className="px-3 py-2 border border-gray-200">Print 1 to 100, traverse array</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>while</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Unknown iterations, may not execute</td>
                        <td className="px-3 py-2 border border-gray-200">Read until EOF, validate input</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">
                          <strong>do-while</strong>
                        </td>
                        <td className="px-3 py-2 border border-gray-200">Must execute at least once</td>
                        <td className="px-3 py-2 border border-gray-200">Menu display, get valid input</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 6: Practice Problems */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Practice Problems & Solutions</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              7. PRACTICE PROBLEMS
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 1: Output Prediction (While Loop)
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int x = 1, y = 0;
while (x <= 5) {
    ++x;
    y++;
    printf("%d ", x * y);
}`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">✅ Output:</strong>
                  <p className="text-xs md:text-sm text-gray-800 mb-2">2 6 12 20 30</p>
                  <strong className="block text-green-900 font-semibold mb-1 text-xs md:text-sm">Explanation:</strong>
                  <div className="text-xs text-gray-800 space-y-1">
                    <p>• Iteration 1: x=2, y=1 → 2×1 = 2</p>
                    <p>• Iteration 2: x=3, y=2 → 3×2 = 6</p>
                    <p>• Iteration 3: x=4, y=3 → 4×3 = 12</p>
                    <p>• Iteration 4: x=5, y=4 → 5×4 = 20</p>
                    <p>• Iteration 5: x=6, y=5 → 6×5 = 30</p>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 2: Switch Statement (Fall-through)
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int n = 6;
switch (n) {
    case 24: printf("A");
    case 6:  printf("B");
             break;
    case 7:  printf("C");
    case 5:  printf("D");
    default: printf("E");
}`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">
                    ✅ Outputs for different values:
                  </strong>
                  <div className="text-xs md:text-sm text-gray-800 space-y-1">
                    <p>
                      • n = 6 → <strong>B</strong> (matches, breaks)
                    </p>
                    <p>
                      • n = 24 → <strong>AB</strong> (falls through to 6)
                    </p>
                    <p>
                      • n = 7 → <strong>CDE</strong> (no break, falls through)
                    </p>
                    <p>
                      • n = 5 → <strong>DE</strong> (falls through to default)
                    </p>
                    <p>
                      • n = 9 → <strong>E</strong> (default only)
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 3: Nested Loop Pattern
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 5; j++) {
        printf("*");
    }
    printf("\\n");
}`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">✅ Output:</strong>
                  <pre className="text-xs md:text-sm text-gray-800 mb-2 font-mono">
                    {`*****
*****
*****`}
                  </pre>
                  <strong className="block text-green-900 font-semibold mb-1 text-xs md:text-sm">Explanation:</strong>
                  <p className="text-xs text-gray-800">Outer loop (3 rows) × Inner loop (5 stars) = 3×5 rectangle</p>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 4: Array Even Index Multiplication
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int arr[] = {5, 2, 4, 9, 6, 3, 9, 8, 1, 7};
int result = arr[0];
for (int i = 2; i < 10; i += 2) {
    result *= arr[i];
}`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">✅ Result:</strong>
                  <p className="text-xs md:text-sm text-gray-800 mb-2">1080</p>
                  <strong className="block text-green-900 font-semibold mb-1 text-xs md:text-sm">Calculation:</strong>
                  <p className="text-xs text-gray-800">arr[0] × arr[2] × arr[4] × arr[6] × arr[8]</p>
                  <p className="text-xs text-gray-800">
                    = 5 × 4 × 6 × 9 × 1 = <strong>1080</strong>
                  </p>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 5: Pass by Value
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`void change(int x) {
    x = 10;
}
int main() {
    int a = 5;
    change(a);
    printf("%d", a);
    return 0;
}`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">✅ Output:</strong>
                  <p className="text-xs md:text-sm text-gray-800 mb-2">5</p>
                  <strong className="block text-green-900 font-semibold mb-1 text-xs md:text-sm">Reason:</strong>
                  <p className="text-xs text-gray-800">
                    {"Pass by value means only a copy is changed. Original 'a' remains 5."}
                  </p>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 6: String Length
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`char str[] = "Hello World";
printf("Length: %d", strlen(str));`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">✅ Output:</strong>
                  <p className="text-xs md:text-sm text-gray-800 mb-2">Length: 11</p>
                  <strong className="block text-green-900 font-semibold mb-1 text-xs md:text-sm">Note:</strong>
                  <p className="text-xs text-gray-800">{`strlen() counts characters excluding '\\0'`}</p>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 7: Do-While Execution
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int i = 10;
do {
    printf("%d ", i);
    i++;
} while (i < 10);`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">✅ Output:</strong>
                  <p className="text-xs md:text-sm text-gray-800 mb-2">10</p>
                  <strong className="block text-green-900 font-semibold mb-1 text-xs md:text-sm">Reason:</strong>
                  <p className="text-xs text-gray-800">
                    Body executes once before condition is checked, even though i &lt; 10 is false
                  </p>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  Problem 8: 2D Array Access
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 mb-3 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
printf("%d", matrix[1][2]);`}
                  </pre>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-2 text-sm md:text-base">✅ Output:</strong>
                  <p className="text-xs md:text-sm text-gray-800 mb-2">6</p>
                  <strong className="block text-green-900 font-semibold mb-1 text-xs md:text-sm">Explanation:</strong>
                  <p className="text-xs text-gray-800">Row 1 (second row), Column 2 (third column) = 6</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 7: Advanced Examples */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Advanced Examples & Patterns</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              8. COMMON CODE PATTERNS
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Finding Maximum in Array
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int max = arr[0];  // Assume first is max
for (int i = 1; i < size; i++) {
    if (arr[i] > max)
        max = arr[i];
}
printf("Maximum: %d", max);`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Counting Even/Odd Numbers
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int even = 0, odd = 0;
for (int i = 0; i < size; i++) {
    if (arr[i] % 2 == 0)
        even++;
    else
        odd++;
}
printf("Even: %d, Odd: %d", even, odd);`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Sum and Average
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int sum = 0;
for (int i = 0; i < size; i++) {
    sum += arr[i];
}
float avg = sum / (float)size;  // Cast to float!
printf("Average: %.2f", avg);`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Matrix Addition
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// C = A + B
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        C[i][j] = A[i][j] + B[i][j];
    }
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Printing Star Patterns
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Right triangle pattern
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        printf("*");
    }
    printf("\\n");
}
/* Output:
*
**
***
****
*****
*/`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Factorial (Iterative)
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int factorial(int n) {
    int fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Factorial (Recursive)
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;  // Base case
    return n * factorial(n - 1);  // Recursive call
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Grade Calculator Function
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`char getGrade(int score) {
    if (score > 100 || score < 0)
        return 'Z';
    else if (score >= 87)
        return 'A';
    else if (score >= 74)
        return 'B';
    else if (score >= 60)
        return 'C';
    else if (score >= 50)
        return 'D';
    else
        return 'Z';
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Sentinel-Controlled Input
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int number, sum = 0, count = 0;
printf("Enter numbers (-99 to stop): ");
scanf("%d", &number);

while (number != -99) {
    sum += number;
    count++;
    scanf("%d", &number);
}

if (count > 0)
    printf("Average: %.2f", sum/(float)count);
else
    printf("No numbers entered");`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Linear Search in Array
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int search(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key)
            return i;  // Return index if found
    }
    return -1;  // Return -1 if not found
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 8: Final Review */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Final Review & Quick Reference</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              9. SYNTAX QUICK REFERENCE
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn overflow-x-auto rounded-lg shadow-lg">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                      <th className="px-3 py-2 text-left font-semibold">Concept</th>
                      <th className="px-3 py-2 text-left font-semibold">Syntax</th>
                      <th className="px-3 py-2 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">Array Declaration</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">int arr[10];</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Size must be constant</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">Array Init</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">{`int arr[5] = {1,2,3,4,5};`}</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Can omit size</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">2D Array</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">int m[3][4];</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">3 rows, 4 columns</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">String</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">{`char str[20] = "Hi";`}</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">{`Auto adds '\\0'`}</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">Function Prototype</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">int func(int, float);</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Before main()</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">For Loop</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">{`for (i=0; i<n; i++) {...}`}</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Three parts</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">While Loop</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">{`while (cond) {...}`}</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Pre-test</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">Do-While</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">{`do {...} while (cond);`}</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Post-test</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">If-Else</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">{`if (cond) {...} else {...}`}</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Two-way branch</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100 transition-colors">
                      <td className="px-3 py-2 border border-gray-200">Switch</td>
                      <td className="px-3 py-2 border border-gray-200">
                        <code className="bg-gray-100 px-1 rounded">{`switch (var) {case c: ...}`}</code>
                      </td>
                      <td className="px-3 py-2 border border-gray-200">Need break</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-l-4 border-amber-500 rounded-lg p-4 shadow-lg relative">
                <div className="absolute top-2 right-3 text-2xl">⚠️</div>
                <strong className="block text-amber-900 font-bold mb-3 text-sm md:text-base">
                  🔥 LAST MINUTE REMINDERS - READ BEFORE QUIZ!
                </strong>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg">
                    <strong className="block text-indigo-600 mb-2 text-xs md:text-sm">Arrays & Strings</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>Index: 0 to (size-1)</li>
                      <li>{`String needs '\\0'`}</li>
                      <li>No & for array/string in scanf</li>
                      <li>Out of bounds = undefined</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong className="block text-purple-600 mb-2 text-xs md:text-sm">Loops & Control</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>break = exit loop</li>
                      <li>continue = skip iteration</li>
                      <li>do-while min 1 execution</li>
                      <li>Nested: inner × outer</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong className="block text-amber-600 mb-2 text-xs md:text-sm">Functions</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>Pass by value: copy</li>
                      <li>Recursion needs base case</li>
                      <li>Prototype if after main()</li>
                      <li>No overloading in C</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <strong className="block text-green-600 mb-2 text-xs md:text-sm">Switch & Comparison</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>Only int/char, no float</li>
                      <li>Break to avoid fall-through</li>
                      <li>strcmp: 0 = equal</li>
                      <li>== not = for comparison</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Final Checklist Before Quiz
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg">
                    <strong className="block text-green-900 mb-3 text-xs md:text-sm">✅ Can You Do These?</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>Trace loop outputs?</li>
                      <li>Predict switch behavior?</li>
                      <li>Access array elements?</li>
                      <li>Write function syntax?</li>
                      <li>Identify pass by value effects?</li>
                      <li>Understand nested loops?</li>
                      <li>Work with 2D arrays?</li>
                      <li>Use string functions?</li>
                      <li>Write recursion?</li>
                      <li>Know break vs continue?</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-lg">
                    <strong className="block text-amber-900 mb-3 text-xs md:text-sm">⚡ Quick Memory Aids</strong>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800">
                      <li>for = Known iterations</li>
                      <li>while = Unknown, may skip</li>
                      <li>do-while = At least once</li>
                      <li>{`strlen = Excludes '\\0'`}</li>
                      <li>strcmp: 0, &lt;0, &gt;0</li>
                      <li>Array name = address</li>
                      <li>switch: int/char only</li>
                      <li>Recursion = base + call</li>
                      <li>2D: [row][col]</li>
                      <li>Pre-test vs Post-test</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Common Quiz Question Types
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">#</th>
                        <th className="px-3 py-2 text-left font-semibold">Question Type</th>
                        <th className="px-3 py-2 text-left font-semibold">What to Focus On</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">1</td>
                        <td className="px-3 py-2 border border-gray-200">Output Prediction</td>
                        <td className="px-3 py-2 border border-gray-200">
                          Trace code line by line, track variable values
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">2</td>
                        <td className="px-3 py-2 border border-gray-200">Error Detection</td>
                        <td className="px-3 py-2 border border-gray-200">
                          Look for syntax errors, logic errors, array bounds
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">3</td>
                        <td className="px-3 py-2 border border-gray-200">Fill in Blanks</td>
                        <td className="px-3 py-2 border border-gray-200">Know exact syntax, semicolons, parentheses</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">4</td>
                        <td className="px-3 py-2 border border-gray-200">Function Writing</td>
                        <td className="px-3 py-2 border border-gray-200">Return type, parameters, return statement</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">5</td>
                        <td className="px-3 py-2 border border-gray-200">True/False</td>
                        <td className="px-3 py-2 border border-gray-200">Conceptual understanding, special cases</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">6</td>
                        <td className="px-3 py-2 border border-gray-200">Multiple Choice</td>
                        <td className="px-3 py-2 border border-gray-200">Eliminate wrong answers, test edge cases</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-l-4 border-blue-500 rounded-lg p-4 shadow-lg">
                <strong className="block text-blue-900 font-semibold mb-3 text-sm md:text-base">
                  📚 Study Strategy:
                </strong>
                <ol className="list-decimal ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                  <li>Read through all pages once quickly (30 mins)</li>
                  <li>Focus on yellow/orange highlighted boxes (15 mins)</li>
                  <li>Practice tracing the example problems (20 mins)</li>
                  <li>Review syntax quick reference table (10 mins)</li>
                  <li>Test yourself with practice problems (15 mins)</li>
                  <li>Final review of last minute reminders (10 mins)</li>
                </ol>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-2">🎓 GOOD LUCK ON YOUR QUIZ! 🎓</h2>
                <p className="text-sm md:text-base mb-2">Stay Calm • Read Carefully • Double Check Your Answers</p>
                <p className="text-xs md:text-sm opacity-80">Remember: Understanding &gt; Memorization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 9: Bonus Tips */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-400" />

          <div className="p-6 md:p-10">
            <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                📚 C PROGRAMMING QUIZ STUDY GUIDE
              </h1>
              <p className="text-sm md:text-base text-white/95 tracking-wide">Bonus Tips & Tricky Concepts</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-3 rounded-lg shadow-lg mb-6 border-l-4 border-white/30">
              10. TRICKY CONCEPTS & COMMON MISTAKES
            </h2>

            <div className="space-y-6">
              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Operator Precedence (Important!)
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Priority</th>
                        <th className="px-3 py-2 text-left font-semibold">Operators</th>
                        <th className="px-3 py-2 text-left font-semibold">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Highest</td>
                        <td className="px-3 py-2 border border-gray-200">() [] ++ --</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">arr[i++]</code>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">High</td>
                        <td className="px-3 py-2 border border-gray-200">* / %</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">a * b / c</code>
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Medium</td>
                        <td className="px-3 py-2 border border-gray-200">+ -</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">a + b - c</code>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Low</td>
                        <td className="px-3 py-2 border border-gray-200">&lt; &lt;= &gt; &gt;=</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">a &lt; b</code>
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Lower</td>
                        <td className="px-3 py-2 border border-gray-200">== !=</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">a == b</code>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Lowest</td>
                        <td className="px-3 py-2 border border-gray-200">&& || !</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">a && b</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Pre vs Post Increment/Decrement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                    <strong className="block text-indigo-600 mb-2 text-sm">Pre-increment (++i)</strong>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 shadow-lg">
                      <pre className="text-xs text-slate-200 font-mono overflow-x-auto">
                        {`int i = 5;
int x = ++i;
// i becomes 6 first
// then x = 6
// Result: i=6, x=6`}
                      </pre>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                    <strong className="block text-indigo-600 mb-2 text-sm">Post-increment (i++)</strong>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 shadow-lg">
                      <pre className="text-xs text-slate-200 font-mono overflow-x-auto">
                        {`int i = 5;
int x = i++;
// x = 5 first
// then i becomes 6
// Result: i=6, x=5`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Infinite Loop Examples
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Forgot to update control variable
int i = 0;
while (i < 10) {
    printf("%d ", i);
    // Missing i++; causes infinite loop!
}

// Wrong condition
for (int i = 0; i >= 0; i++) {
    // i is always >= 0, infinite!
}

// Semicolon error
while (i < 10);  // Semicolon here!
{
    i++;  // This is separate, not in loop
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Array Initialization Tricks
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`// Initialize all to zero
int arr[10] = {0};  // All elements = 0

// Partial initialization
int arr[5] = {1, 2};  // arr = {1, 2, 0, 0, 0}

// Character array vs String
char arr1[5] = {'H','i'};     // arr1 = {'H','i',0,0,0}
char arr2[5] = "Hi";          // arr2 = {'H','i','\\0',0,0}

// 2D array partial init
int mat[3][3] = {{1}, {2}, {3}};
// Row 0: {1, 0, 0}
// Row 1: {2, 0, 0}
// Row 2: {3, 0, 0}`}
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-amber-200 border-l-4 border-amber-500 rounded-lg p-4 shadow-lg relative">
                <div className="absolute top-2 right-3 text-2xl">⚠️</div>
                <strong className="block text-amber-900 font-bold mb-3 text-sm md:text-base">
                  ⚠️ TRICKY QUIZ SCENARIOS:
                </strong>
                <div className="bg-white p-4 rounded-lg">
                  <strong className="block text-red-700 mb-3 text-xs md:text-sm">🎯 {"What's"} the Output?</strong>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 mb-3 shadow-lg">
                    <pre className="text-xs text-slate-200 font-mono overflow-x-auto">
                      {`int arr[5], i;
for (i = 0; i <= 5; i++)  // Error! Should be i < 5
    arr[i] = i * 2;       // arr[5] is out of bounds!`}
                    </pre>
                  </div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 mb-3 shadow-lg">
                    <pre className="text-xs text-slate-200 font-mono overflow-x-auto">
                      {`int x = 5;
if (x = 10)               // Assignment, not comparison!
    printf("Equal");      // Always prints (10 is true)
else
    printf("Not Equal");`}
                    </pre>
                  </div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 shadow-lg">
                    <pre className="text-xs text-slate-200 font-mono overflow-x-auto">
                      {`char str[5] = "Hello";    // Error! Needs 6 chars
// "Hello" = 'H','e','l','l','o','\\0' = 6 bytes!`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Scope and Lifetime
                </h3>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-lg relative">
                  <div className="absolute top-2 right-3 text-xs font-semibold text-slate-500">C</div>
                  <pre className="text-xs md:text-sm text-slate-200 font-mono overflow-x-auto">
                    {`int global = 10;  // Global scope

void func() {
    int local = 5;  // Local to func()
    printf("%d", global);  // Can access global
}

int main() {
    int local = 20;  // Different local variable
    printf("%d", local);     // Prints 20
    // printf("%d", func.local); // Error! Can't access
    func();
    return 0;
}`}
                  </pre>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Common scanf/printf Mistakes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-red-500">
                    <strong className="block text-red-700 mb-2 text-sm">❌ WRONG</strong>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 shadow-lg">
                      <pre className="text-xs text-slate-200 font-mono overflow-x-auto">
                        {`// Missing &
int x;
scanf("%d", x);

// Wrong format
float f = 3.14;
printf("%d", f);

// Array name with &
char str[20];
scanf("%s", &str);`}
                      </pre>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border-2 border-green-500">
                    <strong className="block text-green-700 mb-2 text-sm">✅ CORRECT</strong>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 shadow-lg">
                      <pre className="text-xs text-slate-200 font-mono overflow-x-auto">
                        {`// Correct &
int x;
scanf("%d", &x);

// Correct format
float f = 3.14;
printf("%f", f);

// No & for array
char str[20];
scanf("%s", str);`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Format Specifiers Quick Reference
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Data Type</th>
                        <th className="px-3 py-2 text-left font-semibold">scanf</th>
                        <th className="px-3 py-2 text-left font-semibold">printf</th>
                        <th className="px-3 py-2 text-left font-semibold">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">int</td>
                        <td className="px-3 py-2 border border-gray-200">%d</td>
                        <td className="px-3 py-2 border border-gray-200">%d</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">printf("%d", 10);</code>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">float</td>
                        <td className="px-3 py-2 border border-gray-200">%f</td>
                        <td className="px-3 py-2 border border-gray-200">%f or %.2f</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">printf("%.2f", 3.14);</code>
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">double</td>
                        <td className="px-3 py-2 border border-gray-200">%lf</td>
                        <td className="px-3 py-2 border border-gray-200">%lf or %.2lf</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">scanf("%lf", &d);</code>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">char</td>
                        <td className="px-3 py-2 border border-gray-200">%c</td>
                        <td className="px-3 py-2 border border-gray-200">%c</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">{`printf("%c", 'A');`}</code>
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">string</td>
                        <td className="px-3 py-2 border border-gray-200">%s</td>
                        <td className="px-3 py-2 border border-gray-200">%s</td>
                        <td className="px-3 py-2 border border-gray-200">
                          <code className="bg-gray-100 px-1 rounded">scanf("%s", str);</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Debugging Tips for Quiz
                </h3>
                <div className="bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-500 rounded-lg p-4 shadow-lg">
                  <strong className="block text-green-900 font-semibold mb-3 text-sm md:text-base">
                    ✅ Step-by-Step Code Tracing:
                  </strong>
                  <ol className="list-decimal ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                    <li>
                      <strong>Initialize:</strong> Write down initial values of all variables
                    </li>
                    <li>
                      <strong>Trace:</strong> Go through each line, update variable values
                    </li>
                    <li>
                      <strong>Conditions:</strong> Evaluate boolean expressions carefully
                    </li>
                    <li>
                      <strong>Loops:</strong> Track iteration count and variable changes
                    </li>
                    <li>
                      <strong>Output:</strong> Write what prints at each printf statement
                    </li>
                  </ol>
                </div>
              </div>

              <div className="animate-fadeIn">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white border-l-4 border-indigo-500 rounded shadow-sm">
                  🔹 Edge Cases to Remember
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                        <th className="px-3 py-2 text-left font-semibold">Scenario</th>
                        <th className="px-3 py-2 text-left font-semibold">What Happens</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Empty array loop</td>
                        <td className="px-3 py-2 border border-gray-200">for(i=0; i&lt;0; i++) → Never executes</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Single element array</td>
                        <td className="px-3 py-2 border border-gray-200">arr[1] has only index 0</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Empty string</td>
                        <td className="px-3 py-2 border border-gray-200">{`char str[] = ""; → Just '\\0'`}</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Division by zero</td>
                        <td className="px-3 py-2 border border-gray-200">Runtime error / undefined behavior</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="px-3 py-2 border border-gray-200">Modulo negative</td>
                        <td className="px-3 py-2 border border-gray-200">-5 % 3 → Implementation dependent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-l-4 border-blue-500 rounded-lg p-4 shadow-lg">
                <strong className="block text-blue-900 font-semibold mb-3 text-sm md:text-base">
                  💡 PRO TIPS FOR QUIZ SUCCESS:
                </strong>
                <ul className="list-disc ml-6 space-y-1 text-xs md:text-sm text-gray-800">
                  <li>
                    <strong>Read Twice:</strong> Read question completely before answering
                  </li>
                  <li>
                    <strong>Check Semicolons:</strong> Most common syntax error
                  </li>
                  <li>
                    <strong>Trace Mentally:</strong> Run code in your head for output questions
                  </li>
                  <li>
                    <strong>Count Carefully:</strong> Array indices, loop iterations
                  </li>
                  <li>
                    <strong>Watch for Tricks:</strong> = vs ==, ; after loop condition
                  </li>
                  <li>
                    <strong>Check Edge Cases:</strong> Empty, first, last elements
                  </li>
                  <li>
                    <strong>Time Management:</strong> {"Don't"} spend too long on one question
                  </li>
                  <li>
                    <strong>Review Answers:</strong> If time permits, double-check
                  </li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-2">✨ {"YOU'VE"} GOT THIS! ✨</h2>
                <p className="text-sm md:text-base mb-2">Review • Practice • Confidence = Success</p>
                <p className="text-xs md:text-sm opacity-80">Trust Your Preparation!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
