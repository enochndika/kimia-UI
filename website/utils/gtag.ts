declare global {
  interface Window {
    gtag: any;
  }
}

export const GA_TRACKING_ID = 'G-Y3BC4561NN';

export const pageView: any = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
