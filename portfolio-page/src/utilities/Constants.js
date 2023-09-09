import CROWNS from './CROWNS.jpg'
import TwitterAwardShowNLP from './TwitterAwardShowNLP.jpg';
import CMECollage from './CMECollage.jpg';
import CHCollage from './CHCollage.jpg';
import PMCollage from './PMCollage (1).jpg';


export const YELLOW = "#faec98";
export const LIGHT_ORANGE = "#ffd5a1";
export const ORANGE = "#fa9b6b";
export const RED = "#fa8773";

export const EXPERIENCE_TITLE = "Experience";
export const PROJECTS_TITLE = "Projects";

export const EXPERIENCE_DATA = [
    {
        "name": "CME Group",
        "description": ["Migrated bulk data processing applications using Apache Spark, Java, Scala, and Python from on-prem and AWS to GCP, hosted on Google Kubernetes Engine and automated with Argo and UC4. Optimized cron jobs proccessing millions of trades on a daily basis to run within Google Dataproc.",
            "Redesigned and updated Asset Management system and user interface using Java, React, and SQL, a system that handles the data for what asset types CME Group accepts as liquidity from its customers. Provided essential new functionalities like an audit history as well as a reworked approach to filtering, viewing, and updating to improve user experience and accuracy."],
        "image": CMECollage
    }, 
    {
        "name": "CloudHealth",
        "description": ["Developed a regional spend monitoring system for collection and processing of customers’ AWS data to achieve work avoidance and increased scalability for CloudHealth.",
        "Accomplished this by building a caching system with GraphQL, DynamoDB, and Redis to track and reduce calling of inactive regions.",
        "Reduced cost and increased efficiency of data collection from AWS by eliminating unnecessary calls based on customer usage, shortening job runtimes by preventing overseas queries, and decreasing AWS throttling by minimizing calls to smaller regions.",
        "Saved over 950 million API calls per day, a 23% decrease in system-wide API calls, generated a 35-45% decrease in job runtimes for impacted services, and reduced throttling from AWS.",],
        "image": CHCollage
    },
    {
        "name": "Peer Mentor",
        "description":  ["Taught students of Fundamentals of Computer Science II (CS 211) and Introduction to Artificial Intelligence (CS 348).",
        "Covered topics from  memory allocation, pointer logic, and fundamental data structures in CS 211, to searches like A*, Markov Decision Process, and simple computer vision in CS 348.",
        "Led office hours, providing students with personalized assistance to facilitate a better understand of topics from class, overseeing as many as 30 students a session.",
        "Graded written assignments and exams, providing constructive feedback on functionality, performance, and style."],
        "image": PMCollage
    }
]
export const PROJECTS_DATA = [
    {
        "name": "CROWNS Prototype",
        "description": ["In four weeks, developed a product prototype webapp with team of classmates for team of MBA students at Northwestern's Kellogg School of Management to help people with less common hairtypes.",
        "CROWNS was designed to provide users a way to learn more about their hair and a community that can support them in finding products, stylists, and haircare recommendations from people who have had similar experiences.",
        "Built the prototype using React for the frontend, Google Auth for user information and security, Google Firestore and Firebase for data storage, Cypress for end-to-end testing, and Github Workflows for the CI/CD pipeline.",
        "Utilized frequent user testing, generation of user stories, and feedback from the project management team to continually improve user experience."],   
        "image": CROWNS
    },
    {
        "name": "Twitter NLP Analyzer",
        "description": ["Analyzed Twitter data to predict award winners, nominees, presenters, hosts, and award names from over 500,000 tweets across two award shows within a 10 minute runtime threshold.",
        "Utilized various NLP libraries, custom methods targeting specific noun/verb patterns, punctuation, and capitalization, and the IMDB API to identify targets and conduct sentiment analysis on key individuals."],
        "image": TwitterAwardShowNLP
    },
    {
        "name": "Online Learning Algorithms",
        "description": ["Using Python and Jupyter Notebook, wrote reports on the performance and applicability of different learning algorithms like Exponential Weights and Multi-Armed Bandit as a response to a variety of auction and bidding related optimization problems.",
        "Composed formal reports comparing these algorithms' performance and learning rates through Monte Carlo Trials against various distributions and historical datasets, and designed adversarial algorithms that could take advantage of specific learning algorithms.",
        "*Because this work was for a class that may re-use the prompts I was given, my work is not available here. If you're curious, feel free to contact me at my email or on LinkedIn for a copy of a report, links at the top of the page."],
        "image": ""
    }
]

export const MOBILE_PROJECTS_DATA = [
    {
        "name": "CROWNS Prototype",
        "description": ["In four weeks, developed a product prototype webapp with team of classmates for team of MBA students at Northwestern's Kellogg School of Management to help people with less common hairtypes.",
        "Built the prototype using React for the frontend, Google Auth for user information and security, Google Firestore and Firebase for data storage, Cypress for end-to-end testing, and Github Workflows for the CI/CD pipeline.",
        "Utilized frequent user testing, generation of user stories, and feedback from the project management team to continually improve user experience."],   
        "image": CROWNS
    },
    {
        "name": "Twitter NLP Analyzer",
        "description": ["Analyzed Twitter data to predict award winners, nominees, presenters, hosts, and award names from over 500,000 tweets across two award shows within a 10 minute runtime threshold.",
        "Utilized various NLP libraries, custom methods targeting specific noun/verb patterns, punctuation, and capitalization, and the IMDB API to identify targets and conduct sentiment analysis on key individuals."],
        "image": TwitterAwardShowNLP
    },
    {
        "name": "Online Learning Algorithms",
        "description": ["Using Python and Jupyter Notebook, wrote reports on the performance and applicability of different learning algorithms like Exponential Weights and Multi-Armed Bandit as a response to a variety of auction and bidding related optimization problems.",
        "Composed formal reports comparing these algorithms' performance and learning rates through Monte Carlo Trials against various distributions and historical datasets, and designed adversarial algorithms that could take advantage of specific learning algorithms.",
        "*Because this work was for a class that may re-use the prompts I was given, my work is not available here. If you're curious, feel free to contact y email or on LinkedIn for a copy of a report, links at the top of the page."],
        "image": ""
    }
]