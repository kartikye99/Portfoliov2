import React from 'react';

export function GithubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.933 5.933 0 0 0 1.932 2.42 6.044 6.044 0 0 0 2.648 1.03 5.68 5.68 0 0 0 1.299-.028 5.685 5.685 0 0 0 2.378-1.026l3.85-4.12 3.238-3.465a1.373 1.373 0 0 0-.961-2.316h-4.32l2.39-2.556A1.375 1.375 0 0 0 13.483 0zm-2.88 8.78h4.093l-4.185 4.478a3.17 3.17 0 0 1-1.328.572 3.167 3.167 0 0 1-.726.015 3.376 3.376 0 0 1-1.478-.576 3.315 3.315 0 0 1-1.079-1.352 3.09 3.09 0 0 1-.195-.568 3.096 3.096 0 0 1-.035-1.32 2.944 2.944 0 0 1 .676-1.176l4.257-4.557v4.484z" />
    </svg>
  );
}
