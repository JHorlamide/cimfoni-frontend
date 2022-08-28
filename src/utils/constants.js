import ArrowSVG from "../assets/icons/arrow";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";

export const navigation = [
  {
    id: 1,
    path: "/",
    title: "Home",
  },
  {
    id: 2,
    path: "/services",
    title: "Services",
  },
  {
    id: 3,
    path: "/courses",
    title: "Courses",
  },
  {
    id: 4,
    path: "/facilitator",
    title: "Become a facilitator",
  },
  {
    id: 5,
    path: "/about",
    title: "About Us",
  },
  {
    id: 6,
    path: "/gallery",
    title: "Gallery",
  },
];

export const footerNav = {
  explore: [
    {
      id: 1,
      path: "/home",
      title: "Home",
      icon: ArrowSVG,
    },
    {
      id: 2,
      path: "/about",
      title: "About Us",
      icon: ArrowSVG,
    },
    {
      id: 3,
      path: "/resources",
      title: "Resources",
      icon: ArrowSVG,
    },
    {
      id: 4,
      path: "/community",
      title: "Community",
      icon: ArrowSVG,
    },
    {
      id: 5,
      path: "/community",
      title: "Community",
      icon: ArrowSVG,
    },
    {
      id: 6,
      path: "/glossary",
      title: "Glossary",
      icon: ArrowSVG,
    },
    {
      id: 7,
      path: "/news",
      title: "News",
      icon: ArrowSVG,
    },
  ],

  learn: [
    {
      id: 1,
      path: "/software-development",
      title: "Software Development",
      icon: ArrowSVG,
    },
    {
      id: 2,
      path: "/graphics-design",
      title: "Graphics Design",
      icon: ArrowSVG,
    },
    {
      id: 3,
      path: "/media-broadcasting",
      title: "Media Broadcasting",
      icon: ArrowSVG,
    },
  ],

  legal: [
    {
      id: 1,
      path: "/privacy-policy",
      title: "Privacy & Cookies",
      icon: ArrowSVG,
    },
    {
      id: 2,
      path: "/terms-condition",
      title: "Terms & Conditions",
      icon: ArrowSVG,
    },
    {
      id: 3,
      path: "/legal-disclaimer",
      title: "Legal Disclaimer",
      icon: ArrowSVG,
    },
  ]
};

export const footerSocials = [
  {
    id:1,
    url: 'https://facebook.com/username',
    title: "Facebook",
    image: facebookIcon
  },
  {
    id: 2,
    url: 'https://instagram.com/username',
    title: "Instagram",
    image: instagramIcon
  },
  {
    id: 3,
    url: 'https://twitter.com/username',
    title: "Twitter",
    image: twitterIcon
  },
  {
    id: 4,
    url: 'https://linkedin.com/username',
    title: "LinkedIn",
    image: linkedinIcon
  },
]

export const ratings = [
  {
    id: 1,
    rating: 4.5,
  },
];
