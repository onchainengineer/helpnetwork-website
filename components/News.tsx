import Link from 'next/link';
import {Away} from '../core';
import * as React from 'react';
import styled from '@emotion/styled';
import {Colors, Icon} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 0.75rem;
  }
`;

const NewsDate = styled.div`
  color: #f4f4f4;
  font-size: small;
  min-width: 100px;
`;

const NewsText = styled.div`
  color: #ffffff;
  display: block;
`;

const NewsItem = styled.div`
  display: flex;
  align-items: center;
`;

type Props = {
  maxCount?: number;
};

/* eslint-disable react/jsx-key */
const NEWS_ITEMS = [
  <NewsItem>
    <NewsDate>{`TBD`}</NewsDate>
    <NewsText>
    <Away href="#">CosmDocs</Away> Help Network Testnet Inception.
    </NewsText>
  </NewsItem>,
  <NewsItem>
    <NewsDate>{`TBD`}</NewsDate>
    <NewsText>
    <Away href="#">DESAR</Away> Joins the Help Network Ecosystem.
    </NewsText>
  </NewsItem>,
  <NewsItem>
    <NewsDate>{`TBD`}</NewsDate>
    <NewsText>
    <Away href="#">Quake Help State</Away> Inception.
    </NewsText>
  </NewsItem>,
  <NewsItem>
    <NewsDate>{`TBD`}</NewsDate>
    <NewsText>
    <Away href="#">Things Help Valley</Away> Inception.
    </NewsText>
  </NewsItem>,
  <NewsItem>
    <NewsDate>{`TBD`}</NewsDate>
    <NewsText>
    <Away href="#">Carbon Help Valley</Away> Inception.
    </NewsText>
  </NewsItem>,
  <NewsItem>
    <NewsDate>{`Aug 10, 2022`}</NewsDate>
    <NewsText>
    Xtressials is now a 'Principal Member' of the <Away href="https://metaverse-standards.org">Metaverse Standards Forum.</Away>
    </NewsText>
  </NewsItem>,
  <NewsItem>
    <NewsDate>{`Jul 15, 2022`}</NewsDate>
    <NewsText>
    The Help Network <Away href="#">'Angel-01 Testnet'</Away> Launched.
    </NewsText>
  </NewsItem>,
  <NewsItem>
    <NewsDate>{`May 15, 2022`}</NewsDate>
    <NewsText>
    <Away href="https://github.com/onchainengineer/helpnetwork/commit/8ee6f4bc0568f7a9d8ca6799fde3a5092dcd7a95">First Commit</Away> Instantiated for the Help Network Blockchain.
    </NewsText>
  </NewsItem>
];
/* eslint-enable react/jsx-key */

const News = ({maxCount}: Props) => {
  const news = maxCount ? NEWS_ITEMS.slice(0, maxCount) : NEWS_ITEMS;
  return (
    <Outer>
      {news.map((item, i) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
      {news.length < NEWS_ITEMS.length ? (
        <NewsItem>
          <Link href="/news">
            <a>
              <Icon icon={IconNames.ARROW_RIGHT} /> &nbsp; Older news
            </a>
          </Link>
        </NewsItem>
      ) : null}
    </Outer>
  );
};

export default News;
