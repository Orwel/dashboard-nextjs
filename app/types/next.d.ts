declare module 'next/navigation' {
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    refresh: () => void;
    back: () => void;
    forward: () => void;
  };
  export function useSearchParams(): URLSearchParams;
  export function usePathname(): string;
}

declare module 'next/link' {
  import { ComponentProps } from 'react';
  import { UrlObject } from 'url';

  type Url = string | UrlObject;
  type LinkProps = {
    href: Url;
    as?: Url;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
  } & ComponentProps<'a'>;

  export default function Link(props: LinkProps): JSX.Element;
}

declare module 'next/image' {
  import { ComponentProps } from 'react';

  type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    loader?: (props: { src: string; width: number; quality?: number }) => string;
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
  } & ComponentProps<'img'>;

  export default function Image(props: ImageProps): JSX.Element;
}

declare module 'next/server' {
  export class NextResponse {
    static json(body: any, init?: ResponseInit): Response;
  }
} 