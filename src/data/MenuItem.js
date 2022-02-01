import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import Jugadores from '../components/Jugadores';
import PelisGhibli from '../components/PelisGhibli';
import Digimon from '../components/Digimon';
import Latin from '../components/Latin';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/jugadores',
    title: 'Jugadores',
    component: Jugadores,
  },
  {
    id: 5,
    path: '/pelisghibli',
    title: 'PelisGhibli',
    component: PelisGhibli,
  },
  {
    id: 6,
    path: '/digimon',
    title: 'Digimon',
    component: Digimon,
  },
  {
    id: 7,
    path: '/latin',
    title: 'Latin',
    component: Latin,
  },
];

/*
  path
  id
  title
  component

*/
