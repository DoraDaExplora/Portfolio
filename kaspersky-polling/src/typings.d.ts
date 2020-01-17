declare module '*.html' {
  const content: string;
  export default content;
}

declare var ga: any;

declare module 'portable-fetch';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';

declare module '*.js';
declare module '*.json';

declare module '*.scss' {
  const content: string;
  export default content;
}

declare module '@polymer/polymer/polymer-element' {
  // noinspection TsLint
  export const PolymerElement: any;
  export const html: any;
}

declare module '@polymer/polymer/lib/utils/settings' {
  export const useShadow: boolean;
  export const useNativeCSSProperties: boolean;
  export const useNativeCustomElements: boolean;
  export const setRootPath: (path: string) => void;
  export const setSanitizeDOMValue: (newSanitizeDOMValue: any) => void;
  export const setPassiveTouchGestures: (usePassive: boolean) => void;
}

declare module WebComponents {
  export const ready: boolean;
  export const waitFor: (callback: () => Promise<any>) => void;
}

declare module 'uid-generator' {
  export default class UIDGenerator {
    generateSync: () => string;
  }
}