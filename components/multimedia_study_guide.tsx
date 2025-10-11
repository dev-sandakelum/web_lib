import React from 'react';
import { BookOpen, Image, Type, Palette, HelpCircle, FileText } from 'lucide-react';

type Topic = {
  topic: string;
  description?: string;
  keyPoints?: string[];
  examples?: string[];
  difference?: string;
  subTopics?: { name: string; features: string[] }[];
  types?: Record<string, string>;
  categories?: { element: string; software: string[]; purpose: string }[];
  formats?: { ext: string; name: string; use?: string }[];
  devices?: {
    name: string;
    purpose?: string;
    types?: string[];
    features?: string[];
  }[];
  milestones?: { year: string; event: string }[];
  applications?: string[];
  considerations?: string[];
  elements?: string[];
  repeatable?: string[];
  rule?: string;
  advantages?: string[];
  characteristics?: string[];
};

type Section = {
  title: string;
  icon: React.ReactElement;
  topics: Topic[];
};

export default function MultimediaStudyGuide() {
  const sections: Section[] = [
    {
      title: "Introduction to Multimedia",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        {
          topic: "What is Multimedia?",
          description: "Integration of text, sound, graphics, animation and video into a single unit. Multi means &apos;many/multiple&apos; and medium refers to an interleaving substance through which something is transmitted.",
          keyPoints: [
            "Combination of continuous media (audio, video) and discrete media (text, graphics, images)",
            "Uses multiple content forms to convey digital information",
            "Interactive: User has control over the application",
            "Experience is active rather than passive like TV"
          ],
          examples: ["Games", "Education", "Training", "Corporate presentations", "Simulations"]
        },
        {
          topic: "Multimedia Features",
          description: "Key characteristics that define multimedia systems",
          keyPoints: [
            "Interactivity - User has control over the application",
            "Hyperlinking - Index allows jumping between sections",
            "Non-linear navigation - Web pages with hyperlinks",
            "Integration of multiple media types"
          ]
        },
        {
          topic: "Hypermedia",
          description: "Logical extension of hypertext that includes linked multiple media (graphics, audio, video, text, hyperlinks)",
          keyPoints: [
            "Interactive multimedia with non-linear web of associations",
            "Not constrained to be text-based",
            "Includes continuous media (sound and video)",
            "World Wide Web is a classic example",
            "Most modern hypermedia delivered via electronic pages",
            "Audio hypermedia emerging with voice command devices"
          ],
          difference: "Multimedia can be linear (cinema), hypermedia is always interactive and non-linear"
        }
      ]
    },
    {
      title: "Five Key Multimedia Elements",
      icon: <Palette className="w-6 h-6" />,
      topics: [
        {
          topic: "1. Text",
          description: "Basic element of multimedia involving text types, sizes, colors and backgrounds",
          keyPoints: [
            "Can be linked to other media (Hypertext)",
            "Position on screen is crucial",
            "Message length must be appropriate",
            "Legibility is essential",
            "Words must be chosen carefully",
            "Used in titles, menus, navigational aids"
          ],
          considerations: ["Position", "Length", "Legibility"]
        },
        {
          topic: "2. Graphics/Images",
          description: "Visual elements that make multimedia applications attractive and illustrate ideas",
          keyPoints: [
            "Two types: Bitmap and Vector graphics",
            "Bitmap: Real images from cameras/scanners (pixel-based)",
            "Vector: Drawn on computer, requires small memory (path-based)",
            "Help illustrate ideas through still pictures",
            "Make applications more attractive"
          ],
          types: {
            "Bitmap": "Real images, larger file size, quality loss when scaled",
            "Vector": "Computer-drawn, smaller file size, scalable without quality loss"
          }
        },
        {
          topic: "3. Audio",
          description: "Sound element including speech, music, and sound effects",
          keyPoints: [
            "Two types: Analog and Digital audio",
            "Analog: Original sound signal",
            "Digital: Digital sampling of actual sound",
            "Multimedia uses digital audio",
            "Provides powerful emotional impact"
          ]
        },
        {
          topic: "4. Video",
          description: "Moving images that provide powerful impact in multimedia programs",
          keyPoints: [
            "Digital video gaining popularity",
            "Can be edited easily",
            "Can be stored like other computer files",
            "Quality can be maintained",
            "Transferable within networks",
            "Allows non-linear editing",
            "Large file sizes - slow transfer on Internet"
          ],
          advantages: ["Easy editing", "Quality maintenance", "Network transfer", "Non-linear editing"]
        },
        {
          topic: "5. Animation",
          description: "Process of making static images appear to move",
          keyPoints: [
            "Uses digital animation in multimedia",
            "Two categories: 2D (2 Dimension) and 3D (3 Dimension)",
            "Creates illusion of movement",
            "More efficient than video for certain applications"
          ]
        }
      ]
    },
    {
      title: "CRAP Design Principles",
      icon: <Palette className="w-6 h-6" />,
      topics: [
        {
          topic: "1. Contrast",
          description: "Most important visual technique affecting what appears on screen",
          keyPoints: [
            "Makes different things different",
            "Makes important elements stand out",
            "Mutes less important elements",
            "Creates dynamism on screen",
            "Bold or italic text is common form of contrast"
          ],
          elements: [
            "Sizes", "Colors", "Fonts", "Line thickness",
            "Location of blocks", "Spacing", "Shapes"
          ],
          rule: "Avoid making 2 elements just similar - make them same OR very different"
        },
        {
          topic: "2. Repetition",
          description: "Repeat design elements throughout the interface",
          keyPoints: [
            "Creates unity and consistency",
            "Repeat fonts, colors, bullet types, spacing",
            "Helps develop sense of organization",
            "Elements: color, shape, texture, spatial relationships, sizes"
          ],
          repeatable: ["Bullet type", "Spacing", "Text weight", "Alignment", "Indentation"]
        },
        {
          topic: "3. Alignment",
          description: "Creates visual flow and connects elements visually",
          keyPoints: [
            "Items aligned create stronger cohesive unit",
            "Nothing placed arbitrarily on screen",
            "Every element has visual connection with another",
            "Creates clean, clear, sophisticated look and feel",
            "Creates visual flow through the design"
          ]
        },
        {
          topic: "4. Proximity",
          description: "Groups related items together and separates unrelated ones",
          keyPoints: [
            "Close elements become one visual unit",
            "Groups related elements effectively",
            "Separates unrelated elements",
            "Reduces visual clutter",
            "Improves organization and readability"
          ]
        }
      ]
    },
    {
      title: "Typography Fundamentals",
      icon: <Type className="w-6 h-6" />,
      topics: [
        {
          topic: "Typeface vs Font",
          description: "Understanding the difference between typeface and font",
          keyPoints: [
            "Typeface: Family of graphic characters (Times, Courier, Arial)",
            "Font: Collection of characters of single size & style",
            "Example: Times is typeface; Times 12-point italic is font",
            "In computers, people often say font when typeface is more accurate"
          ]
        },
        {
          topic: "Type Measurement",
          description: "Points is the best standard of type measurement",
          keyPoints: [
            "Measured in smaller increments of 0.1",
            "Used by most programs",
            "Vocabulary of typesetting is in points",
            "Used for line spacing and rule thickness"
          ]
        },
        {
          topic: "Styles of Type",
          subTopics: [
            {
              name: "Old Style Type",
              features: [
                "Slight differences between thick and thin strokes",
                "Rounded serifs and fillets",
                "Eye-pleasing white space",
                "Easier to read",
                "Good for blocks of text"
              ]
            },
            {
              name: "Modern Type",
              features: [
                "Similar to old style",
                "Much larger contrast between thick and thin strokes",
                "Light and airy appearance",
                "Stylish type",
                "Very readable in blocks"
              ]
            },
            {
              name: "Sans Serif Types",
              features: [
                "San means 'without' - no serifs",
                "Little or no difference in stroke thickness",
                "Traditionally for headlines and captions",
                "Gained popularity for body text",
                "Letters can be closer together",
                "More words fit on page"
              ]
            },
            {
              name: "Occasional Types",
              features: [
                "Used for special effect",
                "Creates high contrast",
                "Should be used very sparingly",
                "Never used for blocks of text",
                "Can be hard to read"
              ]
            }
          ]
        },
        {
          topic: "Text Styles",
          description: "Variations in appearance for emphasis",
          examples: [
            "Bold Times New Roman",
            "Italics Times New Roman",
            "Underline Times New Roman",
            "Bold Comic Sans MS",
            "Italics Comic Sans MS"
          ]
        },
        {
          topic: "Kerning and Tracking",
          keyPoints: [
            "Kerning: Reducing or adding space between letter pairs",
            "Tracking: Adjusting space in a block of text (loose or tight)",
            "Both affect readability and appearance"
          ]
        },
        {
          topic: "Leading (Line Spacing)",
          description: "Vertical space allotted to a line of type",
          keyPoints: [
            "Use tighter leading in headlines",
            "Use looser leading for body text",
            "Affects readability significantly"
          ]
        },
        {
          topic: "White Space",
          description: "Empty space that affects readability",
          keyPoints: [
            "Too little white space: design is cramped",
            "Too much white space: design is disjointed and unorganized",
            "Makes finding related information difficult",
            "Balance is crucial"
          ]
        },
        {
          topic: "Line Length",
          keyPoints: [
            "Long lines + small font: hard to read, easy to lose place",
            "Short lines + large font: opposite problem",
            "Reader must reposition eyes multiple times",
            "Balance between readability and space efficiency"
          ]
        }
      ]
    },
    {
      title: "Serif vs Sans Serif",
      icon: <Type className="w-6 h-6" />,
      topics: [
        {
          topic: "Serif Fonts",
          description: "Little decoration at the end of letter strokes",
          keyPoints: [
            "Used for body text in print",
            "Helps guide reader's eyes along text",
            "Traditional choice for printed materials",
            "Examples: New Century, Times New Roman, Book Antiqua, Monotype Corsiva"
          ]
        },
        {
          topic: "Sans Serif Fonts",
          description: "No serif at end of letter strokes",
          keyPoints: [
            "Used for headlines and bold statements",
            "No need to guide reader's eyes",
            "More legible on computer screens (especially smaller sizes)",
            "Computer screens have less resolution than print",
            "Examples: Arial, Helvetica, Verdana, Impact"
          ]
        },
        {
          topic: "Screen vs Print",
          difference: "Sans serif is more legible on screens due to lower resolution; serif better for print"
        }
      ]
    },
    {
      title: "Font Technologies",
      icon: <FileText className="w-6 h-6" />,
      topics: [
        {
          topic: "Character Metrics & Cases",
          keyPoints: [
            "Uppercase: Capitalized letters",
            "Lowercase: Small letters",
            "Intercap: Uppercase letter in middle of word",
            "Character metrics: Measurements applied to individual characters"
          ]
        },
        {
          topic: "Anti-aliasing",
          description: "Smoothing of jagged edges",
          keyPoints: [
            "Exploits color by blending (dithering) colors along edges",
            "Makes edges appear smoother",
            "Improves appearance on screen",
            "Left: aliased, Right: anti-aliased"
          ]
        },
        {
          topic: "Vector Fonts",
          description: "Also known as stroke fonts or True Type",
          keyPoints: [
            "Each character defined by series of lines and curves",
            "Fast rendering",
            "Standard for computer screens and printers",
            "Scalable without quality loss",
            "Mathematical definition of characters"
          ]
        },
        {
          topic: "Bitmap Fonts",
          description: "Also known as raster fonts",
          keyPoints: [
            "Each character defined by a bitmap (pixels)",
            "Shape distorts when size increased",
            "Don't scale well",
            "Look distorted when scaled down",
            "Suffer from jaggies when scaled up",
            "Fixed size limitation"
          ]
        }
      ]
    },
    {
      title: "Character Encoding Systems",
      icon: <FileText className="w-6 h-6" />,
      topics: [
        {
          topic: "ASCII",
          description: "American Standard Code for Information Interchange",
          keyPoints: [
            "7-bit coding system",
            "Assigns numbers to 128 characters",
            "Includes: lowercase and uppercase letters",
            "Punctuation marks, Arabic numbers, math symbols",
            "Extended set: 8 bits (ANSI standard characters)"
          ]
        },
        {
          topic: "ISO-Latin-1",
          description: "Character set used for HTML programming",
          keyPoints: [
            "Used while programming text of HTML pages",
            "Web standard character encoding",
            "Extended character support"
          ]
        },
        {
          topic: "Unicode",
          description: "16-bit architecture for multilingual text and character encoding",
          keyPoints: [
            "Universal text character encoding scheme",
            "Platform-independent",
            "Multi-lingual support",
            "Each character gets unique slot",
            "Slots are not re-used",
            "Characters, not glyphs",
            "Codes for all major languages",
            "European alphabetic scripts",
            "Middle Eastern right-to-left scripts",
            "Many scripts of Asia"
          ],
          characteristics: [
            "Universal encoding",
            "Platform independence",
            "Multilingual",
            "Unique character slots",
            "No slot reuse"
          ]
        }
      ]
    },
    {
      title: "Multimedia Hardware",
      icon: <Image className="w-6 h-6" aria-hidden="true" />,
      topics: [
        {
          topic: "Input Devices",
          devices: [
            {
              name: "Scanners",
              purpose: "Convert conventional images, texts, drawings, photos into digital form"
            },
            {
              name: "Video Cameras",
              types: [
                "Analog: Records in analog signals on magnetic tape",
                "Digital (DV): Records in digital signals on various media (tape, memory cards)"
              ]
            },
            {
              name: "Cameras",
              types: [
                "Ordinary: Captures on film roll",
                "Digital: Captures and stores in media card"
              ]
            },
            {
              name: "Audio Devices",
              purpose: "Record analog sound and convert to digital"
            },
            {
              name: "Video Capture Devices",
              purpose: "Convert analog video to digital video",
              features: [
                "FireWire transfers video from camera to computer",
                "Also transfers digital video for editing/storage"
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Multimedia Software",
      icon: <FileText className="w-6 h-6" />,
      topics: [
        {
          topic: "Editing Software by Element",
          categories: [
            {
              element: "Text",
              software: ["Notepad", "Microsoft Word", "Open Office Writer"],
              purpose: "Edit plain text and documents"
            },
            {
              element: "Graphics",
              software: ["Microsoft Paint", "Adobe Photoshop", "Corel Draw", "Gimp"],
              purpose: "Edit images, draw, illustrate pictures or objects"
            },
            {
              element: "Audio",
              software: ["Sound Recorder", "Sony Sound Forge", "Adobe Audition", "Audacity"],
              purpose: "Voice recording, music production, sound effects"
            },
            {
              element: "Video",
              software: ["Adobe Premiere", "Pinnacle Studio", "Shotcut"],
              purpose: "Edit video content"
            },
            {
              element: "Animation",
              software: ["Macromedia Flash", "Blender", "Synfig Studio"],
              purpose: "Produce 2D, 3D, special effects, web animation"
            }
          ]
        }
      ]
    },
    {
      title: "Standard File Formats",
      icon: <FileText className="w-6 h-6" />,
      topics: [
        {
          topic: "File Format Definition",
          description: "Particular way to store information in a computer. Allows decisions on type of media to use when developing multimedia programs."
        },
        {
          topic: "Text Formats",
          formats: [
            { ext: "TXT", name: "Plain Text" },
            { ext: "DOC/DOCX", name: "Microsoft Word" },
            { ext: "PDF", name: "Portable Document Format" },
            { ext: "RTF", name: "Rich Text Format" }
          ]
        },
        {
          topic: "Graphic Formats",
          formats: [
            { ext: "JPEG/JPG", name: "Joint Photographic Experts Group", use: "Photos" },
            { ext: "PNG", name: "Portable Network Graphics", use: "Web graphics" },
            { ext: "GIF", name: "Graphics Interchange Format", use: "Animations" },
            { ext: "BMP", name: "Bitmap", use: "Uncompressed images" },
            { ext: "TIFF", name: "Tagged Image File Format", use: "High quality" }
          ]
        },
        {
          topic: "Audio Formats",
          formats: [
            { ext: "MP3", name: "MPEG Audio Layer 3", use: "Compressed audio" },
            { ext: "WAV", name: "Waveform Audio", use: "Uncompressed audio" },
            { ext: "WMA", name: "Windows Media Audio" },
            { ext: "AAC", name: "Advanced Audio Coding" }
          ]
        },
        {
          topic: "Video Formats",
          formats: [
            { ext: "MPEG", name: "Moving Picture Experts Group" },
            { ext: "AVI", name: "Audio Video Interleave" },
            { ext: "WMV", name: "Windows Media Video" },
            { ext: "MOV", name: "QuickTime Movie" },
            { ext: "MP4", name: "MPEG-4" }
          ]
        },
        {
          topic: "Animation Formats",
          formats: [
            { ext: "SWF", name: "Shockwave Flash" },
            { ext: "GIF", name: "Animated GIF" },
            { ext: "FLA", name: "Flash Source" }
          ]
        }
      ]
    },
    {
      title: "Multimedia History Milestones",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        {
          topic: "Important Dates",
          milestones: [
            { year: "1914", event: "Animation created by tracing live action films (Rotoscoping)" },
            { year: "1926", event: "First practical television system demonstrated" },
            { year: "1927", event: "The Jazz Singer - first film with spoken dialogue in sync" },
            { year: "1928", event: "Steamboat Willie - first cartoon with synchronized sound" },
            { year: "1962", event: "Telstar - first communications satellite launched" },
            { year: "1991", event: "Tim Berners Lee developed World Wide Web (HTTP, HTML, URL)" },
            { year: "1993", event: "Mosaic - first graphical web browser released" },
            { year: "1995", event: "Disney's Toy Story - first feature-length computer-generated movie" },
            { year: "1996", event: "Affordable digital cameras became widely available" },
            { year: "2001", event: "Apple introduced iTunes and iPod" },
            { year: "2005", event: "YouTube.com launched" },
            { year: "2007", event: "Google surpassed Microsoft as most valuable global brand" }
          ]
        }
      ]
    },
    {
      title: "Application Areas",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        {
          topic: "Residential Services",
          applications: [
            "Video-on-demand",
            "Video phone/conferencing systems",
            "Multimedia home shopping (catalogs, product demos)",
            "Self-paced education"
          ]
        },
        {
          topic: "Business Services",
          applications: [
            "Corporate training",
            "Desktop multimedia conferencing",
            "Multimedia e-mail"
          ]
        },
        {
          topic: "Education",
          applications: [
            "Distance education",
            "Multimedia repository of class videos",
            "Access to digital multimedia libraries over high-speed networks"
          ]
        },
        {
          topic: "Science and Technology",
          applications: [
            "Computational visualization and prototyping",
            "Astronomy applications",
            "Environmental science"
          ]
        },
        {
          topic: "Medicine",
          applications: [
            "Diagnosis and treatment",
            "Multimedia databases with scanned images",
            "X-rays, assessments, response tracking"
          ]
        },
        {
          topic: "Typical Multimedia Applications",
          examples: [
            "Digital video editing and production systems",
            "Electronic newspapers/magazines",
            "World Wide Web",
            "Online reference works (encyclopedias, games)",
            "Home shopping",
            "Interactive TV",
            "Multimedia courseware",
            "Video conferencing",
            "Video-on-demand",
            "Interactive movies"
          ]
        }
      ]
    }
  ];

  const examQuestions = [
    {
      category: "Definitions & Concepts",
      questions: [
        { q: "Define multimedia and explain its components.", a: "Multimedia is the integration of continuous media (audio, video) and discrete media (text, graphics, images) through which digital information is conveyed. Components include text, graphics, audio, video, and animation." },
        { q: "What is the difference between multimedia and hypermedia?", a: "Multimedia is the combination of multiple media types, which can be linear (like cinema). Hypermedia is interactive multimedia with non-linear navigation through hyperlinks, allowing users to control their path (like the World Wide Web)." },
        { q: "Explain interactivity in multimedia.", a: "Interactivity means the user has control over the application, making the experience active rather than passive. Users can navigate, make choices, and control the flow of information." },
        { q: "What does CRAP stand for and why is it important?", a: "CRAP stands for Contrast, Repetition, Alignment, and Proximity. These are four fundamental design principles that help create professional, organized, and effective visual designs in multimedia." }
      ]
    },
    {
      category: "CRAP Design Principles",
      questions: [
        { q: "Explain the Contrast principle with examples.", a: "Contrast makes different things different and important elements stand out. Examples include varying sizes, colors, fonts, line thickness, spacing, and shapes. Rule: Make elements either exactly the same or VERY different - avoid slight similarities." },
        { q: "How does Repetition create unity in design?", a: "Repetition involves repeating design elements (fonts, colors, bullet types, spacing, alignment) throughout the interface. This creates consistency, unity, and helps develop a sense of organization." },
        { q: "What is the purpose of Alignment?", a: "Alignment creates visual flow and visually connects elements. Nothing should be placed arbitrarily - every element should have visual connection with another, creating a clean, clear, and sophisticated look." },
        { q: "Describe the Proximity principle.", a: "Proximity groups related items together and separates unrelated ones. When elements are in close proximity, they become one visual unit rather than separate units, improving organization and reducing clutter." }
      ]
    },
    {
      category: "Typography",
      questions: [
        { q: "What is the difference between typeface and font?", a: "Typeface is a family of graphic characters (e.g., Times, Arial). Font is a collection of characters of a single size and style belonging to a typeface family (e.g., Times 12-point italic)." },
        { q: "Explain the four styles of type.", a: "1) Old Style: slight thick/thin differences, rounded serifs, easy to read. 2) Modern: larger contrast in strokes, light and airy. 3) Sans Serif: no serifs, little stroke variation, used for headlines. 4) Occasional: special effects only, never for body text." },
        { q: "When should you use serif vs sans serif fonts?", a: "Serif fonts: body text in print (guides eyes along lines). Sans serif fonts: headlines, bold statements, and screen text (more legible on screens due to lower resolution)." },
        { q: "What is kerning and tracking?", a: "Kerning is reducing or adding space between letter pairs. Tracking is adjusting space in a block of text (loose or tight). Both affect readability and visual appearance." },
        { q: "Define leading and its usage.", a: "Leading is the vertical space allotted to a line of type. Use tighter leading in headlines and looser leading for body text to improve readability." },
        { q: "How does white space affect design?", a: "Too little white space makes design cramped. Too much makes design disjointed and unorganized, making it difficult to find related information. Balance is crucial for readability." }
      ]
    },
    {
      category: "Font Technologies",
      questions: [
        { q: "What is anti-aliasing?", a: "Anti-aliasing is the smoothing of jagged edges by blending (dithering) colors along the edges of letters, making them appear smoother on screen." },
        { q: "Compare vector and bitmap fonts.", a: "Vector fonts: defined by lines and curves, scalable without quality loss, also called True Type. Bitmap fonts: defined by pixels, don't scale well, suffer from distortion and jaggies when resized." },
        { q: "What are uppercase, lowercase, and intercap?", a: "Uppercase: capitalized letters. Lowercase: small letters. Intercap: placing an uppercase letter in the middle of a word." }
      ]
    },
    {
      category: "Character Encoding",
      questions: [
        { q: "Explain ASCII character encoding.", a: "ASCII (American Standard Code for Information Interchange) is a 7-bit coding system that assigns numbers to 128 characters including uppercase/lowercase letters, punctuation, Arabic numbers, and math symbols. Extended set uses 8 bits (ANSI)." },
        { q: "What is Unicode and why is it important?", a: "Unicode is a 16-bit architecture for multilingual text encoding. It's platform-independent, provides multi-lingual support, gives each character a unique slot (never reused), and defines codes for all major languages including European, Middle Eastern, and Asian scripts." },
        { q: "What is ISO-Latin-1 used for?", a: "ISO-Latin-1 character set is used while programming the text of HTML pages for web development." }
      ]
    },
    {
      category: "Multimedia Elements",
      questions: [
        { q: "List and briefly describe the five key multimedia elements.", a: "1) Text: basic element, can be hypertext. 2) Graphics: bitmap (real images) or vector (computer-drawn). 3) Audio: digital sound including speech, music, effects. 4) Video: moving images, digital format preferred. 5) Animation: 2D or 3D, makes static images appear to move." },
        { q: "What are the three considerations for effective text use?", a: "1) Position of text on screen, 2) Length of the message, 3) Legibility of the text." },
        { q: "Compare bitmap and vector graphics.", a: "Bitmap: real images from cameras/scanners, larger file sizes, quality loss when scaled. Vector: computer-drawn, smaller memory requirement, scalable without quality loss, defined by mathematical paths." },
        { q: "What is the difference between analog and digital audio?", a: "Analog audio is the original sound signal. Digital audio is the digital sampling of the actual sound. Multimedia uses digital audio." },
        { q: "List advantages of digital video.", a: "1) Easy editing, 2) Can be stored like other files, 3) Quality can be maintained, 4) Transferable within networks, 5) Allows non-linear editing. Disadvantage: large file sizes cause slow transfer." },
        { q: "What are the two categories of digital animation?", a: "2D (2 Dimension) and 3D (3 Dimension) animation." }
      ]
    },
    {
      category: "Hardware & Software",
      questions: [
        { q: "List five multimedia input devices and their purposes.", a: "1) Scanner: converts images to digital. 2) Video camera: records video (analog or digital). 3) Digital camera: captures images on media card. 4) Audio devices: record and digitize sound. 5) Video capture devices: convert analog video to digital." },
        { q: "What is the difference between analog and digital video cameras?", a: "Analog video camera records in analog signals on magnetic tape. Digital video camera (DV) records in digital signals on various media like digital video tape or memory cards." },
        { q: "Name editing software for each multimedia element.", a: "Text: Notepad, MS Word. Graphics: Photoshop, Corel Draw, Gimp. Audio: Audacity, Sound Forge, Audition. Video: Adobe Premiere, Shotcut. Animation: Flash, Blender, Synfig." },
        { q: "What does a FireWire do?", a: "FireWire helps transfer video from video camera to computer. It also transfers digital video to the computer for editing or storage." }
      ]
    },
    {
      category: "File Formats",
      questions: [
        { q: "What is a file format?", a: "A file format is a particular way to store information in a computer. It allows you to make decisions about the type of media to use when developing multimedia programs." },
        { q: "Name common image file formats and their uses.", a: "JPEG: photos (compressed). PNG: web graphics with transparency. GIF: animations. BMP: uncompressed images. TIFF: high-quality images." },
        { q: "List video file formats.", a: "MPEG (Moving Picture Experts Group), AVI (Audio Video Interleave), WMV (Windows Media Video), MOV (QuickTime), MP4 (MPEG-4)." },
        { q: "What audio formats are commonly used?", a: "MP3 (compressed), WAV (uncompressed), WMA (Windows Media Audio), AAC (Advanced Audio Coding)." }
      ]
    },
    {
      category: "History & Applications",
      questions: [
        { q: "Name three important multimedia milestones from 1990s onwards.", a: "1991: Tim Berners Lee developed World Wide Web. 1993: Mosaic first graphical web browser. 1995: Toy Story first feature-length computer-generated movie." },
        { q: "What is Rotoscoping?", a: "Animation technique created in 1914 by tracing live action films frame by frame." },
        { q: "List application areas of multimedia in education.", a: "Distance education, multimedia repository of class videos, access to digital multimedia libraries over high-speed networks, self-paced learning." },
        { q: "How is multimedia used in medicine?", a: "Diagnosis and treatment, multimedia databases with scanned images, X-rays, assessments and response tracking, medical training and simulation." },
        { q: "Name five typical multimedia applications.", a: "1) Digital video editing systems, 2) Electronic newspapers/magazines, 3) World Wide Web, 4) Video conferencing, 5) Interactive TV, 6) Multimedia courseware, 7) Video-on-demand." }
      ]
    },
    {
      category: "Comparison Questions",
      questions: [
        { q: "Compare Old Style and Modern type.", a: "Both have serifs, but Old Style has slight differences between thick/thin strokes with rounded serifs (easier to read). Modern type has much larger contrast between thick/thin strokes, is light and airy, and is considered more stylish." },
        { q: "Contrast serif and sans serif usage in print vs screen.", a: "Print: Serif fonts for body text (guides eyes along lines), sans serif for headlines. Screen: Sans serif more legible due to lower resolution, especially in smaller sizes. Computer screens don't provide as much resolution as print." },
        { q: "Compare running-config and startup-config. (Note: This seems from wrong lecture)", a: "This appears to be from networking content, not multimedia. For multimedia: Compare bitmap vs vector graphics instead." },
        { q: "What is the difference between discrete and continuous media?", a: "Discrete media: Text, graphics, images - fixed, static content. Continuous media: Audio, video - time-dependent content that flows continuously." }
      ]
    },
    {
      category: "Design & Best Practices",
      questions: [
        { q: "Why should occasional type fonts never be used for body text?", a: "Occasional types are used for special effects and create high contrast, but they are hard to read. They should only be used sparingly for emphasis, never for setting blocks of text." },
        { q: "What is the rule for using similar elements in contrast?", a: "Avoid making 2 elements just similar. Either make them exactly the same (same font, color, etc.) OR make them VERY different. Slight similarity creates confusion." },
        { q: "How does line length affect readability?", a: "Long lines with small font: saves space but very hard to read, readers lose their place. Short lines with large font: opposite problem, too much eye movement. Balance is needed for optimal readability." },
        { q: "Why is 'words must be chosen carefully' important in multimedia?", a: "Words appear in titles, menus, navigational aids - they guide users through the application. Poor word choice can confuse users and make navigation difficult. Test the words you plan to use and keep a thesaurus handy." }
      ]
    },
    {
      category: "True/False & Short Answer",
      questions: [
        { q: "True or False: Vector fonts scale better than bitmap fonts.", a: "True. Vector fonts are defined by mathematical lines and curves, so they scale without quality loss. Bitmap fonts are pixel-based and suffer from distortion and jaggies when scaled." },
        { q: "True or False: Multimedia is always interactive.", a: "False. Multimedia is the combination of multiple media types. It becomes interactive multimedia when users have control. A cinema presentation is multimedia but not interactive." },
        { q: "True or False: Sans means 'with' in Sans Serif.", a: "False. 'San' means 'without' - Sans Serif means without serifs." },
        { q: "True or False: Unicode uses 8-bit encoding.", a: "False. Unicode uses 16-bit architecture for character encoding, allowing support for multiple languages." },
        { q: "What are the two features that multimedia components use in combination?", a: "Interactivity (user control) and Hyperlinking (jumping between sections via index or links)." },
        { q: "Why is the World Wide Web considered hypermedia?", a: "Because it combines multiple media types (text, images, audio, video) with hyperlinks in a non-linear, interactive format where users control navigation." },
        { q: "What is the standard measurement unit in typography?", a: "Points. Measured in increments of 0.1, used by most programs, and is the vocabulary of typesetting." }
      ]
    },
    {
      category: "Application & Analysis",
      questions: [
        { q: "How would you apply CRAP principles to design a multimedia application homepage?", a: "Contrast: Use different sizes for headings vs body text, bold colors for important buttons. Repetition: Consistent color scheme, fonts, button styles throughout. Alignment: Align all elements to create visual flow, nothing random. Proximity: Group related menu items together, separate different sections clearly." },
        { q: "Why are digital video files large and how does this affect multimedia applications?", a: "Digital video contains large amounts of data (many frames per second with audio). Large file sizes make transfer slow, especially over Internet. This affects streaming quality, storage requirements, and load times in multimedia applications." },
        { q: "Explain why both hypertext and graphics are needed in modern multimedia.", a: "Hypertext provides navigation and information structure, allowing users to jump between content. Graphics make applications visually attractive and help illustrate ideas that text alone cannot convey effectively. Together they create engaging, functional multimedia experiences." },
        { q: "How does character encoding affect multilingual multimedia applications?", a: "Unicode's 16-bit architecture allows representation of characters from all major languages (European, Asian, Middle Eastern scripts). This enables truly global multimedia applications that can display content in any language without character conflicts or limitations." }
      ]
    }
  ];

  const quickReference = {
    "CRAP Summary": {
      "Contrast": "Make different things different (sizes, colors, fonts, spacing, shapes)",
      "Repetition": "Repeat design elements for unity and consistency",
      "Alignment": "Create visual flow, connect elements visually",
      "Proximity": "Group related items, separate unrelated ones"
    },
    "Five Multimedia Elements": {
      "Text": "Basic element, hypertext capability, consider position/length/legibility",
      "Graphics": "Bitmap (real images) or Vector (computer-drawn)",
      "Audio": "Digital sampling of sound - speech, music, effects",
      "Video": "Moving images, easily edited, large files",
      "Animation": "2D or 3D, makes static images move"
    },
    "Font Types": {
      "Old Style": "Slight stroke variation, rounded serifs, easy to read",
      "Modern": "Large stroke contrast, light and airy",
      "Sans Serif": "No serifs, headlines/screen text",
      "Occasional": "Special effects only, never for body text"
    },
    "Character Encoding": {
      "ASCII": "7-bit, 128 characters, basic English",
      "ANSI": "8-bit extended ASCII",
      "ISO-Latin-1": "HTML programming",
      "Unicode": "16-bit, multilingual, universal"
    },
    "Typography Terms": {
      "Typeface": "Family of characters (Times, Arial)",
      "Font": "Specific size and style of typeface",
      "Kerning": "Space between letter pairs",
      "Tracking": "Space in text block",
      "Leading": "Vertical line spacing",
      "Points": "Type measurement unit"
    }
  };

  const examTips = [
    {
      tip: "Know CRAP Principles",
      details: "Be able to define each principle, give examples, and explain when/how to use them. Common exam question!"
    },
    {
      tip: "Memorize the 5 Key Elements",
      details: "Text, Graphics, Audio, Video, Animation. Know characteristics and use cases for each."
    },
    {
      tip: "Understand Multimedia vs Hypermedia",
      details: "Multimedia = combination of media. Hypermedia = interactive multimedia with hyperlinks. World Wide Web is hypermedia example."
    },
    {
      tip: "Typography Fundamentals",
      details: "Know serif vs sans serif usage, typeface vs font difference, and when to use each type style."
    },
    {
      tip: "Character Encoding Evolution",
      details: "ASCII (128 chars) → ANSI (256 chars) → Unicode (multilingual, 16-bit). Understand why Unicode matters."
    },
    {
      tip: "Hardware & Software",
      details: "Know which software edits which element type. Know input devices and their purposes."
    },
    {
      tip: "File Formats",
      details: "Memorize common formats for each media type: JPEG/PNG/GIF for images, MP3/WAV for audio, MPEG/AVI for video."
    },
    {
      tip: "Historical Milestones",
      details: "Focus on 1990s onwards: WWW (1991), Mosaic (1993), Toy Story (1995), YouTube (2005)."
    },
    {
      tip: "Design Best Practices",
      details: "White space balance, line length considerations, contrast rules (same or very different, not similar)."
    },
    {
      tip: "Application Areas",
      details: "Know how multimedia is used in education, medicine, business, residential services. Be specific."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-12 h-12" />
              <div>
                <h1 className="text-4xl font-bold">Multimedia Technology</h1>
                <h2 className="text-2xl font-semibold mt-1">Complete Exam Study Guide</h2>
              </div>
            </div>
            <p className="text-blue-100 text-lg">
              ICT1122 - Lectures 01 & 02 Comprehensive Review
            </p>
          </div>

          {/* Study Tips */}
          <div className="p-8 bg-yellow-50 border-b-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-yellow-600" />
              Exam Preparation Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examTips.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-gray-800 mb-2">{item.tip}</h4>
                  <p className="text-gray-600 text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-blue-600">
                <div className="text-blue-600">{section.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
              </div>

              {section.topics.map((topic, topicIdx) => (
                <div key={topicIdx} className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-indigo-600 mb-3">{topic.topic}</h3>
                  
                  {topic.description && (
                    <p className="text-gray-700 mb-4 leading-relaxed">{topic.description}</p>
                  )}

                  {topic.keyPoints && (
                    <div className="mb-4">
                      <span className="font-semibold text-gray-700">Key Points:</span>
                      <ul className="mt-2 space-y-2">
                        {topic.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="text-blue-600 font-bold mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {topic.examples && (
                    <div className="mb-4">
                      <span className="font-semibold text-gray-700">Examples:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {topic.examples.map((ex, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {topic.difference && (
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                      <span className="font-semibold text-blue-700">Important Distinction: </span>
                      <span className="text-gray-700">{topic.difference}</span>
                    </div>
                  )}

                  {topic.subTopics && (
                    <div className="space-y-4 mt-4">
                      {topic.subTopics.map((sub, idx) => (
                        <div key={idx} className="bg-white p-4 rounded border border-gray-300">
                          <h4 className="font-bold text-gray-800 mb-2">{sub.name}</h4>
                          <ul className="space-y-1">
                            {sub.features.map((feature, fIdx) => (
                              <li key={fIdx} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="text-indigo-500">▸</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {topic.types && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {Object.entries(topic.types).map(([key, value], idx) => (
                        <div key={idx} className="bg-white p-3 rounded border border-gray-300">
                          <span className="font-bold text-gray-800">{key}: </span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {topic.categories && (
                    <div className="space-y-4 mt-4">
                      {topic.categories.map((cat, idx) => (
                        <div key={idx} className="bg-white p-4 rounded border-l-4 border-indigo-500">
                          <h4 className="font-bold text-gray-800 mb-2">{cat.element}</h4>
                          <p className="text-sm text-gray-600 mb-2">{cat.purpose}</p>
                          <div className="flex flex-wrap gap-2">
                            {cat.software.map((sw, sIdx) => (
                              <span key={sIdx} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                                {sw}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {topic.formats && (
                    <div className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {topic.formats.map((format, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border border-gray-300">
                            <span className="font-mono font-bold text-blue-600">{format.ext}</span>
                            <span className="text-gray-600"> - {format.name}</span>
                            {format.use && <span className="text-gray-500 text-sm block mt-1">Use: {format.use}</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {topic.devices && (
                    <div className="space-y-3 mt-4">
                      {topic.devices.map((device, idx) => (
                        <div key={idx} className="bg-white p-4 rounded border border-gray-300">
                          <h4 className="font-bold text-gray-800 mb-2">{device.name}</h4>
                          {device.purpose && <p className="text-gray-600 text-sm mb-2">{device.purpose}</p>}
                          {device.types && (
                            <ul className="space-y-1">
                              {device.types.map((type, tIdx) => (
                                <li key={tIdx} className="text-gray-600 text-sm flex items-start gap-2">
                                  <span className="text-green-600">▸</span>
                                  <span>{type}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {device.features && (
                            <ul className="space-y-1 mt-2">
                              {device.features.map((feature, fIdx) => (
                                <li key={fIdx} className="text-gray-600 text-sm flex items-start gap-2">
                                  <span className="text-blue-600">▸</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {topic.milestones && (
                    <div className="space-y-2 mt-4">
                      {topic.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex gap-4 bg-white p-3 rounded border border-gray-300">
                          <span className="font-bold text-blue-600 min-w-[60px]">{milestone.year}</span>
                          <span className="text-gray-700">{milestone.event}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {topic.applications && (
                    <ul className="mt-3 space-y-2">
                      {topic.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-green-600 font-bold mt-1">✓</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {topic.considerations && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {topic.considerations.map((con, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {con}
                        </span>
                      ))}
                    </div>
                  )}

                  {topic.elements && (
                    <div className="mt-3">
                      <span className="font-semibold text-gray-700">Elements to contrast:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {topic.elements.map((el, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {topic.repeatable && (
                    <div className="mt-3">
                      <span className="font-semibold text-gray-700">Repeatable elements:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {topic.repeatable.map((el, idx) => (
                          <span key={idx} className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {topic.rule && (
                    <div className="mt-3 bg-red-50 p-3 rounded border-l-4 border-red-500">
                      <span className="font-semibold text-red-700">Rule: </span>
                      <span className="text-gray-700">{topic.rule}</span>
                    </div>
                  )}

                  {topic.advantages && (
                    <div className="mt-3">
                      <span className="font-semibold text-green-700">Advantages:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {topic.advantages.map((adv, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                            {adv}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {topic.characteristics && (
                    <div className="mt-3">
                      <span className="font-semibold text-gray-700">Characteristics:</span>
                      <ul className="mt-2 space-y-1">
                        {topic.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="text-purple-600">▸</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {topic.examples && topic.examples.length > 0 && !Array.isArray(topic.examples[0]) && (
                    <div className="mt-3">
                      <span className="font-semibold text-gray-700">Examples:</span>
                      <div className="mt-2 space-y-1">
                        {topic.examples.map((ex, idx) => (
                          <div key={idx} className="text-gray-600 font-mono text-sm bg-gray-100 p-2 rounded">
                            {ex}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Exam Questions Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-green-600">
            <HelpCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Practice Exam Questions</h2>
          </div>

          {examQuestions.map((category, catIdx) => (
            <div key={catIdx} className="mb-8">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4 bg-indigo-50 p-3 rounded">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, idx) => (
                  <div key={idx} className="p-5 bg-gray-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Q{idx + 1}: {item.q}
                    </h4>
                    <div className="bg-white p-4 rounded mt-2">
                      <span className="font-semibold text-green-600">Answer: </span>
                      <span className="text-gray-700">{item.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Quick Reference Cheat Sheet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(quickReference).map(([title, content], idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{title}</h3>
                <div className="space-y-2">
                  {Object.entries(content).map(([key, value], cIdx) => (
                    <div key={cIdx} className="bg-white p-3 rounded shadow-sm">
                      <div className="font-semibold text-gray-800 text-sm mb-1">{key}</div>
                      <div className="text-gray-600 text-xs">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-6 text-center">
          <p className="text-xl font-bold mb-2">Good Luck with Your Exam! 🎓</p>
          <p className="text-blue-100">Study smart, practice well, and you&apos;ll excel!</p>
          <p className="text-sm mt-3 text-blue-200">
            Created by Hasitha Sandakelum | Multimedia Technology
          </p>
        </div>
      </div>
    </div>
  );
}