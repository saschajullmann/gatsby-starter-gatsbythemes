import styled from 'react-emotion';
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  responsiveStyle
} from 'styled-system';

const wrap = responsiveStyle({
  prop: 'wrap',
  cssProperty: 'flexWrap'
});

export const Box = styled.div`
  overflow: hidden;
  ${space} ${width} ${fontSize} ${color} ${textAlign};
`;

export const Flex = styled.div`
  display: flex;
  ${justifyContent} ${wrap};
`;
