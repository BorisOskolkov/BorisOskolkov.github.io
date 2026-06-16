import {
  BookOpen,
  Code,
  Lightbulb,
  Microscope,
  GraduationCap,
  Briefcase,
  FileText,
  Cpu,
} from "lucide-react";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Boris Oskolkov",
    title: "PhD Researcher · Industrial Engineering & Machine Learning",
    email: "boris.oskolkov@okstate.edu",
    location: "Stillwater, OK, USA",
    bio: "PhD candidate in Industrial Engineering at Oklahoma State University, researching incremental machine learning, cybersecurity in smart manufacturing, and additive manufacturing process monitoring. I develop data-driven solutions that bridge advanced ML methods and real-world engineering systems.",
    avatarUrl: `${import.meta.env.BASE_URL}images/headshot.png`,
    socials: {
      linkedin: "https://linkedin.com/in/boris-oskolkov",
      github: "https://github.com/borisOskolkov",
      scholar: "https://scholar.google.com/citations?user=40ITeewAAAAJ",
    },
  },
  skills: [
    {
      category: "Programming Languages",
      icon: Code,
      items: [
        "Python",
        "MATLAB",
        "R",
        "C/C++",
        "Solidity",
        "Embedded C/C++ (ARM Cortex-M, ESP32)",
      ],
    },
    {
      category: "Machine Learning",
      icon: Lightbulb,
      items: [
        "PyTorch",
        "Keras",
        "TensorFlow",
        "Scikit-Learn",
        "Incremental Learning",
        "Knowledge Distillation",
        "KAN Networks",
      ],
    },
    {
      category: "Data & Analysis",
      icon: Microscope,
      items: [
        "NumPy",
        "Pandas",
        "SciPy",
        "Matplotlib",
        "Seaborn",
        "Statistical Modeling",
        "Process Monitoring",
      ],
    },
    {
      category: "Engineering & Research",
      icon: BookOpen,
      items: [
        "PCB Design (Altium Designer)",
        "CAD Modeling",
        "Git",
        "SQL",
        "Additive Manufacturing",
        "Blockchain / Smart Contracts",
        "Cybersecurity",
        "Quality Control",
        "Curriculum Design",
        "Teaching",
      ],
    },
  ],
  projects: [
    {
      id: "proj-5",
      title:
        "Knowledge Distillation for Domain Incremental Learning in Smart Manufacturing",
      year: "2026",
      description:
        "Proposed a knowledge distillation-empowered domain incremental learning method with flexible model selection for smart manufacturing applications. Published in Journal of Manufacturing Systems (2026).",
      tags: [
        "Knowledge Distillation",
        "Domain Incremental Learning",
        "Smart Manufacturing",
        "Journal of Manufacturing Systems",
      ],
      links: {
        paper: "https://doi.org/10.1016/j.jmsy.2026.04.011",
      },
    },
    {
      id: "proj-1",
      title:
        "KAN-enabled Incremental Learning for Additive Manufacturing Monitoring",
      year: "2025",
      description:
        "Applied Kolmogorov-Arnold Networks (KAN) within an incremental learning framework for online process monitoring of additive manufacturing. Presented at IEEE 21st International Conference on Automation Science and Engineering (CASE 2025).",
      tags: [
        "Process monitoring",
        "Knowledge Distillation",
        "Incremental learning",
        "Computer aided software engineering",
        "Automation",
        "3D printing",
        "Feature extraction",
        "Real-time systems",
        "Convolutional neural networks",
      ],
      links: {
        paper: "https://doi.org/10.1109/CASE58245.2025.11164003",
      },
    },
    {
      id: "proj-2",
      title:
        "Incremental ML-Integrated Blockchain for Manufacturing Cybersecurity",
      year: "2025",
      description:
        "Developed a real-time security framework integrating self-written blockchain with incremental machine learning for cyber-enabled manufacturing systems. Published in ASME Journal of Computing and Information Science in Engineering.",
      tags: [
        "Blockchain",
        "Incremental Learning",
        "Cybersecurity",
        "Smart Manufacturing",
        "ASME",
      ],
      links: {
        paper: "https://doi.org/10.1115/1.4067736",
      },
    },
    {
      id: "proj-3",
      title:
        "Cost-Saving Diabetic Retinopathy Prediction via Incremental Learning",
      year: "2024",
      description:
        "Designed a sampling-empowered incremental learning pipeline for data-driven diabetic retinopathy prediction, reducing annotation costs. Presented at 2024 IEEE Engineering in Medicine and Biology Conference (EMBC).",
      tags: [
        "Medical Imaging",
        "Incremental Learning",
        "Healthcare AI",
        "IEEE EMBC",
      ],
      links: {
        paper: "https://doi.org/10.1109/EMBC53108.2024.10782548",
      },
    },
    {
      id: "proj-4",
      title: "Blockchain & Camouflaged Encryption for Sensor Data Protection",
      year: "2023",
      description:
        "Integrated blockchain with camouflaged encryption to protect sensor data integrity in cyber-physical manufacturing systems. Published in ASME Journal of Computing and Information Science in Engineering.",
      tags: [
        "Blockchain",
        "Encryption",
        "Cyber-Physical Systems",
        "Sensor Data",
        "ASME",
      ],
      links: {
        paper: "https://doi.org/10.1115/1.4063859",
      },
    },
    {
      id: "proj-6",
      title: "Cybersecurity in Additive Manufacturing: Systematic Review",
      year: "in review",
      description:
        "Co-authored a systematic review of data analytics for cyber-physical security in additive manufacturing, identifying key challenges and future research directions. Submitted to Journal of Manufacturing Systems.",
      tags: [
        "Cybersecurity",
        "Additive Manufacturing",
        "Systematic Review",
        "Data Analytics",
      ],
      links: {},
    },
  ],
  experience: [
    {
      id: "exp-1",
      type: "work",
      role: "Graduate Research Assistant",
      institution: "Oklahoma State University, Stillwater, OK",
      dates: "Aug 2022 – Present",
      description:
        "Integrated self-written blockchain with ML-based online monitoring for additive manufacturing. Designed and conducted 5+ in-situ AM experiments using scikit-learn and PyTorch, achieving 10% accuracy gains. Mapped SQL data in pipe inspection projects, reducing manual inspection time by 50%+. Set up a wireless multi-sensor data collection system.",
      icon: Microscope,
    },
    {
      id: "exp-2",
      type: "work",
      role: "Instructor & Teaching Assistant",
      institution: "Oklahoma State University, Stillwater, OK",
      dates: "Aug 2022 – May 2025",
      description:
        "Instructor of record for IEM 3503 (Engineering Economic Analysis) and IEM 4103/5103 (Quality Control & Reliability Analysis). TA for ENGR 1412. Advised 100+ students per semester via office hours and email; managed Canvas LMS for two semesters.",
      icon: BookOpen,
    },
    {
      id: "exp-5",
      type: "education",
      role: "PhD in Industrial Engineering and Management",
      institution: "Oklahoma State University, Stillwater, OK — GPA: 4.0",
      dates: "Aug 2022 – Aug 2026 (tentative)",
      description:
        "Research focus: incremental machine learning, blockchain-based cybersecurity, and process monitoring in smart/additive manufacturing. President, Student INFORMS Chapter (2025–2026). Multiple award recipient including 2nd prize in Riata Business Plan Competition 2025.",
      icon: GraduationCap,
    },
    {
      id: "exp-6",
      type: "education",
      role: "MSc in Industrial Engineering and Management",
      institution: "Oklahoma State University, Stillwater, OK — GPA: 4.0",
      dates: "Aug 2022 – Dec 2025",
      description:
        "Completed alongside PhD program. Coursework and research spanning operations research, machine learning, and manufacturing systems.",
      icon: GraduationCap,
    },
    {
      id: "exp-3",
      type: "work",
      role: "Embedded Software Engineer",
      institution: "Artes Electronics Pte. Ltd., Saint-Petersburg, Russia",
      dates: "Aug 2021 – Aug 2022",
      description:
        "Developed embedded C/C++ software for 32-bit microcontrollers (ARM Cortex-M, ESP32). Revised digital circuit schematics, managed code repositories with Git, and debugged firmware using Python test scripts.",
      icon: Cpu,
    },
    {
      id: "exp-4",
      type: "work",
      role: "Lead Electrical & Mechanical Engineer",
      institution: "Zaslon JSC, Saint-Petersburg, Russia",
      dates: "Oct 2018 – Aug 2021",
      description:
        "Engineered analog/digital circuits and PCB layouts using Altium Designer. Programmed PIC microcontrollers in assembly. Led a team of three mechanical engineers developing products for extreme environments from concept to prototype, supervised production flow and quality.",
      icon: Briefcase,
    },
    {
      id: "exp-7",
      type: "education",
      role: "MSc in Instrumentation Engineering (Honors)",
      institution:
        "Saint-Petersburg State University of Aerospace Instrumentation, Russia — GPA: 4.0",
      dates: "Sept 2016 – Jun 2018",
      description:
        "Honors graduate. Research on MEMS, adhesion in micromechanical systems, and photovoltaic effects in microelectromechanical sensors. President and city government scholarship recipient.",
      icon: GraduationCap,
    },
    {
      id: "exp-8",
      type: "education",
      role: "BSc in Instrumentation Engineering (Honors)",
      institution:
        "Saint-Petersburg State University of Aerospace Instrumentation, Russia — GPA: 3.88",
      dates: "Sept 2012 – Jun 2016",
      description:
        "Honors graduate. Silver prize at XII European ISA Best Student Research (ESPC-2016). Published first research papers on MEMS and microresonators during undergraduate studies.",
      icon: GraduationCap,
    },
  ],
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "project" | "presentation" | "poster";
  description?: string;
  date?: string;
  imageUrl?: string;
  link?: string;
  pdfUrl?: string;
  tags?: string[];
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-3",
    title: "Riata Pitch & Poster Competition — 2nd Place",
    category: "presentation",
    description:
      "Led a team at OSU's Riata Center for Entrepreneurship Big City High-Tech Pitch & Poster competition (2023). Pitched MemoSpark — an AI app that guides users to strike better poses in photos using real-time body analysis. Took 2nd place and a $700 prize.",
    date: "2023",
    imageUrl: `${import.meta.env.BASE_URL}images/riata-pitch-winner.jpg`,
    tags: [
      "Entrepreneurship",
      "AI App",
      "Pitch Competition",
      "2nd Place",
      "OSU Riata",
    ],
  },
  {
    id: "gallery-2",
    title: "Q-Tag Senior Design Team — 1st Place",
    category: "project",
    description:
      "Consulted the senior design team that won 1st place at OSU's College of Engineering, Architecture and Technology capstone showcase (Fall 2025). The team built Q-Tag — a wearable smart name tag with NFC, Bluetooth, and a compact microcontroller design that lets users share contact info instantly.",
    date: "April 2025",
    imageUrl: `${import.meta.env.BASE_URL}images/qtag-senior-design.jpg`,
    tags: ["Senior Design", "NFC", "Wearable Tech", "OSU", "1st Place"],
  },
  {
    id: "gallery-4",
    title:
      "Riata Business Plan Competition 2025 — 2nd Place (Rising Entrepreneur)",
    category: "presentation",
    description:
      "Served as technical consultant for Inhaler Innovations at the OSU Riata Center Business Plan Competition 2025. The team won 2nd place in the Rising Entrepreneur track with a smart inhaler solution designed to improve medication adherence and patient outcomes.",
    date: "2025",
    imageUrl: `${import.meta.env.BASE_URL}images/inhaler-innovations-2025.jpg`,
    tags: [
      "Business Plan",
      "MedTech",
      "Technical Consulting",
      "2nd Place",
      "OSU Riata",
    ],
  },
  {
    id: "gallery-1",
    title: "IEEE CASE 2025 — Paper Presentation",
    category: "presentation",
    description:
      "Presented research on Kolmogorov-Arnold Networks (KANs) for incremental learning in additive manufacturing process monitoring at the IEEE International Conference on Automation Science and Engineering, The Regal Biltmore, Los Angeles.",
    date: "August 19, 2025",
    imageUrl: `${import.meta.env.BASE_URL}images/ieee-case-2025.jpg`,
    link: "https://doi.org/10.1109/CASE58245.2025.11164003",
    tags: [
      "KAN",
      "Incremental Learning",
      "Additive Manufacturing",
      "IEEE CASE",
    ],
  },

  // ── Poster presentations (placeholders) ───────────────────────────────
  // To add a real poster, set `pdfUrl` to your PDF. Two options:
  //   1) Best (same-origin, renders inline in the popup): drop the PDF in
  //      public/posters/ and use `${import.meta.env.BASE_URL}posters/my.pdf`.
  //   2) Any public URL also works; it opens via the "Open PDF" button and,
  //      if the host allows embedding, renders inline too.
  // Edit the title, date, description, and tags. Duplicate/remove blocks as
  // needed. The pdfUrls below are temporary hosted placeholders.
  {
    id: "poster-1",
    title: "Poster Presentation 1 — Title TBD",
    category: "poster",
    description:
      "Placeholder for a poster presentation. Replace the title, description, date, and tags — and point pdfUrl at your real poster PDF.",
    date: "Year TBD",
    pdfUrl:
      "https://pub.hyperagent.com/api/published/pbf01KV960AR0_SWPJKW5JA22EV1D0/poster-1.pdf",
    tags: ["Poster", "Conference TBD"],
  },
  {
    id: "poster-2",
    title: "Poster Presentation 2 — Title TBD",
    category: "poster",
    description:
      "Placeholder for a poster presentation. Replace the title, description, date, and tags — and point pdfUrl at your real poster PDF.",
    date: "Year TBD",
    pdfUrl:
      "https://pub.hyperagent.com/api/published/pbf01KV960B1V_HERKDKYN0BWFYRXQ/poster-2.pdf",
    tags: ["Poster", "Conference TBD"],
  },
  {
    id: "poster-3",
    title: "Poster Presentation 3 — Title TBD",
    category: "poster",
    description:
      "Placeholder for a poster presentation. Replace the title, description, date, and tags — and point pdfUrl at your real poster PDF.",
    date: "Year TBD",
    pdfUrl:
      "https://pub.hyperagent.com/api/published/pbf01KV960BVB_YECJ7MF7ZDBZC1WK/poster-3.pdf",
    tags: ["Poster", "Conference TBD"],
  },
  {
    id: "poster-4",
    title: "Poster Presentation 4 — Title TBD",
    category: "poster",
    description:
      "Placeholder for a poster presentation. Replace the title, description, date, and tags — and point pdfUrl at your real poster PDF.",
    date: "Year TBD",
    pdfUrl:
      "https://pub.hyperagent.com/api/published/pbf01KV960CKJ_E0GRGN0SCW5J7QE4/poster-4.pdf",
    tags: ["Poster", "Conference TBD"],
  },
];
