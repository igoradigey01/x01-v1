import {menyItem} from './meny-item.model';

export interface meny{   
    isAuthorization:boolean;   
    roles:menyItem[];  // admin manager 
    menyItems:menyItem[];
  }