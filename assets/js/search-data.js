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
        },{id: "news-received-the-ben-cook-presidential-graduate-fellowship-at-cmu",
          title: 'Received the Ben Cook Presidential Graduate Fellowship at CMU.',
          description: "",
          section: "News",},{id: "news-fedast-asynchronous-multi-model-fl-accepted-to-uai-2024",
          title: 'FedAST (asynchronous multi-model FL) accepted to UAI 2024.',
          description: "",
          section: "News",},{id: "news-fedcmoo-federated-multi-objective-optimization-accepted-to-aistats-2025",
          title: 'FedCMOO (federated multi-objective optimization) accepted to AISTATS 2025.',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-nvidia",
          title: 'Started a research internship at NVIDIA.',
          description: "",
          section: "News",},{id: "news-ravan-federated-lora-fine-tuning-accepted-to-neurips-2025",
          title: 'Ravan (federated LoRA fine-tuning) accepted to NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-on-internal-planning-in-llms-accepted-to-iclr-2026",
          title: 'Our paper on internal planning in LLMs accepted to ICLR 2026.',
          description: "",
          section: "News",},{id: "news-our-position-paper-on-federated-learning-in-the-scaling-law-era-accepted-to-icml-2026",
          title: 'Our position paper on federated learning in the scaling-law era accepted to ICML...',
          description: "",
          section: "News",},{id: "news-started-a-quant-research-internship-at-imc-trading",
          title: 'Started a quant research internship at IMC Trading.',
          description: "",
          section: "News",},{id: "news-pubswap-federated-rlvr-accepted-to-the-icml-2026-rlxf-workshop",
          title: 'PubSwap (federated RLVR) accepted to the ICML 2026 RLxF Workshop.',
          description: "",
          section: "News",},{id: "news-3-first-authored-papers-accepted-to-neurips-2026-on-misalignment-transfer-federated-llm-routing-and-asynchronous-fl",
          title: '3 first-authored papers accepted to NeurIPS 2026! On misalignment transfer, federated LLM routing,...',
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
        title: 'Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?hl=en&user=tXfENd4AAAAJ&view_op=list_works&sortby=pubdate", "_blank");
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
