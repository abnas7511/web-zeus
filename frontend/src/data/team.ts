export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    title: "CEO & Co-founder",
    image: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Former Head of Innovation at Boston Dynamics, PhD in Robotics from MIT. 15+ years experience in autonomous systems.",
    linkedin: "#"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "CTO & Co-founder",
    image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Former Principal Engineer at Tesla Autopilot, MS in Computer Science from Stanford. Expert in AI and machine learning.",
    linkedin: "#"
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    title: "Head of Healthcare Innovation",
    image: "https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Former Director of Digital Health at Mayo Clinic, MD from Harvard Medical School. 20+ years in healthcare operations.",
    linkedin: "#"
  },
  {
    id: "4",
    name: "James Liu",
    title: "VP of Engineering",
    image: "https://images.pexels.com/photos/3760068/pexels-photo-3760068.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Former Senior Robotics Engineer at Amazon Robotics, MS in Mechanical Engineering from Carnegie Mellon.",
    linkedin: "#"
  }
];