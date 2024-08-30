var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
SocketConnection = function() {
    function e() {}
    return Object.defineProperty(e, "mainSocket", {
        get: function() {
            return null == e._mainSocket && (e._mainSocket = new SocketEncryptImpl, e._mainSocket.errorCallback = e.errorcall),
            e._mainSocket
        },
        enumerable: !0,
        configurable: !0
    }),
    e.errorcall = function(e, t) {},
    e.addCmdListener = function(t, n, r) {
        this.block || e.mainSocket.addCmdListener(t, n, r)
    },
    e.removeCmdListener = function(t, n, r) {
        e.mainSocket.removeCmdListener(t, n, r)
    },
    e.dispatchCmd = function(t, n, r) {
        e.mainSocket.dispatchCmd(t, n, r)
    },
    e.hasCmdListener = function(t) {
        return e.mainSocket.hasCmdListener(t)
    },
    e.send = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        return 0 == t || this.block ? void 0 : e.mainSocket.connected ? void e.mainSocket.send(t, n) : void e.mainSocket.dispatchEvent(new egret.Event(egret.Event.CLOSE))
    },
    e.sendWithCallback = function(t, n) {
        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        e.sendWithCallback2(t, n, r)
    },
    e.sendWithCallback2 = function(t, n, r, i) {
        if (void 0 === r && (r = null), void 0 === i && (i = null), r = null == r ? [] : r, !this.block) {
            var o = function(r) {
                null != r.data && r.data instanceof egret.ByteArray && (r.data.position = 0),
                e.removeCmdListener(t, arguments.callee, this),
                e.mainSocket.removeErrorListener(t, s, this),
                null != n && n(r)
            },
            s = function(n) {
                e.removeCmdListener(t, o, this),
                e.mainSocket.removeErrorListener(t, s, this),
                null != i && i(n)
            };
            if (!e.mainSocket.connected) return void e.mainSocket.dispatchEvent(new egret.Event(egret.Event.CLOSE));
            e.addCmdListener(t, o, this),
            e.mainSocket.addErrorListener(t, s, this),
            e.mainSocket.send(t, r)
        }
    },
    e.sendByQueue = function(t, n, r, i) {
        if (void 0 === r && (r = null), void 0 === i && (i = null), e.mainSocket.connected && !this.block) {
            var o = new SendQueueItemVo;
            o.cmdID = t,
            o.args = n,
            o.callBackFun = r,
            o.errorHandleFun = i,
            SocketConnectionHelper.sendCommandByQueue(o)
        }
    },
    e.sendWithPromise = function(e, t) {
        return this.block ? new Promise(function(e, t) {
            t(null)
        }) : new Promise(function(n, r) {
            var i = new SendQueueItemVo;
            i.cmdID = e,
            i.args = t,
            i.callBackFun = function(e) {
                n(e)
            },
            i.errorHandleFun = function(e) {
                void 0 === e && (e = null),
                r(e)
            },
            SocketConnectionHelper.sendCommandByQueue(i)
        })
    },
    e.send_2 = function(t, n) {
        e.mainSocket.connected || e.mainSocket.dispatchEvent(new egret.Event(egret.Event.CLOSE)),
        this.block || e.mainSocket.send(t, n)
    },
    e.setEncryptKeyStringArr = function(t) {
        e._encryptKeyStringArr = t
    },
    Object.defineProperty(e, "key", {
        get: function() {
            var t = "";
            if (null == e._encryptKeyStringArr) t = "!crAckmE4nOthIng:-)";
            else for (var n = 0; n < e._encryptKeyStringArr.length; n++) {
                var r = StringUtil.replace(e._encryptKeyStringArr[n], "*", "");
                t += r
            }
            return t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.removeAll = function(t) {
        var n = e.mainSocket.$EventDispatcher[1];
        if (t || !n) {
            if (n && t) for (var r in n) {
                var i = n[r];
                if (i) for (var o = i.length - 1; o >= 0; o--) {
                    var s = i[o];
                    s && s.thisObject == t && (e.mainSocket.removeEventListener(s.type, s.listener, s.thisObject, s.useCapture), 0 == o && delete n[r])
                } else delete n[r]
            }
        } else for (var r in n) {
            var i = n[r];
            i || delete n[r]
        }
    },
    e
} ();
__reflect(SocketConnection.prototype, "SocketConnection");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
ErrorType = function() {
    function e() {}
    return e.getErr0rType = function(e) {
        return "error_" + e
    },
    e
} ();
__reflect(ErrorType.prototype, "ErrorType");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
LoginSocketConnection = function() {
    function e() {}
    return Object.defineProperty(e, "mainSocket", {
        get: function() {
            return null == e._mainSocket && (e._mainSocket = new SocketImpl, e._mainSocket.errorCallback = e.errorcall),
            e._mainSocket
        },
        enumerable: !0,
        configurable: !0
    }),
    e.errorcall = function(e, t) {},
    e.isSocketOpen = function() {
        return null != e._mainSocket
    },
    e.destroy = function() {
        e._mainSocket && (e._mainSocket.close(), e._mainSocket.errorCallback = null, e._mainSocket = null)
    },
    e.addCmdListener = function(t, n, r) {
        e.mainSocket.addCmdListener(t, n, r)
    },
    e.removeCmdListener = function(t, n, r) {
        e.mainSocket.removeCmdListener(t, n, r)
    },
    e.dispatchCmd = function(t, n, r) {
        e.mainSocket.dispatchCmd(t, n, r)
    },
    e.hasCmdListener = function(t) {
        return e.mainSocket.hasCmdListener(t)
    },
    e.send = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        e.mainSocket.connected || e.mainSocket.dispatchEvent(new egret.Event(egret.Event.CLOSE)),
        e.mainSocket.send(t, n)
    },
    e.sendAsync = function(t) {
        for (var n = this,
        r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
        return new Promise(function(i, o) {
            var s = n,
            c = 0,
            a = egret.setTimeout(function() {
                s.removeCmdListener(t, h, s),
                console.warn("协议超时：" + t),
                i(null)
            },
            n, 5e3),
            h = function(e) {
                e.headInfo.result == c && (egret.clearTimeout(a), s.removeCmdListener(t, h, s), s.mainSocket.removeCmdListener(t, _), i(e))
            },
            _ = function(e) {
                egret.clearTimeout(a),
                s.removeCmdListener(t, h, s),
                s.mainSocket.removeCmdListener(t, _),
                o(e)
            };
            n.addCmdListener(t, h, n),
            s.mainSocket.addErrorListener(t, _),
            c = e.mainSocket.send(t, r)
        })
    },
    e
} ();
__reflect(LoginSocketConnection.prototype, "LoginSocketConnection");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
MessageEncrypt = function() {
    function e() {}
    return e.encrypt = function(e) {
        var t = (e.readUnsignedInt() - this.NO_ENCRYPT_LEN, new egret.ByteArray);
        return t.writeUnsignedInt(0),
        t.position = 0,
        t.writeUnsignedInt(t.length),
        t.position = 0,
        t
    },
    e.decrypt = function(e) {
        var t = (e.readUnsignedInt() - this.NO_ENCRYPT_LEN, new egret.ByteArray);
        return t.writeUnsignedInt(0),
        t.position = 0,
        t.writeUnsignedInt(t.length),
        t.position = 0,
        t
    },
    e.NO_ENCRYPT_LEN = 4,
    e
} ();
__reflect(MessageEncrypt.prototype, "MessageEncrypt");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
ParseSocketError = function() {
    function e() {}
    return e.getInstance = function() {
        return null == this._instance && (this._instance = new egret.EventDispatcher),
        this._instance
    },
    e.addErrorListener = function(e, t, n, r, i) {
        void 0 === n && (n = !1),
        void 0 === r && (r = 0),
        void 0 === i && (i = !1),
        this.getInstance().addEventListener(this.eventTypePrefix + String(e), t, this, n, r)
    },
    e.removeErrorListener = function(e, t, n) {
        void 0 === n && (n = !1),
        this.getInstance().removeEventListener(this.eventTypePrefix + String(e), t, this, n)
    },
    e.hasErrorListener = function(e) {
        return this.getInstance().hasEventListener(this.eventTypePrefix + String(e))
    },
    e.parse = function(e, t) {
        this.getInstance().dispatchEvent(new egret.Event(this.eventTypePrefix + String(e))),
        EventManager.dispatchEvent(new egret.Event("SocketError", !1, !1, {
            num: e,
            cmd: t
        }))
    },
    e.eventTypePrefix = "error_",
    e.TIME_PASSWORD_ERROR = "timePasswordError",
    e
} ();
__reflect(ParseSocketError.prototype, "ParseSocketError");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
SendQueueItemVo = function() {
    function e() {}
    return e
} ();
__reflect(SendQueueItemVo.prototype, "SendQueueItemVo");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
HeadInfo = function() {
    function e(e) {
        this._version = e.readUTFBytes(1),
        this._cmdID = e.readUnsignedInt(),
        this._userID = e.readUnsignedInt(),
        this._result = e.readInt()
    }
    return Object.defineProperty(e.prototype, "version", {
        get: function() {
            return this._version
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "cmdID", {
        get: function() {
            return this._cmdID
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "userID", {
        get: function() {
            return this._userID
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "result", {
        get: function() {
            return this._result
        },
        enumerable: !0,
        configurable: !0
    }),
    e
} ();
__reflect(HeadInfo.prototype, "HeadInfo");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
SocketConnectionHelper = function() {
    function e() {}
    return e.clearSendQueue = function() {
        e._sendCmdList = {},
        e._currentProcessCommandIDs = new HashSet
    },
    e.sendCommandByQueue = function(t) {
        var n = e._sendCmdList[t.cmdID];
        null == n && (n = [], e._sendCmdList[t.cmdID] = n),
        n.push(t),
        e.checkWaitCmids()
    },
    e.checkWaitCmids = function() {
        for (var t in e._sendCmdList) if (!e._currentProcessCommandIDs.contains(t)) {
            var n = e._sendCmdList[t];
            n.length > 0 && e.processSendItemVo(n.shift())
        }
    },
    e.processSendItemVo = function(t) {
        if (!e._currentProcessCommandIDs.contains(t.cmdID)) {
            var n = function(n) {
                e.prodessEnd(t),
                null != t.callBackFun && t.callBackFun(n)
            },
            r = function(n) {
                e.prodessEnd(t),
                null != t.errorHandleFun && t.errorHandleFun(n)
            };
            e._currentProcessCommandIDs.add(t.cmdID),
            SocketConnection.sendWithCallback2(t.cmdID, n, t.args, r)
        }
    },
    e.prodessEnd = function(t) {
        e._currentProcessCommandIDs.remove(t.cmdID);
        var n = e._sendCmdList[t.cmdID];
        n && -1 != n.indexOf(t) && n.splice(n.indexOf(t), 1),
        e.checkWaitCmids()
    },
    e._sendCmdList = new Object,
    e._currentProcessCommandIDs = new HashSet,
    e
} ();
__reflect(SocketConnectionHelper.prototype, "SocketConnectionHelper");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    n.prototype = t.prototype,
    e.prototype = new n
},
SocketEncryptImpl = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.userID = 0,
        t.ip = "10.1.1.170",
        t.port = 2003,
        t._result = 0,
        t.reConnecting = !1,
        t._chunkBuffer = new egret.ByteArray,
        t._tempBuffer = new egret.ByteArray,
        t._isShowLog = !1,
        t.closeIDs = [],
        t.openIDs = null,
        t
    }
    return __extends(t, e),
    t.addCmdLabel = function(e, n) {
        t._cmdLabelMap[e] = n
    },
    t.getCmdLabel = function(e) {
        return e in t._cmdLabelMap ? t._cmdLabelMap[e] : "---"
    },
    t.prototype.send = function(e, n) {
        if (this.connected && !SocketConnection.mainSocket.reConnecting) {
            var r = this.pack(this.userID, e, n);
            return r.position = 0,
            this.writeBytes(r),
            this.flush(),
            this.sendDataError(e),
            41228 != e && 1002 != e && this.log(e, "C2S>>Socket: " + this.ip + ":" + this.port.toString() + "[cmdID:" + e + "]", t.getCmdLabel(e), "arg: [" + n + "]", "[data length:" + this._sendBodyLen + "]"),
            this._result
        }
        return 0
    },
    t.prototype.pack = function(e, t, n) {
        var r = new egret.ByteArray;
        this.serializeBinary(r, n),
        this._sendBodyLen = r.length;
        var i = this.packHead(e, t, r),
        o = new egret.ByteArray;
        return o.writeBytes(i),
        o.writeBytes(r),
        o
    },
    t.prototype.serializeBinary = function(e, t) {
        for (var n = 0,
        r = t; n < r.length; n++) {
            var i = r[n];
            i instanceof Array ? this.serializeBinary(e, i) : "string" == typeof i ? e.writeUTFBytes(i) : i instanceof egret.ByteArray ? e.writeBytes(i) : e.writeUnsignedInt(i)
        }
    },
    t.prototype.packHead = function(e, n, r) {
        var i = new egret.ByteArray,
        o = r.length + t.HEAD_LENGTH;
        if (i.writeUnsignedInt(o), i.writeUTFBytes(t.VERSION), i.writeUnsignedInt(n), i.writeUnsignedInt(e), n > 1e3) {
            for (var s = 0,
            c = 0; c < r.length; c++) s ^= 255 & r.bytes[c];
            this._result = this._result - Math.floor(this._result / 3) + 113 + r.length % 17 + n % 23 + s + 7,
            i.writeInt(this._result)
        } else i.writeInt(0);
        return i
    },
    t.prototype.connect = function() {
        e.prototype.connect.call(this, this.ip, this.port),
        this.type = egret.WebSocket.TYPE_BINARY,
        this._result = 0,
        this.log("连接SOCKET：：：：", this.ip, this.port),
        this.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this)
    },
    t.prototype.connectByProtocol = function(t) {
        var n = t + "://" + this.ip + ":" + this.port;
        e.prototype.connectByUrl.call(this, n),
        this.type = egret.WebSocket.TYPE_BINARY,
        this._result = 0,
        this.log("连接SOCKET：：：：", this.ip, this.port),
        this.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this)
    },
    t.prototype.close = function() {
        this.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this),
        this.connected && e.prototype.close.call(this),
        this._result = 0
    },
    t.prototype.sendDataError = function(e) {
        null != this.errorCallback && this.errorCallback(e, 1)
    },
    t.prototype.readDataError = function(e) {
        null != this.errorCallback && this.errorCallback(e, 0)
    },
    t.prototype.addCmdListener = function(e, n, r) {
        this.addEventListener(t.cmdPrefix + e.toString(), n, r)
    },
    t.prototype.removeCmdListener = function(e, n, r) {
        this.removeEventListener(t.cmdPrefix + e.toString(), n, r)
    },
    t.prototype.dispatchCmd = function(e, n, r) {
        return this.dispatchEvent(new SocketEvent(t.cmdPrefix + e.toString(), n, r))
    },
    t.prototype.hasCmdListener = function(e) {
        return this.hasEventListener(t.cmdPrefix + e.toString())
    },
    t.prototype.addErrorListener = function(e, n, r) {
        this.addEventListener(t.errorPrefix + e.toString(), n, r)
    },
    t.prototype.removeErrorListener = function(e, n, r) {
        this.removeEventListener(t.errorPrefix + e.toString(), n, r)
    },
    t.prototype.dispatchError = function(e, n) {
        return this.dispatchEvent(new SocketErrorEvent(t.errorPrefix + e.toString(), n))
    },
    t.prototype.hasErrorListener = function(e) {
        return this.hasEventListener(t.errorPrefix + e.toString())
    },
    t.prototype.parseData = function(e) {
        if (this._packageLen = e.readUnsignedInt(), this._packageLen < t.HEAD_LENGTH || this._packageLen > t.PACKAGE_MAX) return this.readDataError(0),
        this.dispatchEvent(new SocketErrorEvent(SocketErrorEvent.ERROR, null)),
        void e.readBytes(new egret.ByteArray);
        if (this._headInfo = new HeadInfo(e), (1001 == this._headInfo.cmdID || 41463 == this._headInfo.cmdID || 42387 == this._headInfo.cmdID || 41983 == this._headInfo.cmdID) && (this._result = this._headInfo.result, this.reconnectKey = this._result), 41228 != this._headInfo.cmdID && 1002 != this._headInfo.cmdID && this.log(this._headInfo.cmdID, "S2C<<Socket: " + this.ip + ":" + this.port.toString() + "[cmdID:" + this._headInfo.cmdID + "]", t.getCmdLabel(this._headInfo.cmdID), "result: " + this._result, "[paclen:" + this._packageLen + "]"), this._headInfo.result > 1e3) return this.log("异常错误:" + this._headInfo.result),
        ParseSocketError.parse(this._headInfo.result, this._headInfo.cmdID),
        this.readDataError(this._headInfo.cmdID),
        this.dispatchError(this._headInfo.cmdID, this._headInfo),
        void this.dispatchEvent(new SocketErrorEvent(SocketErrorEvent.ERROR, this._headInfo));
        if (this._dataLen = this._packageLen - t.HEAD_LENGTH, 0 == this._dataLen) {
            var n = [41228];
            n.indexOf(this._headInfo.cmdID) < 0 && this.log(this._headInfo.cmdID, "S2C<<Socket[" + this.ip + ":" + this.port.toString() + "][cmdID:" + this._headInfo.cmdID + "无包体]", t.getCmdLabel(this._headInfo.cmdID)),
            this.readDataError(this._headInfo.cmdID),
            this.dispatchCmd(this._headInfo.cmdID, this._headInfo, null)
        } else {
            41228 != this._headInfo.cmdID && 1002 != this._headInfo.cmdID;
            var r = new egret.ByteArray;
            e.readBytes(r, 0, this._dataLen),
            this.readDataError(this._headInfo.cmdID),
            this.dispatchCmd(this._headInfo.cmdID, this._headInfo, r)
        }
    },
    t.prototype.onData = function(e) {
        for (this._chunkBuffer.clear(), this._tempBuffer.length > 0 && (this._tempBuffer.position = 0, this._tempBuffer.readBytes(this._chunkBuffer, 0, this._tempBuffer.length), this._tempBuffer.clear()), this.readBytes(this._chunkBuffer, this._chunkBuffer.length), this._chunkBuffer.position = 0; this._chunkBuffer.bytesAvailable > 0;) if (this._chunkBuffer.bytesAvailable > t.MSG_FIRST_TOKEN_LEN) {
            var n = this._chunkBuffer.readUnsignedInt() - t.MSG_FIRST_TOKEN_LEN;
            this._chunkBuffer.bytesAvailable >= n ? (this._chunkBuffer.position = this._chunkBuffer.position - t.MSG_FIRST_TOKEN_LEN, this.parseData(this._chunkBuffer)) : (this._chunkBuffer.position = this._chunkBuffer.position - t.MSG_FIRST_TOKEN_LEN, this._chunkBuffer.readBytes(this._tempBuffer, 0, this._chunkBuffer.bytesAvailable))
        } else this._chunkBuffer.readBytes(this._tempBuffer, 0, this._chunkBuffer.bytesAvailable)
    },
    t.prototype.log = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (this._isShowLog) {
            var n = e.shift();
            if (this.openIDs && this.openIDs.length > 0) this.openIDs.indexOf(n) >= 0 && console.log(e.join(" "));
            else if (this.closeIDs.indexOf(n) < 0) {
                var r = e.join(" "),
                i = r.indexOf("S2C<<") > -1;
                console.log("%c" + e.join(" "), "color: " + (i ? "lightGreen": "orange") + "; font - size: 14px; ")
            } else console.log(e.join(" "))
        }
    },
    t.prototype.closeCMDLog = function() {
        this._isShowLog = !1
    },
    t.prototype.openCMDLog = function() {
        this._isShowLog = !0
    },
    t.prototype.showCMDLogByIDS = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._isShowLog = !0,
        this.openIDs = e,
        this.closeIDs = null
    },
    t.prototype.filterCMDLog = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._isShowLog = !0,
        this.closeIDs = e,
        this.openIDs = null
    },
    t._cmdLabelMap = new Object,
    t.cmdPrefix = "cmd_",
    t.errorPrefix = "error_",
    t.PACKAGE_MAX = 8388608,
    t.VERSION = "1",
    t.HEAD_LENGTH = 17,
    t.size = 51706,
    t.MSG_FIRST_TOKEN_LEN = 4,
    t
} (egret.WebSocket);
__reflect(SocketEncryptImpl.prototype, "SocketEncryptImpl");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    n.prototype = t.prototype,
    e.prototype = new n
},
SocketErrorEvent = function(e) {
    function t(t, n, r, i) {
        void 0 === r && (r = !1),
        void 0 === i && (i = !1);
        var o = e.call(this, t, r, i) || this;
        return o._headInfo = n,
        o
    }
    return __extends(t, e),
    Object.defineProperty(t.prototype, "headInfo", {
        get: function() {
            return this._headInfo
        },
        enumerable: !0,
        configurable: !0
    }),
    t.ERROR = "socketError",
    t
} (egret.Event);
__reflect(SocketErrorEvent.prototype, "SocketErrorEvent");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    n.prototype = t.prototype,
    e.prototype = new n
},
SocketEvent = function(e) {
    function t(t, n, r, i, o, s) {
        void 0 === i && (i = null),
        void 0 === o && (o = !1),
        void 0 === s && (s = !1);
        var c = e.call(this, t, o, s) || this;
        return c._headInfo = n,
        c._data = r,
        c
    }
    return __extends(t, e),
    Object.defineProperty(t.prototype, "headInfo", {
        get: function() {
            return this._headInfo
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "data", {
        get: function() {
            return this._data
        },
        enumerable: !0,
        configurable: !0
    }),
    t.COMPLETE = egret.Event.COMPLETE,
    t.SOCKETRECONNECT = "socket_reconnect",
    t
} (egret.Event);
__reflect(SocketEvent.prototype, "SocketEvent");
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    n.prototype = t.prototype,
    e.prototype = new n
},
SocketImpl = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.userID = 0,
        t._result = 0,
        t._isGetHead = !0,
        t.awaitMsg = [],
        t.type = egret.WebSocket.TYPE_BINARY,
        t.addEventListener(egret.IOErrorEvent.IO_ERROR, t.onSocketError, t),
        t
    }
    return __extends(t, e),
    t.addCmdLabel = function(e, t) {
        this._cmdLabelMap[e] = t
    },
    t.getCmdLabel = function(e) {
        return e in this._cmdLabelMap ? this._cmdLabelMap[e] : "---"
    },
    t.prototype.onSocketError = function(e) {
        console.log("WebSocket Connect error:=========>\n", e)
    },
    t.prototype.send = function(e, n) {
        var r = this.pack(this.userID, e, n);
        return this.connected ? (this.writeBytes(r), this.flush(), console.log("C2S>>Socket[" + this.linkUrl + "][cmdID:" + e + "]", t.getCmdLabel(e), "[data length:" + this._sendBodyLen + "]"), this._result) : (this.awaitMsg.push(r), this.linkUrl && this.linkUrl.length > 0 ? this.connectByUrl(this.linkUrl) : this.connect(this.ip, this.port), this._result)
    },
    t.prototype.connect = function(t, n) {
        var r = window.getWebsocketStr();
        console.log("gsgggggggggggggg" + r),
        this.linkUrl = r + "://" + t + ":" + n,
        this.type = egret.WebSocket.TYPE_BINARY,
        e.prototype.connect.call(this, t, n),
        this.ip = t,
        this.port = n,
        this._result = 0,
        console.log("连接SOCKET  by ip:", t, n),
        this._recvCache = new egret.ByteArray,
        this.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this),
        this.addEventListener(egret.Event.CONNECT, this.onConnected, this)
    },
    t.prototype.connectByUrl = function(t) {
        this.type = egret.WebSocket.TYPE_BINARY,
        this.linkUrl = t || this.linkUrl,
        e.prototype.connectByUrl.call(this, this.linkUrl),
        this._result = 0,
        console.log("连接SOCKET by url：", this.linkUrl),
        this._recvCache = new egret.ByteArray,
        this.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this),
        this.addEventListener(egret.Event.CONNECT, this.onConnected, this)
    },
    t.prototype.onConnected = function(e) {
        this.removeEventListener(egret.Event.CONNECT, this.onConnected, this),
        egret.setTimeout(this.delaySendAwaitMsg, this, 400)
    },
    t.prototype.delaySendAwaitMsg = function() {
        for (; this.awaitMsg.length > 0;) {
            var e = this.awaitMsg.shift();
            this.writeBytes(e),
            this.flush()
        }
    },
    t.prototype.close = function() {
        console.trace(),
        console.log("=================前端主动断开连接===================="),
        this.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this),
        this.connected && e.prototype.close.call(this),
        this._result = 0
    },
    t.prototype.sendDataError = function(e) {
        null != this.errorCallback && this.errorCallback(e, 1)
    },
    t.prototype.readDataError = function(e) {
        null != this.errorCallback && this.errorCallback(e, 0)
    },
    t.prototype.addCmdListener = function(e, n, r) {
        this.addEventListener(t.cmdPrefix + e.toString(), n, r || this)
    },
    t.prototype.removeCmdListener = function(e, n, r) {
        this.removeEventListener(t.cmdPrefix + e.toString(), n, r || this)
    },
    t.prototype.dispatchCmd = function(e, n, r) {
        return this.dispatchEvent(new SocketEvent(t.cmdPrefix + e.toString(), n, r))
    },
    t.prototype.hasCmdListener = function(e) {
        return this.hasEventListener(t.cmdPrefix + e.toString())
    },
    t.prototype.addErrorListener = function(e, n) {
        this.addEventListener(t.errorPrefix + e.toString(), n, this)
    },
    t.prototype.removeErrorListener = function(e, n) {
        this.removeEventListener(t.errorPrefix + e.toString(), n, this)
    },
    t.prototype.dispatchError = function(e, n) {
        return this.dispatchEvent(new SocketErrorEvent(t.errorPrefix + e.toString(), n))
    },
    t.prototype.hasErrorListener = function(e) {
        return this.hasEventListener(t.errorPrefix + e.toString())
    },
    t.prototype.onData = function(e) {
        for (this.readBytes(this._recvCache, this._recvCache.length); this._recvCache.bytesAvailable > 0;) {
            if (!this._isGetHead) {
                if (this._recvCache.bytesAvailable >= this._dataLen) {
                    var n = new egret.ByteArray;
                    if (this._recvCache.readBytes(n, 0, this._dataLen), this._isGetHead = !0, this.readDataError(this._headInfo.cmdID), this.dispatchEvent(new egret.Event(t.MESSAGE_IN, !1, !0, {
                        head: this._headInfo,
                        data: n
                    })), this.dispatchCmd(this._headInfo.cmdID, this._headInfo, n), this.connected) continue;
                    break
                }
                break
            }
            if (! (this._recvCache.bytesAvailable >= t.HEAD_LENGTH)) break;
            if (this._packageLen = this._recvCache.readUnsignedInt(), this._packageLen < t.HEAD_LENGTH || this._packageLen > t.PACKAGE_MAX) return this.readDataError(0),
            this.dispatchEvent(new SocketErrorEvent(SocketErrorEvent.ERROR, null)),
            void this.readBytes(new egret.ByteArray);
            if (this._headInfo = new HeadInfo(this._recvCache), 1001 == this._headInfo.cmdID && (this._result = this._headInfo.result), console.log("%cS2C<<Socket", "color: pink; font-size: 18px;", "[" + this.linkUrl + "][cmdID:" + this._headInfo.cmdID + "]", t.getCmdLabel(this._headInfo.cmdID) + this._packageLen), this._headInfo.result > 1e3) {
                if (console.warn("socket error:" + this._headInfo.result), this.readDataError(this._headInfo.cmdID), this.dispatchError(this._headInfo.cmdID, this._headInfo), this.dispatchEvent(new egret.Event(t.MESSAGE_IN, !1, !0, {
                    head: this._headInfo
                })), this.dispatchEvent(new SocketErrorEvent(SocketErrorEvent.ERROR, this._headInfo)), ParseSocketError.parse(this._headInfo.result, this._headInfo.cmdID), this.connected) continue;
                break
            }
            if (this._dataLen = this._packageLen - t.HEAD_LENGTH, 0 == this._dataLen) {
                if (this.readDataError(this._headInfo.cmdID), this.dispatchEvent(new egret.Event(t.MESSAGE_IN, !1, !0, {
                    head: this._headInfo
                })), this.dispatchCmd(this._headInfo.cmdID, this._headInfo, null), this.connected) continue;
                break
            }
            this._isGetHead = !1
        }
    },
    t.prototype.pack = function(e, t, n) {
        var r = new egret.ByteArray;
        this.serializeBinary(r, n),
        this._sendBodyLen = r.length;
        var i = this.packHead(e, t, r),
        o = new egret.ByteArray;
        return o.writeBytes(i),
        o.writeBytes(r),
        o
    },
    t.prototype.serializeBinary = function(e, t) {
        for (var n = 0,
        r = t; n < r.length; n++) {
            var i = r[n];
            i instanceof Array ? this.serializeBinary(e, i) : "string" == typeof i ? e.writeUTFBytes(i) : i instanceof egret.ByteArray ? e.writeBytes(i) : e.writeUnsignedInt(i)
        }
    },
    t.prototype.packHead = function(e, n, r) {
        var i = new egret.ByteArray,
        o = r.length + t.HEAD_LENGTH;
        if (i.writeUnsignedInt(o), i.writeUTFBytes(t.VERSION), i.writeUnsignedInt(n), i.writeUnsignedInt(e), n > 1e3) {
            for (var s, c = 0; c < r.length; c++) s ^= 255 & r[c];
            this._result = this._result - Number(this._result / 7) + 147 + (r.length + t.HEAD_LENGTH) % 21 + n % 13 + s,
            i.writeInt(this._result)
        } else i.writeInt(0);
        return i
    },
    t._cmdLabelMap = new Object,
    t.MESSAGE_IN = "message_in",
    t.cmdPrefix = "cmd_",
    t.errorPrefix = "error_",
    t.PACKAGE_MAX = 8388608,
    t.VERSION = "1",
    t.HEAD_LENGTH = 17,
    t
} (egret.WebSocket);
__reflect(SocketImpl.prototype, "SocketImpl");