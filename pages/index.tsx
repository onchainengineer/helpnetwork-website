import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import {Away, Column, Logo, Row} from '../core';
import VideoPlaceholderImg from '../public/images/nyc-citi-bike-new-4-1000.webp';
import {Button, Classes, Colors, Intent, Tag} from '@blueprintjs/core';
import News from '../components/News';
import ReactPlayer from 'react-player';
import Layout from '../core/Layout';
import {USED_BY_LOGOS} from '../used-by';
import Applications from '../components/Applications';

const LogoTitle = styled.h1`
  margin-bottom: 1em;
`;

const ListOfUses = styled.div`
  display: flex;
  // border-radius: 6px;
  // background-color: ${Colors.DARK_GRAY3};
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0.5em 1em;
  margin: 1em 0;
`;

const ListOfUsesItem = styled(({className, children}) => (
  <Tag className={className} minimal round interactive={false} intent={Intent.NONE}>
    {children}
  </Tag>
))`
  margin: 5px;
`;

const ApplicationsPreviewOuter = styled.div`
  margin-bottom: 20px;
`;

const DemoVideo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  max-width: 500px;
  display: inline-block;
  @media (min-width: 800px) {
    float: right;
    margin-left: 20px;
  }
`;

const ResponsivePlayer = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const ResponsiveReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${Colors.GRAY1};
`;

const NewsletterDescription = styled.div`
  font-size: 9pt;
  color: ${Colors.GRAY4};
`;

const NewsletterOuter = styled.div`
  justify-self: flex-end;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  button {
    white-space: nowrap;
  }
  input {
    width: 270px;
  }
  @media (max-width: 800px) {
    input {
      width: 200px;
    }
    margin-bottom: 2rem;
  }
`;

const UsedByContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  justify-content: center;
  & > * > img {
    max-width: 100px;
    height: 50px;
  }
  & > * {
    padding: 1em;
    opacity: 0.5;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }
  padding: 1em;
`;
const TitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Index = () => (
  <Layout>
    <TitleRow>
      <LogoTitle>
      Help Network: The Blockchain Built For Climate Resilience
      </LogoTitle>
      <NewsletterOuter>
        <form action="https://tinyletter.com/onchainhub" method="post" target="_blank">
          <Column spacing={10}>
            <Row spacing={10}>
              <input
                className={Classes.INPUT}
                type="text"
                name="email"
                id="tlemail"
                placeholder="Enter your@email.address here"
              />
              <input type="hidden" defaultValue={1} name="embed" />
              <Button type="submit" text="Subscribe" />
            </Row>
            <NewsletterDescription>
              Subscribe to the newsletter to {' '}
              <Away href="https://tinyletter.com/onchainhub/archive">
               learn more
              </Away>
              .
            </NewsletterDescription>
          </Column>
        </form>
      </NewsletterOuter>
    </TitleRow>

    <DemoVideo>
      <ResponsivePlayer>
        <ResponsiveReactPlayer
          // url={['/videos/demo_500.webm', '/videos/demo_500.mp4']}
          url="#"
          light={VideoPlaceholderImg.src}
          width="100%"
          height="100%"
          controls={true}
          loop={true}
          playing={true}
        />
      </ResponsivePlayer>
    </DemoVideo>   

    <section>
      <p>Help Network is an open interoperable smart contracts platform optimized for climate first applications.</p>
    </section>

    <section>
      <ApplicationsPreviewOuter>
        <Applications maxCount={6} />
      </ApplicationsPreviewOuter>
      {/*<p>*/}
      {/*  <Link href="/Applications">Visit our Applications</Link> to see more real world examples.*/}
      {/*</p>*/}
    </section>

    <section>
    <h2>Help States</h2>
      <p>Create geographic flow maps representing numbers of movements between locations.</p>
      <p>Visualize your own origin-destination data published in Google Sheets.</p>
      <p>Explore the data interactively.</p>
    </section>

    <section>
      <h2>Help Valleys</h2>
      <p>Create geographic flow maps representing numbers of movements between locations.</p>
      <p>Visualize your own origin-destination data published in Google Sheets.</p>
      <p>Explore the data interactively.</p>
    </section>
  </Layout>
);

export default Index;
