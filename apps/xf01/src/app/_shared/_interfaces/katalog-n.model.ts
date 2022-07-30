import {UI} from './ui.mondel'

export interface KatalogN extends UI{
  id: number;
  categoriaId:number; // CategoriaN ID
  categoriaName:string;
  name: string;
  hidden:boolean;
  decriptSEO: string;
  postavchikId:number;
}
