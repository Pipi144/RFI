import { SVGProps } from "react";
import { DoxleThemeColor } from "../../DoxleGeneralStore/useDoxleThemeStore";

export const ExportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
    style={{ paddingRight: 3, paddingTop: 1 }}
  >
    <g
      stroke="#242424"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <path d="M4.813 9.188H3.718a1.094 1.094 0 0 1-1.094-1.094V2.406a1.094 1.094 0 0 1 1.094-1.094h6.562a1.094 1.094 0 0 1 1.094 1.094v5.688a1.093 1.093 0 0 1-1.094 1.094H9.187" />
      <path d="M9.188 6.563 7 4.374 4.812 6.563M7 12.688V4.811" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M14 14H0V0h14z" />
      </clipPath>
    </defs>
  </svg>
);

export const SendEmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
    style={{ paddingTop: 5 }}
  >
    <g filter="url(#a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M4.514 2.155a.5.5 0 0 1 .564-.112l11.25 5a.5.5 0 0 1 0 .914l-11.25 5a.5.5 0 0 1-.65-.68L6.816 7.5 4.428 2.724a.5.5 0 0 1 .086-.57ZM7.684 8l-1.739 3.477L14.894 7.5 5.945 3.523 7.684 7H10.5a.5.5 0 1 1 0 1H7.684Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={23}
        height={23}
        x={-1}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_19_66" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_19_66"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const DiscussionsPageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={361}
    height={361}
    fill="none"
    {...props}
  >
    <path
      fill="#EDEEEF"
      d="m124.978 80.785-2.003 4.06-4.48.65 3.241 3.163-.765 4.462 4.007-2.108 4.007 2.108-.765-4.462 3.242-3.162-4.48-.65-2.004-4.061Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m128.22 88.658 3.242-3.162M124.978 80.785l-2.003 4.06-4.48.65 3.241 3.163-.765 4.462 4.007-2.108 4.007 2.108"
    />
    <path
      fill="#7070FF"
      d="m107.087 80.785-2.004 4.06-4.48.65 3.242 3.163-.765 4.462 4.007-2.108 4.007 2.108-.765-4.462 3.242-3.162-4.48-.65-2.004-4.061Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m110.329 88.658 3.242-3.162M107.087 80.785l-2.004 4.06-4.48.65 3.242 3.163-.765 4.462 4.007-2.108 4.007 2.108"
    />
    <path
      fill="#7070FF"
      d="m89.192 80.785-2.003 4.06-4.48.65 3.242 3.163-.766 4.462 4.007-2.108 4.01 2.108-.764-4.462 3.241-3.162-4.48-.65-2.007-4.061Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m92.438 88.658 3.242-3.162M89.192 80.785l-2.003 4.06-4.48.65 3.242 3.163-.766 4.462 4.007-2.108 4.01 2.108"
    />
    <path
      fill="#7070FF"
      d="m71.301 80.785-2.003 4.06-4.48.65 3.241 3.163-.765 4.462 4.007-2.108 4.007 2.108-.765-4.462 3.242-3.162-4.48-.65-2.004-4.061Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m74.543 88.658 3.242-3.162M71.301 80.785l-2.003 4.06-4.48.65 3.241 3.163-.765 4.462 4.007-2.108 4.007 2.108"
    />
    <path
      fill="#7070FF"
      d="m53.41 80.785-2.004 4.06-4.48.65 3.242 3.163-.765 4.462 4.007-2.108 4.007 2.108-.765-4.462 3.242-3.162-4.48-.65-2.004-4.061Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m56.652 88.658 3.242-3.162M53.41 80.785l-2.004 4.06-4.48.65 3.242 3.163-.765 4.462 4.007-2.108 4.007 2.108"
    />
    <path
      fill="#F4F4F4"
      d="M139.815 290.45h18.065v-7.643h18.461v-9.035l13.747-12.159h20.815V226.52h27.101v-43.435l34.172 30.23v57.677h18.064v25.551h7.462v-7.133h13.354v14.267H130.779v-5.235l9.036-7.992Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M319.698 303.677H122.141"
    />
    <path
      fill="#fff"
      d="M235.914 237.495h-2.47v-2.184h2.47v2.184ZM229.906 237.495h-2.469v-2.184h2.469v2.184ZM223.903 237.495h-2.469v-2.184h2.469v2.184ZM235.914 243.379h-2.47v-2.184h2.47v2.184ZM229.906 243.379h-2.469v-2.184h2.469v2.184ZM223.903 243.379h-2.469v-2.184h2.469v2.184ZM235.914 249.267h-2.47v-2.184h2.47v2.184ZM229.906 249.267h-2.469v-2.184h2.469v2.184ZM223.903 249.267h-2.469v-2.184h2.469v2.184ZM235.914 255.155h-2.47v-2.184h2.47v2.184ZM229.906 255.155h-2.469v-2.184h2.469v2.184ZM223.903 255.155h-2.469v-2.184h2.469v2.184ZM235.914 261.046h-2.47v-2.184h2.47v2.184ZM229.906 261.046h-2.469v-2.184h2.469v2.184ZM223.903 261.046h-2.469v-2.184h2.469v2.184ZM235.914 266.934h-2.47v-2.184h2.47v2.184ZM229.906 266.934h-2.469v-2.184h2.469v2.184ZM223.903 266.934h-2.469v-2.184h2.469v2.184ZM235.914 272.819h-2.47v-2.185h2.47v2.185ZM229.906 272.819h-2.469v-2.185h2.469v2.185ZM223.903 272.819h-2.469v-2.185h2.469v2.185ZM235.914 278.706h-2.47v-2.184h2.47v2.184ZM229.906 278.706h-2.469v-2.184h2.469v2.184ZM223.903 278.706h-2.469v-2.184h2.469v2.184ZM235.914 284.594h-2.47v-2.184h2.47v2.184ZM229.906 284.594h-2.469v-2.184h2.469v2.184ZM223.903 284.594h-2.469v-2.184h2.469v2.184Z"
    />
    <path
      fill="#EDEEEF"
      d="M127.173 156.522s-17.357 59.966-24.819 132.256l-5.415 3.61 23.678 11.289 30.259-83.084 4.877-67.096"
    />
    <path
      fill="#EDEEEF"
      d="m134.325 155.811 33.814-2.317 6.152 2.505 2.888 147.678h-31.407l3.321-5.949-14.768-141.917ZM141.443 84.792v5.339a8.964 8.964 0 0 0 6.823 8.704l8.495 2.09v-20.87l-7.062-1.718a6.663 6.663 0 0 0-8.256 6.473v-.018Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M141.443 90.13a8.964 8.964 0 0 0 6.823 8.705l8.495 2.09"
    />
    <path
      fill="#000"
      d="M150.097 89.07a.408.408 0 1 0 0-.817.408.408 0 0 0 0 .817ZM143.804 89.07a.408.408 0 1 0 .001-.816.408.408 0 0 0-.001.816Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M145.649 91.106v-6.314h-2.419M150.869 84.792h-3.162"
    />
    <path
      fill="#EDEEEF"
      d="M155.753 88.026v2.192a2.14 2.14 0 0 0 2.141-2.141c.004-.065.004-.13 0-.195-.137-1.329-2.141-1.192-2.141.144Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M155.753 90.218a2.14 2.14 0 0 0 2.141-2.141"
    />
    <path
      stroke="#7070FF"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M147.378 91.842a1.424 1.424 0 0 0 2.007 0"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m145.649 91.11 1.383.338"
    />
    <path
      fill="#7070FF"
      d="M127.173 123.069v33.453l47.389 11.646v-37.255a28.7 28.7 0 0 0-21.859-27.869 20.619 20.619 0 0 0-25.541 20.025h.011Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m149.093 297.728-14.769-141.917M141.118 88.662l-4.693-2.574s6.859-19.639 20.938-10.975c14.079 8.664-.602 18.556-.602 18.556"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M140.79 85.268s9.317-1.502 12.563-6.054c0 0-1.321 6.592 2.588 8.202M163.468 108.246s16.061 11.292 22.992 27.057c0 0-2.455-28.999 1.011-33.765 1.827-2.526 3.899.899 3.899.899s9.097-3.787 9.386-2.343c.288 1.444-5.054 6.932-5.054 6.932s7.797 35.898 1.732 46.15c-6.064 10.252-36.822-10.195-36.822-10.195"
    />
    <path
      fill="#000"
      d="M163.927 145.068s.061 14.079 10.635 20.064v-14.234l-10.635-5.83Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M135.267 106.69s-14.271 10.577-16.967 21.22c0 0-4.43-28.808-6.932-28.159-2.501.65-3.082 2.672-3.082 2.672s-7.892-4.13-9.047-2.682c-1.155 1.447 6.931 9.339 6.931 9.339s-4.891 34.428.769 39.085c11.938 9.819 20.216-4.234 20.216-4.234"
    />
    <path fill="#E2E2E2" d="m238.415 102.452-11.859 12.039v-12.039h11.859Z" />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M226.556 114.491v-12.039"
    />
    <path fill="#EDEEEF" d="M285.547 104.361h-78.459V51.695h78.459v52.666Z" />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M207.088 51.695v52.666h19.468"
    />
    <path
      fill="#7070FF"
      d="M264.198 80.438h-4.823v-4.823h4.823v4.823ZM248.729 80.438h-4.823v-4.823h4.823v4.823ZM233.26 80.438h-4.823v-4.823h4.823v4.823Z"
    />
  </svg>
);

export const TasksPageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={343}
    height={382}
    fill="none"
    {...props}
  >
    <path
      fill="#F4F4F4"
      d="M164.392 315.146v-8.511l-7.854 7.201-2.62-22.588-20.625 14.734-2.616-9.821-7.205 7.201v-11.785l-8.835 10.474-7.858-23.569-9.821 24.242-14.402-18.019-10.803 24.551v-11.785l-6.219 11.456-4.255-15.387-11.785 18.332-18.004-22.587-5.565 22.259-5.238-6.219-3.927 15.418h151.234l1.307-5.925-4.909.328Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M8.234 320.742h169.593"
    />
    <path
      fill="#EDEEEF"
      d="M189.058 204.469 135.7 226.148V87.757l53.358-21.675V204.47Z"
    />
    <path
      fill="#E2E2E2"
      d="m242.412 226.148-53.354-21.679V66.082l53.354 21.675v138.391Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M189.058 204.469 135.7 226.148M242.412 226.148l-53.354-21.679"
    />
    <path
      fill="#7070FF"
      d="m295.766 204.469-53.354 21.679V87.757l53.354-21.675V204.47Z"
    />
    <path
      fill="#EDEEEF"
      d="M131.525 315.345s-5.86-117.798-11.613-149.717l-38.028 5.126 19.814 150.607h33.586l-3.759-6.016Z"
    />
    <path
      fill="#000"
      d="M120.03 244.893c-4.167-7.22-16.399-8.175-28.757-2.797l4.691 35.641a48.205 48.205 0 0 0 7.48-3.507c13.886-8.018 21.312-21.151 16.586-29.337Z"
    />
    <path
      fill="#EDEEEF"
      d="M69.755 177.951s-4.27 44.579 21.813 56.498l-53.675 30.254 11.46 27.959 4.125-9.627s67.381-10.539 71.052-37.126c3.671-26.588-21.201-76.209-21.201-76.209"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M53.478 283.035s67.381-10.539 71.052-37.126c3.671-26.588-21.201-76.209-21.201-76.209"
    />
    <path
      fill="#EDEEEF"
      d="M87.114 89.724v13.087l16.212 3.985V84.712l-16.212-3.984v8.996Z"
    />
    <path
      fill="#000"
      d="M96.27 94.25a.432.432 0 1 0 0-.863.432.432 0 0 0 0 .864ZM89.616 94.25a.432.432 0 1 0 0-.863.432.432 0 0 0 0 .864Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M91.568 96.405v-6.68H88.22M97.088 89.724H93.74"
    />
    <path
      fill="#EDEEEF"
      d="M102.256 93.147v2.319a2.257 2.257 0 0 0 1.603-.663 2.275 2.275 0 0 0 .662-1.603 1.775 1.775 0 0 0 0-.206c-.133-1.406-2.265-1.26-2.265.153Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M102.256 95.466a2.257 2.257 0 0 0 1.603-.663 2.275 2.275 0 0 0 .662-1.603"
    />
    <path
      stroke="#7070FF"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M93.03 98.052a2.292 2.292 0 0 0 2.293-2.292"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m87.114 102.811 16.212 3.985"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m91.568 96.41 1.463.358"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m87.114 89.724-1.166-11.41 19.406 1.986-1.964 11.712"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M88.206 83.333s4.966 4.53 11.659 3.614c0 0 .427 4.431 2.376 5.451"
    />
    <path
      fill="#7070FF"
      d="M119.912 130.228v35.4l-50.157 12.323v-39.423a30.366 30.366 0 0 1 23.119-29.49 21.829 21.829 0 0 1 18.677 4.013 21.815 21.815 0 0 1 8.361 17.177Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M79.45 116.285s-21.235 18.947-20.93 44.617c.257 21.499 50.807 3.771 67.233-2.555a12.25 12.25 0 0 0 7.017-7.01l1.826-4.718 5.207-2.116v-2.854l-50.615 6.521 6.226-14.669"
    />
    <path
      fill="#000"
      d="M71.535 171.155c3.935 1.883 9.268 3.056 15.15 3.056 11.327 0 20.629-4.29 21.775-9.791-12.114 3.798-26.664 7.392-36.924 6.735Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M138.703 140.255c4.11-8.561 10.875-21.862 14.134-23.97a15.033 15.033 0 0 1 9.779-2.342v2.342l-3.667 2.139s2.444 6.723-2.445 9.577c0 0-1.108 62.621-36.615 37.627M116.94 119.234l15.089 23.298"
    />
    <path
      fill="#7070FF"
      d="M189.058 240.53c12.728 0 23.046-10.318 23.046-23.046s-10.318-23.046-23.046-23.046-23.046 10.318-23.046 23.046 10.318 23.046 23.046 23.046Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M212.1 217.484a23.049 23.049 0 0 1-6.75 16.295 23.04 23.04 0 0 1-16.296 6.747"
    />
    <path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M171.482 217.484a17.569 17.569 0 0 1 17.572-17.572"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M189.058 240.526v80.816M163.227 321.342h51.662"
    />
  </svg>
);

export const CheckBoxCustomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={14}
    fill="none"
    {...props}
  >
    <rect
      width={11}
      height={12.091}
      x={0.5}
      y={0.5}
      fill="#96A2BE"
      stroke="#96A2BE"
      rx={0.5}
    />
  </svg>
);

export const CheckBoxCustomIconChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={14}
    fill="none"
    {...props}
  >
    <rect
      width={11}
      height={12.091}
      x={0.5}
      y={0.5}
      fill="#96A2BE"
      stroke="#96A2BE"
      rx={0.5}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 7.25 4.125 11 11 2"
    />
  </svg>
);

export const TasksCheckBoxCustomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <rect width={18} height={18} x={1} y={1} fill="#7070EF" rx={6} />
  </svg>
);

export const TasksCheckBoxCheckedCustomIcon = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <rect width={18} height={18} x={1} y={1} fill="#12B718" rx={6} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.173 4.447a.75.75 0 0 1 .047 1.06l-9.167 10a.75.75 0 0 1-1.083.023l-4.167-4.166a.75.75 0 1 1 1.06-1.061l3.613 3.613 8.638-9.423a.75.75 0 0 1 1.06-.046Z"
      clipRule="evenodd"
    />
  </svg>
);

export const TasksCheckBoxCrossCustomIcon = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <rect width={18} height={18} x={1} y={1} fill="#FF0606" rx={6} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4.47 4.47a.75.75 0 0 1 1.06 0L10 8.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L11.06 10l4.47 4.47a.75.75 0 1 1-1.06 1.06L10 11.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L8.94 10 4.47 5.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export const RFILogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={470}
    height={470}
    fill="none"
    {...props}
    style={{ margin: "-22px -111px" }}
  >
    <path
      fill="#7070EF"
      d="M293.068 131.572a14.97 14.97 0 0 0-.883-9.231c-3.61-8.46-13.489-29.483-22.997-30.141-11.919-.827-8.159 9.672-3.929 12.178a6.992 6.992 0 0 0 7.679-.156s11.417 13.87 10.181 18.171c0 0-6.58 0-4.386 6.269 1.918 5.481 11.877 13.485 14.335 2.91Z"
    />
    <path
      fill="#EDEEEF"
      d="M270.513 220.801S301.19 326.65 259.6 361.9c-41.59 35.25-86.01 51.465-86.01 51.465l-4.23 16.21-21.15-51.46 59.22-67.68 25.38-103.63"
    />
    <path
      fill="#000"
      d="M229.106 276.614c-5.302 0-10.373 2.387-15.04 6.73l-6.641 27.11-14.373 16.45c-3.412 14.401-5.362 31.02-5.362 48.776a228.789 228.789 0 0 0 2.039 30.781c16.667-7.859 43.823-22.471 69.871-44.561a48.094 48.094 0 0 0 9.588-11.177c-4.62-42.619-20.812-74.109-40.082-74.109Z"
    />
    <path
      fill="#EDEEEF"
      d="M257.968 204.92s9.49 154.865-17.328 228.185l5.64 8.225h-47.687s-5.207-196.972-5.207-239.484l64.582 3.074ZM246.895 85.112v20.126l-24.933 6.124V77.4l24.933-6.125v13.837Z"
    />
    <path
      fill="#000"
      d="M232.815 92.073a.667.667 0 1 0 0-1.335.667.667 0 0 0 0 1.335ZM243.051 92.073a.668.668 0 1 0 0-1.335.668.668 0 0 0 0 1.335Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M240.048 95.382v-10.27h5.146M231.555 85.112h5.146"
    />
    <path
      fill="#EDEEEF"
      d="M223.608 90.376v3.568a3.487 3.487 0 0 1-3.488-3.488v-.315c.212-2.166 3.488-1.94 3.488.235Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M223.608 93.944a3.487 3.487 0 0 1-3.488-3.488"
    />
    <path
      stroke="#7070EF"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M237.82 97.915a3.526 3.526 0 0 1-3.525-3.525"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m246.896 105.238-24.933 6.124"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m240.048 95.391-2.251.555"
    />
    <path
      fill="#7070EF"
      d="M193.386 147.401v54.445l77.127 18.955v-60.63a46.71 46.71 0 0 0-35.556-45.355 33.557 33.557 0 0 0-28.715 6.18 33.55 33.55 0 0 0-12.856 26.41v-.005Z"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M257.969 204.92s9.489 154.865-17.329 228.185M225.069 87.655s4.23-.235 14.979-8.107v3.055s6.171-1.763 7.934-4.818"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M248.54 76.61s13.306-17.601-23.472-5.31l3.995-4.362s-19.622 6.354-8.107 21.713"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M246.529 89.728s4.869-6.538 2.914-14.528M200.62 126.581s-48.002 38.742-40.482 88.092c7.52 49.35 57.195 52.64 57.195 52.64l7.736-13.63-31.683-51.837 30.221-30.883M217.333 267.313l15.867-27.965M256.263 126.581s16.045 16.807 23.88 35.607"
    />
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M269.188 200.728s5.94 12.535 22.235 16.605c16.182 4.046 33.286-68.225-2.989-114.643a5.802 5.802 0 0 0-3.093-2.082c-2.242-.578-5.123.245-3.934 9.255 0 0-5.024-1.782-2.519 3.966s7.168 28.036-1.584 42.272"
    />
  </svg>
);

export const QuotesCheckBoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect width={16} height={16} fill="#7070FF" fillOpacity={0.8} rx={6} />
    <rect
      width={15}
      height={15}
      x={0.5}
      y={0.5}
      stroke="#000"
      strokeOpacity={0.6}
      rx={5.5}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.671 3.631a.5.5 0 0 1 .03.707l-7.332 8a.5.5 0 0 1-.723.016L2.313 9.02a.5.5 0 1 1 .707-.707l2.964 2.964 6.98-7.615a.5.5 0 0 1 .707-.03Z"
      clipRule="evenodd"
    />
  </svg>
);

export const QuotesCheckBoxUncheckedIconNo1 = (props: {
  themeColor: DoxleThemeColor;
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <rect
      width={14.8}
      height={14.8}
      x={0.6}
      y={0.6}
      stroke={props.themeColor.primaryDividerColor}
      strokeWidth={1.2}
      rx={5.4}
    />
  </svg>
);

export const QuotesCheckBoxUncheckedIconNo2 = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect
      width={15}
      height={15}
      x={0.5}
      y={0.5}
      stroke="#000"
      strokeOpacity={0.6}
      rx={5.5}
    />
  </svg>
);
export const AssignUserTagRemoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#7070FF"
        d="M3.816 21.491A12.5 12.5 0 1 1 21.185 3.508 12.5 12.5 0 0 1 3.816 21.491Zm10.588-8.837 3.537-3.538-1.762-1.762-3.525 3.537-3.538-3.537-1.762 1.762 3.537 3.538-3.537 3.537 1.762 1.763 3.538-3.538 3.537 3.538 1.763-1.763-3.538-3.537h-.012Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const RFIErrorList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={300}
    fill="none"
    {...props}
    style={{ marginBottom: 10 }}
  >
    <path
      fill="#727272"
      d="M171.875 25a28.125 28.125 0 0 1 27.95 25.025V50h22.05A28.126 28.126 0 0 1 250 78.125v65.6a80.652 80.652 0 0 0-18.75-5.275V78.125a9.376 9.376 0 0 0-9.375-9.375h-26.612c-5.05 7.537-13.638 12.5-23.388 12.5h-43.75c-9.75 0-18.338-4.963-23.388-12.5H78.125a9.375 9.375 0 0 0-9.375 9.375v168.75c0 5.175 4.2 9.375 9.375 9.375h68.525A81.49 81.49 0 0 0 160.125 275h-82A28.123 28.123 0 0 1 50 246.875V78.125A28.125 28.125 0 0 1 78.125 50h22.05a28.124 28.124 0 0 1 27.95-25h43.75Zm28.062 26.2.063 1.925c0-.65-.025-1.288-.063-1.925Zm-28.062-7.45h-43.75a9.375 9.375 0 0 0 0 18.75h43.75a9.375 9.375 0 0 0 0-18.75Zm115.625 175a68.752 68.752 0 0 1-68.75 68.75A68.752 68.752 0 0 1 150 218.75 68.752 68.752 0 0 1 218.75 150a68.752 68.752 0 0 1 68.75 68.75ZM218.75 175a6.245 6.245 0 0 0-4.419 1.831 6.245 6.245 0 0 0-1.831 4.419v50c0 1.658.658 3.247 1.831 4.419a6.245 6.245 0 0 0 8.838 0A6.245 6.245 0 0 0 225 231.25v-50a6.245 6.245 0 0 0-1.831-4.419A6.245 6.245 0 0 0 218.75 175Zm0 89.062a7.808 7.808 0 0 0 7.812-7.812 7.812 7.812 0 1 0-7.812 7.812Z"
    />
  </svg>
);
