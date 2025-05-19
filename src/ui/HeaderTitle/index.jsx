import "./HeaderTitle.css";

const HeaderTitle = () => {
  return (
    <svg
      width="614"
      height="390"
      viewBox="0 0 614 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__title"
    >
      <g id="text">
        <text
          x="0"
          y="100"
          fill="#F9F9F9"
          fontSize="55"
          fontFamily="Poppins"
          fontWeight="900"
        >
          Creative,
        </text>
        <text
          x="0"
          y="160"
          fill="#F9F9F9"
          fontSize="55"
          fontFamily="Poppins"
          fontWeight="900"
        >
          Front-End Developer,
        </text>
        <text
          x="0"
          y="225"
          fill="#F9F9F9"
          fontSize="55"
          fontFamily="Poppins"
          fontWeight="900"
        >
          Learning Through
        </text>
        <text
          x="0"
          y="290"
          fill="#F9F9F9"
          fontSize="55"
          fontFamily="Poppins"
          fontWeight="900"
        >
          Every Pixel
        </text>
      </g>

      <g id="cursor">
        <path
          d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
          fill="#373737"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M587 358C587 349.716 580.284 343 572 343H484.932C476.648 343 469.932 349.716 469.932 358V361C469.932 369.284 476.648 376 484.932 376H572C580.284 376 587 369.284 587 361V358Z"
          fill="#2563EB"
        />
        <text x="482" y="365" fill="white" fontSize="14" fontFamily="Arial">
          Fahad Siddiqui
        </text>
      </g>
    </svg>
  );
};

export default HeaderTitle;
