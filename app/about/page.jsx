'use client';

import { Suspense } from 'react';
import styles from './page.module.css';

import {
  Header,
  Segment,
  Grid,
  Container,
  Button,
  Dimmer,
  Loader
} from 'semantic-ui-react';

export default function About() {

  return (
    <>
      <br />
      <br />
      <br />
      <Header as="h2" inverted color="teal" textAlign="center">
        <b className="aboutHeader">BizBolt Overview</b>
      </Header>
      <br />
      <br />
      <br />
        <Suspense fallback={<Dimmer active><Loader size="large">Loading...</Loader></Dimmer>}>
          <Container>
            <Grid>


              <Grid.Row stretched>
                <Grid.Column>
                  <p className="paragraph-text">
                    Welcome to BizBolt, a leading revenue operations
                    consultancy that drives growth and maximizes revenue for
                    businesses. Our expert consultants employ a data-driven
                    approach to enhance sales, marketing, and customer success
                    operations, delivering measurable results for clients.
                  </p>
                  <p className="paragraph-text">
                    Our team consists of seasoned professionals with a passion
                    for driving business growth, bringing a wealth of
                    experience from various industries, and a commitment to
                    innovative solutions. We personalize each engagement,
                    working closely with clients to meet their unique business
                    needs and goals.
                  </p>
                  <p className="paragraph-text">
                    Optimize your revenue operations with BizBolt. Let us
                    elevate your sales processes, improve lead generation and
                    qualification, and enhance customer engagement and
                    retention. We're here to help you reach your growth
                    potential. Schedule a consultation today and experience
                    the difference with BizBolt.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column>
                  <Header
                    as="h2"
                    inverted
                    color="yellow"
                    textAlign="center"
                  >
                    <b className="vddheader">Our Reason</b>
                  </Header>
                  <br />
                  <br />
                  <br />
                    <p className="paragraph-text">
                      BizBolt was founded with the belief that exceptional
                      revenue operations consultants should strive to work
                      themselves out of a job by implementing automation and
                      data-driven solutions. However, these solutions often
                      require ongoing updates and modifications, which is where
                      our consultancy comes in. Our team offers expertise to a
                      variety of businesses, ensuring their revenue operations
                      remain optimized and efficient.
                    </p>
                    <p className="paragraph-text">
                      At BizBolt, we are dedicated to delivering lasting value
                      to our clients. Our passion for driving business growth,
                      combined with our commitment to innovation, ensures that
                      we stay at the forefront of the revenue operations
                      industry. Our goal is not just to implement solutions, but
                      to build long-term partnerships with our clients, helping
                      them achieve continued success.
                    </p>
                    <p className="paragraph-text">
                      Join us on our mission to revolutionize revenue
                      operations. Schedule a consultation today and let us help
                      you take your business to the next level.
                    </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        <Grid centered stackable inverted>
          <Container>
            <Grid.Row textAlign="center">
              <Grid.Column style={styles.paddingStyle} inverted textAlign="center">
                <Header
                  as="h4"
                  inverted
                  textAlign="center"
                  color="yellow"
                  className="main-subheader"
                >
                  Questions about our services?
                </Header>
                <Button
                  as="a"
                  href="/demo"
                  inverted
                  color="teal"
                  size="huge"
                  className="main-bottomButton"
                >
                  Talk to our Experts
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </Grid>
      </Suspense>
    </>
  );
};
