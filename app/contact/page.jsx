'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

import {
  Grid,
  Container,
  Header
} from 'semantic-ui-react';

const Contact = () => {
  return (
    <Grid container>
      <Header as="h1">Contact Us</Header>
    </Grid>
  );
};

export default Contact;
