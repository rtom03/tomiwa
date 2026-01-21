export interface HeaderType {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
