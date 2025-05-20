import React from 'react';
import { usePage } from '@inertiajs/react';
import styles from '../Nav.module.css';

export default function Nav() {
  const { url } = usePage();

  return (
    <ul className={styles.navbar}>
      <li className={`${styles.navItem} ${url === '/' ? styles.active : ''}`}>
        <a href="/">Home</a>
      </li>
      <li className={`${styles.navItem} ${url === '/about' ? styles.active : ''}`}>
        <a href="/about">About</a>
      </li>
      <li className={`${styles.navItem} ${url === '/products' ? styles.active : ''}`}>
        <a href="/products">Product</a>
      </li>
      <li
        className={`${styles.navItem} ${url === '/cart' ? styles.active : ''}`}
        style={{ marginLeft: 'auto' }} // keeps the cart to the right
      >
        <a href="/cart">🛒Your Cart</a>
      </li>
      <li
        className={`${styles.navItem} ${url === '/cart' ? styles.active : ''}`}
        style={{ marginLeft: 'auto' }} // keeps the cart to the right
      >
        <a href="/cart"> <img src="" alt="" srcset="" />  Profile</a>
      </li>
    </ul>
  );
}
