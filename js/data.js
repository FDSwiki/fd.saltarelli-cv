// =================================
// CV DATA
// =================================

const cvData = {
    // Informazioni Personali
    personal: {
        name: "Francesco Domenico Saltarelli",
        title: "Student and Entrepreneur",
        email: "fd.saltarelli@gmail.com",
        phone: "+39 3201616715",
        location: "Veneto, Italia",
        linkedin: "fd-saltarelli",
        github: "FDSwiki",
        quote: "The best way to predict the future is to create it.",
        quoteAuthor: "Peter Drucker"
    },

    // Esperienza Professionale
    experience: [
        {
            title: "Team Leader & Unit Coordinator | AI & Research",
            company: "Lumina Consulting Agency",
            location: "Roncade, Italy",
            period: "2024 - Presente",
            description: "Lead the team to achieve objectives and optimize business strategies. Introduce AI, new software, and management systems to improve company efficiency.",
            tags: ["Leadership", "AI Integration", "Business Strategy", "Process Optimization", "Team Management"]
        },
        {
            title: "Chief Technology Officer",
            company: "GrowIN - Startup",
            location: "Roncade, Italy",
            period: "2024 - Presente",
            description: "Lead the technological vision and strategy for app development. Propose and guide the team in implementing new features and system improvements.",
            tags: ["CTO", "App Development", "Tech Strategy", "Innovation", "SwiftUI", "Python"]
        },
        {
            title: "Event Organizer",
            company: "Emerals - European GTA RP Leader",
            location: "Roncade, Italy",
            period: "Sep 2024 - Feb 2025",
            description: "Planned and coordinated events for the largest GTA RP server in Europe. Coordinated communications with external partners, including Universal Music.",
            tags: ["Event Management", "Partnership", "Logistics", "Communication"]
        }
    ],

    // Formazione
    education: [
        {
            degree: "Digital Management",
            institution: "H-Farm College x Ca' Foscari University",
            location: "Venice, Italy",
            period: "2024 - Presente",
            description: "Program combining economics, management, and digital business skills. Focus on entrepreneurship and innovation.",
            icon: "🎓"
        },
        {
            degree: "Scientific High School",
            institution: "Liceo Scientifico Galileo Galilei",
            location: "Dolo, Italy",
            period: "2018 - 2024",
            description: "Developed analytical thinking and problem-solving skills.",
            icon: "🔬"
        }
    ],

    // Competenze
    skills: {
        technical: [
            { name: "Figma", level: "Esperto", percentage: 100 },
            { name: "Adobe Suite", level: "Esperto", percentage: 100 },
            { name: "Office Suite", level: "Esperto", percentage: 100 },
            { name: "Prototyping", level: "Esperto", percentage: 100 },
            { name: "Python", level: "Avanzato", percentage: 80 },
            { name: "SwiftUI", level: "Avanzato", percentage: 80 }
        ],
        soft: [
            { name: "Design Thinking", level: "Avanzato", percentage: 85 },
            { name: "User Research", level: "Avanzato", percentage: 80 },
            { name: "Leadership", level: "Avanzato", percentage: 85 },
            { name: "Problem Solving", level: "Avanzato", percentage: 90 },
            { name: "Communication", level: "Avanzato", percentage: 85 },
            { name: "Agile Methodology", level: "Avanzato", percentage: 80 }
        ],
        languages: [
            { name: "Italian", level: "Madrelingua", percentage: 100 },
            { name: "English", level: "Fluent (C2)", percentage: 80 },
            { name: "Spanish", level: "Intermediate (B1)", percentage: 60 }
        ]
    },

    // Progetti
    projects: [
        {
            title: "Diary Ally",
            description: "AI-powered journaling iOS app with audio recording, automatic transcription, emotion tracking, and intelligent chat features.",
            image: "assets/projects/diary-ally.jpg",
            status: "In Sviluppo",
            technologies: ["SwiftUI", "SwiftData", "AI Integration", "AVFoundation"],
            links: []
        },
        {
            title: "GrowIN App",
            description: "Mobile application for personal and professional growth. As CTO, I lead the technological strategy and development.",
            image: "assets/projects/growin.jpg",
            status: "In Sviluppo",
            technologies: ["SwiftUI", "Python", "AI Integration", "UX/UI Design", "Figma"],
            links: [
                { type: "website", url: "https://grow-in.pro/" }
            ]
        },
        {
            title: "Event Management - Emerals",
            description: "Large-scale event organization for European GTA RP community. Managed partnerships with major brands like Universal Music.",
            image: "assets/projects/emerals.jpg",
            status: "Completato",
            technologies: ["Event Management", "Partnership", "Community Engagement"],
            links: []
        }
    ],

    // Certificazioni
    certifications: [
        {
            name: "Generative AI",
            issuer: "H-Farm College",
            logo: "assets/certifications/hfarm.png"
        },
        {
            name: "Mastering Python",
            issuer: "H-Farm College",
            logo: "assets/certifications/hfarm.png"
        },
        {
            name: "Storytelling",
            issuer: "H-Farm College",
            logo: "assets/certifications/hfarm.png"
        },
        {
            name: "Presentation Skills",
            issuer: "H-Farm College",
            logo: "assets/certifications/hfarm.png"
        },
        {
            name: "Excel Advanced",
            issuer: "H-Farm College",
            logo: "assets/certifications/hfarm.png"
        }
    ]
};

// Export
window.cvData = cvData;
