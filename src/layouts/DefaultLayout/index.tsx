import { Header } from '../../components/Header';
import {Outlet} from 'react-router-dom';
import { LayoutContainer } from './styles';
import { Footer } from '../../components/Footer';
import { useState } from 'react';

export function DefaultLayout() {
  // const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}