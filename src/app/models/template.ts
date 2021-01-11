import { Product } from './product';

export interface Template {
  templateId?: string;
  templateName?: string;
  templateItems?: Product[];
  createDate?: Date;
  owner?: string; // account name?

}