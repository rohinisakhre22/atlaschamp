import type { ServiceColor } from '../types/site';

const SERVICE_ICON_CLASSES: Record<ServiceColor, string> = {
  blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  green:
    'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
  purple:
    'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  orange:
    'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
  teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
  indigo:
    'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
};

export function getServiceIconClasses(color: ServiceColor): string {
  return SERVICE_ICON_CLASSES[color];
}
