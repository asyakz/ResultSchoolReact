import React from 'react';
import './footerNav.scss';

const FooterNav = () => {
  return (
    <div className='footer-nav'>
      <ul className='footer-nav__list nav'>
        <li className='footer-nav__item'>
          <a className='footer-nav__link' href='https://vk.com/jewelry_asyakz'>
            <svg
              width='45'
              height='45'
              viewBox='0 0 45 45'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22.5 0C10.074 0 0 10.0736 0 22.5C0 34.9264 10.074 45 22.5 45C34.926 45 45 34.9264 45 22.5C45 10.0736 34.926 0 22.5 0ZM33.9132 24.9335C34.9619 25.9577 36.0714 26.9217 37.0128 28.0519C37.4299 28.5519 37.823 29.0688 38.1222 29.6503C38.5495 30.4794 38.1637 31.3886 37.4216 31.4379L32.812 31.4369C31.6215 31.5354 30.6741 31.0553 29.8754 30.2414C29.2378 29.5927 28.6462 28.8999 28.0321 28.2292C27.7812 27.9539 27.517 27.6947 27.2021 27.4907C26.5737 27.0819 26.0277 27.2072 25.6677 27.8636C25.3008 28.5316 25.217 29.2719 25.182 30.0153C25.1319 31.1022 24.8041 31.3863 23.7135 31.4374C21.3832 31.5465 19.1721 31.1929 17.117 30.0181C15.3041 28.9818 13.901 27.5193 12.6783 25.8634C10.2973 22.6353 8.47381 19.0924 6.8354 15.4478C6.46665 14.627 6.73642 14.1878 7.64194 14.1707C9.14639 14.1417 10.6508 14.1454 12.1553 14.1694C12.7676 14.179 13.1727 14.5294 13.4079 15.1071C14.2209 17.1074 15.2176 19.0105 16.4665 20.7755C16.7994 21.2455 17.1391 21.7142 17.623 22.0461C18.157 22.4125 18.5639 22.2915 18.8158 21.6953C18.9769 21.3164 19.0464 20.9113 19.0814 20.5053C19.2011 19.1145 19.2153 17.7242 19.0082 16.339C18.8793 15.4722 18.3918 14.9124 17.5277 14.7485C17.0876 14.6652 17.152 14.5022 17.3661 14.2508C17.7376 13.8163 18.0856 13.5474 18.7812 13.5474L23.9893 13.5465C24.8101 13.7076 24.9942 14.0759 25.1056 14.9027L25.1102 20.6903C25.1006 21.0103 25.2709 21.9586 25.8454 22.1681C26.3058 22.32 26.6096 21.9508 26.8849 21.6594C28.1339 20.334 29.0237 18.7697 29.8206 17.1506C30.1723 16.4366 30.4757 15.6978 30.7703 14.9575C30.9895 14.4101 31.3301 14.1408 31.9479 14.15L36.9631 14.156C37.1108 14.156 37.2609 14.1574 37.4073 14.1827C38.2525 14.3273 38.4841 14.6909 38.2226 15.5154C37.811 16.8109 37.0114 17.89 36.2297 18.9718C35.3919 20.1301 34.4983 21.2478 33.6687 22.4111C32.9064 23.4746 32.9667 24.01 33.9132 24.9335Z'
                fill='#CACACA'
              />
            </svg>
          </a>
        </li>
        <li className='footer-nav__item'>
          <a className='footer-nav__link' href='https://livemaster.ru/asyakz'>
            <svg
              width='45'
              height='45'
              viewBox='0 0 45 45'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z'
                fill='#CACACA'
              />
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M34.17 25.26L40 22L34.17 18.74L37.59 13L30.91 13.09L31 6.41L25.26 9.83L22 4L18.74 9.83L13 6.41L13.09 13.09L6.41 13L9.83 18.74L4 22L9.83 25.26L6.41 31L13.09 30.91L13 37.59L18.74 34.17L22 40L25.26 34.17L31 37.59L30.91 30.91L37.59 31L34.17 25.26ZM29.82 35.54L24.82 32.54L22 37.64L19.17 32.58L14.17 35.58L14.25 29.78L8.45 29.86L11.45 24.86L6.36 22L11.43 19.17L8.43 14.17L14.23 14.25L14.15 8.45L19.15 11.45L22 6.36L24.83 11.42L29.83 8.42L29.75 14.22L35.55 14.14L32.55 19.14L37.64 22L32.58 24.83L35.58 29.83L29.78 29.75L29.82 35.54ZM31 20.29C30.6657 20.1808 30.3589 20.0006 30.1007 19.7618C29.8426 19.5229 29.6391 19.2311 29.5042 18.9063C29.3693 18.5814 29.3063 18.2313 29.3194 17.8798C29.3324 17.5284 29.4214 17.1839 29.58 16.87C29.7947 16.5451 29.9238 16.1713 29.9552 15.7831C29.9867 15.395 29.9195 15.0052 29.76 14.65C29.33 13.97 28.38 13.88 27.16 14.46C26.8109 14.6295 26.4281 14.7183 26.04 14.72C25.5189 14.7197 25.0115 14.5526 24.5922 14.2431C24.1729 13.9336 23.8638 13.4979 23.71 13C23.2 11.57 22.5 11.27 22 11.27C21.5 11.27 20.8 11.57 20.29 13C20.1366 13.4896 19.8327 13.9184 19.4216 14.2254C19.0104 14.5324 18.513 14.7019 18 14.71C17.6119 14.7087 17.229 14.6198 16.88 14.45C15.66 13.87 14.71 13.97 14.28 14.64C14.1205 14.9952 14.0533 15.385 14.0848 15.7731C14.1162 16.1613 14.2453 16.5351 14.46 16.86C14.6198 17.1769 14.7085 17.5249 14.7199 17.8796C14.7313 18.2344 14.6652 18.5874 14.5262 18.9139C14.3872 19.2405 14.1786 19.5328 13.915 19.7705C13.6514 20.0081 13.3392 20.1854 13 20.29C11.57 20.8 11.27 21.5 11.27 22C11.27 22.5 11.57 23.2 13 23.71C13.3343 23.8192 13.6411 23.9994 13.8993 24.2382C14.1574 24.4771 14.3609 24.7689 14.4958 25.0937C14.6307 25.4186 14.6937 25.7687 14.6806 26.1202C14.6676 26.4716 14.5786 26.8161 14.42 27.13C14.2053 27.4549 14.0762 27.8287 14.0448 28.2169C14.0133 28.605 14.0805 28.9948 14.24 29.35C14.67 30.03 15.62 30.12 16.84 29.54C17.2022 29.3684 17.5992 29.2828 18 29.29C18.513 29.2981 19.0104 29.4676 19.4216 29.7746C19.8327 30.0816 20.1366 30.5104 20.29 31C20.8 32.43 21.5 32.73 22 32.73C22.5 32.73 23.2 32.43 23.71 31C23.8634 30.5104 24.1673 30.0816 24.5784 29.7746C24.9895 29.4676 25.487 29.2981 26 29.29C26.3881 29.292 26.7707 29.3808 27.12 29.55C28.34 30.13 29.29 30.03 29.72 29.36C29.8795 29.0048 29.9467 28.615 29.9152 28.2269C29.8838 27.8387 29.7547 27.4649 29.54 27.14C29.3802 26.8231 29.2916 26.4751 29.2801 26.1204C29.2687 25.7656 29.3348 25.4126 29.4738 25.0861C29.6128 24.7595 29.8214 24.4672 30.085 24.2295C30.3486 23.9919 30.6608 23.8146 31 23.71C32.43 23.2 32.73 22.5 32.73 22C32.73 21.5 32.39 20.8 31 20.29ZM30.6 22.58C30.1083 22.7456 29.6579 23.0146 29.279 23.369C28.9001 23.7234 28.6015 24.1549 28.4035 24.6344C28.2054 25.1139 28.1124 25.6303 28.1308 26.1487C28.1492 26.6672 28.2785 27.1757 28.51 27.64C28.85 28.35 28.79 28.64 28.76 28.71C28.7108 28.7223 28.6592 28.7223 28.61 28.71C28.2874 28.6875 27.9736 28.5953 27.69 28.44C27.1612 28.1946 26.5828 28.0748 26 28.09C25.2433 28.0926 24.5065 28.3323 23.893 28.7753C23.2796 29.2184 22.8204 29.8425 22.58 30.56C22.32 31.29 22.05 31.48 22 31.49C21.95 31.5 21.68 31.29 21.42 30.56C21.1796 29.8425 20.7204 29.2184 20.107 28.7753C19.4935 28.3323 18.7567 28.0926 18 28.09C17.4351 28.0933 16.8781 28.2231 16.37 28.47C16.0864 28.6253 15.7726 28.7175 15.45 28.74C15.4007 28.7515 15.3493 28.7515 15.3 28.74C15.3 28.74 15.21 28.38 15.55 27.67C15.7815 27.2057 15.9108 26.6972 15.9292 26.1787C15.9476 25.6603 15.8546 25.1439 15.6565 24.6644C15.4585 24.1849 15.1599 23.7534 14.781 23.399C14.4021 23.0446 13.9517 22.7756 13.46 22.61C12.72 22.35 12.53 22.08 12.53 22.03C12.53 21.98 12.72 21.71 13.46 21.45C13.9517 21.2844 14.4021 21.0154 14.781 20.661C15.1599 20.3066 15.4585 19.8751 15.6565 19.3956C15.8546 18.9161 15.9476 18.3997 15.9292 17.8813C15.9108 17.3628 15.7815 16.8543 15.55 16.39C15.21 15.68 15.27 15.39 15.3 15.32C15.3493 15.3081 15.4007 15.3081 15.45 15.32C15.7724 15.3432 16.0862 15.4352 16.37 15.59C16.8781 15.8369 17.4351 15.9667 18 15.97C18.7567 15.9674 19.4935 15.7277 20.107 15.2847C20.7204 14.8416 21.1796 14.2175 21.42 13.5C21.68 12.76 21.95 12.57 22 12.57C22.05 12.57 22.32 12.76 22.58 13.5C22.8305 14.2063 23.294 14.8174 23.9066 15.2491C24.5192 15.6808 25.2506 15.9117 26 15.91C26.5642 15.9102 27.1212 15.7837 27.63 15.54C27.9137 15.3849 28.2275 15.2929 28.55 15.27C28.5993 15.2581 28.6507 15.2581 28.7 15.27C28.7 15.27 28.79 15.63 28.45 16.34C28.2185 16.8043 28.0892 17.3128 28.0708 17.8313C28.0524 18.3497 28.1454 18.8661 28.3435 19.3456C28.5415 19.8251 28.8401 20.2566 29.219 20.611C29.5979 20.9654 30.0483 21.2344 30.54 21.4C31.28 21.66 31.47 21.93 31.47 21.98C31.47 22.03 31.3 22.32 30.56 22.58H30.6ZM22 16.41C20.8944 16.41 19.8136 16.7378 18.8944 17.3521C17.9751 17.9663 17.2586 18.8394 16.8355 19.8608C16.4124 20.8822 16.3017 22.0062 16.5174 23.0906C16.7331 24.1749 17.2655 25.1709 18.0473 25.9527C18.829 26.7345 19.8251 27.2669 20.9094 27.4826C21.9938 27.6983 23.1178 27.5876 24.1392 27.1645C25.1606 26.7414 26.0337 26.0249 26.6479 25.1056C27.2622 24.1864 27.59 23.1056 27.59 22C27.5874 20.5183 26.9976 19.0979 25.9498 18.0502C24.9021 17.0024 23.4817 16.4126 22 16.41ZM22 26.41C21.1206 26.41 20.261 26.1488 19.5302 25.6596C18.7994 25.1704 18.2303 24.4752 17.8952 23.6621C17.56 22.8491 17.4739 21.9548 17.6476 21.0927C17.8214 20.2306 18.2473 19.4396 18.8712 18.8198C19.4952 18.2001 20.2891 17.7796 21.1523 17.6117C22.0156 17.4438 22.9092 17.536 23.72 17.8766C24.5308 18.2173 25.2221 18.7911 25.7064 19.5251C26.1906 20.2592 26.4459 21.1206 26.44 22C26.4374 23.1768 25.9687 24.3045 25.1366 25.1366C24.3045 25.9687 23.1768 26.4374 22 26.44V26.41Z'
                fill='202020'
              />
            </svg>
          </a>
        </li>
        <li className='footer-nav__item'>
          <a className='footer-nav__link' href='http://www.facebook.com/asyakz'>
            <svg
              width='45'
              height='45'
              viewBox='0 0 45 45'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22.5 0C10.125 0 0 10.1431 0 22.6355C0 33.9307 8.23499 43.3057 18.99 45V29.1867H13.275V22.6355H18.99V17.6431C18.99 11.9729 22.3425 8.85542 27.495 8.85542C29.9475 8.85542 32.5125 9.28464 32.5125 9.28464V14.8645H29.6775C26.8875 14.8645 26.01 16.6039 26.01 18.3886V22.6355H32.265L31.2525 29.1867H26.01V45C31.312 44.1593 36.1399 41.4432 39.6223 37.342C43.1047 33.2408 45.012 28.0248 44.9999 22.6355C44.9999 10.1431 34.875 0 22.5 0Z'
                fill='#CACACA'
              />
            </svg>
          </a>
        </li>
        <li className='footer-nav__item'>
          <a
            className='footer-nav__link instagram'
            href='http://instagram.com/asya_kazantseva'
          >
            <svg
              width='45'
              height='45'
              viewBox='0 0 45 45'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_5_139)'>
                <path
                  d='M18.1172 22.5C18.1172 24.8785 20.0453 26.8066 22.4238 26.8066C24.8024 26.8066 26.7305 24.8785 26.7305 22.5C26.7305 20.1215 24.8024 18.1934 22.4238 18.1934C20.0453 18.1934 18.1172 20.1215 18.1172 22.5Z'
                  fill='#CACACA'
                />
                <path
                  d='M12.3521 14.8801C12.5591 14.3191 12.8894 13.8113 13.3185 13.3945C13.7353 12.9654 14.2428 12.6351 14.8041 12.4281C15.2593 12.2513 15.9432 12.0408 17.2029 11.9835C18.5655 11.9213 18.9741 11.908 22.4238 11.908C25.8738 11.908 26.2824 11.921 27.6447 11.9831C28.9044 12.0408 29.5886 12.2513 30.0435 12.4281C30.6048 12.6351 31.1126 12.9654 31.5291 13.3945C31.9582 13.8113 32.2885 14.3188 32.4959 14.8801C32.6727 15.3354 32.8831 16.0196 32.9405 17.2792C33.0026 18.6415 33.016 19.0501 33.016 22.5002C33.016 25.9499 33.0026 26.3584 32.9405 27.7211C32.8831 28.9807 32.6727 29.6646 32.4959 30.1199C32.2885 30.6812 31.9586 31.1886 31.5294 31.6054C31.1126 32.0346 30.6052 32.3648 30.0438 32.5719C29.5886 32.749 28.9044 32.9595 27.6447 33.0168C26.2824 33.079 25.8742 33.092 22.4241 33.092C18.9737 33.092 18.5652 33.079 17.2032 33.0168C15.9436 32.9595 15.2593 32.749 14.8041 32.5719C13.6773 32.1372 12.7867 31.2466 12.3521 30.1199C12.1753 29.6646 11.9648 28.9807 11.9071 27.7211C11.845 26.3584 11.8319 25.9499 11.8319 22.5002C11.8319 19.0501 11.845 18.6415 11.9071 17.2792C11.9645 16.0196 12.1749 15.3354 12.3521 14.8801ZM22.4238 29.1342C26.0881 29.1342 29.0585 26.1641 29.0585 22.4998C29.0585 18.8355 26.0881 15.8654 22.4238 15.8654C18.7599 15.8654 15.7894 18.8355 15.7894 22.4998C15.7894 26.1641 18.7599 29.1342 22.4238 29.1342ZM15.5271 17.1536C16.3834 17.1536 17.0776 16.4594 17.0776 15.6031C17.0776 14.7469 16.3834 14.0527 15.5271 14.0527C14.6709 14.0527 13.9767 14.7469 13.9767 15.6031C13.977 16.4594 14.6709 17.1536 15.5271 17.1536Z'
                  fill='#CACACA'
                />
                <path
                  d='M22.6204 0C34.9364 0 44.9238 9.98747 44.9238 22.3034C44.9238 34.6194 34.9364 44.6069 22.6204 44.6069C10.3044 44.6069 0.316959 34.6194 0.316959 22.3034C0.316959 9.98747 10.3044 0 22.6204 0ZM9.89059 27.5836C9.95253 28.9469 10.1693 29.8777 10.4858 30.6924C11.1512 32.4127 12.5111 33.7727 14.2314 34.438C15.0458 34.7545 15.9769 34.971 17.3399 35.0332C18.7057 35.0955 19.1419 35.1105 22.6201 35.1105C26.0985 35.1105 26.5345 35.0955 27.9005 35.0332C29.2635 34.971 30.1946 34.7545 31.009 34.438C31.8639 34.1164 32.6378 33.6124 33.2776 32.9607C33.929 32.3212 34.433 31.547 34.7546 30.6924C35.0711 29.878 35.2879 28.9469 35.3498 27.5839C35.4128 26.2178 35.4274 25.7815 35.4274 22.3034C35.4274 18.8253 35.4128 18.389 35.3502 17.0233C35.2883 15.66 35.0718 14.7292 34.7553 13.9145C34.4337 13.0599 33.9293 12.2857 33.2776 11.6462C32.6382 10.9945 31.8639 10.4905 31.0094 10.1689C30.1946 9.85236 29.2638 9.63592 27.9005 9.57364C26.5348 9.51136 26.0985 9.49638 22.6204 9.49638C19.1423 9.49638 18.706 9.51136 17.3403 9.57398C15.9769 9.63592 15.0462 9.85236 14.2314 10.1685C13.3769 10.4901 12.6026 10.9945 11.9628 11.6462C11.3114 12.286 10.8071 13.0599 10.4858 13.9145C10.169 14.7292 9.95253 15.66 9.89025 17.0233C9.82798 18.389 9.81334 18.8253 9.81334 22.3034C9.81334 25.7815 9.82798 26.2178 9.89059 27.5836Z'
                  fill='#CACACA'
                />
              </g>
              <defs>
                <clipPath id='clip0_5_139'>
                  <rect
                    width='45'
                    height='45'
                    fill='white'
                    transform='matrix(-1 0 0 1 45 0)'
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNav;
