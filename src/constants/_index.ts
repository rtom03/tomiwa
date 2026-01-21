export interface HeaderType {
  setActiveTab: (tab: string) => string;
  activeTab: string;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (mobileMenuOpen: boolean) => boolean;
}
