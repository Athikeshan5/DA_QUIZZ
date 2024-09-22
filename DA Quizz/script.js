const quizData = [
    {
        "question": "1.What is the primary characteristic that differentiates Big Data from traditional data?",
        "options": ["Data Volume", "Data Variety", "Data Velocity", "All of the above"],
        "correct": 3
    },
    {
        "question": "2.Which of the following is NOT a characteristic feature of Big Data?",
        "options": ["Volume", "Velocity", "Variability", "Veracity"],
        "correct": 2
    },
    {
        "question": "3.Big Data typically includes which type of data?",
        "options": ["Structured Data", "Semi-Structured Data", "Unstructured Data", "All of the above"],
        "correct": 3
    },
    {
        "question": "4.What is the primary risk associated with handling Big Data?",
        "options": ["Security and Privacy Issues", "High Costs", "Lack of Tools", "Slow Processing"],
        "correct": 0
    },
    {
        "question": "5.Which of the following best describes the evolution of analytic scalability?",
        "options": ["Moving from small data to large data", "Moving from batch processing to real-time processing", "Moving from structured to unstructured data", "Moving from local to cloud storage"],
        "correct": 1
    },
    {
        "question": "6.What distinguishes analysis from reporting in data analytics?",
        "options": ["Analysis involves descriptive statistics, while reporting involves data visualization.", "Analysis involves predictive modeling, while reporting involves historical data.", "Analysis involves statistical methods, while reporting is about summarizing data.", "Reporting involves data cleaning, while analysis involves data transformation."],
        "correct": 2
    },
    {
        "question": "7.Which tool is NOT commonly used for modern data analytics?",
        "options": ["Apache Hadoop", "Apache Spark", "Microsoft Excel", "Oracle Database"],
        "correct": 2
    },
    {
        "question": "8.The term 'web data' primarily refers to:",
        "options": ["Data from social media platforms", "Data from online transaction systems", "Data collected from web servers and browsing activities", "Data in cloud storage"],
        "correct": 2
    },
    {
        "question": "9.Which of the following is a challenge faced by conventional systems when handling Big Data?",
        "options": ["High-speed processing", "Data integration from multiple sources", "Scalability", "Real-time analytics"],
        "correct": 1
    },
    {
        "question": "10.Which of the following is NOT a Big Data application?",
        "options": ["Real-time fraud detection", "Predictive maintenance", "Spreadsheets for data entry", "Personalized recommendations"],
        "correct": 2
    },
    {
        "question": "11.The 'Three Vs' of Big Data refer to:",
        "options": ["Volume, Velocity, Variety", "Value, Variety, Velocity", "Volume, Variety, Validity", "Variety, Volume, Visualization"],
        "correct": 0
    },
    {
        "question": "12.Which term describes the variety of data formats and sources in Big Data?",
        "options": ["Velocity", "Volume", "Variety", "Veracity"],
        "correct": 2
    },
    {
        "question": "13.In Big Data, 'velocity' refers to:",
        "options": ["The speed at which data is generated and processed", "The variety of data sources", "The accuracy of the data", "The volume of data stored"],
        "correct": 0
    },
    {
        "question": "14.What is the purpose of using Big Data analytics?",
        "options": ["To store large amounts of data", "To provide real-time data processing", "To derive insights and make data-driven decisions", "To replace traditional databases"],
        "correct": 2
    },
    {
        "question": "15.Which technology is commonly used for handling the velocity of Big Data?",
        "options": ["SQL Databases", "Data Warehouses", "Real-time Data Streaming", "Batch Processing Systems"],
        "correct": 2
    },
    {
        "question": "16.Which term refers to the trustworthiness and accuracy of Big Data?",
        "options": ["Variety", "Volume", "Velocity", "Veracity"],
        "correct": 3
    },
    {
        "question": "17.Big Data analytics is often used in which field for predictive maintenance?",
        "options": ["Healthcare", "Manufacturing", "Retail", "Education"],
        "correct": 1
    },
    {
        "question": "18.Which type of data is typically analyzed using sentiment analysis?",
        "options": ["Structured Data", "Semi-Structured Data", "Unstructured Data", "Transactional Data"],
        "correct": 2
    },
    {
        "question": "19.Which of the following is a challenge of traditional data systems in dealing with Big Data?",
        "options": ["Handling structured data", "Processing large volumes of data quickly", "Generating standard reports", "Managing small data sets"],
        "correct": 1
    },
    {
        "question": "20.Which process involves transforming raw data into useful information for decision-making?",
        "options": ["Data Entry", "Data Processing", "Data Analysis", "Data Storage"],
        "correct": 2
    },
    {
        "question": "21.HDFS stands for:",
        "options": ["High Distributed File System", "Hadoop Distributed File System", "Hadoop Data File System", "High Data File System"],
        "correct": 1
    },
    {
        "question": "22.What does the MapReduce framework do?",
        "options": ["Manages Hadoop clusters", "Distributes files across multiple nodes", "Processes large datasets in parallel", "Manages metadata in HDFS"],
        "correct": 2
    },
    {
        "question": "23.Which of the following is NOT a phase of the MapReduce process?",
        "options": ["Map", "Reduce", "Shuffle", "Merge"],
        "correct": 3
    },
    {
        "question": "24.In MapReduce, which component handles the aggregation of intermediate results?",
        "options": ["Mapper", "Reducer", "Partitioner", "Combiner"],
        "correct": 1
    },
    {
        "question": "25.What is Hadoop YARN?",
        "options": ["A programming model for Big Data processing", "A file system for Hadoop", "A resource management layer for Hadoop", "A data storage engine for Hadoop"],
        "correct": 2
    },
    {
        "question": "26.Which of the following algorithms is commonly implemented using MapReduce?",
        "options": ["Matrix-Vector Multiplication", "K-Means Clustering", "Decision Trees", "Principal Component Analysis"],
        "correct": 0
    },
    {
        "question": "27.The primary role of the NameNode in HDFS is to:",
        "options": ["Store the actual data", "Manage metadata and file system namespace", "Distribute data blocks", "Perform data processing"],
        "correct": 1
    },
    {
        "question": "28.Which Hadoop component is responsible for job scheduling and cluster resource management?",
        "options": ["Hadoop Distributed File System (HDFS)", "MapReduce", "Hadoop YARN", "Apache Pig"],
        "correct": 2
    },
    {
        "question": "29.The 'Reduce' function in MapReduce is responsible for:",
        "options": ["Filtering data", "Sorting data", "Aggregating data", "Mapping data"],
        "correct": 2
    },
    {
        "question": "30.In the context of HDFS, what is a 'block'?",
        "options": ["A collection of metadata", "The smallest unit of data storage", "A unit of computational task", "A directory in the file system"],
        "correct": 1
    },
    {
        "question": "31.Which component of Hadoop is responsible for executing MapReduce jobs?",
        "options": ["DataNode", "NameNode", "JobTracker", "ResourceManager"],
        "correct": 2
    },
    {
        "question": "32.The Hadoop Distributed File System (HDFS) is designed to:",
        "options": ["Store large amounts of data efficiently", "Perform complex data analysis", "Manage real-time data streaming", "Replace relational databases"],
        "correct": 0
    },
    {
        "question": "33.In MapReduce, which process involves sorting and shuffling data between the Map and Reduce phases?",
        "options": ["Map Phase", "Reduce Phase", "Shuffle and Sort Phase", "Combine Phase"],
        "correct": 2
    },
    {
        "question": "34.Which component in Hadoop YARN is responsible for managing resources on nodes?",
        "options": ["ResourceManager", "NodeManager", "JobHistoryServer", "ApplicationMaster"],
        "correct": 1
    },
    {
        "question": "35.The Hadoop ecosystem component responsible for querying large datasets using a SQL-like language is:",
        "options": ["HBase", "Pig", "Hive", "Zookeeper"],
        "correct": 2
    },
    {
        "question": "36.In Hadoop, which component handles the distributed storage of data?",
        "options": ["MapReduce", "YARN", "HDFS", "Hive"],
        "correct": 2
    },
    {
        "question": "37.Which Hadoop component coordinates and schedules tasks across the cluster?",
        "options": ["DataNode", "NameNode", "JobTracker", "ResourceManager"],
        "correct": 2
    },
    
    {
        question: "38.Which file format is optimized for Hadoop processing due to its columnar storage?",
        options: ["CSV", "JSON", "Parquet", "XML"],
        correct: 2
    },
    {
        question: "39.In Hadoop MapReduce, what is the purpose of a Combiner function?",
        options: ["To reduce the amount of data transferred between the Map and Reduce phases", "To filter data before it reaches the Reducer", "To combine multiple MapReduce jobs into one", "To increase the speed of the Mapper phase"],
        correct: 0
    },
    {
        question: "40.Which Hadoop component provides a distributed, real-time NoSQL database?",
        options: ["HDFS", "Pig", "HBase", "ZooKeeper"],
        correct: 2
    },
    {
        question: "41.Which statistical method is used to predict the value of a dependent variable based on one or more independent variables?",
        options: ["Multivariate Analysis", "Regression Modelling", "Cluster Analysis", "Rule Mining"],
        correct: 1
    },
    {
        question: "42.Support Vector Machines (SVM) are commonly used for:",
        options: ["Regression Analysis", "Classification", "Clustering", "Association Rule Mining"],
        correct: 1
    },
    {
        question: "43.Which of the following is NOT a type of cluster analysis method?",
        options: ["Hierarchical", "Density-Based", "Regression-Based", "Partitioning"],
        correct: 2
    },
    {
        question: "44.In cluster analysis, which method involves grouping data into clusters based on their density in the feature space?",
        options: ["K-Means Clustering", "DBSCAN", "Agglomerative Clustering", "Mean-Shift Clustering"],
        correct: 1
    },
    {
        question: "45.Which of the following methods is used for clustering high-dimensional data?",
        options: ["K-Means", "Principal Component Analysis (PCA)", "DBSCAN", "Hierarchical Clustering"],
        correct: 1
    },
    {
        question: "46.Predictive Analytics primarily focuses on:",
        options: ["Summarizing historical data", "Predicting future trends and behaviors", "Exploring data relationships", "Cleaning and organizing data"],
        correct: 1
    },
    {
        question: "47.In R, which function is commonly used to perform linear regression?",
        options: ["lm()", "glm()", "anova()", "predict()"],
        correct: 0
    },
    {
        question: "48.Which of the following is NOT a type of data visualization tool commonly used in modern analytics?",
        options: ["Tableau", "QlikView", "Microsoft Word", "Power BI"],
        correct: 2
    },
    {
        question: "49.Multivariate Analysis is used to analyze:",
        options: ["One variable at a time", "Two variables simultaneously", "More than two variables at once", "Unstructured data"],
        correct: 2
    },
    {
        question: "50.In the context of clustering, 'silhouette score' is used to measure:",
        options: ["Data sparsity", "Cluster cohesion", "Cluster separation", "Both b and c"],
        correct: 3
    },
    {
        question: "51.Which R package is commonly used for data manipulation and cleaning?",
        options: ["ggplot2", "dplyr", "caret", "randomForest"],
        correct: 1
    },
    {
        question: "52.In hierarchical clustering, which approach merges clusters based on the shortest distance between them?",
        options: ["Complete Linkage", "Single Linkage", "Average Linkage", "Centroid Linkage"],
        correct: 1
    },
    {
        question: "53.Kernel methods in SVM are used to:",
        options: ["Normalize data", "Transform data into higher dimensions", "Reduce the dimensionality of data", "Handle missing values"],
        correct: 1
    },
    {
        question: "54.Which of the following is a common evaluation metric for classification models?",
        options: ["R-Squared", "Mean Squared Error", "Precision and Recall", "Silhouette Score"],
        correct: 2
    },
    {
        question: "55.Which method is used to identify the importance of features in a predictive model?",
        options: ["Feature Selection", "Feature Engineering", "Feature Scaling", "Feature Extraction"],
        correct: 0
    },
    {
        question: "56.Which clustering method is suitable for discovering clusters with irregular shapes?",
        options: ["K-Means", "DBSCAN", "Hierarchical Clustering", "Expectation-Maximization"],
        correct: 1
    },
    {
        question: "57.Which of the following is a supervised learning technique?",
        options: ["K-Means Clustering", "Principal Component Analysis (PCA)", "Regression", "Association Rule Mining"],
        correct: 2
    },
    {
        question: "58.In R, which function is used to create a scatter plot?",
        options: ["plot()", "barplot()", "hist()", "boxplot()"],
        correct: 0
    },
    {
        question: "59.Which type of data analysis focuses on understanding the relationships between variables?",
        options: ["Descriptive Analysis", "Exploratory Data Analysis", "Predictive Analysis", "Prescriptive Analysis"],
        correct: 1
    },
    {
        question: "60.Which of the following is a common technique for dimensionality reduction?",
        options: ["K-Means Clustering", "Principal Component Analysis (PCA)", "Decision Trees", "Association Rule Mining"],
        correct: 1
    }


];


let currentQuestion = 0;
let userAnswer = null;

const quizContainer = document.getElementById('quiz');

function loadQuestion() {
    quizContainer.innerHTML = `
        <h2>${quizData[currentQuestion].question}</h2>
        ${quizData[currentQuestion].options.map((option, index) => `
            <button onclick="selectAnswer(${index})">${option}</button>
        `).join('')}
        <p id="feedback"></p>
    `;
}

function selectAnswer(index) {
    userAnswer = index;
    const feedback = document.getElementById('feedback');
    if (index === quizData[currentQuestion].correct) {
        feedback.innerHTML = "Correct!";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
    } else {
        feedback.innerHTML = `Incorrect! The correct answer is: ${quizData[currentQuestion].options[quizData[currentQuestion].correct]}`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Load the first question
loadQuestion();
