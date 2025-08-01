
import * as React from 'react';

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 4.2C9 3.53726 9.53726 3 10.2 3H19.8C20.4627 3 21 3.53726 21 4.2V19.8C21 20.4627 20.4627 21 19.8 21H10.2C9.53726 21 9 20.4627 9 19.8V4.2Z"
        className="stroke-secondary"
        strokeWidth={2}
      />
      <path
        d="M3 4.2C3 3.53726 3.53726 3 4.2 3H7.8C8.46274 3 9 3.53726 9 4.2V19.8C9 20.4627 8.46274 21 7.8 21H4.2C3.53726 21 3 20.4627 3 19.8V4.2Z"
        className="fill-primary"
      />
      <path
        d="M15.5 8.5L16.5 6.5L17.5 8.5L19.5 9.5L17.5 10.5L16.5 12.5L15.5 10.5L13.5 9.5L15.5 8.5Z"
        className="fill-primary-foreground"
      />
    </svg>
  );
}

export default Logo;
