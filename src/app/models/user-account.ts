import { Template } from './template';
import { Product } from './product';
import { Order } from './order';
import { Quote } from './quote';
export class UserAccount {
  accountId?: any;
  fname?: string;
  lname?: string;
  email?: string;
  addresses?: AccountAddress[];
  templates?: Template[];
  cart?: Product[];
  orders?: Order[];
  quotes?: Quote[];
}

export interface AccountAddress {
  address1?: Address;
  address2?: Address;
}

export interface Address {
  accountId?: any;
  street?: string;
  city?: string;
  postal?: number;
  longitude?: number;
  latitude?: number;
  state?: string;
  country?: string;
}