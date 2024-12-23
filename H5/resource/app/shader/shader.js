var __reflect = this && this.__reflect ||
function(e, r, o) {
    e.__class__ = r,
    o ? o.push(r) : o = [r],
    e.__types__ = e.__types__ ? o.concat(e.__types__) : o
},
shader; !
function(e) {
    var r = function() {
        function r() {}
        return r.addEff = function(r, o, t, u, i, n) {
            void 0 === n && (n = !1),
            n || (o = this.colorNormalize(o), t = this.colorNormalize(t), u = this.colorNormalize(u), i = this.colorNormalize(i));
            var a = e.findFilleter(r, this._filterName);
            a ? a.$uniforms = {
                u_color1: o,
                u_color2: t,
                u_color3: u,
                u_color4: i
            }: (a = new egret.CustomFilter("\n                        attribute vec2 aVertexPosition;\n                        attribute vec2 aTextureCoord;\n                        uniform vec2 projectionVector; \n                        varying vec2 vTextureCoord;\n            \n                        uniform vec3 u_color1;\n                        uniform vec3 u_color2;\n                        uniform vec3 u_color3;\n                        uniform vec3 u_color4;\n            \n                        varying vec3 vColor;\n            \n                        const vec2 center = vec2(-1.0, 1.0);\n                        void main(){\n                            gl_Position =vec4((aVertexPosition / projectionVector)+center,0.0,1.0);\n                            vTextureCoord = aTextureCoord;\n                            if(vTextureCoord.x==0.0 &&vTextureCoord.y==0.0){\n                                vColor = u_color4;\n                            }else if(vTextureCoord.x==1.0 &&vTextureCoord.y==0.0){\n                                vColor = u_color3;\n                            }else if(vTextureCoord.x==1.0 &&vTextureCoord.y==1.0){\n                                vColor = u_color2;\n                            }else if(vTextureCoord.x==0.0 &&vTextureCoord.y==1.0){\n                                vColor = u_color1;\n                            }\n                        }\n                        ", "\n                        precision lowp float;\n                        varying vec2 vTextureCoord;\n                        uniform sampler2D uSampler;\n                        varying vec3 vColor;\n            \n                        void main(){\n                            vec4 tmpColor = texture2D(uSampler,vTextureCoord);\n                            if(tmpColor.a ==0.0){\n                              discard;\n                            }else{\n                               gl_FragColor= vec4(vColor.rgb,tmpColor.a);\n                            }\n                        }\n            \n                        ", {
                u_color1: o,
                u_color2: t,
                u_color3: u,
                u_color4: i
            }), a.name = this._filterName, r.filters = [a])
        },
        r.remove = function(r) {
            e.removeFilleter(r, this._filterName)
        },
        r.colorNormalize = function(e) {
            var r = 1 / 255;
            return {
                x: e.x * r,
                y: e.y * r,
                z: e.z * r
            }
        },
        r._filterName = "#FontGradualShader",
        r
    } ();
    e.FontGradualShader = r,
    __reflect(r.prototype, "shader.FontGradualShader")
} (shader || (shader = {}));
var __reflect = this && this.__reflect ||
function(e, r, o) {
    e.__class__ = r,
    o ? o.push(r) : o = [r],
    e.__types__ = e.__types__ ? o.concat(e.__types__) : o
},
shader; !
function(e) {
    var r = function() {
        function e() {}
        return e.VerticalVertexShader = function() {
            var e = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform vec2 projectionVector;", "uniform vec2 uTextureSize;", "uniform float u_blurSpread;", "varying vec2 vTextureCoord[5];", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord[0] = aTextureCoord;", "   vTextureCoord[1]= aTextureCoord + vec2(0,1.0/uTextureSize.y * -1.0) *  u_blurSpread;", "   vTextureCoord[2]= aTextureCoord + vec2(0,1.0/uTextureSize.y * 1.0) *  u_blurSpread;", "   vTextureCoord[3]= aTextureCoord + vec2(0,1.0/uTextureSize.y * -2.0) *  u_blurSpread;", "   vTextureCoord[4]= aTextureCoord + vec2(0,1.0/uTextureSize.y * 2.0) *  u_blurSpread;", "}"];
            return e.join("\n")
        },
        e.HorizontaVertexShader = function() {
            var e = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec2 aColor;", "uniform vec2 projectionVector;", "uniform vec2 uTextureSize;", "uniform float u_blurSpread;", "varying vec2 vTextureCoord[5];", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord[0] = aTextureCoord;", "   vTextureCoord[1]= aTextureCoord + vec2(1.0/uTextureSize.x * -1.0,0) *  u_blurSpread;", "   vTextureCoord[2]= aTextureCoord + vec2(1.0/uTextureSize.x * 1.0,0) *  u_blurSpread;", "   vTextureCoord[3]= aTextureCoord + vec2(1.0/uTextureSize.x * -2.0,0) *  u_blurSpread;", "   vTextureCoord[4]= aTextureCoord + vec2(1.0/uTextureSize.x * 2.0,0) *  u_blurSpread;", "}"];
            return e.join("\n")
        },
        e.FragShader = function() {
            var e = ["precision mediump float;", "uniform sampler2D uSampler;", "varying vec2 vTextureCoord[5];", "void main(void) {", "vec3 sum = texture2D(uSampler,vTextureCoord[0]).rgb * 0.4026;", "sum += texture2D(uSampler,vTextureCoord[1]).rgb * 0.2442;", "sum += texture2D(uSampler,vTextureCoord[2]).rgb * 0.2442;", "sum += texture2D(uSampler,vTextureCoord[3]).rgb * 0.0545;", "sum += texture2D(uSampler,vTextureCoord[4]).rgb * 0.0545;", "gl_FragColor = vec4(sum,1.0);", "}"];
            return e.join("\n")
        },
        e._setShaderIter = function(e, r) {
            for (var o = [], t = 0; e > t; t++) o.push(new egret.CustomFilter(this.VerticalVertexShader(), this.FragShader(), {
                u_blurSpread: 1 + e * r,
                uTextureSize: {
                    x: 1,
                    y: 1
                }
            })),
            o.push(new egret.CustomFilter(this.HorizontaVertexShader(), this.FragShader(), {
                u_blurSpread: 1 + e * r,
                uTextureSize: {
                    x: 1,
                    y: 1
                }
            }));
            return o
        },
        e.removeEff = function(e) {
            if (e.$GaussianBlurData) {
                var r = e.$GaussianBlurData;
                e.filters = r.oldFilters,
                void 0 != r.oldTexture && null != r.oldTexture && (e.texture.dispose(), e.texture = r.oldTexture),
                void 0 != r.scale && (e.scaleX = e.scaleY = r.scale),
                delete e.$GaussianBlurData
            }
        },
        e.addEff = function(e, r, o) {
            e.$GaussianBlurData && this.removeEff(e);
            var t = new egret.RenderTexture;
            t.drawToTexture(e);
            var u = {
                iter: r,
                scale: e.scaleX,
                oldFilters: e.filters,
                u_blurSpread: o,
                filters: this._setShaderIter(r, o)
            };
            e.$GaussianBlurData = u,
            e.filters ? e.filters.concat(u.filters) : e.filters = u.filters
        },
        e
    } ();
    e.GaussianBlur = r,
    __reflect(r.prototype, "shader.GaussianBlur")
} (shader || (shader = {}));
var shader; !
function(e) {
    function r(e, r) {
        var o = e.filters;
        if (!o) return null;
        for (var t = 0,
        u = o; t < u.length; t++) {
            var i = u[t];
            if (i.name === r) return i
        }
        return null
    }
    function o(e, r) {
        var o = e.filters;
        if (o) for (var t = o.length - 1; t >= 0; t--) if (o[t].name === r) {
            e.filters.splice(t, 1);
            break
        }
    }
    e.findFilleter = r,
    e.removeFilleter = o
} (shader || (shader = {}));