import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '7w5qtpys',
  dataset: 'production',
  apiVersion: '2025-04-23',
  useCdn: false,
});
