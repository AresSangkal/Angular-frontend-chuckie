(function(n){if(typeof define==="function"&&define.amd){define(["jquery"],function(e){return n(e)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=n(require("jquery"))}else{n(jQuery)}})(function(n){n.easing.jswing=n.easing.swing;var e=Math.pow,t=Math.sqrt,u=Math.sin,r=Math.cos,i=Math.PI,a=1.70158,c=a*1.525,o=a+1,s=2*i/3,f=2*i/4.5;function I(n){var e=7.5625,t=2.75;if(n<1/t){return e*n*n}else if(n<2/t){return e*(n-=1.5/t)*n+.75}else if(n<2.5/t){return e*(n-=2.25/t)*n+.9375}else{return e*(n-=2.625/t)*n+.984375}}n.extend(n.easing,{def:"easeOutQuad",swing:function e(t){return n.easing[n.easing.def](t)},easeInQuad:function n(e){return e*e},easeOutQuad:function n(e){return 1-(1-e)*(1-e)},easeInOutQuad:function n(t){return t<.5?2*t*t:1-e(-2*t+2,2)/2},easeInCubic:function n(e){return e*e*e},easeOutCubic:function n(t){return 1-e(1-t,3)},easeInOutCubic:function n(t){return t<.5?4*t*t*t:1-e(-2*t+2,3)/2},easeInQuart:function n(e){return e*e*e*e},easeOutQuart:function n(t){return 1-e(1-t,4)},easeInOutQuart:function n(t){return t<.5?8*t*t*t*t:1-e(-2*t+2,4)/2},easeInQuint:function n(e){return e*e*e*e*e},easeOutQuint:function n(t){return 1-e(1-t,5)},easeInOutQuint:function n(t){return t<.5?16*t*t*t*t*t:1-e(-2*t+2,5)/2},easeInSine:function n(e){return 1-r(e*i/2)},easeOutSine:function n(e){return u(e*i/2)},easeInOutSine:function n(e){return-(r(i*e)-1)/2},easeInExpo:function n(t){return t===0?0:e(2,10*t-10)},easeOutExpo:function n(t){return t===1?1:1-e(2,-10*t)},easeInOutExpo:function n(t){return t===0?0:t===1?1:t<.5?e(2,20*t-10)/2:(2-e(2,-20*t+10))/2},easeInCirc:function n(u){return 1-t(1-e(u,2))},easeOutCirc:function n(u){return t(1-e(u-1,2))},easeInOutCirc:function n(u){return u<.5?(1-t(1-e(2*u,2)))/2:(t(1-e(-2*u+2,2))+1)/2},easeInElastic:function n(t){return t===0?0:t===1?1:-e(2,10*t-10)*u((t*10-10.75)*s)},easeOutElastic:function n(t){return t===0?0:t===1?1:e(2,-10*t)*u((t*10-.75)*s)+1},easeInOutElastic:function n(t){return t===0?0:t===1?1:t<.5?-(e(2,20*t-10)*u((20*t-11.125)*f))/2:e(2,-20*t+10)*u((20*t-11.125)*f)/2+1},easeInBack:function n(e){return o*e*e*e-a*e*e},easeOutBack:function n(t){return 1+o*e(t-1,3)+a*e(t-1,2)},easeInOutBack:function n(t){return t<.5?e(2*t,2)*((c+1)*2*t-c)/2:(e(2*t-2,2)*((c+1)*(t*2-2)+c)+2)/2},easeInBounce:function n(e){return 1-I(1-e)},easeOutBounce:I,easeInOutBounce:function n(e){return e<.5?(1-I(1-2*e))/2:(1+I(2*e-1))/2}})});