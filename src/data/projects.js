import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: "My Portfolio",
        description: "This very web site that I built in React utilizing redux, involving JavaScript and core development concepts.",
        link: 'https://github.com/sanjay-gurung/portfolio',
        image: project1
    },
    {
        id: 2,
        title: "Recipe Book",
        description: "This is a web application that I built in Angular that showcases CRUD operations, authentication and other basic e-commerce functionalities.",
        link: 'https://recipe-book-7a044.web.app/',
        image: project2
    },
    {
        id: 3,
        title: "Music Master",
        description: "This is a fun little page in this web site that fetches data using Spotify's api. User can search for any artist and listen to their top tracks.",
        link: 'https://sanjay-gurung.github.io/portfolio/#/music-master',
        image: project3
    }
];

export default PROJECTS;