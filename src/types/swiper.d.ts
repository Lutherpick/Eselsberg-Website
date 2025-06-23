// src/types/swiper.d.ts

//–– Minimal shim so TS will resolve swiper’s own .d.ts
declare module 'swiper' {
    // If you want full intellisense, re-export its internal types:
    import Swiper from 'swiper/types';
    export * from 'swiper/types';
    export default Swiper;
}

//–– Also allow default imports from the React adapter
declare module 'swiper/react';
