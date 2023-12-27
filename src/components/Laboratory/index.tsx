import { LaboratoryContainer, LaboratoryListCad } from "./styles";

import { LaboratoryCard } from "../LaboratoryCard";
import { SectionTitle } from "../SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

interface LaboratoryProps {
  id: string;
}

const data = [
  {id: '1' , name: 'slide 1'},
  {id: '2' , name: 'slide 2'},
  {id: '3' , name: 'slide 3'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
  {id: '4' , name: 'slide 4'},
]

export function Laboratory({id}: LaboratoryProps) {
  return(
    <LaboratoryContainer id={id}>
      <SectionTitle title="Laboratório" positionAlignText="center"/>

      {/* <LaboratoryListCad>
        <LaboratoryCard />
        <LaboratoryCard />
        <LaboratoryCard />
      </LaboratoryListCad> */}

    <Swiper
      slidesPerView={3}
      pagination={{clickable: true}}
      navigation
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <LaboratoryCard />
        </SwiperSlide>
      ))}
    </Swiper>
    </LaboratoryContainer>
  );
}