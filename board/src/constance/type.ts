type post = {
  id: string;
  title: string;
  date: Date;
  content: string;
  category: "poem" | "novel" | "essay";
};

export type { post };
