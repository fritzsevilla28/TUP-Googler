// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["vision", "vsion", "visoin"],
  ["yes tup vision", "what is tup vision?", "tup vision"],
  ["mission", "mssion", "missoin"],
  ["yes tup mission", "what is tup mission?", "tup mission", "how about tup mission?"],
  ["president", "pres", "prsident", "prsdnt", "prisedent"],
  ["yes tup president", "who is the president of tup?", "tup president", "how about tup president?", "yes president of tup"],
  ["address", "location", "addrss", "adres", "addres", "adress"],
  ["yes tup address", "what is the address of tup?", "tup address", "how about tup address?"],
  ["colleges"],
  ["yes tup colleges", "what are the colleges in tup?", "tup colleges", "how about tup colleges?", "colleges of tup", "yes colleges of tup"],
  ["departments"],
  ["yes tup departments", "what are the departments in tup?", "tup departments", "how about tup departments?"],
  ["number", "contact", "telephone"],
  ["yes tup contact number", "what is the contact number of tup?", "tup contact number", "how about tup contact number?"],
  ["email"],
  ["yes tup email", "what is the email of tup?", "tup email", "how about email?", "yes email of tup"],
  ["head of Computer Studies Department?", "who is the head of computer studies department?"],
  ["dean"],
  ["yes dean of cos", "who is the dean of cos", "cos dean", "how about dean of cos?", "how about dean of cos"],
  ["facebook link", "tup link"],
  ["tup fb link"],
  ["transfer"],
  ["yes requirements for transferring", "requirements for transferring school", "school transfer requirements", "how about school transfer requirements?", "how about school transfer requirements", "what are the requirements for transferring school?", "what are the requirements for transferring school"],
  ["scholarship"],
  ["freshman", "freshman scholarship", "freshman scholarship requirements", "scholarship for freshman"],
  ["higher", "sophomore scholarship", "sophomore scholarship requirements", "scholarship for sophomore", "junior", "junior scholarship", "junior scholarship requirements", "junior for scholarship", "senior", "senior scholarship", "senior scholarship requirements", "senior for sophomore"],
  ["results"],
  ["yes admission test results", "where i can see the test results?", "admission test results", "how about test results?", "test results"],
  ["events"],
  ["what are the events inside tup?", "events in tup", "upcoming events", "how about events"],
  ["what are the campuses of tup?", "campuses of tup", "how about campuses of tup", "campuses"],
  ["clubs"],
  ["what are the clubs of cos?", "clubs of cos", "how about clubs of cos", "cos clubs"],
  ["cos", "college of science", "college of scince", "college of scence", "cllege of science", "collge of science", "collge of scienc"],
  ["courses in cos", "cos courses", "college of science courses"],
  ["bscs", "bachelor of science in computer science", "comsci", "what is bscs?", "what is bscs"],
  ["comscie career opportunities", "bscs career opportunities" ,"computer science career opportunities", "comscie careers", "bscs careers", "computer science careers", "cos careers", "comsci careers"],
  ["software engineering", "software engineer", "soft eng", "soft engineering", "soft engineer"],
  ["software application developers", "software app developers", "soft app dev"],
  ["data analyst", "dta analyst", "what is data analyst?", "what is data analyst job?", "what is data analyst", "what is data analyst job"],
  ["systems software developer", "systems soft dev"],
  ["computer programmer", "comprog", "computer prog", "comp programmer", "what is computer programmer?", "what is computer programmer job?", "computer programmer job"]




]

// Possible responses, in corresponding order

const replies = [
  ["Hello! I'm Gearbot, how can i help you?"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  ["Do you mean T.U.P. Vision?"],
  ["A premier state university with \n recognized excellence in engineering\n and technology education at par\n with leading universities in\n the ASEAN region."],
  ["Do you mean T.U.P. Mission?"],
  ["The University shall provide\n higher and advanced vocational,\n technical, industrial, technological\n and professional education \nand training in industries and\n technology, and in practical arts\n leading to certificates, diplomas\nand degrees. It shall provide\n progressive leadership in \napplied research, developmental \nstudies in technical, industrial,\n and technological fields and \nproduction using indigenous \nmaterials; effect technology \ntransfer in the countryside;\n and assist in the development\n of small-and-medium scale\n industries in identified \ngrowth centers."],
  ["Do you mean President of T.U.P.?"],
  ["Olympio V. Caparas"],
  ["Do you mean Address of T.U.P.?"],
  ["Ayala Blvd, Ermita, Manila, 1000 Metro Manila"],
  ["Do you mean Colleges of T.U.P.?"],
  ["College of Engineering, \n College of Industrial Technology, \n College of Industrial Education, \n College of Architecture and Fine Arts, \n College of Science, \nand College of Liberal Arts."],
  ["Do you mean Departments of T.U.P.?"],
  ["College of Engineering, \n College of Industrial Technology, \n College of Industrial Education, \n College of Architecture and Fine Arts, \n College of Science, \nand College of Liberal Arts."],
  ["Do you mean Contact Number of T.U.P.?"],
  ["(+63) 253 013 001"],
  ["Do you mean Email of T.U.P.?"],
  ["itso@tup.edu.ph or tup@tup.edu.ph"],
  ["Prof. Maria Carmela Francisco"],
  ["Which Dean? \n College of Industrial Technology, \n College of Industrial Education, \n College of Architecture and Fine Arts, \n College of Science, \nand College of Liberal Arts"],
  ["Dr. Hasmin Ignacio"],
  ["Which facebook link? \n T.U.P. \n College of Industrial Technology, \n College of Industrial Education, \n College of Architecture and Fine Arts, \n College of Science, \nand College of Liberal Arts"],
  ["Copy: https://www.facebook.com/TUPian"],
  ["Do you mean requirements for transferring school"],
  ["Honorable Dismissal, \n TOR or Transcript of Records, \n Certicate of Good Moral, \n PSA Birth Certificate, \nMarriage Contract(if married)"],
  ["Are you freshman student or higher than that?"],
  ["For Freshies: Photocopy of High School Card,\n Certificate of Good Moral, \nPhotocopy of Income Tax Return of\n Parents/Guardian/Affiadavit/Certificate\n of Non-filing,\n Birth Certificate,\n 1 1/2 x 1 1/2 Picture"],
  ["For Higher Students:Original/Photocopy of\n checklist/class cards,\n Photocopy of Income Tax Return \nof Parents/Guardian/Affiadavit/\nCertificate of Non-filing, \n1 1/2 x 1 1/2 Picture"],
  ["Do you mean admission test result?"],
  ["Test result will be posted at TUP Website (www.tup.edu.ph)"],
  ["Do you mean events in T.U.P.?"],
  ["See all events here:"],
  ["T.U.P. Manila,\n T.U.P. Taguig,\n T.U.P. Cavite,\n T.U.P. Visayas"],
  ["Which Club of? \n College of Industrial Technology, \n College of Industrial Education, \n College of Architecture and Fine Arts, \n College of Science, \nand College of Liberal Arts."],
  ["ChecSoc (Chemical Society, \nCOMPASS (TUP Computer Students' Association),\n GREEN (TUP Green Society), \nMathSoc (Math Society), \nPhySoc (Physics Society)"],
  ["College of Science was \nstructured to include \ngraduate programs in \nMathematics, Chemistry\n, Physics, and General Science."],
  ["Bachelor of Science in Computer Science,\n Bachelor of Science in Information Technology,\n Bachelor of Science in Information Systems,\n Bachelor of Science in Environmental Science\n and Bachelor of Applied Science \nMajor in Laboratory Technology."],
  ["Bachelor of Science in Computer Science \n is a four-year program that includes the \nstudy of computing concepts and theories,\n algorithmic foundations, and new developments \nin computing. The program prepares its \nstudents to design and create \nalgorithmically complex software \nand develop new and effective \nalgorithms for solving computing problems."],
  ["Software Engineer, \nApplications Software Developer, \nData Analyst, \nSystems Software Developer,\n Computer Programmer and more"],
  ["Software Engineer evaluates \nthe software and systems \nthat make computers \nand hardware work. \nDevelop existing programs \nby analysing and \nidentifying areas \nfor modification."],
  ["Software application developers \ndesign and develop computer \nand mobile applications \nthat perform specific functions \nwhile systems software developers \ncreate the operating systems\n that support these \nother programs or app."],
  ["The data analyst serves as a \ngatekeeper for an organization's data \nso stakeholders can understand data \nand use it to make strategic \nbusiness decisions."],
  ["They develop and implement \napplications and programs for the backend \nprocessing systems used \nin businesses and organisations"],
  ["Computer programmers write, modify,\n and test code and scripts\n that allow computer software\n and applications to function properly."]
]
// Random for any other user input

const alternative = [
  "Go on...",
  "Please be more specific",
  "Try again",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
