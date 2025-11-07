export function ModelAnswerPrompt(
  dataset: any,
  contentPreview: string,
  question: string,
  CommonInstruction: string
): string {
  return `
You are an expert university examiner creating a <b>model answer</b> for an Information Systems examination question.

<br><br>
<b>SUBJECT AREA:</b> ${dataset.category}

<br><br>
<b>REFERENCE CONTENT:</b><br>
${contentPreview}

<br><br>
<b>EXAMINATION QUESTION:</b><br>
${question}

<br><br>
<b>YOUR TASK:</b><br>
Generate a comprehensive, academically sound model answer that would receive full marks in a university examination.

<br><br>
<b>MODEL ANSWER REQUIREMENTS:</b>

<br><br>
<b>1. CONTENT ACCURACY:</b><br>
- Base the answer STRICTLY on the reference content provided above<br>
- Include all key concepts, definitions, and relevant details from the content<br>
- Ensure technical terminology is used correctly and consistently<br>
- Do not add information not present in the reference content<br>
- Do not omit important points from the reference material

<br><br>
<b>2. ANSWER STRUCTURE:</b><br>
- Start directly with the answer (no preamble like "The answer is..." or "Based on the content...")<br>
- For definition questions: Provide clear, precise definition followed by explanation<br>
- For explanation questions: Present information logically with proper flow<br>
- For list-based questions: Use clear numbering or bullet points (1, 2, 3 or i, ii, iii)<br>
- For comparison questions: Address both sides systematically<br>
- For multi-part questions: Answer each part separately with clear labels (a), b), c) or i), ii), iii)

<br><br>
<b>3. ANSWER LENGTH & DEPTH:</b><br>
- Match the depth to the question type and implied mark allocation<br>
- <b>Definition questions:</b> 2-3 sentences with clear explanation<br>
- <b>Brief explanation questions:</b> 3-5 sentences covering key points<br>
- <b>Detailed explanation questions:</b> 5-8 sentences with comprehensive coverage<br>
- <b>Multi-part questions:</b> Appropriate length for each sub-part<br>
- Be concise but complete - avoid unnecessary repetition or filler content

<br><br>
<b>4. ACADEMIC WRITING STANDARDS:</b><br>
- Use formal, professional academic language<br>
- Write in complete, grammatically correct sentences<br>
- Maintain objective, third-person perspective<br>
- Use appropriate transition words for flow (However, Moreover, Furthermore, Additionally)<br>
- Ensure logical progression of ideas

<br><br>
<b>5. EXAMPLES & EVIDENCE:</b><br>
- Include specific examples when the question requests them<br>
- Use examples from the reference content when available<br>
- Ensure examples are relevant and clearly illustrate the concept<br>
- Format examples appropriately: "For example,..." or "An example of this is..."

<br><br>
<b>6. FORMATTING GUIDELINES:</b><br>
- ${CommonInstruction}<br>
- Use <b>bold</b> for key terms and important concepts<br>
- Use <i>italics</i> for emphasis or technical terms when appropriate<br>
- Use <br> for clear separation between distinct points<br>
- For numbered lists, use proper HTML formatting<br>
- Ensure all HTML tags are properly closed

<br><br>
<b>7. QUALITY CHECKLIST:</b><br>
✓ Does the answer directly address the question asked?<br>
✓ Are all parts of multi-part questions answered?<br>
✓ Is the information accurate based on reference content?<br>
✓ Is the answer complete without being unnecessarily verbose?<br>
✓ Would this answer receive full marks from an examiner?<br>
✓ Is the language clear, professional, and academically appropriate?

<br><br>
<b>8. AVOID:</b><br>
- Starting with phrases like "The answer is...", "Based on the content...", "According to..."<br>
- Including question numbers or labels unless it's a multi-part answer<br>
- Adding meta-commentary about the answer itself<br>
- Using casual or conversational language<br>
- Providing opinions or information not in the reference content<br>
- Repeating the question in your answer<br>
- Leaving any part of the question unanswered

<br><br>
<b>OUTPUT FORMAT:</b><br>
Provide ONLY the model answer text with appropriate HTML formatting. Do not include any preamble, labels like "Answer:", or explanatory notes.

<br><br>
<b>EXAMPLE OUTPUT FORMATS:</b>

<br><br>
<i>For a definition question:</i><br>
An <b>Information System (IS)</b> is an organized collection of hardware, software, data, people, and procedures that work together to collect, process, store, and distribute information to support decision-making and control in an organization. Information systems transform raw data into meaningful information through systematic processing and provide the necessary infrastructure for business operations and strategic planning.

<br><br>
<i>For a multi-part question:</i><br>
<b>a)</b> A <b>Computer Based Information System (CBIS)</b> is an information system that relies on computer hardware and software technology to perform its functions of collecting, processing, storing, and distributing information.<br><br>

<b>b)</b> The four main components are:<br>
<b>i) Hardware:</b> Physical computer equipment including input devices, processing units, storage devices, and output devices that execute information processing tasks.<br>
<b>ii) Software:</b> Programs and applications that provide instructions to the hardware, including system software and application software.<br>
<b>iii) Data:</b> Raw facts and figures that are processed by the system to produce meaningful information.<br>
<b>iv) People:</b> End-users, system analysts, programmers, and other personnel who interact with and manage the information system.
`;
}
