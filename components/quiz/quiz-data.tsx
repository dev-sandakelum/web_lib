import { Ict1161Quiz, MCommerceEnterpriseQuiz } from "@/resourses/json/Q2";
import { MultimediaQuiz } from "@/resourses/json/Q3";
import { CProgrammingQuiz } from "@/resourses/json/Q4";
import {
  ComputerArchitectureQuiz,
  ComputerArchitectureQuiz2,
} from "@/resourses/json/Q5";
import {
  AdvancedTopicsQuiz,
  AnimationBasicsQuiz,
  DigitalImagesQuiz,
} from "@/resourses/json/Q6";
import {
  AdvancedMemoryQuiz,
  ExternalMemoryQuiz,
  InternalMemoryQuiz,
} from "@/resourses/json/Q7";
import {
  ComputerNetworksQuiz,
  DataLinkMACQuiz,
  NetworkDevicesQuiz,
  PhysicalLayerQuiz,
} from "@/resourses/json/Q8";
import { NetworkTransportQuiz, TransportProtocolsQuiz } from "@/resourses/json/Q9";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

interface Quiz {
  id: string;
  title: string;
  category: string;
  questions: Question[];
}

export const builtInQuizzes: Quiz[] = [
  PhysicalLayerQuiz,
  ComputerNetworksQuiz,
  DataLinkMACQuiz,
  NetworkDevicesQuiz,
  NetworkTransportQuiz,
  TransportProtocolsQuiz,
  InternalMemoryQuiz,
  ExternalMemoryQuiz,
  AdvancedMemoryQuiz,
  Ict1161Quiz,
  MultimediaQuiz,
  CProgrammingQuiz,
  ComputerArchitectureQuiz,
  ComputerArchitectureQuiz2,
  MCommerceEnterpriseQuiz,
  DigitalImagesQuiz,
  AnimationBasicsQuiz,
  AdvancedTopicsQuiz,
];
