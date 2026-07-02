/* ==========================================
   Ahmed ElDegla Portfolio — Data Configuration
   =========================================
   
   HOW TO EDIT THIS FILE:
   ====================
   1. This file contains ALL the text/data for your portfolio
   2. Edit the values inside the quotes to change what appears on your site
   3. The UI automatically updates when you save this file
   4. Each section is organized by the page section it controls
   5. IDs in index.html match the property names here
   
   EXAMPLE: To change your name:
   - Find 'personal.name' below
   - Change "Ahmed ElDegla" to your new name
   - Save file and refresh browser
   
   IMPORTANT: Keep the structure (brackets, commas) exactly as is!
   Only change the text inside the quotes.
*/

const portfolioData = {
    // =========================================
    // PERSONAL INFORMATION
    // =========================================
    // Used in: Hero, About, Contact sections
    personal: {
        name: "Ahmed ElDegla",              // Short name for logo/nav
        fullName: "Ahmed ElDegla",          // Full name for headings
        title: "Flutter Developer",         // Your job title (typing effect)
        email: "ahmedeldegla0@gmail.com",   // Your email address
        phone: "+20 100 975 3169",         // Your phone number
        location: "Maadi, Cairo, Egypt",    // Your location
        whatsapp: "https://wa.me/201009753169",  // WhatsApp link (format: https://wa.me/COUNTRYCODENUMBER)
        github: "https://github.com/ahmed-degla",  // Your GitHub profile URL
        linkedin: "https://www.linkedin.com/in/ahmed-el-degla-815a361a5/",  // Your LinkedIn URL
        resume: "https://drive.google.com/file/d/1lqir1dRKP_lKGhzUMkiCH59Wh3ZsyRT2/view?usp=sharing",  // CV/Resume URL
        profileImage: "assets/images/profile.jpeg",  // Path to your profile photo
        yearsExperience: 3                  // Number of years of experience
    },

    // =========================================
    // META INFORMATION (SEO)
    // =========================================
    // Used in: HTML <head> for SEO and social sharing
    meta: {
        description: "Ahmed ElDegla — Flutter Developer with 3 years of experience. Hybrid mobile apps, Clean Architecture, Firebase, REST APIs, and Google Maps.",  // Site description for search engines
        keywords: "Flutter Developer, Ahmed ElDegla, Mobile Developer, Dart, Firebase, Cairo Egypt",  // SEO keywords (comma-separated)
        author: "Ahmed ElDegla",  // Your name for meta author tag
        ogTitle: "Ahmed ElDegla | Flutter Developer",  // Title when shared on social media
        ogDescription: "Flutter Developer with 3 years of experience building hybrid mobile applications."  // Description when shared on social media
    },

    // =========================================
    // HERO SECTION (Top of page)
    // =========================================
    // Used in: Hero section (first section visitors see)
    hero: {
        greeting: "Hello, I'm",  // Greeting text before your name
        badge: "Available for freelance, Remote & full-time",  // Green badge text
        description: "Flutter Developer with <strong>3 years of experience</strong> in hybrid mobile app development. I build dynamic, responsive applications with Dart & Flutter — from e-learning and social platforms to classified marketplaces — backed by <strong>Firebase</strong>, <strong>REST APIs</strong>, <strong>Clean Architecture</strong>, and <strong>Google Maps</strong>.",  // Your bio (HTML allowed with <strong> tags)
        typingWords: [  // Words that cycle through in the typing effect
            "Flutter Developer",
            "Jr. Flutter Developer",
            "Hybrid Mobile Expert",
            "Dart & Flutter Specialist",
            "Clean Architecture"
        ]
    },

    // =========================================
    // ABOUT SECTION
    // =========================================
    // Used in: About section
    about: {
        subtitle: "Turning Ideas Into Powerful Apps",  // Section subtitle
        description: "Flutter developer with deep knowledge in hybrid mobile app development and highest code quality.",  // Section description
        content: "Hi! I'm Ahmed — a Flutter Developer who turns innovative app ideas into production-ready products.",  // Main heading text
        paragraphs: [  // Two paragraphs of your bio
            "If you are seeking a highly skilled and richly experienced mobile expert with deep knowledge in hybrid mobile app development, exceptional professionalism, excellent communication skills, and the highest code quality — you've come to the right place.",
            "With two years of dedicated experience in Dart and Flutter, I specialize in creating dynamic and responsive hybrid mobile applications. Over this time I've built apps across e-learning, social networking, and classified marketplaces — from simple utility apps to complex platforms with robust functionalities."
        ],
        list: [  // Bullet points of your skills/strengths
            "Proficient in Dart & Flutter for seamless user experiences",
            "Clean Architecture, OOP & maintainable scalable code",
            "Firebase, REST APIs, Google Maps & Google APIs",
            "Native iOS & Android integration for hardware access",
            "Clear communication & consistent project deadlines"
        ]
    },

    // =========================================
    // SERVICES SECTION
    // =========================================
    // Used in: Services section (6 service cards)
    // To add/remove services: Add/remove objects in this array
    services: [
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile App Development",
            description: "Full-cycle Flutter apps for Android & iOS — from concept and wireframes to App Store launch.",
            features: ["Custom UI/UX", "Native performance", "Offline support"]
        },
        {
            icon: "fas fa-fire",
            title: "Firebase Integration",
            description: "Complete backend setup with Auth, Firestore, Cloud Functions, FCM, Analytics, and Crashlytics.",
            features: ["Real-time sync", "Secure rules", "Scalable infra"],
            featured: true,
            badge: "Most Popular"
        },
        {
            icon: "fas fa-paint-brush",
            title: "UI/UX Implementation",
            description: "Transform Figma designs into responsive, animated Flutter widgets with micro-interactions.",
            features: ["Custom animations", "Dark/Light themes", "Responsive layouts"]
        },
        {
            icon: "fas fa-sitemap",
            title: "Architecture & Refactoring",
            description: "Migrate legacy code to Clean Architecture with proper state management and test coverage.",
            features: ["Bloc / Riverpod", "Unit & widget tests", "Code reviews"]
        },
        {
            icon: "fas fa-plug",
            title: "API Integration",
            description: "Connect your app to REST, GraphQL, WebSocket, payment gateways, maps, and third-party SDKs.",
            features: ["Stripe / PayPal", "Google Maps", "Social login"]
        },
        {
            icon: "fas fa-rocket",
            title: "App Publishing & Support",
            description: "Play Store & App Store submission, ASO optimization, and ongoing maintenance & updates.",
            features: ["Store compliance", "Bug fixes", "Feature updates"]
        }
    ],

    // =========================================
    // SKILLS SECTION
    // =========================================
    // Used in: Skills section (skill bars and tech stack)
    skills: {
        categories: [
            {
                icon: "devicon-flutter-plain colored",
                title: "Programming & Frameworks",
                skills: [
                    { name: "Dart", percent: 95 },
                    { name: "Flutter", percent: 94 },
                    { name: "Hybrid Mobile Development", percent: 92 },
                    { name: "Widget Customization", percent: 90 }
                ]
            },
            {
                icon: "fas fa-server",
                title: "Backend & APIs",
                skills: [
                    { name: "REST APIs", percent: 93 },
                    { name: "Firebase", percent: 92 },
                    { name: "Authentication & Backend", percent: 88 },
                    { name: "Real-time Data", percent: 85 }
                ]
            },
            {
                icon: "fas fa-map",
                title: "Mapping & Services",
                skills: [
                    { name: "Google Maps", percent: 90 },
                    { name: "Google APIs", percent: 88 },
                    { name: "BillingClient SDK", percent: 85 },
                    { name: "Third-party SDKs", percent: 82 }
                ]
            },
            {
                icon: "fas fa-sitemap",
                title: "Software Practices",
                skills: [
                    { name: "Clean Architecture", percent: 93 },
                    { name: "OOP", percent: 94 },
                    { name: "Native iOS & Android", percent: 30 },
                    { name: "Git & Version Control", percent: 90 }
                ]
            }
        ],
        techStack: [
            { icon: "devicon-flutter-plain colored", name: "Flutter" },
            { icon: "fas fa-code", name: "Dart" },
            { icon: "fas fa-fire", name: "Firebase" },
            { icon: "fas fa-plug", name: "REST APIs" },
            { icon: "fas fa-sitemap", name: "Clean Architecture" },
            { icon: "fas fa-cubes", name: "OOP" },
            { icon: "fas fa-map", name: "Google Maps" },
            { icon: "fas fa-globe", name: "Google APIs" },
            { icon: "fas fa-credit-card", name: "BillingClient" },
            { icon: "fab fa-apple", name: "iOS Native" },
            { icon: "fab fa-android", name: "Android Native" },
            { icon: "fab fa-git-alt", name: "Git" }
        ]
    },

    // =========================================
    // EXPERIENCE SECTION
    // =========================================
    // Used in: Experience timeline section
    // To add/remove experience: Add/remove objects in this array
    experience: [
        {
            date: "2024 — Present",
            company: "Active Development",
            companyIcon: "fas fa-tools",
            title: "Flutter Developer — SMSAR & Click FLEX",
            description: "Currently building SMSAR, a classified ads marketplace for KSA (real estate, cars, electronics, license plates), and Click FLEX, a social platform connecting models with agents in the UAE.",
            tags: ["Marketplace", "Social Platform", "Firebase", "REST APIs"]
        },
        {
            date: "2023 — 2024",
            company: "Published Apps",
            companyIcon: "fas fa-rocket",
            title: "Flutter Developer — AMACADEMY & Otaibi Live",
            description: "Developed and launched AMACADEMY (e-learning with videos, files, and electronic exams) and Otaibi Live — a social platform for the Otaibi tribe in Kuwait. Both published on App Store and Play Store.",
            tags: ["E-Learning", "Social", "App Store", "Play Store"]
        },
        {
            date: "2023 — Present",
            company: "Professional Growth",
            companyIcon: "devicon-flutter-plain colored",
            title: "Jr. Flutter Developer",
            description: "Two years of dedicated Dart & Flutter experience building hybrid mobile apps across e-learning, social, and marketplace domains — from utility apps to complex platforms with robust functionalities.",
            tags: ["Dart", "Flutter", "Clean Architecture", "OOP"]
        }
    ],

    // =========================================
    // PROJECTS SECTION
    // =========================================
    // Used in: Projects section (project cards)
    // To add/remove projects: Add/remove objects in this array
    // status options: "live" or "dev"
    // category options: "education", "social", "marketplace"
    projects: [
        {
            id: "amacademy",
            category: "education",
            categoryName: "E-Learning",
            title: "AMACADEMY",
            description: "An e-learning platform presenting videos, files, and electronic exams. Published on App Store and Google Play Store.",
            icon: "fas fa-graduation-cap",
            accent: "#4F7DFF",
            status: "live",
            statusText: "Live",
            storeLinks: [
                { platform: "apple", name: "App Store", url: "#" },
                { platform: "google-play", name: "Play Store", url: "#" }
            ],
            tags: ["Flutter", "Firebase", "REST APIs", "Exams"],
            featured: true
        },
        {
            id: "otaibi-live",
            category: "social",
            categoryName: "Social Platform",
            title: "Otaibi Live — لايف عتيبي",
            description: "A social platform for the Otaibi tribe in Kuwait. Strengthens social bonds, shares news, participates in events, and provides a safe space to connect and capture special moments.",
            icon: "fas fa-users",
            accent: "#FF6B9D",
            status: "live",
            statusText: "Live",
            storeLinks: [
                { platform: "apple", name: "App Store", url: "#" },
                { platform: "google-play", name: "Play Store", url: "#" }
            ],
            tags: ["Social", "Events", "Firebase", "Kuwait"]
        },
        {
            id: "smsar",
            category: "marketplace",
            categoryName: "Classified Ads — KSA",
            title: "SMSAR",
            description: "A classified ads marketplace app in Saudi Arabia enabling users to buy, sell, and rent real estate, cars, electronics, phone numbers, license plates, and more.",
            icon: "fas fa-store",
            accent: "#00D4FF",
            status: "live",
            statusText: "Live",
            storeLinks: [
                { platform: "google-play", name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.smsar.app" },
                { platform: "apple", name: "App Store", url: "https://apps.apple.com/app/smsar-%D8%B3%D9%85%D8%B3%D8%A7%D8%B1/id6759536661" }
            ],
            tags: ["Marketplace", "Real Estate", "Google Maps", "KSA"]
        },
        {
            id: "click-flex",
            category: "social",
            categoryName: "Social Platform — UAE",
            title: "Click FLEX",
            description: "A social platform connecting models with agents in the UAE — built to streamline professional networking and collaboration in the modeling industry.",
            icon: "fas fa-star",
            accent: "#7E5CFF",
            status: "dev",
            statusText: "In Development",
            tags: ["Social", "Networking", "UAE", "Flutter"]
        }
    ],

    // =========================================
    // PROCESS SECTION
    // =========================================
    // Used in: Process section (6-step workflow)
    process: [
        { step: "01", icon: "fas fa-comments", title: "Discovery", description: "Understanding your vision, goals, target users, and technical requirements through detailed consultation." },
        { step: "02", icon: "fas fa-drafting-compass", title: "Design & Plan", description: "Wireframes, architecture design, tech stack selection, and milestone planning with clear timelines." },
        { step: "03", icon: "fas fa-code", title: "Development", description: "Agile sprints with regular demos, clean code, comprehensive testing, and transparent progress updates." },
        { step: "04", icon: "fas fa-vial", title: "Testing & QA", description: "Rigorous testing across devices, performance profiling, bug fixes, and user acceptance testing." },
        { step: "05", icon: "fas fa-rocket", title: "Launch", description: "App Store & Play Store submission, ASO optimization, analytics setup, and go-live support." },
        { step: "06", icon: "fas fa-headset", title: "Support", description: "Ongoing maintenance, feature updates, performance monitoring, and dedicated post-launch support." }
    ],

    // =========================================
    // HIGHLIGHTS SECTION (Testimonials)
    // =========================================
    // Used in: Highlights/Professional highlights section
    highlights: [
        {
            icon: "fas fa-rocket",
            text: "Successfully developed and launched multiple applications with high user satisfaction — including AMACADEMY and Otaibi Live, now live on App Store and Play Store.",
            author: "App Launches",
            role: "Production Releases"
        },
        {
            icon: "fas fa-clock",
            text: "Consistently met project deadlines while maintaining a focus on quality and performance across e-learning, social, and marketplace applications.",
            author: "On-Time Delivery",
            role: "Project Management"
        },
        {
            icon: "fas fa-lightbulb",
            text: "Adapted to the latest industry trends and technologies to stay ahead in the rapidly evolving mobile development landscape.",
            author: "Continuous Learning",
            role: "Industry Trends"
        },
        {
            icon: "fas fa-globe",
            text: "Built apps serving diverse markets — e-learning in Egypt, social platforms in Kuwait, classified ads in KSA, and modeling networks in the UAE.",
            author: "Regional Impact",
            role: "MENA Region"
        }
    ],

    // =========================================
    // ACHIEVEMENTS SECTION
    // =========================================
    // Used in: Achievements section (stats cards)
    // These are the ONLY stats shown on the site (no duplicates)
    achievements: [
        { icon: "fas fa-calendar-check", count: 3, label: "Years Experience" },
        { icon: "fas fa-mobile-alt", count: 4, label: "Major Projects" },
        { icon: "fas fa-store", count: 3, label: "Apps on Stores" },
        { icon: "fas fa-globe-africa", count: 4, label: "Countries Served" },
        { icon: "fas fa-code", count: 1, label: "Apps In Development" }
    ],

    // =========================================
    // FAQ SECTION
    // =========================================
    // Used in: FAQ accordion section
    // To add/remove FAQs: Add/remove objects in this array
    faq: [
        {
            question: "What is your typical project timeline?",
            answer: "An MVP typically takes 4–8 weeks. Full-featured apps range from 2–4 months depending on complexity. I provide detailed timelines during the discovery phase."
        },
        {
            question: "Do you work with existing codebases?",
            answer: "Absolutely! I specialize in refactoring legacy Flutter apps, migrating state management, and improving architecture while maintaining business continuity."
        },
        {
            question: "What state management do you prefer?",
            answer: "Bloc/Cubit for complex apps with clear event-driven flows. Riverpod for modern reactive apps. I choose based on project needs, team familiarity, and scalability requirements."
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes! I offer maintenance packages including bug fixes, OS updates, feature additions, performance monitoring, and dedicated support channels."
        },
        {
            question: "Can you help with App Store submission?",
            answer: "Full publishing support for both Google Play and Apple App Store — including screenshots, descriptions, ASO, privacy policies, and review process guidance."
        }
    ],

    // =========================================
    // CTA SECTION (Call to Action Banner)
    // =========================================
    // Used in: CTA banner before contact section
    cta: {
        title: "Ready to Build Something Amazing?",
        description: "Let's turn your app idea into a reality. I'm available for new projects and exciting collaborations.",
        buttonText: "Start a Project"
    },

    // =========================================
    // FOOTER SECTION
    // =========================================
    // Used in: Footer area
    footer: {
        tagline: "Jr. Flutter Developer building hybrid mobile apps across the MENA region.",
        copyright: "© 2026 Ahmed ElDegla. Crafted with Flutter and passion.",
        subtitle: "Flutter Developer • Mobile Engineer • Maadi, Cairo, Egypt"
    }
};
