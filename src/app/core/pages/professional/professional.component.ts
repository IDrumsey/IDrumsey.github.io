import { Component, OnInit, SecurityContext } from '@angular/core';
import { ThemeManagerService } from '../../services/theme-manager.service';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor(private theme: ThemeManagerService, private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  }

  get cardStyles(): {} {
    return {
      backgroundColor: this.theme.isDarkMode ? "#2e2e2e" : "#fff",
      borderColor: this.theme.isDarkMode ? "#fff" : "#000",
      boxShadow: this.theme.isDarkMode ? "0 0 5px #fff" : "0 0 5px #000"
    }
  }

  skills: {
    title: string
    iconURL: string | undefined,
    projects: {
      title: string
      link: string
    }[]
  }[] = [
    {
      title: "Javascript",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      projects: [
        {
          title: "Profile Project",
          link: ""
        }
      ]
    },
    {
      title: "HTML",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      projects: []
    },
    {
      title: "CSS",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      projects: []
    },
    {
      title: "Angular",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      projects: [
        {
          title: "Roadtrips IO",
          link: "#Roadtrips IO"
        },
        {
          title: "Profile Project",
          link: "#Profile Project"
        },
        {
          title: "Animal Adoption Center",
          link: "#Animal Adoption Center"
        },
        {
          title: "Poll App",
          link: "#Poll App"
        }
      ]
    },
    {
      title: "React",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      projects: [
        {
          title: "Shelf-Stock",
          link: "#Shelf-Stock"
        },
        {
          title: "Lists",
          link: "#Lists"
        }
      ]
    },
    {
      title: "Mongo DB",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      projects: [
        {
          title: "Shelf-Stock",
          link: "#Shelf-Stock"
        },
        {
          title: "Lists",
          link: "#Lists"
        },
        {
          title: "Poll App",
          link: "#Poll App"
        }
      ]
    },
    {
      title: "PHP",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      projects: [
        {
          title: "Interact",
          link: "#Interact"
        },
        {
          title: "Platform",
          link: "#Platform"
        }
      ]
    },
    {
      title: "Laravel",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      projects: [
        {
          title: "Lists API (Laravel version)",
          link: "https://github.com/IDrumsey/Lists-API"
        }
      ]
    },
    {
      title: "Node JS",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      projects: [
        {
          title: "Shelf-Stock",
          link: "#Shelf-Stock"
        },
        {
          title: "Lists",
          link: "#Lists"
        },
        {
          title: "Poll App",
          link: "#Poll App"
        }
      ]
    },
    {
      title: "Passport JS",
      iconURL: "",
      projects: [
        {
          title: "Shelf-Stock",
          link: "#Shelf-Stock"
        }
      ]
    },
    {
      title: "C#",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      projects: [
        {
          title: "Animal Adoption Center",
          link: "#Animal Adoption Center"
        }
      ]
    },
    {
      title: "C++",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      projects: []
    },
    {
      title: "Python",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      projects: []
    }
  ]

  projects: {
    title: string,
    desc: string,
    siteURL?: string,
    codeURL: string,
    mainTechnologies?: string[],
    subTechnologies?: string[],
    videoLink?: string
  }[] = [
    {
      title: "Profile Project",
      desc: "Website for my future employers to see.",
      codeURL: "https://github.com/IDrumsey/IDrumsey.github.io",
      siteURL: "https://idrumsey.github.io/",
      mainTechnologies: [
        "Angular",
      ],
      subTechnologies: [
        "Angular Material",
      ]
    },
    {
      title: "Roadtrips IO",
      desc: "The most extensive and coolest site I've built. Just the frontend so far. This was a website that I really liked working on. I started on the concept based around van life. Basically the site allows you to plan out roadtrips using Google Map's JS API. I didn't fully finish it, but got really far. My free trial of the API ran out lol.",
      codeURL: "https://github.com/IDrumsey/RoadTripsIO",
      mainTechnologies: [
        "Angular",
      ],
      subTechnologies: [
        "Angular Material",
      ],
      videoLink: "https://www.youtube.com/embed/_t-zrlVHXXE"
    },
    {
      title: "Shelf-Stock",
      desc: "A website that allows a store to show keep track of where there products are located within their store. The idea is that a customer could use this to find where in a store they needed to go to get their products.",
      codeURL: "https://github.com/IDrumsey/Shelf-Stock",
      mainTechnologies: [
        "React",
        "Nodejs",
        "MongoDB",
      ],
      subTechnologies: [
        "Express",
        "Nodemon",
      ],
      videoLink: "https://www.youtube.com/embed/lhLO08vDvIo"
    },
    {
      title: "Poll App",
      desc: "This was the most recent project I've done except for the Profile project. It's pretty simple and just allows people to create polls and answer polls.",
      siteURL: "http://mypollapp.com/",
      codeURL: "https://github.com/IDrumsey/PollApp",
      mainTechnologies: [
        "Angular",
        "Nodejs",
        "MongoDB",
      ],
      subTechnologies: [
        "Angular Material",
        "Express",
        "Nodemon",
        "Bootstrap",
        "ChartJS"
      ]
    },
    {
      title: "Platform",
      desc: "This website is pretty much just a devoted comment section. It's just for people to discuss stuff. Kindof like reddit but a lot less functionality.",
      codeURL: "https://github.com/IDrumsey/Platform",
      mainTechnologies: [
        "PHP"
      ]
    },
    {
      title: "Animal Adoption Center",
      desc: "",
      codeURL: "https://github.com/IDrumsey/AAC-Client",
      mainTechnologies: [
        "Angular",
        ".NET",
        "I think Microsoft SQL Server for db"
      ]
    },
    {
      title: "Interact",
      desc: "This was a website that I didn't finish but put a lot of time into. It's for setting up esports tournaments.",
      codeURL: "https://github.com/IDrumsey/Interact",
      mainTechnologies: [
        "PHP",
        "MySQL"
      ],
    },
    {
      title: "Lists",
      desc: "This is just a beefed up todo list app.",
      codeURL: "https://github.com/IDrumsey/Lists",
      mainTechnologies: [
        "MongoDB",
        "Angular",
        "NodeJS"
      ],
      subTechnologies: [
        "Express",
        "JWT"
      ],
      videoLink: "https://www.youtube.com/embed/TW3lyGoQWWo"
    }
  ]
}
