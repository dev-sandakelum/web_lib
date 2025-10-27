"use client"

import { useState, useEffect } from "react"
import { Play, Pause, RotateCcw, ChevronDown, ChevronUp, Lock } from "lucide-react"

const DVSPresentation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordInput, setPasswordInput] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [activeSection, setActiveSection] = useState("overview")
  const [timerSeconds, setTimerSeconds] = useState(120)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1)
      }, 1000)
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timerSeconds])

const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (passwordInput === "dvsadmin") {
        setIsAuthenticated(true)
        setPasswordError("")
        setPasswordInput("")
    } else {
        setPasswordError("Invalid password. Please try again.")
        setPasswordInput("")
    }
}

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-full">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">DVS Presentation</h1>
          <p className="text-center text-gray-600 mb-8">Enter password to access the presentation</p>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
                autoFocus
              />
            </div>

            {passwordError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{passwordError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              Access Presentation
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">ICT1142 - Programming Practicum | Group 01</p>
        </div>
      </div>
    )
  }

const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
}

  const getTimerColor = () => {
    if (timerSeconds <= 30) return "text-red-600"
    if (timerSeconds <= 60) return "text-orange-500"
    return "text-blue-600"
  }

interface QA {
    q: string
    a: string
}

interface Stats {
    files: number | string
    lines: number | string
    commits: number | string
    functions?: number | string
}

interface TeamMember {
    id: string
    name: string
    tg: string
    role: string
    focus: string
    email: string
    contributions: string[]
    stats: Stats
    questions: QA[]
}

interface Section {
    id: string
    label: string
    icon: string
}

const toggleQuestion = (id: string): void => {
    // use functional update to avoid stale closures and keep types explicit
    setExpandedQuestion((prev: string | null) => (prev === id ? null : id))
}

  const teamMembers = [
    {
      id: "hasitha",
      name: "Hasitha Sandakelum",
      tg: "TG/2024/2073",
      role: "Lead Developer",
      focus: "Core Architecture & File Management",
      email: "dev.sandakelum@gmail.com",
      contributions: [
        "System Architecture Design",
        "File Management System",
        "Utility Library Development",
        "Registration Module",
        "Session Management",
      ],
      stats: { files: 11, lines: "2.2K", commits: 42, functions: "57+" },
      questions: [
        {
          q: "What was your primary role in this project?",
          a: "I served as the Lead Developer, focusing on core architecture and file management. I designed the overall system structure with modular file organization, ensuring clear separation between UI, business logic, and data layers."
        },
        {
          q: "How did you implement the file management system?",
          a: "I created comprehensive file handling modules including file_handle_register.c, file_handle_session.c, and file_handle_administrator.c. These modules handle all CRUD operations on users, candidates, votes, and system configuration data using a CSV-based approach."
        },
        {
          q: "Explain the session management implementation.",
          a: "I implemented a cookie-based session persistence system using login_save.txt file. When a user logs in, their NIC is stored in this file. On program restart, the system checks this file and automatically authenticates the user, providing seamless experience across sessions."
        },
        {
          q: "What is the purpose of fun.h?",
          a: "fun.h is a utility header file I created containing reusable functions used throughout the system. It includes screen management functions like clear_screen and top_bar, text formatting with color_text and lines, and common operations that enhance modularity and maintainability."
        },
        {
          q: "How does the registration module validate NICs?",
          a: "The registration module performs multi-stage validation: first checking if the NIC is exactly 12 digits, then verifying each character is numeric, and finally checking the database to prevent duplicate registrations. It also includes age verification by calculating from birth year."
        },
        {
          q: "What modular design patterns did you use?",
          a: "I used a layered architecture with clear separation of concerns. The presentation layer handles UI, the business logic layer contains core functionality in separate .c files, and the data access layer encapsulates all file operations. This allows independent development and easier debugging."
        },
        {
          q: "How do you handle file I/O errors?",
          a: "Every file operation includes error checking. I ensure files are opened successfully before operations, use consistent error return codes, and always close file handles before returning. This pattern prevents data corruption and resource leaks."
        },
        {
          q: "Explain the data persistence strategy.",
          a: "We use a file-based CSV approach for data persistence. Each data type has its own file: users.txt for voters, candidates.txt for candidates, votes.txt for cast votes, and parties.txt for political parties. This provides transparent, human-readable storage suitable for our project scope."
        },
        {
          q: "What was the biggest challenge in file management?",
          a: "The biggest challenge was updating user status after voting without corrupting data. Since CSV files have variable line lengths, I couldn't directly overwrite. I solved this by reading all users into memory, deleting the file, and rewriting with the updated status."
        },
        {
          q: "How does the system ensure data integrity?",
          a: "Data integrity is maintained through multiple validation layers: NIC format checking, duplicate prevention, age verification, and status tracking. File operations use complete read-write cycles for updates, and all functions return status codes for error handling."
        },
        {
          q: "What is your approach to error handling?",
          a: "I implemented comprehensive error handling with meaningful return codes. Functions return 1 for success, 0 for logical failures, and 2 for system errors. Error messages are displayed in red using color_text, and users are given options to retry or exit."
        },
        {
          q: "How did you coordinate with team members?",
          a: "As Lead Developer, I established coding standards for consistency, managed Git workflow with branches, facilitated regular progress meetings, and resolved integration conflicts. I also created the main index.c file that coordinates all modules."
        },
        {
          q: "Explain the system's architecture.",
          a: "The architecture follows a three-layer model: Presentation layer with console UI and ANSI colors, Business logic layer with specialized modules for registration, login, voting, and results, and Data access layer handling all file operations. This promotes maintainability and scalability."
        },
        {
          q: "What security features did you implement?",
          a: "I implemented NIC-based authentication, session persistence with automatic login, password confirmation during registration, and status-based access control preventing duplicate voting. The administrative panel requires separate password authentication."
        },
        {
          q: "How does the color system work?",
          a: "The color_text function in fun.h uses ANSI escape codes to render colors in the terminal. It accepts an integer parameter: 0 for white, 1 for red, 2 for green, etc. This enhances user experience by providing visual feedback for errors, success messages, and party identification."
        },
        {
          q: "What is the purpose of top_bar function?",
          a: "The top_bar function provides consistent screen management across the application. It clears the screen, displays decorative lines, shows the system title 'SRI LANKA PARLIAMENTARY ELECTION SYSTEM', and adds separator lines. This creates a professional, uniform appearance throughout the system."
        },
        {
          q: "How do you prevent duplicate registrations?",
          a: "The check_nic_exists function opens users.txt, reads each line, extracts the NIC using strtok, and compares it with the input NIC. If a match is found, it returns 1 to indicate the NIC already exists. The registration module then displays an error and allows retry or exit."
        },
        {
          q: "Explain the find_nic function.",
          a: "The find_nic function searches for a specific NIC in users.txt. When found, it returns the entire user record as a string using strdup. This allows other modules to retrieve full user information without exposing file operations, promoting encapsulation."
        },
        {
          q: "What is the exit_to function used for?",
          a: "exit_to is a utility function that prompts the user to press enter before returning to the menu. It prevents the screen from clearing immediately after displaying information, giving users time to read messages. This improves user experience by controlling screen flow."
        },
        {
          q: "How does save_user_as_voter work?",
          a: "It opens users.txt in append mode, formats the user data as 'NIC,Name,Password,Age,Matara,ACTIVE', writes it to the file, and closes the handle. The function returns 1 on success or 0 if the file couldn't be opened, allowing error handling by the caller."
        },
        {
          q: "Explain save_user_as_candidate functionality.",
          a: "This function first counts existing candidates to generate a unique ID, then appends the new candidate record with format 'ID,NIC,Name,Password,Age,District,Party'. It uses rewind to count lines without closing the file, ensuring efficient operation."
        },
        {
          q: "What is the clear_screen implementation?",
          a: "clear_screen checks the operating system by testing if 'ver' command succeeds (Windows), then executes 'cls' for Windows or 'clear' for Unix/Linux. This cross-platform approach ensures the screen clearing works correctly regardless of the environment."
        },
        {
          q: "How do you handle password confirmation?",
          a: "During registration, the system prompts for password twice. It uses strcmp to compare both inputs. If they don't match, pass_attempt increments and the user gets up to 3 attempts. After 3 failures, registration terminates to prevent frustration and ensure password accuracy."
        },
        {
          q: "What is the purpose of the lines function?",
          a: "The lines function draws decorative separators based on type parameter: type 1 for single dash line, type 2 for line with newlines, type 3 for double equals line, and type 4 for equals with newlines. This standardizes visual formatting across the application."
        },
        {
          q: "How does get_party_by_num work?",
          a: "It's a simple switch statement that converts party numbers (1-5) to party codes: 1 returns 'BP', 2 returns 'GA', 3 returns 'RM', 4 returns 'PF', and 5 returns 'NU'. This provides a centralized mapping between numeric and string party identifiers."
        },
        {
          q: "Explain the success_message function.",
          a: "success_message displays a formatted success message with separator lines above and below. It takes a message string parameter, prints decorative lines, displays the message with a pipe prefix, and adds closing lines. This creates consistent success notification styling."
        },
        {
          q: "What is the try_again function?",
          a: "try_again prompts users with 'Do you want to try again?' offering options 1 for Yes and 0 for No. It returns 0 if user wants to retry or 1 to exit. This provides consistent retry logic throughout the application."
        },
        {
          q: "How does the system handle age verification?",
          a: "The registration module collects year of birth, calculates age as 2025 minus birth year, and checks if age is 18 or greater. If under 18, it displays an error message and terminates registration, enforcing the minimum voting age requirement."
        },
        {
          q: "What is the menu_default_error function?",
          a: "It handles invalid menu selections by clearing the screen, displaying an error header in red, showing 'Invalid choice. Please select a valid option.', and calling exit_to. This provides consistent error feedback when users enter invalid menu options."
        },
        {
          q: "How does good_bye function work?",
          a: "When users exit, good_bye clears the screen, displays the exit header, shows a yellow-colored 'Thank you for using SL Election System! Goodbye!' message, and adds decorative lines. It returns 1 to signal the main loop to terminate."
        },
        {
          q: "Explain the section-based state machine in registration.",
          a: "Registration uses integer section variable to track progress: section 4 for type selection, 5 for district (candidates), 6 for party (candidates), 0 for name, 1 for NIC, 2 for DOB, and 3 for password. This allows forward navigation with validation at each stage."
        },
        {
          q: "What file structure did you establish?",
          a: "I organized the project with index.c as entry point, separate .c files for major features (register, login, vote, results, administrator), dedicated file_handle_*.c files for data operations, fun.h for utilities, and a data/ directory containing all database files."
        },
        {
          q: "How does continue_to differ from exit_to?",
          a: "Both functions pause for user input, but continue_to displays 'Press enter to continue' for mid-process pauses, while exit_to shows 'Press enter to return to menu' for operation completion. This provides context-appropriate prompting."
        },
        {
          q: "What testing strategies did you employ?",
          a: "I conducted iterative testing during development: unit testing each module independently, integration testing after combining modules, edge case testing with invalid inputs, and end-to-end testing of complete workflows. All 58 test cases passed with 100% success rate."
        },
        {
          q: "How would you scale this system?",
          a: "For scaling, I'd migrate from file-based storage to SQLite or MySQL database, implement password hashing for security, add multi-district support with normalized tables, introduce logging for audit trails, and implement backup mechanisms. The modular architecture already supports these enhancements."
        },
        {
          q: "What did you learn from this project?",
          a: "I gained deep understanding of file I/O operations in C, importance of modular architecture, effective team coordination, error handling best practices, and user experience design. The project reinforced the value of planning before coding and the necessity of comprehensive testing."
        },
        {
          q: "How do you ensure code maintainability?",
          a: "I used meaningful variable names, added comprehensive comments, organized code into logical modules, kept functions focused on single responsibilities, used consistent error handling patterns, and created reusable utility functions. This makes the code easy to understand and modify."
        },
        {
          q: "What would you improve in future iterations?",
          a: "I would add input sanitization against buffer overflows, implement encryption for sensitive data, create a GUI version for better accessibility, add comprehensive logging, support multiple simultaneous users with proper locking, and implement automated testing frameworks."
        },
        {
          q: "How does your module integrate with others?",
          a: "My file handling modules provide clean interfaces through function declarations in index.c. Other team members call functions like save_user_as_voter or check_nic_exists without needing to understand file operations. This encapsulation allows independent development and easy integration."
        },
        {
          q: "What is your biggest contribution to the project?",
          a: "My biggest contribution is establishing the foundational architecture that enabled parallel development. By creating the modular structure, file handling layer, and utility functions early, I allowed team members to focus on their specific features while ensuring everything would integrate smoothly."
        }
      ]
    },
    {
      id: "thisagi",
      name: "Thisagi Omethra",
      tg: "TG/2024/2075",
      role: "Team Leader",
      focus: "Authentication & Login System",
      email: "thisagi@example.com",
      contributions: [
        "Authentication System Design",
        "Login Module Implementation",
        "File Operations for Login",
        "Team Coordination",
        "Security Implementation",
      ],
      stats: { files: 2, lines: 97, commits: 14, functions: 5 },
      questions: [
        {
          q: "What were your main responsibilities as Team Leader?",
          a: "As Team Leader, I coordinated project activities, facilitated team meetings, managed Git workflow, ensured coding standards consistency, resolved conflicts between team members, and tracked progress against deadlines. I also developed the authentication and login system."
        },
        {
          q: "How does the login system authenticate users?",
          a: "The login system uses the login_by_pass function which opens users.txt, reads each line, extracts NIC, name, password, and age using sscanf, compares credentials with user input using strcmp, and on success, saves the session and sets user data globally for the application."
        },
        {
          q: "Explain the login_by_pass function parameters.",
          a: "login_by_pass takes three parameters: nic (user's identification), password (authentication credential), and log_type (either 'password' for credential verification or 'session' for automatic login from saved session). The log_type allows bypassing password check for session restoration."
        },
        {
          q: "What is the purpose of save_login_session?",
          a: "save_login_session stores the user's NIC in login_save.txt for session persistence. It deletes any existing session file first, creates a new one, writes the NIC, and closes the file. This enables automatic login when users restart the program."
        },
        {
          q: "How does check_login work?",
          a: "check_login reads login_save.txt to retrieve the stored NIC. If the file doesn't exist or is empty, it returns '0' to indicate no active session. If successful, it trims the newline character and returns the NIC, which is then used for automatic authentication."
        },
        {
          q: "What security measures are in your authentication?",
          a: "Security measures include NIC-based user identification, password validation against stored credentials, session persistence for convenience, error handling for failed authentication attempts, and status checking to prevent unauthorized access. However, passwords are currently stored in plain text."
        },
        {
          q: "How would you improve password security?",
          a: "For improved security, I would implement password hashing using algorithms like bcrypt or SHA-256, add salt to prevent rainbow table attacks, implement password complexity requirements, add account lockout after multiple failed attempts, and encrypt the session file."
        },
        {
          q: "Explain the set_user function.",
          a: "set_user is a global state management function that stores authenticated user data in a global array. It uses strcpy to copy NIC, name, password, and age into user[4][100] array, making this information available throughout the application without passing parameters."
        },
        {
          q: "What challenges did you face in authentication?",
          a: "Main challenges included handling session persistence across program executions, ensuring file was properly closed after authentication, managing global state safely, coordinating with registration module for data format consistency, and implementing secure credential comparison without encryption."
        },
        {
          q: "How does the logout function work?",
          a: "The logout function calls save_login_session with '0' to clear the session file, then resets all entries in the global user array to empty strings using strcpy. This ensures the next program execution won't auto-login and clears sensitive data from memory."
        },
        {
          q: "What is the cookie_msg function?",
          a: "cookie_msg displays a cookie policy notification after successful login, informing users that the application uses cookies (session persistence) to enhance user experience. It's displayed in magenta color to distinguish it from other messages and ensure users are aware of data storage."
        },
        {
          q: "How did you coordinate team Git workflow?",
          a: "I established a branching strategy where each member worked on their feature branch (dvs/TG2024XXXX), conducted code reviews before merging, resolved merge conflicts, ensured all members committed regularly, maintained a clean commit history, and coordinated the final integration into main branch."
        },
        {
          q: "What coding standards did you enforce?",
          a: "I enforced consistent naming conventions, required meaningful variable names, mandated function comments explaining purpose and parameters, standardized error return codes (1=success, 0=failure, 2=error), ensured proper indentation, and required file closure after operations."
        },
        {
          q: "How does login.c integrate with other modules?",
          a: "login.c provides the login_user function called from the main menu, uses file_handle_login.c for data operations, calls fun.h utilities for UI formatting, sets global user state used by vote and other modules, and integrates with session management for persistence."
        },
        {
          q: "Explain the login_user function flow.",
          a: "login_user clears screen, displays login header, prompts for NIC with yellow color, checks for exit (0), prompts for password, validates inputs, calls login_by_pass for authentication, displays success in green or failure in red, shows cookie message on success, and pauses before returning to menu."
        },
        {
          q: "What is the purpose of exit_from_0?",
          a: "exit_from_0 is a utility function that checks if user entered '0' or character '0', which is the universal exit command throughout the application. If detected, it calls exit_to to pause, then returns 1 to signal the calling function to break its loop and return to previous menu."
        },
        {
          q: "How do you handle file opening failures?",
          a: "When fopen returns NULL, indicating file opening failure, login_by_pass returns 2 (system error code). The login_user function detects this, displays 'Error opening user data file' in red, and returns 2 to signal a critical error requiring attention."
        },
        {
          q: "What is the sscanf format string in login?",
          a: "The format string '%[^,],%[^,],%[^,],%[^,]' reads comma-separated values where %[^,] reads all characters until comma. This parses the CSV format of users.txt extracting NIC, name, password, and age into separate variables for comparison."
        },
        {
          q: "How does session-based login differ from password login?",
          a: "Session-based login (log_type='session') skips password comparison, relying on the stored NIC in login_save.txt. Password login requires exact password match. Both call the same login_by_pass function, but session login provides convenience while password login ensures security on first access."
        },
        {
          q: "What happens on failed login?",
          a: "On failed login, the system displays 'Login failed! Invalid NIC or password' in red color, pauses with exit_to allowing user to see the message, then returns to the main menu. Currently, there's no attempt limit, allowing unlimited retries."
        },
        {
          q: "How would you implement multi-factor authentication?",
          a: "I would add email verification during registration, send OTP (one-time password) to email on login, prompt user to enter OTP within time limit, verify OTP matches and hasn't expired, and only then complete authentication. This would require integrating an email service API."
        },
        {
          q: "Explain the global user array structure.",
          a: "The global array user[4][100] has 4 rows for different user attributes: user[0] stores NIC (12 digits), user[1] stores name (up to 100 chars), user[2] stores password, and user[3] stores age. The 100-column size allows storing string data with safety margin."
        },
        {
          q: "What is request_user_password function?",
          a: "request_user_password is a simple getter function that returns user[2], which contains the logged-in user's password. It's used by other modules that need password information without accessing the global array directly, promoting encapsulation."
        },
        {
          q: "How does request_user_age function work?",
          a: "Similar to request_user_password, request_user_age returns user[3] containing the user's age. It's called by the voting module when saving votes to ensure age information is included in the vote record, maintaining data consistency."
        },
        {
          q: "What team challenges did you overcome?",
          a: "I overcame challenges including coordinating schedules for meetings, resolving disagreements on implementation approaches, ensuring code consistency across different coding styles, managing Git merge conflicts, keeping team motivated through 11-week duration, and ensuring equal contribution from all members."
        },
        {
          q: "How did you track project progress?",
          a: "I maintained a task list mapping features to team members, conducted weekly progress reviews in meetings, monitored Git commit frequency, tracked completion of modules against timeline, identified blockers early, and adjusted task allocation when needed to stay on schedule."
        },
        {
          q: "What communication tools did you use?",
          a: "We used WhatsApp for daily communication, Git for code sharing and version control, Google Meet for weekly online meetings, Google Docs for collaborative documentation, and in-person lab sessions for intensive development and debugging sessions."
        },
        {
          q: "How did you ensure quality in authentication?",
          a: "I tested with valid and invalid credentials, verified session persistence across program restarts, checked error handling for missing files, validated password comparison accuracy, tested with special characters in passwords, and conducted code reviews with team members."
        },
        {
          q: "What documentation did you create?",
          a: "I documented the authentication flow with diagrams, wrote function-level comments explaining parameters and return values, created a team coordination guide with Git workflow, maintained meeting minutes documenting decisions, and contributed to the final project report sections."
        },
        {
          q: "How does authentication prevent unauthorized voting?",
          a: "Authentication ensures only registered users can access the voting module. The vote_user function checks if user_nic is NULL or has length less than 12. If not properly authenticated, it displays 'You are not logged in. Please login first' and returns without allowing vote access."
        },
        {
          q: "What is the login attempt limit?",
          a: "Currently, there is no login attempt limit - users can retry indefinitely. For improved security, I would add a counter tracking failed attempts, lock account after 3-5 failures, require CAPTCHA or time delay for account unlock, and log all failed attempts for security monitoring."
        },
        {
          q: "How do you handle concurrent login attempts?",
          a: "The current system doesn't handle concurrent logins as it's designed for single-user console execution. For multi-user support, I would implement file locking mechanisms, session tokens with timestamps, database transactions for ACID properties, and active session management."
        },
        {
          q: "What role did you play in testing?",
          a: "I coordinated testing activities, created test cases for authentication module, conducted integration testing with other modules, organized team testing sessions, documented test results, helped debug issues found during testing, and ensured all authentication scenarios were covered."
        },
        {
          q: "How did you handle team conflicts?",
          a: "I handled conflicts by listening to all perspectives, facilitating open discussion, finding compromise solutions, referring to project requirements for objective decisions, ensuring respect among members, and making final decisions when consensus wasn't possible while explaining rationale."
        },
        {
          q: "What leadership skills did you develop?",
          a: "I developed communication skills through team coordination, decision-making abilities when resolving conflicts, time management for tracking deadlines, delegation skills for task assignment, motivation techniques to keep team engaged, and conflict resolution through diplomatic problem-solving."
        },
        {
          q: "How did you ensure equal contribution?",
          a: "I assigned tasks based on individual strengths, monitored commit frequency on Git, reviewed code contributions in meetings, discussed challenges members faced, redistributed work when needed, recognized contributions publicly, and documented individual efforts for the final report."
        },
        {
          q: "What would you do differently as leader?",
          a: "I would establish clearer milestones from the start, implement more formal code review process, schedule more frequent short check-ins rather than long weekly meetings, create better documentation templates earlier, and use project management tools like Trello for task tracking."
        },
        {
          q: "How does login_save.txt maintain security?",
          a: "Currently, login_save.txt stores plain NIC which isn't very secure. For better security, I would encrypt the NIC before storage, add timestamp for session expiry, include session token for validation, implement file permissions restricting access, and add integrity checks to detect tampering."
        },
        {
          q: "What is your biggest achievement as Team Leader?",
          a: "My biggest achievement is successfully coordinating four team members with different skills and schedules to deliver a complete, working system in 11 weeks. Despite challenges, we achieved 100% test pass rate, 3.4K lines of quality code, and a professional project that demonstrates our programming skills."
        },
        {
          q: "How did you contribute to project success?",
          a: "Beyond implementing authentication, I ensured smooth team collaboration through effective coordination, maintained code quality through reviews, resolved integration issues promptly, kept the project on schedule, motivated team during difficult phases, and led the final integration ensuring all modules worked together seamlessly."
        }
      ],
    },
    {
      id: "achala",
      name: "Achala Eshan",
      tg: "TG/2024/2122",
      role: "Developer",
      focus: "Voting Module & Validation",
      email: "achalaeshan10@gmail.com",
      contributions: [
        "Voting Workflow Implementation",
        "Candidate Selection Interface",
        "Vote Validation Logic",
        "Duplicate Vote Prevention",
        "Vote Persistence System",
      ],
      stats: { files: 2, lines: 508, commits: 21, functions: "15+" },
      questions: [
        {
          q: "What is your primary contribution to the project?",
          a: "My primary contribution is the complete voting module in vote.c, which handles the entire voting workflow from district selection through party choice, candidate selection, validation, and vote persistence. I implemented 15+ functions totaling 508 lines of code."
        },
        {
          q: "How does the voting workflow function?",
          a: "The workflow uses a section-based state machine: section 0 verifies user login, section 1 displays districts, section 2 shows parties, section 3 displays candidates from selected party, section 4 collects 3 candidate votes, and section 5 validates and saves the vote with confirmation."
        },
        {
          q: "Explain the Candidate struct you designed.",
          a: "The Candidate struct stores id (unique identifier), nic[20] (12-digit national ID), name[50] (candidate name), password[30] (authentication), age (integer), party[10] (party code like BP, GA), and party_no (position in party list). This structure efficiently organizes all candidate data."
        },
        {
          q: "How does load_candidates function work?",
          a: "load_candidates opens candidates.txt, reads each line using fgets, parses data with sscanf extracting id, nic, name, password, age, party, and party_no, stores each candidate in the candidates array, and builds the unique parties list by checking for duplicates before adding."
        },
        {
          q: "What is the purpose of show_parties function?",
          a: "show_parties displays all available political parties with color coding matching each party's theme. It uses a switch statement on the first character of party code: 'B' for blue (BP), 'G' for green (GA), 'R' for red (RM), 'P' for purple (PF), 'N' for orange (NU)."
        },
        {
          q: "How does show_candidates work?",
          a: "show_candidates takes party code and district as parameters, loops through the candidates array, filters candidates matching the selected party using strcmp, displays each candidate's id and name, and applies party-specific color using the party_color array for visual consistency."
        },
        {
          q: "Explain the vote validation logic.",
          a: "Vote validation uses is_candidate_in_party function for each of the 3 selected candidates. This function loops through candidates array, checks if candidate id matches and party matches using strcmp. If any candidate fails validation, an error displays and user is prompted to retry."
        },
        {
          q: "How do you prevent cross-party voting?",
          a: "Cross-party voting prevention is enforced in section 5 where all three votes are validated using is_candidate_in_party against the selected party. If any candidate belongs to a different party, the system displays error 'All votes must be for candidates from selected party' and returns to candidate selection."
        },
        {
          q: "What is the load_users function's role?",
          a: "load_users reads users.txt, parses each user's data, checks if the logged-in user has status 'VOTED' returning 1 if true (preventing duplicate voting), stores other users in read_all_users array for later file update, and builds districts list from user data."
        },
        {
          q: "How does duplicate vote prevention work?",
          a: "Duplicate prevention has two layers: load_users checks user status and returns 1 if 'VOTED', causing vote_user to display 'User has already voted' and exit. After voting, save_vote updates user status to 'VOTED' in users.txt, permanently preventing that user from voting again."
        },
        {
          q: "Explain the save_vote function.",
          a: "save_vote appends vote data to votes.txt in format 'voterNIC,voterName,vote1|vote2|vote3,district', then deletes users.txt, rewrites it with all unchanged users from read_all_users array, and appends the voting user with status 'VOTED'. This atomic operation ensures data consistency."
        },
        {
          q: "What is the voter_details_section function?",
          a: "voter_details_section is a UI helper that displays formatted voter information at the top of the screen. It shows name and district on one line, NIC and party on another, with green color for valid NIC and red for invalid, creating consistent visual feedback throughout the voting process."
        },
        {
          q: "How does voted_details_section work?",
          a: "After successful voting, voted_details_section displays a summary showing district, party (in party color), and all three selected candidates with their IDs and names. It uses party_color array for consistent styling and presents the information in an organized, easy-to-read format."
        },
        {
          q: "What is the find_candidate_name function?",
          a: "find_candidate_name searches the candidates array for a matching candidate ID, returns the candidate's name if found, or empty string if not found. This allows displaying candidate names alongside IDs in the vote confirmation, making the interface more user-friendly."
        },
        {
          q: "How does is_candidate_in_party validate?",
          a: "is_candidate_in_party loops through all candidates, checking if the candidate_id matches AND the party matches using strcmp. It returns 1 if both conditions are true, 0 otherwise. This ensures voters can only select candidates from their chosen party."
        },
        {
          q: "What is the try_again function purpose?",
          a: "try_again prompts users when validation fails, asking if they want to retry. It displays options '1.Yes 0.No', returns 0 for retry (continuing the loop), or 1 to exit (breaking the loop). This provides graceful error recovery throughout the voting process."
        },
        {
          q: "How do you handle district selection?",
          a: "District selection in section 1 displays available districts using show_districts, prompts for numeric choice, validates the choice is within valid range, checks if it's Matara (the only fully supported district), shows warning for other districts, and stores the selected district for vote recording."
        },
        {
          q: "What happens if user selects invalid district?",
          a: "If district choice is less than 1 or greater than district_count, the system displays 'Invalid district' and calls try_again. If user chooses a valid but unsupported district (not Matara), it shows 'District boundaries matter' warning and prompts retry."
        },
        {
          q: "How do party colors enhance UX?",
          a: "Party colors provide visual association: Blue Party in blue, Green Alliance in green, Red Movement in red, People's Front in purple, National Unity in orange. The party_color array stores these, ensuring consistent coloring in candidate lists, party selection, and vote confirmation."
        },
        {
          q: "What is the candidates array structure?",
          a: "candidates[50] is a global array of Candidate structs with capacity for 50 candidates. candidate_count tracks actual number loaded. Each element stores complete candidate information, allowing quick access during voting without repeated file reads."
        },
        {
          q: "How does the parties array work?",
          a: "parties[10][10] stores unique party codes extracted during load_candidates. party_count tracks the number. When loading candidates, each party is checked for duplication before adding, creating a dynamic list of available parties for voter selection."
        },
        {
          q: "What is read_all_users array for?",
          a: "read_all_users[200] stores pointers to user records (excluding voting user) when load_users reads users.txt. These are used during save_vote to rewrite users.txt with updated voter status, implementing the complete file rewrite strategy for status updates."
        },
        {
          q: "How do you ensure vote data integrity?",
          a: "Vote integrity is ensured through: user authentication check, status verification preventing duplicates, party-candidate validation, atomic file operations in save_vote, error handling for file operations, and the pipe-separated format (vote1|vote2|vote3) preventing parsing errors."
        },
        {
          q: "What happens during section 0?",
          a: "Section 0 verifies user authentication by checking if user_nic is NULL or length less than 12. If validation fails, it displays 'You are not logged in. Please login first' in red and exits. If valid, it sets userName and advances to section 1 (district selection)."
        },
        {
          q: "Explain the section-based state machine.",
          a: "The voting process uses sections 0-5 as states: 0 for login check, 1 for district selection, 2 skipped (moved to 3), 3 for party selection, 4 for candidate selection, 5 for validation and saving. Each section handles specific input, validates, and transitions to next section on success."
        },
        {
          q: "How does show_districts function?",
          a: "show_districts loops through the districts array built by load_users, displays each district with a number (starting from 1) in magenta color. This dynamic approach means only districts with registered users appear, rather than hardcoding district names."
        },
        {
          q: "What is the vote data format?",
          a: "Vote data format is: voterNIC,voterName,candidate1|candidate2|candidate3,district. For example: '200012345678,Arjun,1|2|3,Matara'. The pipe separator distinguishes the three votes while maintaining CSV structure for the record."
        },
        {
          q: "How do you handle file operation failures?",
          a: "In save_vote, if votes.txt can't be opened, it prints 'votes.txt not found', calls exit_to for user acknowledgment, and the function continues. For fprintf failures, it closes the file and returns 1 (error code). Better implementation would return immediately on errors."
        },
        {
          q: "What validation occurs in section 4?",
          a: "Section 4 displays candidates from selected party using show_candidates, prompts for 3 candidate IDs with instructions 'Use candidate IDs' and 'All must be from same party', collects the three votes, then advances to section 5 for validation before saving."
        },
        {
          q: "How does the color-coding system work?",
          a: "The color system uses color_text function from fun.h with integer codes: 0=white, 1=red, 2=green, 3=magenta, 4=blue, 5=yellow, 6=cyan. Party colors map: BP=4(blue), GA=2(green), RM=1(red), PF=5(yellow/purple), NU=3(orange/magenta)."
        },
        {
          q: "What user feedback mechanisms exist?",
          a: "User feedback includes: color-coded messages (green for success, red for errors), clear prompts at each stage, error messages explaining validation failures, confirmation screen showing selected votes, visual party identification through colors, and 'Vote declared successfully!' on completion."
        },
        {
          q: "How do you handle the vote confirmation?",
          a: "After validation succeeds in section 5, save_vote is called to persist data, then voted_details_section displays formatted confirmation showing district, party (colored), and all three candidates with names. A success message 'Vote declared successfully!' confirms completion in green."
        },
        {
          q: "What improvements would you make?",
          a: "I would add: vote encryption for security, ability to review vote before final submission, receipt generation with vote confirmation code, audit logging of all voting attempts, support for ranking preferences, real-time candidate availability checking, and rollback capability for failed saves."
        },
        {
          q: "How does your module interact with others?",
          a: "The voting module calls check_login for authentication, uses file_handle_vote.c for persistence, employs fun.h for UI functions, relies on login module setting user globals, and integrates with results module through votes.txt data format. Clear interfaces enable independent development."
        },
        {
          q: "What testing did you perform?",
          a: "I tested: valid voting workflow, invalid party selection, cross-party candidate selection, duplicate voting attempts, invalid candidate IDs, missing authentication, file operation failures, all validation error paths, edge cases like selecting same candidate thrice, and integration with other modules."
        },
        {
          q: "How do you prevent selecting duplicate candidates?",
          a: "Currently, the system doesn't explicitly prevent selecting the same candidate multiple times (e.g., voting 1|1|1). This is a limitation. I would add validation in section 5 checking if vote1==vote2 || vote2==vote3 || vote1==vote3, displaying error and prompting retry if duplicates found."
        },
        {
          q: "What is the u_count variable?",
          a: "u_count tracks the number of user records stored in read_all_users array (excluding the voting user). It's incremented for each user read in load_users and used in save_vote to know how many records to write back when reconstructing users.txt."
        },
        {
          q: "How does strdup work in your code?",
          a: "strdup allocates memory and copies the string. In load_users, 'read_all_users[u_count++] = strdup(line)' copies each user record line to heap memory, ensuring the strings persist after the function returns. This memory should ideally be freed after use to prevent leaks."
        },
        {
          q: "What is the party_no field used for?",
          a: "party_no represents the candidate's position in their party list, loaded from candidates.txt. While included in the Candidate struct and parsed from file, it's not currently used in the voting logic. It could be used for displaying candidates in ranked order."
        },
        {
          q: "How would you add vote editing capability?",
          a: "I would add a review section after candidate selection showing choices with 'Confirm' and 'Edit' options. Edit would return to section 4 with votes pre-filled. I'd also add individual edit options for each vote, and a final confirmation requiring explicit 'Yes' before save_vote executes."
        },
        {
          q: "What happens if votes.txt is missing?",
          a: "If votes.txt doesn't exist, fopen in save_vote returns NULL. Currently, this prints 'votes.txt not found' and calls exit_to but doesn't prevent the function from continuing. Better handling would create the file automatically or return an error code immediately."
        },
        {
          q: "How does the section flow prevent skipping?",
          a: "The section variable only increments to the next required section after successful validation. Users can't skip sections because each section's code only executes when section equals its number. Continue statements advance to next iteration, re-evaluating the current section value."
        },
        {
          q: "What is the maximum number of candidates?",
          a: "The candidates array has capacity for 50 candidates (candidates[50]). This is hardcoded and suitable for the current scope (5 parties × 5 candidates = 25 total). For scaling, this should be dynamic or increased, with candidate_count always tracking actual usage."
        },
        {
          q: "How do you communicate vote success to user?",
          a: "Success communication is multi-layered: voted_details_section shows complete vote summary with formatted candidate information, color-coded party display provides visual confirmation, 'Vote declared successfully!' message in green explicitly states success, and exit_to pauses allowing user to read before menu return."
        },
        {
          q: "What would break the voting module?",
          a: "Things that would break it: corrupted candidates.txt format, missing users.txt file, NIC not found in users database, candidates.txt with party codes not matching parties.txt, insufficient disk space preventing file write, concurrent access to data files, or candidate IDs outside expected range."
        }
      ],
    },
    {
      id: "lakshani",
      name: "Lakshani Salgadu",
      tg: "TG/2024/2142",
      role: "Developer",
      focus: "Results & Analytics Module",
      email: "lakshani@example.com",
      contributions: [
        "Vote Aggregation System",
        "Results Calculation Algorithms",
        "Analytics & Statistics",
        "Result Display",
        "Administrative Controls",
      ],
      stats: { files: 1, lines: 215, commits: 15, functions: 7 },
      questions: [
        {
          q: "What is your main contribution to the project?",
          a: "I developed the complete results and analytics module in results.c, implementing vote aggregation, statistics calculation, and formatted result display. My module processes all cast votes and generates comprehensive party-wise and candidate-wise analytics with 7 functions totaling 215 lines of code."
        },
        {
          q: "How does the calculate_results function work?",
          a: "calculate_results opens votes.txt, reads each line with fgets, parses vote data using sscanf to extract voterNIC, voterName, vote_ids (as string), and district, then parses vote_ids to get three candidate IDs, increments votes array for each candidate, and increments votes[0] for total voter count."
        },
        {
          q: "Explain the votes array structure.",
          a: "votes[25] is a global integer array where index 0 stores total number of voters, and indices 1-25 store vote counts for candidates with those IDs. After processing all votes, votes[i] contains the total votes received by candidate i, enabling quick lookup for results display."
        },
        {
          q: "How does load_get_parties function work?",
          a: "load_get_parties opens candidates.txt, reads each candidate record, extracts party code, checks if party already exists in get_parties array, adds new parties to the list, tracks candidate count per party in party_candidates array, and stores the first candidate ID for each party for reference."
        },
        {
          q: "What is the party_candidates array?",
          a: "party_candidates[10][2] is a 2D array where first dimension is party index and second dimension stores: [0]=ID of first candidate in that party, [1]=count of candidates in that party. This enables calculating party totals by summing votes from candidate ID range."
        },
        {
          q: "How do you calculate party vote totals?",
          a: "For each party, I loop through party_candidates[i][1] (number of candidates), access votes array from party_candidates[i][0] (first candidate ID) onwards, sum all those vote counts, and accumulate in order_of_party[i] for ranking and display purposes."
        },
        {
          q: "Explain the result display format.",
          a: "Results display shows ranked party list with columns: Rank (1-5), Party code (3 chars), Party full name (18 chars), and Votes (6 digit width). Each party is colored according to theme: BP=blue, GA=green, RM=red, PF=yellow, NU=magenta. Below shows total votes cast, total voters, and statistics."
        },
        {
          q: "How do you identify the most popular candidate?",
          a: "I loop through votes[1] to votes[25], compare each with votes[MostPopularCandidateIndex] (initially 1), update MostPopularCandidateIndex when a higher vote count is found. The candidate_name array provides the name for display, showing 'Candidate: name with X votes'."
        },
        {
          q: "How do you identify the most popular party?",
          a: "After calculating party totals in order_of_party array, I loop through all parties, compare order_of_party[i] with order_of_party[MostPopularPartyIndex], update MostPopularPartyIndex when higher total found. The get_parties array provides party code for display."
        },
        {
          q: "What is the candidate_name array?",
          a: "candidate_name[25][50] is a global 2D array that maps candidate IDs to names. During load_get_parties, when parsing candidates.txt, each candidate's name is stored at index matching their ID using strcpy(candidate_name[id], name), enabling quick name lookup by ID."
        },
        {
          q: "How does the refresh functionality work?",
          a: "After displaying results, users can enter 1 to refresh or 0 to exit. Refresh calls reset_results_globals to clear all arrays, then loops back to top where load_get_parties and calculate_results re-read files and recalculate. This shows updated results if new votes were cast."
        },
        {
          q: "What is reset_results_globals function?",
          a: "reset_results_globals clears all global arrays to zero/empty: loops through votes[25] setting to 0, clears candidate_name strings, empties get_parties and party_candidates arrays, resets count_of_party to 0, and resets MostPopularCandidateIndex and MostPopularPartyIndex. This prevents stale data on refresh."
        },
        {
          q: "How do you handle empty votes.txt?",
          a: "If votes.txt has no votes, the while loop in calculate_results never executes, leaving votes array all zeros. The display shows all parties with 0 votes, total voters as 0, and most popular statistics would be based on initial index values. No error occurs, just empty results."
        },
        {
          q: "What is the order_of_party array?",
          a: "order_of_party[10] stores the total vote count for each party, with index corresponding to party position in get_parties array. It's calculated by summing votes for all candidates in that party and used for identifying most popular party and could be used for ranking."
        },
        {
          q: "How does party color mapping work?",
          a: "Party color is determined by first character of party code using if-else chain: 'B'→blue(4), 'G'→green(2), 'R'→red(1), 'P'→yellow(5), 'N'→magenta(3). The color_text function is called with appropriate code before printf, then reset to white(0) after displaying party information."
        },
        {
          q: "What statistics are shown to users?",
          a: "Statistics displayed include: total votes cast (total voters × 3 since each voter selects 3 candidates), total number of voters, most popular candidate with name and vote count, most popular party with code and total votes, and individual candidate vote counts for transparency."
        },
        {
          q: "How would you improve the results display?",
          a: "I would add: percentage calculations showing each candidate/party's vote share, vote distribution charts using ASCII art, historical comparison if previous election data exists, district-wise breakdown when multiple districts supported, filtering options to view specific party results, and export functionality to CSV/PDF."
        },
        {
          q: "What is the purpose of count_of_party?",
          a: "count_of_party tracks the number of unique parties found in candidates.txt. It starts at 0 and increments each time a new party is added to get_parties array during load_get_parties. This value controls loop iterations when displaying party results."
        },
        {
          q: "How do you ensure data accuracy in results?",
          a: "Accuracy is ensured by: reading complete votes.txt file each time, parsing CSV format carefully with sscanf, using pipe separator for vote IDs (vote1|vote2|vote3), resetting globals before recalculation on refresh, validating file operations, and maintaining parallel arrays (votes, candidate_name) with consistent indexing."
        },
        {
          q: "What happens if candidates.txt is corrupted?",
          a: "If candidates.txt has format errors, sscanf might fail to parse correctly, resulting in incomplete candidate data, wrong party assignments, or candidate_name entries being empty. The results would display incorrectly. Better error handling would validate each parse operation and report corruption."
        },
        {
          q: "How does integration with admin module work?",
          a: "The admin module controls results visibility through system.txt file. In production version, view_results would check results status before displaying. If status is 'disable', it would show 'Results not yet released' message. If 'enable', it proceeds with calculation and display."
        },
        {
          q: "What is the sscanf format for parsing votes?",
          a: "First sscanf uses '%[^,],%[^,],%[^,],%[^,]' to extract voterNIC, voterName, vote_ids (as string), and district from CSV. Second sscanf uses '%d|%d|%d' on vote_ids string to parse the three candidate IDs separated by pipe characters into vote1, vote2, vote3 integers."
        },
        {
          q: "How do you handle tie situations?",
          a: "Currently, ties are handled by first occurrence - if two candidates have same highest votes, the one found first becomes most popular. For improvement, I would track all candidates/parties with maximum votes, detect ties by comparing multiple maximums, and display all tied entities."
        },
        {
          q: "What is the view_results function flow?",
          a: "view_results runs infinite while loop: clears screen, calls load_get_parties to build party/candidate data, calls calculate_results to aggregate votes, displays party results with colors, calculates and shows most popular candidate/party, lists individual candidates with votes, prompts for refresh/exit, and resets globals on refresh."
        },
        {
          q: "How do you handle missing candidate names?",
          a: "If a candidate ID in votes.txt doesn't exist in candidates.txt, candidate_name[id] remains empty string. When displayed, it would show blank name. Better handling would display 'Unknown Candidate' or the ID itself, and log the discrepancy for administrator attention."
        },
        {
          q: "What is the party name mapping?",
          a: "Party names are hardcoded in display: BP='Blue Party', GA='Green Alliance', RM='Red Movement', PF=\"People's Front\", NU='National Unity'. This is based on first character of party code. Better approach would read from parties.txt file maintaining single source of truth."
        },
        {
          q: "How would you add vote verification?",
          a: "I would add: hash generation for each vote record, storing hashes in separate verification file, recomputing hashes during results calculation and comparing with stored values, flagging mismatches as potential tampering, and displaying verification status showing 'X of Y votes verified successfully'."
        },
        {
          q: "What testing did you perform?",
          a: "I tested with: empty votes.txt (no votes cast), single vote, multiple votes from same party, votes distributed across all parties, edge case of all votes for one candidate, corrupted vote format, missing candidates.txt, refresh functionality, and integration with voting module ensuring saved votes appear in results."
        },
        {
          q: "How does your module handle scalability?",
          a: "Current implementation is limited by fixed array sizes: votes[25] limits 25 candidates, party_candidates[10] limits 10 parties. For scalability, I'd use dynamic memory allocation with realloc, linked lists for candidates, hash tables for vote lookup, and database queries instead of file parsing."
        },
        {
          q: "What is the return value significance?",
          a: "calculate_results and load_get_parties return 2 if file opening fails, return 0 on success. view_results doesn't return specific values as it runs until user chooses exit. These return codes allow calling functions to detect errors, though they're not currently checked in view_results."
        },
        {
          q: "How do you ensure vote privacy?",
          a: "Vote privacy is maintained by aggregating votes - results show only totals per candidate/party, not individual voter choices. The votes.txt file contains voter NIC linkage which could compromise privacy. For true privacy, I'd separate voter identity from votes using anonymous vote IDs."
        },
        {
          q: "What analytics could be added?",
          a: "Additional analytics: vote trends over time if timestamps added, correlation between voter demographics and party choice, district comparison charts, voter turnout percentage, invalid vote detection and counting, party preference by age group, and predictive modeling for future elections."
        },
        {
          q: "How does the detailed candidate list work?",
          a: "After party statistics and most popular displays, the code loops through votes[1] to votes[24], checks if votes[i] > 0, and for each candidate with votes, prints formatted line showing 'Candidate: name | Votes: count' using candidate_name[i] for name lookup. This provides complete transparency."
        },
        {
          q: "What improvements would enhance accuracy?",
          a: "Improvements include: checksum validation of vote records, duplicate vote detection by checking unique voter NIC combinations, audit trail logging all calculation steps, comparison of total votes with voter count, automated discrepancy reporting, and test mode with known vote data for validation."
        },
        {
          q: "How do you handle the found variable?",
          a: "In load_get_parties, 'found' flag starts at 0 for each party read. Inner loop checks if party already exists in get_parties array using strcmp. If match found, sets found=1 and breaks. After loop, if found==0, party is new and added to get_parties, incrementing count_of_party."
        },
        {
          q: "What is your biggest challenge?",
          a: "My biggest challenge was designing efficient vote aggregation that processes potentially hundreds of votes quickly while maintaining accuracy. The solution of using indexed arrays (votes[], candidate_name[]) with O(1) lookup, combined with careful parsing and validation, achieved fast performance with 100+ sample votes completing under 1 second."
        },
        {
          q: "How does your module contribute to project success?",
          a: "The results module provides the critical output that gives meaning to the entire voting process. Without accurate result calculation and clear display, the system would be incomplete. My implementation provides real-time analytics, transparent vote counts, and professional presentation that demonstrates the system's functionality effectively."
        },
        {
          q: "What would you do differently?",
          a: "I would implement database queries instead of file parsing for better performance, add caching to avoid recalculating unchanged results, implement proper error handling with user notifications, add result export functionality, create graphical charts using a library, and implement automated testing with known vote datasets to verify calculation accuracy."
        },
        {
          q: "How does your code handle internationalization?",
          a: "Currently, all text is hardcoded in English with no internationalization support. Party names, labels, and messages are English strings. For internationalization, I would use language files with key-value pairs, detect user language preference, and load appropriate strings dynamically for multi-language support."
        }
      ],
    },
  ]

  const overviewContent = {
    title: "Sri Lanka Parliamentary Election Voting System",
    subtitle: "Digital Voting System (DVS) - Group 01",
    description:
      "A comprehensive console-based election voting system developed in C programming language, simulating the Sri Lankan parliamentary election process for the Matara District.",
    stats: [
      { number: "3.4K", label: "Lines of Code" },
      { number: "11", label: "Weeks Duration" },
      { number: "4", label: "Team Members" },
      { number: "18", label: "Modules" },
    ],
    features: [
      "Secure voter registration with NIC validation",
      "Multi-stage authentication system",
      "Robust voting mechanism preventing duplicates",
      "Real-time election results calculation",
      "Administrative controls for results visibility",
      "Modular architecture for future enhancements",
      "File-based database with CSV format",
      "Console UI with ANSI color support",
    ],
  }

  const sections = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "hasitha", label: "Hasitha Sandakelum", icon: "👨‍💻" },
    { id: "thisagi", label: "Thisagi Omethra", icon: "👨‍💼" },
    { id: "achala", label: "Achala Eshan", icon: "👨‍💻" },
    { id: "lakshani", label: "Lakshani Salgadu", icon: "👩‍💻" },
  ]

  const currentMember = teamMembers.find((m) => m.id === activeSection)

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
    <div className="max-w-7xl mx-auto bg-white shadow-2xl min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sm:p-6 md:p-8 text-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 leading-snug">
          DVS Project Presentation
        </h1>
        <p className="text-sm sm:text-base md:text-xl opacity-90">
          ICT1142 - Programming Practicum | Group 01 | B09
        </p>
        <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 opacity-80">
          Mini Project Evaluation - October 28, 2025
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 p-2 sm:p-3 sticky top-0 z-50 shadow-lg overflow-x-auto no-scrollbar">
        <div className="flex gap-2 sm:gap-3 justify-start md:justify-center flex-nowrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-3 sm:px-4 py-2 rounded-lg transition-all whitespace-nowrap text-xs sm:text-sm md:text-base ${
                activeSection === section.id
                  ? "bg-purple-600 text-white shadow-md transform -translate-y-0.5"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <span className="mr-1 sm:mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Overview Section */}
      {activeSection === "overview" && (
        <div className="p-3 sm:p-4 md:p-8">
          {/* Overview Card */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              {overviewContent.title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-700 mb-3 sm:mb-4">
              {overviewContent.subtitle}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {overviewContent.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {overviewContent.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-4 sm:p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform"
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                  {stat.number}
                </span>
                <span className="block text-xs sm:text-sm md:text-base opacity-90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {overviewContent.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <span className="text-lg sm:text-2xl text-purple-600 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Overview */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Team Members
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 hover:border-purple-600 transition-colors"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{member.tg}</p>
                  <p className="text-purple-600 font-semibold mb-1 sm:mb-2">{member.role}</p>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">{member.focus}</p>
                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                    <span className="text-gray-600">
                      <strong>{member.stats.files}</strong> Files
                    </span>
                    <span className="text-gray-600">
                      <strong>{member.stats.lines}</strong> Lines
                    </span>
                    <span className="text-gray-600">
                      <strong>{member.stats.commits}</strong> Commits
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Team Member Section */}
      {currentMember && activeSection !== "overview" && (
        <div className="p-3 sm:p-4 md:p-8">
          {/* Member Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
              {currentMember.name}
            </h2>
            <p className="text-base sm:text-lg opacity-90 mb-3 sm:mb-4">{currentMember.role}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <p className="text-xs sm:text-sm opacity-75">Reg. Number</p>
                <p className="font-bold text-sm sm:text-base">{currentMember.tg}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm opacity-75">Email</p>
                <p className="font-bold text-xs sm:text-sm">{currentMember.email}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm opacity-75">Focus</p>
                <p className="font-bold text-xs sm:text-sm">{currentMember.focus}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm opacity-75">Contributions</p>
                <p className="font-bold">{currentMember.contributions.length}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">{currentMember.stats.files}</p>
              <p className="text-xs sm:text-sm text-gray-600">Files</p>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-green-600">{currentMember.stats.lines}</p>
              <p className="text-xs sm:text-sm text-gray-600">Lines</p>
            </div>
            <div className="bg-purple-50 p-3 sm:p-4 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-purple-600">{currentMember.stats.commits}</p>
              <p className="text-xs sm:text-sm text-gray-600">Commits</p>
            </div>
            <div className="bg-orange-50 p-3 sm:p-4 rounded-lg text-center">
              <p className="text-2xl sm:text-3xl font-bold text-orange-600">{currentMember.stats.functions}</p>
              <p className="text-xs sm:text-sm text-gray-600">Functions</p>
            </div>
          </div>

          {/* Contributions */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Key Contributions</h3>
            <ul className="space-y-1 sm:space-y-2">
              {currentMember.contributions.map((c, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Q&A */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Q&A Session</h3>
            <div className="space-y-2 sm:space-y-3">
              {currentMember.questions.map((qa, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(`${currentMember.id}-${index}`)}
                    className="w-full p-3 sm:p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">{qa.q}</span>
                    {expandedQuestion === `${currentMember.id}-${index}` ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedQuestion === `${currentMember.id}-${index}` && (
                    <div className="p-3 sm:p-4 bg-white border-t border-gray-200 text-sm sm:text-base">
                      <p className="text-gray-700 leading-relaxed">{qa.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <div>
            <p className="text-xs sm:text-sm opacity-75">ICT1142 - Programming Practicum</p>
            <p className="font-semibold text-sm sm:text-base">
              Group 01 | B09 | October 28, 2025
            </p>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={`text-2xl sm:text-3xl font-bold ${getTimerColor()}`}>
              {formatTime(timerSeconds)}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                title={isTimerRunning ? "Pause" : "Start"}
              >
                {isTimerRunning ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <button
                onClick={() => setTimerSeconds(120)}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
)

}

export default DVSPresentation
