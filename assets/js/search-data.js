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
        },{id: "news-honored-to-receive-the-ben-cook-presidential-graduate-fellowship-at-cmu",
          title: 'Honored to receive the Ben Cook Presidential Graduate Fellowship at CMU.',
          description: "",
          section: "News",},{id: "news-our-work-on-asynchronous-multi-model-fl-was-accepted-to-uai-2024-paper",
          title: 'Our work on asynchronous multi-model FL was accepted to UAI 2024! [paper]',
          description: "",
          section: "News",},{id: "news-our-work-on-federated-multi-objective-optimization-was-accepted-to-aistats-2025-paper",
          title: 'Our work on federated multi-objective optimization was accepted to AISTATS 2025! [paper]',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-nvidia-for-summer-2025-working-on-asynchronous-federated-learning-algorithms-with-knowledge-distillation",
          title: 'Started a research internship at NVIDIA for Summer 2025, working on asynchronous federated...',
          description: "",
          section: "News",},{id: "news-our-work-on-lora-fine-tuning-in-fl-was-accepted-to-neurips-2025-paper",
          title: 'Our work on LoRA fine-tuning in FL was accepted to NeurIPS 2025! [paper]...',
          description: "",
          section: "News",},{id: "news-our-work-on-internal-planning-of-language-models-was-accepted-to-iclr-2026-paper",
          title: 'Our work on internal planning of language models was accepted to ICLR 2026!...',
          description: "",
          section: "News",},{id: "news-started-a-quant-research-internship-at-imc-trading-for-summer-2026",
          title: 'Started a Quant Research internship at IMC Trading for Summer 2026.',
          description: "",
          section: "News",},{id: "news-our-work-on-grpo-with-off-policy-coordination-on-public-data-in-fl-was-accepted-to-the-icml-2026-workshop-on-rl-from-world-feedback-paper",
          title: 'Our work on GRPO with off-policy coordination on public data in FL was...',
          description: "",
          section: "News",},{id: "news-3-first-authored-papers-were-accepted-to-neurips-2026-emergent-and-subliminal-llm-misalignment-paper-llm-routing-in-federated-settings-paper-asynchronous-fl-with-data-free-knowledge-distillation-paper",
          title: '3 first-authored papers were accepted to NeurIPS 2026! Emergent and subliminal LLM misalignment...',
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
