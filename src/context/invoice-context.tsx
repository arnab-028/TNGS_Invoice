import { createContext, Dispatch, SetStateAction } from 'react';
import { IInvoice } from '@/interfaces/invoice';
import { v4 as uuidv4 } from 'uuid';

// Interfaces
export interface IInvoiceContext {
  invoice: IInvoice;
  setInvoice: Dispatch<SetStateAction<IInvoice>>;
}

/** Initial state */
export const initialInvoiceData: IInvoice = {
  fileName: '',
  invoiceNumber: `#INV${uuidv4()}`,
  date: new Date().toISOString(),
  due: new Date().toISOString(),
  sender: {
    companyName: '',
    firstName: '',
    lastName: '',
    country: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    phone: '',
    email: '',
  },
  recipient: {
    companyName: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    phone: '',
    email: '',
  },
  items: [],
  taxRate: 10,
  terms:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  notes: '',
  footerMessages: 'Thank you for trusting TNGS',
  paymentInfo: {
    accountName: '',
    accountNumber: '',
    bankAccount: '',
  },
};

/**
 * Invoice context
 */
export const invoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);
