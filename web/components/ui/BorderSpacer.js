import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
// constants
import { mediaQueries } from '@/utils/constants';

BorderSpacer.propTypes = {
  size: PropTypes.number,
  position: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

export default function BorderSpacer({
  size = 2,
  position,
  backgroundColor = 'var(--primary)',
  className,
}) {
  const isLargeViewport = useMediaQuery(`(min-width: ${mediaQueries.laptop})`);
  // size of border spacer in px
  const [spacerSize, setSpacerSize] = useState(size);

  useEffect(() => {
    // decrease to half the size of original for smaller viewports
    const newSpacerSize = isLargeViewport ? size : size - Math.round(size / 2);
    // defaults to 1 if calc results in 0
    setSpacerSize(newSpacerSize || 1);
  }, [isLargeViewport]);

  return (
    <StyledBorderSpacer
      aria-hidden='true'
      className={className}
      spacerSize={spacerSize}
      position={position}
      backgroundColor={backgroundColor}
    ></StyledBorderSpacer>
  );
}

const StyledBorderSpacer = styled.div`
  &:before {
    position: absolute;
    background-color: ${({ backgroundColor }) => backgroundColor};
    content: '';

    ${({ position }) => {
      switch (position) {
        case 'top':
          return css`
            width: 100%;
            height: ${({ spacerSize }) => `${spacerSize}px`};
            top: 0;
          `;
        case 'right':
          return css`
            width: ${({ spacerSize }) => `${spacerSize}px`};
            height: 100%;
            right: 0;
          `;
        case 'bottom':
          return css`
            width: 100%;
            height: ${({ spacerSize }) => `${spacerSize}px`};
            bottom: 0;
          `;
        case 'left':
          return css`
            width: ${({ spacerSize }) => `${spacerSize}px`};
            height: 100%;
            left: 0;
          `;
        default:
          // defaults to bottom
          return css`
            width: 100%;
            height: ${({ spacerSize }) => `${spacerSize}px`};
            bottom: 0;
          `;
      }
    }}
  }
`;
