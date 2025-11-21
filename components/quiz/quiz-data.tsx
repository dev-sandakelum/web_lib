import { CacheMemoryQuiz, ComputerArithmeticQuiz } from "@/resources/json/computer_arch_quiz";
import { ApplicationLayersQuiz1, ApplicationLayersQuiz2 } from "@/resources/json/Q10";
import { Ict1161Quiz, MCommerceEnterpriseQuiz } from "@/resources/json/Q2";
import { MultimediaQuiz } from "@/resources/json/Q3";
import { CProgrammingQuiz } from "@/resources/json/Q4";
import {
  ComputerArchitectureQuiz,
  ComputerArchitectureQuiz2,
} from "@/resources/json/Q5";
import {
  AdvancedTopicsQuiz,
  AnimationBasicsQuiz,
  DigitalImagesQuiz,
} from "@/resources/json/Q6";
import {
  AdvancedMemoryQuiz,
  ExternalMemoryQuiz,
  InternalMemoryQuiz,
} from "@/resources/json/Q7";
import {
  ComputerNetworksQuiz,
  DataLinkMACQuiz,
  NetworkDevicesQuiz,
  PhysicalLayerQuiz,
} from "@/resources/json/Q8";
import { NetworkTransportQuiz, TransportProtocolsQuiz } from "@/resources/json/Q9";

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
  // CacheMemoryQuiz,
  // ComputerArithmeticQuiz,
  PhysicalLayerQuiz,
  ComputerNetworksQuiz,
  DataLinkMACQuiz,
  NetworkDevicesQuiz,
  NetworkTransportQuiz,
  TransportProtocolsQuiz,
  ApplicationLayersQuiz1,
    ApplicationLayersQuiz2,
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
