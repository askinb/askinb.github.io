// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-miscellaneous",
          title: "miscellaneous",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/miscellaneous/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-honored-to-receive-the-ben-cook-presidential-graduate-fellowship-in-electrical-and-computer-engineering-at-cmu-for-the-2023-2024-academic-year",
          title: 'Honored to receive the Ben Cook Presidential Graduate Fellowship in Electrical and Computer...',
          description: "",
          section: "News",},{id: "news-fedast-federated-asynchronous-simultaneous-training-was-accepted-to-uai-2024-paper-code",
          title: 'FedAST: Federated Asynchronous Simultaneous Training was accepted to UAI 2024! [paper] [code]',
          description: "",
          section: "News",},{id: "news-federated-communication-efficient-multi-objective-optimization-was-accepted-to-aistats-2025-paper-code",
          title: 'Federated Communication-Efficient Multi-Objective Optimization was accepted to AISTATS 2025! [paper] [code]',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-nvidia-herndon-va-for-summer-2025-working-on-asynchronous-federated-learning-algorithms-with-knowledge-distillation",
          title: 'Started a research internship at NVIDIA (Herndon, VA) for Summer 2025, working on...',
          description: "",
          section: "News",},{id: "news-ravan-multi-head-low-rank-adaptation-for-federated-fine-tuning-was-accepted-to-neurips-2025-paper",
          title: 'Ravan: Multi-Head Low-Rank Adaptation for Federated Fine-Tuning was accepted to NeurIPS 2025! [paper]...',
          description: "",
          section: "News",},{id: "news-our-paper-internal-planning-in-language-models-characterizing-horizon-and-branch-awareness-was-accepted-to-iclr-2026-paper",
          title: 'Our paper Internal Planning in Language Models: Characterizing Horizon and Branch Awareness was...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/files/BarisAskinCV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%73%6B%69%6E@%61%6E%64%72%65%77.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tXfENd4AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/baris-askin", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/askinb", "_blank");
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
