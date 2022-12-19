import { useContext } from 'react';
import CategoriasContext from '../context/CategoriasProvider';

export const useCategorias = () => {
  return useContext(CategoriasContext);
}
