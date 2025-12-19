import React from 'react';

// Extend the window interface to include UnicornStudio
export {};

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
      destroy: () => void; // Assuming destroy exists, otherwise safe to ignore
    };
  }
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface MetricItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface UseCaseItem {
  role: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
}