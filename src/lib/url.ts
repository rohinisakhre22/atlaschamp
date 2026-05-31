import { SERVICES } from '../constants/site';

function parseServiceId(value: string): string {
  return SERVICES.some((s) => s.id === value) ? value : '';
}

export function getServiceFromHash(): string {
  const hashQuery = window.location.hash.split('?')[1] ?? '';
  const fromHash = new URLSearchParams(hashQuery).get('service') ?? '';
  if (fromHash) return parseServiceId(fromHash);

  const fromSearch = new URLSearchParams(window.location.search).get('service') ?? '';
  return parseServiceId(fromSearch);
}

export function getContactHref(serviceId?: string): string {
  if (!serviceId) return '/#contact';
  return `/?service=${serviceId}#contact`;
}
