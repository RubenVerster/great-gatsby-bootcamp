const settings =
  '{"speed":4,"speedAdjFactor":0.5,"density":3,"shape":"circle","warpEffect":true,"warpEffectLength":10,"depthFade":true,"starSize":2,"backgroundColor":"hsl(240,33%,7%)","starColor":"lightblue"}';
new WarpSpeed('warp', settings);

window.addEventListener('resize', new WarpSpeed('warp', settings));
