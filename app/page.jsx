'use client';

import React, { Component } from 'react';
import MainHeader from '@/components/MainHeader/MainHeader';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

import {
  Grid,
  Container,
  Segment,
  Button,
  Divider,
  List,
  ListItem,
  ListContent,
  Header,
  Rail,
  Icon
} from 'semantic-ui-react';

const images = [
  '/assets/images/landscaping-01.png',
  '/assets/images/landscaping-02.png',
  '/assets/images/landscaping-03.png',
  '/assets/images/landscaping-04.png',
  '/assets/images/landscaping-05.png'
];

export default class Home extends Component {
  render() {
    return (
      <main>
        <MainHeader />
        <Grid container doubling stackable >
          <Grid.Row>
            <Grid.Column className={styles.gridStyle}>
              <Segment compact size="large" inverted textAlign="left">
                What services do we offer?
              </Segment>
              <List inverted className={styles.listStyle}>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Trimming</Segment>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Pruning</Segment>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Planting</Segment>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Maintenance</Segment>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Design</Segment>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Gardening</Segment>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Mowing</Segment>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListContent>
                    <Segment size="big" compact inverted color="brown">Cleaning</Segment>
                  </ListContent>
                </ListItem>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container>
          <Grid stackable inverted padded>
            <Grid.Row textAlign="center">
              <Grid.Column className={styles.paddingStyle}>
                <Header
                  as="h2"
                  textAlign="center"
                  className={styles.mainSubheader}
                >
                  Any questions?
                </Header>
                <Button
                  as="a"
                  href="/contact"
                  color="green"
                  size="huge"
                  className={styles.mainBottomButton}
                >
                  Contact Us
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </main>
    );
  }
};
