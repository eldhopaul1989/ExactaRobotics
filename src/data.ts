export const IMAGES = {
  heroArm: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm18ZW58MHx8fHwxNzg1NjUyNDkzfDA&ixlib=rb-4.1.0&q=85",
  drone: "https://images.unsplash.com/photo-1566228015670-755ffbf3d4a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxkcm9uZSUyMGNsb3NlJTIwdXB8ZW58MHx8fHwxNzg1NjUyNDkzfDA&ixlib=rb-4.1.0&q=85",
  droneController: "https://images.unsplash.com/photo-1633837250963-79a20be38052?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNsb3NlJTIwdXB8ZW58MHx8fHwxNzg1NjUyNDkzfDA&ixlib=rb-4.1.0&q=85",
  circuit: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxibHVlJTIwY2lyY3VpdCUyMGJvYXJkfGVufDB8fHx8MTc4NTY1MjUwM3ww&ixlib=rb-4.1.0&q=85"
};

export const U = (id: string, w = 800) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=85&w=${w}`;

export const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "News", id: "news" },
  { label: "Projects", id: "projects" },
  { label: "Members", id: "members" },
  { label: "Events", id: "events" },
  { label: "Gallery", id: "gallery" },
  { label: "Resources", id: "resources" },
  { label: "Contact", id: "contact" }
];

export const MANIFESTO = [
  {
    no: "01",
    title: "Vision",
    text: "To be a nationally recognised student robotics hub that empowers engineers to design intelligent, autonomous systems shaping the Industry 4.0 era."
  },
  {
    no: "02",
    title: "Mission",
    text: "Build hands-on expertise across robotics, AI and automation through projects, competitions and industry collaboration — turning curiosity into deployable engineering."
  },
  {
    no: "03",
    title: "Objectives",
    text: "Foster interdisciplinary innovation, host workshops and hackathons, mentor juniors, publish research and connect students with real manufacturing challenges."
  }
];

export const WHY_JOIN = [
  "Access to a fully equipped Robotics & Automation Lab",
  "Mentorship from faculty and senior project leads",
  "Compete in national & international robotics events",
  "Industry visits and internship pipelines",
  "Publish papers and build a strong technical portfolio"
];

export const FACILITIES = [
  "6-Axis Industrial Robot Arm",
  "ROS2 Simulation Cluster",
  "Drone & UAV Fabrication Bay",
  "PCB & Embedded Systems Bench",
  "3D Printing & Rapid Prototyping",
  "Computer Vision GPU Workstation"
];

export const FACULTY = [
  {
    name: "Dr. Rajesh Menon",
    role: "Faculty Advisor · HOD Mechanical",
    img: U("photo-1560250097-0b93528c311a")
  },
  {
    name: "Dr. Anita Thomas",
    role: "Co-Advisor · Robotics & Control",
    img: U("photo-1573496359142-b8d87734a5a2")
  }
];

export const NEWS = [
  {
    tag: "Workshop",
    date: "12 NOV 2025",
    title: "ROS2 Humble Bootcamp",
    summary: "Three-day intensive on navigation stacks, SLAM and Nav2 with live TurtleBot demos.",
    img: IMAGES.circuit
  },
  {
    tag: "Competition",
    date: "28 OCT 2025",
    title: "e-Yantra National Finals",
    summary: "Team MARC secured a top-5 finish at IIT Bombay's flagship robotics championship.",
    img: IMAGES.heroArm
  },
  {
    tag: "Industrial Visit",
    date: "09 OCT 2025",
    title: "Bosch Automation Plant",
    summary: "Members toured a live Industry 4.0 line featuring collaborative robots and IIoT.",
    img: IMAGES.drone
  },
  {
    tag: "Hackathon",
    date: "21 SEP 2025",
    title: "AutomateX 24hr Sprint",
    summary: "Overnight build-a-thon producing 11 automation prototypes across 3 problem tracks.",
    img: IMAGES.circuit
  },
  {
    tag: "Guest Lecture",
    date: "05 SEP 2025",
    title: "Autonomy in Agri-Robotics",
    summary: "Industry expert on deploying computer vision for precision farming at scale.",
    img: IMAGES.droneController
  },
  {
    tag: "Achievement",
    date: "18 AUG 2025",
    title: "Two Papers Accepted",
    summary: "Research on adaptive grasping accepted at an IEEE robotics conference.",
    img: IMAGES.heroArm
  }
];

export const PROJECTS = [
  {
    title: "Autonomous Warehouse Rover",
    status: "Ongoing",
    desc: "A ROS2-driven mobile robot performing SLAM-based navigation and pick-and-place in cluttered warehouse mockups.",
    team: ["Arjun P.", "Nithya R.", "Kevin J.", "+3"],
    mentor: "Dr. Anita Thomas",
    tech: ["ROS2", "LiDAR", "Nav2", "Python"],
    due: "MAY 2026",
    img: IMAGES.heroArm,
    big: true
  },
  {
    title: "Vision-Guided Cobot Arm",
    status: "Ongoing",
    desc: "6-DOF arm using deep-learning object detection for adaptive sorting.",
    team: ["Meera S.", "Alan V.", "+2"],
    mentor: "Dr. Rajesh Menon",
    tech: ["OpenCV", "YOLOv8", "PLC"],
    due: "MAR 2026",
    img: IMAGES.circuit,
    big: false
  },
  {
    title: "Surveillance Drone Swarm",
    status: "Planning",
    desc: "Coordinated multi-UAV mapping with real-time telemetry fusion.",
    team: ["Rahul K.", "Sneha M.", "+4"],
    mentor: "Dr. Anita Thomas",
    tech: ["PX4", "MAVLink", "IoT"],
    due: "AUG 2026",
    img: IMAGES.drone,
    big: false
  },
  {
    title: "Smart Factory Digital Twin",
    status: "Completed",
    desc: "IoT-instrumented mini production line with a live 3D digital twin dashboard.",
    team: ["Tom G.", "Aisha N.", "+2"],
    mentor: "Dr. Rajesh Menon",
    tech: ["IIoT", "MQTT", "Unity"],
    due: "DONE 2025",
    img: IMAGES.droneController,
    big: false
  }
];

export const CATEGORIES = [
  "Industrial Robotics",
  "Mobile Robotics",
  "ROS2",
  "Computer Vision",
  "AI & Machine Learning",
  "Drones",
  "IoT",
  "Embedded Systems",
  "PLC & Automation",
  "3D Printing",
  "Smart Manufacturing",
  "Digital Twins"
];

export const MEMBER_GROUPS = [
  {
    group: "Faculty Coordinators",
    members: [
      {
        name: "Dr. Rajesh Menon",
        pos: "Faculty Advisor",
        dept: "Mechanical",
        skills: ["Automation", "Control"],
        img: U("photo-1560250097-0b93528c311a")
      },
      {
        name: "Dr. Anita Thomas",
        pos: "Co-Advisor",
        dept: "Mechanical",
        skills: ["Robotics", "AI"],
        img: U("photo-1573496359142-b8d87734a5a2")
      }
    ]
  },
  {
    group: "Student Executive Committee",
    members: [
      {
        name: "Arjun Prakash",
        pos: "Club Lead",
        dept: "Mechanical",
        skills: ["ROS2", "SLAM"],
        img: U("photo-1500648767791-00dcc994a43e")
      },
      {
        name: "Meera Susan",
        pos: "Vice Lead",
        dept: "ECE",
        skills: ["Vision", "ML"],
        img: U("photo-1494790108377-be9c29b29330")
      },
      {
        name: "Kevin Joseph",
        pos: "Secretary",
        dept: "CSE",
        skills: ["Embedded", "IoT"],
        img: U("photo-1507003211169-0a1dd7228f2d")
      },
      {
        name: "Nithya Rajan",
        pos: "Treasurer",
        dept: "EEE",
        skills: ["PLC", "Drives"],
        img: U("photo-1438761681033-6461ffad8d80")
      }
    ]
  },
  {
    group: "Project Leads & Core Members",
    members: [
      {
        name: "Alan Varghese",
        pos: "Vision Lead",
        dept: "ECE",
        skills: ["YOLO", "C++"],
        img: U("photo-1519085360753-af0119f7cbe7")
      },
      {
        name: "Sneha Mathew",
        pos: "Drone Lead",
        dept: "AE",
        skills: ["PX4", "GNC"],
        img: U("photo-1534528741775-53994a69daeb")
      },
      {
        name: "Rahul Krishna",
        pos: "IoT Lead",
        dept: "CSE",
        skills: ["MQTT", "Edge"],
        img: U("photo-1506794778202-cad84cf45f1d")
      },
      {
        name: "Aisha Nair",
        pos: "Core Member",
        dept: "Mechanical",
        skills: ["CAD", "3D Print"],
        img: U("photo-1531123897727-8f129e1688ce")
      }
    ]
  }
];

export const EVENTS = [
  {
    when: "20 DEC 2025",
    type: "Upcoming",
    title: "MARC Open Robotics Expo",
    place: "Robotics Lab, MACE",
    reg: true
  },
  {
    when: "14 JAN 2026",
    type: "Upcoming",
    title: "Line Follower Championship",
    place: "Main Auditorium",
    reg: true
  },
  {
    when: "02 NOV 2025",
    type: "Previous",
    title: "Embedded Systems Workshop",
    place: "ECE Seminar Hall",
    reg: false
  },
  {
    when: "18 SEP 2025",
    type: "Previous",
    title: "AI for Robotics Talk",
    place: "Innovation Centre",
    reg: false
  }
];

export const GALLERY = [
  { cat: "Workshops", img: IMAGES.circuit, h: "tall" },
  { cat: "Competitions", img: IMAGES.heroArm, h: "short" },
  { cat: "Projects", img: IMAGES.drone, h: "short" },
  { cat: "Lab Activities", img: IMAGES.droneController, h: "tall" },
  { cat: "Competitions", img: IMAGES.heroArm, h: "short" },
  { cat: "Projects", img: IMAGES.circuit, h: "tall" },
  { cat: "Outreach", img: IMAGES.drone, h: "short" },
  { cat: "Workshops", img: IMAGES.droneController, h: "short" }
];

export const GALLERY_FILTERS = [
  "All",
  "Workshops",
  "Competitions",
  "Projects",
  "Lab Activities",
  "Outreach"
];

export const RESOURCES = [
  { name: "GitHub", desc: "Club repositories & starter kits", href: "https://github.com" },
  { name: "ROS2 Tutorials", desc: "Official docs & Nav2 guides", href: "https://docs.ros.org" },
  { name: "Arduino", desc: "Boards, libraries, references", href: "https://www.arduino.cc" },
  { name: "Raspberry Pi", desc: "SBC setup & GPIO projects", href: "https://www.raspberrypi.com" },
  { name: "CAD Resources", desc: "Fusion 360 & FreeCAD assets", href: "https://www.autodesk.com" },
  { name: "Programming", desc: "Python & C++ for robotics", href: "https://www.learncpp.com" },
  { name: "Learning Hub", desc: "Curated robotics roadmaps", href: "https://www.coursera.org" },
  { name: "OpenCV", desc: "Computer vision tutorials", href: "https://opencv.org" }
];

export const STATS = [
  { label: "Projects Completed", value: 42, suffix: "+" },
  { label: "Active Members", value: 128, suffix: "" },
  { label: "Workshops Conducted", value: 65, suffix: "" },
  { label: "Competitions Won", value: 23, suffix: "" },
  { label: "Publications", value: 17, suffix: "" },
  { label: "Industry Collaborations", value: 9, suffix: "" }
];

export const BENEFITS = [
  "Hands-on access to industrial-grade robotics hardware",
  "Direct mentorship & internship referrals",
  "Compete under the MARC banner nationally",
  "Co-author research publications"
];

export const INTERESTS = [
  "Robotics",
  "AI/ML",
  "Drones",
  "Embedded",
  "ROS2",
  "Computer Vision",
  "IoT",
  "3D Printing"
];
