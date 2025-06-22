
import { Integration } from '../types/integration';

export const projectManagementIntegrations: Integration[] = [
  {
    id: "asana",
    name: "Asana",
    slug: "asana",
    logo: "/lovable-uploads/62d4d4ff-8c3e-4a9b-b2d5-345678901fed.png",
    category: "Project Management",
    description: "Asana is a project management platform that helps teams organize, track, and manage their work and projects efficiently.",
    shortDescription: "Project management and team collaboration platform",
    keyBenefits: [
      "Project progress tracking",
      "Team productivity insights",
      "Task completion analytics",
      "Resource allocation optimization"
    ],
    metrics: [
      "Task completion rates",
      "Project timelines",
      "Team workload",
      "Milestone progress",
      "Time tracking",
      "Resource utilization"
    ],
    features: [
      "Project analytics",
      "Team performance tracking",
      "Task management",
      "Timeline visualization"
    ],
    setupSteps: [
      "Connect Asana workspace",
      "Configure project access",
      "Select teams to monitor",
      "Create project management dashboard"
    ],
    useCase: "Ideal for project managers and teams needing visibility into project progress and team productivity."
  },
  {
    id: "trello",
    name: "Trello",
    slug: "trello",
    logo: "/lovable-uploads/0bd362c9-eb56-41d6-8b73-6606f2890b56.png",
    category: "Project Management",
    description: "Trello is a visual project management tool that uses boards, lists, and cards to help teams organize and prioritize projects.",
    shortDescription: "Visual project management and organization platform",
    keyBenefits: [
      "Visual project tracking",
      "Team collaboration insights",
      "Card movement analytics",
      "Board activity monitoring"
    ],
    metrics: [
      "Card completion rates",
      "Board activity",
      "Team collaboration",
      "Project velocity",
      "Due date tracking",
      "Member productivity"
    ],
    features: [
      "Board analytics",
      "Card tracking",
      "Team activity monitoring",
      "Progress visualization"
    ],
    setupSteps: [
      "Connect Trello account",
      "Configure board access",
      "Select boards to track",
      "Create visual project dashboard"
    ],
    useCase: "Perfect for teams using visual project management and needing insights into project flow and completion."
  },
  {
    id: "monday",
    name: "Monday.com",
    slug: "monday",
    logo: "/lovable-uploads/285df723-c382-4cfc-b46f-891081bd952a.png",
    category: "Project Management",
    description: "Monday.com is a work operating system that enables teams to run projects and workflows with confidence and clarity.",
    shortDescription: "Work management and team collaboration platform",
    keyBenefits: [
      "Project timeline tracking",
      "Team workload management",
      "Progress visualization",
      "Resource planning insights"
    ],
    metrics: [
      "Project progress",
      "Task completion",
      "Team capacity",
      "Timeline adherence",
      "Budget tracking",
      "Resource allocation"
    ],
    features: [
      "Project tracking",
      "Team analytics",
      "Workflow monitoring",
      "Progress reporting"
    ],
    setupSteps: [
      "Connect Monday.com account",
      "Configure board access",
      "Select tracking metrics",
      "Build project management dashboard"
    ],
    useCase: "Perfect for teams managing complex projects and needing comprehensive workflow visibility."
  },
  {
    id: "clickup",
    name: "ClickUp",
    slug: "clickup",
    logo: "/lovable-uploads/9bbd560f-2e5a-4b7c-c4f7-567890123456.png",
    category: "Project Management",
    description: "ClickUp is an all-in-one workspace that combines project management, docs, goals, and chat in one platform.",
    shortDescription: "All-in-one workspace and project management platform",
    keyBenefits: [
      "Comprehensive project analytics",
      "Goal tracking and progress",
      "Team productivity insights",
      "Resource utilization optimization"
    ],
    metrics: [
      "Task completion velocity",
      "Goal achievement rates",
      "Team workload distribution",
      "Project timeline accuracy",
      "Resource allocation",
      "Productivity scores"
    ],
    features: [
      "Multi-workspace analytics",
      "Goal tracking",
      "Time tracking insights",
      "Team performance monitoring"
    ],
    setupSteps: [
      "Connect ClickUp workspace",
      "Configure space permissions",
      "Set up goal tracking",
      "Create comprehensive project dashboard"
    ],
    useCase: "Perfect for teams managing complex projects across multiple workspaces and needing unified productivity analytics."
  }
];
