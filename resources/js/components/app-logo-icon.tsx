import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path 
                    d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                />
                <path 
                    opacity="0.5" 
                    d="M19 19.5C19.4645 19.5 19.6968 19.5 19.8911 19.4692C20.9608 19.2998 21.7998 18.4608 21.9692 17.3911C22 17.1968 22 16.9645 22 16.5V7.5C22 7.0355 22 6.80325 21.9692 6.60891C21.7998 5.53918 20.9608 4.70021 19.8911 4.53078C19.6968 4.5 19.4645 4.5 19 4.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                />
                <path 
                    opacity="0.5" 
                    d="M13 14C13 15.1046 12.1046 16 11 16C9.89543 16 9 15.1046 9 14C9 12.8954 9.89543 12 11 12C12.1046 12 13 12.8954 13 14ZM13 14V8C13 9.10457 13.8954 10 15 10" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    opacity="0.5" 
                    d="M5 19.5C4.5355 19.5 4.30325 19.5 4.10891 19.4692C3.03918 19.2998 2.20021 18.4608 2.03078 17.3911C2 17.1968 2 16.9645 2 16.5V7.5C2 7.0355 2 6.80325 2.03078 6.60891C2.20021 5.53918 3.03918 4.70021 4.10891 4.53078C4.30325 4.5 4.5355 4.5 5 4.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                />
            </g>
        </svg>
    );
}