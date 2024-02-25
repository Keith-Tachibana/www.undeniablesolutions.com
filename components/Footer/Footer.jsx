'use client';

import { Suspense } from 'react';
import styles from './page.module.css';

import {
  Grid,
  Segment,
  Image,
  Icon,
  Container,
  Dimmer,
  Loader
} from 'semantic-ui-react';

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <Segment inverted vertical className={styles.segmentStyle}>
      <Suspense
        fallback={
          <Dimmer active>
            <Loader size="large">Loading...</Loader>
          </Dimmer>
        }
      >
        <Container textAlign="center">
          <Grid columns="equal" inverted stackable>
            <Grid.Row>
              <Grid.Column>
                <Image
                  centered
                  as="a"
                  href="/"
                  src="/assets/logos/undeniable-files.svg"
                  alt="Alt logo"
                  size="tiny"
                />
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="middle">
                <p className={styles.paragraphText}>
                  &copy; {getYear} Undeniable Solutions, LLC
                </p>
              </Grid.Column>
              <Grid.Column>
                <a
                  href="mailto:webmaster@undeniablesolutions.com"
                  target="_blank"
                >
                  <Icon
                    className={styles.footer}
                    link
                    circular
                    inverted
                    name="mail"
                    size="big"
                    color="green"
                  />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Suspense>
    </Segment>
  );
};
