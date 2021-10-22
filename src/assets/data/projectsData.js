import { faCss3, faHtml5, faJs, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

export const projectsData = [
    {
        name: "React Portfolio",
        description: "Sencilla web personal con un portafolio para mostrar proyectos que he realizado con el tiempo.",
        demo: "https://osirismh.github.io/react-portfolio/",
        repository: "https://github.com/OsirisMH/react-portfolio",
        image: "./ReactPortfolio.png",
        tags: [faReact, faHtml5, faSass, faJs]
    },
    {
        name: "CalendarApp",
        description: "Aplicación realizada con React para el FrontEnd junto con react-big-calendar component y NodeJs para el Backend.",
        demo: "https://mern-calendar-ozmh.herokuapp.com/",
        repository: "https://github.com/OsirisMH/react-calendar-app",
        image: "./CalendarApp.png",
        tags: [faReact, faNodeJs, faHtml5, faCss3, faJs]
    },
    {
        name: "JournalApp",
        description: "Aplicación para notas diarias o simplemente un diario, hecha con React en conjunto con Scss y utilizando Firebase como servicio.",
        demo: null,
        repository: "https://github.com/OsirisMH/react-journal-app",
        image: "./JournalApp.png",
        tags: [faReact, faSass, faHtml5, faJs]
    },
    {
        name: "GifExpertApp",
        description: "Sencilla aplicación para buscar Gifs hecha con React.",
        demo: "https://osirismh.github.io/react-gifexpertapp/",
        repository: "https://github.com/OsirisMH/react-gifexpertapp",
        image: "./GifExpertApp.png",
        tags: [faReact, faHtml5, faJs]
    }
]