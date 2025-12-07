import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    premium?: boolean;
}

export default function Card({ children, className = '', premium = false }: CardProps) {
    const cardClass = premium ? 'card-premium' : 'card';

    return (
        <div className={`${cardClass} ${className}`}>
            {children}
        </div>
    );
}
