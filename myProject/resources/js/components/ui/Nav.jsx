import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import styles from '../Nav.module.css';

export default function Nav() {
  const { url, props } = usePage();

  // Assume profile image URL is available as `props.auth.user.profile_photo_url`
  const defaultAvatar = 'profile.png'; // you should have this in your public folder
  const [profileImage, setProfileImage] = useState(defaultAvatar);

  useEffect(() => {
    if (props.auth?.user?.profile_photo_url) {
      setProfileImage(props.auth.user.profile_photo_url);
    }
  }, [props]);

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
        style={{ marginLeft: 'auto' }}
      >
        <a href="/cart">🛒Your Cart</a>
      </li>
      <li
        className={`${styles.navItem} ${url === '/profile' ? styles.active : ''}`}
      >
        <a href="/profile" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={profileImage}
            alt="Profile"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          Profile
        </a>
      </li>
    </ul>
  );
}
