interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 32,
  height = 32,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3014_8110)">
        <rect width="36" height="36" fill="black" />
        <rect
          x="4.5"
          y="4.5"
          width="27"
          height="27"
          fill="white"
          stroke="#4497F7"
          strokeWidth="2.25"
        />
        {/* Letra "L" */}
        <rect
          x="9"
          y="9"
          width="6.75"
          height="18"
          fill="#4497F7"
        />
        <rect
          x="9"
          y="22.5"
          width="13.5"
          height="6.75"
          fill="#4497F7"
        />
        {/* Letra "S" */}
        <path
          d="M22.5 9H27V13.5H22.5C20.0147 13.5 18 15.5147 18 18V22.5C18 24.9853 20.0147 27 22.5 27H27V22.5H22.5C21.6716 22.5 21 21.8284 21 21V19.5C21 18.6716 21.6716 18 22.5 18H27V9H22.5Z"
          fill="#4497F7"
        />
      </g>
      <defs>
        <clipPath id="clip0_3014_8110">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};