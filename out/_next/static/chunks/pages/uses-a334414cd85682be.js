(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [277],
  {
    7722: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/uses',
        function () {
          return n(32);
        },
      ]);
    },
    5149: function (e, s, n) {
      'use strict';
      n.d(s, {
        a: function () {
          return d;
        },
        H: function () {
          return h;
        },
      });
      var t = n(1799),
        r = n(9396),
        i = n(9534),
        a = n(5893),
        c = n(2362),
        o = n(3509),
        l = n.n(o),
        d = function (e) {
          var s = e.ordered,
            n = e.children,
            o = e.className,
            d = (0, i.Z)(e, ['ordered', 'children', 'className']),
            h = s ? 'ol' : 'ul';
          return (0, a.jsx)(
            h,
            (0, r.Z)((0, t.Z)({ className: (0, c.Sh)(l().list, o) }, d), { children: n })
          );
        },
        h = function (e) {
          var s = e.children,
            n = (0, i.Z)(e, ['children']);
          return (0, a.jsx)(
            'li',
            (0, r.Z)((0, t.Z)({ className: l().item }, n), { children: s })
          );
        };
    },
    2045: function (e, s, n) {
      'use strict';
      n.d(s, {
        FV: function () {
          return w;
        },
        XR: function () {
          return p;
        },
        T4: function () {
          return g;
        },
        KZ: function () {
          return y;
        },
        II: function () {
          return v;
        },
        nU: function () {
          return S;
        },
        IG: function () {
          return b;
        },
        d: function () {
          return N;
        },
        Hr: function () {
          return I;
        },
        ee: function () {
          return k;
        },
      });
      var t = n(1799),
        r = n(9396),
        i = n(9534),
        a = n(5893),
        c = n(8526),
        o = n(2221),
        l = n(1424),
        d = n(6602),
        h = n(7346),
        u = n(3994),
        A = n(7260),
        m = n(4529),
        j = n(7294),
        x = n(2362),
        f = n(5903),
        _ = n.n(f);
      function g(e) {
        var s = e.title,
          n = e.description,
          t = e.linkLabel,
          r = void 0 === t ? 'Visit website' : t,
          i = e.url,
          l = e.roles,
          u = e.className;
        return (0, a.jsx)(d.$, {
          className: (0, x.Sh)(_().header, u),
          as: 'section',
          children: (0, a.jsxs)('div', {
            className: _().headerContent,
            style: (0, x.Fh)({ initDelay: (0, x.aU)(300) }),
            children: [
              (0, a.jsxs)('div', {
                className: _().details,
                children: [
                  (0, a.jsx)(o.X, {
                    className: _().title,
                    level: 2,
                    as: 'h1',
                    children: s,
                  }),
                  (0, a.jsx)(h.x, {
                    className: _().description,
                    size: 'xl',
                    as: 'p',
                    children: n,
                  }),
                  !!i &&
                    (0, a.jsx)(c.z, {
                      secondary: !0,
                      iconHoverShift: !0,
                      className: _().linkButton,
                      icon: 'chevronRight',
                      href: i,
                      children: r,
                    }),
                ],
              }),
              !!(null === l || void 0 === l ? void 0 : l.length) &&
                (0, a.jsx)('ul', {
                  className: _().meta,
                  children:
                    null === l || void 0 === l
                      ? void 0
                      : l.map(function (e, s) {
                          return (0,
                          a.jsx)('li', { className: _().metaItem, style: (0, x.Fh)({ delay: (0, x.aU)(600 + 140 * s) }), children: (0, a.jsx)(h.x, { secondary: !0, children: e }) }, e);
                        }),
                }),
            ],
          }),
        });
      }
      var p = function (e) {
          var s = e.className,
            n = (0, i.Z)(e, ['className']);
          return (0, a.jsx)(
            'article',
            (0, t.Z)({ className: (0, x.Sh)(_().project, s) }, n)
          );
        },
        v = (0, j.forwardRef)(function (e, s) {
          var n = e.className,
            c = e.light,
            o = e.padding,
            l = void 0 === o ? 'both' : o,
            h = e.fullHeight,
            u = e.backgroundOverlayOpacity,
            A = void 0 === u ? 0.9 : u,
            m = e.backgroundElement,
            j = e.children,
            f = (0, i.Z)(e, [
              'className',
              'light',
              'padding',
              'fullHeight',
              'backgroundOverlayOpacity',
              'backgroundElement',
              'children',
            ]);
          return (0,
          a.jsxs)('section', (0, r.Z)((0, t.Z)({ className: (0, x.Sh)(_().section, n), 'data-light': c, 'data-full-height': h, ref: s }, f), { children: [!!m && (0, a.jsx)('div', { className: _().sectionBackground, style: (0, x.Fh)({ opacity: A }), children: m }), (0, a.jsx)(d.$, { className: _().sectionInner, 'data-padding': l, children: j })] }));
        }),
        w = function (e) {
          var s = e.opacity,
            n = void 0 === s ? 0.7 : s,
            r = e.className,
            c = (0, i.Z)(e, ['opacity', 'className']),
            o = (0, j.useRef)();
          return (
            (0, m.YT)(0.6, function (e) {
              o.current && o.current.style.setProperty('--offset', ''.concat(e, 'px'));
            }),
            (0, a.jsx)(A.u, {
              in: !0,
              timeout: (0, x.zG)(u.T.base.durationM),
              children: function (e) {
                return (0, a.jsxs)('div', {
                  className: (0, x.Sh)(_().backgroundImage, r),
                  'data-visible': e,
                  children: [
                    (0, a.jsx)('div', {
                      className: _().backgroundImageElement,
                      ref: o,
                      children: (0, a.jsx)(
                        l.E,
                        (0, t.Z)({ alt: '', role: 'presentation' }, c)
                      ),
                    }),
                    (0, a.jsx)('div', {
                      className: _().backgroundScrim,
                      style: (0, x.Fh)({ opacity: n }),
                    }),
                  ],
                });
              },
            })
          );
        },
        y = function (e) {
          var s = e.className,
            n = e.alt,
            r = (0, i.Z)(e, ['className', 'alt']);
          return (0, a.jsx)('div', {
            className: (0, x.Sh)(_().image, s),
            children: (0, a.jsx)(l.E, (0, t.Z)({ reveal: !0, alt: n, delay: 300 }, r)),
          });
        },
        b = function (e) {
          var s = e.className,
            n = e.width,
            r = void 0 === n ? 'l' : n,
            c = (0, i.Z)(e, ['className', 'width']);
          return (0, a.jsx)(
            'div',
            (0, t.Z)({ className: (0, x.Sh)(_().sectionContent, s), 'data-width': r }, c)
          );
        },
        N = function (e) {
          var s = e.className,
            n = e.level,
            r = void 0 === n ? 3 : n,
            c = e.as,
            l = void 0 === c ? 'h2' : c,
            d = (0, i.Z)(e, ['className', 'level', 'as']);
          return (0, a.jsx)(
            o.X,
            (0, t.Z)(
              {
                className: (0, x.Sh)(_().sectionHeading, s),
                as: l,
                level: r,
                align: 'auto',
              },
              d
            )
          );
        },
        I = function (e) {
          var s = e.className,
            n = (0, i.Z)(e, ['className']);
          return (0, a.jsx)(
            h.x,
            (0, t.Z)({ className: (0, x.Sh)(_().sectionText, s), size: 'l', as: 'p' }, n)
          );
        },
        k = function (e) {
          var s = e.center,
            n = e.stretch,
            r = e.justify,
            c = void 0 === r ? 'center' : r,
            o = e.width,
            l = void 0 === o ? 'm' : o,
            d = e.noMargin,
            h = e.className,
            u = e.centerMobile,
            A = (0, i.Z)(e, [
              'center',
              'stretch',
              'justify',
              'width',
              'noMargin',
              'className',
              'centerMobile',
            ]);
          return (0, a.jsx)(
            'div',
            (0, t.Z)(
              {
                className: (0, x.Sh)(_().textRow, h),
                'data-center': s,
                'data-stretch': n,
                'data-center-mobile': u,
                'data-no-margin': d,
                'data-width': l,
                'data-justify': c,
              },
              A
            )
          );
        },
        S = function (e) {
          var s = e.className,
            n = e.centered,
            r = (0, i.Z)(e, ['className', 'centered']);
          return (0, a.jsx)(
            b,
            (0, t.Z)(
              { className: (0, x.Sh)(_().sectionColumns, s), 'data-centered': n },
              r
            )
          );
        };
    },
    32: function (e, s, n) {
      'use strict';
      n.r(s),
        n.d(s, {
          default: function () {
            return v;
          },
        });
      var t = n(5893),
        r = {
          src: '/_next/static/media/uses-background-placeholder.2813c4c7.jpg',
          height: 179,
          width: 320,
          blurDataURL:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAngP/xAAaEAACAgMAAAAAAAAAAAAAAAABEgIDABEh/9oACAEBAAE/ABBqbQ0gvRrP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q==',
        },
        i = n.p + 'static/media/uses-background.f6e777a3.mp4',
        a = n(5192),
        c = n(270),
        o = n(5149),
        l = n(5633),
        d = n(9743),
        h = n.n(d),
        u = function (e) {
          var s = e.children;
          return (0, t.jsx)('table', { className: h().table, children: s });
        },
        A = function (e) {
          var s = e.children;
          return (0, t.jsx)('tr', { className: h().row, children: s });
        },
        m = function (e) {
          var s = e.children;
          return (0, t.jsx)('tbody', { className: h().body, children: s });
        },
        j = function (e) {
          var s = e.children;
          return (0, t.jsx)('th', { className: h().headCell, children: s });
        },
        x = function (e) {
          var s = e.children;
          return (0, t.jsx)('td', { className: h().cell, children: s });
        },
        f = n(2045),
        _ = n(7294),
        g = n(4034),
        p = n.n(g),
        v = function () {
          return (0, t.jsxs)(_.Fragment, {
            children: [
              (0, t.jsx)(l.h, {
                title: 'Uses',
                description: 'A list of hardware and software I use to do my thing',
              }),
              (0, t.jsxs)(f.XR, {
                className: p().uses,
                children: [
                  (0, t.jsx)(f.FV, { src: { src: i }, placeholder: r, opacity: 0.7 }),
                  (0, t.jsx)(f.T4, {
                    title: 'Uses',
                    description:
                      'A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background.',
                  }),
                  (0, t.jsx)(f.II, {
                    padding: 'none',
                    className: p().section,
                    children: (0, t.jsx)(f.IG, {
                      children: (0, t.jsxs)(f.ee, {
                        width: 'm',
                        children: [
                          (0, t.jsx)(f.d, { children: 'Design' }),
                          (0, t.jsx)(f.Hr, {
                            as: 'div',
                            children: (0, t.jsxs)(o.a, {
                              children: [
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    (0, t.jsx)(c.r, {
                                      href: 'https://www.figma.com',
                                      children: 'Figma',
                                    }),
                                    ' is my primary tool for UI design these days. Made the switch from Sketch in 2020 and haven\u2019t looked back. I\u2019ve also created',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://www.linkedin.com/in/yakkshit',
                                      children: 'a few plugins',
                                    }),
                                    ' that you can install.',
                                  ],
                                }),
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    'Any motion graphics I create are created in Adobe After Effects. So far I haven\u2019t found a non-Adobe product that\u2019s as good. If anyone has suggestions please ',
                                    (0, t.jsx)(c.r, {
                                      href: '/contact',
                                      children: 'message me',
                                    }),
                                    '.',
                                  ],
                                }),
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    'For any 3D models I use',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://www.blender.org/',
                                      children: 'Blender',
                                    }),
                                    '. Since 2.8 it\u2019s become way simpler to use and in a lot of ways better than expensive paid tools like 3DS Max or Maya.',
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, t.jsx)(f.II, {
                    padding: 'none',
                    className: p().section,
                    children: (0, t.jsx)(f.IG, {
                      children: (0, t.jsxs)(f.ee, {
                        width: 'm',
                        children: [
                          (0, t.jsx)(f.d, { children: 'Development' }),
                          (0, t.jsx)(f.Hr, {
                            as: 'div',
                            children: (0, t.jsxs)(o.a, {
                              children: [
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    'I use',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://code.visualstudio.com/',
                                      children: 'Visual Studio Code',
                                    }),
                                    ' ',
                                    'as my text editor, with the Atom One Dark theme and Operator Mono as my typeface of choice.',
                                  ],
                                }),
                                (0, t.jsx)(o.H, {
                                  children:
                                    'Firefox is my main browser for both development and general use.',
                                }),
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    (0, t.jsx)(c.r, {
                                      href: 'https://reactjs.org/',
                                      children: 'React',
                                    }),
                                    ' is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer.',
                                  ],
                                }),
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    'For 3D effects and image shaders I use',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://threejs.org/',
                                      children: 'three.js',
                                    }),
                                    '. It has a bit of a learning curve but you can do some really powerful stuff with it.',
                                  ],
                                }),
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    'For CSS I\u2019ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I\u2019m using vanilla CSS with',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://postcss.org/',
                                      children: 'PostCSS',
                                    }),
                                    ' to get upcoming CSS features today.',
                                  ],
                                }),
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    'For Javascript animations I use',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://www.framer.com/motion/',
                                      children: 'Framer Motion',
                                    }),
                                    ', it\u2019s a great way to add spring animations to React and three.js.',
                                  ],
                                }),
                                (0, t.jsxs)(o.H, {
                                  children: [
                                    'For building and testing UI components in isolation I use',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://storybook.js.org/',
                                      children: 'Storybook',
                                    }),
                                    '. Check out the',
                                    ' ',
                                    (0, t.jsx)(c.r, {
                                      href: 'https://storybook.yakkshitw.com',
                                      children: 'storybook for this website',
                                    }),
                                    '.',
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, t.jsx)(f.II, {
                    padding: 'none',
                    className: p().section,
                    children: (0, t.jsx)(f.IG, {
                      children: (0, t.jsxs)(f.ee, {
                        stretch: !0,
                        width: 'm',
                        children: [
                          (0, t.jsx)(f.d, { children: 'Hardware' }),
                          (0, t.jsx)(u, {
                            children: (0, t.jsxs)(m, {
                              children: [
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'CPU' }),
                                    (0, t.jsx)(x, { children: 'AMD Ryzen 5800x' }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'GPU' }),
                                    (0, t.jsx)(x, {
                                      children: 'MSI Gaming X Trio RTX 3080',
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Memory' }),
                                    (0, t.jsx)(x, {
                                      children: 'GSkill 32GB DDR4 3600mhz CAS 18',
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Motherboard' }),
                                    (0, t.jsx)(x, { children: 'MSI B550 Tomahawk' }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Monitor' }),
                                    (0, t.jsx)(x, {
                                      children: '1440p IPS 144hz LG 27GL850',
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Keyboard' }),
                                    (0, t.jsx)(x, { children: 'Logitech MX Keys' }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Mouse' }),
                                    (0, t.jsx)(x, { children: 'Logitech G403' }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Laptop' }),
                                    (0, t.jsx)(x, {
                                      children: 'Macbook Pro 14\u2033 (2022 M1 Max)',
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Headphones' }),
                                    (0, t.jsx)(x, {
                                      children: 'Audio Technica ATH-M50x/Apple Airpods',
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)(A, {
                                  children: [
                                    (0, t.jsx)(j, { children: 'Microphone' }),
                                    (0, t.jsx)(x, { children: 'Blue Yeti' }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(a.$, {}),
            ],
          });
        };
    },
    3509: function (e) {
      e.exports = { list: 'List_list__0oF1W', item: 'List_item__t5SQz' };
    },
    9743: function (e) {
      e.exports = {
        table: 'Table_table__uGVrB',
        row: 'Table_row__l1i1q',
        head: 'Table_head__WjsZe',
        headCell: 'Table_headCell__KFzz0',
        cell: 'Table_cell__aU5Fy',
      };
    },
    5903: function (e) {
      e.exports = {
        project: 'Project_project__JsLZW',
        section: 'Project_section__J6GYi',
        sectionInner: 'Project_sectionInner__BbL68',
        sectionBackground: 'Project_sectionBackground__c9_MI',
        backgroundImage: 'Project_backgroundImage___m2co',
        backgroundImageElement: 'Project_backgroundImageElement__YUY7W',
        backgroundScrim: 'Project_backgroundScrim__kwaD6',
        header: 'Project_header__wfcEM',
        headerContent: 'Project_headerContent__vZAy7',
        details: 'Project_details__7Wyft',
        title: 'Project_title__gFlr3',
        projectFadeSlide: 'Project_projectFadeSlide__G5Z1R',
        description: 'Project_description__xM50C',
        linkButton: 'Project_linkButton__Aa9Ww',
        meta: 'Project_meta__i27_j',
        metaItem: 'Project_metaItem__wSCNh',
        image: 'Project_image__mqYQv',
        sectionContent: 'Project_sectionContent__uitMB',
        sectionHeading: 'Project_sectionHeading__smXXM',
        sectionText: 'Project_sectionText__wfpeH',
        textRow: 'Project_textRow__tVxUD',
        sectionColumns: 'Project_sectionColumns__uNmfU',
      };
    },
    4034: function (e) {
      e.exports = { uses: 'Uses_uses__mcABU', section: 'Uses_section__7A2NM' };
    },
    7568: function (e, s, n) {
      'use strict';
      function t(e, s, n, t, r, i, a) {
        try {
          var c = e[i](a),
            o = c.value;
        } catch (l) {
          return void n(l);
        }
        c.done ? s(o) : Promise.resolve(o).then(t, r);
      }
      function r(e) {
        return function () {
          var s = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = e.apply(s, n);
            function c(e) {
              t(a, r, i, c, o, 'next', e);
            }
            function o(e) {
              t(a, r, i, c, o, 'throw', e);
            }
            c(void 0);
          });
        };
      }
      n.d(s, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(0, [199, 774, 888, 179], function () {
      return (s = 7722), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
