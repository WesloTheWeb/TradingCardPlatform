import React from 'react';
import classes from './Header.module.scss';
import NavigationBar from '../NavigationBar/NavigationBar';

const { navContainer } = classes;

function Header() {
  return (
    <nav className={navContainer}>
      <h1>Trading Card Platform</h1>
      <NavigationBar />
    </nav>
  )
};

export default Header;