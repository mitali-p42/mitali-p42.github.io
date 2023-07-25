/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import landingPerson from "./assets/lottie/landingPerson.json";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mitali Potnis",
  title: "Hello, I am Mitali",
  subTitle: emoji(
    "Computational Data Science @ Carnegie Mellon University | Machine Learning | Big Data Analytics | NLP | Cloud Computing"),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mitali-p42?tab=repositories",
  linkedin: "https://www.linkedin.com/in/mitali-potnis",
  gmail: "mpotnis@andrew.cmu.edu",
  medium: "https://medium.com/@mpotnis",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    emoji(
      "🔸 Work in multi-disciplinary environments to develop data products and solutions."
    ),
    emoji(
      "  "
    ),
    emoji("🔸  Create Predictive Analytics Models for Classification, Clustering, Time Series, and Forecasting."),
    emoji(
      "       "
    ),
    emoji("🔸  Develop and implement Large Language Models and Natural Language Processing techniques to addressing complex business challenges."),
    
    emoji(
      "      "
    ),
    emoji("🔸  Incorporate Big Data and Cloud Computing Technologies."),
    
    
  ],
  // Declare an array object for our array of images
  
  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery
Looking for gaining in-depth knowledge in the field of Data Science and Analytics to create predictive algorithms and models that effectively and efficiently integrate, predict, and deliver data and provide actionable insights using data-informed decisions and solutions using Machine Learning and Big Data Technologies. */

  // softwareSkills: [
  //   {
  //     skillName: "python",
  //     fontAwesomeClassname: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-plain.svg"
  //   },
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   },
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fa fa-r"
  //   },
  //   {
  //     skillName: "html-5",
  //     fontAwesomeClassname: "fab fa-html5"
  //   },
  //   {
  //     skillName: "css3",
  //     fontAwesomeClassname: "fab fa-css3-alt"
  //   },
  //   {
  //     skillName: "sass",
  //     fontAwesomeClassname: "fab fa-sass"
  //   },
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "reactjs",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "nodejs",
  //     fontAwesomeClassname: "fab fa-node"
  //   },
  //   {
  //     skillName: "swift",
  //     fontAwesomeClassname: "fab fa-swift"
  //   },
  //   {
  //     skillName: "npm",
  //     fontAwesomeClassname: "fab fa-npm"
  //   },
  //   {
  //     skillName: "sql-database",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "aws",
  //     fontAwesomeClassname: "fab fa-aws"
  //   },
  //   {
  //     skillName: "firebase",
  //     fontAwesomeClassname: "fas fa-fire"
  //   },
    
  // ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmu.png"),
      subHeader: "Master of Computational Data Science",
      duration: "May 2022 - December 2023",
      desc: "Pursuing the Analytics Track Concentration. (Current GPA: 3.93 / 4.0) ",
      descBullets: [
        "Related Coursework: Deep Learning, Introduction to ML, Machine Learning in Production, Cloud Computing, Question Answering systems, Large Language Models, Interactive Data Science",
      "Currently working on a capstone research on leveraging Large Language Models for developing an end-to-end assessment generation pipeline that automatically performs question generation, answering, and evaluation for diverse course content.",
      "Carried out research based on the ACL 2023 DialDoc workshop comprising construction of a multilingual question answering system for French and Vietnamese languages.",
      "Performed research on investigating the impacts of query rewriting techniques using large language models like ChatGPT in the case of document-grounded question answering systems. The work is published in the ACL 2023 (DialDoc) workshop."
      ]
    },
    {
      schoolName: "K.J. Somaiya College of Engineering",
      logo: require("./assets/images/kjsce.png"),
      subHeader: "Bachelor of Technology in Electronics Engineering",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 3% in the program. (GPA: 9.24 / 10.0)",
      descBullets: ["Carried my research-based Final Year Project in the domain of Automatic Speaker Verification (ASV). Constructed an Audio Spoof Detection system based on Residual Neural networks from scratch using speech features extracted from ASVSpoof2019 data. Research paper presented in an IEEE International Conference on Signal Processing and published in IEEE Explore.",
    "Joint Creative Head for Indian Society of Technical Education (Student's Chapter). Assisted in organizing numerous technical workshops and events like Data Analytics using R Programming, Augmented Reality, national-level paper and project presentation competitions.",
  "Member of the Computer Society of India.",
"Organization Group (Marketing Team) for university events."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer intern",
      company: "Mckinsey Investment Office",
      companylogo: require("./assets/images/mio.png"),
      
     descBullets: [
        "Developed multiple data migration tools using Python, SQL to automatically validate, transform, and transfer Risk and Investment data from Excel to AWS RDS and MS SQL via Excel Add-in, reducing data upload time by 15%",
        "Experienced in Database migration, Data Warehousing techniques, Containerization (Kubernetes, Docker), FAST APIs, and application testing.",
        "Carried out Tableau Cloud and data sources Migration.",
        "Constructed SQL triggers to maintain Audit History."
      ]
    },
    {
      role: "Data Science and Analytics Intern",
      company: "Northeastern University",
      companylogo: require("./assets/images/neu.jpeg"),
      descBullets: [
        "Implemented ETL process, optimized SQL queries, and analyzed 3TB data from Excel, MySQL, and SQL Server for 10+ critical business decisions.",
        "Improved sales targeting by 16% through enhanced customer targeting using KMeans and Hierarchical clustering.",
        "Performed univariate, multivariate analysis and hypothesis testing for marketing campaign and consumer demographics data using Python, R, and Tableau, affecting 10+ critical business decisions.",
        "Collaborated with marketing team for consumer demographic analysis using Python, presenting findings to 40+ staff, which resulted in 20% marketing cost reduction and 25% rise in customer engagement."
      ]  
    },
    {
      role: "Data Science Intern",
      company: "Tech Mahindra",
      companylogo: require("./assets/images/techm.png"),
      descBullets: [
        "Designed cosmetics recommendation algorithm with collaborative filtering, boosting product sales by 23%.",
        "Conducted EDA for flight delays using Scala and Python in Apache Spark deployed on Azure HDInsight.",
        "Improved flight delay prediction by 18\% by using ensemble methods (AdaBoost, XGBoost, Random Forest).",
        "Expertise in dimensionality reduction and feature engineering (t-SNE, PCA, Log-Transformation, Normalization)."
      ]
      },
     
      {
        role: "Student Researcher",
        company: "K. J. Somaiya College",
        companylogo: require("./assets/images/kjsce.png"),
        descBullets: [
          "Led multiple projects under time-sensitive conditions while ensuring the reproducibility and reliability of research.",
          "Designed a Residual networks-based system aimed towards solving the problem of audio spoofing attacks using speech features extracted from ASVSpoof2019 data. The system achieved an Equal Error Rate of 5.634% (a 7% improvement over the baseline algorithms).",
          "Assembled an Indian Sign Language (ISL) Recognition system using contour detection and morphological transformation techniques that achieved 98.44% classification accuracy in various settings and lighting. Presented research at the IEEE International Conference on Signal Processing.",
          "Created a superior ‘smart electrical system’ having a detection accuracy of 92% with the ability of multi-object tracking to regulate electrical power output based on human presence, position, and movement using Recurrent Neural Networks."
        ]
        },
        {
          role: "Data Science and Analytics Intern",
          company: "JPMorgan Chase",
          companylogo: require("./assets/images/jpm.png"),
          descBullets: [
            "Built trader dashboard using Python, NodeJS, APIs to monitor correlated stocks, improving investment strategies."
          ]  
        },
        {
          role: "Data Science Intern",
          company: "Sparks Foundation",
          companylogo: require("./assets/images/sp.jpeg"),
          descBullets: [
            "Analyzed Stocks data and built a hybrid model for predicting stock SENSEX (S&P BSE SENSEX) and performance prediction using numerical analysis of historical stock prices and sentimental analysis of news headlines."]
          },
          {
            role: "Creative Head",
            company: "ISTE",
            companylogo: require("./assets/images/iste.png"),
            descBullets: [
              "Assisted the Indian Society for Technical Education council (ISTE) to hold several Technical and Non-Technical workshops, competitions, and other events like R Programming for analytics, Virtual Reality workshop, Personality Development workshop, Prakalpa (Technical Paper and Research Presentation competition), Python Porgamming Workshop, Reinforcement Learning workshop."
            ]  
          },
          {
            role: "Marketing Team",
            company: "Organization Group",
            companylogo: require("./assets/images/kjsce.png"),
            descBullets: [
              "Responsible for marketing, logistics, and bringing in sponsors for college events."]
            }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */



// Some big projects you have worked on

const bigProjects = {
  title: "Highlighted Projects",
  projects: [
    {
      projectName: "Multilingual Question Answering system",
      projectDesc: "Designed multilingual Question-Answering system by incorporating LaBSE retriever, XLM-RoBERTa re-ranker, T5 and Fusion-in-Decoder answer generator. The system achieves an improvement for Recall@1 by 22% and BLEU score by 5% over the baseline system.Implemented ChatGPT and other Large Language Models for Query Rewriting and Query Prompting.        (Skills Involved: LaBSE, XLM-RoBERTa, BERT, T5, ChatGPT)",
      
      footerLink: [
        {
          name: "Visit Publication",
          url: "https://openreview.net/pdf?id=N1DD658V_-"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      
      projectName: "RidePrice AI",
      projectDesc: "Developed cab fare predictor model on Google Vertex AI using XGBoost, TensorFlow giving RMSE of 0.234. Performed Feature Engineering and Hypertuning to enhance model performance. (Skills involved: GCP, Terraform, Google Vertex AI ,Jupyter Notebook, HyperTune)",
      
    },
    {
      
      projectName: "Credit Card Fraud Detector",
      projectDesc: "Developed Convolution Neural Network-based credit card fraud detector with 20\% higher accuracy than  baseline. Experienced in Dimensionality Reduction, log-transformation, handling data imbalance (SMOTE). (Skills involved: Python, PyTorch, scikit-learn)",
      
    },
    {
      
      projectName: "Twitter Buddy Connect",
      projectDesc: "Built an AWS-hosted web-service with REST interface for user recommendations using Twitter data (1.2 TB) stored in MySQL and HBase by carrying out ETL on Databricks and Apache Spark. (Skills involved: AWS, GCP, REST, Databricks, Apache Spark, Kubernetes, Docker)",
      
    },
    {
      
      projectName: "RedditBook",
      projectDesc: "Constructed a social networking website querying data from SQL, Neo4j, and MongoDB databases. (Skills involved: MySQL, HBase, Neo4j, MongoDB, Java)",
      
    },
    {
      
      projectName: "PhotoSphere",
      projectDesc: "Developed a web application that mimics functionality of Instagram using Flask, Python, and Javascript. Integrated Azure APIs for automatic tagging and descriptions. (Skills involved: HTML, REST API, Flask, Azure Computer Vision API)",
      
    },
    {
      
      projectName: "CineMatch",
      projectDesc: "Constructed a real-time movie recommendation web application using Kafka, Jenkins, and Python. (Skills involved: Flask, Kubernetes, Docker, Jenkins, Machine Learning (Suprise), Apache Kafka)",
      
    },
    {
      
      projectName: "YelpHelp",
      projectDesc: "Assembled a database and provided recommendations derived from an in-depth analysis of Yelp’s current business, customer, and review data to aid potential new business owners determine attributes of a successful restaurant business. Developed a user-friendly interactive visualization dashboard using Altair that enhanced user accessibility and interpretation. Executed Sentiment Analysis and NLP techniques to analyze the customer reviews and business ratings. (Skills involved: Python, Altair, NLP, Javascript)",
      
    },
    {
      
      projectName: "Netflix: Data Visualization and Key Insights",
      projectDesc: "Evaluated underlying patterns and extracted information from the current Netflix datasets by employing Data Mining techniques such as Apriori, Naïve Bayes, and KNN algorithms. Created effective and comprehensible Data Visualizations using the Matplotlib and Seaborn libraries of Python. Predicted movie and ratings using Principal Component Analysis and Linear regression to give an MSE of 0.761. (Skills involved: Machine Learning, Feature Engineering, Matplotlib, Seaborn, Scikit-learn, Plotly)",
      
    },
    {
      
      projectName: "Interest Point Detection for Underwater Sonar",
      projectDesc: "Developed a novel Sonar Interest Point Detection system built on the MagicPoint-inspired architecture involving a VGG-style encoder-decoder pair.Constructed a dataset by using a self-designed underwater simulation environment using Unreal Engine UE4 and HoloOcean, and by performing data augmentation. The proposed model has a Cross Entropy Loss of 0.35 on unseen data. (Skills involved: PyTorch, Python, HoloOcean, Unreal Engine)",
      
    },
    {
      
      projectName: "MyTorch – Custom Deep Learning Library",
      projectDesc: "Built networks of MLP, CNN, RNN phoneme classifier, GRU cells, CTC algorithm, and CTC decoding (beam and greedy search) from scratch. Constructed the functions of activation functions, loss functions, regularization, resampling, and optimizers (SGD). (Skills invovled: Python, Numpy)",
      
    },
    {
      
      projectName: "Attention-based End-to-End Speech-to-Text (Speech Recognition) ",
      projectDesc: "Successfully constructed a Speech Recognition system by designing an Encoder-Decoder Architecture with Attention mechanism from scratch for sequentially spelling out the transcription of the speech data. Achieved a Levenshtein Distance of 7.2. Successfully addressed asynchrony between the target and actual outputs of the decoder by using the method of Teacher forcing scheduling. (Skills invovled: Speech Recognition, PyTorch, Python)",
      
    },
    {
      
      projectName: "Next Word Predictor",
      projectDesc: "Designed an Interactive Shiny Application using R programming to predict the next word based on the text entered by the user with the help of an n-gram frequency model trained on a small corpus of blogs, news articles and twitter feeds. (Skills involved: R, Shiny, NLP)",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  
  
  number: "+92-0000000000",
  email_address: "mpotnis@andrew.cmu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
