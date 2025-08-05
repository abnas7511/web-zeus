export interface Robot {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  applications: string[];
  benefits: string[];
  specifications: {
    [key: string]: string;
  };
}

export const robots: Robot[] = [
  {
    id: '1',
    name: 'ZERA',
    slug: 'zera',
    image: '/zzr1.png',
    shortDescription: 'Advanced autonomous hospital logistics robot with AI-powered navigation and dual cabin storage system.',
    fullDescription: 'The ZERA represents the pinnacle of hospital automation technology. Designed specifically for healthcare environments, it combines cutting-edge AI vision systems with precise robotic manipulation to revolutionize medical logistics.',
    features: [
      'AI Vision System',
      'Robotic Arm Manipulation',
      '3D LiDAR Navigation',
      'Smart Docking Station',
      'Dual Cabin Storage'
    ],
    applications: [
      'Medicine Delivery',
      'Laboratory Sample Transport',
      'Equipment Distribution',
      'Document & Record Transfer',
      'Linen Transportation'
    ],
    benefits: [
      'Reduces human exposure to contaminated materials',
      'Increases operational efficiency by 60%',
      'Operates 24/7 without breaks',
      'Integrates seamlessly with hospital systems',
      'Reduces medication errors by 95%',
      'Reduce Annual HAI cost due to manual handling'
    ],
    specifications: {
      'Robotic Arm': 'AI Vision',
      'Drive System': 'Omini Directional',
      'Zeus App': 'User-Friendly',
      'Battery Life': '12+ hours',
      'Navigation': '3D LiDAR + AI Vision',
      'Connectivity': 'Wi-Fi 6, Bluetooth 5.0'
    }
  }
];

export const teamMembers = [
  {
    id: '1',
    name: 'Vivek Thankachan',
    title: 'Co-Founder, CEO & Director of Engineering',
    image: '/vivek.webp',
    bio: 'Vivek is a serial entrepreneur and robotics engineer with a strong foundation in autonomy and intelligent systems. Before founding Zeus Robotics, he successfully led multiple startups in India. As the CEO & Director of Engineering, he drives product vision, strategic growth, and next-gen robotics development. He brings a unique blend of technical depth and entrepreneurial instinct, positioning Zeus at the forefront of reliable and intelligent robotics solutions. He is also a recipient of a prestigious research fellowship recognizing innovation in EV charging systems.'
  },
  {
    id: '2',
    name: 'Amal Ashok',
    title: 'Co-Founder & CPO',
    image: '/amal.webp',
    bio: "Amal is a design engineer focused on building intuitive, efficient, and field-ready robotic systems. At Zeus, he shapes the product experience from concept to deployment, balancing functionality, performance, and usability. With experience in both core engineering and product design, and a strong startup foundation in India, Amal ensures Zeus's solutions are as elegant as they are effective. He is also a research fellow recognized for innovations in EV charging technology."
  },
  {
    id: '3',
    name: 'Anandhu Suresh',
    title: 'Co-Founder & CTO',
    image: '/ananthu.webp',
    bio: 'Anandhu is a systems integration specialist with hands-on expertise in building robust, scalable robotics platforms. As CTO, he leads Zeus’s technical architecture, ensuring seamless hardware-software integration across mission-critical applications. With a background in robotics R&D and startup leadership in India, Anandhu brings deep technical rigor and innovation to every stage of development. He is also a recipient of a prestigious research fellowship award for groundbreaking work in EV Charging Systems.'
  },
  {
    id: '4',
    name: 'Kamalanathan Narayana Bharathy',
    title: 'Head of Perception',
    image: '/kala.webp',
    bio: 'Kamalanathan leads the development of perception systems at Zeus Robotics, specializing in computer vision, sensor fusion, and real-time autonomy. With a strong background in robotics and prior startup leadership in India, he brings both technical depth and entrepreneurial agility to the team. At Zeus, he focuses on machine learning and AI algorithms to enhance the robot’s ability to understand and adapt to complex environments. His work is critical to enabling reliable and safe autonomous navigation across all of our robotic platforms.'
  },
  {
    id: '5',
    name: 'Maximillian Gruber',
    title: 'Product Design Engineer',
    image: '/max.jpg',
    bio: 'Maximillian leads the industrial and mechanical design of our hospital delivery robot, bringing expertise in functional prototyping, CAD modeling, and human-centered design. He works closely with our engineering team to ensure the robot is practical, efficient, and optimized for real-world hospital environments.'
  },
  {
    id: '6',
    name: 'Akshaya',
    title: 'Financial Analyst',
    image: '/akshaya.jpeg',
    bio: 'Akshya supports Zeus Robotics with financial planning, cost modeling, and investment analysis. With a background in commerce and finance, she helps structure our fundraising strategy, manage budgeting for product development, and ensure financial sustainability as we scale.'
  },{
    id: '7',
    name: 'Muhammed Abnas',
    title: 'Software & Web Engineer',
    image: '/abnas.jpg',
    bio: 'Muhammed is a software engineer with a strong focus on web development and robotics. He has extensive experience in building web applications and has a deep understanding of robotics systems. As a software engineer at Zeus, he contributes to the development of our web-based user interfaces, ensuring seamless integration with our robotic systems.'
  }
];