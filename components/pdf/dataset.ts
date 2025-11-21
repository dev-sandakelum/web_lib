interface PDFItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  size: string; // e.g. "134 KB", "1.2 MB", "0.4 GB"
}

const pdf_path =
  "https://github.com/dev-sandakelum/web_lib/raw/main/resources/pdf/";

export const PdfDocuments: PDFItem[] = [
  {
    id: "1",
    title: "Information Systems Questions",
    description: "A collection of questions for Information Systems.",
    category: "IS",
    url: `${pdf_path}Information System Questions.pdf`,
    size: "134 KB",
  },
  {
    id: "2",
    title: "Computer Networks_ Application, Presentation, and Session Layers",
    description: "",
    category: "Networking",
    url: `${pdf_path}dasindu01/Computer Networks_ Application, Presentation, and Session Layers.pdf`,
    size: "- KB",
  },
  {
    id: "3",
    title: "Computer Networks_ Data Link Layer Study Note",
    description: "Networking Data Link Layer Notes",
    category: "Networking",
    url: `${pdf_path}dasindu01/Computer Networks_ Data Link Layer Study Note.pdf`,
    size: "- KB",
  },
  {
    id: "4",
    title: "Computer Networks_ Physical Layer Study Note",
    description: "",
    category: "Networking",
    url: `${pdf_path}dasindu01/Computer Networks_ Physical Layer Study Note.pdf`,
    size: "- KB",
  },
  {
    id: "5",
    title: "DHCP Pool - Packet Tracer",
    description: "",
    category: "Networking",
    url: `${pdf_path}dasindu01/DHCP Pool - Packet Tracer.pdf`,
    size: "- KB",
  },
  {
    id: "6",
    title: "Network Layer Study Note",
    description: "",
    category: "Networking",
    url: `${pdf_path}dasindu01/Network Layer Study Note.pdf`,
    size: "- KB",
  },
  {
    id: "7",
    title: "Transport Layer Study Note",
    description: "",
    category: "Networking",
    url: `${pdf_path}dasindu01/Transport Layer Study Note.pdf`,
    size: "- KB",
  }
];
