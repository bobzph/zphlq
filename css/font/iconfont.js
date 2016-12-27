;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M293.973071 1024c-18.713994 0-37.429563-7.144369-51.715151-21.429957-28.571175-28.572751-28.571175-74.857551 0-103.427151l387.21536-387.142892L242.25792 124.857108c-28.571175-28.536517-28.571175-74.857551 0-103.428726 28.571175-28.571175 74.857551-28.571175 103.428726 0l438.999828 438.858043c13.715298 13.713723 21.428382 32.285932 21.428382 51.713575 0 19.427643-7.713083 37.999852-21.428382 51.713575L345.688222 1002.571618C331.402634 1016.855631 312.687065 1024 293.973071 1024z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantou1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M912.637 418.558c-10.772 0-20.33 4.346-27.937 10.86l-0.425-0.425-2.235 2.234c-0.044 0.045-0.067 0.063-0.112 0.106L523.592 789.672c-6.256 6.239-16.377 6.239-22.608 0L140.298 428.993l-0.659 0.659c-7.646-6.686-17.355-11.093-28.298-11.093-23.935 0-43.374 19.441-43.374 43.396 0 15.289 8.389 28.084 20.355 35.812 0.726 1.345 0.576 2.983 1.705 4.112l410.958 410.948c6.232 6.244 16.353 6.244 22.608 0l410.951-410.949c1.279-1.279 1.172-3.107 1.916-4.641 11.521-7.794 19.57-20.336 19.57-35.283l0.002 0C956.033 437.999 936.592 418.558 912.637 418.558z"  ></path>'+
      ''+
      '<path d="M88.321 185.698c0.726 1.341 0.576 2.979 1.705 4.109l410.959 410.951c6.232 6.239 16.353 6.239 22.608 0l410.951-410.951c1.279-1.277 1.172-3.108 1.916-4.641 11.521-7.794 19.57-20.336 19.57-35.283l0.002 0.001c0-23.955-19.441-43.394-43.396-43.394-10.772 0-20.33 4.345-27.937 10.857l-0.425-0.425-2.235 2.235c-0.044 0.045-0.067 0.063-0.112 0.109L523.591 477.604c-6.256 6.238-16.377 6.238-22.608 0L140.297 116.921l-0.659 0.659c-7.646-6.685-17.354-11.091-28.298-11.091-23.935 0-43.374 19.438-43.374 43.394C67.966 165.173 76.355 177.97 88.321 185.698z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon-double-arrow-up1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M549.803 447.951c-21.544-21.034-56.478-21.034-78.026 0l-393.466 383.229c-21.546 21.036-21.546 55.142 0 76.179s56.48 21.037 78.026 0l354.454-345.23 354.454 345.23c21.549 21.037 56.482 21.037 78.028 0 21.547-21.036 21.547-55.142 0-76.179l-393.467-383.228zM156.337 575.051l354.454-345.23 354.454 345.23c21.549 21.037 56.482 21.037 78.028 0 21.547-21.036 21.547-55.142 0-76.179l-393.468-383.228c-21.544-21.034-56.478-21.034-78.026 0l-393.466 383.229c-21.546 21.036-21.546 55.142 0 76.179 21.547 21.036 56.482 21.037 78.026 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
