"use client";

import Script from "next/script";

const SDK_URL =
  "https://www.paypal.com/sdk/js?client-id=BAAJFgtHC57jFcMhPAjZY3KoMK5JS_tJBZ3UMeIQPuGVQ4DyPtldX9tsOyaXY6gc-_pplPTJODZCfEO0I8&components=hosted-buttons&disable-funding=venmo&currency=USD";
const HOSTED_BUTTON_ID = "7DMP6JJ2SHAC2";
const CONTAINER_ID = `paypal-container-${HOSTED_BUTTON_ID}`;

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => { render: (selector: string) => void };
    };
  }
}

export function PayPalButton() {
  return (
    <>
      <div id={CONTAINER_ID} className="min-h-[55px]" />
      <Script
        src={SDK_URL}
        strategy="afterInteractive"
        onLoad={() => {
          window.paypal?.HostedButtons({ hostedButtonId: HOSTED_BUTTON_ID }).render(`#${CONTAINER_ID}`);
        }}
      />
    </>
  );
}
