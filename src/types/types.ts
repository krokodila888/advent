export interface AdventWindowProps {
  item: {
    day: number;
    date: string;
    tanya: string;
    zebra: string;
    bonus: string;
  };
  isAvailable: boolean;
  isOpened: boolean;
  onClick: () => void;
}
