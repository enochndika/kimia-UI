declare global {
  interface Window {
    gtag: any;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageView = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
