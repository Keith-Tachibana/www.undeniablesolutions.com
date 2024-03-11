'use client';

import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import styles from './page.module.css';

import {
  Grid,
  Icon,
  Divider,
  Image
} from 'semantic-ui-react';

const MainHeader = () => {
  return (
    <Grid stackable className={styles.mainHeaderBG}>
      <Grid.Row>
        <Grid.Column >
          <div className={styles.headerStyle1}>
            <Typewriter
              options={{
                strings: ['Undeniable Solutions'],
                loop: true,
                autoStart: true,
                delay: 50,
                pauseFor: 1500
              }}
            />
          </div>
          <Divider horizontal className={styles.dividerStyle}>
            <Link href="tel:18086403346" rel="noopener noreferrer" className={styles.phoneStyle}>
              <Icon link name="phone" inverted color="black" size="big" />
              808-640-3346
            </Link>
            <Image src="/assets/logos/undeniable-files-2.png" size="medium" alt="Undeniable Solutions logo" className={styles.imageStyle} />
          </Divider>
          <div className={styles.headerStyle2}>
              <Typewriter
                options={{
                  strings: ['Hilo, Hawaii'],
                  loop: true,
                  autoStart: true,
                  delay: 50,
                  pauseFor: 1500
                }}
              />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MainHeader;
