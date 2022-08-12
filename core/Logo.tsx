import {ColorScheme} from './colors';
import Link from 'next/link';
import * as React from 'react';
import styled from '@emotion/styled';
import {Row} from './Boxes';

type Props = {
  embed?: boolean;
  showText?: boolean;
  fontSize?: number;
  collapseWidth?: number;
};

const SHADOW_COLOR = ColorScheme.primary;
const LogoText = styled.div<Props>(({fontSize, collapseWidth}: Props) => ({
  // fontFamily: "'Titillium Web', sans-serif",
  fontSize,
  color: '#fff',
  fontWeight: 'bold',
  textShadow: `1px -1px 1px ${SHADOW_COLOR}, 
    1px 1px 1px ${SHADOW_COLOR}, 
    -1px -1px 1px ${SHADOW_COLOR}, 
    -1px 1px 1px ${SHADOW_COLOR}`,
  [`@media (max-width: ${collapseWidth}px)`]: {
    display: 'none',
  },
}));

const Logo = ({fontSize = 25, collapseWidth = 525, embed, showText = true}: Props) => {
  const size = Math.ceil(fontSize * 1.5);
  const content = (
    <Row spacing={fontSize / 5}>
      
      {showText ? (
        <LogoText collapseWidth={collapseWidth} fontSize={fontSize}>
          Ecoverse: The Metaverse of Impact
        </LogoText>
      ) : null}
    </Row>
  );
  if (embed) {
    return (
      <a
        href="https://ecoverse.onchain.engineer"
        style={{textDecoration: 'none'}}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }
  return (
    <Link href="/">
      <div style={{textDecoration: 'none', cursor: 'pointer'}}>{content}</div>
    </Link>
  );
};

export default Logo;
