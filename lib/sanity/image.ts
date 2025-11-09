import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/lib/sanity';

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

export function normalizePhoneNumber(phone: string): string {
  return '+' + phone.replace(/\D/g, '').replace(/^40/, '40');
}
