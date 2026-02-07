export interface HeaderType {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  fullDescription: string;
  liveLink: string;
  githubLink: string;
}

export interface Place {
  id: number;
  title: string;
  childIds: number[];
}

export interface PlaceTreeProps {
  id: number;
  parentId: number;
  placesById: { [key: number]: Place };
  onComplete: (parentId: number, childId: number) => void;
}
