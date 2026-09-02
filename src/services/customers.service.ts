import { CUSTOMERS } from '../data/customersData';
import type { Customer } from '../types/customer';

/**
 * Data-access layer for customers. Currently backed by static mock data;
 * swap the implementation here for a real HTTP client without touching
 * any component or hook.
 */
export const customersService = {
  async getCustomers(): Promise<Customer[]> {
    return CUSTOMERS;
  },
};
