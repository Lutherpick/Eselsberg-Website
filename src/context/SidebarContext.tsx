"use client"
import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext();

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{sidebar, setSidebar}}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
