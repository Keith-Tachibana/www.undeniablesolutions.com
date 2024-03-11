'use client';

import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import styles from './page.module.css';

import {
  Menu,
  Container,
  Image,
  Button,
  Divider,
  Segment,
  Dimmer,
  Dropdown,
  Loader
} from 'semantic-ui-react';

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [fixed, setFixed] = useState(null);
  const handleItemClick = (event, { name }) => setActiveItem(name);
  const toggleFixedMenu = InView => setFixed(!InView);

  return (
    <InView onChange={toggleFixedMenu}>
      <Menu
        fixed={fixed ? "top" : null}
        inverted
        stackable
        size="small"
        borderless
        className={styles.segmentStyle}
      >
        <Container text className={styles.menuUl}>
          <div className={styles.desktopMenu}>
            <Image
              as="a"
              href="/"
              size="medium"
              alt="Alt. logo"
              src="/assets/logos/header.png"
            />
            <Menu.Item
              as="a"
              href="/"
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              as="a"
              href="/"
              name="services"
              active={activeItem === "services"}
              onClick={handleItemClick}
            >
              Services
            </Menu.Item>
            <Menu.Item
              as="a"
              href="/"
              name="contact"
              active={activeItem === "contact"}
              onClick={handleItemClick}
            >
              Contact Us
            </Menu.Item>
            <Menu.Item
              as="a"
              href="/"
              name="about"
              active={activeItem === "about"}
              onClick={handleItemClick}
            >
              About
            </Menu.Item>
            <Menu.Item position="right">
              <Button as="a" href="/form" inverted color="green">
                Message Us!
              </Button>
            </Menu.Item>
          </div>
          <Menu.Menu className={styles.mobileMenu} position="right">
            <Image
              as="a"
              href="/"
              size="small"
              alt="Alt. logo"
              floated="left"
              src="/assets/logos/header.png"
            />
            <Dropdown icon="bars" size="huge" floated="right" inverted>
              <Dropdown.Menu>
                <Dropdown.Item
                  as="a"
                  href="/"
                  name="home"
                  active={activeItem === "home"}
                  onClick={handleItemClick}
                  className={styles.dropdownStyle}
                >
                  Home
                </Dropdown.Item>
                <Dropdown.Item
                  as="a"
                  href="/"
                  name="services"
                  active={activeItem === "services"}
                  onClick={handleItemClick}
                  className={styles.dropdownStyle}
                >
                  Services
                </Dropdown.Item>
                <Dropdown.Item
                  as="a"
                  href="/"
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={handleItemClick}
                  className={styles.dropdownStyle}
                >
                  Contact Us
                </Dropdown.Item>
                <Dropdown.Item
                  as="a"
                  href="/"
                  name="about"
                  active={activeItem === "about"}
                  onClick={handleItemClick}
                  className={styles.dropdownStyle}
                >
                  About
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button as="a" href="/form" inverted color="green">
                    Message Us!
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </InView>
  );
};
