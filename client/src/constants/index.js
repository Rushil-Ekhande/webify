import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "contact-us",
      url: "/contact",
    },
    {
      id: "1",
      title: "sign-in",
      url: "/sign-in",
    }
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Discovery: Understand Your Needs",
      text: "We start by understanding your business goals, target audience, and unique requirements to tailor a personalized solution that meets your needs.",
      date: "Day 1",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Design & Development: Craft Your Digital Identity",
      text: "Our expert team designs and develops a custom website that reflects your brand identity, engages your audience, and drives results.",
      date: "Day 3",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Deployment: Launch Your Online Presence",
      text: "Once the website is finalized, we deploy it on the web, ensuring seamless integration and optimal performance across devices and platforms.",
      date: "Day 10",
      status: "done",
      imageUrl: roadmap4,
    },
    {
      id: "3",
      title: "Support & Growth: Partnering for Ongoing Success",
      text: "We provide ongoing support, maintenance, and guidance to ensure your website stays secure, up-to-date, and aligned with your evolving business goals, helping you achieve sustained growth online.",
      date: "Till Subscription",
      status: "progress",
      imageUrl: roadmap3,
    },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "Ideal for startups and small businesses looking to establish their online presence quickly and affordably.",
      price: "199",
      maintenance: "One-time setup fee, $19/month for maintenance and support.",
      color: "color-1",
      features: [
        "Customized Website Design: Tailored site reflecting your brand.",
        "Social Media Integration: Seamlessly connect to your platforms.",
        "Mobile Responsiveness: Ensures smooth browsing on all devices.",
        "Basic SEO Optimization: Enhance visibility on search engines.",
        "Easy Content Management: Simple updates without tech skills.",
        "Standard Support: Reliable assistance whenever needed.",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Perfect for growing businesses seeking enhanced features and support for their online presence.",
      price: "299",
      maintenance: "One-time setup fee, $39/month for maintenance and support.",
      color: "color-2",
      features: [
        "Everything in the Basic Package: Basic features plus advanced upgrades.",
        "Advanced SEO Optimization: Boost visibility with advanced search engine strategies.",
        "E-commerce Integration: Expand your reach and sell products online seamlessly.",
        "Enhanced Security Features: Fortify your website against cyber threats.",
        "Priority Support: Get expedited assistance for urgent queries.",
        "Monthly Performance Reports: Track progress and refine strategies with regular updates.",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Tailored solutions for established businesses with specific needs and goals.",
      price: "499",
      maintenance: "One-time setup fee and $79/month for maintenance and support.",
      color: "color-3",
      features: [
        "Custom pricing based on specific requirements and features",
        "Everything in the Premium Package",
        "Dedicated Account Manager",
        "Customizable Support and Maintenance Plans",
        "Scalable Infrastructure to Accommodate Growth",
        "Tailored Marketing Strategies and Consultation",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Customized Website Design",
      text: "Our expert team tailors every website to suit your unique business needs, ensuring a professional online presence that reflects your brand identity and engages your target audience effectively.",
      backgroundUrl: "src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Social Media Integration",
      text: "Seamlessly integrate your website with popular social media platforms to expand your reach, increase brand visibility, and drive traffic to your online store, all while maintaining a cohesive brand image across platforms.",
      backgroundUrl: "src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Mobile Responsiveness",
      text: "With Webify, your website is optimized for mobile devices, providing a seamless browsing experience for customers on smartphones and tablets, allowing you to capture potential leads and sales regardless of the device they use.",
      backgroundUrl: "src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Search Engine Optimization (SEO)",
      text: "Our SEO strategies ensure that your website ranks higher in search engine results, making it easier for potential customers to find your business online. From keyword optimization to meta tags, we've got you covered.",
      backgroundUrl: "src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Easy Content Management",
      text: "Take control of your website with our user-friendly content management system (CMS). Update product listings, publish blog posts, and make changes to your website content effortlessly, without the need for technical expertise.",
      backgroundUrl: "src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Ongoing Support and Maintenance",
      text: "With Webify, you're never alone. Our dedicated support team is here to assist you every step of the way, from initial setup to ongoing maintenance and updates, ensuring that your website remains secure, functional, and up-to-date at all times.",
      backgroundUrl: "src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
    },
  ];

  export const otpindex = [{
    index: 6,
  }];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/ibrahimkazi__?igsh=MXR4azNmYzYxNjRxNg==",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];