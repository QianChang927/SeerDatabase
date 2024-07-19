var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    i.prototype = e.prototype,
    t.prototype = new i
},
memoryArchivesPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = null);
            var i = e.call(this) || this;
            return i.groupName = "MemoryArchivesPanel_groupName",
            i.type = 1,
            i.skinName = MemoryArchivesPanelSkin,
            i.type = ~~t || 1,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.petGroup),
            this.adaptRightContent(this.petGroup),
            this.adaptBgByScale(this.bg),
            this._list.itemRenderer = t.MemoryArchivesPanelItem,
            this.initBtnClose("memory_archives_panel_title" + this.type + "_png", this),
            this.init(),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.jump, this),
            ImageButtonUtil.add(this.btnSearch, this.onSearchChanged, this)
        },
        i.prototype.init = function() {
            var t = this,
            e = 0,
            i = [1e3, 2e3],
            r = [],
            n = config.ArchivesBook.getItems().filter(function(e) {
                return t.type == e.chapterid
            }),
            s = [];
            if (n.length > 0) {
                r.push({
                    id: i[0],
                    title: "关于此书"
                });
                for (var o = 0; o < n.length; o++) {
                    var a = i[0] + n[o].bookid;
                    s.push(a),
                    r.push({
                        id: a,
                        title: n[o].chaptername
                    })
                }
            }
            var h = config.ArchivesStory.getItems().filter(function(e) {
                return t.type == e.storyid
            }),
            u = [];
            r.push({
                id: i[1],
                title: "精灵档案"
            });
            var c = h.filter(function(t) {
                return 1 == t.isrec
            });
            c.length > 0 && (u.push(i[1] + 1), e = i[1] + 1, r.push({
                id: i[1] + 1,
                title: "最新推荐"
            })),
            u.push(i[1] + 2),
            2001 != e && (e = i[1] + 2),
            r.push({
                id: i[1] + 2,
                title: "全部精灵"
            });
            for (var l = h.filter(function(t) {
                return~~t.classid > 0
            }), o = 0; o < l.length; o++) {
                var _ = l[o];
                u.indexOf(i[1] + _.classid) < 0 && (u.push(i[1] + _.classid), r.push({
                    id: i[1] + _.classid,
                    title: _.classname
                }))
            }
            for (var p = {},
            o = 0; o < r.length; o++) {
                var m = r[o];
                if (m.id % i[0] == 0) p[m.id] = {
                    title: m.title,
                    child: m.id == i[0] ? s: u
                };
                else {
                    var g = Math.floor(m.id / i[0]) * i[0];
                    p[m.id] = {
                        title: m.title,
                        parent: g
                    }
                }
            }
            var v = new MenuData;
            v["default"] = e,
            v.groupName = this.groupName,
            v.root = i,
            v.data = p,
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.changeTab, this),
            this.menu = Menu.createMenu(v, this.menuGroup)
        },
        i.prototype.jump = function() {
            var t = ~~this.menu.selectedValue;
            2002 != t && this.menu.updateView(2002)
        },
        i.prototype.changeTab = function() {
            var t = this;
            this.none.visible = !1;
            var e = ~~this.menu.selectedValue;
            if (2e3 > e) {
                this._bookScr.stopAnimation(),
                this._bookScr.viewport.scrollV = 0,
                1 == this.type ? StatLogger.log("20230602版本系统功能", "精灵档案馆", "点击查看了精灵档案馆-永夜纪年-前言或后记") : StatLogger.log("20230602版本系统功能", "精灵档案馆", "点击查看了精灵档案馆-莱达物语-序言");
                var i = e - 1e3,
                r = config.ArchivesBook.getItem(i),
                n = r.txtdivide.split("|"),
                s = r.txt.split("|");
                this.txt1.text = this.txt2.text = this.txt3.text = "";
                for (var o = 0; o < n.length; o++) {
                    var a = n[o];
                    if (1 == ~~a) {
                        var h = ("　　" + s[o]).replace(/\\\\n/g, "|"),
                        u = h.split("|").join("\n　　"),
                        c = (new egret.HtmlTextParser).parse(u);
                        this.txt1.textFlow = c
                    } else this["txt" + a].text = s[o]
                }
                this.petGroup.visible = !1,
                this.txtGroup.visible = !0
            } else {
                this._scr.stopAnimation(),
                this._scr.viewport.scrollV = 0;
                var c = [],
                l = config.ArchivesStory.getItems().filter(function(e) {
                    return t.type == e.storyid
                });
                if (l.sort(function(t, e) {
                    return e.id - t.id
                }), 2001 == e) c = l.filter(function(t) {
                    return 1 == ~~t.isrec
                });
                else if (2002 == e) c = l;
                else {
                    var _ = e - 2e3;
                    c = l.filter(function(t) {
                        return t.classid == _
                    })
                }
                this._list.dataProvider = new eui.ArrayCollection(c),
                this.petGroup.visible = !0,
                this.txtGroup.visible = !1
            }
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this;
            1 == this.type ? StatLogger.log("20230602版本系统功能", "精灵档案馆", "在精灵档案馆-永夜纪年中使用了搜索功能") : StatLogger.log("20230602版本系统功能", "精灵档案馆", "在精灵档案馆-莱达物语中使用了搜素功能");
            var i = this.txtSearch.text.trim(),
            r = config.ArchivesStory.getItems().filter(function(t) {
                return e.type == t.storyid
            });
            if (r.sort(function(t, e) {
                return e.id - t.id
            }), i.length > 0) {
                this._scr.stopAnimation(),
                this._scr.viewport.scrollV = 0;
                var n = r.filter(function(t) {
                    var e = ~~t.monid,
                    r = PetXMLInfo.getName(e);
                    return SearchUtil.isMatch(i, r) ? !0 : void 0
                });
                this._list.dataProvider = new eui.ArrayCollection(n),
                this.none.visible = n.length <= 0
            } else this.changeTab()
        },
        i.prototype.destroy = function() {
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.jump, this),
            this.menu && this.menu.destroy(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.MemoryArchivesPanel = e,
    __reflect(e.prototype, "memoryArchivesPanel.MemoryArchivesPanel")
} (memoryArchivesPanel || (memoryArchivesPanel = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    i.prototype = e.prototype,
    t.prototype = new i
},
memoryArchivesPanel; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = MemoryArchivesPanelItemSkin,
            ImageButtonUtil.add(e.pet,
            function() {
                1 == e.data.storyid ? StatLogger.log("20230603版本系统功能", "精灵档案馆", "在精灵档案馆-永夜纪年中打开了任一精灵的精灵传记") : StatLogger.log("20230604版本系统功能", "精灵档案馆", "在精灵档案馆-莱达物语中打开了任一精灵的精灵传记"),
                ModuleManager.showModuleByID(226, e.data.monid)
            },
            e, !1),
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            if (t.prototype.dataChanged.call(this), this.data) {
                this.la_id.visible = !IS_RELEASE,
                this.la_id.text = this.data.monid + "";
                var e = PetXMLInfo.getName(this.data.monid);
                this.nick.text = e.length > 7 ? e.slice(0, 7) + "...": e,
                this.pet.source = ClientConfig.getPetHalfIcon(this.data.monid),
                this.cacheAsBitmap = !0
            }
        },
        e
    } (BaseItemRenderer);
    t.MemoryArchivesPanelItem = e,
    __reflect(e.prototype, "memoryArchivesPanel.MemoryArchivesPanelItem")
} (memoryArchivesPanel || (memoryArchivesPanel = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    i.prototype = e.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/MemoryArchivesPanelItemSkin.exml"] = window.MemoryArchivesPanelItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "nick", "la_id"],
        this.height = 252,
        this.width = 156,
        this.elementsContent = [this._Image1_i(), this.pet_i(), this._Image2_i(), this.nick_i(), this.la_id_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 250.961,
        t.source = "memory_archives_panel_pet_png",
        t.visible = !0,
        t.width = 157.059,
        t.x = -1.43,
        t.y = 0,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.height = 280,
        t.scaleX = .85,
        t.scaleY = .85,
        t.visible = !0,
        t.width = 170,
        t.x = 5.32,
        t.y = 7,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "memory_archives_panel_searchbg_png",
        t.width = 146,
        t.x = 4,
        t.y = 214.877,
        t
    },
    i.nick_i = function() {
        var t = new eui.Label;
        return this.nick = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 140,
        t.x = 3.456,
        t.y = 222,
        t
    },
    i.la_id_i = function() {
        var t = new eui.Label;
        return this.la_id = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 134432,
        t.text = "1234",
        t.textColor = 9025023,
        t.x = 6.864,
        t.y = 7.619,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MemoryArchivesPanelSkin.exml"] = window.MemoryArchivesPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "menuGroup", "txt2", "txt1", "txt3", "_bookScr", "txtGroup", "_list", "_scr", "txtSearch", "btnSearch", "search", "none", "petGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.menuGroup_i(), this.txtGroup_i(), this.petGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "common_ui_bg_3_jpg",
        t.x = 0,
        t.y = 0,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    i.txtGroup_i = function() {
        var t = new eui.Group;
        return this.txtGroup = t,
        t.height = 521,
        t.visible = !1,
        t.width = 889,
        t.x = 204,
        t.y = 83,
        t.elementsContent = [this._Image1_i(), this._bookScr_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "memory_archives_panel_txtbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._bookScr_i = function() {
        var t = new eui.Scroller;
        return this._bookScr = t,
        t.height = 452.713,
        t.width = 757,
        t.x = 66,
        t.y = 58,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.txt2_i(), this.txt1_i(), this.txt3_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 4,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "文字文字文字文字字文",
        t.textAlign = "center",
        t.textColor = 6388143,
        t.width = 756,
        t.x = 10,
        t.y = 10,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "文字文字文字文字字文",
        t.textColor = 6388143,
        t.width = 756,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.textAlign = "right",
        t.textColor = 6388143,
        t.width = 756,
        t.x = 10,
        t.y = 10,
        t
    },
    i.petGroup_i = function() {
        var t = new eui.Group;
        return this.petGroup = t,
        t.height = 534.086,
        t.left = 170,
        t.right = 20,
        t.visible = !0,
        t.y = 61,
        t.elementsContent = [this._scr_i(), this.search_i(), this.none_i()],
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 480.181,
        t.left = 0,
        t.right = 0,
        t.y = 52,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = MemoryArchivesPanelItemSkin,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 2,
        t
    },
    i.search_i = function() {
        var t = new eui.Group;
        return this.search = t,
        t.height = 29,
        t.right = 7,
        t.width = 161,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.txtSearch_i(), this.btnSearch_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "memory_archives_panel_searchbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtSearch_i = function() {
        var t = new eui.EditableText;
        return this.txtSearch = t,
        t.height = 16,
        t.prompt = "输入精灵名称",
        t.promptColor = 4149623,
        t.size = 16,
        t.textColor = 4149623,
        t.width = 110,
        t.x = 8.999,
        t.y = 6.332,
        t
    },
    i.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.source = "memory_archives_panel_btnsearch_png",
        t.x = 132,
        t.y = 0,
        t
    },
    i.none_i = function() {
        var t = new eui.Image;
        return this.none = t,
        t.source = "memory_archives_panel_none_png",
        t.visible = !1,
        t.x = 372,
        t.y = 251,
        t
    },
    e
} (eui.Skin);