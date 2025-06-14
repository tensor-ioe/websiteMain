import machineLearning from '../images/gallery/Machine Learning Workshop/cover.jpg'
import dataUnleashed from '../images/gallery/Data Unleashed/1.png'
import docker from '../images/gallery/Docker/cover.png'
import pythonAutomation from '../images/gallery/Python Automation/cover.png'
import webDevelopment from '../images/gallery/Web Development/cover.jpg'
import uiuxDesign from '../images/gallery/UI UX Design/cover.jpg'

const events = [
    {   
        eventImage: machineLearning,
        title : 'Machine Learning',
        date : '15th Jan - 21th Jan 2025',
        description : 'This 7 days workshop explored on how core ML algorithms like linear regression, k-means, or decision trees can be implemented from scratch using C for better understanding of their inner workings. As Machine Learning stands at the forefront of contemporary technological innovation, offering transformative opportunities across various sectors. Engaging in this workshop provided participants with condensed sessions to swiftly acquire essential ML knowledge, hands-on experience with real-world ML applications and enhance ones professional trajectory with in-demand ML expertise.  '
    },
    {
        eventImage: dataUnleashed,
        title : 'Data Unleashed',
        date : '15th Jan 2023 - 3rd Jan 2025',
        description : 'Data Unleashed is an initiative focused on exploring the full potential of data where knowledgeable instructor amplify their learning and participants share insights on data usage, helping generate valuable datasets for analysis. The goal is to empower organizations to make informed, data-driven decisions for growth and positive change'
    },
    {
        eventImage: docker,
        title : 'Docker',
        date : '5th Jan - 11th Jan 2024',
        description : 'In this online seminar, topics such as how to containerize applications, covering concepts like images, containers, Dockerfiles, and volumes. Hands-on activities may include building and running containers, setting up multi-container environments with Docker Compose were discussed.'
    },
    {
        eventImage: pythonAutomation,
        title : 'Python Automation',
        date : '23rd Jan - 25th Jan 2023',
        description : 'A Python for automation 3 days workshop instructed by Mr.Aashish Bhandari taught participants how to write scripts to automate repetitive tasks like file handling, web scraping, data entry, or email sending. It may also cover using libraries like os, shutil, requests, selenium, or pandas to streamline workflows and save time. This workshop unlocks the power of automation with Python. Learn the tools and techniques to streamline your work and increase efficiency. Whether you are a beginner or looking to expand your knowledge, this workshop is perfect nevertheless.'
    },
    {
        eventImage: uiuxDesign,
        title : 'UI UX Design',
        date : '15th July 2022',
        description : 'TENSOR organized workshop on UI/UX Design with help of instructor Mr.Shyam Adhikari who has 6 years of experience across the different surfaces of digital design and is currently the Design Lead at Webpoint Solutions taught to create wireframes, design mockups using tools like Figma, and conduct basic user testing.'
    },
    {
        eventImage: webDevelopment,
        title : 'Web Development',
        date : '5th June - 7th June 2022',
        description : 'Web development workshop introduced participants to HTML, CSS, and JavaScript through hands-on projects like building a personal website or a simple app. Also, they were acquainted to responsive design, version control with Git, and basic website deployment using GitHub Pages.'
    }
]

export default events;