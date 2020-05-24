function setVideoBgColor (vid, nativeColor) {
  if (vid) {
    const vidBg = vid.parentElement
    if (vidBg) {
      // draw first pixel of video to a canvas
      // then get pixel color from that canvas
      const canvas = document.createElement('canvas')
      canvas.width = 2
      canvas.height = 2
      const ctx = canvas.getContext('2d')
      ctx.drawImage(vid, 0, 0, 1, 1)

      const p = ctx.getImageData(0, 0, 1, 1).data
      console.log('rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')')
      vidBg.style.backgroundColor = 'rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')'
      console.log(vidBg.style.backgroundColor)
    }
  }
}
/* eslint no-unused-vars: "warn" */
function setVideoBgColorDelayed (vid, nativeColor) {
  setTimeout(setVideoBgColor, 100, vid, nativeColor)
}
