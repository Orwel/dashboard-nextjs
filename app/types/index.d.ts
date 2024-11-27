/// <reference types="next" />
/// <reference types="react" />

declare module 'next/navigation' {
  export function useRouter(): any;
  export function useSearchParams(): any;
  export function usePathname(): string;
}

declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'next/image' {
  const Image: any;
  export default Image;
}

declare module '@heroicons/react/24/outline' {
  export const MagnifyingGlassIcon: any;
  export const ArrowLeftIcon: any;
  export const ArrowRightIcon: any;
  export const CalendarIcon: any;
} 