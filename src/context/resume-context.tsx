
"use client";

import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface ResumeContextType {
  resumeText: string;
  setResumeText: (text: string) => void;
}

export const ResumeContext = createContext<ResumeContextType>({
  resumeText: '',
  setResumeText: () => {},
});

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resumeText, setResumeText] = useState('');

  useEffect(() => {
    const savedResume = localStorage.getItem('resumeText');
    if (savedResume) {
      setResumeText(savedResume);
    }
  }, []);

  const handleSetResumeText = (text: string) => {
    setResumeText(text);
    localStorage.setItem('resumeText', text);
  };

  return (
    <ResumeContext.Provider value={{ resumeText, setResumeText: handleSetResumeText }}>
      {children}
    </ResumeContext.Provider>
  );
};
