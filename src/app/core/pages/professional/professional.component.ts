import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills: {
    title: string,
    desc: string,
    iconURL: string | undefined,
    projects: {
      title: string
      link: string
    }[]
  }[] = [
    {
      title: "Javascript",
      desc: "Used javascript from vanilla to frameworks like Angular.",
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
      desc: "Used this in all of my web dev adventures",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      projects: []
    },
    {
      title: "CSS",
      desc: "My arch-nemesis",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      projects: []
    },
    {
      title: "Angular",
      desc: "Started learning Angular in the summer of 21 is my preffered javascript framework.",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      projects: [
        {
          title: "Roadtrip IO",
          link: ""
        },
        {
          title: "Profile Project",
          link: ""
        }
      ]
    },
    {
      title: "React",
      desc: "Was the first js framework I tried.",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      projects: [
        {
          title: "Shelf-Stock",
          link: ""
        }
      ]
    },
    {
      title: "Mongo DB",
      desc: "Used this as the db for one or two of the sites I made. I like this technology because it's a NoSQL database :)",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      projects: [
        {
          title: "Shelf-Stock",
          link: ""
        }
      ]
    },
    {
      title: "PHP",
      desc: "This was the first backend language I used. Used this a lot in my college web dev classes.",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      projects: []
    },
    {
      title: "Laravel",
      desc: "PHP framework I used in a project.",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      projects: []
    },
    {
      title: "Node JS",
      desc: "Used this as I was starting to learn about javascript frameworks and npm.",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      projects: [
        {
          title: "Lists App API",
          link: ""
        }
      ]
    },
    {
      title: "Passport JS",
      desc: "Used this for authentication on one of the sites I built",
      iconURL: "",
      projects: []
    },
    {
      title: "C#",
      desc: "Learned this for the backed of a website I built. Used .NET",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      projects: []
    },
    {
      title: "C++",
      desc: "Learned C++ throughout college",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      projects: [
        {
          title: "Maze Time Trial",
          link: ""
        }
      ]
    },
    {
      title: "Python",
      desc: "Used Python for cryptology class",
      iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      projects: [
        {
          title: "Stock scraper",
          link: ""
        }
      ]
    }
  ]

  projects: {
    title: string,
    desc: string,
    siteURL?: string,
    codeURL: string
  }[] = [
    {
      title: "Profile Project",
      desc: "Website for my future employers to see.",
      codeURL: ""
    },
    {
      title: "Roadtrips IO",
      desc: "This is a website that I really liked working on. I started on the concept of van life. Basically it allows you to plan out roadtrips using Google Map's JS API. I didn't fully finish it, but got really far. My free trial of the API ran out lol.",

      codeURL: "https://github.com/IDrumsey/Shelf-Stock"
    },
    {
      title: "Shelf-Stock",
      desc: "A website that allows a store to show keep track of where there products are located within their store. The idea is that a customer could use this to find where in a store they needed to go to get their products.",
      codeURL: "https://github.com/IDrumsey/Shelf-Stock"
    },
    {
      title: "Poll App",
      desc: "This was the most recent project I've done except for the Profile project. It's pretty simple and just allows people to create polls and answer polls.",
      siteURL: "http://3.216.61.25/",
      codeURL: "https://github.com/IDrumsey/PollApp"
    },
    {
      title: "Platform",
      desc: "This website is pretty much just a devoted comment section. It's just for people to discuss stuff. Kindof like reddit but a lot less functionality.",
      codeURL: "https://github.com/IDrumsey/Platform"
    },
    {
      title: "Animal Adoption Center",
      desc: "",
      codeURL: "https://github.com/IDrumsey/PollApp"
    },
    {
      title: "Interact",
      desc: "This was a website that I didn't finish but put a lot of time into. It's for setting up esports tournaments.",
      codeURL: "https://github.com/IDrumsey/Interact"
    },
    {
      title: "Lists",
      desc: "This is just a beefed up todo list app.",
      codeURL: "https://github.com/IDrumsey/Interact"
    }
  ]
}
