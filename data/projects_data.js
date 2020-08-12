let projectsData = {
    "tsd": {
        "name": "Timono app",
        "subname": "Second year university project",
        "description": "In the context of the second year university project, we have to develop an Android application " +
            "for the company \"Espace Revêtements TSD\". This application permit to collect all the information of the " +
            "ERP (customers, works, ...) to have all the information when the user is away from his office. He can call " +
            "or text the customer directly from the app, send a mail, modify the information or create a new one.<br/><br/> " +
            "It is developed with the framework Ionic that uses AngularJS and TypeScript.",
        "technos": ["Ionic", "TypeScript"],
        "images": [
            "tsd/1.png",
            "tsd/2.png",
            "tsd/3.png",
            "tsd/4.png"
        ]
    },
    "geoquizz": {
        "name": "GeoQuizz",
        "subname": "Android app",
        "description": "During Android courses, we had to develop in team of 3 guys an Android application. We decided " +
            "to design a quizz app based on the geolocation. The questions are about the city where you are (or choose " +
            "one) and the answers are created with the help of GeoAPI. This is a free API made by the French government " +
            "which provide demographical information. We used Google Places API to make autocompletion on the city research.",
        "technos": ["Android", "Java", "Figma"],
        "images": [
            "geoquizz/1.png",
            "geoquizz/2.png",
            "geoquizz/3.png",
            "geoquizz/4.png",
            "geoquizz/5.png"
        ]
    },
    "mmf": {
        "name": "ManageMyFuel",
        "subname": "Personal Ionic app",
        "description": "In order to manage my fuel consumption of my car, I developed an Ionic App. I insert data when " +
            "I refuel my car and the app make statistics and charts. App use a PostgreSQL online database to store data. " +
            "Statistics charts are made with the Chart.js library. A little PHP backend to connect to the database and make requests.",
        "technos": ["Ionic", "TypeScript", "PHP"],
        "images": [
            "mmf/1.jpg",
            "mmf/2.jpg",
            "mmf/3.jpg"
        ]
    },
    "audito": {
        "name": "Audito",
        "subname": "University project",
        "description": "Fictive website for managing a performance venue for administrators and clients with management " +
            "of the venue's programming calendar, event details, online booking with Symfony, API Platform and VueJS.",
        "technos": ["Symfony", "API Platform", "VueJS"],
        "images": [
            "audito/home.PNG",
            "audito/event.PNG",
            "audito/programmation.PNG"
        ]
    },
    "portfolio": {
        "name": "My portfolio",
        "subname": "The website you are visiting now",
        "description": "This website has been released from scratch with HTML/CSS and native JavaScript. It presents " +
            "my school career, my IT skills, my professional experiences and my school realisations but also my personal " +
            "projects. I use the <a class='discret-links' href='https://github.com/englishextra/img-lightbox'>img-lightbox</a> " +
            "library to make beautiful lightbox to display project images.",
        "technos": ["HTML", "CSS", "JS"],
        "images": []
    },
    "ta": {
        "name": "Tasmania Adventures",
        "subname": "2D game",
        "description": "Two months after the beginning of our studies, we had a special development week where we had to " +
            "release a 2D game using SFML, a C++ graphic library. From the monday morning to the friday afternoon, we had" +
            " to choose a style and a theme for our game and develop it. <br/><br/>Our game, called \"Tasmania Adventures\"," +
            " is an endless runner game. We play the role of a platypus which should avoid rocks and floating woods on a river." +
            " At the beginning, the player has 3 lives and a bonus (a drilling machine). This bonus can be collect in the game," +
            " it is used to destroy obstacles, that can fill the entire river.",
        "technos": ["C++", "SFML"],
        "images": [
            "ta/1.jpg",
            "ta/2.jpg",
            "ta/3.jpg"
        ]
    },
    "movies": {
        "name": "Movies Explorer",
        "subname": "iOS app",
        "description": "Application developed during an iOS workshop during my third university year. This app aim to " +
            "discover a list of movies sorted by categories. Each film has a synopsis, details information, image and a button to" +
            "open Youtube with the trailer video. The app offers also a map with markers on theaters with website information on click. " +
            "The data is provided by <a class='discret-links' href='https://developers.themoviedb.org/'>TheMovieDB API</a>." +
            " I tried to follow the best practices and guide lines provided by Apple to build a good quality code.",
        "technos": ["Swift", "TheMovieDB API"],
        "images": [
            "movies-explorer/1.png",
            "movies-explorer/2.png",
            "movies-explorer/3.png",
            "movies-explorer/4.png"
        ]
    },
    "spaceup": {
        "name": "SpaceUP",
        "subname": "University project",
        "description": "SpaceUP is our final year university project. It was designed for the " +
            "<a class='discret-links' href='https://www.laturbine.fr/'>La Turbine</a> exhibition centre to provide an " +
            "innovative and interactive experience during a visit.<br>" +
            "Our project is linked to an exhibition on the conquest of space and offers different mini-workshops on a mobile " +
            "application to learn more about this theme. The user can interact with a simplified model of a rocket engine, " +
            "answer a questionnaire on a video explaining the failures of the conquest of space or try to get a rocket to take " +
            "off in augmented reality. The application was developed on Unity using Vuforia for the AR part.",
        "technos": ["Unity", "C#"],
        "images": []
    },
    "hulahop": {
        "name": "HulaHop",
        "subname": "University project",
        "description": "HulaHop is a website dedicated to board games. It represents a fictitious company that allows " +
            "you to borrow board games and receive them directly at home. The user returns the game at the end of the " +
            "borrowing period. He can also find players near his home on a card and add them as friends to play board games.<br>" +
            "The project was done with Symfony and uses the <a class='discret-links' href='https://www.boardgameatlas.com/api/docs'>Board Game Atlas API</a>" +
            " to list discounted games and <a class='discret-links' href='https://photon.komoot.de/'>Photon API</a> which " +
            "can transform a postal address into GPS coordinates.<br><br>" +
            "Why \"HulaHop\" ?<br>" +
            "Hula is the hawaian term for play. So we made a link between playing game and the famous toy HulaHoop with " +
            "the term \"Hop\" which can be pronounced when you take a game: \"Hop I take this game!\".",
        "technos": ["Symfony", "Twig", "Photon API", "BoardGamesAtlas API"],
        "images": [
            "hulahop/1.png",
            "hulahop/2.png",
            "hulahop/3.png",
            "hulahop/4.png",
            "hulahop/5.png"
        ]
    },
    "wrcpredict": {
        "name": "WRC Predict",
        "subname": "Personal future project",
        "description": "I want to create an Android and/or iOS application on the theme of rallying, which is my first " +
            "passion. I had the idea to create an application to make predictions on the World Rally Championship rounds. " +
            "I created mock-ups on Figma to get an idea of what I want the application to look like." +
            "<br> I still have to work on technical specifications for the backend aspect of the project." +
            "<br> WRC's logo is a property of the <a class='discret-links' href='https://www.wrc.com/fr/'>WRC Promoter GmbH</a> " +
            "company.",
        "technos": ["Figma"],
        "images": [
            "wrcpredict/1.png",
            "wrcpredict/2.png",
            "wrcpredict/3.png",
            "wrcpredict/4.png",
            "wrcpredict/5.png",
        ]
    },
    "battledrive": {
        "name": "BattleDrive Competition",
        "subname": "Showcase website for my association",
        "description": "This project is the official website of my association, BattleDrive Competition. " +
        "This association has been created to take part at rallies and to find some partners in order to help" + 
        " us reducing our cost. He shows our partners, our goal and presents the BattleDrive team." +
        " Big thanks to Martin Rizand Photographie for the main background image and R2S Location for Clio's pictures." + 
        "<br><br> You can visit this website here : <a id='battle-drive-link' href='www.battledrive.fr'>www.battledrive.fr</a>",
        "technos": ["Vue.js", "Netlify"],
        "images": [
            "battledrive/1.png",
            "battledrive/2.png",
            "battledrive/3.png",
            "battledrive/4.png",
        ]
    }
};

