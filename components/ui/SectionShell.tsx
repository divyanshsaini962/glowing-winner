import React from 'react';

interface SectionShellProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionShell({ children, className = '' }: SectionShellProps) {
    return (
        <section className={`section-container ${className}`}>
            {children}
        </section>
    );
}
