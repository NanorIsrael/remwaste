import { FC } from 'react';

interface IconBankProps {
    className?: string;
}

const IconBankProps: FC<IconBankProps> = ({ className }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M3 8L12 3L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="4" y="8" width="16" height="10" stroke="currentColor" strokeWidth="1.5" rx="1" />
            <line x1="7" y1="8" x2="7" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="8" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="17" y1="8" x2="17" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="10" y="13" width="4" height="5" stroke="currentColor" strokeWidth="1.5" rx="0.5" />
        </svg>
    );
};

export default IconBankProps;
