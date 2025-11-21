// Quiz 1: Digital Images Fundamentals
const DigitalImagesQuiz = {
  id: "digital-images-fundamentals",
  title: "Digital Images Fundamentals",
  category: "Multimedia",
  questions: [
    {
      question: "What is a digital image composed of?",
      options: ["Picture elements or pixels", "Vector points only", "Analog signals", "Continuous wave patterns"],
      correctIndex: 0,
    },
    {
      question: "What does a pixel represent in a digital image?",
      options: ["A vector line", "One point of information", "An entire image section", "A color palette"],
      correctIndex: 1,
    },
    {
      question: "What components make up a digital image data file?",
      options: ["Only pixel data", "Header and pixel matrix", "Vectors and curves", "Compressed algorithms only"],
      correctIndex: 1,
    },
    {
      question: "What does PPI stand for in image resolution?",
      options: ["Pictures Per Inch", "Pixels Per Inch", "Points Per Image", "Pixel Placement Index"],
      correctIndex: 1,
    },
    {
      question: "What is the aspect ratio of standard displays?",
      options: ["16:9", "4:3", "16:10", "21:9"],
      correctIndex: 1,
    },
    {
      question: "How many pixels are in a 1600x1200 resolution image?",
      options: ["1,920,000 pixels", "2,800,000 pixels", "1,600,000 pixels", "2,400,000 pixels"],
      correctIndex: 0,
    },
    {
      question: "What does higher image resolution mean?",
      options: ["Fewer pixels per inch", "More pixels per inch", "Larger file compression", "Lower quality images"],
      correctIndex: 1,
    },
    {
      question: "In a 1-bit monochrome image, what can each pixel represent?",
      options: ["256 colors", "16 colors", "4 colors", "2 values only"],
      correctIndex: 3,
    },
    {
      question: "How many gray levels can an 8-bit grayscale image represent?",
      options: ["128 levels", "256 levels", "512 levels", "64 levels"],
      correctIndex: 1,
    },
    {
      question: "What does RGB stand for in color models?",
      options: ["Red Green Blue", "Real Graphic Bitmap", "Raster Grid Base", "Render Generate Build"],
      correctIndex: 0,
    },
    {
      question: "How many colors can a 24-bit color image support?",
      options: ["256 colors", "65,536 colors", "16,777,216 colors", "1,024 colors"],
      correctIndex: 2,
    },
    {
      question: "What is the purpose of an alpha channel in images?",
      options: ["Color correction", "Transparency effects", "File compression", "Resolution scaling"],
      correctIndex: 1,
    },
    {
      question: "How many bytes represent each pixel in a 24-bit color image?",
      options: ["One byte", "Two bytes", "Three bytes", "Four bytes"],
      correctIndex: 2,
    },
    {
      question: "What is image bit depth?",
      options: ["Image file size", "Total number of colors", "Pixel dimensions", "Compression ratio"],
      correctIndex: 1,
    },
    {
      question: "What happens to file size as bit depth increases?",
      options: ["It decreases significantly", "It remains constant", "It increases", "It depends on resolution only"],
      correctIndex: 2,
    },
    {
      question: "What are bitmap images comprised of?",
      options: ["Mathematical equations", "Dots called pixels", "Vector paths", "Continuous curves"],
      correctIndex: 1,
    },
    {
      question: "How are bitmap images organized?",
      options: ["Random distribution", "Grid arrangement", "Circular pattern", "Hierarchical tree"],
      correctIndex: 1,
    },
    {
      question: "What does editing pixels in a bitmap involve?",
      options: ["Changing mathematical formulas", "Changing color, shade and brightness", "Redrawing vector paths", "Adjusting curve points"],
      correctIndex: 1,
    },
    {
      question: "How do vector graphics describe images?",
      options: ["Using pixel grids", "Using lines and curves", "Using color gradients only", "Using bitmap arrays"],
      correctIndex: 1,
    },
    {
      question: "What determines a leaf's color in vector graphics?",
      options: ["Pixel density", "Stroke and fill colors", "Bit depth", "Resolution settings"],
      correctIndex: 1,
    },
    {
      question: "Which type of graphic resizes better?",
      options: ["Bitmap images", "Vector graphics", "Both resize equally", "Neither can resize"],
      correctIndex: 1,
    },
    {
      question: "Which graphics type usually requires less storage space?",
      options: ["Bitmap images", "Raster images", "Vector graphics", "All require equal space"],
      correctIndex: 2,
    },
    {
      question: "What is easier to edit in vector graphics compared to bitmaps?",
      options: ["Individual pixels", "Color gradients", "Objects", "File headers"],
      correctIndex: 2,
    },
    {
      question: "What is rasterization?",
      options: ["Converting pixels to vectors", "Converting vector graphics to raster images", "Compressing image files", "Increasing resolution"],
      correctIndex: 1,
    },
    {
      question: "What is vectorization also known as?",
      options: ["Pixelation", "Rasterization", "Tracing", "Compression"],
      correctIndex: 2,
    },
    {
      question: "What does vectorization convert?",
      options: ["Vectors to bitmaps", "Bitmaps to vector images", "Colors to grayscale", "High to low resolution"],
      correctIndex: 1,
    },
    {
      question: "What advantage do vector shapes provide over bitmaps?",
      options: ["Better compression", "Scale without quality loss", "Faster rendering", "Smaller initial size only"],
      correctIndex: 1,
    },
    {
      question: "What does digitization imply about digital images?",
      options: ["Perfect representation", "Exact duplication", "Approximation of real scenes", "Infinite detail"],
      correctIndex: 2,
    },
    {
      question: "What information does a digital image header contain?",
      options: ["Pixel colors only", "Format information", "Compression algorithms", "Display settings"],
      correctIndex: 1,
    },
    {
      question: "What factors affect image file size?",
      options: ["Pixel count only", "Format type only", "Pixel count, color depth and format", "Resolution only"],
      correctIndex: 2,
    },
    {
      question: "In a 2-bit pixel, what does value 00 typically represent?",
      options: ["White", "Light grey", "Grey", "Black"],
      correctIndex: 3,
    },
    {
      question: "In a 2-bit pixel, what does value 11 typically represent?",
      options: ["Black", "Grey", "Light grey", "White"],
      correctIndex: 3,
    },
    {
      question: "What range of values can each color have in RGB?",
      options: ["0 to 100", "0 to 128", "0 to 255", "0 to 512"],
      correctIndex: 2,
    },
    {
      question: "How many bits represent each color in a 24-bit RGB image?",
      options: ["4 bits", "6 bits", "8 bits", "12 bits"],
      correctIndex: 2,
    },
    {
      question: "What is a RAW image?",
      options: ["Compressed image", "Edited photograph", "Maximum image information when photo is taken", "Low resolution image"],
      correctIndex: 2,
    },
    {
      question: "What are bitmap images also called?",
      options: ["Vector images", "Raster images", "SVG images", "EPS images"],
      correctIndex: 1,
    },
    {
      question: "What is a two-dimensional array of pixel values called?",
      options: ["Vector graphic", "Bitmap image", "Scalable graphic", "Path illustration"],
      correctIndex: 1,
    },
    {
      question: "At what size will a 1600x1200 pixel image at 200 PPI print?",
      options: ["16 x 12 inches", "8 x 6 inches", "12 x 9 inches", "4 x 3 inches"],
      correctIndex: 1,
    },
    {
      question: "What is the common resolution format 640x480 measured in?",
      options: ["Inches", "Centimeters", "Pixels", "Points"],
      correctIndex: 2,
    },
    {
      question: "What does aspect ratio calculate?",
      options: ["File size to resolution", "Height to width", "Columns divided by rows", "Bit depth to pixels"],
      correctIndex: 2,
    },
    {
      question: "Which displays use 16:9 aspect ratio?",
      options: ["Standard displays", "Wide-screen displays", "Mobile displays only", "Print displays"],
      correctIndex: 1,
    },
    {
      question: "What happens when bitmap images are viewed at correct resolution?",
      options: ["Pixels appear separated", "Dots fit together like mosaic tiles", "Image becomes blurry", "Colors become inverted"],
      correctIndex: 1,
    },
    {
      question: "What do vector graphics include for each element?",
      options: ["Pixel coordinates only", "Color and position information", "Bit depth data", "Compression ratios"],
      correctIndex: 1,
    },
    {
      question: "How is a leaf's outline described in vector graphics?",
      options: ["By pixel arrangement", "By series of points", "By color values", "By bit depth"],
      correctIndex: 1,
    },
    {
      question: "What are the two main categories of graphics?",
      options: ["Digital and analog", "Bitmap and vector", "Color and grayscale", "Compressed and uncompressed"],
      correctIndex: 1,
    },
    {
      question: "What value might a dark pixel have in 8-bit grayscale?",
      options: ["230", "128", "10", "255"],
      correctIndex: 2,
    },
    {
      question: "What value might a bright pixel have in 8-bit grayscale?",
      options: ["10", "50", "100", "230"],
      correctIndex: 3,
    },
    {
      question: "Why are 24-bit color images stored as 32-bit images?",
      options: ["For better compression", "For extra byte storing alpha value", "For faster processing", "For color correction"],
      correctIndex: 1,
    },
    {
      question: "What is compositing in graphics?",
      options: ["Color correction", "File compression", "Overlapping several objects", "Resolution adjustment"],
      correctIndex: 2,
    },
    {
      question: "What does higher resolution result in?",
      options: ["Smaller file size", "Lower quality image", "High-quality image", "Faster loading time"],
      correctIndex: 2,
    },
  ],
};

// Quiz 2: Animation Basics
const AnimationBasicsQuiz = {
  id: "animation-basics",
  title: "Animation Basics",
  category: "Multimedia",
  questions: [
    {
      question: "What does the word 'animate' mean?",
      options: ["To create graphics", "To bring to life", "To compress video", "To edit images"],
      correctIndex: 1,
    },
    {
      question: "What is animation primarily used for in multimedia?",
      options: ["File compression", "Bringing images to life", "Color correction", "Audio synchronization"],
      correctIndex: 1,
    },
    {
      question: "What physiological phenomenon creates the illusion of movement?",
      options: ["Optical illusion", "Persistence of vision", "Color perception", "Depth perception"],
      correctIndex: 1,
    },
    {
      question: "Where is the image focused in the human eye?",
      options: ["On the cornea", "On the lens", "On the retina", "On the pupil"],
      correctIndex: 2,
    },
    {
      question: "What does the brain do with retinal images?",
      options: ["Immediately forgets them", "Retains them slightly longer than registered", "Processes them instantly", "Stores them permanently"],
      correctIndex: 1,
    },
    {
      question: "What biological phenomenon makes animation possible?",
      options: ["Color blindness", "Persistence of vision", "Depth perception", "Peripheral vision"],
      correctIndex: 1,
    },
    {
      question: "What psychological phenomenon works with persistence of vision?",
      options: ["Phi phenomenon", "Gestalt theory", "Color theory", "Depth perception"],
      correctIndex: 0,
    },
    {
      question: "What creates the illusion of continuous motion in animation?",
      options: ["Slow frame rates", "Rapidly changing similar images", "Static pictures", "Color gradients"],
      correctIndex: 1,
    },
    {
      question: "What does CGI stand for?",
      options: ["Computer Graphics Interface", "Computer-Generated Imagery", "Central Graphics Integration", "Creative Graphics Input"],
      correctIndex: 1,
    },
    {
      question: "What is computer animation a branch of?",
      options: ["Digital audio", "CGI", "Web design", "Database management"],
      correctIndex: 1,
    },
    {
      question: "How is movement illusion created in computer animation?",
      options: ["Using single static image", "Displaying and replacing images quickly", "Changing colors rapidly", "Using vector graphics only"],
      correctIndex: 1,
    },
    {
      question: "What is kinematics the study of?",
      options: ["Color theory", "Object movements", "Sound waves", "Image compression"],
      correctIndex: 1,
    },
    {
      question: "What does kinematics focus on regarding movements?",
      options: ["Speed and style", "Color and texture", "Size and shape", "Format and type"],
      correctIndex: 0,
    },
    {
      question: "What structures does kinematics study?",
      options: ["Flat surfaces", "Objects with joints", "Geometric shapes", "Color gradients"],
      correctIndex: 1,
    },
    {
      question: "What matters most in animation quality?",
      options: ["Individual frame quality", "Quality of movement", "Image resolution", "File size"],
      correctIndex: 1,
    },
    {
      question: "What technique did early animators use?",
      options: ["Pose to pose", "Straight ahead animation", "Reverse animation", "Random frame creation"],
      correctIndex: 1,
    },
    {
      question: "What is straight ahead animation?",
      options: ["Drawing final frame first", "Every frame is minor adjustment on previous", "Skipping intermediate frames", "Using computer generation only"],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a principle of animation?",
      options: ["Anticipation", "Exaggeration", "Pixelation", "Timing"],
      correctIndex: 2,
    },
    {
      question: "What technique involves drawing key poses for action?",
      options: ["Straight ahead", "Pose to pose", "Follow through", "Secondary action"],
      correctIndex: 1,
    },
    {
      question: "How long does it take viewers to refocus on new movement?",
      options: ["One second", "Half a second", "A fifth of a second", "Two seconds"],
      correctIndex: 2,
    },
    {
      question: "How many frames equal a fifth of a second in standard animation?",
      options: ["3 frames", "6 frames", "12 frames", "24 frames"],
      correctIndex: 1,
    },
    {
      question: "What is anticipation in animation?",
      options: ["Final movement", "Preliminary movement before main action", "Post-action effect", "Camera angle change"],
      correctIndex: 1,
    },
    {
      question: "What are follow through movements caused by?",
      options: ["Computer errors", "Physics of nature", "Animator preference", "Camera settings"],
      correctIndex: 1,
    },
    {
      question: "Which is an example of follow through?",
      options: ["Character standing still", "Hair waving after turning head", "Initial jump movement", "Background scenery"],
      correctIndex: 1,
    },
    {
      question: "Why is exaggeration used in animation?",
      options: ["To save time", "To keep audience entertained", "To reduce file size", "To simplify drawing"],
      correctIndex: 1,
    },
    {
      question: "What should you do when showing character weight?",
      options: ["Understate it", "Show it realistically only", "Overdo it for effect", "Ignore it completely"],
      correctIndex: 2,
    },
    {
      question: "What is the charm of most animation characters?",
      options: ["Perfect realism", "Not being real", "Photographic quality", "Complex movements"],
      correctIndex: 1,
    },
    {
      question: "How is animation movement divided?",
      options: ["Whole seconds", "Tenths of seconds", "Minutes", "Hundredths of seconds"],
      correctIndex: 1,
    },
    {
      question: "What describes computer animation timing?",
      options: ["Real-time clocks", "Keyframes", "Audio tracks", "Color codes"],
      correctIndex: 1,
    },
    {
      question: "Who establishes keyframes in computer animation?",
      options: ["The computer automatically", "The animator", "The rendering engine", "The viewer"],
      correctIndex: 1,
    },
    {
      question: "What does varying the spacing of key poses do?",
      options: ["Changes color", "Varies the speed", "Adjusts resolution", "Modifies file format"],
      correctIndex: 1,
    },
    {
      question: "What does speed variation signal in animation?",
      options: ["File size", "Emotion", "Resolution", "Color depth"],
      correctIndex: 1,
    },
    {
      question: "What happens if a character appears off-balanced but never falls?",
      options: ["Looks realistic", "Narrative is ruined", "Animation improves", "Speed increases"],
      correctIndex: 1,
    },
    {
      question: "What should a character do when leaning forward and pointing?",
      options: ["Stay perfectly still", "Stretch other arm behind", "Lean further forward", "Close their eyes"],
      correctIndex: 1,
    },
    {
      question: "What determines how much an object weighs in animation?",
      options: ["Color used", "Effort required to move it", "Size on screen", "Frame rate"],
      correctIndex: 1,
    },
    {
      question: "How should thrown objects travel in animation?",
      options: ["In straight lines only", "In random patterns", "Along realistic arcs", "In circular paths always"],
      correctIndex: 2,
    },
    {
      question: "What do secondary actions support?",
      options: ["Background scenery", "The main action", "Audio tracks", "Camera movements"],
      correctIndex: 1,
    },
    {
      question: "Which is an example of secondary action?",
      options: ["Walking forward", "Man twirling his mustache", "Main character speaking", "Scene transition"],
      correctIndex: 1,
    },
    {
      question: "What do secondary actions add to a character?",
      options: ["File size", "Personality", "Resolution", "Speed"],
      correctIndex: 1,
    },
    {
      question: "How do characters express feelings in animation?",
      options: ["Through dialogue only", "Through body language", "Through background color", "Through camera angles only"],
      correctIndex: 1,
    },
    {
      question: "What do angry characters typically do?",
      options: ["Slouch backwards", "Push out their chest", "Close their eyes", "Stand perfectly still"],
      correctIndex: 1,
    },
    {
      question: "What should staging convey?",
      options: ["File format", "The mood", "Resolution", "Frame rate"],
      correctIndex: 1,
    },
    {
      question: "What does staging include?",
      options: ["Audio levels only", "Photography direction and composition", "File compression", "Color correction only"],
      correctIndex: 1,
    },
    {
      question: "What should a scary scene be filled with?",
      options: ["Bright colors", "Spooky symbols", "Happy characters", "Modern elements"],
      correctIndex: 1,
    },
    {
      question: "Why is squash and stretch used in animation?",
      options: ["To save time", "To exaggerate weight", "To reduce file size", "To simplify drawing"],
      correctIndex: 1,
    },
    {
      question: "How do rubber balls differ from cannon balls in animation?",
      options: ["Rubber balls squash more", "Cannon balls squash more", "Both squash equally", "Neither squashes"],
      correctIndex: 0,
    },
    {
      question: "What is computer-assisted animation usually classed as?",
      options: ["Three-dimensional", "Two-dimensional", "Four-dimensional", "One-dimensional"],
      correctIndex: 1,
    },
    {
      question: "What is tweening?",
      options: ["Final rendering", "Filling in-between frames", "Creating keyframes", "Audio synchronization"],
      correctIndex: 1,
    },
    {
      question: "What axes do 3D animation creators design with?",
      options: ["X and Y only", "X, Y, and Z", "A, B, and C", "R, G, and B"],
      correctIndex: 1,
    },
    {
      question: "Which film is an example of computer-assisted animation?",
      options: ["Toy Story", "Beauty and the Beast", "The Incredibles", "Shrek"],
      correctIndex: 1,
    },
  ],
};

// Quiz 3: Advanced Animation and Image Processing
const AdvancedTopicsQuiz = {
  id: "advanced-animation-image-processing",
  title: "Advanced Animation and Image Processing",
  category: "Multimedia",
  questions: [
    {
      question: "What is another name for computer-generated animation?",
      options: ["2D animation", "3D animation", "Cel animation", "Path animation"],
      correctIndex: 1,
    },
    {
      question: "What are the two types of 2D animation?",
      options: ["Vector and raster", "Cel and path animation", "Bitmap and JPEG", "RGB and CMYK"],
      correctIndex: 1,
    },
    {
      question: "Who made cel animation famous?",
      options: ["Pixar", "DreamWorks", "Disney", "Warner Bros"],
      correctIndex: 2,
    },
    {
      question: "How many frames per second are used in cel animation?",
      options: ["12 frames", "18 frames", "24 frames", "30 frames"],
      correctIndex: 2,
    },
    {
      question: "How many frames might a minute of cel animation require?",
      options: ["720 frames", "1,440 frames", "2,880 frames", "600 frames"],
      correctIndex: 1,
    },
    {
      question: "What is cel animation based on?",
      options: ["Vector calculations", "Changes from one frame to next", "3D modeling", "Audio synchronization"],
      correctIndex: 1,
    },
    {
      question: "What does cel stand for in cel animation?",
      options: ["Computer Enhanced Layer", "Celluloid", "Central Element", "Creative Electronic Line"],
      correctIndex: 1,
    },
    {
      question: "What is celluloid in animation?",
      options: ["A 3D model", "A clear sheet with images", "A rendering technique", "An audio format"],
      correctIndex: 1,
    },
    {
      question: "What typically remains fixed in cel animation?",
      options: ["The characters", "The foreground", "The background", "The camera angle"],
      correctIndex: 2,
    },
    {
      question: "What does path animation move along the screen?",
      options: ["Random objects", "An object along predetermined path", "Background scenery", "Camera position"],
      correctIndex: 1,
    },
    {
      question: "What type of path can path animation follow?",
      options: ["Only straight lines", "Only circular paths", "Straight lines or curves", "Only diagonal lines"],
      correctIndex: 2,
    },
    {
      question: "What does path animation start with?",
      options: ["Final frame", "Keyframes", "Audio track", "Background image"],
      correctIndex: 1,
    },
    {
      question: "What are keyframes in animation?",
      options: ["All frames", "First and last frame of action", "Random frames", "Background frames"],
      correctIndex: 1,
    },
    {
      question: "What does tweening require calculating?",
      options: ["Audio levels", "Frames between keyframes and path", "Color values only", "File compression"],
      correctIndex: 1,
    },
    {
      question: "How many frames does TV video build per second?",
      options: ["24 frames", "25 frames", "30 frames", "48 frames"],
      correctIndex: 2,
    },
    {
      question: "At what rate are movies shot?",
      options: ["18 frames per second", "24 frames per second", "30 frames per second", "48 frames per second"],
      correctIndex: 1,
    },
    {
      question: "How many flickers per second do some projectors create?",
      options: ["24 flickers", "48 flickers", "72 flickers", "96 flickers"],
      correctIndex: 2,
    },
    {
      question: "Why do projectors increase flicker rate?",
      options: ["To save energy", "To eliminate flicker effect", "To speed up playback", "To reduce noise"],
      correctIndex: 1,
    },
    {
      question: "What are the three steps in 3D animation?",
      options: ["Drawing, coloring, saving", "Modeling, animation, rendering", "Planning, executing, exporting", "Sketching, refining, publishing"],
      correctIndex: 1,
    },
    {
      question: "What is modeling in 3D animation?",
      options: ["Defining motion", "Creating objects and scenes", "Final image creation", "Audio addition"],
      correctIndex: 1,
    },
    {
      question: "What is the animation step in 3D animation?",
      options: ["Creating objects", "Defining object's motion", "Final rendering", "Color correction"],
      correctIndex: 1,
    },
    {
      question: "What is the final step in creating 3D animation?",
      options: ["Modeling", "Animation", "Rendering", "Planning"],
      correctIndex: 2,
    },
    {
      question: "What is morphing?",
      options: ["Creating 3D models", "Blending two images into series", "Compressing files", "Adding audio"],
      correctIndex: 1,
    },
    {
      question: "What does virtual reality create?",
      options: ["2D images", "An environment surrounding the user", "Audio files", "Text documents"],
      correctIndex: 1,
    },
    {
      question: "What is the entire animation piece called?",
      options: ["The shot", "The scene", "The presentation", "The frame"],
      correctIndex: 2,
    },
    {
      question: "What are the major parts of a presentation called?",
      options: ["Scenes", "Acts", "Shots", "Frames"],
      correctIndex: 1,
    },
    {
      question: "What is an act in animation?",
      options: ["Single frame", "Major episode within animation", "Camera movement", "Color palette"],
      correctIndex: 1,
    },
    {
      question: "How many acts does a presentation usually consist of?",
      options: ["Always exactly one", "One to a dozen", "Exactly twelve", "Hundreds"],
      correctIndex: 1,
    },
    {
      question: "What does a scene identify in animation?",
      options: ["Single pixel", "One venue of continuous action", "Audio track", "Color scheme"],
      correctIndex: 1,
    },
    {
      question: "What is a shot in animation?",
      options: ["Final render", "Continuous camera recording", "Color adjustment", "Audio clip"],
      correctIndex: 1,
    },
    {
      question: "What is a shot broken down into?",
      options: ["Acts", "Scenes", "Individual frames", "Presentations"],
      correctIndex: 2,
    },
    {
      question: "Which film is an example of 3D computer-generated animation?",
      options: ["Beauty and the Beast", "Toy Story", "Antz", "All of the above"],
      correctIndex: 1,
    },
    {
      question: "What can computers calculate in computer animation?",
      options: ["Only keyframes", "In-between frames", "Only final frames", "Audio tracks"],
      correctIndex: 1,
    },
    {
      question: "What determines the amount of time an action takes?",
      options: ["File size", "Spacing of key poses", "Color depth", "Audio length"],
      correctIndex: 1,
    },
    {
      question: "What is the key difference between 2D and 3D animation?",
      options: ["Frame rate", "Use of X, Y, and Z axes", "Color depth", "File format"],
      correctIndex: 1,
    },
    {
      question: "How are drawings created in computer-assisted animation?",
      options: ["Only by computer", "Hand drawn or interactively drawn", "Using photographs only", "Automatically generated"],
      correctIndex: 1,
    },
    {
      question: "What do creators place drawings into in computer-assisted animation?",
      options: ["Random positions", "Key frames", "Audio tracks", "Color palettes"],
      correctIndex: 1,
    },
    {
      question: "What creates an outline of important movements in animation?",
      options: ["Background images", "Key frames", "Audio cues", "Color schemes"],
      correctIndex: 1,
    },
    {
      question: "What advantage does computer-generated animation have?",
      options: ["Lower quality", "Enhanced time scale and quality", "Simpler process only", "Cheaper production only"],
      correctIndex: 1,
    },
    {
      question: "What do surprised characters typically do in animation?",
      options: ["Stand still", "Throw up their hands", "Close their eyes", "Turn around"],
      correctIndex: 1,
    },
    {
      question: "When should each character have an appropriate pose?",
      options: ["Only in key scenes", "In every scene", "Only at beginning", "Only at end"],
      correctIndex: 1,
    },
    {
      question: "What should set dressing convey before characters arrive?",
      options: ["File format", "The mood", "Technical details", "Production credits"],
      correctIndex: 1,
    },
    {
      question: "What is the most important visual clue in staging?",
      options: ["Background color", "Centering shot on subject", "Audio volume", "Frame rate"],
      correctIndex: 1,
    },
    {
      question: "Do actors squash or stretch when they move in reality?",
      options: ["Yes, significantly", "No, but it's used in animation", "Only when jumping", "Yes, but minimally"],
      correctIndex: 1,
    },
    {
      question: "Why has squash and stretch become a staple in traditional animation?",
      options: ["It saves time", "It exaggerates weight", "It simplifies drawing", "It reduces cost"],
      correctIndex: 1,
    },
    {
      question: "What happens to balls as they hit the ground in animation?",
      options: ["They stretch", "They squash", "They change color", "They disappear"],
      correctIndex: 1,
    },
    {
      question: "What happens to balls as they rebound in animation?",
      options: ["They squash", "They stretch", "They shrink", "They expand"],
      correctIndex: 1,
    },
    {
      question: "What can you tell about a ball from its animated bounce?",
      options: ["Its color", "Whether it's rubber or cannonball", "Its age", "Its temperature"],
      correctIndex: 1,
    },
    {
      question: "What does the quality of movement determine in animation?",
      options: ["File size", "The life of the animation", "Rendering speed", "Color accuracy"],
      correctIndex: 1,
    },
    {
      question: "What does an animator place into material to animate it?",
      options: ["Color and texture", "Life and meaning through movement", "Audio tracks", "Special effects only"],
      correctIndex: 1,
    },
  ],
};


export { DigitalImagesQuiz, AnimationBasicsQuiz, AdvancedTopicsQuiz };