import styled from 'styled-components';

export const HomepageContainer = styled.div`
   width: 100%;
   .campaign-title {
      margin: 0 !important;
   }
`;

export const CampaignListWrapper = styled.div`
   --f-columns: 4;
   --f-gap: 20px;
   display: flex;
   flex-wrap: wrap;
   margin-left: calc(-1 * var(--f-gap));
   margin-bottom: calc(-1 * var(--f-gap));

   > * {
      margin-left: var(--f-gap);
      margin-bottom: var(--f-gap);
      width: calc((100% / var(--f-columns) - var(--f-gap)));
   }
   @media screen and (max-width: 998px) {
      --f-columns: 3;
   }
   @media screen and (max-width: 767px) {
      --f-columns: 2;
   }
   @media screen and (max-width: 560px) {
      --f-columns: 1;
`;
