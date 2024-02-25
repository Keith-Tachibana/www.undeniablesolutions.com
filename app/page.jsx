'use client';

import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import styles from './page.module.css';

import {
  Grid,
  Container,
  Segment,
  Button,
  Embed,
  Divider,
  List,
  ListItem,
  ListContent,
  ListHeader,
  Modal,
  Icon,
  Header,
  Dimmer,
  Loader
} from 'semantic-ui-react';

const images = [
  {
    id: 1,
    alt: 'Landscaping Image 1',
    src: '/assets/images/landscaping-01.png',
    altsrc: '/assets/images/landscaping-01.webp',
    title: 'Landscaping Image 1'
  },
  {
    id: 2,
    alt: 'Landscaping Image 2',
    src: '/assets/images/landscaping-02.png',
    altsrc: '/assets/images/landscaping-02.webp',
    title: 'Landscaping Image 2'
  },
  {
    id: 3,
    alt: 'Landscaping Image 3',
    src: '/assets/images/landscaping-03.png',
    altsrc: '/assets/images/landscaping-03.webp',
    title: 'Landscaping Image 3'
  },
  {
    id: 4,
    alt: 'Landscaping Image 4',
    src: '/assets/images/landscaping-04.png',
    altsrc: '/assets/images/landscaping-04.webp',
    title: 'Landscaping Image 4'
  },
  {
    id: 5,
    alt: 'Landscaping Image 5',
    src: '/assets/images/landscaping-05.png',
    altsrc: '/assets/images/landscaping-05.webp',
    title: 'Landscaping Image 5'
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      open: false,
      active: false,
      imageIndex: 0
    };
    this.timerID = null;
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext= this.handleNext.bind(this);
    this.handleDot = this.handleDot.bind(this);
    this.renderDot = this.renderDot.bind(this);
  }

  startTimer() {
    this.timerID = setInterval(this.handleNext, 10000);
  }
  stopTimer() {
    clearInterval(this.timerID);
  }
  componentDidMount() {
    this.startTimer();
  }
  componentDidUpdate() {
    this.stopTimer();
    this.startTimer();
  }
  componentWillUnmount() {
    this.stopTimer();
  }
  setOpen = () => this.setState({ open: !this.state.open });
 
  handlePrevious() {
    this.setState(prevState => {
      if (prevState.imageIndex === 0) {
        return {
          imageIndex: images.length - 1
        };
      } else {
        return {
          imageIndex: prevState.imageIndex - 1
        };
      }
    });
  }
  handleNext() {
    this.setState(prevState => {
      if (prevState.imageIndex === images.length - 1) {
        return {
          imageIndex: 0
        };
      } else {
        return {
          imageIndex: prevState.imageIndex + 1
        };
      }
    });
  }
  handleDot(event) {
    this.setState({
      imageIndex: Number(event.target.id)
    });
  }
  renderDot() {
    return (
      <React.Fragment>
        {images.map((image, index) => {
          let dot;
          const current = index === this.state.imageIndex;
          if (current) {
            dot = '&#9899;'
          } else {
            dot = '&#9898;'
          }
          return (
            <i
              key={index}
              id={index}
              className={dot}
              onClick={this.handleDot}></i>
          );
        })}
      </React.Fragment>
    );
  }
  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });
  handleClick = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { active, activeIndex } = this.state;

    return (
      <main>
        <header>
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
          <span>
            <Header as="h1" size="huge" textAlign="center">
              <Link href="tel:8086403346" rel="noopener">  
                <Icon link name="phone square" color="green" size="big"/>
              </Link>
              808-640-3346
            </Header>
          </span>
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
        </header>
        <Container className={styles.headerBG}>
          <Grid stackable inverted>
            <Grid.Row width="">
              <Grid.Column className={styles.gridStyle}>
                <Header as="h2" inverted textAlign="left">
                  Professional Landscapers:
                    <List bulleted animated inverted className={styles.listStyle}>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Trimming</ListHeader>
                        </ListContent>
                      </ListItem>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Pruning</ListHeader>
                        </ListContent>
                      </ListItem>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Planting</ListHeader>
                        </ListContent>
                      </ListItem>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Maintenance</ListHeader>
                        </ListContent>
                      </ListItem>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Design</ListHeader>
                        </ListContent>
                      </ListItem>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Gardening</ListHeader>
                        </ListContent>
                      </ListItem>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Mowing</ListHeader>
                        </ListContent>
                      </ListItem>
                      <ListItem>
                        <ListContent>
                          <ListHeader>Cleaning</ListHeader>
                        </ListContent>
                      </ListItem>
                    </List>
                </Header>
                <Header as="h2" inverted textAlign="right" className={styles.serviceHeader}>
                  Currently servicing Hilo, Hawaii
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
          <Grid stackable inverted>
            <Grid.Row>
              <Grid.Column>
                <div className={styles.carousel}>
                  <i className="previous" onClick={this.handlePrevious}></i>
                    <picture>
                      <source srcSet={images[this.state.imageIndex].src} type="image/webp" />
                      <source srcSet={images[this.state.imageIndex].altsrc} type="image/png" />
                      <Image 
                        height="1024"
                        width="1024"
                        src={images[this.state.imageIndex].src} 
                        alt={images[this.state.imageIndex].alt}
                        key={images[this.state.imageIndex].id}
                        priority 
                      />
                    </picture>
                  <i className="next" onClick={this.handleNext}></i> 
                </div>
                <div className={styles.dot}>
                  {this.renderDot}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <Grid stackable padded className={styles.headerBG}>
          <Grid.Row textAlign="center">
            <Grid.Column className={styles.paddingStyle}>
              <Button as="a" href="/demo" inverted color="teal" size="huge">
                Getting Started
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <Container>
          <Grid
            stackable
            columns="equal"
            inverted
            verticalAlign="middle"
            padded
          >
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" className="main-subheader" inverted>
                  Don't let inefficient processes hold your business back.
                </Header>
                <Divider as="h4" inverted horizontal className="main-divider">
                  Take control
                </Divider>
                <p className="paragraph-text">
                  Partner with BizBolt today and take control of your revenue
                  operations.
                </p>
                <p className="paragraph-text">
                  Schedule a free consultation and learn how we can help your
                  business reach its full potential.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <Container textAlign="center">
          <Header as="h3" inverted className="main-divider" textAlign="center">
            Press play!
          </Header>
          <Icon
            name="arrow circle down"
            className="zoom"
            color="yellow"
            inverted
            size="huge"
          ></Icon>
        </Container>
        <br />
        <br />
        <br />
        <Container>
          <Grid stackable verticalAlign="middle" inverted padded>
            <Grid.Row textAlign="center">
              <Grid.Column>
                <Container className="main-embed">
                  <iframe
                    width="873"
                    height="491"
                    src="https://www.youtube.com/embed/cxmrVD45aR4"
                    title="BizBolt Consulting"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  >
                  </iframe>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center">
              <Grid.Column className={styles.paddingStyle}>
                <Button as="a" href="/demo" inverted color="teal" size="huge">
                  Talk to an Expert
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
          <Grid columns="equal" stackable inverted padded>
            <hr className={styles.dividerStyle} />
            <Grid.Row centered columns={1}>
              <Grid.Column className="main-headerCol">
                <Header
                  as="h3"
                  className="main-header"
                  textAlign="center"
                  inverted
                >
                  Why choose BizBolt?
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered textAlign="center" columns={1}>
              <Grid.Column>
                <List celled relaxed inverted>
                  <List.Item className="main-bullet1">
                    <List.Icon
                      name="chart line"
                      size="huge"
                      color="teal"
                      inverted
                      verticalAlign="middle"
                    />
                    <List.Content className="main-list">
                      <List.Header className="main-subheader">
                        Track record of delivering results
                      </List.Header>
                      <List.Description className="main-description">
                        <p className="paragraph-text">
                          Our clients have seen an average increase of 25% in
                          revenue growth and a 30% improvement in sales
                          efficiency after working with us.
                        </p>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item className="main-bullet2">
                    <List.Icon
                      name="database"
                      size="huge"
                      color="teal"
                      inverted
                      verticalAlign="middle"
                    />
                    <List.Content className="main-list">
                      <List.Header className="main-subheader">
                        Data-driven!
                      </List.Header>
                      <List.Description className="main-description">
                        <p className="paragraph-text">
                          We understand that every business is unique, which is
                          why we offer customizable solutions tailored to your
                          specific needs.
                        </p>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item className="main-bullet3">
                    <List.Icon
                      name="edit"
                      size="huge"
                      color="teal"
                      inverted
                      verticalAlign="middle"
                    />
                    <List.Content className="main-list">
                      <List.Header className="main-subheader">
                        Customizable solutions
                      </List.Header>
                      <List.Description className="main-description">
                        <p className="paragraph-text">
                          Our solutions are rooted in data analysis, providing a
                          solid foundation for sustainable growth and business
                          decisions.
                        </p>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <Grid stackable inverted padded>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Header
                as="h3"
                className="main-header"
                textAlign="center"
                inverted
              >
                Check out our services
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <Container>
          <Grid stackable inverted padded divided columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Link href="/services/#data" rel="noopener">
                  <Header
                    as="h3"
                    inverted
                    textAlign="center"
                    className="main-subheader main-bullet1"
                  >
                    Data / CRM
                  </Header>
           
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link href="/services/#revenue" rel="noopener">
                  <Header
                    as="h3"
                    inverted
                    textAlign="center"
                    className="main-subheader main-bullet2"
                  >
                    Revenue Teams
                  </Header>
         
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link href="/services/#insight" rel="noopener">
                  <Header
                    as="h3"
                    inverted
                    textAlign="center"
                    className="main-subheader main-bullet3"
                  >
                    Insight & Analysis
                  </Header>
          
                </Link>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered inverted textAlign="center">
              <Grid.Column className={styles.paddingStyle} inverted textAlign="center">
                <Header
                  as="h4"
                  inverted
                  textAlign="center"
                  className="main-subheader"
                >
                  Any questions?
                </Header>
                <Button
                  as="a"
                  href="/contact"
                  inverted
                  color="teal"
                  size="huge"
                  className="main-bottomButton"
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
