import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "./styles.module.css";

export function Sun() {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      className='light-toggle-icon'
    >
      <path
        fill='currentColor'
        d='M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z'
      ></path>
    </svg>
  );
}

export function Moon() {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      className='dark-toggle-icon'
    >
      <path
        fill='currentColor'
        d='M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z'
      ></path>
    </svg>
  );
}

export function Github() {
  return (
    <svg viewBox='0 0 1024 1024' width='24' height='24'>
      <path
        d='M855.552 216.864c35.616-66.144-5.088-152.672-5.088-152.672-91.584 0-157.76 61.056-157.76 61.056-35.616-20.352-152.672-20.352-152.672-20.352s-117.056 0-152.672 20.352c0 0-66.144-61.056-157.76-61.056 0 0-40.704 86.496-5.088 152.672 0 0-81.408 76.32-50.88 239.168 28.704 153.024 162.848 193.376 249.344 193.376 0 0-35.616 30.528-30.528 81.408 0 0-50.88 30.528-101.76 10.176s-76.32-71.232-76.32-71.232-50.88-66.144-101.76-40.704c0 0-15.264 15.264 40.704 40.704 0 0 40.704 61.056 55.968 96.672s96.672 66.144 178.112 45.792v117.024s0 10.176-20.352 15.264-20.352 15.264-10.176 15.264h366.4c10.176 0 10.176-10.176-10.176-15.264s-20.352-15.264-20.352-15.264V812.224s0.448-61.024 0-81.408c-1.12-51.136-35.616-81.408-35.616-81.408 86.496 0 220.64-40.352 249.344-193.376 30.528-162.848-50.88-239.168-50.88-239.168z'
        fill='currentColor'
      ></path>
    </svg>
  );
}

export function Twitter() {
  return (
    <svg viewBox='0 0 1024 1024' width='24' height='24'>
      <path
        d='M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z'
        fill='currentColor'
      ></path>
    </svg>
  );
}

export function RSS() {
  return (
    <svg viewBox='0 0 1024 1024' width='24' height='24'>
      <path
        fill='currentColor'
        d='M320.16155 831.918c0 70.738-57.344 128.082-128.082 128.082S63.99955 902.656 63.99955 831.918s57.344-128.082 128.082-128.082 128.08 57.346 128.08 128.082z m351.32 94.5c-16.708-309.2-264.37-557.174-573.9-573.9C79.31155 351.53 63.99955 366.21 63.99955 384.506v96.138c0 16.83 12.98 30.944 29.774 32.036 223.664 14.568 402.946 193.404 417.544 417.544 1.094 16.794 15.208 29.774 32.036 29.774h96.138c18.298 0.002 32.978-15.31 31.99-33.58z m288.498 0.576C943.19155 459.354 566.92955 80.89 97.00555 64.02 78.94555 63.372 63.99955 77.962 63.99955 96.032v96.136c0 17.25 13.67 31.29 30.906 31.998 382.358 15.678 689.254 322.632 704.93 704.93 0.706 17.236 14.746 30.906 31.998 30.906h96.136c18.068-0.002 32.658-14.948 32.01-33.008z'
      ></path>
    </svg>
  );
}

export const LoadingIcon = (props: HTMLAttributes<HTMLOrSVGElement>) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={clsx(styles.loadingIcon, className)}
      {...rest}
      viewBox='0 0 24 24'
    >
      <defs>
        <linearGradient
          x1='28.1542969%'
          y1='63.7402344%'
          x2='74.6289062%'
          y2='17.7832031%'
          id='linearGradient-1'
        >
          <stop stopColor='rgba(164, 164, 164, 1)' offset='0%' />
          <stop
            stopColor='rgba(164, 164, 164, 0)'
            stopOpacity='0'
            offset='100%'
          />
        </linearGradient>
      </defs>

      <g id='Page-1' stroke='none' strokeWidth='1' fill='none'>
        <g transform='translate(-236.000000, -286.000000)'>
          <g transform='translate(238.000000, 286.000000)'>
            <circle
              id='Oval-2'
              stroke='url(#linearGradient-1)'
              strokeWidth='4'
              cx='10'
              cy='12'
              r='10'
            />
            <path
              d='M10,2 C4.4771525,2 0,6.4771525 0,12'
              id='Oval-2'
              stroke='rgba(164, 164, 164, 1)'
              strokeWidth='4'
            />
            <rect
              id='Rectangle-1'
              fill='rgba(164, 164, 164, 1)'
              x='8'
              y='0'
              width='4'
              height='4'
              rx='8'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
