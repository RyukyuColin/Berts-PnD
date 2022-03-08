import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledProductsSection as StyledSection } from './Styled/LandingSection';
import DetailsList from './DetailsList';
import LandingContent from './LandingContent';
import Mosaic from './Mosaic';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
// assets
import mosaicImageOne from '@/public/images/hero-primary.webp';
import mosaicImageTwo from '@/public/images/hero-primary.webp';
import mosaicImageThree from '@/public/images/hero-primary.webp';

LandingProductsSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingProductsSection({ products }) {
  return (
    <StyledProductsSection id='products'>
      <LandingContent position='center' split='right'>
        <span>Our Products</span>
        <Heading level='2'>
          House Painting Contractors for the Winnipeg Area
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
          Suspendisse bibendum justo non justo cursus sodales. Vivamus sagittis
          quam dolor.
        </p>
        <DetailsList details={products} />
        <StyledQuoteLinkButton>Get In Touch</StyledQuoteLinkButton>
      </LandingContent>
      <Mosaic
        title='Exceptional Quality'
        images={[mosaicImageOne, mosaicImageTwo, mosaicImageThree]}
        split='left'
      />
    </StyledProductsSection>
  );
}

// styles
const StyledProductsSection = styled(StyledSection)`
  && {
    /* custom breakpoint */
    @media (min-width: 1500px) {
      max-width: 1400px;
    }
  }
`;
const StyledQuoteLinkButton = styled(QuoteLinkButton)`
  ${StyledProductsSection} & {
    display: block;
    margin: auto;
  }
`;