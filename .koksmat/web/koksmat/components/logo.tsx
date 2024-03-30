export default function Logo(props: { homeUrl: string }) {
  return (
    <a href={props.homeUrl}>
      <div style={{ padding: "8px", cursor: "pointer" }}>
        <svg
          width="90"
          height="32"
          viewBox="0 0 79 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M78.8184 0.678866H73.1374V23.321H78.8184V0.678866Z"
            fill="#2D32A9"
          />
          <path
            d="M11.0838 0.0399332C5.64124 0.0399332 0 1.95673 0 1.95673V23.321H5.89946V5.95006C5.89946 5.95006 8.00499 5.07153 11.0838 5.07153C14.8976 5.07153 16.4867 7.16802 16.4867 10.4026C16.4867 10.802 16.4867 23.341 16.4867 23.341H22.3067C22.3067 23.0215 22.3067 10.7221 22.3067 10.4026C22.2869 3.39433 19.069 0.0399332 11.0838 0.0399332Z"
            fill="#2D32A9"
          />
          <path
            d="M71.5086 0.678866H64.477L59.1535 7.30779L56.2336 3.61396C54.7637 1.75706 52.3999 0.678866 50.0362 0.678866H46.5799L55.4788 11.8801L46.282 23.3011H53.2541L58.9549 16.2528L62.2324 20.3859C63.7023 22.2229 66.066 23.3011 68.4099 23.3011H71.8264L62.6296 11.6805L71.5086 0.678866Z"
            fill="#2D32A9"
          />
          <path
            d="M47.3149 18.9883L43.4614 15.8535C42.2497 17.2911 40.164 18.9883 36.7674 18.9883C34.1255 18.9883 31.7022 17.5107 30.5898 15.0748L47.8909 12.0199C47.8909 10.3228 47.5532 8.70545 46.9573 7.24789C45.1895 2.97503 41.1175 0 36.1715 0C29.5172 0 24.4321 4.75206 24.4321 11.9999C24.4321 18.9683 29.4179 23.9999 36.7872 23.9999C42.2696 24.0199 45.5868 21.1447 47.3149 18.9883ZM36.1715 4.89183C38.7338 4.89183 40.8592 6.08982 41.7332 8.14639L30.1329 10.203C30.7487 6.78866 33.1721 4.89183 36.1715 4.89183Z"
            fill="#2D32A9"
          />
        </svg>
      </div>
    </a>
  );
}
