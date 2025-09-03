import designIco from "..//assets/images/icon-design.svg";
import webDevIco from "../assets/images/icon-dev.svg";
import mobIco from "../assets/images/icon-app.svg";
import serverIco from "../assets/images/server-outline.svg";

import des1 from "../assets/images/Designs/PlantAppUI.png";
import des2 from "../assets/images/Designs/Slavy.png";
import des3 from "../assets/images/Designs/IconSet.jpg";

import {
  laptopOutline,
  phonePortraitOutline,
  shapesOutline,
  sparklesOutline,
  mailOutline,
  calendarOutline,
  locationOutline,
  mail,
  logoGithub,
  logoLinkedin,
  logoGooglePlaystore,
} from "ionicons/icons";

import {
  memoImgs,
  compImgs,
  ecoImgs,
  attenImgs,
  wthrImgs,
  miscellaImgs,
} from "./ImportImg";

import {
  type FeatureDetail,
  attendexFeatures,
  companFeatures,
  ecosorterFeatures,
  memoFeatures,
  otherFeatures,
  weatherooFeatures,
} from "./FeatsAndInfo";

export const CoverNLogo = (
  ImgArr: Array<string>,
  orderType: "logo" | "Cover" | "gall"
) => {
  if (orderType === "Cover" || orderType === "logo")
    return ImgArr.filter((str) => str.includes(orderType))[0];
  else if (orderType === "gall") {
    const coverItem = ImgArr.find((item) => item.includes("Cover"));
    const sortedItems = ImgArr.filter(
      (item: string) => !item.includes("logo") && item !== coverItem
    ).sort();
    if (coverItem) {
      sortedItems.unshift(coverItem);
    }
    return sortedItems;
  } else {
    throw new Error(
      "Invalid orderType provided. Expected 'logo', 'Cover', or 'gall'."
    );
  }
};

type NavItems = {
  path: string;
  label: string;
};

type sideBar1 = {
  icon: string;
  title?: string;
  link?: string;
  text?: string;
};

export type Skill = {
  name: string;
  icon?: string; // icon is optional
  svgURL?: string; // svgURL is optional
};

type EduSKill = {
  title: string;
  date: string;
  description: string;
};

type CareerSkill = {
  title: string;
  date: string;
  description: string;
};

type serviceOBJ = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

type filterChips = {
  title: string;
  icon: string;
};
type AddInfo = {
  catName: string;
  desc: string;
  icon: string;
};

type projectTypes = {
  name: string;
  url: string;
  coverImg: string | string[];
  logo?: string | string[];
  imgAlt: string;
  category: string;
  gallery?: Array<string> | string;
  gitURL?: string;
  downloadURL?: string;
  description?: string;
  features?: FeatureDetail[];
  addInfo?: Array<AddInfo>;
};

export const navItems: NavItems[] = [
  { path: "/", label: "About" },
  { path: "/Resume", label: "Resume" },
  { path: "/Portfolio", label: "Portfolio" },
  { path: "/Contact", label: "Contact" },
];

export const sidebarTopItems: sideBar1[] = [
  {
    icon: mailOutline,
    title: "Email",
    link: "mailto:karticjoshi68@gmail.com",
    text: "karticjoshi68@gmail.com",
  },
  {
    icon: phonePortraitOutline,
    title: "Phone",
    link: "tel:+918826230733",
    text: "+918826230733",
  },
  {
    icon: calendarOutline,
    title: "Age",
    text: "23",
  },
  {
    icon: locationOutline,
    title: "Location",
    text: "Delhi, India",
  },
];

export const sideBar2: sideBar1[] = [
  {
    link: "mailto:karticjoshi68@gmail.com",
    icon: mail,
  },
  {
    link: "https://github.com/Megahedron69",
    icon: logoGithub,
  },
  {
    link: "https://www.linkedin.com/in/kartic-joshi-a4558a137/",
    icon: logoLinkedin,
  },
  {
    link: "https://play.google.com/store/apps/details?id=com.kartodevs.ecosorter",
    icon: logoGooglePlaystore,
  },
];

export const serviceObj: serviceOBJ[] = [
  {
    src: designIco,
    alt: "design icon",
    title: "Web Design",
    text: "The most modern and high-quality design made at a professional level.",
  },
  {
    src: webDevIco,
    alt: "Web development icon",
    title: "Web Development",
    text: " High-quality development of sites at the professional level.",
  },
  {
    src: mobIco,
    alt: "mobile app icon",
    title: "App Development",
    text: "Professional development of applications for iOS and Android.",
  },
  {
    src: serverIco,
    alt: "server icon",
    title: "Backend Development",
    text: "Development of secure, scalable and robust backend services.",
  },
];

export const skillTree: Skill[] = [
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
  },
  {
    name: "C",
    icon: "devicon-c-plain-wordmark",
  },
  {
    name: "C++",
    icon: "devicon-cplusplus-plain",
  },
  {
    name: "React JS",
    icon: "devicon-react-original-wordmark",
  },
  {
    name: "React Native",
    icon: "devicon-react-original",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
  },
  {
    name: "Python",
    icon: "devicon-python-plain-wordmark",
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain-wordmark",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain-wordmark",
  },
  {
    name: "NodeJs",
    icon: "devicon-nodejs-plain-wordmark",
  },
  {
    name: "bash",
    icon: "devicon-bash-plain",
  },
  {
    name: "git",
    icon: "devicon-git-plain-wordmark",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain-wordmark",
  },
  {
    name: "SQL",
    icon: "devicon-mysql-plain-wordmark",
  },
  {
    name: "Postgres SQL",
    icon: "devicon-postgresql-plain-wordmark",
  },
  {
    name: "Firebase CloudStore",
    icon: "devicon-firebase-line",
  },
  {
    name: "Mongo Atlas",
    icon: "devicon-mongoose-original",
  },
  {
    name: "Github",
    icon: "devicon-github-original-wordmark",
  },
  {
    name: "VsCode",
    icon: "devicon-vscode-plain-wordmark",
  },
  {
    name: "MongoCompass",
    icon: "devicon-mongodb-plain",
  },
  {
    name: "Expo",
    icon: "",
    svgURL:
      "https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png",
  },
  {
    name: "linux",
    icon: "devicon-linux-plain",
  },
  {
    name: "docker",
    icon: "devicon-docker-plain-wordmark",
  },
  {
    name: "kubernetes",
    icon: "devicon-kubernetes-plain-wordmark",
  },
  {
    name: "netlify",
    icon: "devicon-netlify-plain-wordmark",
  },
  {
    name: "google cloud",
    icon: "devicon-googlecloud-plain-wordmark",
  },
  {
    name: "Cloudflare",
    icon: "devicon-cloudflare-plain-wordmark",
  },
  {
    name: "play console",
    icon: "",
    svgURL: "https://i.imgur.com/BJoddjS.png",
  },
  {
    name: "Express",
    icon: "devicon-express-original-wordmark",
  },
  {
    name: "puppeteer web scraping",
    icon: "devicon-puppeteer-plain",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain-wordmark",
  },
  {
    name: "SCSS",
    icon: "devicon-sass-original",
  },
  {
    name: "Zustand",
    icon: "",
    svgURL:
      "https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/logo192.png",
  },
  {
    name: "Nginx",
    icon: "devicon-nginx-original",
  },
];

export const EduTimeLine: EduSKill[] = [
  {
    title: "Secondary School",
    date: "Mar 2017- Apr 2018",
    description:
      "Completed secondary in Arwachin International School scoring 95 percent under CBSE board",
  },
  {
    title: "Senior Secondary School",
    date: "Mar 2019- Apr 2020",
    description:
      "Completed senior secondary in Arwachin International School scoring 88.83 percent under CBSE board",
  },
  {
    title: "Graduation",
    date: "Sep 2020- Jun 2024",
    description:
      "Completed graduation in B.Tech (IT) in Guru Gobind Singh University scoring 92 percent",
  },
];

export const CareerTimeline: CareerSkill[] = [
  {
    title: "Tathastu - Scholar intern",
    date: "Jan 2022- Mar 2022",
    description:
      "Created a responsive react web app for client according to their specified requirements",
  },
  {
    title: "Acowale - Junior web developer Intern",
    date: "Aug 2022- Jan 2023",
    description:
      "Developed an advanced authentication system for a new product, which included integrating Oauth along with a custom MFA OTP-based system. Through collaboration with international teams, played a key role in developing and launching a web application using Modern frontend and backend frameworks, where I optimized the codebase and created custom services to enhance performance. Additionally, I worked closely with the CEO, contributing innovative ideas that significantly influenced the app's development.",
  },
  {
    title: "VDOIT - React Native Developer",
    date: "Oct 2024 - Present",
    description: "Worked on more than 5 cross-platform applications with two of them deployed on both android and ios stores with inhand experience of setting up and working with technologies like webRTC, websockets, notifications, payment gateways etc",
  },
];

export const filterObj: filterChips[] = [
  {
    title: "All",
    icon: sparklesOutline,
  },
  {
    title: "Web Design",
    icon: shapesOutline,
  },
  {
    title: "Web Development",
    icon: laptopOutline,
  },
  {
    title: "App Development",
    icon: phonePortraitOutline,
  },
];

export const projectPallete: projectTypes[] = [
  {
    name: "Attendex",
    url: "/Portfolio/Attendex",
    coverImg: CoverNLogo(attenImgs, "Cover"),
    logo: CoverNLogo(attenImgs, "logo"),
    imgAlt: "Attendex",
    category: "Web Development",
    gallery: CoverNLogo(attenImgs, "gall"),
    gitURL: "https://github.com/Megahedron69/Attendex",
    downloadURL: "www.attendex.shop",
    description:
      "Effortlessly track, manage, and analyze attendance with our sleek, intuitive app. Say goodbye to manual checks and hello to real-time insights and automated reports. Transform the way you handle attendance with Attendex—where simplicity meets innovation!",
    features: attendexFeatures,
  },
  {
    name: "Memories",
    url: "/Portfolio/Memories",
    coverImg: CoverNLogo(memoImgs, "Cover"),
    logo: CoverNLogo(memoImgs, "logo"),
    imgAlt: "Memories",
    category: "Web Development",
    gallery: CoverNLogo(memoImgs, "gall"),
    gitURL: "https://github.com/Megahedron69/Memories",
    downloadURL: "",
    description:
      "Memories is a dynamic web app that lets you share and cherish your favorite photos. Engage with your memories by commenting on images and connecting with others through your visual stories.",
    features: memoFeatures,
  },
  {
    name: "Others",
    url: "/Portfolio/Others",
    coverImg: CoverNLogo(miscellaImgs, "Cover"),
    logo: CoverNLogo(miscellaImgs, "logo"),
    imgAlt: "miscellaneous",
    category: "Web Development",
    gallery: CoverNLogo(miscellaImgs, "gall"),
    description: "Interesting but small projects created by me",
    features: otherFeatures,
  },
  {
    name: "Ecosorter",
    url: "/Portfolio/Ecosorter",
    coverImg: CoverNLogo(ecoImgs, "Cover"),
    logo: CoverNLogo(ecoImgs, "logo"),
    imgAlt: "Ecosorter",
    category: "App Development",
    gallery: CoverNLogo(ecoImgs, "gall"),
    description:
      "Ecosorter is an intuitive waste management app that uses AI to help you easily identify and categorize waste into eight types. With a sleek design, fluid animations, and personalized light and dark themes, it not only simplifies waste sorting but also engages users with educational content, leaderboards, and push notifications for an interactive experience.",
    gitURL: "https://github.com/Megahedron69/EcoSorter",
    downloadURL:
      "https://github.com/Megahedron69/EcoSorter/releases/download/v1.5.0/Ecosorter1.5.0.apk",
    features: ecosorterFeatures,
  },
  {
    name: "Weatheroo",
    url: "/Portfolio/Weatheroo",
    coverImg: CoverNLogo(wthrImgs, "Cover"),
    logo: CoverNLogo(wthrImgs, "logo"),
    imgAlt: "Weather App",
    category: "App Development",
    gallery: CoverNLogo(wthrImgs, "gall"),
    gitURL: "https://github.com/Megahedron69/WeatherWise",
    description:
      "Weatheroo is a sleek and responsive weather app that provides real-time updates with a beautifully designed interface. Get accurate local weather based on your location or search for any city worldwide, all while enjoying a smooth, optimized experience powered by cutting-edge technology.",
    downloadURL:
      "https://github.com/Megahedron69/WeatherWise/releases/download/v1.0.0/application-51a87499-6144-4385-9091-458a52468d9c.apk",
    features: weatherooFeatures,
  },
  {
    name: "Attendex-Companion",
    url: "/Portfolio/Attendexcompanion",
    coverImg: CoverNLogo(compImgs, "Cover"),
    logo: CoverNLogo(compImgs, "logo"),
    imgAlt: "Companion App",
    category: "App Development",
    gallery: CoverNLogo(compImgs, "gall"),
    gitURL:
      "https://github.com/Megahedron69/Attendex/tree/master/client/attendex-companion",
    downloadURL: "",
    description:
      "Attendex Companion is a powerful mobile app designed to streamline attendance tracking on both Android and iOS. Using advanced technologies like NFC, geofencing, biometric passkeys, and dynamic QR codes, it offers a seamless and secure way for users to log attendance with ease.",
    features: companFeatures,
  },
  {
    name: "Plant Scan Design",
    url: "",
    coverImg: des1,
    imgAlt: "Figma Design",
    category: "Web Design",
  },
  {
    name: "Slavy Dashboard Design",
    url: "",
    coverImg: des2,
    imgAlt: "Dashboard Figma",
    category: "Web Design",
  },
  {
    name: "Icon Set",
    url: "",
    coverImg: des3,
    imgAlt: "Dashboard Figma",
    category: "Web Design",
  },
];
