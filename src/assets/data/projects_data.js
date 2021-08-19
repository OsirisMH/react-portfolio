import { projectImages } from "../../helpers/images";

const projects_data = [
    {
        name: "CalendarApp",
        description: 'Aplicación realizada con React para el FrontEnd junto con react-big-calendar component y NodeJs para el Backend.',
        deployPage: "https://mern-calendar-ozmh.herokuapp.com/",
        repository: "https://github.com/OsirisMH/react-calendar-app",
        background: projectImages(`./CalendarApp.PNG`).default,
        technologies: ["react, node, css, html"]
    },
    {
        name: "JournalApp",
        description: 'nada por ahora',
        deployPage: null,
        repository: "https://github.com/OsirisMH/react-journal-app",
        background: "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=",
        technologies: ["react, node, css, html"]
    },
    {
        name: "GifExpertApp",
        description: 'nada por ahora',
        deployPage: "https://osirismh.github.io/react-gifexpertapp/",
        repository: "https://github.com/OsirisMH/react-gifexpertapp",
        background: projectImages(`./GifExpertApp.PNG`).default,
        technologies: ["react, node, css, html"]
    },
    {
        name: "ServantsApp",
        description: 'nada por ahora',
        deployPage: "https://osirismh.github.io/react-servants-app/",
        repository: "https://github.com/OsirisMH/react-servants-app",
        background: projectImages(`./ServantsApp.PNG`).default,
        technologies: ["react, node, css, html"]
    }
];

export default projects_data;