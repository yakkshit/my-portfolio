(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    73: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(5106);
        },
      ]);
    },
    4451: function (t, e, n) {
      'use strict';
      n.d(e, {
        V: function () {
          return w;
        },
      });
      var r = n(7568),
        i = n(1799),
        a = n(9396),
        o = n(9534),
        s = n(4051),
        c = n.n(s),
        u = n(5893),
        l = n(2323),
        d = n(6240),
        p = n(7378),
        m = n(7294);
      function f(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, r.Z)(
          c().mark(function t(e) {
            return c().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      'return',
                      new Promise(function (t) {
                        return setTimeout(t, e);
                      })
                    );
                  case 1:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var _ = n(2362),
        v = n(9085),
        x = n.n(v),
        g = [
          '\u30a2',
          '\u30a4',
          '\u30a6',
          '\u30a8',
          '\u30aa',
          '\u30ab',
          '\u30ad',
          '\u30af',
          '\u30b1',
          '\u30b3',
          '\u30b5',
          '\u30b7',
          '\u30b9',
          '\u30bb',
          '\u30bd',
          '\u30bf',
          '\u30c1',
          '\u30c4',
          '\u30c6',
          '\u30c8',
          '\u30ca',
          '\u30cb',
          '\u30cc',
          '\u30cd',
          '\u30ce',
          '\u30cf',
          '\u30d2',
          '\u30d5',
          '\u30d8',
          '\u30db',
          '\u30de',
          '\u30df',
          '\u30e0',
          '\u30e1',
          '\u30e2',
          '\u30e4',
          '\u30e6',
          '\u30e8',
          '\u30fc',
          '\u30e9',
          '\u30ea',
          '\u30eb',
          '\u30ec',
          '\u30ed',
          '\u30ef',
          '\u30f0',
          '\u30f1',
          '\u30f2',
          '\u30f3',
          '\u30ac',
          '\u30ae',
          '\u30b0',
          '\u30b2',
          '\u30b4',
          '\u30b6',
          '\u30b8',
          '\u30ba',
          '\u30bc',
          '\u30be',
          '\u30c0',
          '\u30c2',
          '\u30c5',
          '\u30c7',
          '\u30c9',
          '\u30d0',
          '\u30d3',
          '\u30d6',
          '\u30d9',
          '\u30dc',
          '\u30d1',
          '\u30d4',
          '\u30d7',
          '\u30da',
          '\u30dd',
        ],
        j = 'glyph',
        y = 'value';
      var w = (0, m.memo)(function (t) {
        var e = t.text,
          n = t.start,
          s = void 0 === n || n,
          h = t.delay,
          v = void 0 === h ? 0 : h,
          w = t.className,
          N = (0, o.Z)(t, ['text', 'start', 'delay', 'className']),
          b = (0, m.useRef)([{ type: j, value: '' }]),
          C = (0, m.useRef)(),
          k = (0, d.J)(),
          Z = (0, p.q)(0, { stiffness: 8, damping: 5 });
        return (
          (0, m.useEffect)(
            function () {
              var t = C.current,
                n = e.split(''),
                i = function () {
                  var e = b.current.map(function (t) {
                    return '<span class="'
                      .concat(x()[t.type], '">')
                      .concat(t.value, '</span>');
                  });
                  t.innerHTML = e.join('');
                },
                a = Z.onChange(function (t) {
                  (b.current = (function (t, e, n) {
                    return t.map(function (t, r) {
                      if (r < n) return { type: y, value: t };
                      if (n % 1 < 0.5) {
                        var i = Math.floor(Math.random() * g.length);
                        return { type: j, value: g[i] };
                      }
                      return { type: j, value: e[r].value };
                    });
                  })(n, b.current, t)),
                    i();
                }),
                o = (function () {
                  var t = (0, r.Z)(
                    c().mark(function t() {
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), f(v);
                            case 2:
                              Z.set(n.length);
                            case 3:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
              return (
                s && !k && o(),
                k &&
                  ((b.current = n.map(function (t, e) {
                    return { type: y, value: n[e] };
                  })),
                  i()),
                function () {
                  null === a || void 0 === a || a();
                }
              );
            },
            [Z, k, s, v, e]
          ),
          (0, u.jsxs)(
            'span',
            (0, a.Z)((0, i.Z)({ className: (0, _.Sh)(x().text, w) }, N), {
              children: [
                (0, u.jsx)(l.T, { className: x().label, children: e }),
                (0, u.jsx)('span', { 'aria-hidden': !0, className: x().content, ref: C }),
              ],
            })
          )
        );
      });
    },
    2221: function (t, e, n) {
      'use strict';
      n.d(e, {
        X: function () {
          return d;
        },
      });
      var r = n(1799),
        i = n(9396),
        a = n(9534),
        o = n(5893),
        s = n(7294),
        c = n(2362),
        u = n(361),
        l = n.n(u),
        d = function (t) {
          var e = t.children,
            n = t.level,
            u = void 0 === n ? 1 : n,
            d = t.as,
            p = t.align,
            m = void 0 === p ? 'auto' : p,
            f = t.weight,
            h = void 0 === f ? 'medium' : f,
            _ = t.className,
            v = (0, a.Z)(t, ['children', 'level', 'as', 'align', 'weight', 'className']),
            x = Math.min(Math.max(u, 0), 5),
            g = d || 'h'.concat(Math.max(x, 1));
          return (0, o.jsx)(s.Fragment, {
            children: (0, o.jsx)(
              g,
              (0, i.Z)(
                (0, r.Z)(
                  {
                    className: (0, c.Sh)(l().heading, _),
                    'data-align': m,
                    'data-weight': h,
                    'data-level': x,
                  },
                  v
                ),
                { children: e }
              )
            ),
          });
        };
    },
    5633: function (t, e, n) {
      'use strict';
      n.d(e, {
        h: function () {
          return l;
        },
      });
      var r = n(5893),
        i = n(9008),
        a = n.n(i),
        o = 'https://yakkshit.cedzlabs.com',
        s = 'Yakkshit Reddy',
        c = '@yakkshitMW',
        u = ''.concat(o, '/social-image.png'),
        l = function (t) {
          var e = t.title,
            n = t.description,
            i = t.prefix,
            l = void 0 === i ? s : i,
            d = t.ogImage,
            p = void 0 === d ? u : d,
            m = [l, e].filter(Boolean).join(' | ');
          return (0, r.jsxs)(a(), {
            children: [
              (0, r.jsx)('title', { children: m }, 'title'),
              (0, r.jsx)('meta', { name: 'description', content: n }, 'description'),
              (0, r.jsx)('meta', { name: 'author', content: s }),
              (0, r.jsx)('meta', { property: 'og:image', content: p }),
              (0, r.jsx)('meta', {
                property: 'og:image:alt',
                content: 'Banner for the site',
              }),
              (0, r.jsx)('meta', { property: 'og:image:type', content: 'image/png' }),
              (0, r.jsx)('meta', { property: 'og:image:width', content: '1280' }),
              (0, r.jsx)('meta', { property: 'og:image:height', content: '675' }),
              (0, r.jsx)('meta', { property: 'og:title', content: m }),
              (0, r.jsx)('meta', { property: 'og:site_name', content: s }),
              (0, r.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, r.jsx)('meta', { property: 'og:url', content: o }),
              (0, r.jsx)('meta', { property: 'og:description', content: n }),
              (0, r.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, r.jsx)('meta', { name: 'twitter:description', content: n }),
              (0, r.jsx)('meta', { name: 'twitter:title', content: m }),
              (0, r.jsx)('meta', { name: 'twitter:site', content: c }),
              (0, r.jsx)('meta', { name: 'twitter:creator', content: c }),
              (0, r.jsx)('meta', { name: 'twitter:image', content: p }),
            ],
          });
        };
    },
    5106: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        });
      var r = n(5893),
        i = '/_next/static/media/notfound.4ebd40af.jpg',
        a = n.p + 'static/media/notfound.7706c673.mp4',
        o = n(8526),
        s = n(4451),
        c = n(2221),
        u = n(5633),
        l = n(7346),
        d = n(7260),
        p = n(7294),
        m = n(2194),
        f = n.n(m);
      function h() {
        return (0, r.jsxs)('section', {
          className: f().page,
          children: [
            (0, r.jsx)(u.h, {
              title: '404 Not Found',
              description: "404 page not found. This page doesn't exist",
            }),
            (0, r.jsx)(d.u, {
              in: !0,
              children: function (t) {
                return (0, r.jsxs)(p.Fragment, {
                  children: [
                    (0, r.jsx)('div', {
                      className: f().details,
                      children: (0, r.jsxs)('div', {
                        className: f().text,
                        children: [
                          (0, r.jsx)(c.X, {
                            className: f().title,
                            'data-visible': t,
                            level: 0,
                            weight: 'bold',
                            children: '404',
                          }),
                          (0, r.jsx)(c.X, {
                            'aria-hidden': !0,
                            className: f().subheading,
                            'data-visible': t,
                            as: 'h2',
                            level: 3,
                            children: (0, r.jsx)(s.V, {
                              text: 'Error: Redacted',
                              start: t,
                              delay: 300,
                            }),
                          }),
                          (0, r.jsx)(l.x, {
                            className: f().description,
                            'data-visible': t,
                            as: 'p',
                            children:
                              'This page could not be found. It either doesn\u2019t exist or was deleted. Or perhaps you don\u2019t exist.',
                          }),
                          (0, r.jsx)(o.z, {
                            secondary: !0,
                            iconHoverShift: !0,
                            className: f().button,
                            'data-visible': t,
                            href: '/',
                            icon: 'chevronRight',
                            children: 'Back to homepage',
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)('div', {
                      className: f().videoContainer,
                      'data-visible': t,
                      children: [
                        (0, r.jsx)('video', {
                          autoPlay: !0,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          className: f().video,
                          'data-visible': t,
                          poster: i,
                          children: (0, r.jsx)('source', { src: a, type: 'video/mp4' }),
                        }),
                        (0, r.jsx)('a', {
                          className: f().credit,
                          'data-visible': t,
                          href: 'https://www.imdb.com/title/tt0113568/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          children: 'Animation from Ghost in the Shell (1995)',
                        }),
                      ],
                    }),
                  ],
                });
              },
            }),
          ],
        });
      }
    },
    9085: function (t) {
      t.exports = {
        text: 'DecoderText_text__ZFBnw',
        glyph: 'DecoderText_glyph__vCP7h',
        value: 'DecoderText_value__DIA5G',
      };
    },
    361: function (t) {
      t.exports = { heading: 'Heading_heading__209rB' };
    },
    2194: function (t) {
      t.exports = {
        page: '__404_page__lOAjs',
        videoContainer: '__404_videoContainer__asE2J',
        video: '__404_video__c2iBw',
        credit: '__404_credit__RZBXp',
        details: '__404_details__BeAQV',
        text: '__404_text__QkjlH',
        title: '__404_title__ySHYF',
        subheading: '__404_subheading__9GcyQ',
        description: '__404_description__wrY0N',
        button: '__404_button__UBp2P',
      };
    },
    7568: function (t, e, n) {
      'use strict';
      function r(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function i(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, a) {
            var o = t.apply(e, n);
            function s(t) {
              r(o, i, a, s, c, 'next', t);
            }
            function c(t) {
              r(o, i, a, s, c, 'throw', t);
            }
            s(void 0);
          });
        };
      }
      n.d(e, {
        Z: function () {
          return i;
        },
      });
    },
    7378: function (t, e, n) {
      'use strict';
      n.d(e, {
        q: function () {
          return d;
        },
      });
      var r = n(655),
        i = n(7294),
        a = n(754),
        o = n(406),
        s = n(3234),
        c = n(6014),
        u = n(6681);
      var l = n(8868);
      function d(t, e) {
        void 0 === e && (e = {});
        var n = (0, i.useContext)(c._).isStatic,
          d = (0, i.useRef)(null),
          p = (function (t) {
            var e = (0, u.h)(function () {
              return (0, s.B)(t);
            });
            if ((0, i.useContext)(c._).isStatic) {
              var n = (0, r.CR)((0, i.useState)(t), 2)[1];
              (0, i.useEffect)(function () {
                return e.onChange(n);
              }, []);
            }
            return e;
          })((0, o.i)(t) ? t.get() : t);
        return (
          (0, i.useMemo)(
            function () {
              return p.attach(function (t, i) {
                return n
                  ? i(t)
                  : (d.current && d.current.stop(),
                    (d.current = (0, a.j)(
                      (0, r.pi)(
                        (0, r.pi)({ from: p.get(), to: t, velocity: p.getVelocity() }, e),
                        { onUpdate: i }
                      )
                    )),
                    p.get());
              });
            },
            [JSON.stringify(e)]
          ),
          (function (t, e) {
            (0, l.L)(
              function () {
                if ((0, o.i)(t)) return t.onChange(e);
              },
              [e]
            );
          })(t, function (t) {
            return p.set(parseFloat(t));
          }),
          p
        );
      }
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return (e = 73), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
