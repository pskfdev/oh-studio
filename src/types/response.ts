export type DataType = {
  id: string;
  height: number;
  width: number;
  url: string;
};

export type DataFormType = {
  id: number;
  question: string;
  options: string[];
};

export type OptionType = {
  [key: number]: string;
};

