export type EducationNote = {
  title: string;
  slug: string;
  className: string;
  board: string;
  subject: string;
  description: string;
  image: string;
  pdf: string;
  preparedBy: string;
  pages: string;
  language: string;
};

export const educationData: Record<string, EducationNote> = {
  "9th-biology-lahore-board": {
    title: "9th Class Biology Notes",
    slug: "9th-biology-lahore-board",
    className: "9th Class",
    board: "Lahore Board",
    subject: "Biology",
    description:
      "Complete chapter-wise Biology notes for 9th Class Lahore Board students.",
    image: "/notes/biology.png",
    pdf: "/notes/9th/biology-lahore-board.pdf",
    preparedBy: "Mehboob Qasmii",
    pages: "120 Pages",
    language: "English",
  },

  "9th-chemistry-lahore-board": {
    title: "9th Class Chemistry Notes",
    slug: "9th-chemistry-lahore-board",
    className: "9th Class",
    board: "Lahore Board",
    subject: "Chemistry",
    description:
      "Complete chapter-wise Chemistry notes for 9th Class Lahore Board students.",
    image: "/notes/chemistry.png",
    pdf: "/notes/9th/chemistry-lahore-board.pdf",
    preparedBy: "Mehboob Qasmii",
    pages: "110 Pages",
    language: "English",
  },

  "10th-physics-lahore-board": {
    title: "10th Class Physics Notes",
    slug: "10th-physics-lahore-board",
    className: "10th Class",
    board: "Lahore Board",
    subject: "Physics",
    description:
      "Complete chapter-wise Physics notes for 10th Class Lahore Board students.",
    image: "/notes/physics.png",
    pdf: "/notes/10th/physics-lahore-board.pdf",
    preparedBy: "Mehboob Qasmii",
    pages: "130 Pages",
    language: "English",
  },

  "11th-biology-federal-board": {
    title: "11th Class Biology Notes",
    slug: "11th-biology-federal-board",
    className: "11th Class",
    board: "Federal Board",
    subject: "Biology",
    description:
      "Complete Biology notes for 11th Class Federal Board students.",
    image: "/notes/biology.png",
    pdf: "/notes/11th/biology-federal-board.pdf",
    preparedBy: "Mehboob Qasmii",
    pages: "150 Pages",
    language: "English",
  },

  "12th-chemistry-federal-board": {
    title: "12th Class Chemistry Notes",
    slug: "12th-chemistry-federal-board",
    className: "12th Class",
    board: "Federal Board",
    subject: "Chemistry",
    description:
      "Complete Chemistry notes for 12th Class Federal Board students.",
    image: "/notes/chemistry.png",
    pdf: "/notes/12th/chemistry-federal-board.pdf",
    preparedBy: "Mehboob Qasmii",
    pages: "145 Pages",
    language: "English",
  },
};