(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    9410: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/contact',
        function () {
          return n(4756);
        },
      ]);
    },
    4451: function (e, t, n) {
      'use strict';
      n.d(t, {
        V: function () {
          return N;
        },
      });
      var r = n(7568),
        a = n(1799),
        o = n(9396),
        i = n(9534),
        s = n(4051),
        c = n.n(s),
        l = n(5893),
        u = n(2323),
        d = n(6240),
        m = n(7378),
        h = n(7294);
      function f(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = (0, r.Z)(
          c().mark(function e(t) {
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      new Promise(function (e) {
                        return setTimeout(e, t);
                      })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var v = n(2362),
        g = n(9085),
        _ = n.n(g),
        x = [
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
        y = 'glyph',
        j = 'value';
      var N = (0, h.memo)(function (e) {
        var t = e.text,
          n = e.start,
          s = void 0 === n || n,
          p = e.delay,
          g = void 0 === p ? 0 : p,
          N = e.className,
          b = (0, i.Z)(e, ['text', 'start', 'delay', 'className']),
          w = (0, h.useRef)([{ type: y, value: '' }]),
          C = (0, h.useRef)(),
          S = (0, d.J)(),
          T = (0, m.q)(0, { stiffness: 8, damping: 5 });
        return (
          (0, h.useEffect)(
            function () {
              var e = C.current,
                n = t.split(''),
                a = function () {
                  var t = w.current.map(function (e) {
                    return '<span class="'
                      .concat(_()[e.type], '">')
                      .concat(e.value, '</span>');
                  });
                  e.innerHTML = t.join('');
                },
                o = T.onChange(function (e) {
                  (w.current = (function (e, t, n) {
                    return e.map(function (e, r) {
                      if (r < n) return { type: j, value: e };
                      if (n % 1 < 0.5) {
                        var a = Math.floor(Math.random() * x.length);
                        return { type: y, value: x[a] };
                      }
                      return { type: y, value: t[r].value };
                    });
                  })(n, w.current, e)),
                    a();
                }),
                i = (function () {
                  var e = (0, r.Z)(
                    c().mark(function e() {
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), f(g);
                            case 2:
                              T.set(n.length);
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
              return (
                s && !S && i(),
                S &&
                  ((w.current = n.map(function (e, t) {
                    return { type: j, value: n[t] };
                  })),
                  a()),
                function () {
                  null === o || void 0 === o || o();
                }
              );
            },
            [T, S, s, g, t]
          ),
          (0, l.jsxs)(
            'span',
            (0, o.Z)((0, a.Z)({ className: (0, v.Sh)(_().text, N) }, b), {
              children: [
                (0, l.jsx)(u.T, { className: _().label, children: t }),
                (0, l.jsx)('span', { 'aria-hidden': !0, className: _().content, ref: C }),
              ],
            })
          )
        );
      });
    },
    3185: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return u;
        },
      });
      var r = n(1799),
        a = n(9396),
        o = n(9534),
        i = n(5893),
        s = n(2362),
        c = n(3265),
        l = n.n(c),
        u = function (e) {
          var t = e.lineWidth,
            n = e.lineHeight,
            c = e.notchWidth,
            u = e.notchHeight,
            d = e.collapseDelay,
            m = e.collapsed,
            h = e.className,
            f = e.style,
            p = (0, o.Z)(e, [
              'lineWidth',
              'lineHeight',
              'notchWidth',
              'notchHeight',
              'collapseDelay',
              'collapsed',
              'className',
              'style',
            ]);
          return (0, i.jsxs)(
            'div',
            (0, a.Z)(
              (0, r.Z)(
                {
                  className: (0, s.Sh)(l().divider, h),
                  style: (0, s.Fh)(
                    {
                      lineWidth: t,
                      lineHeight: n,
                      notchWidth: c,
                      notchHeight: u,
                      collapseDelay: (0, s.aU)(d),
                    },
                    f
                  ),
                },
                p
              ),
              {
                children: [
                  (0, i.jsx)('div', { className: l().line, 'data-collapsed': m }),
                  (0, i.jsx)('div', {
                    className: l().notch,
                    'data-collapsed': m,
                    style: (0, s.Fh)({ collapseDelay: (0, s.aU)(d + 160) }),
                  }),
                ],
              }
            )
          );
        };
      u.defaultProps = {
        lineWidth: '100%',
        lineHeight: '2px',
        notchWidth: '90px',
        notchHeight: '10px',
        collapsed: !1,
        collapseDelay: 0,
      };
    },
    5192: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var r = n(5893),
        a = n(270),
        o = n(7346),
        i = n(2362),
        s = n(1883),
        c = n.n(s),
        l = function (e) {
          var t = e.className;
          return (0, r.jsx)('footer', {
            className: (0, i.Sh)(c().footer, t),
            children: (0, r.jsxs)(o.x, {
              size: 's',
              align: 'center',
              children: [
                (0, r.jsx)('span', {
                  className: c().date,
                  children: '\xa9 '.concat(new Date().getFullYear(), ' Yakkshit Reddy.'),
                }),
                (0, r.jsx)(a.r, {
                  secondary: !0,
                  className: c().link,
                  href: '/humans.txt',
                  target: '_self',
                  children: 'Crafted by yours truly',
                }),
              ],
            }),
          });
        };
    },
    2221: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return d;
        },
      });
      var r = n(1799),
        a = n(9396),
        o = n(9534),
        i = n(5893),
        s = n(7294),
        c = n(2362),
        l = n(361),
        u = n.n(l),
        d = function (e) {
          var t = e.children,
            n = e.level,
            l = void 0 === n ? 1 : n,
            d = e.as,
            m = e.align,
            h = void 0 === m ? 'auto' : m,
            f = e.weight,
            p = void 0 === f ? 'medium' : f,
            v = e.className,
            g = (0, o.Z)(e, ['children', 'level', 'as', 'align', 'weight', 'className']),
            _ = Math.min(Math.max(l, 0), 5),
            x = d || 'h'.concat(Math.max(_, 1));
          return (0, i.jsx)(s.Fragment, {
            children: (0, i.jsx)(
              x,
              (0, a.Z)(
                (0, r.Z)(
                  {
                    className: (0, c.Sh)(u().heading, v),
                    'data-align': h,
                    'data-weight': p,
                    'data-level': _,
                  },
                  g
                ),
                { children: t }
              )
            ),
          });
        };
    },
    270: function (e, t, n) {
      'use strict';
      n.d(t, {
        r: function () {
          return f;
        },
      });
      var r = n(1799),
        a = n(9396),
        o = n(9534),
        i = n(5893),
        s = n(1664),
        c = n.n(s),
        l = n(7294),
        u = n(2362),
        d = n(8469),
        m = n.n(d),
        h = ['txt', 'png', 'jpg'];
      var f = (0, l.forwardRef)(function (e, t) {
          var n = e.href,
            a = (0, o.Z)(e, ['href']);
          return (function (e) {
            var t = h.includes(null === e || void 0 === e ? void 0 : e.split('.').pop());
            return (
              (null === e || void 0 === e ? void 0 : e.includes('://')) ||
              '#' === (null === e || void 0 === e ? void 0 : e[0]) ||
              t
            );
          })(n)
            ? (0, i.jsx)(p, (0, r.Z)({ href: n, ref: t }, a))
            : (0, i.jsx)(c(), {
                passHref: !0,
                href: n,
                scroll: !1,
                children: (0, i.jsx)(p, (0, r.Z)({ ref: t }, a)),
              });
        }),
        p = (0, l.forwardRef)(function (e, t) {
          var n = e.rel,
            s = e.target,
            c = e.children,
            l = e.secondary,
            d = e.className,
            h = e.href,
            f = (0, o.Z)(e, [
              'rel',
              'target',
              'children',
              'secondary',
              'className',
              'href',
            ]),
            p = null === h || void 0 === h ? void 0 : h.includes('://'),
            v = n || (p ? 'noreferrer noopener' : void 0),
            g = s || (p ? '_blank' : void 0);
          return (0,
          i.jsx)('a', (0, a.Z)((0, r.Z)({ className: (0, u.Sh)(m().link, d), 'data-secondary': l, rel: v, href: h, target: g, ref: t }, f), { children: c }));
        });
    },
    5633: function (e, t, n) {
      'use strict';
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(5893),
        a = n(9008),
        o = n.n(a),
        i = 'https://yakkshit.cedzlabs.com',
        s = 'Yakkshit Reddy',
        c = '@yakkshitMW',
        l = ''.concat(i, '/social-image.png'),
        u = function (e) {
          var t = e.title,
            n = e.description,
            a = e.prefix,
            u = void 0 === a ? s : a,
            d = e.ogImage,
            m = void 0 === d ? l : d,
            h = [u, t].filter(Boolean).join(' | ');
          return (0, r.jsxs)(o(), {
            children: [
              (0, r.jsx)('title', { children: h }, 'title'),
              (0, r.jsx)('meta', { name: 'description', content: n }, 'description'),
              (0, r.jsx)('meta', { name: 'author', content: s }),
              (0, r.jsx)('meta', { property: 'og:image', content: m }),
              (0, r.jsx)('meta', {
                property: 'og:image:alt',
                content: 'Banner for the site',
              }),
              (0, r.jsx)('meta', { property: 'og:image:type', content: 'image/png' }),
              (0, r.jsx)('meta', { property: 'og:image:width', content: '1280' }),
              (0, r.jsx)('meta', { property: 'og:image:height', content: '675' }),
              (0, r.jsx)('meta', { property: 'og:title', content: h }),
              (0, r.jsx)('meta', { property: 'og:site_name', content: s }),
              (0, r.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, r.jsx)('meta', { property: 'og:url', content: i }),
              (0, r.jsx)('meta', { property: 'og:description', content: n }),
              (0, r.jsx)('meta', {
                name: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, r.jsx)('meta', { name: 'twitter:description', content: n }),
              (0, r.jsx)('meta', { name: 'twitter:title', content: h }),
              (0, r.jsx)('meta', { name: 'twitter:site', content: c }),
              (0, r.jsx)('meta', { name: 'twitter:creator', content: c }),
              (0, r.jsx)('meta', { name: 'twitter:image', content: m }),
            ],
          });
        };
    },
    6602: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return d;
        },
      });
      var r = n(1799),
        a = n(9396),
        o = n(9534),
        i = n(5893),
        s = n(7294),
        c = n(2362),
        l = n(4828),
        u = n.n(l),
        d = (0, s.forwardRef)(function (e, t) {
          var n = e.as,
            s = void 0 === n ? 'div' : n,
            l = e.children,
            d = e.className,
            m = (0, o.Z)(e, ['as', 'children', 'className']);
          return (0,
          i.jsx)(s, (0, a.Z)((0, r.Z)({ className: (0, c.Sh)(u().section, d), ref: t }, m), { children: l }));
        });
    },
    4756: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        });
      var r = n(7568),
        a = n(1799),
        o = n(4051),
        i = n.n(o),
        s = n(5893),
        c = n(8526),
        l = n(4451),
        u = n(3185),
        d = n(5192),
        m = n(2221),
        h = n(1879),
        f = n(9396),
        p = n(9534),
        v = n(3994),
        g = n(7260),
        _ = n(7294),
        x = n(2362),
        y = n(6600),
        j = n.n(y),
        N = n(8108),
        b = n.n(N),
        w = function (e) {
          var t = e.className,
            n = e.resize,
            r = void 0 === n ? 'none' : n,
            o = e.value,
            i = e.onChange,
            c = e.minRows,
            l = void 0 === c ? 1 : c,
            u = e.maxRows,
            d = (0, p.Z)(e, [
              'className',
              'resize',
              'value',
              'onChange',
              'minRows',
              'maxRows',
            ]),
            m = (0, _.useState)(l),
            h = m[0],
            f = m[1],
            v = (0, _.useState)(),
            g = v[0],
            y = v[1],
            j = (0, _.useRef)();
          (0, _.useEffect)(function () {
            var e = getComputedStyle(j.current),
              t = parseInt(e.lineHeight, 10),
              n = parseInt(e.paddingTop, 10) + parseInt(e.paddingBottom, 10);
            y({ lineHeight: t, paddingHeight: n });
          }, []);
          return (0, s.jsx)(
            'textarea',
            (0, a.Z)(
              {
                className: (0, x.Sh)(b().textarea, t),
                ref: j,
                onChange: function (e) {
                  i(e);
                  var t = g.lineHeight,
                    n = g.paddingHeight,
                    r = e.target.rows;
                  e.target.rows = l;
                  var a = ~~((e.target.scrollHeight - n) / t);
                  a === r && (e.target.rows = a),
                    u &&
                      a >= u &&
                      ((e.target.rows = u), (e.target.scrollTop = e.target.scrollHeight)),
                    f(u && a > u ? u : a);
                },
                style: (0, x.Fh)({ resize: r }),
                rows: h,
                value: o,
              },
              d
            )
          );
        },
        C = function (e) {
          var t = e.id,
            n = e.label,
            r = e.value,
            o = e.multiline,
            i = e.className,
            c = e.style,
            l = e.error,
            u = e.onBlur,
            d = e.autoComplete,
            m = e.required,
            y = e.maxLength,
            N = e.type,
            b = e.onChange,
            C = (0, p.Z)(e, [
              'id',
              'label',
              'value',
              'multiline',
              'className',
              'style',
              'error',
              'onBlur',
              'autoComplete',
              'required',
              'maxLength',
              'type',
              'onChange',
            ]),
            S = (0, _.useState)(!1),
            T = S[0],
            Z = S[1],
            k = (0, _.useId)(),
            E = (0, _.useRef)(),
            M = t || ''.concat(k, 'input'),
            H = ''.concat(M, '-label'),
            F = ''.concat(M, '-error'),
            I = o ? w : 'input';
          return (0, s.jsxs)(
            'div',
            (0, f.Z)(
              (0, a.Z)(
                { className: (0, x.Sh)(j().container, i), 'data-error': !!l, style: c },
                C
              ),
              {
                children: [
                  (0, s.jsxs)('div', {
                    className: j().content,
                    children: [
                      (0, s.jsx)('label', {
                        className: j().label,
                        'data-focused': T,
                        'data-filled': !!r,
                        id: H,
                        htmlFor: M,
                        children: n,
                      }),
                      (0, s.jsx)(I, {
                        className: j().input,
                        id: M,
                        'aria-labelledby': H,
                        'aria-describedby': l ? F : void 0,
                        onFocus: function () {
                          return Z(!0);
                        },
                        onBlur: function (e) {
                          Z(!1), u && u(e);
                        },
                        value: r,
                        onChange: b,
                        autoComplete: d,
                        required: m,
                        maxLength: y,
                        type: N,
                      }),
                      (0, s.jsx)('div', { className: j().underline, 'data-focused': T }),
                    ],
                  }),
                  (0, s.jsx)(g.u, {
                    unmount: !0,
                    in: l,
                    timeout: (0, x.zG)(v.T.base.durationM),
                    children: function (e) {
                      var t;
                      return (0, s.jsx)('div', {
                        className: j().error,
                        'data-visible': e,
                        id: F,
                        role: 'alert',
                        style: (0, x.Fh)({
                          height: e
                            ? null === (t = E.current) || void 0 === t
                              ? void 0
                              : t.getBoundingClientRect().height
                            : 0,
                        }),
                        children: (0, s.jsxs)('div', {
                          className: j().errorMessage,
                          ref: E,
                          children: [(0, s.jsx)(h.J, { icon: 'error' }), l],
                        }),
                      });
                    },
                  }),
                ],
              }
            )
          );
        },
        S = n(5633),
        T = n(6602),
        Z = n(7346),
        k = n(4529),
        E = n(6011),
        M = n.n(E),
        H = function () {
          var e = (0, _.useRef)(),
            t = (0, k.pJ)(''),
            n = (0, k.pJ)(''),
            o = (0, _.useState)(!1),
            f = o[0],
            p = o[1],
            y = (0, _.useState)(!1),
            j = y[0],
            N = y[1],
            b = (0, _.useState)(''),
            w = b[0],
            E = b[1],
            H = v.T.base.durationS,
            z = (function () {
              var e = (0, r.Z)(
                i().mark(function e(r) {
                  var a, o, s;
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((r.preventDefault(), E(''), !f)) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt('return');
                          case 4:
                            return (
                              (e.prev = 4),
                              p(!0),
                              (e.next = 8),
                              fetch(''.concat('https://api.cedzlabs.com', '/message'), {
                                method: 'POST',
                                mode: 'cors',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  email: t.value,
                                  message: n.value,
                                }),
                              })
                            );
                          case 8:
                            return (a = e.sent), (e.next = 11), a.json();
                          case 11:
                            if (
                              ((o = e.sent),
                              !(s = F({
                                status: null === a || void 0 === a ? void 0 : a.status,
                                errorMessage:
                                  null === o || void 0 === o ? void 0 : o.error,
                                fallback: 'There was a problem sending your message',
                              })))
                            ) {
                              e.next = 15;
                              break;
                            }
                            throw new Error(s);
                          case 15:
                            N(!0), p(!1), (e.next = 23);
                            break;
                          case 19:
                            (e.prev = 19), (e.t0 = e.catch(4)), p(!1), E(e.t0.message);
                          case 23:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 19]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, s.jsxs)(T.$, {
            className: M().contact,
            children: [
              (0, s.jsx)(S.h, {
                title: 'Contact',
                description:
                  'Send me a message if you\u2019re interested in discussing a project or if you just want to say hi',
              }),
              (0, s.jsx)(g.u, {
                unmount: !0,
                in: !j,
                timeout: 1600,
                children: function (r, o) {
                  return (0, s.jsxs)('form', {
                    className: M().form,
                    method: 'post',
                    onSubmit: z,
                    children: [
                      (0, s.jsx)(m.X, {
                        className: M().title,
                        'data-status': o,
                        level: 3,
                        as: 'h1',
                        style: I(v.T.base.durationXS, H, 0.3),
                        children: (0, s.jsx)(l.V, {
                          text: 'Say hello',
                          start: 'exited' !== o,
                          delay: 300,
                        }),
                      }),
                      (0, s.jsx)(u.i, {
                        className: M().divider,
                        'data-status': o,
                        style: I(v.T.base.durationXS, H, 0.4),
                      }),
                      (0, s.jsx)(
                        C,
                        (0, a.Z)(
                          {
                            required: !0,
                            className: M().input,
                            'data-status': o,
                            style: I(v.T.base.durationXS, H),
                            autoComplete: 'email',
                            label: 'Your Email',
                            type: 'email',
                            maxLength: 512,
                          },
                          t
                        )
                      ),
                      (0, s.jsx)(
                        C,
                        (0, a.Z)(
                          {
                            required: !0,
                            multiline: !0,
                            className: M().input,
                            'data-status': o,
                            style: I(v.T.base.durationS, H),
                            autoComplete: 'off',
                            label: 'Message',
                            maxLength: 4096,
                          },
                          n
                        )
                      ),
                      (0, s.jsx)(g.u, {
                        in: w,
                        timeout: (0, x.zG)(v.T.base.durationM),
                        children: function (t) {
                          var n;
                          return (0, s.jsx)('div', {
                            className: M().formError,
                            'data-status': t,
                            style: (0, x.Fh)({
                              height: t
                                ? null === (n = e.current) || void 0 === n
                                  ? void 0
                                  : n.offsetHeight
                                : 0,
                            }),
                            children: (0, s.jsx)('div', {
                              className: M().formErrorContent,
                              ref: e,
                              children: (0, s.jsxs)('div', {
                                className: M().formErrorMessage,
                                children: [
                                  (0, s.jsx)(h.J, {
                                    className: M().formErrorIcon,
                                    icon: 'error',
                                  }),
                                  w,
                                ],
                              }),
                            }),
                          });
                        },
                      }),
                      (0, s.jsx)(c.z, {
                        className: M().button,
                        'data-status': o,
                        'data-sending': f,
                        style: I(v.T.base.durationM, H),
                        disabled: f,
                        loading: f,
                        loadingText: 'Sending...',
                        icon: 'send',
                        type: 'submit',
                        children: 'Send message',
                      }),
                    ],
                  });
                },
              }),
              (0, s.jsx)(g.u, {
                unmount: !0,
                in: j,
                children: function (e, t) {
                  return (0, s.jsxs)('div', {
                    className: M().complete,
                    'aria-live': 'polite',
                    children: [
                      (0, s.jsx)(m.X, {
                        level: 3,
                        as: 'h3',
                        className: M().completeTitle,
                        'data-status': t,
                        children: 'Message Sent',
                      }),
                      (0, s.jsx)(Z.x, {
                        size: 'l',
                        as: 'p',
                        className: M().completeText,
                        'data-status': t,
                        style: I(v.T.base.durationXS),
                        children:
                          'I\u2019ll get back to you within a couple days, sit tight',
                      }),
                      (0, s.jsx)(c.z, {
                        secondary: !0,
                        iconHoverShift: !0,
                        className: M().completeButton,
                        'data-status': t,
                        style: I(v.T.base.durationM),
                        href: '/',
                        icon: 'chevronRight',
                        children: 'Back to homepage',
                      }),
                    ],
                  });
                },
              }),
              (0, s.jsx)(d.$, { className: M().footer }),
            ],
          });
        };
      function F(e) {
        var t = e.status,
          n = e.errorMessage,
          r = e.fallback;
        if (200 === t) return !1;
        return (
          n ||
          {
            500: 'There was a problem with the server, try again later',
            404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
          }[t] ||
          (void 0 === r ? 'There was a problem with your request' : r)
        );
      }
      function I(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, x.aU)(0),
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = (0, x.zG)(e) * n;
        return (0, x.Fh)({ delay: (0, x.aU)(((0, x.zG)(t) + r).toFixed(0)) });
      }
    },
    9085: function (e) {
      e.exports = {
        text: 'DecoderText_text__ZFBnw',
        glyph: 'DecoderText_glyph__vCP7h',
        value: 'DecoderText_value__DIA5G',
      };
    },
    3265: function (e) {
      e.exports = {
        divider: 'Divider_divider__R3vqT',
        line: 'Divider_line__bFTLx',
        notch: 'Divider_notch__1kxAj',
      };
    },
    1883: function (e) {
      e.exports = {
        footer: 'Footer_footer__nKPS_',
        link: 'Footer_link__2Y2qR',
        date: 'Footer_date__d0nD9',
      };
    },
    361: function (e) {
      e.exports = { heading: 'Heading_heading__209rB' };
    },
    6600: function (e) {
      e.exports = {
        container: 'Input_container__7Goxk',
        content: 'Input_content__uzVSn',
        input: 'Input_input__7s5ug',
        root: 'Input_root__JGHFS',
        underline: 'Input_underline__NozM9',
        label: 'Input_label__mcV2a',
        error: 'Input_error___w1d4',
        errorMessage: 'Input_errorMessage__wTzme',
      };
    },
    8108: function (e) {
      e.exports = { textarea: 'TextArea_textarea__7ccmD' };
    },
    8469: function (e) {
      e.exports = { link: 'Link_link__1F_mp' };
    },
    4828: function (e) {
      e.exports = { section: 'Section_section__FuI7l' };
    },
    6011: function (e) {
      e.exports = {
        contact: 'Contact_contact__lAyjk',
        form: 'Contact_form__u7Fnx',
        title: 'Contact_title__e7dct',
        divider: 'Contact_divider__Cuz6Q',
        input: 'Contact_input__utqPy',
        button: 'Contact_button__ixpaN',
        complete: 'Contact_complete__sjfYC',
        completeTitle: 'Contact_completeTitle__NExKF',
        completeText: 'Contact_completeText__nUJX_',
        completeButton: 'Contact_completeButton__dkqQj',
        formError: 'Contact_formError__i2_IT',
        formErrorContent: 'Contact_formErrorContent__vBJx_',
        formErrorMessage: 'Contact_formErrorMessage__wEAfL',
        formErrorIcon: 'Contact_formErrorIcon__cK4yz',
        footer: 'Contact_footer__Qm_3b',
      };
    },
    7568: function (e, t, n) {
      'use strict';
      function r(e, t, n, r, a, o, i) {
        try {
          var s = e[o](i),
            c = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, n);
            function s(e) {
              r(i, a, o, s, c, 'next', e);
            }
            function c(e) {
              r(i, a, o, s, c, 'throw', e);
            }
            s(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
    },
    7378: function (e, t, n) {
      'use strict';
      n.d(t, {
        q: function () {
          return d;
        },
      });
      var r = n(655),
        a = n(7294),
        o = n(754),
        i = n(406),
        s = n(3234),
        c = n(6014),
        l = n(6681);
      var u = n(8868);
      function d(e, t) {
        void 0 === t && (t = {});
        var n = (0, a.useContext)(c._).isStatic,
          d = (0, a.useRef)(null),
          m = (function (e) {
            var t = (0, l.h)(function () {
              return (0, s.B)(e);
            });
            if ((0, a.useContext)(c._).isStatic) {
              var n = (0, r.CR)((0, a.useState)(e), 2)[1];
              (0, a.useEffect)(function () {
                return t.onChange(n);
              }, []);
            }
            return t;
          })((0, i.i)(e) ? e.get() : e);
        return (
          (0, a.useMemo)(
            function () {
              return m.attach(function (e, a) {
                return n
                  ? a(e)
                  : (d.current && d.current.stop(),
                    (d.current = (0, o.j)(
                      (0, r.pi)(
                        (0, r.pi)({ from: m.get(), to: e, velocity: m.getVelocity() }, t),
                        { onUpdate: a }
                      )
                    )),
                    m.get());
              });
            },
            [JSON.stringify(t)]
          ),
          (function (e, t) {
            (0, u.L)(
              function () {
                if ((0, i.i)(e)) return e.onChange(t);
              },
              [t]
            );
          })(e, function (e) {
            return m.set(parseFloat(e));
          }),
          m
        );
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 9410), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
