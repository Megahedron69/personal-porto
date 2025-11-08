import {
  informationCircle,
  starOutline,
  settingsOutline,
  server,
  lockClosed,
  desktopOutline,
  phonePortraitOutline,
  colorPaletteOutline,
  shieldCheckmark,
  notificationsOutline,
  mapOutline,
  barChartOutline,
  peopleOutline,
  cloudUploadOutline,
  leafOutline,
  cloudOutline,
  syncOutline,
  locationOutline,
  searchOutline,
  cameraOutline,
  phoneLandscapeOutline,
  shieldCheckmarkOutline,
  fingerPrintOutline,
  chatbubblesOutline,
  trophyOutline,
  earthOutline,
  ribbonOutline,
  walletOutline,
  personAddOutline,
  flashOutline,
  schoolOutline,
  diamondOutline,
  timeOutline,
  rocketOutline,
  micOutline,
  timerOutline,
  trendingUpOutline,
  prismOutline,
  personOutline,
  fitnessOutline,
  pulseOutline,
  heartOutline,
  analyticsOutline,
  documentTextOutline,
  bodyOutline,
  cloudDownloadOutline,
  medkitOutline,
  lockClosedOutline,
  logInOutline,
} from "ionicons/icons";

export type FeatureDetail = {
  title?: string;
  icon?: string;
  description?: string;
  sections?: Array<FeatureDetail>;
  features?: Array<string | FeatureDetail>;
  gitURL?: string;
  deployURL?: string;
};

export type EcosorterFeature = {
  title: string;
  icon?: string;
  description?: string;
  features?: EcosorterFeature[];
};

export const attendexFeatures: FeatureDetail[] = [
  {
    title: "Purpose",
    icon: informationCircle,
    description: "To take attendance the smart, hassle-free way.",
  },
  {
    title: "General App Features",
    icon: starOutline,
    features: [
      {
        title: "Smart Attendance",
        description:
          "Takes attendance using four accurate methods: NFC, geofencing, passkey biometrics, and dynamic QR codes.",
      },
      {
        title: "Employee Dashboard",
        features: [
          "Track attendance with charts, graphs, heatmaps, and detailed data points.",
          "Request leaves and track their status.",
          "Real-time chat communication with admins and a chatbot.",
        ],
      },
      {
        title: "Admin Dashboard",
        features: [
          "Monitor employee attendance with detailed charts, heatmaps, and interactive tables.",
          "Manage leave requests and view attendance-leave data on a monthly, weekly, and yearly basis.",
          "Support for multiple organizations and real-time chat with employees.",
        ],
      },
      {
        title: "Advanced Technology",
        description:
          "Utilizes multiple ML models for image processing, face detection, OCR, and language processing.",
      },
      {
        title: "Multi-Platform Support",
        description:
          "Available as a responsive website, PWA, native Windows/Mac app, and a companion mobile app.",
      },
    ],
  },
  {
    title: "Technical Features",
    icon: settingsOutline,
    sections: [
      {
        title: "Backend Features",
        icon: server,
        features: [
          "Developed with Supabase, Node.js, and Express.",
          "Uses PostgreSQL as the main database, Redis for caching, and Supabase buckets for image storage. Implements views, indexes, triggers, and parameterized queries for clean, efficient SQL.",
          "Nginx is used as a reverse proxy.",
          {
            title: "Security",
            icon: shieldCheckmark,
            features: [
              "HTTP/2 setup with SSL/TLS, HSTS policies to enforce HTTPS, protecting against MITM and protocol downgrade attacks.",
              "Rate limiting on API endpoints to prevent brute force attacks.",
              "Web Application Firewall (easyWaf) to block SQL injection, XSS, and other malicious inputs.",
              "Secure session management with secure cookies, environment-based SSL certificates, and Helmet for reducing attack surface.",
              "Use of parameterized SQL queries and comprehensive client/server-side data sanitization/validation.",
            ],
          },
          {
            title: "Authentication",
            icon: lockClosed,
            features: [
              "Rate-limited implementation of Supabase Auth with social authentication.",
              "Email verification required.",
              "MFA via time-sensitive codes.",
            ],
          },
          "Extensive logging using Winston.",
        ],
      },
      {
        title: "Frontend Features",
        icon: desktopOutline,
        features: [
          "Responsive website built with React and Vite, PWA using Vite PWA plugin.",
          "Windows and macOS apps developed with Tauri; Companion app for Android/iOS made with React Native, all written in TypeScript.",
          "Employee and Admin dashboards designed with Ant Design library.",
          "Implementation of file-based public and protected routes using TanStack Router with cache support and Turnstile CAPTCHA for bot protection.",
          "Frontend API data caching with TanStack Query.",
        ],
      },
      {
        title: "Deployment Features",
        icon: cloudUploadOutline,
        features: [
          "Docker containers and volumes used for full application containerization.",
          "Custom domain attendex.shop managed by Cloudflare for enhanced security.",
          "Automatic CI/CD pipeline implemented with Netlify and GitHub Actions.",
        ],
      },
    ],
  },
];

export const memoFeatures: FeatureDetail[] = [
  {
    title: "Purpose",
    icon: informationCircle,
    description: "To share photo memories with your loved ones.",
  },
  {
    title: "General App Features",
    icon: starOutline,
    features: [
      {
        title: "Photo Sharing",
        icon: cameraOutline,
        description: "Allows users to share various photos.",
      },
      {
        title: "Photo Comments",
        icon: phoneLandscapeOutline,
        description: "Users can comment on the photos they view.",
      },
      {
        title: "Personalized Profiles",
        icon: peopleOutline,
        description:
          "Users can create and update their personalized profiles on the web app.",
      },
    ],
  },
  {
    title: "Technical Features",
    icon: settingsOutline,
    sections: [
      {
        title: "Backend Features",
        icon: server,
        features: [
          "Built with Firebase, Node.js, and Express.",
          "Main database is MongoDB, with Mongoose used for NoSQL data management.",
          "Employs image compression techniques to save space.",
          {
            title: "Backend Security",
            icon: shieldCheckmark,
            features: [
              "Uses mongo-sanitize to clean data before processing.",
              "Enforces client-side, server-side, and database validation constraints.",
              "Sensitive keys are hidden in .env files.",
            ],
          },
          {
            title: "Authentication",
            icon: lockClosed,
            features: [
              "Implemented via Firebase with options for email/password or social authentication (Google/GitHub).",
              "Supports public and protected routes.",
              "Business logic is secured with Firebase Functions.",
            ],
          },
        ],
      },
      {
        title: "Frontend Features",
        icon: desktopOutline,
        features: [
          "Responsive website frontend developed using React.",
          "UI designed with Flowbite and Tailwind CSS libraries.",
          "Custom skeletons created for loading components.",
        ],
      },
    ],
  },
];

export const otherFeatures: FeatureDetail[] = [
  {
    title: "CSV Parser",
    description:
      "A react web app that parses input attendance csv records to display them in tables along with sorting and searching functions",
    deployURL: "https://rainbow-dodol-91dea3.netlify.app/",
    gitURL: "https://github.com/Megahedron69/T6-attendace-",
  },
  {
    title: "Speechly: Voice Assisted Expense Tracker",
    description:
      "A react web app that helps track expenses and income with help of beautiful charts and can work with help of speech",
    deployURL: "https://voicedexpenses.netlify.app/",
    gitURL: "https://github.com/Megahedron69/expense-app",
  },
  {
    title: "Tensorflow model GUI",
    description:
      "A HTML website that runs the first tensorflow model created by me to find and classify waste",
    deployURL: "https://splendid-buttercream-813ef2.netlify.app/",
    gitURL: "https://github.com/Megahedron69/wasteSegregationmodel",
  },
  {
    title: "Pokedex",
    description: "A react pokedex",
    deployURL: "https://megahedron69.github.io/Pokedex/",
    gitURL: "https://github.com/Megahedron69/Pokedex",
  },
];

export const ecosorterFeatures: FeatureDetail[] = [
  {
    title: "Cross-Platform Support",
    icon: phonePortraitOutline,
    description: "Seamless operation on both iOS and Android devices.",
  },
  {
    title: "Dynamic Visuals",
    icon: colorPaletteOutline,
    description:
      "Experience fluid, interactive animations with vibrant light and dark themes.",
  },
  {
    title: "Secure Authentication",
    icon: shieldCheckmark,
    description: "Firebase-powered authentication ensures secure user access.",
  },
  {
    title: "Push Notifications",
    icon: notificationsOutline,
    description:
      "Scheduled and custom push notifications powered by Firebase Cloud Messaging (FCM).",
  },
  {
    title: "Interactive Maps",
    icon: mapOutline,
    description: "Find waste centers with integrated maps.",
  },
  {
    title: "Educational Content",
    icon: barChartOutline,
    description:
      "Detailed charts, videos, heatmaps, and pictures educate users about waste categories.",
  },
  {
    title: "Engagement & Gamification",
    icon: peopleOutline,
    description:
      "Custom avatars and competitive leaderboards foster user engagement.",
  },
  {
    title: "Real-Time Data",
    icon: cloudUploadOutline,
    description:
      "Custom API and caching techniques implemented for faster data retrieval.",
    features: [
      {
        title: "Cloud Integration",
        icon: cloudUploadOutline,
        description: "Real-time score updates powered by Cloud Firestore.",
      },
    ],
  },
  {
    title: "Eco-Friendly Initiative",
    icon: leafOutline,
    description:
      "Educates users on waste management with a focus on environmental awareness.",
  },
  {
    title: "Cross-Platform Support",
    icon: phonePortraitOutline,
    description: "Seamless operation on both iOS and Android devices.",
  },
  {
    title: "Dynamic Visuals",
    icon: colorPaletteOutline,
    description:
      "Experience fluid, interactive animations with vibrant light and dark themes.",
  },
  {
    title: "Secure Authentication",
    icon: shieldCheckmark,
    description: "Firebase-powered authentication ensures secure user access.",
  },
  {
    title: "Push Notifications",
    icon: notificationsOutline,
    description:
      "Scheduled and custom push notifications powered by Firebase Cloud Messaging (FCM).",
  },
  {
    title: "Interactive Maps",
    icon: mapOutline,
    description: "Find waste centers with integrated maps.",
  },
  {
    title: "Educational Content",
    icon: barChartOutline,
    description:
      "Detailed charts, videos, heatmaps, and pictures educate users about waste categories.",
  },
  {
    title: "Engagement & Gamification",
    icon: peopleOutline,
    description:
      "Custom avatars and competitive leaderboards foster user engagement.",
  },
  {
    title: "Real-Time Data",
    icon: cloudUploadOutline,
    description:
      "Custom API and caching techniques implemented for faster data retrieval.",
    features: [
      {
        title: "Cloud Integration",
        icon: cloudUploadOutline,
        description: "Real-time score updates powered by Cloud Firestore.",
      },
    ],
  },
  {
    title: "Eco-Friendly Initiative",
    icon: leafOutline,
    description:
      "Educates users on waste management with a focus on environmental awareness.",
  },
];

export const weatherooFeatures: FeatureDetail[] = [
  {
    title: "Real-time Weather Updates",
    icon: cloudOutline,
    description:
      "Stay informed with up-to-the-minute weather information for your location or any place in the world.",
  },
  {
    title: "Beautiful and Optimized UI",
    icon: colorPaletteOutline,
    description:
      "Experience a visually appealing interface, crafted with React Native Paper for a smooth and responsive user experience.",
  },
  {
    title: "Caching API",
    icon: syncOutline,
    description:
      "Powered by React Query, ensuring quick access to weather data by efficiently caching API responses.",
  },
  {
    title: "Location-based Weather",
    icon: locationOutline,
    description:
      "Automatically fetches and displays local weather using your device's location services.",
  },
  {
    title: "Search for Any Place",
    icon: searchOutline,
    description:
      "Easily search for weather updates from any location around the globe.",
  },
];

export const companFeatures: FeatureDetail[] = [
  {
    title: "Cross-Platform Compatibility",
    icon: phonePortraitOutline,
    description:
      "Seamlessly works on both iOS and Android with a user-friendly interface and captivating Lottie animations.",
  },
  {
    title: "Secure Authentication",
    icon: shieldCheckmarkOutline,
    description:
      "Backend authentication is protected with rate limiting, MFA, and Cloudflare Turnstile, ensuring secure access.",
  },
  {
    title: "Multiple Attendance Methods",
    icon: fingerPrintOutline,
    description:
      "Users can choose from NFC, geofencing, biometric passkeys, or dynamic QR codes, each method implemented with speed and security in TypeScript.",
  },
  {
    title: "Attendance Reminders",
    icon: notificationsOutline,
    description:
      "Stay on top of your schedule with widgets and notifications that remind you to log your attendance.",
  },
];

export const mtgFeatures: FeatureDetail[] = [
  {
    title: "Talk with the Masters of Wisdom",
    icon: chatbubblesOutline,
    description:
      "Converse with 30 legendary masters, each offering unique perspectives and lessons. Enjoy lifelike AI avatars powered by DID Studios using real-time WebRTC streaming and expressive animations.",
  },
  {
    title: "Dynamic Trivia Quizzes",
    icon: schoolOutline,
    description:
      "Challenge your knowledge through carefully crafted trivia sessions for each master. Earn XP and Wisdom Orbs for every correct answer, track your performance, and master each domain over time.",
  },
  {
    title: "Wisdom Orb Currency System",
    icon: diamondOutline,
    description:
      "Wisdom Orbs serve as your spiritual and virtual currency within MTG. Earn them through gameplay, quests, and achievements—or purchase directly via our integrated RevenueCat payment gateway.",
  },
  {
    title: "XP Progression & Level System",
    icon: flashOutline,
    description:
      "Advance your mastery through a smooth XP leveling system. Unlock new content, achievements, and rewards as your knowledge and engagement grow.",
  },
  {
    title: "Global Leaderboards",
    icon: earthOutline,
    description:
      "Compete with players worldwide across daily, weekly, and all-time leaderboards. Track your position and challenge yourself to rise among the most enlightened players globally.",
  },
  {
    title: "Achievements & Rewards",
    icon: ribbonOutline,
    description:
      "Over 50 beautifully designed achievements to unlock—ranging from quiz mastery to streak milestones. Each achievement rewards XP or Wisdom Orbs, making every action meaningful.",
  },
  {
    title: "Daily, Weekly & Special Quests",
    icon: timeOutline,
    description:
      "Engage with time-bound quests that keep the experience fresh. From streak goals to challenge missions, quests offer bonus XP and orb rewards for consistent participation.",
  },
  {
    title: "Real-time AI Conversations",
    icon: rocketOutline,
    description:
      "Chat seamlessly with AI-driven avatars through WebSocket and streaming chat technology. Experience intelligent, responsive, and natural dialogues in real time.",
  },
  {
    title: "Smooth Authentication Flow",
    icon: personAddOutline,
    description:
      "Sign in using Apple, Google, or email authentication. Your progress, XP, and achievements are securely synced across devices for a seamless cross-platform experience.",
  },
  {
    title: "Achievement & Quest Tracking",
    icon: trophyOutline,
    description:
      "Track all your achievements and quests visually through intuitive progress bars, allowing you to monitor your growth and motivation in real time.",
  },
  {
    title: "In-app Purchases & Subscriptions",
    icon: walletOutline,
    description:
      "Buy Wisdom Orb packs or subscribe to premium membership tiers using RevenueCat for a secure and reliable in-app payment experience.",
  },
  {
    title: "Optimized Performance & Offline Caching",
    icon: cloudDownloadOutline,
    description:
      "Enjoy fast loading times and smooth gameplay. MTG leverages React Query and local caching to keep your experience uninterrupted—even with poor connectivity.",
  },
  {
    title: "Achievements Modal & Unlock Animation",
    icon: starOutline,
    description:
      "Every unlock feels rewarding through custom animations built using Reanimated and Skia, making each milestone visually satisfying and memorable.",
  },
  {
    title: "Polished & Adaptive UI Design",
    icon: colorPaletteOutline,
    description:
      "Crafted with precision using React Native Paper and custom design tokens from Figma. The interface dynamically adapts to devices, themes, and orientations.",
  },
  {
    title: "Progress Security & Data Sync",
    icon: lockClosedOutline,
    description:
      "Your data is encrypted and synced with cloud storage. Progress, XP, and purchases are preserved and recoverable across devices.",
  },
  {
    title: "Gamified Feedback & Effects",
    icon: settingsOutline,
    description:
      "Visualize your growth with interactive XP bars, orb animations, and leaderboard highlights. Each tap and win feels rewarding through subtle haptics and sound feedback.",
  },
];

export const manoyatraFeatures: FeatureDetail[] = [
  {
    title: "Choose Your Mindful Companion",
    icon: personOutline,
    description:
      "Select from 8 AI assistants, 2 therapists, 2 spiritual gurus, and 2 friendly companions. Each has a unique personality to guide your emotional and spiritual journey.",
  },
  {
    title: "Real-time AI Conversations",
    icon: chatbubblesOutline,
    description:
      "Engage in natural, meaningful conversations through real-time WebSocket chat. Your AI companion listens, responds, and helps you reflect with compassion and insight.",
  },
  {
    title: "Voice Chat with AI",
    icon: micOutline,
    description:
      "Speak directly with your AI companion through voice chat. Enjoy fluid, back-and-forth voice conversations that bring a human touch to your daily wellness journey.",
  },
  {
    title: "Daily Mood Check-ins & Streaks",
    icon: timerOutline,
    description:
      "Track your emotional state with daily mood check-ins. Build consistency through streaks that encourage mindfulness and long-term emotional balance.",
  },
  {
    title: "Mental Wellness Score (MWS)",
    icon: pulseOutline,
    description:
      "Your conversations are analyzed using a proprietary algorithm to calculate your MWS — a real-time reflection of your mental and emotional well-being.",
  },
  {
    title: "Clinical Mental Health Tests",
    icon: documentTextOutline,
    description:
      "Take standardized assessments like K10, GAD-7, and PHQ-9 to evaluate your stress, anxiety, and depression levels. Get instant, science-backed reports with MWS integration.",
  },
  {
    title: "Insights Dashboard",
    icon: analyticsOutline,
    description:
      "Explore interactive charts tracking over 20 psychological indices and 6 core emotions. Visualize your emotional trends and growth through data-driven insights.",
  },
  {
    title: "Monthly Insights Report",
    icon: cloudDownloadOutline,
    description:
      "Receive a downloadable monthly report summarizing your emotional health, mental wellness scores, and overall progress—perfect for sharing with professionals or keeping for self-reflection.",
  },
  {
    title: "Emotional Intelligence Analysis",
    icon: barChartOutline,
    description:
      "Manoyatra intelligently detects and categorizes emotional signals in your chats, helping you identify patterns in stress, positivity, and mindfulness.",
  },
  {
    title: "Holistic Guidance from Gurus & Devtas",
    icon: leafOutline,
    description:
      "Connect spiritually through guided conversations with world-famous gurus and divine personas, promoting peace, gratitude, and clarity of mind.",
  },
  {
    title: "Beautiful & Serene UI",
    icon: colorPaletteOutline,
    description:
      "Immerse yourself in a calming design aesthetic inspired by mindfulness and spirituality. Built with React Native for seamless performance on iOS and Android.",
  },
  {
    title: "Progress Tracking & Trends",
    icon: trendingUpOutline,
    description:
      "Track your mental health journey across time. Visualize improvements in mood, resilience, and emotional regulation through evolving trend lines.",
  },
  {
    title: "Private & Secure",
    icon: lockClosedOutline,
    description:
      "Your data and chat history are encrypted and stored securely. Manoyatra ensures complete privacy of your emotional and clinical information.",
  },
  {
    title: "Seamless Authentication",
    icon: logInOutline,
    description:
      "Sign in easily using OTP, Google, or Apple authentication. Sync your data and insights safely across multiple devices.",
  },
  {
    title: "Gamified Emotional Growth",
    icon: starOutline,
    description:
      "Stay motivated through streaks, progress visuals, and subtle gamification that reward consistency in your self-care habits.",
  },
  {
    title: "Guided Mindfulness & Reflection",
    icon: prismOutline,
    description:
      "Each AI assistant encourages guided reflection, journaling, and mindfulness exercises to nurture self-awareness and inner peace.",
  },
  {
    title: "Empathetic AI Understanding",
    icon: heartOutline,
    description:
      "Manoyatra’s AI models are trained to detect tone, emotion, and intent — responding with empathy and contextual understanding in every interaction.",
  },
];

export const infiniteFeatures: FeatureDetail[] = [
  {
    title: "Personalized Health Journey",
    icon: personOutline,
    description:
      "Begin your unique wellness path by answering curated questionnaires designed to tailor insights, recommendations, and expert guidance to your body and lifestyle.",
  },
  {
    title: "Seamless Device Integration",
    icon: fitnessOutline,
    description:
      "Effortlessly connect with Fitbit, Google Fit, Apple Health, or Oura Ring using the Spike SDK. All your health metrics sync automatically and securely into one unified dashboard.",
  },
  {
    title: "Real-time Health Data Visualization",
    icon: barChartOutline,
    description:
      "Monitor your activity, sleep, heart rate, and recovery in real time with beautifully rendered charts and graphs for clear, data-driven understanding.",
  },
  {
    title: "AI-Powered Health Companion",
    icon: chatbubblesOutline,
    description:
      "Talk with your AI-powered health personality that understands your lifestyle patterns, responds intelligently, and answers personalized wellness questions.",
  },
  {
    title: "RAG Model Insights",
    icon: analyticsOutline,
    description:
      "Your health data and responses are analyzed using a Retrieval-Augmented Generation (RAG) model, offering meaningful, context-aware insights and suggestions.",
  },
  {
    title: "Personalized Breathing Exercises",
    icon: leafOutline,
    description:
      "Reduce stress and improve mindfulness with guided breathing routines that adapt dynamically to your heart rate, mood, and energy levels.",
  },
  {
    title: "Comprehensive Metrics Dashboard",
    icon: pulseOutline,
    description:
      "Track everything—from steps and calories to sleep patterns and mood changes—through a unified, visually intuitive dashboard updated in real time.",
  },
  {
    title: "Expert-driven Guidance",
    icon: medkitOutline,
    description:
      "Gain insights from over 30+ health experts across nutrition, sleep, mindfulness, fitness, and holistic healing, personalized to your individual goals.",
  },
  {
    title: "Health Questionnaires & Reports",
    icon: documentTextOutline,
    description:
      "Regular assessments provide structured feedback and actionable reports to help you understand your physical and mental progress.",
  },
  {
    title: "Mind-Body Personality System",
    icon: bodyOutline,
    description:
      "Discover your unique health personality type based on AI interpretation of your responses and daily data, guiding you toward better self-awareness.",
  },
  {
    title: "Downloadable Wellness Reports",
    icon: cloudDownloadOutline,
    description:
      "Get monthly or weekly PDF reports summarizing your metrics, trends, and AI insights—perfect for tracking your transformation or sharing with health coaches.",
  },
  {
    title: "Holistic Wellness Approach",
    icon: heartOutline,
    description:
      "Experience a balance of mental, physical, and emotional guidance. I Am Infinite integrates both data science and mindfulness principles for total well-being.",
  },
  {
    title: "Custom Notifications & Insights",
    icon: settingsOutline,
    description:
      "Receive gentle reminders, health tips, and actionable insights to stay consistent in your wellness journey, aligned with your progress and lifestyle rhythm.",
  },
  {
    title: "Gamified Progress & Rewards",
    icon: starOutline,
    description:
      "Stay motivated with milestones, badges, and achievements that celebrate your commitment to healthier living and self-improvement.",
  },
  {
    title: "Secure Login & Data Sync",
    icon: logInOutline,
    description:
      "Sign in easily via email and sync all your wellness data securely across devices through encrypted, cloud-backed storage.",
  },
  {
    title: "Privacy & Security Focused",
    icon: lockClosedOutline,
    description:
      "Your personal health data is protected through end-to-end encryption, ensuring full confidentiality and user-controlled data sharing.",
  },
];
