export const CONTENT = {
  nav: {
    links: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
      { name: "CV", href: "/cv" },
      { name: "Gallery", href: "/gallery" },
    ],
    cta: "Get in Touch",
  },

  hero: {
    primaryButton: "View Research",
    primaryButtonHref: "#projects",
    secondaryButton: "View CV",
    secondaryButtonHref: "/cv",
  },

  projects: {
    heading: "Selected Research",
    subheading:
      "A selection of my publications and ongoing research in incremental machine learning, cybersecurity in smart manufacturing, and additive manufacturing process monitoring.",
    scholarLink: "See my Google scholar for full publication list",
    scholarHref: "https://scholar.google.com/citations?user=40ITeewAAAAJ",
  },

  skills: {
    heading: "Expertise & Methodology",
  },

  experience: {
    heading: "Academic & Professional Journey",
  },

  contact: {
    heading: "Let's Connect",
    subheading:
      "I'm always open to discussing how I can contribute to your project. Feel free to reach out.",
    emailLabel: "Email",
    locationLabel: "Location",
    profilesLabel: "Profiles",
    formHeading: "Send a Message",
    form: {
      namePlaceholder: "Jane Doe",
      emailPlaceholder: "jane@university.edu",
      subjectPlaceholder: "Research Collaboration",
      messagePlaceholder: "Brief details about your inquiry...",
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitButton: "Send Message",
      submittingButton: "Sending...",
    },
    toast: {
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    },
    validation: {
      nameRequired: "Name is required",
      emailInvalid: "Invalid email address",
      subjectMin: "Subject must be at least 5 characters",
      messageMin: "Message must be at least 10 characters",
    },
  },

  footer: {
    links: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
    ],
    copyright: `© ${new Date().getFullYear()} All rights reserved.`,
  },
};
