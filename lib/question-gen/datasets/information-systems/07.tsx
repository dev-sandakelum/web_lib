// datasets/information-systems/lesson07.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const IsLesson07Dataset: Dataset = {
  id: "ict-is-07",
  topicCount: 11,
  category: "Information Systems",
  subcategory: "IT Strategic Planning, Systems Development & Computer Crime Prevention",
  description: "Managing IT, Business Processes, Social/Ecology Responsibility, Systems Development Life Cycle, and Computer Crime Prevention.",
  topics: [
    "Project Initiation and Selection",
    "Strategic Planning",
    "Participants in Systems Development",
    "Information Systems Planning",
    "Performance Objectives",
    "Cost Objectives",
    "Systems Development Life Cycle (SDLC)",
    "Alternative Development Approaches",
    "Factors Affecting Systems Development Success",
    "Computer-Related Waste and Mistakes",
    "Computer-Related Crime",
  ],
  content: `
<TOPIC_START index="0" title="Project Initiation and Selection">
1.0 Project Initiation and Selection

1.1 Identifying Potential Projects
• The first step in project management is deciding what projects to do in the first place.
• Project initiation starts with identifying potential projects, using realistic methods to select which projects to work on, and then formalizing their initiation by issuing some sort of **project charter**.
• A project charter is a document that defines the objectives, scope, and stakeholders of a project, providing a roadmap for the team to follow.

1.2 Methods For Selecting Projects
Methods for selecting IT projects include:

| Method | Description |
| :--- | :--- |
| **Focusing on broad organizational needs** | Aligning projects with overall organizational objectives. |
| **Categorizing IT projects** | Determining whether the project addresses a problem, an opportunity, or a directive. |
| **Financial analyses** | Performing net present value (NPV), return on investment (ROI), or payback analysis. |
| **Weighted scoring model** | A project management technique used for weighing certain decisions, such as prioritizing project actions and development of product features. |
| **Balanced scorecard** | A performance metric companies use to identify and improve internal functions and their resulting external outcomes. |
<TOPIC_END>

<TOPIC_START index="1" title="Strategic Planning">
2.0 Strategic Planning

2.1 What is Strategic Planning?
• **Strategic planning** involves determining long-term objectives by analyzing the strengths and weaknesses of an organization, studying opportunities and threats in the business environment, predicting future trends, and projecting the need for new products and services.
• Strategic planning provides important information to help organizations identify and then select potential projects.
• **SWOT analysis** is a key tool used in strategic planning.

2.2 IT Strategic Planning
• **IT Strategic planning** assesses what investments and technologies will achieve business goals while also considering the impact of funding them.
<TOPIC_END>

<TOPIC_START index="2" title="Participants in Systems Development">
3.0 Participants in Systems Development

Key participants in systems development include:

| Role | Description |
| :--- | :--- |
| **Stakeholders** | People who, either themselves or through the organization they represent, ultimately benefit from the systems development project. |
| **Users** | People who will interact with the system regularly. |
| **Development team** | Responsible for determining the objectives of the information system and delivering a system that meets these objectives. |
| **Developers** | Modifying or developing programs to satisfy user requirements. |
| **QA / Testers** | Quality assurance and testing professionals. |
| **Systems analyst** | Analyzing and designing business systems. |
| **Project Manager** | Responsible for coordinating all people and resources needed to complete a project on time. |
<TOPIC_END>

<TOPIC_START index="3" title="Information Systems Planning">
4.0 Information Systems Planning

4.1 What is Information Systems Planning?
• **Information systems planning** transforms organizational goals outlined in the strategic plan into specific systems development activities.

4.2 The Steps of IS Planning
The steps of IS planning are outlined in a systematic process.

4.3 Establishing Objectives for Systems Development
• The overall objective of systems development is to achieve **business goals**, not technical goals, by delivering the right information to the right person at the right time.
• **Mission-critical Systems** are systems that play a critical role in an organization's continued operations and goal attainment.
<TOPIC_END>

<TOPIC_START index="4" title="Performance Objectives">
5.0 Performance Objectives

Key performance objectives for systems development include:

| Objective | Description |
| :--- | :--- |
| **Quality of output** | Is the system generating the right information for a value-added business process or by a goal-oriented decision maker? |
| **Accuracy of output** | Is the output accurate and does it reflect the true situation? |
| **Speed of output** | Is the system generating output in time to meet organizational goals and operational objectives? Includes customer response time. |
| **Scalability** | The ability of the resulting system to handle business growth and increased business volume. |
| **Risk management** | One important objective of many systems development projects is to reduce risk. |
<TOPIC_END>

<TOPIC_START index="5" title="Cost Objectives">
6.0 Cost Objectives

Important cost considerations in systems development:

| Cost Category | Description |
| :--- | :--- |
| **Development costs** | All costs required to get the system up and running. |
| **Uniqueness costs** | Costs related to the uniqueness of the system application; a system's uniqueness has a profound effect on its cost. An expensive but reusable system might be preferable to a less costly system with limited use. |
| **Fixed investments** | Fixed investments in hardware and related equipment. |
| **Ongoing operating costs** | Operating costs include costs for personnel, software, supplies, and resources such as the electricity required to run the system. |
<TOPIC_END>

<TOPIC_START index="6" title="Systems Development Life Cycle (SDLC)">
7.0 Systems Development Life Cycle (SDLC)

7.1 What is SDLC?
• The **systems development life cycle (SDLC)** is the systems development process.
• Sometimes, information learned in a particular phase requires **cycling back to a previous phase**.

7.2 The Five Phases of Traditional SDLC 
7.2.1 Systems Investigation
• The systems development phase during which problems and opportunities are **identified and considered** in light of the goals of the business.

7.2.2 Systems Analysis
• The systems development phase that **determines what the Information System must do** to solve the problem by studying existing systems and work processes to identify strengths, weaknesses, and opportunities for improvement.

7.2.3 Systems Design
• The systems development phase that defines **how the information system will do what it must do** to obtain the problem solution.

7.2.4 Systems Implementation
• The systems development phase involving the **creation or acquisition** of various system components detailed in the systems design, assembling them, and **placing the new or modified system into operation**.

7.2.5 Systems Maintenance And Review
• The systems development phase that **ensures the system operates and modifies the system** so that it continues to meet changing business needs.
<TOPIC_END>

<TOPIC_START index="7" title="Alternative Development Approaches">
8.0 Alternative Development Approaches

8.1 Prototyping
• An **iterative approach** to the systems development process.
• During each iteration, requirements and alternative solutions to the problem are identified and analyzed, new solutions are designed, and a portion of the system is implemented.
• Users are then encouraged to try the prototype and **provide feedback**.
• Each generation of prototype is a refinement of the previous generation based on user feedback.

8.1.1 Types of Prototypes
* **Operational prototype**: A prototype that works—accesses real data files, edits input data, makes necessary computations and comparisons, and produces real output.
* **Nonoperational prototype**: A mock-up, or model, that includes output and input specifications and formats.

8.2 Rapid Application Development (RAD)
• A systems development approach that employs tools, techniques, and methodologies designed to **speed application development**.

8.3 Joint Application Development (JAD)
• A process for data collection and requirements analysis in which **users, stakeholders, and IS professionals work together** to analyze existing systems, propose possible solutions, and define the requirements of a new or modified system.
<TOPIC_END>

<TOPIC_START index="8" title="Factors Affecting Systems Development Success">
9.0 Factors Affecting Systems Development Success

Three major factors affect systems development success:

9.1 Degree of Change
• A major factor that affects the quality of systems development is the **degree of change** associated with the project.
• The scope can vary from enhancing an existing system to major reengineering.
• The project team needs to recognize where they are on this spectrum of change.

9.2 Managing Change
• The ability to **manage change is critical** to the success of systems development.
• The work environment and habits of users are invariably affected by the development of a new information system.
• Managing change requires the ability to recognize existing or potential problems (particularly the concerns of users) and deal with them before they become a serious threat to the success of the new or modified system.

9.2.1 Common Problems from New or Modified Systems
The most common problems that often need to be addressed include:
* Fear that the employee will lose his job, power, or influence within the organization
* Belief that the proposed system will create more work than it eliminates
* Reluctance to work with "computer people"
* Anxiety that the proposed system will negatively alter the structure of the organization
* Unwillingness to learn new procedures or approaches

9.3 Quality and Standards
• **Quality and standards** are key success factors for systems development.
• Corporations are expanding their standards to include many different computer platforms.
• Many companies try to standardize their operations on one operating system, while others have multiple systems and platforms to take advantage of the strengths of each.
• Organizations that do business around the globe may be required to meet certain international standards, such as **ISO 9000**, a set of international quality standards originally developed in Europe in 1987.
<TOPIC_END>

<TOPIC_START index="9" title="Computer-Related Waste and Mistakes">
10.0 Computer-Related Waste and Mistakes

10.1 Definitions
• **Computer-related waste and mistakes** are major causes of computer problems, contributing to unnecessarily high costs and lost profits.
• **Computer waste** involves the inappropriate use of computer technology and resources.
• **Computer-related mistakes** refer to errors, failures, and other computer problems that make computer output incorrect or not useful, caused mostly by human error.

10.2 Types of Computer-Related Mistakes
Common types of computer-related mistakes include:
* Data-entry or data-capture errors
* Errors in computer programs
* Errors in handling files, including formatting a disk by mistake, copying an old file over a newer one, and deleting a file by mistake
* Mishandling of computer output
* Inadequate planning for and control of equipment malfunctions
* Inadequate planning for and control of environmental difficulties (such as electrical and humidity problems)
* Installing computing capacity inadequate for the level of activity on corporate Web sites
* Failure to provide access to the most current information by not adding new Web links and not deleting old links

10.3 Preventing Computer-Related Waste & Mistakes
Prevention strategies include:
* **Establishing Policies and Procedures**
* **Implementing Policies and Procedures**
* **Monitoring Policies and Procedures**
* **Reviewing Policies and Procedures**
<TOPIC_END>

<TOPIC_START index="10" title="Computer-Related Crime">
11.0 Computer-Related Crime

11.1 The Computer as a Tool to Commit Crime
Common computer-related crimes include:

| Crime Type | Description |
| :--- | :--- |
| **Social Engineering** | Using social skills to get computer users to provide information to access an information system or its data. |
| **Dumpster Diving** | Going through the trash cans of an organization to find secret or confidential information, including information needed to access an information system or its data. |
| **Cyberterrorism** | Terrorist activities conducted through computer systems. |
| **Identity Theft** | A crime in which an imposter obtains key pieces of personal identification information, such as Social Security or driver's license numbers, to impersonate someone else. |
| **Internet Gambling** | Illegal gambling activities conducted over the internet. |
| **Information and Equipment Theft** | Theft of information assets or computer equipment. |
| **Computer-Related Scams** | Various fraudulent schemes conducted using computers. |

11.2 Preventing Computer-Related Crime
Crime prevention strategies include:
* **Crime prevention by state and federal agencies**
* **Crime prevention by corporations**
* **Using intrusion detection software**
* **Security dashboard**
* **Using managed security service providers (MSSPs)**
<TOPIC_END>
`
};