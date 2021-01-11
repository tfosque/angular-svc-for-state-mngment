import { Template } from './template';
import { Product } from './product';
import { Order } from './order';
import { Quote } from './quote';
export class UserAccount {
  accountId?: string;
  fname?: string;
  lname?: string;
  email?: string;
  addresses?: AccountAddress[];
  templates?: Template[];
  cart?: Product[];
  orders?: Order[];
  quotes?: Quote[];
  password?: string;
  username?: string;
}

export interface AccountAddress {
  address1?: Address;
  address2?: Address;
}

export interface Address {
  accountId?: string;
  street?: string;
  city?: string;
  postal?: number;
  longitude?: number;
  latitude?: number;
  state?: string;
  country?: string;
}