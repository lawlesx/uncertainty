// Search engines and link-preview bots. They get the page fully revealed, with no
// intro to wait out (same content, just no animation).
export const CRAWLER_PATTERN =
  'bot|crawl|spider|slurp|lighthouse|headlesschrome|google-inspectiontool|bingpreview|facebookexternalhit|embedly|whatsapp'

export const isCrawler = () => new RegExp(CRAWLER_PATTERN, 'i').test(navigator.userAgent)

// Runs in <head> before first paint, so even a snapshot taken before hydration is clean.
export const crawlerScript = `if(new RegExp('${CRAWLER_PATTERN}','i').test(navigator.userAgent))document.documentElement.setAttribute('data-crawler','')`
