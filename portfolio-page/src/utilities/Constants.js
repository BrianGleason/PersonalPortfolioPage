import CROWNS from './CROWNS.jpg'
import TwitterAwardShowNLP from './TwitterAwardShowNLP.jpg';
import CMECollage from './CMECollage.jpg';
import CHCollage from './CHCollage.jpg';
import PMCollage from './PMCollage.jpg';


export const YELLOW = "#faec98";
export const LIGHT_ORANGE = "#ffd5a1";
export const ORANGE = "#fa9b6b";
export const RED = "#fa8773";

export const EXPERIENCE_TITLE = "Experience";
export const PROJECTS_TITLE = "Projects";

export const EXPERIENCE_DATA = [
    {
        "name": "CME Group",
        "description": "Redesigned and updated Asset Management system and user interface using Java, React, and SQL, a system that handles the data for what asset types \
        CME Group accepts as liquidity from its customers. Designed interface for Asset Management system with React and Redux for effective state management, utilizing custom \
        components, filtering, searching, user inputs, and clear notifications confirming user actions and mistakes. \
        Iterated on and improved project by adding new functionality to improve user experience, synchronizing styling with similar services, improving code formatting, and making optimization improvements across other pages, drawing \
        from constructive feedback from end users, QA team, and end of internship presentation.",
        "image": CMECollage
    }, 
    {
        "name": "CloudHealth",
        "description": "Developed a regional spend monitoring system for collection and processing of customers’ AWS data to achieve work avoidance and increased scalability for CloudHealth. \
        Reduced cost and increased efficiency of data collection from AWS by eliminating unnecessary calls based on customer usage, \
        shortening job runtimes by preventing overseas queries, and decreasing AWS throttling by minimizing calls to smaller regions. \
        Saved over 950 million API calls per day, a 23% decrease in system-wide API calls, generated a 35-45% decrease in job runtimes for \
        impacted services, and reduced throttling from AWS \
        Wrote project design document, added JIRA tickets for the project, and made essential design decisions.",
        "image": CHCollage
    },
    {
        "name": "Peer Mentor Teaching",
        "description":  "Taught students of Fundamentals of Computer Science II (CS 211) and Introduction to Artificial Intelligence (CS 348), covering topics from \
        memory allocation, pointer logic, and fundamental data structures in CS 211, to searches like A*, Markov Decision Process, and simple computer vision in CS 348. \
        Led office hours, providing students with personalized assistance to facilitate a better understand of topics from class, overseeing as many as \
        up to 30 students a session. \
        Graded written assignments and exams, providing constructive feedback on functionality, performance, and style.",
        "image": PMCollage
    }
]
export const PROJECTS_DATA = [
    {
        "name": "CROWNS Prototype",
        "description": "Built a product prototype webapp with team of classmates for team of MBA students at Northwestern's Kellog School of Business. In 4 weeks, built product to help people with less common hairtypes find products \
        and community posting boards/messaging to facilitate a sense of community and give users a reason to return to the app. The prototype used React for the frontend, Google Auth for user information and security, Google Firestore and  \
        Firebase for data storage, Cypress for end-to-end testing, and Github Workflows for the CI/CD pipeline. Utilized frequent user testing, generation of user stories, and feedback from the project management team to ensure a desirable user experience.",   
        "image": CROWNS
    },
    {
        "name": "Twitter NLP Analyzer",
        "description": "Analyzed Twitter data to predict award winners, nominees, presenters, hosts, and award names from over 500,000 tweets across two award shows within a 10 minute runtime limit. \
        Utilized various NLP libraries, custom methods targeting specific noun/verb patterns, punctuation, and capitalization, and the IMDB API to identify targets and conduct sentiment analysis on key individuals.",
        "image": TwitterAwardShowNLP
    },
    {
        "name": "Online Learning Algos",
        "description": "Using Python and Jupyter Notebook, wrote reports on the performance and applicability of different learning algorithms like Exponential Weights and Multi-Armed Bandit as a response to a variety of auction and bidding related optimization problems.",
        "image": CROWNS
    }
]