import { FC } from 'react';

interface IconMobileProps {
    className?: string;
}

const IconMobile: FC<IconMobileProps> = ({ className }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="19" r="1" fill="currentColor" />
            <line x1="8" y1="4" x2="16" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};

export default IconMobile;
