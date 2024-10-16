;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.jquery_dmenu_js = factory(root.jQuery);
    }
}(this, function(jQuery) {
    /*
     * jQuery dmenu v1.0.1
     * @requires jQuery 1.7.0 or later
     *
     * mmenu.frebsite.nl/dmenu-plugin
     *
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     *
     * License: CC-BY-4.0
     * http://creativecommons.org/licenses/by/4.0/
     */
    ! function(e) {
        var t = "dmenu",
            s = "1.0.1";
        if (!(e[t] && e[t].version > s)) {
            e[t] = function(e, t, s) {
                function i() {
                    n._code("resize:start"), n._code("resize:before"), n._code("resize"), n._code("resize:after"), n._code("resize:finish")
                }
                var n = this;
                this.$menu = e, this.opts = t, this.conf = s, this.vars = {}, this._code("setup:start"), this._code("setup:before"), this._code("setup"), this._code("setup:after"), this._code("setup:finish"), this._code("resize:start"), this._code("resize:before"), this._code("resize"), this._code("resize:after"), this._code("resize:finish"), o.$wndw.on(a.load, i);
                var r = null;
                return o.$wndw.on(a.resize, function(e) {
                    r && clearTimeout(r), r = setTimeout(i, 100)
                }), this
            }, e[t].version = s, e[t].code = {}, e[t].fitters = {}, e[t].options = {}, e[t].configuration = {
                classNames: {}
            }, e[t].prototype = {
                _code: function(s) {
                    var i, n;
                    for (i in e[t].code) n = e[t].code[i][s], "function" == typeof n && n.call(this)
                }
            }, e[t].code[t] = {
                setup: function() {
                    function e(s, n) {
                        for (var a in s) "string" == typeof s[a] ? t.filter("." + s[a]).removeClass(s[a]).addClass(n + a) : e(s[a], i[a] + "_")
                    }
                    var t = this.$menu.find("li");
                    e(this.conf.classNames, i.dm(""))
                }
            }, e.fn[t] = function(s, i) {
                return s = e.extend(!0, {}, e[t].options, s), i = e.extend(!0, {}, e[t].configuration, i), this.each(function() {
                    var n = e(this);
                    if (!n.data(t)) {
                        var a = new e[t](n, s, i);
                        n.data(t, a)
                    }
                })
            }, e[t].support = {
                touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1
            };
            var i, n, a, o;
            ! function() {
                o = {
                    $wndw: e(window),
                    $docu: e(document),
                    $html: e("html"),
                    $body: e("body")
                }, i = {}, n = {}, a = {}, e.each([i, n, a], function(e, t) {
                    t.add = function(e) {
                        e = e.split(" ");
                        for (var s = 0, i = e.length; s < i; s++) t[e[s]] = t.dm(e[s])
                    }
                }), i.dm = function(e) {
                    return "dm-" + e
                }, i.add("selected hidden"), n.dm = function(e) {
                    return "dm-" + e
                }, n.add("class"), a.dm = function(e) {
                    return e + ".dm"
                }, a.add("load resize mouseenter mouseleave"), e[t]._c = i, e[t]._d = n, e[t]._e = a, e[t]._g = o
            }()
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "item";
        e[t].options[s] = {
            fit: []
        }, e[t].configuration.classNames.selected = "Selected", e[t].configuration.classNames[s] = {}, e[t]._c.add(s);
        var i = e[t]._c,
            n = e[t]._d;
        e[t]._e, e[t]._g;
        e[t].prototype._itemsOverflow = function() {
            return this.$menu.children("ul").height() > this.$items.not("." + i.hidden).outerHeight()
        }, e[t].code[s] = {
            "setup:before": function() {
                this.$items = this.$menu.children("ul").children("li")
            },
            setup: function() {
                this.$menu.find("li").filter("." + i.selected).parentsUntil(this.$menu, "li").addClass(i.selected), this.vars.submenus && this.$menu.find("ul ul").parent().addClass(i[s] + "_parent")
            },
            "setup:finish": function() {
                this.$menu.find("li").each(function() {
                    e(this).attr("data-" + n["class"], e(this).attr("class"))
                })
            },
            "resize:before": function() {
                for (var s in e[t].fitters) {
                    var i = e[t].fitters[s];
                    i && i.reset && i.reset.call(this, this.$items)
                }
            },
            resize: function() {
                if (this.$menu.is(":visible"))
                    for (var s = 0; s < this.opts.item.fit.length; s++) {
                        var i = e[t].fitters[this.opts.item.fit[s].fitter];
                        if (i && i.fit) {
                            var n = this.$items,
                                a = this.opts.item.fit[s];
                            a.items && (n = n.filter(a.items)), a.order || (a.order = i.order), "rtl" == a.order && (n = e(n.get().reverse())), i.fit.call(this, n, a)
                        }
                    }
            }
        }, e[t].fitters[s] = {
            reset: function(t) {
                t.each(function() {
                    e(this).attr("class", e(this).attr("data-" + n["class"]))
                })
            }
        }, e[t].fitters.hide = {
            order: "rtl",
            reset: function(e) {
                e.removeClass(i.hidden)
            },
            fit: function(t, s) {
                if (this._itemsOverflow()) {
                    var n = this,
                        a = "all" == s.order;
                    t.each(function() {
                        (a || n._itemsOverflow()) && e(this).addClass(i.hidden)
                    })
                }
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "menu";
        e[t].options[s] = {}, e[t]._c.add(s);
        var i = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s] = {
            setup: function() {
                this.$menu.addClass(i[s])
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "subitem";
        e[t].options[s] = {}, e[t].configuration.classNames[s] = {}, e[t]._c.add(s)
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu";
        e[t].options[s] = {}, e[t]._c.add(s);
        var i = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s] = {
            "setup:before": function() {
                this.vars.submenus = this.opts.submenu && this.$menu.find("ul ul").length
            },
            setup: function() {
                this.vars.submenus && this.$menu.addClass(i.menu + "_" + s)
            }
        }, e[t].fitters.submenu = {
            order: "rtl",
            reset: function(t) {
                this.$menu.find("." + i.item + "_" + s + "-overflow").remove(), t.each(function() {
                    e(this).removeClass(i.hidden)
                })
            },
            fit: function(t, n) {
                if (this._itemsOverflow()) {
                    var a = this,
                        o = "all" == n.order,
                        r = "rtl" != n.order,
                        u = e('<li class="' + i.item + "_" + s + "-overflow " + i.item + '_parent"><span>Еще</span></li>');
                    this.$menu.children("ul").append(u), u = e("<ul />").appendTo(u), t.each(function() {
                        if (o || a._itemsOverflow()) {
                            var t = e(this).clone();
                            e(this).addClass(i.hidden);
                            for (var n = (t.attr("class") || "").split(" "), d = 0; d < n.length; d++) n[d].slice(0, 3) == i.dm("") && n[d] != i.selected && n[d] != i.item + "_parent" && t.removeClass(n[d]);
                            "function" == typeof a["icon-hide"] && a["icon-hide"](t), t.find("li").removeClass(i.item + "_" + s + "-mega").removeClass(i.subitem + "_" + s + "-inline"), u[r ? "append" : "prepend"](t)
                        }
                    })
                }
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "item",
            i = "align";
        e[t].configuration.classNames[s][i + "-right"] = "AlignRight";
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            "resize:after": function() {
                this.opts.menu[i] && "left" != this.opts.menu[i] || this.$items.filter("." + n[s] + "_" + i + "-right").css("margin-left", "").not("." + n.hidden).first().css("margin-left", "auto")
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "item",
            i = "bg";
        e[t].options[s][i] = !0;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "item",
            i = "border";
        e[t].options[s][i] = !1;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "item",
            i = "icon";
        e[t].configuration.classNames[s][i + "-hide"] = "IconHidden", e[t].configuration.classNames[s][i + "-only"] = "IconOnly";
        var n = e[t]._c,
            a = e[t]._d;
        e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.$items.children("a, span").children(".fa, .fab, .fas, .far, .fal, [data-icon]").each(function() {
                    var t = e(this).parent(),
                        a = t.parent();
                    a.hasClass(n[s] + "_" + i + "-hide") || a.hasClass(n[s] + "_" + i + "-only") || a.hasClass(n[s] + "_" + i + "-text") || a.addClass(n[s] + "_" + i + "-" + (t.text().length ? "text" : "only"))
                })
            }
        }, e[t].fitters[i + "-hide"] = {
            order: "all",
            reset: function(e) {
                this[i + "-hide"](e.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-hide"]')), this[i + "-only"](e.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-only"]')), this[i + "-text"](e.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-text"]'))
            },
            fit: function(t, o) {
                if (this._itemsOverflow()) {
                    var r = this;
                    t.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-text"]').each(function() {
                        (o || r._itemsOverflow()) && r[i + "-hide"](e(this))
                    })
                }
            }
        }, e[t].fitters[i + "-only"] = {
            order: "all",
            fit: function(t, o) {
                if (this._itemsOverflow()) {
                    var r = this,
                        u = "all" == o.order;
                    t.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-"]').each(function() {
                        (u || r._itemsOverflow()) && r[i + "-only"](e(this))
                    })
                }
            }
        }, e[t].prototype[i + "-reset"] = function(e) {
            e.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-"]').removeClass(n[s] + "_" + i + "-text").removeClass(n[s] + "_" + i + "-only").removeClass(n[s] + "_" + i + "-hide").find("del").contents().unwrap()
        }, e[t].prototype[i + "-hide"] = function(t) {
            this[i + "-reset"](t), t.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-"]').addClass(n[s] + "_" + i + "-hide").each(function() {
                var t = e(this).children("a, span");
                t.children(".fa, .fab, .fas, .far, .fal, [data-icon]").wrap('<del class="' + n.hidden + '" />')
            })
        }, e[t].prototype[i + "-only"] = function(t) {
            this[i + "-reset"](t), t.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-"]').addClass(n[s] + "_" + i + "-only").each(function() {
                var t = e(this).children("a, span");
                t.contents().not(t.children(".fa, .fab, .fas, .far, .fal, [data-icon]")).wrap('<del class="' + n.hidden + '" />')
            })
        }, e[t].prototype[i + "-text"] = function(e) {
            this[i + "-reset"](e), e.filter("[data-" + a["class"] + '*="' + n[s] + "_" + i + '-"]').addClass(n[s] + "_" + i + "-text")
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "item",
            i = "subindicator";
        e[t].options[s][i] = !1;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "menu",
            i = "align";
        e[t].options[s][i] = !1;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.opts[s][i] && this.$menu.addClass(n[s] + "_" + i + "-" + this.opts[s][i])
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "menu",
            i = "border";
        e[t].options[s][i] = !1;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.opts[s][i] && this.$menu.addClass(n[s] + "_" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "menu",
            i = "logo";
        e[t].options[s][i] = !0;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.opts[s][i] && this.$menu.children().first().is("a[style*=background-image:]") && this.$menu.addClass(n[s] + "_" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "subitem",
            i = "bg";
        e[t].options[s][i] = !0;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.vars.submenus && this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "subitem",
            i = "border";
        e[t].options[s][i] = !0;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.vars.submenus && this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "align";
        e[t].configuration.classNames.item[s + "-" + i + "-right"] = "SubmenuAlignRight", e[t].configuration.classNames.subitem[s + "-" + i + "-right"] = "SubSubmenuAlignRight";
        var n = e[t]._c,
            a = e[t]._d,
            o = e[t]._e,
            r = e[t]._g;
        e[t].prototype._submenuOverflowsLeft = function(e) {
            return e.offset().left < 0
        }, e[t].prototype._submenuOverflowsRight = function(e) {
            return e.offset().left + e.outerWidth() > r.$wndw.width()
        }, e[t].code[s + "_" + i] = {
            setup: function() {
                var t = this;
                ! function() {
                    var r = n.item + "_" + s + "-" + i + "-right",
                        u = n.item + "_" + s + "-fullwidth";
                    t.$menu.on(o.mouseenter, " > ul > li." + n.item + "_parent", function(s) {
                        var i = e(this),
                            n = i.children("ul");
                        if (!i.hasClass(u)) {
                            var a = !1;
                            i.hasClass(r) ? t._submenuOverflowsLeft(n) && (i.removeClass(r), a = !0) : t._submenuOverflowsRight(n) && (i.addClass(r), a = !0), a && (t._submenuOverflowsLeft(n) || t._submenuOverflowsRight(n)) && i.addClass(u)
                        }
                    }), t.$menu.on(o.mouseleave, " > ul > li." + n.item + "_parent", function(t) {
                        var s = e(this);
                        s.is("[data-" + a["class"] + '*="' + r + '"]') ? s.addClass(r) : s.removeClass(r), s.is("[data-" + a["class"] + '*="' + u + '"]') || s.removeClass(u)
                    })
                }(),
                function() {
                    var r = n.subitem + "_" + s + "-" + i + "-right";
                    t.$menu.on(o.mouseenter, " li li." + n.item + "_parent", function(s) {
                        var i = e(this),
                            n = i.children("ul");
                        i.hasClass(r) ? t._submenuOverflowsLeft(n) && i.removeClass(r) : t._submenuOverflowsRight(n) && i.addClass(r)
                    }), t.$menu.on(o.mouseleave, "li li." + n.item + "_parent", function(t) {
                        var s = e(this);
                        s.is("[data-" + a["class"] + '*="' + r + '"]') ? s.addClass(r) : s.removeClass(r)
                    })
                }()
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "arrow";
        e[t].options[s][i] = !1;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.vars.submenus && this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            },
            "setup:after": function() {
                this.vars.submenus && this.$menu.hasClass(n.menu + "_item-border") && this.$menu.removeClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "border";
        e[t].options[s][i] = !1;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.vars.submenus && this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "fullwidth";
        e[t].configuration.classNames.item[s + "-" + i] = "SubmenuFullwidth"
    }(jQuery),
    function(e) {}(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "inline";
        e[t].configuration.classNames.subitem[s + "-" + i] = "SubSubmenuInline"
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "mega";
        e[t].configuration.classNames.item[s + "-" + i] = "SubmenuMega";
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            "setup:after": function() {
                this.$menu.find("li").filter("." + n.item + "_" + s + "-" + i).children("ul").children("li").addClass(n.subitem + "_" + s + "-inline")
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "shadow";
        e[t].options[s][i] = !0;
        var n = e[t]._c;
        e[t]._d, e[t]._e, e[t]._g;
        e[t].code[s + "_" + i] = {
            setup: function() {
                this.vars.submenus && this.opts[s][i] && this.$menu.addClass(n.menu + "_" + s + "-" + i)
            }
        }
    }(jQuery),
    function(e) {
        var t = "dmenu",
            s = "submenu",
            i = "tabs";
        e[t].configuration.classNames.item[s + "-" + i] = "SubmenuTabs";
        var n = e[t]._c,
            a = e[t]._d,
            o = e[t]._e;
        e[t]._g;
        e[t].code[s + "_" + i] = {
            "setup:after": function() {
                this.$items.filter("." + n.item + "_" + s + "-" + i).addClass(n.item + "_" + s + "-fullwidth")
            },
            setup: function() {
                var t = this;
                ! function() {
                    t.$menu.on(o.mouseenter, " > ul > li." + n.item + "_" + s + "-" + i, function(a) {
                        var o = e(this).children("ul").children("." + n.selected);
                        o.length || (o = e(this).children("ul").children("li").first()), t[s + "-" + i + "-set"](o)
                    }), t.$menu.on(o.mouseleave, " > ul > li." + n.item + "_" + s + "-" + i, function(n) {
                        t[s + "-" + i + "-reset"](e(this))
                    }), t.$menu.on(o.mouseenter, " > ul > li." + n.item + "_" + s + "-" + i + " > ul > li", function(n) {
                        t[s + "-" + i + "-set"](e(this))
                    })
                }()
            }
        }, e[t].prototype[s + "-" + i + "-reset"] = function(e) {
            e.children("ul").children("li").removeClass(n.selected).filter("[data-" + a["class"] + '*="' + n.selected + '"]').addClass(n.selected)
        }, e[t].prototype[s + "-" + i + "-set"] = function(e) {
            var t = e.parent("ul"),
                s = e.children("ul");
            t.children("li").removeClass(n.selected), e.addClass(n.selected), t.css("minHeight", ""), s.css("minHeight", "");
            var i = s.outerHeight(),
                a = t.outerHeight(),
                o = Math.max(i, a);
            t.css({
                minHeight: o + parseInt(t.css("border-top-width"), 10)
            }), s.css({
                minHeight: o
            })
        }
    }(jQuery);
    return true;
}));