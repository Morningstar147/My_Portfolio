import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;  // Content to be displayed in the heading
};


export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
} 