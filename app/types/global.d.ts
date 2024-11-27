import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'next/navigation' {
  export function useRouter(): any;
  export function useSearchParams(): any;
  export function usePathname(): string;
}

declare module 'next/link' {
  export default function Link(props: any): ReactNode;
}

declare module 'next/image' {
  export default function Image(props: any): ReactNode;
} 