"use client";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
}) => {
  return <section className={`px-6 py-10 ${className}`}>{children}</section>;
};
