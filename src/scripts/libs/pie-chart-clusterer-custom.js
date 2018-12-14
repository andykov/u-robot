!function (t) {
    var e = {modules: t.ymaps.modules};
    !function (t) {
        if ("undefined" == typeof t && "function" == typeof require)var t = require("ym");
        t.define("util.providePackage", ["system.mergeImports"], function (t, e) {
            t(function (t, n) {
                var o = n[0], r = Array.prototype.slice.call(n, 1), i = e.joinImports(t.name, {}, t.deps, r);
                o(i)
            })
        })
    }(e.modules), e.modules.define('PieChartClusterer', [
        'Clusterer',
        'util.defineClass',
        'util.extend',
        'PieChartClusterer.icon.params',
        'PieChartClusterer.component.Canvas'
    ], function (provide,
                 Clusterer,
                 defineClass,
                 extend,
                 iconParams,
                 PieChartClustererCanvas) {
        var PieChartClusterer = defineClass(function (options) {
            PieChartClusterer.superclass.constructor.call(this, options);

            this._canvas = new PieChartClustererCanvas(iconParams.icons.large.size);
            this._canvas.options.setParent(this.options);
        }, Clusterer, {
            createCluster: function (center, geoObjects) { //
                // Создаем метку-кластер с помощью стандартной реализации метода.
                var clusterPlacemark = PieChartClusterer.superclass.createCluster.call(this, center, geoObjects);
                var styleGroups = geoObjects.reduce(function (groups, geoObject) {
                    var style = geoObject.options.get('iconColor', 'lightBlue');

                    groups[style] = ++groups[style] || 1;
                    return groups;
                }, {});
                var iconUrl = this._canvas.generateIconDataURL(styleGroups, geoObjects.length);
                var clusterOptions = {
                    clusterIcons: [
                        extend({href: iconUrl}, iconParams.icons.small),
                        extend({href: iconUrl}, iconParams.icons.medium),
                        extend({href: iconUrl}, iconParams.icons.large)
                    ],
                    clusterNumbers: iconParams.numbers
                };

                clusterPlacemark.options.set(clusterOptions);

                return clusterPlacemark;
            }
        });


        provide(PieChartClusterer);
    }), e.modules.define('PieChartClustererLayout', [
        'templateLayoutFactory',
        'util.extend',
        'PieChartClusterer.icon.params',
        'PieChartClusterer.component.Canvas'
    ], function (provide,
                 templateLayoutFactory,
                 extend,
                 iconParams,
                 PieChartClustererCanvas) {

        var STYLE_REG_EXP = /#(.+?)(?=Icon|DotIcon|StretchyIcon|CircleIcon|CircleDotIcon)/;

        var cssStyles = [
            'font:10pt arial,sans-serif',
            'position:absolute',
            'display:block',
            'text-align:center',
            'background-repeat:no-repeat',
            'background-position:center'
        ];
        /*
         '{% if features %}',
         '{{ features.length }}',
         '{% else %}',
         '{{ properties.geoObjects.length }}',
         '{% endif %}'
         */

        var PieChartClustererLayout = templateLayoutFactory.createClass([
            '<ymaps style="' + cssStyles.join(';') + '">',
            '</ymaps>'].join(''), {
            build: function () {


                PieChartClustererLayout.superclass.build.call(this);

                var geoObjects = this.getData().features || this.getData().properties.get('geoObjects');

                var element = this.getParentElement().firstChild.firstChild;
                var canvas = new PieChartClustererCanvas(iconParams.icons.large.size);
                canvas.options.setParent(this.options);

                var styleGroups = geoObjects.reduce(function (groups, geoObject) {
                    var preset = geoObject.options.preset ||
                        (typeof geoObject.options.get === 'function' && geoObject.options.get('preset')) || 'islands#blueIcon';
                    var style = getIconStyle(preset);

                    groups[style] = ++groups[style] || 1;

                    return groups;
                }, {});

                var geoObjects = this.getData().properties.geoObjects;
                var gray = 0;
                var green = 0;
                for (key in geoObjects) {
                    if (geoObjects[key].properties.carPresetNotGreen) {
                        gray++;
                    } else {
                        green++;
                    }
                }
                var allObs = parseInt(gray + green, 10);
                var val = parseInt(green, 10);// + '/' + (gray + green)

                if (val > 300){
                    element.innerHTML  = '300+';
                }else{
                    element.innerHTML = val;
                }

                var parent = this.getParentElement();
                var zIndex = parseInt(parent.style.zIndex, 10);
                parent.style.zIndex = zIndex + val;
                if (val == 0){
                    element.style.color = '#B3B3B3';
                    parent.style.zIndex = zIndex - 2;
                }

                var sizeType = allObs >= 1000 ? 'large'
                    : allObs >= 100 ? 'medium'
                    : allObs >= 10 ? 'small': 'tiny';
                var icon = this._icon = iconParams.icons[sizeType];
                var size = icon.size;
                var offset = icon.offset;

//z-index

                var iconUrl = canvas.generateIconDataURL(styleGroups, geoObjects.length);
                element.style.width = size[0] + 'px';
                element.style.height = size[1] + 'px';
                element.style.left = offset[0] + 'px';
                element.style.top = offset[1] + 'px';
                element.style.lineHeight = size[1] + 'px';
                element.style.backgroundImage = 'url(' + iconUrl + ')';
                element.style.backgroundSize = size[0] + 'px ' + size[1] + 'px';

            },
            clear: function () {
                PieChartClustererLayout.superclass.clear.call(this);
            },
            getShape: function () {
                return this._icon.shape;
            }
        });

        function getIconStyle(preset) {
            return preset.match(STYLE_REG_EXP)[1];
        }

      //  console.log(PieChartClustererLayout);
        provide(PieChartClustererLayout);
    }), e.modules.define("RandomPointsGenerator", ["coordSystem.geo"], function (t, e) {
        function n(t) {
            this.count = t || 0
        }

        n.generate = function (t) {
            return new n(t)
        }, n.prototype.generate = function (t) {
            return this.count = t, this
        }, n.prototype.atBounds = function (t) {
            for (var e = [t[1][0] - t[0][0], t[1][1] - t[0][1]], n = [], o = 0; o < this.count; o++)n[o] = this.createPlacemark([Math.random() * e[0] + t[0][0], Math.random() * e[1] + t[0][1]], o);
            return n
        }, n.prototype.atCenterAndRadius = function (t, n) {
            for (var o = [], r = 0; r < this.count; r++) {
                var i = [Math.random() - Math.random(), Math.random() - Math.random()], a = n * Math.random(), s = e.solveDirectProblem(t, i, a).endPoint;
                o[r] = this.createPlacemark(s, r)
            }
            return o
        }, n.prototype.atCenterAndSize = function () {
        }, n.prototype.createPlacemark = function (t, e) {
            return new ymaps.GeoObject({
                geometry: {type: "Point", coordinates: t},
                properties: this.getPointData(e)
            }, this.getPointOptions(e))
        }, n.prototype.getPointData = function () {
            return {}
        }, n.prototype.getPointOptions = function () {
            return {}
        }, t(n)
    }), e.modules.define("PieChartClusterer.component.Canvas", ["option.Manager", "PieChartClusterer.icon.colors"], function (t, e, n) {
        var o = {
            canvasIconStrokeStyle: "white",
            canvasIconLineWidth: 2,
            canvasIconCoreRadius: 23,
            canvasIconCoreFillStyle: "white"
        }, r = function (t) {
            this._canvas = document.createElement("canvas"), this._canvas.width = t[0], this._canvas.height = t[1], this._context = this._canvas.getContext("2d"), this.options = new e({})
        };
        r.prototype.generateIconDataURL = function (t, e) {
            return this._drawIcon(t, e), this._canvas.toDataURL()
        }, r.prototype._drawIcon = function (t, e) {
            var n = 90, //0
                r = 360,
                i = this._context,
                a = this._canvas.width / 2,
                s = this._canvas.height / 2,
                c = this.options.get("canvasIconLineWidth", o.canvasIconLineWidth),
                l = this.options.get("canvasIconStrokeStyle", o.canvasIconStrokeStyle),
                u = Math.floor((a + s - c) / 2);

            i.strokeStyle = l, i.lineWidth = c, Object.keys(t).forEach(function (o) {

                if (Object.keys(t).length == 2 && n == 90) {
                    o = 'gray';
                }
                if (Object.keys(t).length == 2 && n != 90) {
                    o = 'darkGreen';
                }
                i.fillStyle = this._getStyleColor(o);
                r = n + 180;
                // console.log(o)
                if (Object.keys(t).length == 1) {
                    this._drawCircle(a, s, u)
                } else {
                    this._drawSector(a, s, u, n, r);
                    n = r;
                }


                // e > c ? n = this._drawSector(a, s, u, n, r) : this._drawCircle(a, s, u);

            }, this), this._drawCore(a, s)
        }, r.prototype._drawCore = function (t, e) {
            var n = this._context, r = this.options.get("canvasIconCoreFillStyle", o.canvasIconCoreFillStyle), i = this.options.get("canvasIconCoreRadius", o.canvasIconCoreRadius);
            n.fillStyle = r, this._drawCircle(t, e, i)

        }, r.prototype._drawCircle = function (t, e, n) {

            var o = this._context;
            o.beginPath(), o.arc(t, e, n, 0, 2 * Math.PI), o.fill(), o.stroke()
        }, r.prototype._drawSector = function (t, e, n, o, r) {
            var i = this._context;
            return i.beginPath(), i.moveTo(t, e), i.arc(t, e, n, this._toRadians(o), this._toRadians(r)), i.lineTo(t, e), i.closePath(), i.fill(), i.stroke(), r
        }, r.prototype._toRadians = function (t) {
            return t * Math.PI / 180
        }, r.prototype._getStyleColor = function (t) {
            return n[t]
        }, t(r)
    }), e.modules.define("PieChartClusterer.icon.colors", [], function (t) {
        var e = {
            blue: "#1E98FF",
            red: "#ED4543",
            darkOrange: "#E6761B",
            night: "#0E4779",
            darkBlue: "#177BC9",
            pink: "#F371D1",
            gray: "#B3B3B3",
            brown: "#793D0E",
            darkGreen: "#1BAD03",
            violet: "#B51EFF",
            black: "#595959",
            yellow: "#FFD21E",
            green: "#56DB40",
            orange: "#FF931E",
            lightBlue: "#82CDFF",
            olive: "#97A100"
        };
        t(e)
    }), e.modules.define("PieChartClusterer.icon.params", ["shape.Circle", "geometry.pixel.Circle"], function (t, e, n) {
        t({
            icons: {
                tiny: {size: [35, 35], offset: [-17.5, -17.5], shape: new e(new n([0, 2], 17.5))},
                small: {size: [46, 46], offset: [-23, -23], shape: new e(new n([0, 2], 21.5))},
                medium: {size: [58, 58], offset: [-29, -29], shape: new e(new n([0, 2], 27.5))},
                large: {size: [71, 71], offset: [-35.5, -35.5], shape: new e(new n([0, 2], 34))}
            }, numbers: [10, 100]
        })
    })
}(this);

