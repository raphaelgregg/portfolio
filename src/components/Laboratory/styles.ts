import styled from 'styled-components';

export const LaboratoryContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  align-self: center;
  /* align-items: center; */
  /* justify-content: space-between; */

  width: 90%;
  max-width:1440px;
    
  margin-bottom: 16rem;

  .swiper {
    /* padding-left: 30px;
    padding-right: 30px; */
  }
  .swiper-slide {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* border-radius: 18px; */
  /* font-size: 22px; */
  /* font-weight: bold; */
  /* color: #fff; */
  background-color: none;
  padding-bottom: 4rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({theme}) => theme.COLORS.BLUE_500};
  }

  .swiper-pagination-bullet-active {
    background: ${({theme}) => theme.COLORS.BLUE_500};
  }
`;

export const LaboratoryListCad = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  
  grid-gap: 1.6rem;
  
  justify-items: center;
`;
