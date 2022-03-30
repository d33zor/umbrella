import * as React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const LogoSmall = ({ width, height }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width || '50'}
    height={height || '50'}
    viewBox='0 0 48 47'
    fill='none'
    aria-hidden='true'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M57.5986 3.74805V14.5879C58.445 13.7741 59.389 13.1312 60.4307 12.6592C61.4723 12.1872 62.514 11.9512 63.5557 11.9512C65.9645 11.9512 68.1781 12.4964 70.1963 13.5869C72.2145 14.6611 73.8177 16.1829 75.0059 18.1523C76.2103 20.1055 76.8125 22.2865 76.8125 24.6953C76.8125 27.1042 76.2103 29.2933 75.0059 31.2627C73.8177 33.2158 72.2145 34.7376 70.1963 35.8281C68.1781 36.9023 65.9645 37.4395 63.5557 37.4395C61.2445 37.4395 59.2588 36.6908 57.5986 35.1934V37H50.7627V3.74805H57.5986ZM57.5986 20.6914V29.1387C59.1774 31.1081 61.1631 32.0928 63.5557 32.0928C65.3298 32.0928 66.8271 31.3929 68.0479 29.9932C69.2848 28.5771 69.9033 26.8112 69.9033 24.6953C69.9033 22.5794 69.2848 20.8216 68.0479 19.4219C66.8271 18.0059 65.3298 17.2979 63.5557 17.2979C61.1794 17.2979 59.1937 18.429 57.5986 20.6914ZM9.86914 14.5391V12.3906H3.00879V37H9.86914V20.6914C10.569 19.5684 11.3909 18.722 12.335 18.1523C13.2952 17.5827 14.3044 17.2979 15.3623 17.2979C16.3389 17.2979 17.1771 17.4769 17.877 17.835C18.5768 18.193 19.1058 18.6813 19.4639 19.2998C19.8382 19.9183 20.1068 20.5775 20.2695 21.2773C20.4323 21.9772 20.5137 22.7503 20.5137 23.5967V35.9405C20.6694 35.9794 20.8323 36 21 36C22.1046 36 23 35.1046 23 34V15.1743C22.779 14.9037 22.5455 14.65 22.2994 14.4134C22.3671 14.466 22.4357 14.5205 22.5052 14.577L22.4167 14.4853L22.343 14.4202L22.1841 14.3047C22.2228 14.3405 22.2612 14.3768 22.2994 14.4134C19.9809 12.6167 18.6192 13.1557 16.5 15.9999C14.4671 12.7475 13.1399 12.3355 10 14.5L10.0703 14.3874L9.92528 14.4816L9.92527 14.4799L9.89407 14.5126L9.86914 14.5391ZM25 15.5998V35C25 36.1046 24.1046 37 23 37H27.4473V21.0576C28.0332 19.9346 28.8389 19.0312 29.8643 18.3477C30.9059 17.6478 32.0046 17.2979 33.1602 17.2979C34.7552 17.2979 35.9678 17.957 36.7979 19.2754C37.6442 20.5775 38.0674 22.1888 38.0674 24.1094V37H44.9521V22.5469C44.9521 19.6571 44.1206 17.2717 42.4574 15.3908L41.9934 14.9803L42 15C41.9746 14.9727 41.9493 14.9457 41.9241 14.9189L40.7539 13.8836C40.6304 13.8 40.5042 13.7191 40.3754 13.6409L39.8016 13.3422C38.4206 12.8757 37.0624 13.6937 35 16C33.5309 12.8659 31.3943 12.7033 25.4277 15.3113L25 15.5998ZM-9.95508 34.8516V37H-3.09473V12.3906H-9.95508V28.6992C-10.7038 29.8223 -11.5827 30.6768 -12.5918 31.2627C-13.6009 31.8486 -14.667 32.1416 -15.79 32.1416C-17.4665 32.1416 -18.7686 31.515 -19.6963 30.2617C-20.624 29.0085 -21.0879 27.4378 -21.0879 25.5498V12.3906H-27.9482V25.5498C-27.9482 27.7796 -27.4762 29.7897 -26.5322 31.5801C-25.5719 33.3542 -24.1641 34.7783 -22.3086 35.8525C-20.4368 36.9105 -18.264 37.4395 -15.79 37.4395C-14.7972 37.4395 -13.7881 37.2116 -12.7627 36.7559C-11.721 36.3001 -10.7852 35.6654 -9.95508 34.8516ZM88.7754 14.5391V12.3906H81.915V37H88.7754V20.6426C89.5404 19.5846 90.4355 18.7627 91.4609 18.1768C92.5026 17.5908 93.5687 17.2979 94.6592 17.2979C95.8473 17.2979 96.9622 17.3792 98.0039 17.542V12.1953C96.9622 12.0326 95.8636 11.9512 94.708 11.9512C93.6989 11.9512 92.6654 12.1872 91.6074 12.6592C90.5495 13.1149 89.6055 13.7415 88.7754 14.5391ZM126.3 25.8428H107.184C107.281 27.5843 108.046 29.0573 109.479 30.2617C110.911 31.4499 112.799 32.0439 115.143 32.0439C118.658 32.0439 121.905 31.043 124.884 29.041V34.1924C123.94 35.1038 122.524 35.8607 120.636 36.4629C118.764 37.0488 116.803 37.3418 114.752 37.3418C112.099 37.3418 109.69 36.7884 107.525 35.6816C105.361 34.5586 103.652 33.0042 102.398 31.0186C101.161 29.0329 100.543 26.8112 100.543 24.3535C100.576 20.8379 101.853 17.8919 104.376 15.5156C106.915 13.1393 110.056 11.9512 113.8 11.9512C115.606 11.9512 117.34 12.3581 119 13.1719C120.66 13.9694 122.052 15.0192 123.175 16.3213C124.314 17.6071 125.177 19.0964 125.763 20.7891C126.349 22.4818 126.528 24.1663 126.3 25.8428ZM107.501 21.3994H119.83C119.765 20.2438 119.146 19.2754 117.975 18.4941C116.803 17.6966 115.411 17.2979 113.8 17.2979C112.091 17.2979 110.634 17.6885 109.43 18.4697C108.242 19.2347 107.599 20.2113 107.501 21.3994ZM131.964 37H138.824V3.74805H131.964V37ZM152.252 37H145.392V3.74805H152.252V37ZM173.565 34.8516V37H180.523C180.523 35.4049 180.515 33.0205 180.499 29.8467C180.483 26.6729 180.475 24.2884 180.475 22.6934C180.475 15.5319 175.974 11.9512 166.974 11.9512C165.688 11.9512 164.329 12.1221 162.896 12.4639C161.48 12.7894 160.203 13.2695 159.063 13.9043V19.4951C160.87 18.193 163.344 17.4443 166.485 17.249C168.748 17.249 170.424 17.5827 171.515 18.25C172.621 18.9173 173.272 20.0648 173.468 21.6924H164.972C162.791 21.6924 160.927 22.376 159.381 23.7432C157.835 25.1104 157.062 26.86 157.062 28.9922C157.062 30.1641 157.273 31.2383 157.696 32.2148C158.119 33.1751 158.681 33.9727 159.381 34.6074C160.081 35.2422 160.886 35.7793 161.798 36.2188C162.709 36.6582 163.637 36.9674 164.581 37.1465C165.541 37.3418 166.502 37.4395 167.462 37.4395C169.757 37.4395 171.791 36.5768 173.565 34.8516ZM167.828 26.3555H173.565V29.1387C172.166 31.1081 170.416 32.0928 168.316 32.0928C167.063 32.0928 165.956 31.8486 164.996 31.3604C164.052 30.8721 163.58 30.1152 163.58 29.0898C163.58 28.2435 163.979 27.5762 164.776 27.0879C165.574 26.5996 166.591 26.3555 167.828 26.3555Z'
      fill='black'
    />
  </svg>
);

export default LogoSmall;
