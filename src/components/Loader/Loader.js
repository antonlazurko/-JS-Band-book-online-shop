const Loader = () => (
  <svg width="1440" height="340">
    <text
      x="350"
      y="100"
      fill="#FFF"
      fontFamily="'Helvetica Neue', Helvetica"
      fontSize="2.7em"
      fontWeight="300"
    >
      Loading...
    </text>
    <circle cx="440" cy="250" r="2" fill="none" stroke="#09c" strokeWidth="4">
      <animate
        attributeName="r"
        begin="0.2"
        dur="4"
        repeatCount="indefinite"
        values="2; 75"
      ></animate>
    </circle>
    <circle cx="440" cy="250" r="2" fill="none" stroke="#09c" strokeWidth="4">
      <animate
        attributeName="r"
        begin="0.7"
        dur="4"
        repeatCount="indefinite"
        values="2; 75"
      ></animate>
    </circle>
    <circle cx="440" cy="250" r="2" fill="none" stroke="#09c" strokeWidth="4">
      <animate
        attributeName="r"
        begin="1.2"
        dur="4"
        repeatCount="indefinite"
        values="2; 75"
      ></animate>
    </circle>
    <circle cx="440" cy="250" r="2" fill="none" stroke="#09c" strokeWidth="4">
      <animate
        attributeName="r"
        begin="1.7"
        dur="4"
        repeatCount="indefinite"
        values="2; 75"
      ></animate>
    </circle>
    <circle cx="440" cy="250" r="2" fill="none" stroke="#09c" strokeWidth="4">
      <animate
        attributeName="r"
        begin="2.2"
        dur="4"
        repeatCount="indefinite"
        values="2; 75"
      ></animate>
    </circle>
    <circle cx="440" cy="250" r="2" fill="none" stroke="#09c" strokeWidth="4">
      <animate
        attributeName="r"
        begin="2.7"
        dur="4"
        repeatCount="indefinite"
        values="2; 75"
      ></animate>
    </circle>
    <circle cx="440" cy="250" r="2" fill="none" stroke="#09c" strokeWidth="4">
      <animate
        attributeName="r"
        begin="3.2"
        dur="4"
        repeatCount="indefinite"
        values="2; 75"
      ></animate>
    </circle>
  </svg>
);

export default Loader;
