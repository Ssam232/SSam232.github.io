// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-knes-381-demos",
          title: "KNES 381 Demos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/knes-381/";
          },
        },{id: "nav-research-chronicles",
          title: "Research Chronicles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "A collection of my academic publications and research contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My GitHub profile and featured projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic background, research experience, technical skills, and volunteer history.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-welcome-to-my-blog",
        
          title: "Welcome to My Blog",
        
        description: "My first ever blog post on the new site!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome-to-my-blog/";
          
        },
      },{id: "post-the-dry-run",
        
          title: "The Dry Run",
        
        description: "Turning a standard Herzog Lab update into a full poster presentation dry run.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-dry-run/";
          
        },
      },{id: "post-new-year-new-life",
        
          title: "New Year, New Life",
        
        description: "Reflecting on everything 2025 threw at me and setting my sights on what 2026 needs to be.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/new-year-new-life/";
          
        },
      },{id: "post-the-update-presentation",
        
          title: "The Update Presentation",
        
        description: "Reflecting on a thesis update presentation that did not go the way I hoped.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/thesis-update-presentation/";
          
        },
      },{id: "post-beginning-my-thesis-experiments",
        
          title: "Beginning My Thesis Experiments",
        
        description: "The real experiments are finally starting and I am thrilled to get my hands on actual data.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/beginning-thesis-experiments/";
          
        },
      },{id: "post-back-from-kananaskis",
        
          title: "Back from Kananaskis",
        
        description: "A reflection on the Alberta Biomedical Engineering symposium in Kananaskis and the drive home.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/back-from-kananaskis/";
          
        },
      },{id: "post-gone-to-kannanaskis",
        
          title: "Gone to Kannanaskis",
        
        description: "Packing up and heading out to the Alberta Biomedical Engineering symposium in Kananaskis.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gone-to-kannanaskis/";
          
        },
      },{id: "post-the-reality-of-muscle-fiber-isolation",
        
          title: "The Reality of Muscle Fiber Isolation",
        
        description: "A reality check as I begin the tedious process of isolating muscle fibers for my honors thesis.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/the-reality-of-muscle-fiber-isolation/";
          
        },
      },{id: "post-bme-symposium-dry-run",
        
          title: "BME Symposium Dry Run",
        
        description: "A reflection on my dry run presentation for the upcoming Alberta Biomedical Engineering symposium.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/bme-symposium-dry-run/";
          
        },
      },{id: "post-starting-my-honors-thesis",
        
          title: "Starting My Honors Thesis!",
        
        description: "Excited to officially begin my honors thesis diving deep into the mechanical properties of the papillary muscle.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/starting-my-honors-thesis/";
          
        },
      },{id: "post-burp-symposium-poster-presentation",
        
          title: "BURP Symposium Poster Presentation",
        
        description: "A reflection on my poster presentation at the BURP Symposium on the Structural Properties of the Female Heart.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/burp-symposium/";
          
        },
      },{id: "post-mccaig-summer-symposium-presentation",
        
          title: "McCaig Summer Symposium Presentation",
        
        description: "A reflection on my presentation at the McCaig Summer Symposium discussing the structural properties of cardiac muscle.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mccaig-summer-symposium/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%64%75%6C.%73%61%6D%61%64.%61%68%6D%65%64%32%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/abdul-samad-ahmed", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
