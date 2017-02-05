/*!
 * jQuery Fancy Buttons Plugin 1.0
 * https://github.com/skyfoxdesign/fancy-buttons
 *
 * @author Piers Elliott (hello@skyfox.design)
 * Included is a modified versions of Transit.js and jQuery Touch Plugin
 *
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2014 Rico Sta. Cruz
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 *
 * jQuery Touch Plugin 1.0.1
 * https://github.com/upwards/jquery-touch
 *
 * @autor Alexey Kupriyanenko (a.kupriyanenko@gmail.com)
 */

var buttonClass = "fancy-button";
var buttonContainer = "fancy-buttonContainer";
var buttonOverlayContainer = "fancy-buttonOverlayContainer";
var buttonOverlay = "fancy-buttonOverlay";

function assemble() {
  $("." + buttonClass).each(function() {
    $(this).wrap("<div class='" + buttonContainer + "'></div>").prepend("<div class='" + buttonOverlayContainer + "'><div class=" + buttonOverlay + "></div></div>");
  });
}

assemble();

! function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
  function d(a) {
    if (a in b.style) return a;
    for (var c = ["Moz", "Webkit", "O", "ms"], d = a.charAt(0).toUpperCase() + a.substr(1), e = 0; e < c.length; ++e) {
      var f = c[e] + d;
      if (f in b.style) return f
    }
  }

  function e() {
    return b.style[c.transform] = "", b.style[c.transform] = "rotateY(90deg)", "" !== b.style[c.transform]
  }

  function j(a) {
    return "string" == typeof a && this.parse(a), this
  }

  function k(a, b, c) {
    b === !0 ? a.queue(c) : b ? a.queue(b, c) : a.each(function() {
      c.call(this)
    })
  }

  function l(b) {
    var d = [];
    return a.each(b, function(b) {
      b = a.camelCase(b), b = a.transit.propertyMap[b] || a.cssProps[b] || b, b = o(b), c[b] && (b = o(c[b])), a.inArray(b, d) === -1 && d.push(b)
    }), d
  }

  function m(b, c, d, e) {
    var f = l(b);
    a.cssEase[d] && (d = a.cssEase[d]);
    var g = "" + q(c) + " " + d;
    parseInt(e, 10) > 0 && (g += " " + q(e));
    var h = [];
    return a.each(f, function(a, b) {
      h.push(b + " " + g)
    }), h.join(", ")
  }

  function n(b, d) {
    d || (a.cssNumber[b] = !0), a.transit.propertyMap[b] = c.transform, a.cssHooks[b] = {
      get: function(c) {
        var d = a(c).css("transit:transform");
        return d.get(b)
      },
      set: function(c, d) {
        var e = a(c).css("transit:transform");
        e.setFromString(b, d), a(c).css({
          "transit:transform": e
        })
      }
    }
  }

  function o(a) {
    return a.replace(/([A-Z])/g, function(a) {
      return "-" + a.toLowerCase()
    })
  }

  function p(a, b) {
    return "string" != typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + b : a
  }

  function q(b) {
    var c = b;
    return "string" != typeof c || c.match(/^[\-0-9\.]+/) || (c = a.fx.speeds[c] || a.fx.speeds._default), p(c, "ms")
  }
  a.transit = {
    version: "0.9.12",
    propertyMap: {
      marginLeft: "margin",
      marginRight: "margin",
      marginBottom: "margin",
      marginTop: "margin",
      paddingLeft: "padding",
      paddingRight: "padding",
      paddingBottom: "padding",
      paddingTop: "padding"
    },
    enabled: !0,
    useTransitionEnd: !1
  };
  var b = document.createElement("div"),
    c = {},
    f = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  c.transition = d("transition"), c.transitionProp = d("transitionProperty"), c.transitionDelay = d("transitionDelay"), c.transform = d("transform"), c.transformOrigin = d("transformOrigin"), c.filter = d("Filter"), c.transform3d = e();
  var g = {
      transition: "transitionend",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd",
      WebkitTransition: "webkitTransitionEnd",
      msTransition: "MSTransitionEnd"
    },
    h = c.transitionEnd = g[c.transition] || null;
  for (var i in c) c.hasOwnProperty(i) && "undefined" == typeof a.support[i] && (a.support[i] = c[i]);
  return b = null, a.cssEase = {
    _default: "ease",
    in: "ease-in",
    out: "ease-out",
    "in-out": "ease-in-out",
    snap: "cubic-bezier(0,1,.5,1)",
    easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
    easeInOutExpo: "cubic-bezier(1,0,0,1)",
    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
    easeInSine: "cubic-bezier(.47,0,.745,.715)",
    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
  }, a.cssHooks["transit:transform"] = {
    get: function(b) {
      return a(b).data("transform") || new j
    },
    set: function(b, d) {
      var e = d;
      e instanceof j || (e = new j(e)), "WebkitTransform" !== c.transform || f ? b.style[c.transform] = e.toString() : b.style[c.transform] = e.toString(!0), a(b).data("transform", e)
    }
  }, a.cssHooks.transform = {
    set: a.cssHooks["transit:transform"].set
  }, a.cssHooks.filter = {
    get: function(a) {
      return a.style[c.filter]
    },
    set: function(a, b) {
      a.style[c.filter] = b
    }
  }, a.fn.jquery < "1.8" && (a.cssHooks.transformOrigin = {
    get: function(a) {
      return a.style[c.transformOrigin]
    },
    set: function(a, b) {
      a.style[c.transformOrigin] = b
    }
  }, a.cssHooks.transition = {
    get: function(a) {
      return a.style[c.transition]
    },
    set: function(a, b) {
      a.style[c.transition] = b
    }
  }), n("scale"), n("scaleX"), n("scaleY"), n("translate"), n("rotate"), n("rotateX"), n("rotateY"), n("rotate3d"), n("perspective"), n("skewX"), n("skewY"), n("x", !0), n("y", !0), j.prototype = {
    setFromString: function(a, b) {
      var c = "string" == typeof b ? b.split(",") : b.constructor === Array ? b : [b];
      c.unshift(a), j.prototype.set.apply(this, c)
    },
    set: function(a) {
      var b = Array.prototype.slice.apply(arguments, [1]);
      this.setter[a] ? this.setter[a].apply(this, b) : this[a] = b.join(",")
    },
    get: function(a) {
      return this.getter[a] ? this.getter[a].apply(this) : this[a] || 0
    },
    setter: {
      rotate: function(a) {
        this.rotate = p(a, "deg")
      },
      rotateX: function(a) {
        this.rotateX = p(a, "deg")
      },
      rotateY: function(a) {
        this.rotateY = p(a, "deg")
      },
      scale: function(a, b) {
        void 0 === b && (b = a), this.scale = a + "," + b
      },
      skewX: function(a) {
        this.skewX = p(a, "deg")
      },
      skewY: function(a) {
        this.skewY = p(a, "deg")
      },
      perspective: function(a) {
        this.perspective = p(a, "px")
      },
      x: function(a) {
        this.set("translate", a, null)
      },
      y: function(a) {
        this.set("translate", null, a)
      },
      translate: function(a, b) {
        void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== a && void 0 !== a && (this._translateX = p(a, "px")), null !== b && void 0 !== b && (this._translateY = p(b, "px")), this.translate = this._translateX + "," + this._translateY
      }
    },
    getter: {
      x: function() {
        return this._translateX || 0
      },
      y: function() {
        return this._translateY || 0
      },
      scale: function() {
        var a = (this.scale || "1,1").split(",");
        return a[0] && (a[0] = parseFloat(a[0])), a[1] && (a[1] = parseFloat(a[1])), a[0] === a[1] ? a[0] : a
      },
      rotate3d: function() {
        for (var a = (this.rotate3d || "0,0,0,0deg").split(","), b = 0; b <= 3; ++b) a[b] && (a[b] = parseFloat(a[b]));
        return a[3] && (a[3] = p(a[3], "deg")), a
      }
    },
    parse: function(a) {
      var b = this;
      a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(a, c, d) {
        b.setFromString(c, d)
      })
    },
    toString: function(a) {
      var b = [];
      for (var d in this)
        if (this.hasOwnProperty(d)) {
          if (!c.transform3d && ("rotateX" === d || "rotateY" === d || "perspective" === d || "transformOrigin" === d)) continue;
          "_" !== d[0] && (a && "scale" === d ? b.push(d + "3d(" + this[d] + ",1)") : a && "translate" === d ? b.push(d + "3d(" + this[d] + ",0)") : b.push(d + "(" + this[d] + ")"))
        }
      return b.join(" ")
    }
  }, a.fn.transition = a.fn.transit = function(b, d, e, f) {
    var g = this,
      i = 0,
      j = !0,
      l = a.extend(!0, {}, b);
    "function" == typeof d && (f = d, d = void 0), "object" == typeof d && (e = d.easing, i = d.delay || 0, j = "undefined" == typeof d.queue || d.queue, f = d.complete, d = d.duration), "function" == typeof e && (f = e, e = void 0), "undefined" != typeof l.easing && (e = l.easing, delete l.easing), "undefined" != typeof l.duration && (d = l.duration, delete l.duration), "undefined" != typeof l.complete && (f = l.complete, delete l.complete), "undefined" != typeof l.queue && (j = l.queue, delete l.queue), "undefined" != typeof l.delay && (i = l.delay, delete l.delay), "undefined" == typeof d && (d = a.fx.speeds._default), "undefined" == typeof e && (e = a.cssEase._default), d = q(d);
    var n = m(l, d, e, i),
      o = a.transit.enabled && c.transition,
      p = o ? parseInt(d, 10) + parseInt(i, 10) : 0;
    if (0 === p) {
      var r = function(a) {
        g.css(l), f && f.apply(g), a && a()
      };
      return k(g, j, r), g
    }
    var s = {},
      t = function(b) {
        var d = !1,
          e = function() {
            d && g.unbind(h, e), p > 0 && g.each(function() {
              this.style[c.transition] = s[this] || null
            }), "function" == typeof f && f.apply(g), "function" == typeof b && b()
          };
        if (p > 0 && h && a.transit.useTransitionEnd) d = !0, g.bind(h, e);
        else {
          var i = window.setTimeout(e, p);
          g.data("timerCallback", i)
        }
        g.each(function() {
          p > 0 && (this.style[c.transition] = n), a(this).css(l)
        })
      },
      u = function(a) {
        this.offsetWidth, t(a)
      };
    return k(g, j, u), this
  }, a.fn.stopTransition = a.fn.stopTransit = function(b) {
    return this.each(function() {
      var d = a(this),
        e = this.style[c.transitionProp].replace(/\s+/g, "");
      if (e && 0 != e.length)
        for (var f = window.getComputedStyle(this), g = e.split(","), i = 0; i < g.length; i++) {
          var j = g[i];
          this.style[j] = f[j]
        }
      if (this.style[c.transitionProp] = "", this.style[c.transition] = "none", b === !0) {
        var k = elm.data("transitCallback");
        k && k()
      }
      d.data("transitCallback", null), a.transit.useTransitionEnd ? d.unbind(h) : window.clearTimeout(d.data("timerCallback")), d.clearQueue()
    }), this
  }, a.transit.getTransitionValue = m, a
});
var isTouchStateLeave = function(a) {
  var b = a.offset().left,
    c = a.offset().top,
    d = a.outerWidth() + b,
    e = a.outerHeight() + c;
  touchX = event.touches[0].pageX, touchY = event.touches[0].pageY;
  var f = touchX > b && touchX < d && touchY > c && touchY < e;
  return !f
};
jQuery.fn.extend({
  touchleave: function(a) {
    return $(this).each(function() {
      if (void 0 != this) {
        var b = this,
          c = $(this),
          d = !0;
        b.addEventListener("touchstart", function(a) {
          a.preventDefault()
        }, !1), b.addEventListener("touchmove", function(e) {
          isTouchStateLeave(c) ? (d && a.call(b, e), d = !1) : d = !0
        }, !1)
      }
    }), this
  }
});

document.addEventListener("touchstart", function() {}, true);

$.fn.tdown = function(onclick) {
  this.on("touchstart", function(e) {
    onclick.call(this, e);
    e.stopPropagation();
    e.preventDefault();
  });
  this.on("mousedown", function(e) {
    onclick.call(this, e);
  });
  return this;
};

$.fn.tup = function(onclick) {
  this.on("touchend", function(e) {
    onclick.call(this, e);
    e.stopPropagation();
    e.preventDefault();
  });
  this.on("mouseup", function(e) {
    onclick.call(this, e);
  });
  return this;
};

$.fn.tmove = function(onclick) {
  this.on("touchmove", function(e) {
    onclick.call(this, e);
    e.stopPropagation();
    e.preventDefault();
  });
  this.on("mousemove", function(e) {
    onclick.call(this, e);
  });
  return this;
};

var hover = null,
  click = false,
  down = false,
  width, height, percentX, percentY, amountX, amountY, clampedX, clampedY, divergenceX, divergenceY, inverseX, inverseY, scaleVariance, opacityVariance, element

function activeTransition(element) {
  return {
    perspective: '1000px',
    duration: $(element).is(hover) ? 0 : 100,
    rotateX: -clampedY + 'deg',
    rotateY: clampedX + 'deg',
    scale: 1 - scaleVariance
  };
}

function reenterTransition(element) {
  return {
    perspective: '1000px',
    duration: 100,
    rotateX: -clampedY + 'deg',
    rotateY: clampedX + 'deg',
    scale: 1 - scaleVariance
  };
}

function inactiveTransition(element) {
  $(element).stopTransition().transition({
    duration: 500,
    rotateX: '0deg',
    rotateY: '0deg',
    scale: 1
  });
  $(element).children("." + buttonOverlayContainer).stop().transition({
    'duration': 500,
    'opacity': '0'
  });
  hover = null;
}

function initialOpacity(element) {
  return {
    'duration': $(element).is(hover) ? 0 : 200,
    'opacity': 1
  };
}

function gradient(element) {
  return {
    duration: 0,
    'opacity': opacityVariance,
    'background': '-webkit-gradient(linear,' + (percentX + inverseX * 2) + '% ' + (percentY + inverseY * 2) + '%,' + (inverseX - percentX * 2) + '% ' + (inverseY - percentY * 2) + '%, from(rgba(0,0,0,0.5)), to(rgba(255,255,255,0.4)))'
  };
}

function calculateVar(pageX, pageY, offsetLeft, offsetTop, element) {
  width = $(element).width();
  height = $(element).height();
  percentX = (pageX - offsetLeft) / width * 100;
  percentY = (pageY - offsetTop) / height * 100;
  clampedX = (Math.min(10, Math.max(-10, ((percentX - 50) / 3))));
  clampedY = (Math.min(10, Math.max(-10, ((percentY - 50) / 3))));
  inverseX = 100 - percentX;
  inverseY = 100 - percentY;
  opacityVariance = (100 - (Math.min((100 - (Math.abs((percentX - 50))) * 2), (100 - (Math.abs((percentY - 50))) * 2)))) / 100;
  scaleVariance = ((Math.min((0.05 - (Math.abs((percentX - 50) / 1000))), (0.05 - (Math.abs((percentY - 50) / 1000))))));
  $(element).children("." + buttonOverlayContainer).stop().transition(initialOpacity(element));
  $(element).find("." + buttonOverlay).transition(gradient(element));
}

$("." + buttonClass).mousemove(function(e) {
  if ($(this).is(hover)) {
    calculateVar(e.pageX, e.pageY, this.offsetLeft, this.offsetTop, this);
    $(this).css(activeTransition(this));
  } else {
    calculateVar(e.pageX, e.pageY, this.offsetLeft, this.offsetTop, this);
    $(this).stopTransition().transition(activeTransition(this));
    hover = $(this);
  }
});

$("." + buttonContainer).mouseleave(function() {
  var child = $(this).children("." + buttonClass);
  inactiveTransition(child);
});

function triggerEnter(x, y) {
  $("." + buttonClass).each(function() {
    if (!(
        x <= $(this).offset().left || x >= $(this).offset().left + $(this).outerWidth() ||
        y <= $(this).offset().top || y >= $(this).offset().top + $(this).outerHeight()
      )) {

      if ($(this).is(hover)) {
        calculateVar(x, y, this.offsetLeft, this.offsetTop, this);
        $(this).stopTransition().transition(activeTransition(this));

      } else {
        calculateVar(x, y, this.offsetLeft, this.offsetTop, this);
        $(this).stopTransition().transition(reenterTransition(this));
        if (hover !== null) {
          inactiveTransition(hover);

        }
        hover = $(this);
      }

    } else {
      if ($(this).is(hover)) {
        $(this).stopTransition().transition(inactiveTransition(hover));
      }
    }
  });
}

$("." + buttonClass).on("touchstart", function(e) {
  calculateVar(e.pageX, e.pageY, this.offsetLeft, this.offsetTop, this);
  $(this).stopTransition().transition(activeTransition(this));
  hover = $(this);
  event.preventDefault();
});

$("." + buttonClass).on("touchmove", function(evt) {
  var touch = evt.originalEvent.touches[0]
  triggerEnter(touch.clientX, touch.clientY);

});

$("." + buttonClass).on("touchend", function() {
  if (hover !== null) {
    inactiveTransition(hover);
  }
});

$("." + buttonClass).on("mousedown", function(e) {
  $(this).stopTransition().transition({
    opacity: "0.8",
  });
});

$("." + buttonClass).on("mouseup", function(e) {
  $(this).stopTransition().transition({
    opacity: "1",
  });
});
