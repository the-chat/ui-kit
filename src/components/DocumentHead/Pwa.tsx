import React from "react"
import { Props } from "./types"

// learn?
const Pwa = ({ title, description, iconUrl }: Props) => (
  <>
    <meta name="application-name" content={title} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content={title} />
    <meta name="description" content={description} />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
    <meta name="msapplication-TileColor" content="#2B5797" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content="#FFFFFF" />
    <link rel="icon" type="image/png" sizes="32x32" href={iconUrl} />
    <link rel="icon" type="image/png" sizes="16x16" href={iconUrl} />
    <link rel="mask-icon" color="#5bbad5" href={iconUrl} />
    <link rel="apple-touch-icon" href={iconUrl} />
    <link rel="apple-touch-icon" sizes="152x152" href={iconUrl} />
    <link rel="apple-touch-icon" sizes="180x180" href={iconUrl} />
    <link rel="apple-touch-icon" sizes="167x167" href={iconUrl} />
    <link rel="manifest" href="/manifest.json" />
    {/* <!-- apple splash screen images --> */}
    {/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}
  </>
)

export default Pwa
