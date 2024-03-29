import {l as xu, n as Yr, g as Ou, _ as I_} from "./index-zOfEP0jm.js";
import {r as x_, e as Fr, U as Pu} from "./___vite-browser-external_commonjs-proxy-L6IBOLkW.js";
var Cu = {}
  , ea = {}
  , $e = {}
  , Ud = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    function e(f, y) {
        var g = f >>> 16 & 65535
          , m = f & 65535
          , D = y >>> 16 & 65535
          , I = y & 65535;
        return m * I + (g * I + m * D << 16 >>> 0) | 0
    }
    i.mul = Math.imul || e;
    function t(f, y) {
        return f + y | 0
    }
    i.add = t;
    function s(f, y) {
        return f - y | 0
    }
    i.sub = s;
    function o(f, y) {
        return f << y | f >>> 32 - y
    }
    i.rotl = o;
    function c(f, y) {
        return f << 32 - y | f >>> y
    }
    i.rotr = c;
    function d(f) {
        return typeof f == "number" && isFinite(f) && Math.floor(f) === f
    }
    i.isInteger = Number.isInteger || d,
    i.MAX_SAFE_INTEGER = 9007199254740991,
    i.isSafeInteger = function(f) {
        return i.isInteger(f) && f >= -i.MAX_SAFE_INTEGER && f <= i.MAX_SAFE_INTEGER
    }
}
)(Ud);
Object.defineProperty($e, "__esModule", {
    value: !0
});
var Ld = Ud;
function O_(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 0] << 8 | i[e + 1]) << 16 >> 16
}
$e.readInt16BE = O_;
function P_(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 0] << 8 | i[e + 1]) >>> 0
}
$e.readUint16BE = P_;
function C_(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 1] << 8 | i[e]) << 16 >> 16
}
$e.readInt16LE = C_;
function A_(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 1] << 8 | i[e]) >>> 0
}
$e.readUint16LE = A_;
function $d(i, e, t) {
    return e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 8,
    e[t + 1] = i >>> 0,
    e
}
$e.writeUint16BE = $d;
$e.writeInt16BE = $d;
function Md(i, e, t) {
    return e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 0,
    e[t + 1] = i >>> 8,
    e
}
$e.writeUint16LE = Md;
$e.writeInt16LE = Md;
function nu(i, e) {
    return e === void 0 && (e = 0),
    i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]
}
$e.readInt32BE = nu;
function su(i, e) {
    return e === void 0 && (e = 0),
    (i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]) >>> 0
}
$e.readUint32BE = su;
function ou(i, e) {
    return e === void 0 && (e = 0),
    i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]
}
$e.readInt32LE = ou;
function au(i, e) {
    return e === void 0 && (e = 0),
    (i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]) >>> 0
}
$e.readUint32LE = au;
function Go(i, e, t) {
    return e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 24,
    e[t + 1] = i >>> 16,
    e[t + 2] = i >>> 8,
    e[t + 3] = i >>> 0,
    e
}
$e.writeUint32BE = Go;
$e.writeInt32BE = Go;
function Wo(i, e, t) {
    return e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    e[t + 0] = i >>> 0,
    e[t + 1] = i >>> 8,
    e[t + 2] = i >>> 16,
    e[t + 3] = i >>> 24,
    e
}
$e.writeUint32LE = Wo;
$e.writeInt32LE = Wo;
function T_(i, e) {
    e === void 0 && (e = 0);
    var t = nu(i, e)
      , s = nu(i, e + 4);
    return t * 4294967296 + s - (s >> 31) * 4294967296
}
$e.readInt64BE = T_;
function R_(i, e) {
    e === void 0 && (e = 0);
    var t = su(i, e)
      , s = su(i, e + 4);
    return t * 4294967296 + s
}
$e.readUint64BE = R_;
function N_(i, e) {
    e === void 0 && (e = 0);
    var t = ou(i, e)
      , s = ou(i, e + 4);
    return s * 4294967296 + t - (t >> 31) * 4294967296
}
$e.readInt64LE = N_;
function U_(i, e) {
    e === void 0 && (e = 0);
    var t = au(i, e)
      , s = au(i, e + 4);
    return s * 4294967296 + t
}
$e.readUint64LE = U_;
function jd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Go(i / 4294967296 >>> 0, e, t),
    Go(i >>> 0, e, t + 4),
    e
}
$e.writeUint64BE = jd;
$e.writeInt64BE = jd;
function qd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Wo(i >>> 0, e, t),
    Wo(i / 4294967296 >>> 0, e, t + 4),
    e
}
$e.writeUint64LE = qd;
$e.writeInt64LE = qd;
function L_(i, e, t) {
    if (t === void 0 && (t = 0),
    i % 8 !== 0)
        throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (i / 8 > e.length - t)
        throw new Error("readUintBE: array is too short for the given bitLength");
    for (var s = 0, o = 1, c = i / 8 + t - 1; c >= t; c--)
        s += e[c] * o,
        o *= 256;
    return s
}
$e.readUintBE = L_;
function $_(i, e, t) {
    if (t === void 0 && (t = 0),
    i % 8 !== 0)
        throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (i / 8 > e.length - t)
        throw new Error("readUintLE: array is too short for the given bitLength");
    for (var s = 0, o = 1, c = t; c < t + i / 8; c++)
        s += e[c] * o,
        o *= 256;
    return s
}
$e.readUintLE = $_;
function M_(i, e, t, s) {
    if (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!Ld.isSafeInteger(e))
        throw new Error("writeUintBE value must be an integer");
    for (var o = 1, c = i / 8 + s - 1; c >= s; c--)
        t[c] = e / o & 255,
        o *= 256;
    return t
}
$e.writeUintBE = M_;
function j_(i, e, t, s) {
    if (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!Ld.isSafeInteger(e))
        throw new Error("writeUintLE value must be an integer");
    for (var o = 1, c = s; c < s + i / 8; c++)
        t[c] = e / o & 255,
        o *= 256;
    return t
}
$e.writeUintLE = j_;
function q_(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat32(e)
}
$e.readFloat32BE = q_;
function F_(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat32(e, !0)
}
$e.readFloat32LE = F_;
function z_(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat64(e)
}
$e.readFloat64BE = z_;
function B_(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer,i.byteOffset,i.byteLength);
    return t.getFloat64(e, !0)
}
$e.readFloat64LE = B_;
function H_(i, e, t) {
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat32(t, i),
    e
}
$e.writeFloat32BE = H_;
function K_(i, e, t) {
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat32(t, i, !0),
    e
}
$e.writeFloat32LE = K_;
function k_(i, e, t) {
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat64(t, i),
    e
}
$e.writeFloat64BE = k_;
function V_(i, e, t) {
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0);
    var s = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return s.setFloat64(t, i, !0),
    e
}
$e.writeFloat64LE = V_;
var Cr = {};
Object.defineProperty(Cr, "__esModule", {
    value: !0
});
function G_(i) {
    for (var e = 0; e < i.length; e++)
        i[e] = 0;
    return i
}
Cr.wipe = G_;
Object.defineProperty(ea, "__esModule", {
    value: !0
});
var Zt = $e
  , cu = Cr
  , W_ = 20;
function Y_(i, e, t) {
    for (var s = 1634760805, o = 857760878, c = 2036477234, d = 1797285236, f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], y = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], g = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], m = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], D = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], I = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], T = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], P = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], z = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], H = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], ie = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], U = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], j = s, O = o, A = c, E = d, u = f, _ = y, G = g, W = m, se = D, ue = I, de = T, b = P, C = z, ee = H, Q = ie, k = U, V = 0; V < W_; V += 2)
        j = j + u | 0,
        C ^= j,
        C = C >>> 16 | C << 16,
        se = se + C | 0,
        u ^= se,
        u = u >>> 20 | u << 12,
        O = O + _ | 0,
        ee ^= O,
        ee = ee >>> 16 | ee << 16,
        ue = ue + ee | 0,
        _ ^= ue,
        _ = _ >>> 20 | _ << 12,
        A = A + G | 0,
        Q ^= A,
        Q = Q >>> 16 | Q << 16,
        de = de + Q | 0,
        G ^= de,
        G = G >>> 20 | G << 12,
        E = E + W | 0,
        k ^= E,
        k = k >>> 16 | k << 16,
        b = b + k | 0,
        W ^= b,
        W = W >>> 20 | W << 12,
        A = A + G | 0,
        Q ^= A,
        Q = Q >>> 24 | Q << 8,
        de = de + Q | 0,
        G ^= de,
        G = G >>> 25 | G << 7,
        E = E + W | 0,
        k ^= E,
        k = k >>> 24 | k << 8,
        b = b + k | 0,
        W ^= b,
        W = W >>> 25 | W << 7,
        O = O + _ | 0,
        ee ^= O,
        ee = ee >>> 24 | ee << 8,
        ue = ue + ee | 0,
        _ ^= ue,
        _ = _ >>> 25 | _ << 7,
        j = j + u | 0,
        C ^= j,
        C = C >>> 24 | C << 8,
        se = se + C | 0,
        u ^= se,
        u = u >>> 25 | u << 7,
        j = j + _ | 0,
        k ^= j,
        k = k >>> 16 | k << 16,
        de = de + k | 0,
        _ ^= de,
        _ = _ >>> 20 | _ << 12,
        O = O + G | 0,
        C ^= O,
        C = C >>> 16 | C << 16,
        b = b + C | 0,
        G ^= b,
        G = G >>> 20 | G << 12,
        A = A + W | 0,
        ee ^= A,
        ee = ee >>> 16 | ee << 16,
        se = se + ee | 0,
        W ^= se,
        W = W >>> 20 | W << 12,
        E = E + u | 0,
        Q ^= E,
        Q = Q >>> 16 | Q << 16,
        ue = ue + Q | 0,
        u ^= ue,
        u = u >>> 20 | u << 12,
        A = A + W | 0,
        ee ^= A,
        ee = ee >>> 24 | ee << 8,
        se = se + ee | 0,
        W ^= se,
        W = W >>> 25 | W << 7,
        E = E + u | 0,
        Q ^= E,
        Q = Q >>> 24 | Q << 8,
        ue = ue + Q | 0,
        u ^= ue,
        u = u >>> 25 | u << 7,
        O = O + G | 0,
        C ^= O,
        C = C >>> 24 | C << 8,
        b = b + C | 0,
        G ^= b,
        G = G >>> 25 | G << 7,
        j = j + _ | 0,
        k ^= j,
        k = k >>> 24 | k << 8,
        de = de + k | 0,
        _ ^= de,
        _ = _ >>> 25 | _ << 7;
    Zt.writeUint32LE(j + s | 0, i, 0),
    Zt.writeUint32LE(O + o | 0, i, 4),
    Zt.writeUint32LE(A + c | 0, i, 8),
    Zt.writeUint32LE(E + d | 0, i, 12),
    Zt.writeUint32LE(u + f | 0, i, 16),
    Zt.writeUint32LE(_ + y | 0, i, 20),
    Zt.writeUint32LE(G + g | 0, i, 24),
    Zt.writeUint32LE(W + m | 0, i, 28),
    Zt.writeUint32LE(se + D | 0, i, 32),
    Zt.writeUint32LE(ue + I | 0, i, 36),
    Zt.writeUint32LE(de + T | 0, i, 40),
    Zt.writeUint32LE(b + P | 0, i, 44),
    Zt.writeUint32LE(C + z | 0, i, 48),
    Zt.writeUint32LE(ee + H | 0, i, 52),
    Zt.writeUint32LE(Q + ie | 0, i, 56),
    Zt.writeUint32LE(k + U | 0, i, 60)
}
function Fd(i, e, t, s, o) {
    if (o === void 0 && (o = 0),
    i.length !== 32)
        throw new Error("ChaCha: key size must be 32 bytes");
    if (s.length < t.length)
        throw new Error("ChaCha: destination is shorter than source");
    var c, d;
    if (o === 0) {
        if (e.length !== 8 && e.length !== 12)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
        c = new Uint8Array(16),
        d = c.length - e.length,
        c.set(e, d)
    } else {
        if (e.length !== 16)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
        c = e,
        d = o
    }
    for (var f = new Uint8Array(64), y = 0; y < t.length; y += 64) {
        Y_(f, c, i);
        for (var g = y; g < y + 64 && g < t.length; g++)
            s[g] = t[g] ^ f[g - y];
        Q_(c, 0, d)
    }
    return cu.wipe(f),
    o === 0 && cu.wipe(c),
    s
}
ea.streamXOR = Fd;
function J_(i, e, t, s) {
    return s === void 0 && (s = 0),
    cu.wipe(t),
    Fd(i, e, t, t, s)
}
ea.stream = J_;
function Q_(i, e, t) {
    for (var s = 1; t--; )
        s = s + (i[e] & 255) | 0,
        i[e] = s & 255,
        s >>>= 8,
        e++;
    if (s > 0)
        throw new Error("ChaCha: counter overflow")
}
var zd = {}
  , Fi = {};
Object.defineProperty(Fi, "__esModule", {
    value: !0
});
function X_(i, e, t) {
    return ~(i - 1) & e | i - 1 & t
}
Fi.select = X_;
function Z_(i, e) {
    return (i | 0) - (e | 0) - 1 >>> 31 & 1
}
Fi.lessOrEqual = Z_;
function Bd(i, e) {
    if (i.length !== e.length)
        return 0;
    for (var t = 0, s = 0; s < i.length; s++)
        t |= i[s] ^ e[s];
    return 1 & t - 1 >>> 8
}
Fi.compare = Bd;
function e1(i, e) {
    return i.length === 0 || e.length === 0 ? !1 : Bd(i, e) !== 0
}
Fi.equal = e1;
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = Fi
      , t = Cr;
    i.DIGEST_LENGTH = 16;
    var s = function() {
        function d(f) {
            this.digestLength = i.DIGEST_LENGTH,
            this._buffer = new Uint8Array(16),
            this._r = new Uint16Array(10),
            this._h = new Uint16Array(10),
            this._pad = new Uint16Array(8),
            this._leftover = 0,
            this._fin = 0,
            this._finished = !1;
            var y = f[0] | f[1] << 8;
            this._r[0] = y & 8191;
            var g = f[2] | f[3] << 8;
            this._r[1] = (y >>> 13 | g << 3) & 8191;
            var m = f[4] | f[5] << 8;
            this._r[2] = (g >>> 10 | m << 6) & 7939;
            var D = f[6] | f[7] << 8;
            this._r[3] = (m >>> 7 | D << 9) & 8191;
            var I = f[8] | f[9] << 8;
            this._r[4] = (D >>> 4 | I << 12) & 255,
            this._r[5] = I >>> 1 & 8190;
            var T = f[10] | f[11] << 8;
            this._r[6] = (I >>> 14 | T << 2) & 8191;
            var P = f[12] | f[13] << 8;
            this._r[7] = (T >>> 11 | P << 5) & 8065;
            var z = f[14] | f[15] << 8;
            this._r[8] = (P >>> 8 | z << 8) & 8191,
            this._r[9] = z >>> 5 & 127,
            this._pad[0] = f[16] | f[17] << 8,
            this._pad[1] = f[18] | f[19] << 8,
            this._pad[2] = f[20] | f[21] << 8,
            this._pad[3] = f[22] | f[23] << 8,
            this._pad[4] = f[24] | f[25] << 8,
            this._pad[5] = f[26] | f[27] << 8,
            this._pad[6] = f[28] | f[29] << 8,
            this._pad[7] = f[30] | f[31] << 8
        }
        return d.prototype._blocks = function(f, y, g) {
            for (var m = this._fin ? 0 : 2048, D = this._h[0], I = this._h[1], T = this._h[2], P = this._h[3], z = this._h[4], H = this._h[5], ie = this._h[6], U = this._h[7], j = this._h[8], O = this._h[9], A = this._r[0], E = this._r[1], u = this._r[2], _ = this._r[3], G = this._r[4], W = this._r[5], se = this._r[6], ue = this._r[7], de = this._r[8], b = this._r[9]; g >= 16; ) {
                var C = f[y + 0] | f[y + 1] << 8;
                D += C & 8191;
                var ee = f[y + 2] | f[y + 3] << 8;
                I += (C >>> 13 | ee << 3) & 8191;
                var Q = f[y + 4] | f[y + 5] << 8;
                T += (ee >>> 10 | Q << 6) & 8191;
                var k = f[y + 6] | f[y + 7] << 8;
                P += (Q >>> 7 | k << 9) & 8191;
                var V = f[y + 8] | f[y + 9] << 8;
                z += (k >>> 4 | V << 12) & 8191,
                H += V >>> 1 & 8191;
                var J = f[y + 10] | f[y + 11] << 8;
                ie += (V >>> 14 | J << 2) & 8191;
                var re = f[y + 12] | f[y + 13] << 8;
                U += (J >>> 11 | re << 5) & 8191;
                var _e = f[y + 14] | f[y + 15] << 8;
                j += (re >>> 8 | _e << 8) & 8191,
                O += _e >>> 5 | m;
                var oe = 0
                  , be = oe;
                be += D * A,
                be += I * (5 * b),
                be += T * (5 * de),
                be += P * (5 * ue),
                be += z * (5 * se),
                oe = be >>> 13,
                be &= 8191,
                be += H * (5 * W),
                be += ie * (5 * G),
                be += U * (5 * _),
                be += j * (5 * u),
                be += O * (5 * E),
                oe += be >>> 13,
                be &= 8191;
                var le = oe;
                le += D * E,
                le += I * A,
                le += T * (5 * b),
                le += P * (5 * de),
                le += z * (5 * ue),
                oe = le >>> 13,
                le &= 8191,
                le += H * (5 * se),
                le += ie * (5 * W),
                le += U * (5 * G),
                le += j * (5 * _),
                le += O * (5 * u),
                oe += le >>> 13,
                le &= 8191;
                var me = oe;
                me += D * u,
                me += I * E,
                me += T * A,
                me += P * (5 * b),
                me += z * (5 * de),
                oe = me >>> 13,
                me &= 8191,
                me += H * (5 * ue),
                me += ie * (5 * se),
                me += U * (5 * W),
                me += j * (5 * G),
                me += O * (5 * _),
                oe += me >>> 13,
                me &= 8191;
                var B = oe;
                B += D * _,
                B += I * u,
                B += T * E,
                B += P * A,
                B += z * (5 * b),
                oe = B >>> 13,
                B &= 8191,
                B += H * (5 * de),
                B += ie * (5 * ue),
                B += U * (5 * se),
                B += j * (5 * W),
                B += O * (5 * G),
                oe += B >>> 13,
                B &= 8191;
                var F = oe;
                F += D * G,
                F += I * _,
                F += T * u,
                F += P * E,
                F += z * A,
                oe = F >>> 13,
                F &= 8191,
                F += H * (5 * b),
                F += ie * (5 * de),
                F += U * (5 * ue),
                F += j * (5 * se),
                F += O * (5 * W),
                oe += F >>> 13,
                F &= 8191;
                var L = oe;
                L += D * W,
                L += I * G,
                L += T * _,
                L += P * u,
                L += z * E,
                oe = L >>> 13,
                L &= 8191,
                L += H * A,
                L += ie * (5 * b),
                L += U * (5 * de),
                L += j * (5 * ue),
                L += O * (5 * se),
                oe += L >>> 13,
                L &= 8191;
                var l = oe;
                l += D * se,
                l += I * W,
                l += T * G,
                l += P * _,
                l += z * u,
                oe = l >>> 13,
                l &= 8191,
                l += H * E,
                l += ie * A,
                l += U * (5 * b),
                l += j * (5 * de),
                l += O * (5 * ue),
                oe += l >>> 13,
                l &= 8191;
                var R = oe;
                R += D * ue,
                R += I * se,
                R += T * W,
                R += P * G,
                R += z * _,
                oe = R >>> 13,
                R &= 8191,
                R += H * u,
                R += ie * E,
                R += U * A,
                R += j * (5 * b),
                R += O * (5 * de),
                oe += R >>> 13,
                R &= 8191;
                var ae = oe;
                ae += D * de,
                ae += I * ue,
                ae += T * se,
                ae += P * W,
                ae += z * G,
                oe = ae >>> 13,
                ae &= 8191,
                ae += H * _,
                ae += ie * u,
                ae += U * E,
                ae += j * A,
                ae += O * (5 * b),
                oe += ae >>> 13,
                ae &= 8191;
                var fe = oe;
                fe += D * b,
                fe += I * de,
                fe += T * ue,
                fe += P * se,
                fe += z * W,
                oe = fe >>> 13,
                fe &= 8191,
                fe += H * G,
                fe += ie * _,
                fe += U * u,
                fe += j * E,
                fe += O * A,
                oe += fe >>> 13,
                fe &= 8191,
                oe = (oe << 2) + oe | 0,
                oe = oe + be | 0,
                be = oe & 8191,
                oe = oe >>> 13,
                le += oe,
                D = be,
                I = le,
                T = me,
                P = B,
                z = F,
                H = L,
                ie = l,
                U = R,
                j = ae,
                O = fe,
                y += 16,
                g -= 16
            }
            this._h[0] = D,
            this._h[1] = I,
            this._h[2] = T,
            this._h[3] = P,
            this._h[4] = z,
            this._h[5] = H,
            this._h[6] = ie,
            this._h[7] = U,
            this._h[8] = j,
            this._h[9] = O
        }
        ,
        d.prototype.finish = function(f, y) {
            y === void 0 && (y = 0);
            var g = new Uint16Array(10), m, D, I, T;
            if (this._leftover) {
                for (T = this._leftover,
                this._buffer[T++] = 1; T < 16; T++)
                    this._buffer[T] = 0;
                this._fin = 1,
                this._blocks(this._buffer, 0, 16)
            }
            for (m = this._h[1] >>> 13,
            this._h[1] &= 8191,
            T = 2; T < 10; T++)
                this._h[T] += m,
                m = this._h[T] >>> 13,
                this._h[T] &= 8191;
            for (this._h[0] += m * 5,
            m = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += m,
            m = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += m,
            g[0] = this._h[0] + 5,
            m = g[0] >>> 13,
            g[0] &= 8191,
            T = 1; T < 10; T++)
                g[T] = this._h[T] + m,
                m = g[T] >>> 13,
                g[T] &= 8191;
            for (g[9] -= 8192,
            D = (m ^ 1) - 1,
            T = 0; T < 10; T++)
                g[T] &= D;
            for (D = ~D,
            T = 0; T < 10; T++)
                this._h[T] = this._h[T] & D | g[T];
            for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535,
            this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535,
            this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535,
            this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535,
            this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535,
            this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535,
            this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535,
            this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535,
            I = this._h[0] + this._pad[0],
            this._h[0] = I & 65535,
            T = 1; T < 8; T++)
                I = (this._h[T] + this._pad[T] | 0) + (I >>> 16) | 0,
                this._h[T] = I & 65535;
            return f[y + 0] = this._h[0] >>> 0,
            f[y + 1] = this._h[0] >>> 8,
            f[y + 2] = this._h[1] >>> 0,
            f[y + 3] = this._h[1] >>> 8,
            f[y + 4] = this._h[2] >>> 0,
            f[y + 5] = this._h[2] >>> 8,
            f[y + 6] = this._h[3] >>> 0,
            f[y + 7] = this._h[3] >>> 8,
            f[y + 8] = this._h[4] >>> 0,
            f[y + 9] = this._h[4] >>> 8,
            f[y + 10] = this._h[5] >>> 0,
            f[y + 11] = this._h[5] >>> 8,
            f[y + 12] = this._h[6] >>> 0,
            f[y + 13] = this._h[6] >>> 8,
            f[y + 14] = this._h[7] >>> 0,
            f[y + 15] = this._h[7] >>> 8,
            this._finished = !0,
            this
        }
        ,
        d.prototype.update = function(f) {
            var y = 0, g = f.length, m;
            if (this._leftover) {
                m = 16 - this._leftover,
                m > g && (m = g);
                for (var D = 0; D < m; D++)
                    this._buffer[this._leftover + D] = f[y + D];
                if (g -= m,
                y += m,
                this._leftover += m,
                this._leftover < 16)
                    return this;
                this._blocks(this._buffer, 0, 16),
                this._leftover = 0
            }
            if (g >= 16 && (m = g - g % 16,
            this._blocks(f, y, m),
            y += m,
            g -= m),
            g) {
                for (var D = 0; D < g; D++)
                    this._buffer[this._leftover + D] = f[y + D];
                this._leftover += g
            }
            return this
        }
        ,
        d.prototype.digest = function() {
            if (this._finished)
                throw new Error("Poly1305 was finished");
            var f = new Uint8Array(16);
            return this.finish(f),
            f
        }
        ,
        d.prototype.clean = function() {
            return t.wipe(this._buffer),
            t.wipe(this._r),
            t.wipe(this._h),
            t.wipe(this._pad),
            this._leftover = 0,
            this._fin = 0,
            this._finished = !0,
            this
        }
        ,
        d
    }();
    i.Poly1305 = s;
    function o(d, f) {
        var y = new s(d);
        y.update(f);
        var g = y.digest();
        return y.clean(),
        g
    }
    i.oneTimeAuth = o;
    function c(d, f) {
        return d.length !== i.DIGEST_LENGTH || f.length !== i.DIGEST_LENGTH ? !1 : e.equal(d, f)
    }
    i.equal = c
}
)(zd);
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = ea
      , t = zd
      , s = Cr
      , o = $e
      , c = Fi;
    i.KEY_LENGTH = 32,
    i.NONCE_LENGTH = 12,
    i.TAG_LENGTH = 16;
    var d = new Uint8Array(16)
      , f = function() {
        function y(g) {
            if (this.nonceLength = i.NONCE_LENGTH,
            this.tagLength = i.TAG_LENGTH,
            g.length !== i.KEY_LENGTH)
                throw new Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(g)
        }
        return y.prototype.seal = function(g, m, D, I) {
            if (g.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
            var T = new Uint8Array(16);
            T.set(g, T.length - g.length);
            var P = new Uint8Array(32);
            e.stream(this._key, T, P, 4);
            var z = m.length + this.tagLength, H;
            if (I) {
                if (I.length !== z)
                    throw new Error("ChaCha20Poly1305: incorrect destination length");
                H = I
            } else
                H = new Uint8Array(z);
            return e.streamXOR(this._key, T, m, H, 4),
            this._authenticate(H.subarray(H.length - this.tagLength, H.length), P, H.subarray(0, H.length - this.tagLength), D),
            s.wipe(T),
            H
        }
        ,
        y.prototype.open = function(g, m, D, I) {
            if (g.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
            if (m.length < this.tagLength)
                return null;
            var T = new Uint8Array(16);
            T.set(g, T.length - g.length);
            var P = new Uint8Array(32);
            e.stream(this._key, T, P, 4);
            var z = new Uint8Array(this.tagLength);
            if (this._authenticate(z, P, m.subarray(0, m.length - this.tagLength), D),
            !c.equal(z, m.subarray(m.length - this.tagLength, m.length)))
                return null;
            var H = m.length - this.tagLength, ie;
            if (I) {
                if (I.length !== H)
                    throw new Error("ChaCha20Poly1305: incorrect destination length");
                ie = I
            } else
                ie = new Uint8Array(H);
            return e.streamXOR(this._key, T, m.subarray(0, m.length - this.tagLength), ie, 4),
            s.wipe(T),
            ie
        }
        ,
        y.prototype.clean = function() {
            return s.wipe(this._key),
            this
        }
        ,
        y.prototype._authenticate = function(g, m, D, I) {
            var T = new t.Poly1305(m);
            I && (T.update(I),
            I.length % 16 > 0 && T.update(d.subarray(I.length % 16))),
            T.update(D),
            D.length % 16 > 0 && T.update(d.subarray(D.length % 16));
            var P = new Uint8Array(8);
            I && o.writeUint64LE(I.length, P),
            T.update(P),
            o.writeUint64LE(D.length, P),
            T.update(P);
            for (var z = T.digest(), H = 0; H < z.length; H++)
                g[H] = z[H];
            T.clean(),
            s.wipe(z),
            s.wipe(P)
        }
        ,
        y
    }();
    i.ChaCha20Poly1305 = f
}
)(Cu);
var Hd = {}
  , xs = {}
  , Au = {};
Object.defineProperty(Au, "__esModule", {
    value: !0
});
function t1(i) {
    return typeof i.saveState < "u" && typeof i.restoreState < "u" && typeof i.cleanSavedState < "u"
}
Au.isSerializableHash = t1;
Object.defineProperty(xs, "__esModule", {
    value: !0
});
var ri = Au
  , r1 = Fi
  , i1 = Cr
  , Kd = function() {
    function i(e, t) {
        this._finished = !1,
        this._inner = new e,
        this._outer = new e,
        this.blockSize = this._outer.blockSize,
        this.digestLength = this._outer.digestLength;
        var s = new Uint8Array(this.blockSize);
        t.length > this.blockSize ? this._inner.update(t).finish(s).clean() : s.set(t);
        for (var o = 0; o < s.length; o++)
            s[o] ^= 54;
        this._inner.update(s);
        for (var o = 0; o < s.length; o++)
            s[o] ^= 106;
        this._outer.update(s),
        ri.isSerializableHash(this._inner) && ri.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(),
        this._outerKeyedState = this._outer.saveState()),
        i1.wipe(s)
    }
    return i.prototype.reset = function() {
        if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer))
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        return this._inner.restoreState(this._innerKeyedState),
        this._outer.restoreState(this._outerKeyedState),
        this._finished = !1,
        this
    }
    ,
    i.prototype.clean = function() {
        ri.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState),
        ri.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState),
        this._inner.clean(),
        this._outer.clean()
    }
    ,
    i.prototype.update = function(e) {
        return this._inner.update(e),
        this
    }
    ,
    i.prototype.finish = function(e) {
        return this._finished ? (this._outer.finish(e),
        this) : (this._inner.finish(e),
        this._outer.update(e.subarray(0, this.digestLength)).finish(e),
        this._finished = !0,
        this)
    }
    ,
    i.prototype.digest = function() {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e),
        e
    }
    ,
    i.prototype.saveState = function() {
        if (!ri.isSerializableHash(this._inner))
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState()
    }
    ,
    i.prototype.restoreState = function(e) {
        if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer))
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        return this._inner.restoreState(e),
        this._outer.restoreState(this._outerKeyedState),
        this._finished = !1,
        this
    }
    ,
    i.prototype.cleanSavedState = function(e) {
        if (!ri.isSerializableHash(this._inner))
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(e)
    }
    ,
    i
}();
xs.HMAC = Kd;
function n1(i, e, t) {
    var s = new Kd(i,e);
    s.update(t);
    var o = s.digest();
    return s.clean(),
    o
}
xs.hmac = n1;
xs.equal = r1.equal;
Object.defineProperty(Hd, "__esModule", {
    value: !0
});
var Yl = xs
  , Jl = Cr
  , s1 = function() {
    function i(e, t, s, o) {
        s === void 0 && (s = new Uint8Array(0)),
        this._counter = new Uint8Array(1),
        this._hash = e,
        this._info = o;
        var c = Yl.hmac(this._hash, s, t);
        this._hmac = new Yl.HMAC(e,c),
        this._buffer = new Uint8Array(this._hmac.digestLength),
        this._bufpos = this._buffer.length
    }
    return i.prototype._fillBuffer = function() {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0)
            throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
        e > 1 && this._hmac.update(this._buffer),
        this._info && this._hmac.update(this._info),
        this._hmac.update(this._counter),
        this._hmac.finish(this._buffer),
        this._bufpos = 0
    }
    ,
    i.prototype.expand = function(e) {
        for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
            this._bufpos === this._buffer.length && this._fillBuffer(),
            t[s] = this._buffer[this._bufpos++];
        return t
    }
    ,
    i.prototype.clean = function() {
        this._hmac.clean(),
        Jl.wipe(this._buffer),
        Jl.wipe(this._counter),
        this._bufpos = 0
    }
    ,
    i
}()
  , o1 = Hd.HKDF = s1
  , Fn = {}
  , ta = {}
  , ra = {};
Object.defineProperty(ra, "__esModule", {
    value: !0
});
ra.BrowserRandomSource = void 0;
const Ql = 65536;
class a1 {
    constructor() {
        this.isAvailable = !1,
        this.isInstantiated = !1;
        const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
        e && e.getRandomValues !== void 0 && (this._crypto = e,
        this.isAvailable = !0,
        this.isInstantiated = !0)
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
            throw new Error("Browser random byte generator is not available.");
        const t = new Uint8Array(e);
        for (let s = 0; s < t.length; s += Ql)
            this._crypto.getRandomValues(t.subarray(s, s + Math.min(t.length - s, Ql)));
        return t
    }
}
ra.BrowserRandomSource = a1;
function c1(i) {
    throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ia = {};
Object.defineProperty(ia, "__esModule", {
    value: !0
});
ia.NodeRandomSource = void 0;
const u1 = Cr;
class h1 {
    constructor() {
        if (this.isAvailable = !1,
        this.isInstantiated = !1,
        typeof c1 < "u") {
            const e = x_;
            e && e.randomBytes && (this._crypto = e,
            this.isAvailable = !0,
            this.isInstantiated = !0)
        }
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
            throw new Error("Node.js random byte generator is not available.");
        let t = this._crypto.randomBytes(e);
        if (t.length !== e)
            throw new Error("NodeRandomSource: got fewer bytes than requested");
        const s = new Uint8Array(e);
        for (let o = 0; o < s.length; o++)
            s[o] = t[o];
        return (0,
        u1.wipe)(t),
        s
    }
}
ia.NodeRandomSource = h1;
Object.defineProperty(ta, "__esModule", {
    value: !0
});
ta.SystemRandomSource = void 0;
const l1 = ra
  , f1 = ia;
class d1 {
    constructor() {
        if (this.isAvailable = !1,
        this.name = "",
        this._source = new l1.BrowserRandomSource,
        this._source.isAvailable) {
            this.isAvailable = !0,
            this.name = "Browser";
            return
        }
        if (this._source = new f1.NodeRandomSource,
        this._source.isAvailable) {
            this.isAvailable = !0,
            this.name = "Node";
            return
        }
    }
    randomBytes(e) {
        if (!this.isAvailable)
            throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(e)
    }
}
ta.SystemRandomSource = d1;
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.randomStringForEntropy = i.randomString = i.randomUint32 = i.randomBytes = i.defaultRandomSource = void 0;
    const e = ta
      , t = $e
      , s = Cr;
    i.defaultRandomSource = new e.SystemRandomSource;
    function o(g, m=i.defaultRandomSource) {
        return m.randomBytes(g)
    }
    i.randomBytes = o;
    function c(g=i.defaultRandomSource) {
        const m = o(4, g)
          , D = (0,
        t.readUint32LE)(m);
        return (0,
        s.wipe)(m),
        D
    }
    i.randomUint32 = c;
    const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function f(g, m=d, D=i.defaultRandomSource) {
        if (m.length < 2)
            throw new Error("randomString charset is too short");
        if (m.length > 256)
            throw new Error("randomString charset is too long");
        let I = "";
        const T = m.length
          , P = 256 - 256 % T;
        for (; g > 0; ) {
            const z = o(Math.ceil(g * 256 / P), D);
            for (let H = 0; H < z.length && g > 0; H++) {
                const ie = z[H];
                ie < P && (I += m.charAt(ie % T),
                g--)
            }
            (0,
            s.wipe)(z)
        }
        return I
    }
    i.randomString = f;
    function y(g, m=d, D=i.defaultRandomSource) {
        const I = Math.ceil(g / (Math.log(m.length) / Math.LN2));
        return f(I, m, D)
    }
    i.randomStringForEntropy = y
}
)(Fn);
var na = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = $e
      , t = Cr;
    i.DIGEST_LENGTH = 32,
    i.BLOCK_SIZE = 64;
    var s = function() {
        function f() {
            this.digestLength = i.DIGEST_LENGTH,
            this.blockSize = i.BLOCK_SIZE,
            this._state = new Int32Array(8),
            this._temp = new Int32Array(64),
            this._buffer = new Uint8Array(128),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return f.prototype._initState = function() {
            this._state[0] = 1779033703,
            this._state[1] = 3144134277,
            this._state[2] = 1013904242,
            this._state[3] = 2773480762,
            this._state[4] = 1359893119,
            this._state[5] = 2600822924,
            this._state[6] = 528734635,
            this._state[7] = 1541459225
        }
        ,
        f.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        f.prototype.clean = function() {
            t.wipe(this._buffer),
            t.wipe(this._temp),
            this.reset()
        }
        ,
        f.prototype.update = function(y, g) {
            if (g === void 0 && (g = y.length),
            this._finished)
                throw new Error("SHA256: can't update because hash was finished.");
            var m = 0;
            if (this._bytesHashed += g,
            this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && g > 0; )
                    this._buffer[this._bufferLength++] = y[m++],
                    g--;
                this._bufferLength === this.blockSize && (c(this._temp, this._state, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (g >= this.blockSize && (m = c(this._temp, this._state, y, m, g),
            g %= this.blockSize); g > 0; )
                this._buffer[this._bufferLength++] = y[m++],
                g--;
            return this
        }
        ,
        f.prototype.finish = function(y) {
            if (!this._finished) {
                var g = this._bytesHashed
                  , m = this._bufferLength
                  , D = g / 536870912 | 0
                  , I = g << 3
                  , T = g % 64 < 56 ? 64 : 128;
                this._buffer[m] = 128;
                for (var P = m + 1; P < T - 8; P++)
                    this._buffer[P] = 0;
                e.writeUint32BE(D, this._buffer, T - 8),
                e.writeUint32BE(I, this._buffer, T - 4),
                c(this._temp, this._state, this._buffer, 0, T),
                this._finished = !0
            }
            for (var P = 0; P < this.digestLength / 4; P++)
                e.writeUint32BE(this._state[P], y, P * 4);
            return this
        }
        ,
        f.prototype.digest = function() {
            var y = new Uint8Array(this.digestLength);
            return this.finish(y),
            y
        }
        ,
        f.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        f.prototype.restoreState = function(y) {
            return this._state.set(y.state),
            this._bufferLength = y.bufferLength,
            y.buffer && this._buffer.set(y.buffer),
            this._bytesHashed = y.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        f.prototype.cleanSavedState = function(y) {
            t.wipe(y.state),
            y.buffer && t.wipe(y.buffer),
            y.bufferLength = 0,
            y.bytesHashed = 0
        }
        ,
        f
    }();
    i.SHA256 = s;
    var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    function c(f, y, g, m, D) {
        for (; D >= 64; ) {
            for (var I = y[0], T = y[1], P = y[2], z = y[3], H = y[4], ie = y[5], U = y[6], j = y[7], O = 0; O < 16; O++) {
                var A = m + O * 4;
                f[O] = e.readUint32BE(g, A)
            }
            for (var O = 16; O < 64; O++) {
                var E = f[O - 2]
                  , u = (E >>> 17 | E << 15) ^ (E >>> 19 | E << 13) ^ E >>> 10;
                E = f[O - 15];
                var _ = (E >>> 7 | E << 25) ^ (E >>> 18 | E << 14) ^ E >>> 3;
                f[O] = (u + f[O - 7] | 0) + (_ + f[O - 16] | 0)
            }
            for (var O = 0; O < 64; O++) {
                var u = (((H >>> 6 | H << 26) ^ (H >>> 11 | H << 21) ^ (H >>> 25 | H << 7)) + (H & ie ^ ~H & U) | 0) + (j + (o[O] + f[O] | 0) | 0) | 0
                  , _ = ((I >>> 2 | I << 30) ^ (I >>> 13 | I << 19) ^ (I >>> 22 | I << 10)) + (I & T ^ I & P ^ T & P) | 0;
                j = U,
                U = ie,
                ie = H,
                H = z + u | 0,
                z = P,
                P = T,
                T = I,
                I = u + _ | 0
            }
            y[0] += I,
            y[1] += T,
            y[2] += P,
            y[3] += z,
            y[4] += H,
            y[5] += ie,
            y[6] += U,
            y[7] += j,
            m += 64,
            D -= 64
        }
        return m
    }
    function d(f) {
        var y = new s;
        y.update(f);
        var g = y.digest();
        return y.clean(),
        g
    }
    i.hash = d
}
)(na);
var Tu = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.sharedKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.scalarMultBase = i.scalarMult = i.SHARED_KEY_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = void 0;
    const e = Fn
      , t = Cr;
    i.PUBLIC_KEY_LENGTH = 32,
    i.SECRET_KEY_LENGTH = 32,
    i.SHARED_KEY_LENGTH = 32;
    function s(O) {
        const A = new Float64Array(16);
        if (O)
            for (let E = 0; E < O.length; E++)
                A[E] = O[E];
        return A
    }
    const o = new Uint8Array(32);
    o[0] = 9;
    const c = s([56129, 1]);
    function d(O) {
        let A = 1;
        for (let E = 0; E < 16; E++) {
            let u = O[E] + A + 65535;
            A = Math.floor(u / 65536),
            O[E] = u - A * 65536
        }
        O[0] += A - 1 + 37 * (A - 1)
    }
    function f(O, A, E) {
        const u = ~(E - 1);
        for (let _ = 0; _ < 16; _++) {
            const G = u & (O[_] ^ A[_]);
            O[_] ^= G,
            A[_] ^= G
        }
    }
    function y(O, A) {
        const E = s()
          , u = s();
        for (let _ = 0; _ < 16; _++)
            u[_] = A[_];
        d(u),
        d(u),
        d(u);
        for (let _ = 0; _ < 2; _++) {
            E[0] = u[0] - 65517;
            for (let W = 1; W < 15; W++)
                E[W] = u[W] - 65535 - (E[W - 1] >> 16 & 1),
                E[W - 1] &= 65535;
            E[15] = u[15] - 32767 - (E[14] >> 16 & 1);
            const G = E[15] >> 16 & 1;
            E[14] &= 65535,
            f(u, E, 1 - G)
        }
        for (let _ = 0; _ < 16; _++)
            O[2 * _] = u[_] & 255,
            O[2 * _ + 1] = u[_] >> 8
    }
    function g(O, A) {
        for (let E = 0; E < 16; E++)
            O[E] = A[2 * E] + (A[2 * E + 1] << 8);
        O[15] &= 32767
    }
    function m(O, A, E) {
        for (let u = 0; u < 16; u++)
            O[u] = A[u] + E[u]
    }
    function D(O, A, E) {
        for (let u = 0; u < 16; u++)
            O[u] = A[u] - E[u]
    }
    function I(O, A, E) {
        let u, _, G = 0, W = 0, se = 0, ue = 0, de = 0, b = 0, C = 0, ee = 0, Q = 0, k = 0, V = 0, J = 0, re = 0, _e = 0, oe = 0, be = 0, le = 0, me = 0, B = 0, F = 0, L = 0, l = 0, R = 0, ae = 0, fe = 0, Ie = 0, Be = 0, ke = 0, Me = 0, pt = 0, gt = 0, qe = E[0], xe = E[1], Ne = E[2], Ue = E[3], Fe = E[4], Pe = E[5], Le = E[6], Se = E[7], Ce = E[8], He = E[9], Oe = E[10], Ve = E[11], We = E[12], et = E[13], tt = E[14], Qe = E[15];
        u = A[0],
        G += u * qe,
        W += u * xe,
        se += u * Ne,
        ue += u * Ue,
        de += u * Fe,
        b += u * Pe,
        C += u * Le,
        ee += u * Se,
        Q += u * Ce,
        k += u * He,
        V += u * Oe,
        J += u * Ve,
        re += u * We,
        _e += u * et,
        oe += u * tt,
        be += u * Qe,
        u = A[1],
        W += u * qe,
        se += u * xe,
        ue += u * Ne,
        de += u * Ue,
        b += u * Fe,
        C += u * Pe,
        ee += u * Le,
        Q += u * Se,
        k += u * Ce,
        V += u * He,
        J += u * Oe,
        re += u * Ve,
        _e += u * We,
        oe += u * et,
        be += u * tt,
        le += u * Qe,
        u = A[2],
        se += u * qe,
        ue += u * xe,
        de += u * Ne,
        b += u * Ue,
        C += u * Fe,
        ee += u * Pe,
        Q += u * Le,
        k += u * Se,
        V += u * Ce,
        J += u * He,
        re += u * Oe,
        _e += u * Ve,
        oe += u * We,
        be += u * et,
        le += u * tt,
        me += u * Qe,
        u = A[3],
        ue += u * qe,
        de += u * xe,
        b += u * Ne,
        C += u * Ue,
        ee += u * Fe,
        Q += u * Pe,
        k += u * Le,
        V += u * Se,
        J += u * Ce,
        re += u * He,
        _e += u * Oe,
        oe += u * Ve,
        be += u * We,
        le += u * et,
        me += u * tt,
        B += u * Qe,
        u = A[4],
        de += u * qe,
        b += u * xe,
        C += u * Ne,
        ee += u * Ue,
        Q += u * Fe,
        k += u * Pe,
        V += u * Le,
        J += u * Se,
        re += u * Ce,
        _e += u * He,
        oe += u * Oe,
        be += u * Ve,
        le += u * We,
        me += u * et,
        B += u * tt,
        F += u * Qe,
        u = A[5],
        b += u * qe,
        C += u * xe,
        ee += u * Ne,
        Q += u * Ue,
        k += u * Fe,
        V += u * Pe,
        J += u * Le,
        re += u * Se,
        _e += u * Ce,
        oe += u * He,
        be += u * Oe,
        le += u * Ve,
        me += u * We,
        B += u * et,
        F += u * tt,
        L += u * Qe,
        u = A[6],
        C += u * qe,
        ee += u * xe,
        Q += u * Ne,
        k += u * Ue,
        V += u * Fe,
        J += u * Pe,
        re += u * Le,
        _e += u * Se,
        oe += u * Ce,
        be += u * He,
        le += u * Oe,
        me += u * Ve,
        B += u * We,
        F += u * et,
        L += u * tt,
        l += u * Qe,
        u = A[7],
        ee += u * qe,
        Q += u * xe,
        k += u * Ne,
        V += u * Ue,
        J += u * Fe,
        re += u * Pe,
        _e += u * Le,
        oe += u * Se,
        be += u * Ce,
        le += u * He,
        me += u * Oe,
        B += u * Ve,
        F += u * We,
        L += u * et,
        l += u * tt,
        R += u * Qe,
        u = A[8],
        Q += u * qe,
        k += u * xe,
        V += u * Ne,
        J += u * Ue,
        re += u * Fe,
        _e += u * Pe,
        oe += u * Le,
        be += u * Se,
        le += u * Ce,
        me += u * He,
        B += u * Oe,
        F += u * Ve,
        L += u * We,
        l += u * et,
        R += u * tt,
        ae += u * Qe,
        u = A[9],
        k += u * qe,
        V += u * xe,
        J += u * Ne,
        re += u * Ue,
        _e += u * Fe,
        oe += u * Pe,
        be += u * Le,
        le += u * Se,
        me += u * Ce,
        B += u * He,
        F += u * Oe,
        L += u * Ve,
        l += u * We,
        R += u * et,
        ae += u * tt,
        fe += u * Qe,
        u = A[10],
        V += u * qe,
        J += u * xe,
        re += u * Ne,
        _e += u * Ue,
        oe += u * Fe,
        be += u * Pe,
        le += u * Le,
        me += u * Se,
        B += u * Ce,
        F += u * He,
        L += u * Oe,
        l += u * Ve,
        R += u * We,
        ae += u * et,
        fe += u * tt,
        Ie += u * Qe,
        u = A[11],
        J += u * qe,
        re += u * xe,
        _e += u * Ne,
        oe += u * Ue,
        be += u * Fe,
        le += u * Pe,
        me += u * Le,
        B += u * Se,
        F += u * Ce,
        L += u * He,
        l += u * Oe,
        R += u * Ve,
        ae += u * We,
        fe += u * et,
        Ie += u * tt,
        Be += u * Qe,
        u = A[12],
        re += u * qe,
        _e += u * xe,
        oe += u * Ne,
        be += u * Ue,
        le += u * Fe,
        me += u * Pe,
        B += u * Le,
        F += u * Se,
        L += u * Ce,
        l += u * He,
        R += u * Oe,
        ae += u * Ve,
        fe += u * We,
        Ie += u * et,
        Be += u * tt,
        ke += u * Qe,
        u = A[13],
        _e += u * qe,
        oe += u * xe,
        be += u * Ne,
        le += u * Ue,
        me += u * Fe,
        B += u * Pe,
        F += u * Le,
        L += u * Se,
        l += u * Ce,
        R += u * He,
        ae += u * Oe,
        fe += u * Ve,
        Ie += u * We,
        Be += u * et,
        ke += u * tt,
        Me += u * Qe,
        u = A[14],
        oe += u * qe,
        be += u * xe,
        le += u * Ne,
        me += u * Ue,
        B += u * Fe,
        F += u * Pe,
        L += u * Le,
        l += u * Se,
        R += u * Ce,
        ae += u * He,
        fe += u * Oe,
        Ie += u * Ve,
        Be += u * We,
        ke += u * et,
        Me += u * tt,
        pt += u * Qe,
        u = A[15],
        be += u * qe,
        le += u * xe,
        me += u * Ne,
        B += u * Ue,
        F += u * Fe,
        L += u * Pe,
        l += u * Le,
        R += u * Se,
        ae += u * Ce,
        fe += u * He,
        Ie += u * Oe,
        Be += u * Ve,
        ke += u * We,
        Me += u * et,
        pt += u * tt,
        gt += u * Qe,
        G += 38 * le,
        W += 38 * me,
        se += 38 * B,
        ue += 38 * F,
        de += 38 * L,
        b += 38 * l,
        C += 38 * R,
        ee += 38 * ae,
        Q += 38 * fe,
        k += 38 * Ie,
        V += 38 * Be,
        J += 38 * ke,
        re += 38 * Me,
        _e += 38 * pt,
        oe += 38 * gt,
        _ = 1,
        u = G + _ + 65535,
        _ = Math.floor(u / 65536),
        G = u - _ * 65536,
        u = W + _ + 65535,
        _ = Math.floor(u / 65536),
        W = u - _ * 65536,
        u = se + _ + 65535,
        _ = Math.floor(u / 65536),
        se = u - _ * 65536,
        u = ue + _ + 65535,
        _ = Math.floor(u / 65536),
        ue = u - _ * 65536,
        u = de + _ + 65535,
        _ = Math.floor(u / 65536),
        de = u - _ * 65536,
        u = b + _ + 65535,
        _ = Math.floor(u / 65536),
        b = u - _ * 65536,
        u = C + _ + 65535,
        _ = Math.floor(u / 65536),
        C = u - _ * 65536,
        u = ee + _ + 65535,
        _ = Math.floor(u / 65536),
        ee = u - _ * 65536,
        u = Q + _ + 65535,
        _ = Math.floor(u / 65536),
        Q = u - _ * 65536,
        u = k + _ + 65535,
        _ = Math.floor(u / 65536),
        k = u - _ * 65536,
        u = V + _ + 65535,
        _ = Math.floor(u / 65536),
        V = u - _ * 65536,
        u = J + _ + 65535,
        _ = Math.floor(u / 65536),
        J = u - _ * 65536,
        u = re + _ + 65535,
        _ = Math.floor(u / 65536),
        re = u - _ * 65536,
        u = _e + _ + 65535,
        _ = Math.floor(u / 65536),
        _e = u - _ * 65536,
        u = oe + _ + 65535,
        _ = Math.floor(u / 65536),
        oe = u - _ * 65536,
        u = be + _ + 65535,
        _ = Math.floor(u / 65536),
        be = u - _ * 65536,
        G += _ - 1 + 37 * (_ - 1),
        _ = 1,
        u = G + _ + 65535,
        _ = Math.floor(u / 65536),
        G = u - _ * 65536,
        u = W + _ + 65535,
        _ = Math.floor(u / 65536),
        W = u - _ * 65536,
        u = se + _ + 65535,
        _ = Math.floor(u / 65536),
        se = u - _ * 65536,
        u = ue + _ + 65535,
        _ = Math.floor(u / 65536),
        ue = u - _ * 65536,
        u = de + _ + 65535,
        _ = Math.floor(u / 65536),
        de = u - _ * 65536,
        u = b + _ + 65535,
        _ = Math.floor(u / 65536),
        b = u - _ * 65536,
        u = C + _ + 65535,
        _ = Math.floor(u / 65536),
        C = u - _ * 65536,
        u = ee + _ + 65535,
        _ = Math.floor(u / 65536),
        ee = u - _ * 65536,
        u = Q + _ + 65535,
        _ = Math.floor(u / 65536),
        Q = u - _ * 65536,
        u = k + _ + 65535,
        _ = Math.floor(u / 65536),
        k = u - _ * 65536,
        u = V + _ + 65535,
        _ = Math.floor(u / 65536),
        V = u - _ * 65536,
        u = J + _ + 65535,
        _ = Math.floor(u / 65536),
        J = u - _ * 65536,
        u = re + _ + 65535,
        _ = Math.floor(u / 65536),
        re = u - _ * 65536,
        u = _e + _ + 65535,
        _ = Math.floor(u / 65536),
        _e = u - _ * 65536,
        u = oe + _ + 65535,
        _ = Math.floor(u / 65536),
        oe = u - _ * 65536,
        u = be + _ + 65535,
        _ = Math.floor(u / 65536),
        be = u - _ * 65536,
        G += _ - 1 + 37 * (_ - 1),
        O[0] = G,
        O[1] = W,
        O[2] = se,
        O[3] = ue,
        O[4] = de,
        O[5] = b,
        O[6] = C,
        O[7] = ee,
        O[8] = Q,
        O[9] = k,
        O[10] = V,
        O[11] = J,
        O[12] = re,
        O[13] = _e,
        O[14] = oe,
        O[15] = be
    }
    function T(O, A) {
        I(O, A, A)
    }
    function P(O, A) {
        const E = s();
        for (let u = 0; u < 16; u++)
            E[u] = A[u];
        for (let u = 253; u >= 0; u--)
            T(E, E),
            u !== 2 && u !== 4 && I(E, E, A);
        for (let u = 0; u < 16; u++)
            O[u] = E[u]
    }
    function z(O, A) {
        const E = new Uint8Array(32)
          , u = new Float64Array(80)
          , _ = s()
          , G = s()
          , W = s()
          , se = s()
          , ue = s()
          , de = s();
        for (let Q = 0; Q < 31; Q++)
            E[Q] = O[Q];
        E[31] = O[31] & 127 | 64,
        E[0] &= 248,
        g(u, A);
        for (let Q = 0; Q < 16; Q++)
            G[Q] = u[Q];
        _[0] = se[0] = 1;
        for (let Q = 254; Q >= 0; --Q) {
            const k = E[Q >>> 3] >>> (Q & 7) & 1;
            f(_, G, k),
            f(W, se, k),
            m(ue, _, W),
            D(_, _, W),
            m(W, G, se),
            D(G, G, se),
            T(se, ue),
            T(de, _),
            I(_, W, _),
            I(W, G, ue),
            m(ue, _, W),
            D(_, _, W),
            T(G, _),
            D(W, se, de),
            I(_, W, c),
            m(_, _, se),
            I(W, W, _),
            I(_, se, de),
            I(se, G, u),
            T(G, ue),
            f(_, G, k),
            f(W, se, k)
        }
        for (let Q = 0; Q < 16; Q++)
            u[Q + 16] = _[Q],
            u[Q + 32] = W[Q],
            u[Q + 48] = G[Q],
            u[Q + 64] = se[Q];
        const b = u.subarray(32)
          , C = u.subarray(16);
        P(b, b),
        I(C, C, b);
        const ee = new Uint8Array(32);
        return y(ee, C),
        ee
    }
    i.scalarMult = z;
    function H(O) {
        return z(O, o)
    }
    i.scalarMultBase = H;
    function ie(O) {
        if (O.length !== i.SECRET_KEY_LENGTH)
            throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
        const A = new Uint8Array(O);
        return {
            publicKey: H(A),
            secretKey: A
        }
    }
    i.generateKeyPairFromSeed = ie;
    function U(O) {
        const A = (0,
        e.randomBytes)(32, O)
          , E = ie(A);
        return (0,
        t.wipe)(A),
        E
    }
    i.generateKeyPair = U;
    function j(O, A, E=!1) {
        if (O.length !== i.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect secret key length");
        if (A.length !== i.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect public key length");
        const u = z(O, A);
        if (E) {
            let _ = 0;
            for (let G = 0; G < u.length; G++)
                _ |= u[G];
            if (_ === 0)
                throw new Error("X25519: invalid shared key")
        }
        return u
    }
    i.sharedKey = j
}
)(Tu);
function Ru(i) {
    return globalThis.Buffer != null ? new Uint8Array(i.buffer,i.byteOffset,i.byteLength) : i
}
function kd(i=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Ru(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i)
}
function uu(i, e) {
    e || (e = i.reduce((o,c)=>o + c.length, 0));
    const t = kd(e);
    let s = 0;
    for (const o of i)
        t.set(o, s),
        s += o.length;
    return Ru(t)
}
function p1(i, e) {
    if (i.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
        t[s] = 255;
    for (var o = 0; o < i.length; o++) {
        var c = i.charAt(o)
          , d = c.charCodeAt(0);
        if (t[d] !== 255)
            throw new TypeError(c + " is ambiguous");
        t[d] = o
    }
    var f = i.length
      , y = i.charAt(0)
      , g = Math.log(f) / Math.log(256)
      , m = Math.log(256) / Math.log(f);
    function D(P) {
        if (P instanceof Uint8Array || (ArrayBuffer.isView(P) ? P = new Uint8Array(P.buffer,P.byteOffset,P.byteLength) : Array.isArray(P) && (P = Uint8Array.from(P))),
        !(P instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (P.length === 0)
            return "";
        for (var z = 0, H = 0, ie = 0, U = P.length; ie !== U && P[ie] === 0; )
            ie++,
            z++;
        for (var j = (U - ie) * m + 1 >>> 0, O = new Uint8Array(j); ie !== U; ) {
            for (var A = P[ie], E = 0, u = j - 1; (A !== 0 || E < H) && u !== -1; u--,
            E++)
                A += 256 * O[u] >>> 0,
                O[u] = A % f >>> 0,
                A = A / f >>> 0;
            if (A !== 0)
                throw new Error("Non-zero carry");
            H = E,
            ie++
        }
        for (var _ = j - H; _ !== j && O[_] === 0; )
            _++;
        for (var G = y.repeat(z); _ < j; ++_)
            G += i.charAt(O[_]);
        return G
    }
    function I(P) {
        if (typeof P != "string")
            throw new TypeError("Expected String");
        if (P.length === 0)
            return new Uint8Array;
        var z = 0;
        if (P[z] !== " ") {
            for (var H = 0, ie = 0; P[z] === y; )
                H++,
                z++;
            for (var U = (P.length - z) * g + 1 >>> 0, j = new Uint8Array(U); P[z]; ) {
                var O = t[P.charCodeAt(z)];
                if (O === 255)
                    return;
                for (var A = 0, E = U - 1; (O !== 0 || A < ie) && E !== -1; E--,
                A++)
                    O += f * j[E] >>> 0,
                    j[E] = O % 256 >>> 0,
                    O = O / 256 >>> 0;
                if (O !== 0)
                    throw new Error("Non-zero carry");
                ie = A,
                z++
            }
            if (P[z] !== " ") {
                for (var u = U - ie; u !== U && j[u] === 0; )
                    u++;
                for (var _ = new Uint8Array(H + (U - u)), G = H; u !== U; )
                    _[G++] = j[u++];
                return _
            }
        }
    }
    function T(P) {
        var z = I(P);
        if (z)
            return z;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: D,
        decodeUnsafe: I,
        decode: T
    }
}
var g1 = p1
  , y1 = g1;
const v1 = i=>{
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
        return i;
    if (i instanceof ArrayBuffer)
        return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
        return new Uint8Array(i.buffer,i.byteOffset,i.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , m1 = i=>new TextEncoder().encode(i)
  , w1 = i=>new TextDecoder().decode(i);
class _1 {
    constructor(e, t, s) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s
    }
    encode(e) {
        if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class b1 {
    constructor(e, t, s) {
        if (this.name = e,
        this.prefix = t,
        t.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
        this.baseDecode = s
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(e) {
        return Vd(this, e)
    }
}
class E1 {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Vd(this, e)
    }
    decode(e) {
        const t = e[0]
          , s = this.decoders[t];
        if (s)
            return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Vd = (i,e)=>new E1({
    ...i.decoders || {
        [i.prefix]: i
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class D1 {
    constructor(e, t, s, o) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s,
        this.baseDecode = o,
        this.encoder = new _1(e,t,s),
        this.decoder = new b1(e,t,o)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const sa = ({name: i, prefix: e, encode: t, decode: s})=>new D1(i,e,t,s)
  , Os = ({prefix: i, name: e, alphabet: t})=>{
    const {encode: s, decode: o} = y1(t, e);
    return sa({
        prefix: i,
        name: e,
        encode: s,
        decode: c=>v1(o(c))
    })
}
  , S1 = (i,e,t,s)=>{
    const o = {};
    for (let m = 0; m < e.length; ++m)
        o[e[m]] = m;
    let c = i.length;
    for (; i[c - 1] === "="; )
        --c;
    const d = new Uint8Array(c * t / 8 | 0);
    let f = 0
      , y = 0
      , g = 0;
    for (let m = 0; m < c; ++m) {
        const D = o[i[m]];
        if (D === void 0)
            throw new SyntaxError(`Non-${s} character`);
        y = y << t | D,
        f += t,
        f >= 8 && (f -= 8,
        d[g++] = 255 & y >> f)
    }
    if (f >= t || 255 & y << 8 - f)
        throw new SyntaxError("Unexpected end of data");
    return d
}
  , I1 = (i,e,t)=>{
    const s = e[e.length - 1] === "="
      , o = (1 << t) - 1;
    let c = ""
      , d = 0
      , f = 0;
    for (let y = 0; y < i.length; ++y)
        for (f = f << 8 | i[y],
        d += 8; d > t; )
            d -= t,
            c += e[o & f >> d];
    if (d && (c += e[o & f << t - d]),
    s)
        for (; c.length * t & 7; )
            c += "=";
    return c
}
  , Yt = ({name: i, prefix: e, bitsPerChar: t, alphabet: s})=>sa({
    prefix: e,
    name: i,
    encode(o) {
        return I1(o, s, t)
    },
    decode(o) {
        return S1(o, s, t, i)
    }
})
  , x1 = sa({
    prefix: "\0",
    name: "identity",
    encode: i=>w1(i),
    decode: i=>m1(i)
})
  , O1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    identity: x1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , P1 = Yt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
})
  , C1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    base2: P1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , A1 = Yt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
})
  , T1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    base8: A1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , R1 = Os({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
})
  , N1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    base10: R1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , U1 = Yt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , L1 = Yt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
})
  , $1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    base16: U1,
    base16upper: L1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , M1 = Yt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , j1 = Yt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , q1 = Yt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , F1 = Yt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , z1 = Yt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , B1 = Yt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , H1 = Yt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , K1 = Yt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , k1 = Yt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
})
  , V1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    base32: M1,
    base32hex: z1,
    base32hexpad: H1,
    base32hexpadupper: K1,
    base32hexupper: B1,
    base32pad: q1,
    base32padupper: F1,
    base32upper: j1,
    base32z: k1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , G1 = Os({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , W1 = Os({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
})
  , Y1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    base36: G1,
    base36upper: W1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , J1 = Os({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , Q1 = Os({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
})
  , X1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    base58btc: J1,
    base58flickr: Q1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Z1 = Yt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , eb = Yt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , tb = Yt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , rb = Yt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
})
  , ib = Object.freeze(Object.defineProperty({
    __proto__: null,
    base64: Z1,
    base64pad: eb,
    base64url: tb,
    base64urlpad: rb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Gd = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , nb = Gd.reduce((i,e,t)=>(i[t] = e,
i), [])
  , sb = Gd.reduce((i,e,t)=>(i[e.codePointAt(0)] = t,
i), []);
function ob(i) {
    return i.reduce((e,t)=>(e += nb[t],
    e), "")
}
function ab(i) {
    const e = [];
    for (const t of i) {
        const s = sb[t.codePointAt(0)];
        if (s === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s)
    }
    return new Uint8Array(e)
}
const cb = sa({
    prefix: "🚀",
    name: "base256emoji",
    encode: ob,
    decode: ab
})
  , ub = Object.freeze(Object.defineProperty({
    __proto__: null,
    base256emoji: cb
}, Symbol.toStringTag, {
    value: "Module"
}));
new TextEncoder;
new TextDecoder;
const Xl = {
    ...O1,
    ...C1,
    ...T1,
    ...N1,
    ...$1,
    ...V1,
    ...Y1,
    ...X1,
    ...ib,
    ...ub
};
function Wd(i, e, t, s) {
    return {
        name: i,
        prefix: e,
        encoder: {
            name: i,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    }
}
const Zl = Wd("utf8", "u", i=>"u" + new TextDecoder("utf8").decode(i), i=>new TextEncoder().encode(i.substring(1)))
  , Lc = Wd("ascii", "a", i=>{
    let e = "a";
    for (let t = 0; t < i.length; t++)
        e += String.fromCharCode(i[t]);
    return e
}
, i=>{
    i = i.substring(1);
    const e = kd(i.length);
    for (let t = 0; t < i.length; t++)
        e[t] = i.charCodeAt(t);
    return e
}
)
  , Yd = {
    utf8: Zl,
    "utf-8": Zl,
    hex: Xl.base16,
    latin1: Lc,
    ascii: Lc,
    binary: Lc,
    ...Xl
};
function _r(i, e="utf8") {
    const t = Yd[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Ru(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`)
}
function lr(i, e="utf8") {
    const t = Yd[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString("utf8") : t.encoder.encode(i).substring(1)
}
var ef = function(i, e, t) {
    if (t || arguments.length === 2)
        for (var s = 0, o = e.length, c; s < o; s++)
            (c || !(s in e)) && (c || (c = Array.prototype.slice.call(e, 0, s)),
            c[s] = e[s]);
    return i.concat(c || Array.prototype.slice.call(e))
}
  , hb = function() {
    function i(e, t, s) {
        this.name = e,
        this.version = t,
        this.os = s,
        this.type = "browser"
    }
    return i
}()
  , lb = function() {
    function i(e) {
        this.version = e,
        this.type = "node",
        this.name = "node",
        this.os = process.platform
    }
    return i
}()
  , fb = function() {
    function i(e, t, s, o) {
        this.name = e,
        this.version = t,
        this.os = s,
        this.bot = o,
        this.type = "bot-device"
    }
    return i
}()
  , db = function() {
    function i() {
        this.type = "bot",
        this.bot = !0,
        this.name = "bot",
        this.version = null,
        this.os = null
    }
    return i
}()
  , pb = function() {
    function i() {
        this.type = "react-native",
        this.name = "react-native",
        this.version = null,
        this.os = null
    }
    return i
}()
  , gb = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
  , yb = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
  , tf = 3
  , vb = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", gb]]
  , rf = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
function mb(i) {
    return i ? nf(i) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new pb : typeof navigator < "u" ? nf(navigator.userAgent) : bb()
}
function wb(i) {
    return i !== "" && vb.reduce(function(e, t) {
        var s = t[0]
          , o = t[1];
        if (e)
            return e;
        var c = o.exec(i);
        return !!c && [s, c]
    }, !1)
}
function nf(i) {
    var e = wb(i);
    if (!e)
        return null;
    var t = e[0]
      , s = e[1];
    if (t === "searchbot")
        return new db;
    var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
    o ? o.length < tf && (o = ef(ef([], o, !0), Eb(tf - o.length), !0)) : o = [];
    var c = o.join(".")
      , d = _b(i)
      , f = yb.exec(i);
    return f && f[1] ? new fb(t,c,d,f[1]) : new hb(t,c,d)
}
function _b(i) {
    for (var e = 0, t = rf.length; e < t; e++) {
        var s = rf[e]
          , o = s[0]
          , c = s[1]
          , d = c.exec(i);
        if (d)
            return o
    }
    return null
}
function bb() {
    var i = typeof process < "u" && process.version;
    return i ? new lb(process.version.slice(1)) : null
}
function Eb(i) {
    for (var e = [], t = 0; t < i; t++)
        e.push("0");
    return e
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var hu = function(i, e) {
    return hu = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, s) {
        t.__proto__ = s
    }
    || function(t, s) {
        for (var o in s)
            s.hasOwnProperty(o) && (t[o] = s[o])
    }
    ,
    hu(i, e)
};
function Db(i, e) {
    hu(i, e);
    function t() {
        this.constructor = i
    }
    i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype,
    new t)
}
var lu = function() {
    return lu = Object.assign || function(e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
            t = arguments[s];
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c])
        }
        return e
    }
    ,
    lu.apply(this, arguments)
};
function Sb(i, e) {
    var t = {};
    for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
            e.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[o]) && (t[s[o]] = i[s[o]]);
    return t
}
function Ib(i, e, t, s) {
    var o = arguments.length, c = o < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s, d;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        c = Reflect.decorate(i, e, t, s);
    else
        for (var f = i.length - 1; f >= 0; f--)
            (d = i[f]) && (c = (o < 3 ? d(c) : o > 3 ? d(e, t, c) : d(e, t)) || c);
    return o > 3 && c && Object.defineProperty(e, t, c),
    c
}
function xb(i, e) {
    return function(t, s) {
        e(t, s, i)
    }
}
function Ob(i, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(i, e)
}
function Pb(i, e, t, s) {
    function o(c) {
        return c instanceof t ? c : new t(function(d) {
            d(c)
        }
        )
    }
    return new (t || (t = Promise))(function(c, d) {
        function f(m) {
            try {
                g(s.next(m))
            } catch (D) {
                d(D)
            }
        }
        function y(m) {
            try {
                g(s.throw(m))
            } catch (D) {
                d(D)
            }
        }
        function g(m) {
            m.done ? c(m.value) : o(m.value).then(f, y)
        }
        g((s = s.apply(i, e || [])).next())
    }
    )
}
function Cb(i, e) {
    var t = {
        label: 0,
        sent: function() {
            if (c[0] & 1)
                throw c[1];
            return c[1]
        },
        trys: [],
        ops: []
    }, s, o, c, d;
    return d = {
        next: f(0),
        throw: f(1),
        return: f(2)
    },
    typeof Symbol == "function" && (d[Symbol.iterator] = function() {
        return this
    }
    ),
    d;
    function f(g) {
        return function(m) {
            return y([g, m])
        }
    }
    function y(g) {
        if (s)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (s = 1,
                o && (c = g[0] & 2 ? o.return : g[0] ? o.throw || ((c = o.return) && c.call(o),
                0) : o.next) && !(c = c.call(o, g[1])).done)
                    return c;
                switch (o = 0,
                c && (g = [g[0] & 2, c.value]),
                g[0]) {
                case 0:
                case 1:
                    c = g;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: g[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    o = g[1],
                    g = [0];
                    continue;
                case 7:
                    g = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (c = t.trys,
                    !(c = c.length > 0 && c[c.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (g[0] === 3 && (!c || g[1] > c[0] && g[1] < c[3])) {
                        t.label = g[1];
                        break
                    }
                    if (g[0] === 6 && t.label < c[1]) {
                        t.label = c[1],
                        c = g;
                        break
                    }
                    if (c && t.label < c[2]) {
                        t.label = c[2],
                        t.ops.push(g);
                        break
                    }
                    c[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                g = e.call(i, t)
            } catch (m) {
                g = [6, m],
                o = 0
            } finally {
                s = c = 0
            }
        if (g[0] & 5)
            throw g[1];
        return {
            value: g[0] ? g[1] : void 0,
            done: !0
        }
    }
}
function Ab(i, e, t, s) {
    s === void 0 && (s = t),
    i[s] = e[t]
}
function Tb(i, e) {
    for (var t in i)
        t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t])
}
function fu(i) {
    var e = typeof Symbol == "function" && Symbol.iterator
      , t = e && i[e]
      , s = 0;
    if (t)
        return t.call(i);
    if (i && typeof i.length == "number")
        return {
            next: function() {
                return i && s >= i.length && (i = void 0),
                {
                    value: i && i[s++],
                    done: !i
                }
            }
        };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function Jd(i, e) {
    var t = typeof Symbol == "function" && i[Symbol.iterator];
    if (!t)
        return i;
    var s = t.call(i), o, c = [], d;
    try {
        for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; )
            c.push(o.value)
    } catch (f) {
        d = {
            error: f
        }
    } finally {
        try {
            o && !o.done && (t = s.return) && t.call(s)
        } finally {
            if (d)
                throw d.error
        }
    }
    return c
}
function Rb() {
    for (var i = [], e = 0; e < arguments.length; e++)
        i = i.concat(Jd(arguments[e]));
    return i
}
function Nb() {
    for (var i = 0, e = 0, t = arguments.length; e < t; e++)
        i += arguments[e].length;
    for (var s = Array(i), o = 0, e = 0; e < t; e++)
        for (var c = arguments[e], d = 0, f = c.length; d < f; d++,
        o++)
            s[o] = c[d];
    return s
}
function Es(i) {
    return this instanceof Es ? (this.v = i,
    this) : new Es(i)
}
function Ub(i, e, t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var s = t.apply(i, e || []), o, c = [];
    return o = {},
    d("next"),
    d("throw"),
    d("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function d(I) {
        s[I] && (o[I] = function(T) {
            return new Promise(function(P, z) {
                c.push([I, T, P, z]) > 1 || f(I, T)
            }
            )
        }
        )
    }
    function f(I, T) {
        try {
            y(s[I](T))
        } catch (P) {
            D(c[0][3], P)
        }
    }
    function y(I) {
        I.value instanceof Es ? Promise.resolve(I.value.v).then(g, m) : D(c[0][2], I)
    }
    function g(I) {
        f("next", I)
    }
    function m(I) {
        f("throw", I)
    }
    function D(I, T) {
        I(T),
        c.shift(),
        c.length && f(c[0][0], c[0][1])
    }
}
function Lb(i) {
    var e, t;
    return e = {},
    s("next"),
    s("throw", function(o) {
        throw o
    }),
    s("return"),
    e[Symbol.iterator] = function() {
        return this
    }
    ,
    e;
    function s(o, c) {
        e[o] = i[o] ? function(d) {
            return (t = !t) ? {
                value: Es(i[o](d)),
                done: o === "return"
            } : c ? c(d) : d
        }
        : c
    }
}
function $b(i) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = i[Symbol.asyncIterator], t;
    return e ? e.call(i) : (i = typeof fu == "function" ? fu(i) : i[Symbol.iterator](),
    t = {},
    s("next"),
    s("throw"),
    s("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function s(c) {
        t[c] = i[c] && function(d) {
            return new Promise(function(f, y) {
                d = i[c](d),
                o(f, y, d.done, d.value)
            }
            )
        }
    }
    function o(c, d, f, y) {
        Promise.resolve(y).then(function(g) {
            c({
                value: g,
                done: f
            })
        }, d)
    }
}
function Mb(i, e) {
    return Object.defineProperty ? Object.defineProperty(i, "raw", {
        value: e
    }) : i.raw = e,
    i
}
function jb(i) {
    if (i && i.__esModule)
        return i;
    var e = {};
    if (i != null)
        for (var t in i)
            Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    return e.default = i,
    e
}
function qb(i) {
    return i && i.__esModule ? i : {
        default: i
    }
}
function Fb(i, e) {
    if (!e.has(i))
        throw new TypeError("attempted to get private field on non-instance");
    return e.get(i)
}
function zb(i, e, t) {
    if (!e.has(i))
        throw new TypeError("attempted to set private field on non-instance");
    return e.set(i, t),
    t
}
const Bb = Object.freeze(Object.defineProperty({
    __proto__: null,
    get __assign() {
        return lu
    },
    __asyncDelegator: Lb,
    __asyncGenerator: Ub,
    __asyncValues: $b,
    __await: Es,
    __awaiter: Pb,
    __classPrivateFieldGet: Fb,
    __classPrivateFieldSet: zb,
    __createBinding: Ab,
    __decorate: Ib,
    __exportStar: Tb,
    __extends: Db,
    __generator: Cb,
    __importDefault: qb,
    __importStar: jb,
    __makeTemplateObject: Mb,
    __metadata: Ob,
    __param: xb,
    __read: Jd,
    __rest: Sb,
    __spread: Rb,
    __spreadArrays: Nb,
    __values: fu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , si = xu(Bb);
var $c = {}, ls = {}, sf;
function Hb() {
    if (sf)
        return ls;
    sf = 1,
    Object.defineProperty(ls, "__esModule", {
        value: !0
    }),
    ls.delay = void 0;
    function i(e) {
        return new Promise(t=>{
            setTimeout(()=>{
                t(!0)
            }
            , e)
        }
        )
    }
    return ls.delay = i,
    ls
}
var rn = {}, Mc = {}, nn = {}, of;
function Kb() {
    return of || (of = 1,
    Object.defineProperty(nn, "__esModule", {
        value: !0
    }),
    nn.ONE_THOUSAND = nn.ONE_HUNDRED = void 0,
    nn.ONE_HUNDRED = 100,
    nn.ONE_THOUSAND = 1e3),
    nn
}
var jc = {}, af;
function kb() {
    return af || (af = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.ONE_YEAR = i.FOUR_WEEKS = i.THREE_WEEKS = i.TWO_WEEKS = i.ONE_WEEK = i.THIRTY_DAYS = i.SEVEN_DAYS = i.FIVE_DAYS = i.THREE_DAYS = i.ONE_DAY = i.TWENTY_FOUR_HOURS = i.TWELVE_HOURS = i.SIX_HOURS = i.THREE_HOURS = i.ONE_HOUR = i.SIXTY_MINUTES = i.THIRTY_MINUTES = i.TEN_MINUTES = i.FIVE_MINUTES = i.ONE_MINUTE = i.SIXTY_SECONDS = i.THIRTY_SECONDS = i.TEN_SECONDS = i.FIVE_SECONDS = i.ONE_SECOND = void 0,
        i.ONE_SECOND = 1,
        i.FIVE_SECONDS = 5,
        i.TEN_SECONDS = 10,
        i.THIRTY_SECONDS = 30,
        i.SIXTY_SECONDS = 60,
        i.ONE_MINUTE = i.SIXTY_SECONDS,
        i.FIVE_MINUTES = i.ONE_MINUTE * 5,
        i.TEN_MINUTES = i.ONE_MINUTE * 10,
        i.THIRTY_MINUTES = i.ONE_MINUTE * 30,
        i.SIXTY_MINUTES = i.ONE_MINUTE * 60,
        i.ONE_HOUR = i.SIXTY_MINUTES,
        i.THREE_HOURS = i.ONE_HOUR * 3,
        i.SIX_HOURS = i.ONE_HOUR * 6,
        i.TWELVE_HOURS = i.ONE_HOUR * 12,
        i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24,
        i.ONE_DAY = i.TWENTY_FOUR_HOURS,
        i.THREE_DAYS = i.ONE_DAY * 3,
        i.FIVE_DAYS = i.ONE_DAY * 5,
        i.SEVEN_DAYS = i.ONE_DAY * 7,
        i.THIRTY_DAYS = i.ONE_DAY * 30,
        i.ONE_WEEK = i.SEVEN_DAYS,
        i.TWO_WEEKS = i.ONE_WEEK * 2,
        i.THREE_WEEKS = i.ONE_WEEK * 3,
        i.FOUR_WEEKS = i.ONE_WEEK * 4,
        i.ONE_YEAR = i.ONE_DAY * 365
    }(jc)),
    jc
}
var cf;
function Qd() {
    return cf || (cf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const e = si;
        e.__exportStar(Kb(), i),
        e.__exportStar(kb(), i)
    }(Mc)),
    Mc
}
var uf;
function Vb() {
    if (uf)
        return rn;
    uf = 1,
    Object.defineProperty(rn, "__esModule", {
        value: !0
    }),
    rn.fromMiliseconds = rn.toMiliseconds = void 0;
    const i = Qd();
    function e(s) {
        return s * i.ONE_THOUSAND
    }
    rn.toMiliseconds = e;
    function t(s) {
        return Math.floor(s / i.ONE_THOUSAND)
    }
    return rn.fromMiliseconds = t,
    rn
}
var hf;
function Gb() {
    return hf || (hf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const e = si;
        e.__exportStar(Hb(), i),
        e.__exportStar(Vb(), i)
    }($c)),
    $c
}
var Un = {}, lf;
function Wb() {
    if (lf)
        return Un;
    lf = 1,
    Object.defineProperty(Un, "__esModule", {
        value: !0
    }),
    Un.Watch = void 0;
    class i {
        constructor() {
            this.timestamps = new Map
        }
        start(t) {
            if (this.timestamps.has(t))
                throw new Error(`Watch already started for label: ${t}`);
            this.timestamps.set(t, {
                started: Date.now()
            })
        }
        stop(t) {
            const s = this.get(t);
            if (typeof s.elapsed < "u")
                throw new Error(`Watch already stopped for label: ${t}`);
            const o = Date.now() - s.started;
            this.timestamps.set(t, {
                started: s.started,
                elapsed: o
            })
        }
        get(t) {
            const s = this.timestamps.get(t);
            if (typeof s > "u")
                throw new Error(`No timestamp found for label: ${t}`);
            return s
        }
        elapsed(t) {
            const s = this.get(t);
            return s.elapsed || Date.now() - s.started
        }
    }
    return Un.Watch = i,
    Un.default = i,
    Un
}
var qc = {}, fs = {}, ff;
function Yb() {
    if (ff)
        return fs;
    ff = 1,
    Object.defineProperty(fs, "__esModule", {
        value: !0
    }),
    fs.IWatch = void 0;
    class i {
    }
    return fs.IWatch = i,
    fs
}
var df;
function Jb() {
    return df || (df = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        si.__exportStar(Yb(), i)
    }(qc)),
    qc
}
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = si;
    e.__exportStar(Gb(), i),
    e.__exportStar(Wb(), i),
    e.__exportStar(Jb(), i),
    e.__exportStar(Qd(), i)
}
)(ve);
var lt = {};
Object.defineProperty(lt, "__esModule", {
    value: !0
});
lt.getLocalStorage = lt.getLocalStorageOrThrow = lt.getCrypto = lt.getCryptoOrThrow = Xd = lt.getLocation = lt.getLocationOrThrow = Uu = lt.getNavigator = lt.getNavigatorOrThrow = Nu = lt.getDocument = lt.getDocumentOrThrow = lt.getFromWindowOrThrow = lt.getFromWindow = void 0;
function un(i) {
    let e;
    return typeof window < "u" && typeof window[i] < "u" && (e = window[i]),
    e
}
lt.getFromWindow = un;
function zn(i) {
    const e = un(i);
    if (!e)
        throw new Error(`${i} is not defined in Window`);
    return e
}
lt.getFromWindowOrThrow = zn;
function Qb() {
    return zn("document")
}
lt.getDocumentOrThrow = Qb;
function Xb() {
    return un("document")
}
var Nu = lt.getDocument = Xb;
function Zb() {
    return zn("navigator")
}
lt.getNavigatorOrThrow = Zb;
function eE() {
    return un("navigator")
}
var Uu = lt.getNavigator = eE;
function tE() {
    return zn("location")
}
lt.getLocationOrThrow = tE;
function rE() {
    return un("location")
}
var Xd = lt.getLocation = rE;
function iE() {
    return zn("crypto")
}
lt.getCryptoOrThrow = iE;
function nE() {
    return un("crypto")
}
lt.getCrypto = nE;
function sE() {
    return zn("localStorage")
}
lt.getLocalStorageOrThrow = sE;
function oE() {
    return un("localStorage")
}
lt.getLocalStorage = oE;
var Lu = {};
Object.defineProperty(Lu, "__esModule", {
    value: !0
});
var Zd = Lu.getWindowMetadata = void 0;
const pf = lt;
function aE() {
    let i, e;
    try {
        i = pf.getDocumentOrThrow(),
        e = pf.getLocationOrThrow()
    } catch {
        return null
    }
    function t() {
        const D = i.getElementsByTagName("link")
          , I = [];
        for (let T = 0; T < D.length; T++) {
            const P = D[T]
              , z = P.getAttribute("rel");
            if (z && z.toLowerCase().indexOf("icon") > -1) {
                const H = P.getAttribute("href");
                if (H)
                    if (H.toLowerCase().indexOf("https:") === -1 && H.toLowerCase().indexOf("http:") === -1 && H.indexOf("//") !== 0) {
                        let ie = e.protocol + "//" + e.host;
                        if (H.indexOf("/") === 0)
                            ie += H;
                        else {
                            const U = e.pathname.split("/");
                            U.pop();
                            const j = U.join("/");
                            ie += j + "/" + H
                        }
                        I.push(ie)
                    } else if (H.indexOf("//") === 0) {
                        const ie = e.protocol + H;
                        I.push(ie)
                    } else
                        I.push(H)
            }
        }
        return I
    }
    function s(...D) {
        const I = i.getElementsByTagName("meta");
        for (let T = 0; T < I.length; T++) {
            const P = I[T]
              , z = ["itemprop", "property", "name"].map(H=>P.getAttribute(H)).filter(H=>H ? D.includes(H) : !1);
            if (z.length && z) {
                const H = P.getAttribute("content");
                if (H)
                    return H
            }
        }
        return ""
    }
    function o() {
        let D = s("name", "og:site_name", "og:title", "twitter:title");
        return D || (D = i.title),
        D
    }
    function c() {
        return s("description", "og:description", "twitter:description", "keywords")
    }
    const d = o()
      , f = c()
      , y = e.origin
      , g = t();
    return {
        description: f,
        url: y,
        icons: g,
        name: d
    }
}
Zd = Lu.getWindowMetadata = aE;
var Ds = {}
  , cE = i=>encodeURIComponent(i).replace(/[!'()*]/g, e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)
  , ep = "%[a-f0-9]{2}"
  , gf = new RegExp("(" + ep + ")|([^%]+?)","gi")
  , yf = new RegExp("(" + ep + ")+","gi");
function du(i, e) {
    try {
        return [decodeURIComponent(i.join(""))]
    } catch {}
    if (i.length === 1)
        return i;
    e = e || 1;
    var t = i.slice(0, e)
      , s = i.slice(e);
    return Array.prototype.concat.call([], du(t), du(s))
}
function uE(i) {
    try {
        return decodeURIComponent(i)
    } catch {
        for (var e = i.match(gf) || [], t = 1; t < e.length; t++)
            i = du(e, t).join(""),
            e = i.match(gf) || [];
        return i
    }
}
function hE(i) {
    for (var e = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    }, t = yf.exec(i); t; ) {
        try {
            e[t[0]] = decodeURIComponent(t[0])
        } catch {
            var s = uE(t[0]);
            s !== t[0] && (e[t[0]] = s)
        }
        t = yf.exec(i)
    }
    e["%C2"] = "�";
    for (var o = Object.keys(e), c = 0; c < o.length; c++) {
        var d = o[c];
        i = i.replace(new RegExp(d,"g"), e[d])
    }
    return i
}
var lE = function(i) {
    if (typeof i != "string")
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof i + "`");
    try {
        return i = i.replace(/\+/g, " "),
        decodeURIComponent(i)
    } catch {
        return hE(i)
    }
}
  , fE = (i,e)=>{
    if (!(typeof i == "string" && typeof e == "string"))
        throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "")
        return [i];
    const t = i.indexOf(e);
    return t === -1 ? [i] : [i.slice(0, t), i.slice(t + e.length)]
}
  , dE = function(i, e) {
    for (var t = {}, s = Object.keys(i), o = Array.isArray(e), c = 0; c < s.length; c++) {
        var d = s[c]
          , f = i[d];
        (o ? e.indexOf(d) !== -1 : e(d, f, i)) && (t[d] = f)
    }
    return t
};
(function(i) {
    const e = cE
      , t = lE
      , s = fE
      , o = dE
      , c = U=>U == null
      , d = Symbol("encodeFragmentIdentifier");
    function f(U) {
        switch (U.arrayFormat) {
        case "index":
            return j=>(O,A)=>{
                const E = O.length;
                return A === void 0 || U.skipNull && A === null || U.skipEmptyString && A === "" ? O : A === null ? [...O, [m(j, U), "[", E, "]"].join("")] : [...O, [m(j, U), "[", m(E, U), "]=", m(A, U)].join("")]
            }
            ;
        case "bracket":
            return j=>(O,A)=>A === void 0 || U.skipNull && A === null || U.skipEmptyString && A === "" ? O : A === null ? [...O, [m(j, U), "[]"].join("")] : [...O, [m(j, U), "[]=", m(A, U)].join("")];
        case "colon-list-separator":
            return j=>(O,A)=>A === void 0 || U.skipNull && A === null || U.skipEmptyString && A === "" ? O : A === null ? [...O, [m(j, U), ":list="].join("")] : [...O, [m(j, U), ":list=", m(A, U)].join("")];
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const j = U.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return O=>(A,E)=>E === void 0 || U.skipNull && E === null || U.skipEmptyString && E === "" ? A : (E = E === null ? "" : E,
                A.length === 0 ? [[m(O, U), j, m(E, U)].join("")] : [[A, m(E, U)].join(U.arrayFormatSeparator)])
            }
        default:
            return j=>(O,A)=>A === void 0 || U.skipNull && A === null || U.skipEmptyString && A === "" ? O : A === null ? [...O, m(j, U)] : [...O, [m(j, U), "=", m(A, U)].join("")]
        }
    }
    function y(U) {
        let j;
        switch (U.arrayFormat) {
        case "index":
            return (O,A,E)=>{
                if (j = /\[(\d*)\]$/.exec(O),
                O = O.replace(/\[\d*\]$/, ""),
                !j) {
                    E[O] = A;
                    return
                }
                E[O] === void 0 && (E[O] = {}),
                E[O][j[1]] = A
            }
            ;
        case "bracket":
            return (O,A,E)=>{
                if (j = /(\[\])$/.exec(O),
                O = O.replace(/\[\]$/, ""),
                !j) {
                    E[O] = A;
                    return
                }
                if (E[O] === void 0) {
                    E[O] = [A];
                    return
                }
                E[O] = [].concat(E[O], A)
            }
            ;
        case "colon-list-separator":
            return (O,A,E)=>{
                if (j = /(:list)$/.exec(O),
                O = O.replace(/:list$/, ""),
                !j) {
                    E[O] = A;
                    return
                }
                if (E[O] === void 0) {
                    E[O] = [A];
                    return
                }
                E[O] = [].concat(E[O], A)
            }
            ;
        case "comma":
        case "separator":
            return (O,A,E)=>{
                const u = typeof A == "string" && A.includes(U.arrayFormatSeparator)
                  , _ = typeof A == "string" && !u && D(A, U).includes(U.arrayFormatSeparator);
                A = _ ? D(A, U) : A;
                const G = u || _ ? A.split(U.arrayFormatSeparator).map(W=>D(W, U)) : A === null ? A : D(A, U);
                E[O] = G
            }
            ;
        case "bracket-separator":
            return (O,A,E)=>{
                const u = /(\[\])$/.test(O);
                if (O = O.replace(/\[\]$/, ""),
                !u) {
                    E[O] = A && D(A, U);
                    return
                }
                const _ = A === null ? [] : A.split(U.arrayFormatSeparator).map(G=>D(G, U));
                if (E[O] === void 0) {
                    E[O] = _;
                    return
                }
                E[O] = [].concat(E[O], _)
            }
            ;
        default:
            return (O,A,E)=>{
                if (E[O] === void 0) {
                    E[O] = A;
                    return
                }
                E[O] = [].concat(E[O], A)
            }
        }
    }
    function g(U) {
        if (typeof U != "string" || U.length !== 1)
            throw new TypeError("arrayFormatSeparator must be single character string")
    }
    function m(U, j) {
        return j.encode ? j.strict ? e(U) : encodeURIComponent(U) : U
    }
    function D(U, j) {
        return j.decode ? t(U) : U
    }
    function I(U) {
        return Array.isArray(U) ? U.sort() : typeof U == "object" ? I(Object.keys(U)).sort((j,O)=>Number(j) - Number(O)).map(j=>U[j]) : U
    }
    function T(U) {
        const j = U.indexOf("#");
        return j !== -1 && (U = U.slice(0, j)),
        U
    }
    function P(U) {
        let j = "";
        const O = U.indexOf("#");
        return O !== -1 && (j = U.slice(O)),
        j
    }
    function z(U) {
        U = T(U);
        const j = U.indexOf("?");
        return j === -1 ? "" : U.slice(j + 1)
    }
    function H(U, j) {
        return j.parseNumbers && !Number.isNaN(Number(U)) && typeof U == "string" && U.trim() !== "" ? U = Number(U) : j.parseBooleans && U !== null && (U.toLowerCase() === "true" || U.toLowerCase() === "false") && (U = U.toLowerCase() === "true"),
        U
    }
    function ie(U, j) {
        j = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, j),
        g(j.arrayFormatSeparator);
        const O = y(j)
          , A = Object.create(null);
        if (typeof U != "string" || (U = U.trim().replace(/^[?#&]/, ""),
        !U))
            return A;
        for (const E of U.split("&")) {
            if (E === "")
                continue;
            let[u,_] = s(j.decode ? E.replace(/\+/g, " ") : E, "=");
            _ = _ === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(j.arrayFormat) ? _ : D(_, j),
            O(D(u, j), _, A)
        }
        for (const E of Object.keys(A)) {
            const u = A[E];
            if (typeof u == "object" && u !== null)
                for (const _ of Object.keys(u))
                    u[_] = H(u[_], j);
            else
                A[E] = H(u, j)
        }
        return j.sort === !1 ? A : (j.sort === !0 ? Object.keys(A).sort() : Object.keys(A).sort(j.sort)).reduce((E,u)=>{
            const _ = A[u];
            return _ && typeof _ == "object" && !Array.isArray(_) ? E[u] = I(_) : E[u] = _,
            E
        }
        , Object.create(null))
    }
    i.extract = z,
    i.parse = ie,
    i.stringify = (U,j)=>{
        if (!U)
            return "";
        j = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, j),
        g(j.arrayFormatSeparator);
        const O = _=>j.skipNull && c(U[_]) || j.skipEmptyString && U[_] === ""
          , A = f(j)
          , E = {};
        for (const _ of Object.keys(U))
            O(_) || (E[_] = U[_]);
        const u = Object.keys(E);
        return j.sort !== !1 && u.sort(j.sort),
        u.map(_=>{
            const G = U[_];
            return G === void 0 ? "" : G === null ? m(_, j) : Array.isArray(G) ? G.length === 0 && j.arrayFormat === "bracket-separator" ? m(_, j) + "[]" : G.reduce(A(_), []).join("&") : m(_, j) + "=" + m(G, j)
        }
        ).filter(_=>_.length > 0).join("&")
    }
    ,
    i.parseUrl = (U,j)=>{
        j = Object.assign({
            decode: !0
        }, j);
        const [O,A] = s(U, "#");
        return Object.assign({
            url: O.split("?")[0] || "",
            query: ie(z(U), j)
        }, j && j.parseFragmentIdentifier && A ? {
            fragmentIdentifier: D(A, j)
        } : {})
    }
    ,
    i.stringifyUrl = (U,j)=>{
        j = Object.assign({
            encode: !0,
            strict: !0,
            [d]: !0
        }, j);
        const O = T(U.url).split("?")[0] || ""
          , A = i.extract(U.url)
          , E = i.parse(A, {
            sort: !1
        })
          , u = Object.assign(E, U.query);
        let _ = i.stringify(u, j);
        _ && (_ = `?${_}`);
        let G = P(U.url);
        return U.fragmentIdentifier && (G = `#${j[d] ? m(U.fragmentIdentifier, j) : U.fragmentIdentifier}`),
        `${O}${_}${G}`
    }
    ,
    i.pick = (U,j,O)=>{
        O = Object.assign({
            parseFragmentIdentifier: !0,
            [d]: !1
        }, O);
        const {url: A, query: E, fragmentIdentifier: u} = i.parseUrl(U, O);
        return i.stringifyUrl({
            url: A,
            query: o(E, j),
            fragmentIdentifier: u
        }, O)
    }
    ,
    i.exclude = (U,j,O)=>{
        const A = Array.isArray(j) ? E=>!j.includes(E) : (E,u)=>!j(E, u);
        return i.pick(U, A, O)
    }
}
)(Ds);
const pE = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe"
    }
}
  , gE = ":";
function yE(i) {
    const [e,t] = i.split(gE);
    return {
        namespace: e,
        reference: t
    }
}
function vE(i, e=[]) {
    const t = [];
    return Object.keys(i).forEach(s=>{
        if (e.length && !e.includes(s))
            return;
        const o = i[s];
        t.push(...o.accounts)
    }
    ),
    t
}
function tp(i, e) {
    return i.includes(":") ? [i] : e.chains || []
}
const rp = "base10"
  , hr = "base16"
  , pu = "base64pad"
  , $u = "utf8"
  , ip = 0
  , hn = 1
  , mE = 0
  , vf = 1
  , gu = 12
  , Mu = 32;
function wE() {
    const i = Tu.generateKeyPair();
    return {
        privateKey: lr(i.secretKey, hr),
        publicKey: lr(i.publicKey, hr)
    }
}
function yu() {
    const i = Fn.randomBytes(Mu);
    return lr(i, hr)
}
function _E(i, e) {
    const t = Tu.sharedKey(_r(i, hr), _r(e, hr), !0)
      , s = new o1(na.SHA256,t).expand(Mu);
    return lr(s, hr)
}
function bE(i) {
    const e = na.hash(_r(i, hr));
    return lr(e, hr)
}
function jn(i) {
    const e = na.hash(_r(i, $u));
    return lr(e, hr)
}
function EE(i) {
    return _r(`${i}`, rp)
}
function Ps(i) {
    return Number(lr(i, rp))
}
function DE(i) {
    const e = EE(typeof i.type < "u" ? i.type : ip);
    if (Ps(e) === hn && typeof i.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof i.senderPublicKey < "u" ? _r(i.senderPublicKey, hr) : void 0
      , s = typeof i.iv < "u" ? _r(i.iv, hr) : Fn.randomBytes(gu)
      , o = new Cu.ChaCha20Poly1305(_r(i.symKey, hr)).seal(s, _r(i.message, $u));
    return IE({
        type: e,
        sealed: o,
        iv: s,
        senderPublicKey: t
    })
}
function SE(i) {
    const e = new Cu.ChaCha20Poly1305(_r(i.symKey, hr))
      , {sealed: t, iv: s} = Yo(i.encoded)
      , o = e.open(s, t);
    if (o === null)
        throw new Error("Failed to decrypt");
    return lr(o, $u)
}
function IE(i) {
    if (Ps(i.type) === hn) {
        if (typeof i.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
        return lr(uu([i.type, i.senderPublicKey, i.iv, i.sealed]), pu)
    }
    return lr(uu([i.type, i.iv, i.sealed]), pu)
}
function Yo(i) {
    const e = _r(i, pu)
      , t = e.slice(mE, vf)
      , s = vf;
    if (Ps(t) === hn) {
        const f = s + Mu
          , y = f + gu
          , g = e.slice(s, f)
          , m = e.slice(f, y)
          , D = e.slice(y);
        return {
            type: t,
            sealed: D,
            iv: m,
            senderPublicKey: g
        }
    }
    const o = s + gu
      , c = e.slice(s, o)
      , d = e.slice(o);
    return {
        type: t,
        sealed: d,
        iv: c
    }
}
function xE(i, e) {
    const t = Yo(i);
    return np({
        type: Ps(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? lr(t.senderPublicKey, hr) : void 0,
        receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    })
}
function np(i) {
    const e = (i == null ? void 0 : i.type) || ip;
    if (e === hn) {
        if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
            throw new Error("missing sender public key");
        if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
            throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: i == null ? void 0 : i.senderPublicKey,
        receiverPublicKey: i == null ? void 0 : i.receiverPublicKey
    }
}
function mf(i) {
    return i.type === hn && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string"
}
var OE = Object.defineProperty
  , wf = Object.getOwnPropertySymbols
  , PE = Object.prototype.hasOwnProperty
  , CE = Object.prototype.propertyIsEnumerable
  , _f = (i,e,t)=>e in i ? OE(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , bf = (i,e)=>{
    for (var t in e || (e = {}))
        PE.call(e, t) && _f(i, t, e[t]);
    if (wf)
        for (var t of wf(e))
            CE.call(e, t) && _f(i, t, e[t]);
    return i
}
;
const AE = "ReactNative"
  , Pr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}
  , TE = "js";
function ju() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}
function Bn() {
    return !Nu() && !!Uu() && navigator.product === AE
}
function Hn() {
    return !ju() && !!Uu() && !!Nu()
}
function Cs() {
    return Bn() ? Pr.reactNative : ju() ? Pr.node : Hn() ? Pr.browser : Pr.unknown
}
function RE() {
    var i;
    try {
        return Bn() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (i = global.Application) == null ? void 0 : i.applicationId : void 0
    } catch {
        return
    }
}
function NE(i, e) {
    let t = Ds.parse(i);
    return t = bf(bf({}, t), e),
    i = Ds.stringify(t),
    i
}
function UE() {
    return Zd() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}
function LE() {
    if (Cs() === Pr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        const {OS: t, Version: s} = global.Platform;
        return [t, s].join("-")
    }
    const i = mb();
    if (i === null)
        return "unknown";
    const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
    return i.type === "browser" ? [e, i.name, i.version].join("-") : [e, i.version].join("-")
}
function $E() {
    var i;
    const e = Cs();
    return e === Pr.browser ? [e, ((i = Xd()) == null ? void 0 : i.host) || "unknown"].join(":") : e
}
function ME(i, e, t) {
    const s = LE()
      , o = $E();
    return [[i, e].join("-"), [TE, t].join("-"), s, o].join("/")
}
function jE({protocol: i, version: e, relayUrl: t, sdkVersion: s, auth: o, projectId: c, useOnCloseEvent: d, bundleId: f}) {
    const y = t.split("?")
      , g = ME(i, e, s)
      , m = {
        auth: o,
        ua: g,
        projectId: c,
        useOnCloseEvent: d || void 0,
        origin: f || void 0
    }
      , D = NE(y[1] || "", m);
    return y[0] + "?" + D
}
function an(i, e) {
    return i.filter(t=>e.includes(t)).length === i.length
}
function sp(i) {
    return Object.fromEntries(i.entries())
}
function op(i) {
    return new Map(Object.entries(i))
}
function $n(i=ve.FIVE_MINUTES, e) {
    const t = ve.toMiliseconds(i || ve.FIVE_MINUTES);
    let s, o, c;
    return {
        resolve: d=>{
            c && s && (clearTimeout(c),
            s(d))
        }
        ,
        reject: d=>{
            c && o && (clearTimeout(c),
            o(d))
        }
        ,
        done: ()=>new Promise((d,f)=>{
            c = setTimeout(()=>{
                f(new Error(e))
            }
            , t),
            s = d,
            o = f
        }
        )
    }
}
function Ss(i, e, t) {
    return new Promise(async(s,o)=>{
        const c = setTimeout(()=>o(new Error(t)), e);
        try {
            const d = await i;
            s(d)
        } catch (d) {
            o(d)
        }
        clearTimeout(c)
    }
    )
}
function ap(i, e) {
    if (typeof e == "string" && e.startsWith(`${i}:`))
        return e;
    if (i.toLowerCase() === "topic") {
        if (typeof e != "string")
            throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    } else if (i.toLowerCase() === "id") {
        if (typeof e != "number")
            throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${i}`)
}
function qE(i) {
    return ap("topic", i)
}
function FE(i) {
    return ap("id", i)
}
function cp(i) {
    const [e,t] = i.split(":")
      , s = {
        id: void 0,
        topic: void 0
    };
    if (e === "topic" && typeof t == "string")
        s.topic = t;
    else if (e === "id" && Number.isInteger(Number(t)))
        s.id = Number(t);
    else
        throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
    return s
}
function Or(i, e) {
    return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(i))
}
function Mi(i) {
    return Date.now() >= ve.toMiliseconds(i)
}
function Ut(i, e) {
    return `${i}${e ? `:${e}` : ""}`
}
function Fc(i=[], e=[]) {
    return [...new Set([...i, ...e])]
}
async function zE({id: i, topic: e, wcDeepLink: t}) {
    try {
        if (!t)
            return;
        const s = typeof t == "string" ? JSON.parse(t) : t;
        let o = s == null ? void 0 : s.href;
        if (typeof o != "string")
            return;
        o.endsWith("/") && (o = o.slice(0, -1));
        const c = `${o}/wc?requestId=${i}&sessionTopic=${e}`
          , d = Cs();
        d === Pr.browser ? c.startsWith("https://") ? window.open(c, "_blank", "noreferrer noopener") : window.open(c, "_self", "noreferrer noopener") : d === Pr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(c)
    } catch (s) {
        console.error(s)
    }
}
async function BE(i, e) {
    try {
        return await i.getItem(e) || (Hn() ? localStorage.getItem(e) : void 0)
    } catch (t) {
        console.error(t)
    }
}
const HE = "irn";
function vu(i) {
    return (i == null ? void 0 : i.relay) || {
        protocol: HE
    }
}
function Ko(i) {
    const e = pE[i];
    if (typeof e > "u")
        throw new Error(`Relay Protocol not supported: ${i}`);
    return e
}
var KE = Object.defineProperty
  , kE = Object.defineProperties
  , VE = Object.getOwnPropertyDescriptors
  , Ef = Object.getOwnPropertySymbols
  , GE = Object.prototype.hasOwnProperty
  , WE = Object.prototype.propertyIsEnumerable
  , Df = (i,e,t)=>e in i ? KE(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , YE = (i,e)=>{
    for (var t in e || (e = {}))
        GE.call(e, t) && Df(i, t, e[t]);
    if (Ef)
        for (var t of Ef(e))
            WE.call(e, t) && Df(i, t, e[t]);
    return i
}
  , JE = (i,e)=>kE(i, VE(e));
function QE(i, e="-") {
    const t = {}
      , s = "relay" + e;
    return Object.keys(i).forEach(o=>{
        if (o.startsWith(s)) {
            const c = o.replace(s, "")
              , d = i[o];
            t[c] = d
        }
    }
    ),
    t
}
function Sf(i) {
    i = i.includes("wc://") ? i.replace("wc://", "") : i,
    i = i.includes("wc:") ? i.replace("wc:", "") : i;
    const e = i.indexOf(":")
      , t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0
      , s = i.substring(0, e)
      , o = i.substring(e + 1, t).split("@")
      , c = typeof t < "u" ? i.substring(t) : ""
      , d = Ds.parse(c);
    return {
        protocol: s,
        topic: XE(o[0]),
        version: parseInt(o[1], 10),
        symKey: d.symKey,
        relay: QE(d),
        expiryTimestamp: d.expiryTimestamp ? parseInt(d.expiryTimestamp, 10) : void 0
    }
}
function XE(i) {
    return i.startsWith("//") ? i.substring(2) : i
}
function ZE(i, e="-") {
    const t = "relay"
      , s = {};
    return Object.keys(i).forEach(o=>{
        const c = t + e + o;
        i[o] && (s[c] = i[o])
    }
    ),
    s
}
function eD(i) {
    return `${i.protocol}:${i.topic}@${i.version}?` + Ds.stringify(JE(YE({
        symKey: i.symKey
    }, ZE(i.relay)), {
        expiryTimestamp: i.expiryTimestamp
    }))
}
function Kn(i) {
    const e = [];
    return i.forEach(t=>{
        const [s,o] = t.split(":");
        e.push(`${s}:${o}`)
    }
    ),
    e
}
function tD(i) {
    const e = [];
    return Object.values(i).forEach(t=>{
        e.push(...Kn(t.accounts))
    }
    ),
    e
}
function rD(i, e) {
    const t = [];
    return Object.values(i).forEach(s=>{
        Kn(s.accounts).includes(e) && t.push(...s.methods)
    }
    ),
    t
}
function iD(i, e) {
    const t = [];
    return Object.values(i).forEach(s=>{
        Kn(s.accounts).includes(e) && t.push(...s.events)
    }
    ),
    t
}
function qu(i) {
    return i.includes(":")
}
function ms(i) {
    return qu(i) ? i.split(":")[0] : i
}
const nD = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}
  , sD = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function ce(i, e) {
    const {message: t, code: s} = sD[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}
function wt(i, e) {
    const {message: t, code: s} = nD[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}
function ni(i, e) {
    return Array.isArray(i) ? typeof e < "u" && i.length ? i.every(e) : !0 : !1
}
function Is(i) {
    return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length
}
function ur(i) {
    return typeof i > "u"
}
function Gt(i, e) {
    return e && ur(i) ? !0 : typeof i == "string" && !!i.trim().length
}
function Fu(i, e) {
    return e && ur(i) ? !0 : typeof i == "number" && !isNaN(i)
}
function oD(i, e) {
    const {requiredNamespaces: t} = e
      , s = Object.keys(i.namespaces)
      , o = Object.keys(t);
    let c = !0;
    return an(o, s) ? (s.forEach(d=>{
        const {accounts: f, methods: y, events: g} = i.namespaces[d]
          , m = Kn(f)
          , D = t[d];
        (!an(tp(d, D), m) || !an(D.methods, y) || !an(D.events, g)) && (c = !1)
    }
    ),
    c) : !1
}
function Jo(i) {
    return Gt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1
}
function aD(i) {
    if (Gt(i, !1) && i.includes(":")) {
        const e = i.split(":");
        if (e.length === 3) {
            const t = e[0] + ":" + e[1];
            return !!e[2] && Jo(t)
        }
    }
    return !1
}
function cD(i) {
    if (Gt(i, !1))
        try {
            return typeof new URL(i) < "u"
        } catch {
            return !1
        }
    return !1
}
function uD(i) {
    var e;
    return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey
}
function hD(i) {
    return i == null ? void 0 : i.topic
}
function lD(i, e) {
    let t = null;
    return Gt(i == null ? void 0 : i.publicKey, !1) || (t = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)),
    t
}
function If(i) {
    let e = !0;
    return ni(i) ? i.length && (e = i.every(t=>Gt(t, !1))) : e = !1,
    e
}
function fD(i, e, t) {
    let s = null;
    return ni(e) && e.length ? e.forEach(o=>{
        s || Jo(o) || (s = wt("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`))
    }
    ) : Jo(i) || (s = wt("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
    s
}
function dD(i, e, t) {
    let s = null;
    return Object.entries(i).forEach(([o,c])=>{
        if (s)
            return;
        const d = fD(o, tp(o, c), `${e} ${t}`);
        d && (s = d)
    }
    ),
    s
}
function pD(i, e) {
    let t = null;
    return ni(i) ? i.forEach(s=>{
        t || aD(s) || (t = wt("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`))
    }
    ) : t = wt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
    t
}
function gD(i, e) {
    let t = null;
    return Object.values(i).forEach(s=>{
        if (t)
            return;
        const o = pD(s == null ? void 0 : s.accounts, `${e} namespace`);
        o && (t = o)
    }
    ),
    t
}
function yD(i, e) {
    let t = null;
    return If(i == null ? void 0 : i.methods) ? If(i == null ? void 0 : i.events) || (t = wt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = wt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`),
    t
}
function up(i, e) {
    let t = null;
    return Object.values(i).forEach(s=>{
        if (t)
            return;
        const o = yD(s, `${e}, namespace`);
        o && (t = o)
    }
    ),
    t
}
function vD(i, e, t) {
    let s = null;
    if (i && Is(i)) {
        const o = up(i, e);
        o && (s = o);
        const c = dD(i, e, t);
        c && (s = c)
    } else
        s = ce("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
    return s
}
function zc(i, e) {
    let t = null;
    if (i && Is(i)) {
        const s = up(i, e);
        s && (t = s);
        const o = gD(i, e);
        o && (t = o)
    } else
        t = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return t
}
function hp(i) {
    return Gt(i.protocol, !0)
}
function mD(i, e) {
    let t = !1;
    return e && !i ? t = !0 : i && ni(i) && i.length && i.forEach(s=>{
        t = hp(s)
    }
    ),
    t
}
function wD(i) {
    return typeof i == "number"
}
function wr(i) {
    return typeof i < "u" && typeof i !== null
}
function _D(i) {
    return !(!i || typeof i != "object" || !i.code || !Fu(i.code, !1) || !i.message || !Gt(i.message, !1))
}
function bD(i) {
    return !(ur(i) || !Gt(i.method, !1))
}
function ED(i) {
    return !(ur(i) || ur(i.result) && ur(i.error) || !Fu(i.id, !1) || !Gt(i.jsonrpc, !1))
}
function DD(i) {
    return !(ur(i) || !Gt(i.name, !1))
}
function xf(i, e) {
    return !(!Jo(e) || !tD(i).includes(e))
}
function SD(i, e, t) {
    return Gt(t, !1) ? rD(i, e).includes(t) : !1
}
function ID(i, e, t) {
    return Gt(t, !1) ? iD(i, e).includes(t) : !1
}
function Of(i, e, t) {
    let s = null;
    const o = xD(i)
      , c = OD(e)
      , d = Object.keys(o)
      , f = Object.keys(c)
      , y = Pf(Object.keys(i))
      , g = Pf(Object.keys(e))
      , m = y.filter(D=>!g.includes(D));
    return m.length && (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${m.toString()}
      Received: ${Object.keys(e).toString()}`)),
    an(d, f) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${d.toString()}
      Approved: ${f.toString()}`)),
    Object.keys(e).forEach(D=>{
        if (!D.includes(":") || s)
            return;
        const I = Kn(e[D].accounts);
        I.includes(D) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${D}
        Required: ${D}
        Approved: ${I.toString()}`))
    }
    ),
    d.forEach(D=>{
        s || (an(o[D].methods, c[D].methods) ? an(o[D].events, c[D].events) || (s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${D}`)) : s = ce("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${D}`))
    }
    ),
    s
}
function xD(i) {
    const e = {};
    return Object.keys(i).forEach(t=>{
        var s;
        t.includes(":") ? e[t] = i[t] : (s = i[t].chains) == null || s.forEach(o=>{
            e[o] = {
                methods: i[t].methods,
                events: i[t].events
            }
        }
        )
    }
    ),
    e
}
function Pf(i) {
    return [...new Set(i.map(e=>e.includes(":") ? e.split(":")[0] : e))]
}
function OD(i) {
    const e = {};
    return Object.keys(i).forEach(t=>{
        if (t.includes(":"))
            e[t] = i[t];
        else {
            const s = Kn(i[t].accounts);
            s == null || s.forEach(o=>{
                e[o] = {
                    accounts: i[t].accounts.filter(c=>c.includes(`${o}:`)),
                    methods: i[t].methods,
                    events: i[t].events
                }
            }
            )
        }
    }
    ),
    e
}
function PD(i, e) {
    return Fu(i, !1) && i <= e.max && i >= e.min
}
function Cf() {
    const i = Cs();
    return new Promise(e=>{
        switch (i) {
        case Pr.browser:
            e(CD());
            break;
        case Pr.reactNative:
            e(AD());
            break;
        case Pr.node:
            e(TD());
            break;
        default:
            e(!0)
        }
    }
    )
}
function CD() {
    return Hn() && (navigator == null ? void 0 : navigator.onLine)
}
async function AD() {
    if (Bn() && typeof global < "u" && global != null && global.NetInfo) {
        const i = await (global == null ? void 0 : global.NetInfo.fetch());
        return i == null ? void 0 : i.isConnected
    }
    return !0
}
function TD() {
    return !0
}
function RD(i) {
    switch (Cs()) {
    case Pr.browser:
        ND(i);
        break;
    case Pr.reactNative:
        UD(i);
        break
    }
}
function ND(i) {
    !Bn() && Hn() && (window.addEventListener("online", ()=>i(!0)),
    window.addEventListener("offline", ()=>i(!1)))
}
function UD(i) {
    Bn() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener(e=>i(e == null ? void 0 : e.isConnected)))
}
const Bc = {};
let jo = class {
    static get(e) {
        return Bc[e]
    }
    static set(e, t) {
        Bc[e] = t
    }
    static delete(e) {
        delete Bc[e]
    }
}
;
const LD = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , $D = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , MD = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jD(i, e) {
    if (i === "__proto__" || i === "constructor" && e && typeof e == "object" && "prototype"in e) {
        qD(i);
        return
    }
    return e
}
function qD(i) {
    console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`)
}
function qo(i, e={}) {
    if (typeof i != "string")
        return i;
    const t = i.trim();
    if (i[0] === '"' && i.at(-1) === '"' && !i.includes("\\"))
        return t.slice(1, -1);
    if (t.length <= 9) {
        const s = t.toLowerCase();
        if (s === "true")
            return !0;
        if (s === "false")
            return !1;
        if (s === "undefined")
            return;
        if (s === "null")
            return null;
        if (s === "nan")
            return Number.NaN;
        if (s === "infinity")
            return Number.POSITIVE_INFINITY;
        if (s === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!MD.test(i)) {
        if (e.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return i
    }
    try {
        if (LD.test(i) || $D.test(i)) {
            if (e.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(i, jD)
        }
        return JSON.parse(i)
    } catch (s) {
        if (e.strict)
            throw s;
        return i
    }
}
function FD(i) {
    return !i || typeof i.then != "function" ? Promise.resolve(i) : i
}
function Vt(i, ...e) {
    try {
        return FD(i(...e))
    } catch (t) {
        return Promise.reject(t)
    }
}
function zD(i) {
    const e = typeof i;
    return i === null || e !== "object" && e !== "function"
}
function BD(i) {
    const e = Object.getPrototypeOf(i);
    return !e || e.isPrototypeOf(Object)
}
function ko(i) {
    if (zD(i))
        return String(i);
    if (BD(i) || Array.isArray(i))
        return JSON.stringify(i);
    if (typeof i.toJSON == "function")
        return ko(i.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}
function lp() {
    if (typeof Buffer === void 0)
        throw new TypeError("[unstorage] Buffer is not supported!")
}
const mu = "base64:";
function HD(i) {
    if (typeof i == "string")
        return i;
    lp();
    const e = Buffer.from(i).toString("base64");
    return mu + e
}
function KD(i) {
    return typeof i != "string" || !i.startsWith(mu) ? i : (lp(),
    Buffer.from(i.slice(mu.length), "base64"))
}
function mr(i) {
    return i ? i.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}
function kD(...i) {
    return mr(i.join(":"))
}
function Fo(i) {
    return i = mr(i),
    i ? i + ":" : ""
}
const VD = "memory"
  , GD = ()=>{
    const i = new Map;
    return {
        name: VD,
        options: {},
        hasItem(e) {
            return i.has(e)
        },
        getItem(e) {
            return i.get(e) ?? null
        },
        getItemRaw(e) {
            return i.get(e) ?? null
        },
        setItem(e, t) {
            i.set(e, t)
        },
        setItemRaw(e, t) {
            i.set(e, t)
        },
        removeItem(e) {
            i.delete(e)
        },
        getKeys() {
            return Array.from(i.keys())
        },
        clear() {
            i.clear()
        },
        dispose() {
            i.clear()
        }
    }
}
;
function WD(i={}) {
    const e = {
        mounts: {
            "": i.driver || GD()
        },
        mountpoints: [""],
        watching: !1,
        watchListeners: [],
        unwatch: {}
    }
      , t = g=>{
        for (const m of e.mountpoints)
            if (g.startsWith(m))
                return {
                    base: m,
                    relativeKey: g.slice(m.length),
                    driver: e.mounts[m]
                };
        return {
            base: "",
            relativeKey: g,
            driver: e.mounts[""]
        }
    }
      , s = (g,m)=>e.mountpoints.filter(D=>D.startsWith(g) || m && g.startsWith(D)).map(D=>({
        relativeBase: g.length > D.length ? g.slice(D.length) : void 0,
        mountpoint: D,
        driver: e.mounts[D]
    }))
      , o = (g,m)=>{
        if (e.watching) {
            m = mr(m);
            for (const D of e.watchListeners)
                D(g, m)
        }
    }
      , c = async()=>{
        if (!e.watching) {
            e.watching = !0;
            for (const g in e.mounts)
                e.unwatch[g] = await Af(e.mounts[g], o, g)
        }
    }
      , d = async()=>{
        if (e.watching) {
            for (const g in e.unwatch)
                await e.unwatch[g]();
            e.unwatch = {},
            e.watching = !1
        }
    }
      , f = (g,m,D)=>{
        const I = new Map
          , T = P=>{
            let z = I.get(P.base);
            return z || (z = {
                driver: P.driver,
                base: P.base,
                items: []
            },
            I.set(P.base, z)),
            z
        }
        ;
        for (const P of g) {
            const z = typeof P == "string"
              , H = mr(z ? P : P.key)
              , ie = z ? void 0 : P.value
              , U = z || !P.options ? m : {
                ...m,
                ...P.options
            }
              , j = t(H);
            T(j).items.push({
                key: H,
                value: ie,
                relativeKey: j.relativeKey,
                options: U
            })
        }
        return Promise.all([...I.values()].map(P=>D(P))).then(P=>P.flat())
    }
      , y = {
        hasItem(g, m={}) {
            g = mr(g);
            const {relativeKey: D, driver: I} = t(g);
            return Vt(I.hasItem, D, m)
        },
        getItem(g, m={}) {
            g = mr(g);
            const {relativeKey: D, driver: I} = t(g);
            return Vt(I.getItem, D, m).then(T=>qo(T))
        },
        getItems(g, m) {
            return f(g, m, D=>D.driver.getItems ? Vt(D.driver.getItems, D.items.map(I=>({
                key: I.relativeKey,
                options: I.options
            })), m).then(I=>I.map(T=>({
                key: kD(D.base, T.key),
                value: qo(T.value)
            }))) : Promise.all(D.items.map(I=>Vt(D.driver.getItem, I.relativeKey, I.options).then(T=>({
                key: I.key,
                value: qo(T)
            })))))
        },
        getItemRaw(g, m={}) {
            g = mr(g);
            const {relativeKey: D, driver: I} = t(g);
            return I.getItemRaw ? Vt(I.getItemRaw, D, m) : Vt(I.getItem, D, m).then(T=>KD(T))
        },
        async setItem(g, m, D={}) {
            if (m === void 0)
                return y.removeItem(g);
            g = mr(g);
            const {relativeKey: I, driver: T} = t(g);
            T.setItem && (await Vt(T.setItem, I, ko(m), D),
            T.watch || o("update", g))
        },
        async setItems(g, m) {
            await f(g, m, async D=>{
                D.driver.setItems && await Vt(D.driver.setItems, D.items.map(I=>({
                    key: I.relativeKey,
                    value: ko(I.value),
                    options: I.options
                })), m),
                D.driver.setItem && await Promise.all(D.items.map(I=>Vt(D.driver.setItem, I.relativeKey, ko(I.value), I.options)))
            }
            )
        },
        async setItemRaw(g, m, D={}) {
            if (m === void 0)
                return y.removeItem(g, D);
            g = mr(g);
            const {relativeKey: I, driver: T} = t(g);
            if (T.setItemRaw)
                await Vt(T.setItemRaw, I, m, D);
            else if (T.setItem)
                await Vt(T.setItem, I, HD(m), D);
            else
                return;
            T.watch || o("update", g)
        },
        async removeItem(g, m={}) {
            typeof m == "boolean" && (m = {
                removeMeta: m
            }),
            g = mr(g);
            const {relativeKey: D, driver: I} = t(g);
            I.removeItem && (await Vt(I.removeItem, D, m),
            (m.removeMeta || m.removeMata) && await Vt(I.removeItem, D + "$", m),
            I.watch || o("remove", g))
        },
        async getMeta(g, m={}) {
            typeof m == "boolean" && (m = {
                nativeOnly: m
            }),
            g = mr(g);
            const {relativeKey: D, driver: I} = t(g)
              , T = Object.create(null);
            if (I.getMeta && Object.assign(T, await Vt(I.getMeta, D, m)),
            !m.nativeOnly) {
                const P = await Vt(I.getItem, D + "$", m).then(z=>qo(z));
                P && typeof P == "object" && (typeof P.atime == "string" && (P.atime = new Date(P.atime)),
                typeof P.mtime == "string" && (P.mtime = new Date(P.mtime)),
                Object.assign(T, P))
            }
            return T
        },
        setMeta(g, m, D={}) {
            return this.setItem(g + "$", m, D)
        },
        removeMeta(g, m={}) {
            return this.removeItem(g + "$", m)
        },
        async getKeys(g, m={}) {
            g = Fo(g);
            const D = s(g, !0);
            let I = [];
            const T = [];
            for (const P of D) {
                const H = (await Vt(P.driver.getKeys, P.relativeBase, m)).map(ie=>P.mountpoint + mr(ie)).filter(ie=>!I.some(U=>ie.startsWith(U)));
                T.push(...H),
                I = [P.mountpoint, ...I.filter(ie=>!ie.startsWith(P.mountpoint))]
            }
            return g ? T.filter(P=>P.startsWith(g) && !P.endsWith("$")) : T.filter(P=>!P.endsWith("$"))
        },
        async clear(g, m={}) {
            g = Fo(g),
            await Promise.all(s(g, !1).map(async D=>{
                if (D.driver.clear)
                    return Vt(D.driver.clear, D.relativeBase, m);
                if (D.driver.removeItem) {
                    const I = await D.driver.getKeys(D.relativeBase || "", m);
                    return Promise.all(I.map(T=>D.driver.removeItem(T, m)))
                }
            }
            ))
        },
        async dispose() {
            await Promise.all(Object.values(e.mounts).map(g=>Tf(g)))
        },
        async watch(g) {
            return await c(),
            e.watchListeners.push(g),
            async()=>{
                e.watchListeners = e.watchListeners.filter(m=>m !== g),
                e.watchListeners.length === 0 && await d()
            }
        },
        async unwatch() {
            e.watchListeners = [],
            await d()
        },
        mount(g, m) {
            if (g = Fo(g),
            g && e.mounts[g])
                throw new Error(`already mounted at ${g}`);
            return g && (e.mountpoints.push(g),
            e.mountpoints.sort((D,I)=>I.length - D.length)),
            e.mounts[g] = m,
            e.watching && Promise.resolve(Af(m, o, g)).then(D=>{
                e.unwatch[g] = D
            }
            ).catch(console.error),
            y
        },
        async unmount(g, m=!0) {
            g = Fo(g),
            !(!g || !e.mounts[g]) && (e.watching && g in e.unwatch && (e.unwatch[g](),
            delete e.unwatch[g]),
            m && await Tf(e.mounts[g]),
            e.mountpoints = e.mountpoints.filter(D=>D !== g),
            delete e.mounts[g])
        },
        getMount(g="") {
            g = mr(g) + ":";
            const m = t(g);
            return {
                driver: m.driver,
                base: m.base
            }
        },
        getMounts(g="", m={}) {
            return g = mr(g),
            s(g, m.parents).map(I=>({
                driver: I.driver,
                base: I.mountpoint
            }))
        }
    };
    return y
}
function Af(i, e, t) {
    return i.watch ? i.watch((s,o)=>e(s, t + o)) : ()=>{}
}
async function Tf(i) {
    typeof i.dispose == "function" && await Vt(i.dispose)
}
function ln(i) {
    return new Promise((e,t)=>{
        i.oncomplete = i.onsuccess = ()=>e(i.result),
        i.onabort = i.onerror = ()=>t(i.error)
    }
    )
}
function fp(i, e) {
    const t = indexedDB.open(i);
    t.onupgradeneeded = ()=>t.result.createObjectStore(e);
    const s = ln(t);
    return (o,c)=>s.then(d=>c(d.transaction(e, o).objectStore(e)))
}
let Hc;
function As() {
    return Hc || (Hc = fp("keyval-store", "keyval")),
    Hc
}
function Rf(i, e=As()) {
    return e("readonly", t=>ln(t.get(i)))
}
function YD(i, e, t=As()) {
    return t("readwrite", s=>(s.put(e, i),
    ln(s.transaction)))
}
function JD(i, e=As()) {
    return e("readwrite", t=>(t.delete(i),
    ln(t.transaction)))
}
function QD(i=As()) {
    return i("readwrite", e=>(e.clear(),
    ln(e.transaction)))
}
function XD(i, e) {
    return i.openCursor().onsuccess = function() {
        this.result && (e(this.result),
        this.result.continue())
    }
    ,
    ln(i.transaction)
}
function ZD(i=As()) {
    return i("readonly", e=>{
        if (e.getAllKeys)
            return ln(e.getAllKeys());
        const t = [];
        return XD(e, s=>t.push(s.key)).then(()=>t)
    }
    )
}
const e3 = i=>JSON.stringify(i, (e,t)=>typeof t == "bigint" ? t.toString() + "n" : t)
  , t3 = i=>{
    const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g
      , t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s,o)=>typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o)
}
;
function Ts(i) {
    if (typeof i != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof i}`);
    try {
        return t3(i)
    } catch {
        return i
    }
}
function cn(i) {
    return typeof i == "string" ? i : e3(i) || ""
}
const r3 = "idb-keyval";
var i3 = (i={})=>{
    const e = i.base && i.base.length > 0 ? `${i.base}:` : ""
      , t = o=>e + o;
    let s;
    return i.dbName && i.storeName && (s = fp(i.dbName, i.storeName)),
    {
        name: r3,
        options: i,
        async hasItem(o) {
            return !(typeof await Rf(t(o), s) > "u")
        },
        async getItem(o) {
            return await Rf(t(o), s) ?? null
        },
        setItem(o, c) {
            return YD(t(o), c, s)
        },
        removeItem(o) {
            return JD(t(o), s)
        },
        getKeys() {
            return ZD(s)
        },
        clear() {
            return QD(s)
        }
    }
}
;
const n3 = "WALLET_CONNECT_V2_INDEXED_DB"
  , s3 = "keyvaluestorage";
let o3 = class {
    constructor() {
        this.indexedDb = WD({
            driver: i3({
                dbName: n3,
                storeName: s3
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e=>[e.key, e.value])
    }
    async getItem(e) {
        const t = await this.indexedDb.getItem(e);
        if (t !== null)
            return t
    }
    async setItem(e, t) {
        await this.indexedDb.setItem(e, cn(t))
    }
    async removeItem(e) {
        await this.indexedDb.removeItem(e)
    }
}
;
var Kc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Vo = {
    exports: {}
};
(function() {
    let i;
    function e() {}
    i = e,
    i.prototype.getItem = function(t) {
        return this.hasOwnProperty(t) ? String(this[t]) : null
    }
    ,
    i.prototype.setItem = function(t, s) {
        this[t] = String(s)
    }
    ,
    i.prototype.removeItem = function(t) {
        delete this[t]
    }
    ,
    i.prototype.clear = function() {
        const t = this;
        Object.keys(t).forEach(function(s) {
            t[s] = void 0,
            delete t[s]
        })
    }
    ,
    i.prototype.key = function(t) {
        return t = t || 0,
        Object.keys(this)[t]
    }
    ,
    i.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }),
    typeof Kc < "u" && Kc.localStorage ? Vo.exports = Kc.localStorage : typeof window < "u" && window.localStorage ? Vo.exports = window.localStorage : Vo.exports = new e
}
)();
function a3(i) {
    var e;
    return [i[0], Ts((e = i[1]) != null ? e : "")]
}
class c3 {
    constructor() {
        this.localStorage = Vo.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(a3)
    }
    async getItem(e) {
        const t = this.localStorage.getItem(e);
        if (t !== null)
            return Ts(t)
    }
    async setItem(e, t) {
        this.localStorage.setItem(e, cn(t))
    }
    async removeItem(e) {
        this.localStorage.removeItem(e)
    }
}
const u3 = "wc_storage_version"
  , Nf = 1
  , h3 = async(i,e,t)=>{
    const s = u3
      , o = await e.getItem(s);
    if (o && o >= Nf) {
        t(e);
        return
    }
    const c = await i.getKeys();
    if (!c.length) {
        t(e);
        return
    }
    const d = [];
    for (; c.length; ) {
        const f = c.shift();
        if (!f)
            continue;
        const y = f.toLowerCase();
        if (y.includes("wc@") || y.includes("walletconnect") || y.includes("wc_") || y.includes("wallet_connect")) {
            const g = await i.getItem(f);
            await e.setItem(f, g),
            d.push(f)
        }
    }
    await e.setItem(s, Nf),
    t(e),
    l3(i, d)
}
  , l3 = async(i,e)=>{
    e.length && e.forEach(async t=>{
        await i.removeItem(t)
    }
    )
}
;
let f3 = class {
    constructor() {
        this.initialized = !1,
        this.setInitialized = t=>{
            this.storage = t,
            this.initialized = !0
        }
        ;
        const e = new c3;
        this.storage = e;
        try {
            const t = new o3;
            h3(e, t, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(),
        this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(),
        this.storage.getEntries()
    }
    async getItem(e) {
        return await this.initialize(),
        this.storage.getItem(e)
    }
    async setItem(e, t) {
        return await this.initialize(),
        this.storage.setItem(e, t)
    }
    async removeItem(e) {
        return await this.initialize(),
        this.storage.removeItem(e)
    }
    async initialize() {
        this.initialized || await new Promise(e=>{
            const t = setInterval(()=>{
                this.initialized && (clearInterval(t),
                e())
            }
            , 20)
        }
        )
    }
}
;
var kn = {}
  , ds = {}
  , kc = {}
  , ps = {};
let fn = class {
}
;
const d3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    IEvents: fn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , p3 = xu(d3);
var Uf;
function g3() {
    if (Uf)
        return ps;
    Uf = 1,
    Object.defineProperty(ps, "__esModule", {
        value: !0
    }),
    ps.IHeartBeat = void 0;
    const i = p3;
    class e extends i.IEvents {
        constructor(s) {
            super()
        }
    }
    return ps.IHeartBeat = e,
    ps
}
var Lf;
function dp() {
    return Lf || (Lf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        si.__exportStar(g3(), i)
    }(kc)),
    kc
}
var Vc = {}, sn = {}, $f;
function y3() {
    if ($f)
        return sn;
    $f = 1,
    Object.defineProperty(sn, "__esModule", {
        value: !0
    }),
    sn.HEARTBEAT_EVENTS = sn.HEARTBEAT_INTERVAL = void 0;
    const i = ve;
    return sn.HEARTBEAT_INTERVAL = i.FIVE_SECONDS,
    sn.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    },
    sn
}
var Mf;
function pp() {
    return Mf || (Mf = 1,
    function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        si.__exportStar(y3(), i)
    }(Vc)),
    Vc
}
var jf;
function v3() {
    if (jf)
        return ds;
    jf = 1,
    Object.defineProperty(ds, "__esModule", {
        value: !0
    }),
    ds.HeartBeat = void 0;
    const i = si
      , e = Fr
      , t = ve
      , s = dp()
      , o = pp();
    class c extends s.IHeartBeat {
        constructor(f) {
            super(f),
            this.events = new e.EventEmitter,
            this.interval = o.HEARTBEAT_INTERVAL,
            this.interval = (f == null ? void 0 : f.interval) || o.HEARTBEAT_INTERVAL
        }
        static init(f) {
            return i.__awaiter(this, void 0, void 0, function*() {
                const y = new c(f);
                return yield y.init(),
                y
            })
        }
        init() {
            return i.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(f, y) {
            this.events.on(f, y)
        }
        once(f, y) {
            this.events.once(f, y)
        }
        off(f, y) {
            this.events.off(f, y)
        }
        removeListener(f, y) {
            this.events.removeListener(f, y)
        }
        initialize() {
            return i.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(()=>this.pulse(), t.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(o.HEARTBEAT_EVENTS.pulse)
        }
    }
    return ds.HeartBeat = c,
    ds
}
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = si;
    e.__exportStar(v3(), i),
    e.__exportStar(dp(), i),
    e.__exportStar(pp(), i)
}
)(kn);
var Je = {}, Gc, qf;
function m3() {
    if (qf)
        return Gc;
    qf = 1;
    function i(t) {
        try {
            return JSON.stringify(t)
        } catch {
            return '"[Circular]"'
        }
    }
    Gc = e;
    function e(t, s, o) {
        var c = o && o.stringify || i
          , d = 1;
        if (typeof t == "object" && t !== null) {
            var f = s.length + d;
            if (f === 1)
                return t;
            var y = new Array(f);
            y[0] = c(t);
            for (var g = 1; g < f; g++)
                y[g] = c(s[g]);
            return y.join(" ")
        }
        if (typeof t != "string")
            return t;
        var m = s.length;
        if (m === 0)
            return t;
        for (var D = "", I = 1 - d, T = -1, P = t && t.length || 0, z = 0; z < P; ) {
            if (t.charCodeAt(z) === 37 && z + 1 < P) {
                switch (T = T > -1 ? T : 0,
                t.charCodeAt(z + 1)) {
                case 100:
                case 102:
                    if (I >= m || s[I] == null)
                        break;
                    T < z && (D += t.slice(T, z)),
                    D += Number(s[I]),
                    T = z + 2,
                    z++;
                    break;
                case 105:
                    if (I >= m || s[I] == null)
                        break;
                    T < z && (D += t.slice(T, z)),
                    D += Math.floor(Number(s[I])),
                    T = z + 2,
                    z++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (I >= m || s[I] === void 0)
                        break;
                    T < z && (D += t.slice(T, z));
                    var H = typeof s[I];
                    if (H === "string") {
                        D += "'" + s[I] + "'",
                        T = z + 2,
                        z++;
                        break
                    }
                    if (H === "function") {
                        D += s[I].name || "<anonymous>",
                        T = z + 2,
                        z++;
                        break
                    }
                    D += c(s[I]),
                    T = z + 2,
                    z++;
                    break;
                case 115:
                    if (I >= m)
                        break;
                    T < z && (D += t.slice(T, z)),
                    D += String(s[I]),
                    T = z + 2,
                    z++;
                    break;
                case 37:
                    T < z && (D += t.slice(T, z)),
                    D += "%",
                    T = z + 2,
                    z++,
                    I--;
                    break
                }
                ++I
            }
            ++z
        }
        return T === -1 ? t : (T < P && (D += t.slice(T)),
        D)
    }
    return Gc
}
var Wc, Ff;
function w3() {
    if (Ff)
        return Wc;
    Ff = 1;
    const i = m3();
    Wc = o;
    const e = A().console || {}
      , t = {
        mapHttpRequest: P,
        mapHttpResponse: P,
        wrapRequestSerializer: z,
        wrapResponseSerializer: z,
        wrapErrorSerializer: z,
        req: P,
        res: P,
        err: I
    };
    function s(E, u) {
        return Array.isArray(E) ? E.filter(function(G) {
            return G !== "!stdSerializers.err"
        }) : E === !0 ? Object.keys(u) : !1
    }
    function o(E) {
        E = E || {},
        E.browser = E.browser || {};
        const u = E.browser.transmit;
        if (u && typeof u.send != "function")
            throw Error("pino: transmit option must have a send function");
        const _ = E.browser.write || e;
        E.browser.write && (E.browser.asObject = !0);
        const G = E.serializers || {}
          , W = s(E.browser.serialize, G);
        let se = E.browser.serialize;
        Array.isArray(E.browser.serialize) && E.browser.serialize.indexOf("!stdSerializers.err") > -1 && (se = !1);
        const ue = ["error", "fatal", "warn", "info", "debug", "trace"];
        typeof _ == "function" && (_.error = _.fatal = _.warn = _.info = _.debug = _.trace = _),
        E.enabled === !1 && (E.level = "silent");
        const de = E.level || "info"
          , b = Object.create(_);
        b.log || (b.log = H),
        Object.defineProperty(b, "levelVal", {
            get: ee
        }),
        Object.defineProperty(b, "level", {
            get: Q,
            set: k
        });
        const C = {
            transmit: u,
            serialize: W,
            asObject: E.browser.asObject,
            levels: ue,
            timestamp: T(E)
        };
        b.levels = o.levels,
        b.level = de,
        b.setMaxListeners = b.getMaxListeners = b.emit = b.addListener = b.on = b.prependListener = b.once = b.prependOnceListener = b.removeListener = b.removeAllListeners = b.listeners = b.listenerCount = b.eventNames = b.write = b.flush = H,
        b.serializers = G,
        b._serialize = W,
        b._stdErrSerialize = se,
        b.child = V,
        u && (b._logEvent = D());
        function ee() {
            return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
        }
        function Q() {
            return this._level
        }
        function k(J) {
            if (J !== "silent" && !this.levels.values[J])
                throw Error("unknown level " + J);
            this._level = J,
            c(C, b, "error", "log"),
            c(C, b, "fatal", "error"),
            c(C, b, "warn", "error"),
            c(C, b, "info", "log"),
            c(C, b, "debug", "log"),
            c(C, b, "trace", "log")
        }
        function V(J, re) {
            if (!J)
                throw new Error("missing bindings for child Pino");
            re = re || {},
            W && J.serializers && (re.serializers = J.serializers);
            const _e = re.serializers;
            if (W && _e) {
                var oe = Object.assign({}, G, _e)
                  , be = E.browser.serialize === !0 ? Object.keys(oe) : W;
                delete J.serializers,
                y([J], be, oe, this._stdErrSerialize)
            }
            function le(me) {
                this._childLevel = (me._childLevel | 0) + 1,
                this.error = g(me, J, "error"),
                this.fatal = g(me, J, "fatal"),
                this.warn = g(me, J, "warn"),
                this.info = g(me, J, "info"),
                this.debug = g(me, J, "debug"),
                this.trace = g(me, J, "trace"),
                oe && (this.serializers = oe,
                this._serialize = be),
                u && (this._logEvent = D([].concat(me._logEvent.bindings, J)))
            }
            return le.prototype = this,
            new le(this)
        }
        return b
    }
    o.levels = {
        values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
        },
        labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
        }
    },
    o.stdSerializers = t,
    o.stdTimeFunctions = Object.assign({}, {
        nullTime: ie,
        epochTime: U,
        unixTime: j,
        isoTime: O
    });
    function c(E, u, _, G) {
        const W = Object.getPrototypeOf(u);
        u[_] = u.levelVal > u.levels.values[_] ? H : W[_] ? W[_] : e[_] || e[G] || H,
        d(E, u, _)
    }
    function d(E, u, _) {
        !E.transmit && u[_] === H || (u[_] = function(G) {
            return function() {
                const se = E.timestamp()
                  , ue = new Array(arguments.length)
                  , de = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
                for (var b = 0; b < ue.length; b++)
                    ue[b] = arguments[b];
                if (E.serialize && !E.asObject && y(ue, this._serialize, this.serializers, this._stdErrSerialize),
                E.asObject ? G.call(de, f(this, _, ue, se)) : G.apply(de, ue),
                E.transmit) {
                    const C = E.transmit.level || u.level
                      , ee = o.levels.values[C]
                      , Q = o.levels.values[_];
                    if (Q < ee)
                        return;
                    m(this, {
                        ts: se,
                        methodLevel: _,
                        methodValue: Q,
                        transmitLevel: C,
                        transmitValue: o.levels.values[E.transmit.level || u.level],
                        send: E.transmit.send,
                        val: u.levelVal
                    }, ue)
                }
            }
        }(u[_]))
    }
    function f(E, u, _, G) {
        E._serialize && y(_, E._serialize, E.serializers, E._stdErrSerialize);
        const W = _.slice();
        let se = W[0];
        const ue = {};
        G && (ue.time = G),
        ue.level = o.levels.values[u];
        let de = (E._childLevel | 0) + 1;
        if (de < 1 && (de = 1),
        se !== null && typeof se == "object") {
            for (; de-- && typeof W[0] == "object"; )
                Object.assign(ue, W.shift());
            se = W.length ? i(W.shift(), W) : void 0
        } else
            typeof se == "string" && (se = i(W.shift(), W));
        return se !== void 0 && (ue.msg = se),
        ue
    }
    function y(E, u, _, G) {
        for (const W in E)
            if (G && E[W]instanceof Error)
                E[W] = o.stdSerializers.err(E[W]);
            else if (typeof E[W] == "object" && !Array.isArray(E[W]))
                for (const se in E[W])
                    u && u.indexOf(se) > -1 && se in _ && (E[W][se] = _[se](E[W][se]))
    }
    function g(E, u, _) {
        return function() {
            const G = new Array(1 + arguments.length);
            G[0] = u;
            for (var W = 1; W < G.length; W++)
                G[W] = arguments[W - 1];
            return E[_].apply(this, G)
        }
    }
    function m(E, u, _) {
        const G = u.send
          , W = u.ts
          , se = u.methodLevel
          , ue = u.methodValue
          , de = u.val
          , b = E._logEvent.bindings;
        y(_, E._serialize || Object.keys(E.serializers), E.serializers, E._stdErrSerialize === void 0 ? !0 : E._stdErrSerialize),
        E._logEvent.ts = W,
        E._logEvent.messages = _.filter(function(C) {
            return b.indexOf(C) === -1
        }),
        E._logEvent.level.label = se,
        E._logEvent.level.value = ue,
        G(se, E._logEvent, de),
        E._logEvent = D(b)
    }
    function D(E) {
        return {
            ts: 0,
            messages: [],
            bindings: E || [],
            level: {
                label: "",
                value: 0
            }
        }
    }
    function I(E) {
        const u = {
            type: E.constructor.name,
            msg: E.message,
            stack: E.stack
        };
        for (const _ in E)
            u[_] === void 0 && (u[_] = E[_]);
        return u
    }
    function T(E) {
        return typeof E.timestamp == "function" ? E.timestamp : E.timestamp === !1 ? ie : U
    }
    function P() {
        return {}
    }
    function z(E) {
        return E
    }
    function H() {}
    function ie() {
        return !1
    }
    function U() {
        return Date.now()
    }
    function j() {
        return Math.round(Date.now() / 1e3)
    }
    function O() {
        return new Date(Date.now()).toISOString()
    }
    function A() {
        function E(u) {
            return typeof u < "u" && u
        }
        try {
            return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis,
                    this.globalThis = this
                },
                configurable: !0
            }),
            globalThis
        } catch {
            return E(self) || E(window) || E(this) || {}
        }
    }
    return Wc
}
var on = {}, zf;
function gp() {
    return zf || (zf = 1,
    Object.defineProperty(on, "__esModule", {
        value: !0
    }),
    on.PINO_CUSTOM_CONTEXT_KEY = on.PINO_LOGGER_DEFAULTS = void 0,
    on.PINO_LOGGER_DEFAULTS = {
        level: "info"
    },
    on.PINO_CUSTOM_CONTEXT_KEY = "custom_context"),
    on
}
var ar = {}, Bf;
function _3() {
    if (Bf)
        return ar;
    Bf = 1,
    Object.defineProperty(ar, "__esModule", {
        value: !0
    }),
    ar.generateChildLogger = ar.formatChildLoggerContext = ar.getLoggerContext = ar.setBrowserLoggerContext = ar.getBrowserLoggerContext = ar.getDefaultLoggerOptions = void 0;
    const i = gp();
    function e(f) {
        return Object.assign(Object.assign({}, f), {
            level: (f == null ? void 0 : f.level) || i.PINO_LOGGER_DEFAULTS.level
        })
    }
    ar.getDefaultLoggerOptions = e;
    function t(f, y=i.PINO_CUSTOM_CONTEXT_KEY) {
        return f[y] || ""
    }
    ar.getBrowserLoggerContext = t;
    function s(f, y, g=i.PINO_CUSTOM_CONTEXT_KEY) {
        return f[g] = y,
        f
    }
    ar.setBrowserLoggerContext = s;
    function o(f, y=i.PINO_CUSTOM_CONTEXT_KEY) {
        let g = "";
        return typeof f.bindings > "u" ? g = t(f, y) : g = f.bindings().context || "",
        g
    }
    ar.getLoggerContext = o;
    function c(f, y, g=i.PINO_CUSTOM_CONTEXT_KEY) {
        const m = o(f, g);
        return m.trim() ? `${m}/${y}` : y
    }
    ar.formatChildLoggerContext = c;
    function d(f, y, g=i.PINO_CUSTOM_CONTEXT_KEY) {
        const m = c(f, y, g)
          , D = f.child({
            context: m
        });
        return s(D, m, g)
    }
    return ar.generateChildLogger = d,
    ar
}
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.pino = void 0;
    const e = si
      , t = e.__importDefault(w3());
    Object.defineProperty(i, "pino", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }),
    e.__exportStar(gp(), i),
    e.__exportStar(_3(), i)
}
)(Je);
class b3 extends fn {
    constructor(e) {
        super(),
        this.opts = e,
        this.protocol = "wc",
        this.version = 2
    }
}
let E3 = class extends fn {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t,
        this.records = new Map
    }
}
  , D3 = class {
    constructor(e, t) {
        this.logger = e,
        this.core = t
    }
}
  , S3 = class extends fn {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
  , I3 = class extends fn {
    constructor(e) {
        super()
    }
}
  , x3 = class {
    constructor(e, t, s, o) {
        this.core = e,
        this.logger = t,
        this.name = s
    }
}
;
class O3 extends fn {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
let P3 = class extends fn {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t
    }
}
  , C3 = class {
    constructor(e, t) {
        this.projectId = e,
        this.logger = t
    }
}
  , A3 = class {
    constructor(e, t) {
        this.projectId = e,
        this.logger = t
    }
}
  , T3 = class {
    constructor(e) {
        this.opts = e,
        this.protocol = "wc",
        this.version = 2
    }
}
  , R3 = class {
    constructor(e) {
        this.client = e
    }
}
;
var zu = {}
  , yp = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = $e
      , t = Cr;
    i.DIGEST_LENGTH = 64,
    i.BLOCK_SIZE = 128;
    var s = function() {
        function f() {
            this.digestLength = i.DIGEST_LENGTH,
            this.blockSize = i.BLOCK_SIZE,
            this._stateHi = new Int32Array(8),
            this._stateLo = new Int32Array(8),
            this._tempHi = new Int32Array(16),
            this._tempLo = new Int32Array(16),
            this._buffer = new Uint8Array(256),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return f.prototype._initState = function() {
            this._stateHi[0] = 1779033703,
            this._stateHi[1] = 3144134277,
            this._stateHi[2] = 1013904242,
            this._stateHi[3] = 2773480762,
            this._stateHi[4] = 1359893119,
            this._stateHi[5] = 2600822924,
            this._stateHi[6] = 528734635,
            this._stateHi[7] = 1541459225,
            this._stateLo[0] = 4089235720,
            this._stateLo[1] = 2227873595,
            this._stateLo[2] = 4271175723,
            this._stateLo[3] = 1595750129,
            this._stateLo[4] = 2917565137,
            this._stateLo[5] = 725511199,
            this._stateLo[6] = 4215389547,
            this._stateLo[7] = 327033209
        }
        ,
        f.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        f.prototype.clean = function() {
            t.wipe(this._buffer),
            t.wipe(this._tempHi),
            t.wipe(this._tempLo),
            this.reset()
        }
        ,
        f.prototype.update = function(y, g) {
            if (g === void 0 && (g = y.length),
            this._finished)
                throw new Error("SHA512: can't update because hash was finished.");
            var m = 0;
            if (this._bytesHashed += g,
            this._bufferLength > 0) {
                for (; this._bufferLength < i.BLOCK_SIZE && g > 0; )
                    this._buffer[this._bufferLength++] = y[m++],
                    g--;
                this._bufferLength === this.blockSize && (c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (g >= this.blockSize && (m = c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, y, m, g),
            g %= this.blockSize); g > 0; )
                this._buffer[this._bufferLength++] = y[m++],
                g--;
            return this
        }
        ,
        f.prototype.finish = function(y) {
            if (!this._finished) {
                var g = this._bytesHashed
                  , m = this._bufferLength
                  , D = g / 536870912 | 0
                  , I = g << 3
                  , T = g % 128 < 112 ? 128 : 256;
                this._buffer[m] = 128;
                for (var P = m + 1; P < T - 8; P++)
                    this._buffer[P] = 0;
                e.writeUint32BE(D, this._buffer, T - 8),
                e.writeUint32BE(I, this._buffer, T - 4),
                c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, T),
                this._finished = !0
            }
            for (var P = 0; P < this.digestLength / 8; P++)
                e.writeUint32BE(this._stateHi[P], y, P * 8),
                e.writeUint32BE(this._stateLo[P], y, P * 8 + 4);
            return this
        }
        ,
        f.prototype.digest = function() {
            var y = new Uint8Array(this.digestLength);
            return this.finish(y),
            y
        }
        ,
        f.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        f.prototype.restoreState = function(y) {
            return this._stateHi.set(y.stateHi),
            this._stateLo.set(y.stateLo),
            this._bufferLength = y.bufferLength,
            y.buffer && this._buffer.set(y.buffer),
            this._bytesHashed = y.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        f.prototype.cleanSavedState = function(y) {
            t.wipe(y.stateHi),
            t.wipe(y.stateLo),
            y.buffer && t.wipe(y.buffer),
            y.bufferLength = 0,
            y.bytesHashed = 0
        }
        ,
        f
    }();
    i.SHA512 = s;
    var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
    function c(f, y, g, m, D, I, T) {
        for (var P = g[0], z = g[1], H = g[2], ie = g[3], U = g[4], j = g[5], O = g[6], A = g[7], E = m[0], u = m[1], _ = m[2], G = m[3], W = m[4], se = m[5], ue = m[6], de = m[7], b, C, ee, Q, k, V, J, re; T >= 128; ) {
            for (var _e = 0; _e < 16; _e++) {
                var oe = 8 * _e + I;
                f[_e] = e.readUint32BE(D, oe),
                y[_e] = e.readUint32BE(D, oe + 4)
            }
            for (var _e = 0; _e < 80; _e++) {
                var be = P
                  , le = z
                  , me = H
                  , B = ie
                  , F = U
                  , L = j
                  , l = O
                  , R = A
                  , ae = E
                  , fe = u
                  , Ie = _
                  , Be = G
                  , ke = W
                  , Me = se
                  , pt = ue
                  , gt = de;
                if (b = A,
                C = de,
                k = C & 65535,
                V = C >>> 16,
                J = b & 65535,
                re = b >>> 16,
                b = (U >>> 14 | W << 18) ^ (U >>> 18 | W << 14) ^ (W >>> 9 | U << 23),
                C = (W >>> 14 | U << 18) ^ (W >>> 18 | U << 14) ^ (U >>> 9 | W << 23),
                k += C & 65535,
                V += C >>> 16,
                J += b & 65535,
                re += b >>> 16,
                b = U & j ^ ~U & O,
                C = W & se ^ ~W & ue,
                k += C & 65535,
                V += C >>> 16,
                J += b & 65535,
                re += b >>> 16,
                b = o[_e * 2],
                C = o[_e * 2 + 1],
                k += C & 65535,
                V += C >>> 16,
                J += b & 65535,
                re += b >>> 16,
                b = f[_e % 16],
                C = y[_e % 16],
                k += C & 65535,
                V += C >>> 16,
                J += b & 65535,
                re += b >>> 16,
                V += k >>> 16,
                J += V >>> 16,
                re += J >>> 16,
                ee = J & 65535 | re << 16,
                Q = k & 65535 | V << 16,
                b = ee,
                C = Q,
                k = C & 65535,
                V = C >>> 16,
                J = b & 65535,
                re = b >>> 16,
                b = (P >>> 28 | E << 4) ^ (E >>> 2 | P << 30) ^ (E >>> 7 | P << 25),
                C = (E >>> 28 | P << 4) ^ (P >>> 2 | E << 30) ^ (P >>> 7 | E << 25),
                k += C & 65535,
                V += C >>> 16,
                J += b & 65535,
                re += b >>> 16,
                b = P & z ^ P & H ^ z & H,
                C = E & u ^ E & _ ^ u & _,
                k += C & 65535,
                V += C >>> 16,
                J += b & 65535,
                re += b >>> 16,
                V += k >>> 16,
                J += V >>> 16,
                re += J >>> 16,
                R = J & 65535 | re << 16,
                gt = k & 65535 | V << 16,
                b = B,
                C = Be,
                k = C & 65535,
                V = C >>> 16,
                J = b & 65535,
                re = b >>> 16,
                b = ee,
                C = Q,
                k += C & 65535,
                V += C >>> 16,
                J += b & 65535,
                re += b >>> 16,
                V += k >>> 16,
                J += V >>> 16,
                re += J >>> 16,
                B = J & 65535 | re << 16,
                Be = k & 65535 | V << 16,
                z = be,
                H = le,
                ie = me,
                U = B,
                j = F,
                O = L,
                A = l,
                P = R,
                u = ae,
                _ = fe,
                G = Ie,
                W = Be,
                se = ke,
                ue = Me,
                de = pt,
                E = gt,
                _e % 16 === 15)
                    for (var oe = 0; oe < 16; oe++)
                        b = f[oe],
                        C = y[oe],
                        k = C & 65535,
                        V = C >>> 16,
                        J = b & 65535,
                        re = b >>> 16,
                        b = f[(oe + 9) % 16],
                        C = y[(oe + 9) % 16],
                        k += C & 65535,
                        V += C >>> 16,
                        J += b & 65535,
                        re += b >>> 16,
                        ee = f[(oe + 1) % 16],
                        Q = y[(oe + 1) % 16],
                        b = (ee >>> 1 | Q << 31) ^ (ee >>> 8 | Q << 24) ^ ee >>> 7,
                        C = (Q >>> 1 | ee << 31) ^ (Q >>> 8 | ee << 24) ^ (Q >>> 7 | ee << 25),
                        k += C & 65535,
                        V += C >>> 16,
                        J += b & 65535,
                        re += b >>> 16,
                        ee = f[(oe + 14) % 16],
                        Q = y[(oe + 14) % 16],
                        b = (ee >>> 19 | Q << 13) ^ (Q >>> 29 | ee << 3) ^ ee >>> 6,
                        C = (Q >>> 19 | ee << 13) ^ (ee >>> 29 | Q << 3) ^ (Q >>> 6 | ee << 26),
                        k += C & 65535,
                        V += C >>> 16,
                        J += b & 65535,
                        re += b >>> 16,
                        V += k >>> 16,
                        J += V >>> 16,
                        re += J >>> 16,
                        f[oe] = J & 65535 | re << 16,
                        y[oe] = k & 65535 | V << 16
            }
            b = P,
            C = E,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[0],
            C = m[0],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[0] = P = J & 65535 | re << 16,
            m[0] = E = k & 65535 | V << 16,
            b = z,
            C = u,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[1],
            C = m[1],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[1] = z = J & 65535 | re << 16,
            m[1] = u = k & 65535 | V << 16,
            b = H,
            C = _,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[2],
            C = m[2],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[2] = H = J & 65535 | re << 16,
            m[2] = _ = k & 65535 | V << 16,
            b = ie,
            C = G,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[3],
            C = m[3],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[3] = ie = J & 65535 | re << 16,
            m[3] = G = k & 65535 | V << 16,
            b = U,
            C = W,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[4],
            C = m[4],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[4] = U = J & 65535 | re << 16,
            m[4] = W = k & 65535 | V << 16,
            b = j,
            C = se,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[5],
            C = m[5],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[5] = j = J & 65535 | re << 16,
            m[5] = se = k & 65535 | V << 16,
            b = O,
            C = ue,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[6],
            C = m[6],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[6] = O = J & 65535 | re << 16,
            m[6] = ue = k & 65535 | V << 16,
            b = A,
            C = de,
            k = C & 65535,
            V = C >>> 16,
            J = b & 65535,
            re = b >>> 16,
            b = g[7],
            C = m[7],
            k += C & 65535,
            V += C >>> 16,
            J += b & 65535,
            re += b >>> 16,
            V += k >>> 16,
            J += V >>> 16,
            re += J >>> 16,
            g[7] = A = J & 65535 | re << 16,
            m[7] = de = k & 65535 | V << 16,
            I += 128,
            T -= 128
        }
        return I
    }
    function d(f) {
        var y = new s;
        y.update(f);
        var g = y.digest();
        return y.clean(),
        g
    }
    i.hash = d
}
)(yp);
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.convertSecretKeyToX25519 = i.convertPublicKeyToX25519 = i.verify = i.sign = i.extractPublicKeyFromSecretKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.SEED_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = i.SIGNATURE_LENGTH = void 0;
    const e = Fn
      , t = yp
      , s = Cr;
    i.SIGNATURE_LENGTH = 64,
    i.PUBLIC_KEY_LENGTH = 32,
    i.SECRET_KEY_LENGTH = 64,
    i.SEED_LENGTH = 32;
    function o(B) {
        const F = new Float64Array(16);
        if (B)
            for (let L = 0; L < B.length; L++)
                F[L] = B[L];
        return F
    }
    const c = new Uint8Array(32);
    c[0] = 9;
    const d = o()
      , f = o([1])
      , y = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
      , g = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
      , m = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
      , D = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
      , I = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function T(B, F) {
        for (let L = 0; L < 16; L++)
            B[L] = F[L] | 0
    }
    function P(B) {
        let F = 1;
        for (let L = 0; L < 16; L++) {
            let l = B[L] + F + 65535;
            F = Math.floor(l / 65536),
            B[L] = l - F * 65536
        }
        B[0] += F - 1 + 37 * (F - 1)
    }
    function z(B, F, L) {
        const l = ~(L - 1);
        for (let R = 0; R < 16; R++) {
            const ae = l & (B[R] ^ F[R]);
            B[R] ^= ae,
            F[R] ^= ae
        }
    }
    function H(B, F) {
        const L = o()
          , l = o();
        for (let R = 0; R < 16; R++)
            l[R] = F[R];
        P(l),
        P(l),
        P(l);
        for (let R = 0; R < 2; R++) {
            L[0] = l[0] - 65517;
            for (let fe = 1; fe < 15; fe++)
                L[fe] = l[fe] - 65535 - (L[fe - 1] >> 16 & 1),
                L[fe - 1] &= 65535;
            L[15] = l[15] - 32767 - (L[14] >> 16 & 1);
            const ae = L[15] >> 16 & 1;
            L[14] &= 65535,
            z(l, L, 1 - ae)
        }
        for (let R = 0; R < 16; R++)
            B[2 * R] = l[R] & 255,
            B[2 * R + 1] = l[R] >> 8
    }
    function ie(B, F) {
        let L = 0;
        for (let l = 0; l < 32; l++)
            L |= B[l] ^ F[l];
        return (1 & L - 1 >>> 8) - 1
    }
    function U(B, F) {
        const L = new Uint8Array(32)
          , l = new Uint8Array(32);
        return H(L, B),
        H(l, F),
        ie(L, l)
    }
    function j(B) {
        const F = new Uint8Array(32);
        return H(F, B),
        F[0] & 1
    }
    function O(B, F) {
        for (let L = 0; L < 16; L++)
            B[L] = F[2 * L] + (F[2 * L + 1] << 8);
        B[15] &= 32767
    }
    function A(B, F, L) {
        for (let l = 0; l < 16; l++)
            B[l] = F[l] + L[l]
    }
    function E(B, F, L) {
        for (let l = 0; l < 16; l++)
            B[l] = F[l] - L[l]
    }
    function u(B, F, L) {
        let l, R, ae = 0, fe = 0, Ie = 0, Be = 0, ke = 0, Me = 0, pt = 0, gt = 0, qe = 0, xe = 0, Ne = 0, Ue = 0, Fe = 0, Pe = 0, Le = 0, Se = 0, Ce = 0, He = 0, Oe = 0, Ve = 0, We = 0, et = 0, tt = 0, Qe = 0, tr = 0, fr = 0, Jr = 0, rr = 0, oi = 0, xi = 0, Bi = 0, Dt = L[0], yt = L[1], St = L[2], It = L[3], bt = L[4], vt = L[5], Lt = L[6], $t = L[7], xt = L[8], Mt = L[9], Ot = L[10], At = L[11], Pt = L[12], ht = L[13], jt = L[14], qt = L[15];
        l = F[0],
        ae += l * Dt,
        fe += l * yt,
        Ie += l * St,
        Be += l * It,
        ke += l * bt,
        Me += l * vt,
        pt += l * Lt,
        gt += l * $t,
        qe += l * xt,
        xe += l * Mt,
        Ne += l * Ot,
        Ue += l * At,
        Fe += l * Pt,
        Pe += l * ht,
        Le += l * jt,
        Se += l * qt,
        l = F[1],
        fe += l * Dt,
        Ie += l * yt,
        Be += l * St,
        ke += l * It,
        Me += l * bt,
        pt += l * vt,
        gt += l * Lt,
        qe += l * $t,
        xe += l * xt,
        Ne += l * Mt,
        Ue += l * Ot,
        Fe += l * At,
        Pe += l * Pt,
        Le += l * ht,
        Se += l * jt,
        Ce += l * qt,
        l = F[2],
        Ie += l * Dt,
        Be += l * yt,
        ke += l * St,
        Me += l * It,
        pt += l * bt,
        gt += l * vt,
        qe += l * Lt,
        xe += l * $t,
        Ne += l * xt,
        Ue += l * Mt,
        Fe += l * Ot,
        Pe += l * At,
        Le += l * Pt,
        Se += l * ht,
        Ce += l * jt,
        He += l * qt,
        l = F[3],
        Be += l * Dt,
        ke += l * yt,
        Me += l * St,
        pt += l * It,
        gt += l * bt,
        qe += l * vt,
        xe += l * Lt,
        Ne += l * $t,
        Ue += l * xt,
        Fe += l * Mt,
        Pe += l * Ot,
        Le += l * At,
        Se += l * Pt,
        Ce += l * ht,
        He += l * jt,
        Oe += l * qt,
        l = F[4],
        ke += l * Dt,
        Me += l * yt,
        pt += l * St,
        gt += l * It,
        qe += l * bt,
        xe += l * vt,
        Ne += l * Lt,
        Ue += l * $t,
        Fe += l * xt,
        Pe += l * Mt,
        Le += l * Ot,
        Se += l * At,
        Ce += l * Pt,
        He += l * ht,
        Oe += l * jt,
        Ve += l * qt,
        l = F[5],
        Me += l * Dt,
        pt += l * yt,
        gt += l * St,
        qe += l * It,
        xe += l * bt,
        Ne += l * vt,
        Ue += l * Lt,
        Fe += l * $t,
        Pe += l * xt,
        Le += l * Mt,
        Se += l * Ot,
        Ce += l * At,
        He += l * Pt,
        Oe += l * ht,
        Ve += l * jt,
        We += l * qt,
        l = F[6],
        pt += l * Dt,
        gt += l * yt,
        qe += l * St,
        xe += l * It,
        Ne += l * bt,
        Ue += l * vt,
        Fe += l * Lt,
        Pe += l * $t,
        Le += l * xt,
        Se += l * Mt,
        Ce += l * Ot,
        He += l * At,
        Oe += l * Pt,
        Ve += l * ht,
        We += l * jt,
        et += l * qt,
        l = F[7],
        gt += l * Dt,
        qe += l * yt,
        xe += l * St,
        Ne += l * It,
        Ue += l * bt,
        Fe += l * vt,
        Pe += l * Lt,
        Le += l * $t,
        Se += l * xt,
        Ce += l * Mt,
        He += l * Ot,
        Oe += l * At,
        Ve += l * Pt,
        We += l * ht,
        et += l * jt,
        tt += l * qt,
        l = F[8],
        qe += l * Dt,
        xe += l * yt,
        Ne += l * St,
        Ue += l * It,
        Fe += l * bt,
        Pe += l * vt,
        Le += l * Lt,
        Se += l * $t,
        Ce += l * xt,
        He += l * Mt,
        Oe += l * Ot,
        Ve += l * At,
        We += l * Pt,
        et += l * ht,
        tt += l * jt,
        Qe += l * qt,
        l = F[9],
        xe += l * Dt,
        Ne += l * yt,
        Ue += l * St,
        Fe += l * It,
        Pe += l * bt,
        Le += l * vt,
        Se += l * Lt,
        Ce += l * $t,
        He += l * xt,
        Oe += l * Mt,
        Ve += l * Ot,
        We += l * At,
        et += l * Pt,
        tt += l * ht,
        Qe += l * jt,
        tr += l * qt,
        l = F[10],
        Ne += l * Dt,
        Ue += l * yt,
        Fe += l * St,
        Pe += l * It,
        Le += l * bt,
        Se += l * vt,
        Ce += l * Lt,
        He += l * $t,
        Oe += l * xt,
        Ve += l * Mt,
        We += l * Ot,
        et += l * At,
        tt += l * Pt,
        Qe += l * ht,
        tr += l * jt,
        fr += l * qt,
        l = F[11],
        Ue += l * Dt,
        Fe += l * yt,
        Pe += l * St,
        Le += l * It,
        Se += l * bt,
        Ce += l * vt,
        He += l * Lt,
        Oe += l * $t,
        Ve += l * xt,
        We += l * Mt,
        et += l * Ot,
        tt += l * At,
        Qe += l * Pt,
        tr += l * ht,
        fr += l * jt,
        Jr += l * qt,
        l = F[12],
        Fe += l * Dt,
        Pe += l * yt,
        Le += l * St,
        Se += l * It,
        Ce += l * bt,
        He += l * vt,
        Oe += l * Lt,
        Ve += l * $t,
        We += l * xt,
        et += l * Mt,
        tt += l * Ot,
        Qe += l * At,
        tr += l * Pt,
        fr += l * ht,
        Jr += l * jt,
        rr += l * qt,
        l = F[13],
        Pe += l * Dt,
        Le += l * yt,
        Se += l * St,
        Ce += l * It,
        He += l * bt,
        Oe += l * vt,
        Ve += l * Lt,
        We += l * $t,
        et += l * xt,
        tt += l * Mt,
        Qe += l * Ot,
        tr += l * At,
        fr += l * Pt,
        Jr += l * ht,
        rr += l * jt,
        oi += l * qt,
        l = F[14],
        Le += l * Dt,
        Se += l * yt,
        Ce += l * St,
        He += l * It,
        Oe += l * bt,
        Ve += l * vt,
        We += l * Lt,
        et += l * $t,
        tt += l * xt,
        Qe += l * Mt,
        tr += l * Ot,
        fr += l * At,
        Jr += l * Pt,
        rr += l * ht,
        oi += l * jt,
        xi += l * qt,
        l = F[15],
        Se += l * Dt,
        Ce += l * yt,
        He += l * St,
        Oe += l * It,
        Ve += l * bt,
        We += l * vt,
        et += l * Lt,
        tt += l * $t,
        Qe += l * xt,
        tr += l * Mt,
        fr += l * Ot,
        Jr += l * At,
        rr += l * Pt,
        oi += l * ht,
        xi += l * jt,
        Bi += l * qt,
        ae += 38 * Ce,
        fe += 38 * He,
        Ie += 38 * Oe,
        Be += 38 * Ve,
        ke += 38 * We,
        Me += 38 * et,
        pt += 38 * tt,
        gt += 38 * Qe,
        qe += 38 * tr,
        xe += 38 * fr,
        Ne += 38 * Jr,
        Ue += 38 * rr,
        Fe += 38 * oi,
        Pe += 38 * xi,
        Le += 38 * Bi,
        R = 1,
        l = ae + R + 65535,
        R = Math.floor(l / 65536),
        ae = l - R * 65536,
        l = fe + R + 65535,
        R = Math.floor(l / 65536),
        fe = l - R * 65536,
        l = Ie + R + 65535,
        R = Math.floor(l / 65536),
        Ie = l - R * 65536,
        l = Be + R + 65535,
        R = Math.floor(l / 65536),
        Be = l - R * 65536,
        l = ke + R + 65535,
        R = Math.floor(l / 65536),
        ke = l - R * 65536,
        l = Me + R + 65535,
        R = Math.floor(l / 65536),
        Me = l - R * 65536,
        l = pt + R + 65535,
        R = Math.floor(l / 65536),
        pt = l - R * 65536,
        l = gt + R + 65535,
        R = Math.floor(l / 65536),
        gt = l - R * 65536,
        l = qe + R + 65535,
        R = Math.floor(l / 65536),
        qe = l - R * 65536,
        l = xe + R + 65535,
        R = Math.floor(l / 65536),
        xe = l - R * 65536,
        l = Ne + R + 65535,
        R = Math.floor(l / 65536),
        Ne = l - R * 65536,
        l = Ue + R + 65535,
        R = Math.floor(l / 65536),
        Ue = l - R * 65536,
        l = Fe + R + 65535,
        R = Math.floor(l / 65536),
        Fe = l - R * 65536,
        l = Pe + R + 65535,
        R = Math.floor(l / 65536),
        Pe = l - R * 65536,
        l = Le + R + 65535,
        R = Math.floor(l / 65536),
        Le = l - R * 65536,
        l = Se + R + 65535,
        R = Math.floor(l / 65536),
        Se = l - R * 65536,
        ae += R - 1 + 37 * (R - 1),
        R = 1,
        l = ae + R + 65535,
        R = Math.floor(l / 65536),
        ae = l - R * 65536,
        l = fe + R + 65535,
        R = Math.floor(l / 65536),
        fe = l - R * 65536,
        l = Ie + R + 65535,
        R = Math.floor(l / 65536),
        Ie = l - R * 65536,
        l = Be + R + 65535,
        R = Math.floor(l / 65536),
        Be = l - R * 65536,
        l = ke + R + 65535,
        R = Math.floor(l / 65536),
        ke = l - R * 65536,
        l = Me + R + 65535,
        R = Math.floor(l / 65536),
        Me = l - R * 65536,
        l = pt + R + 65535,
        R = Math.floor(l / 65536),
        pt = l - R * 65536,
        l = gt + R + 65535,
        R = Math.floor(l / 65536),
        gt = l - R * 65536,
        l = qe + R + 65535,
        R = Math.floor(l / 65536),
        qe = l - R * 65536,
        l = xe + R + 65535,
        R = Math.floor(l / 65536),
        xe = l - R * 65536,
        l = Ne + R + 65535,
        R = Math.floor(l / 65536),
        Ne = l - R * 65536,
        l = Ue + R + 65535,
        R = Math.floor(l / 65536),
        Ue = l - R * 65536,
        l = Fe + R + 65535,
        R = Math.floor(l / 65536),
        Fe = l - R * 65536,
        l = Pe + R + 65535,
        R = Math.floor(l / 65536),
        Pe = l - R * 65536,
        l = Le + R + 65535,
        R = Math.floor(l / 65536),
        Le = l - R * 65536,
        l = Se + R + 65535,
        R = Math.floor(l / 65536),
        Se = l - R * 65536,
        ae += R - 1 + 37 * (R - 1),
        B[0] = ae,
        B[1] = fe,
        B[2] = Ie,
        B[3] = Be,
        B[4] = ke,
        B[5] = Me,
        B[6] = pt,
        B[7] = gt,
        B[8] = qe,
        B[9] = xe,
        B[10] = Ne,
        B[11] = Ue,
        B[12] = Fe,
        B[13] = Pe,
        B[14] = Le,
        B[15] = Se
    }
    function _(B, F) {
        u(B, F, F)
    }
    function G(B, F) {
        const L = o();
        let l;
        for (l = 0; l < 16; l++)
            L[l] = F[l];
        for (l = 253; l >= 0; l--)
            _(L, L),
            l !== 2 && l !== 4 && u(L, L, F);
        for (l = 0; l < 16; l++)
            B[l] = L[l]
    }
    function W(B, F) {
        const L = o();
        let l;
        for (l = 0; l < 16; l++)
            L[l] = F[l];
        for (l = 250; l >= 0; l--)
            _(L, L),
            l !== 1 && u(L, L, F);
        for (l = 0; l < 16; l++)
            B[l] = L[l]
    }
    function se(B, F) {
        const L = o()
          , l = o()
          , R = o()
          , ae = o()
          , fe = o()
          , Ie = o()
          , Be = o()
          , ke = o()
          , Me = o();
        E(L, B[1], B[0]),
        E(Me, F[1], F[0]),
        u(L, L, Me),
        A(l, B[0], B[1]),
        A(Me, F[0], F[1]),
        u(l, l, Me),
        u(R, B[3], F[3]),
        u(R, R, g),
        u(ae, B[2], F[2]),
        A(ae, ae, ae),
        E(fe, l, L),
        E(Ie, ae, R),
        A(Be, ae, R),
        A(ke, l, L),
        u(B[0], fe, Ie),
        u(B[1], ke, Be),
        u(B[2], Be, Ie),
        u(B[3], fe, ke)
    }
    function ue(B, F, L) {
        for (let l = 0; l < 4; l++)
            z(B[l], F[l], L)
    }
    function de(B, F) {
        const L = o()
          , l = o()
          , R = o();
        G(R, F[2]),
        u(L, F[0], R),
        u(l, F[1], R),
        H(B, l),
        B[31] ^= j(L) << 7
    }
    function b(B, F, L) {
        T(B[0], d),
        T(B[1], f),
        T(B[2], f),
        T(B[3], d);
        for (let l = 255; l >= 0; --l) {
            const R = L[l / 8 | 0] >> (l & 7) & 1;
            ue(B, F, R),
            se(F, B),
            se(B, B),
            ue(B, F, R)
        }
    }
    function C(B, F) {
        const L = [o(), o(), o(), o()];
        T(L[0], m),
        T(L[1], D),
        T(L[2], f),
        u(L[3], m, D),
        b(B, L, F)
    }
    function ee(B) {
        if (B.length !== i.SEED_LENGTH)
            throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
        const F = (0,
        t.hash)(B);
        F[0] &= 248,
        F[31] &= 127,
        F[31] |= 64;
        const L = new Uint8Array(32)
          , l = [o(), o(), o(), o()];
        C(l, F),
        de(L, l);
        const R = new Uint8Array(64);
        return R.set(B),
        R.set(L, 32),
        {
            publicKey: L,
            secretKey: R
        }
    }
    i.generateKeyPairFromSeed = ee;
    function Q(B) {
        const F = (0,
        e.randomBytes)(32, B)
          , L = ee(F);
        return (0,
        s.wipe)(F),
        L
    }
    i.generateKeyPair = Q;
    function k(B) {
        if (B.length !== i.SECRET_KEY_LENGTH)
            throw new Error(`ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(B.subarray(32))
    }
    i.extractPublicKeyFromSecretKey = k;
    const V = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function J(B, F) {
        let L, l, R, ae;
        for (l = 63; l >= 32; --l) {
            for (L = 0,
            R = l - 32,
            ae = l - 12; R < ae; ++R)
                F[R] += L - 16 * F[l] * V[R - (l - 32)],
                L = Math.floor((F[R] + 128) / 256),
                F[R] -= L * 256;
            F[R] += L,
            F[l] = 0
        }
        for (L = 0,
        R = 0; R < 32; R++)
            F[R] += L - (F[31] >> 4) * V[R],
            L = F[R] >> 8,
            F[R] &= 255;
        for (R = 0; R < 32; R++)
            F[R] -= L * V[R];
        for (l = 0; l < 32; l++)
            F[l + 1] += F[l] >> 8,
            B[l] = F[l] & 255
    }
    function re(B) {
        const F = new Float64Array(64);
        for (let L = 0; L < 64; L++)
            F[L] = B[L];
        for (let L = 0; L < 64; L++)
            B[L] = 0;
        J(B, F)
    }
    function _e(B, F) {
        const L = new Float64Array(64)
          , l = [o(), o(), o(), o()]
          , R = (0,
        t.hash)(B.subarray(0, 32));
        R[0] &= 248,
        R[31] &= 127,
        R[31] |= 64;
        const ae = new Uint8Array(64);
        ae.set(R.subarray(32), 32);
        const fe = new t.SHA512;
        fe.update(ae.subarray(32)),
        fe.update(F);
        const Ie = fe.digest();
        fe.clean(),
        re(Ie),
        C(l, Ie),
        de(ae, l),
        fe.reset(),
        fe.update(ae.subarray(0, 32)),
        fe.update(B.subarray(32)),
        fe.update(F);
        const Be = fe.digest();
        re(Be);
        for (let ke = 0; ke < 32; ke++)
            L[ke] = Ie[ke];
        for (let ke = 0; ke < 32; ke++)
            for (let Me = 0; Me < 32; Me++)
                L[ke + Me] += Be[ke] * R[Me];
        return J(ae.subarray(32), L),
        ae
    }
    i.sign = _e;
    function oe(B, F) {
        const L = o()
          , l = o()
          , R = o()
          , ae = o()
          , fe = o()
          , Ie = o()
          , Be = o();
        return T(B[2], f),
        O(B[1], F),
        _(R, B[1]),
        u(ae, R, y),
        E(R, R, B[2]),
        A(ae, B[2], ae),
        _(fe, ae),
        _(Ie, fe),
        u(Be, Ie, fe),
        u(L, Be, R),
        u(L, L, ae),
        W(L, L),
        u(L, L, R),
        u(L, L, ae),
        u(L, L, ae),
        u(B[0], L, ae),
        _(l, B[0]),
        u(l, l, ae),
        U(l, R) && u(B[0], B[0], I),
        _(l, B[0]),
        u(l, l, ae),
        U(l, R) ? -1 : (j(B[0]) === F[31] >> 7 && E(B[0], d, B[0]),
        u(B[3], B[0], B[1]),
        0)
    }
    function be(B, F, L) {
        const l = new Uint8Array(32)
          , R = [o(), o(), o(), o()]
          , ae = [o(), o(), o(), o()];
        if (L.length !== i.SIGNATURE_LENGTH)
            throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
        if (oe(ae, B))
            return !1;
        const fe = new t.SHA512;
        fe.update(L.subarray(0, 32)),
        fe.update(B),
        fe.update(F);
        const Ie = fe.digest();
        return re(Ie),
        b(R, ae, Ie),
        C(ae, L.subarray(32)),
        se(R, ae),
        de(l, R),
        !ie(L, l)
    }
    i.verify = be;
    function le(B) {
        let F = [o(), o(), o(), o()];
        if (oe(F, B))
            throw new Error("Ed25519: invalid public key");
        let L = o()
          , l = o()
          , R = F[1];
        A(L, f, R),
        E(l, f, R),
        G(l, l),
        u(L, L, l);
        let ae = new Uint8Array(32);
        return H(ae, L),
        ae
    }
    i.convertPublicKeyToX25519 = le;
    function me(B) {
        const F = (0,
        t.hash)(B.subarray(0, 32));
        F[0] &= 248,
        F[31] &= 127,
        F[31] |= 64;
        const L = new Uint8Array(F.subarray(0, 32));
        return (0,
        s.wipe)(F),
        L
    }
    i.convertSecretKeyToX25519 = me
}
)(zu);
const N3 = "EdDSA"
  , U3 = "JWT"
  , vp = "."
  , mp = "base64url"
  , L3 = "utf8"
  , $3 = "utf8"
  , M3 = ":"
  , j3 = "did"
  , q3 = "key"
  , Hf = "base58btc"
  , F3 = "z"
  , z3 = "K36"
  , B3 = 32;
function Qo(i) {
    return lr(_r(cn(i), L3), mp)
}
function wp(i) {
    const e = _r(z3, Hf)
      , t = F3 + lr(uu([e, i]), Hf);
    return [j3, q3, t].join(M3)
}
function H3(i) {
    return lr(i, mp)
}
function K3(i) {
    return _r([Qo(i.header), Qo(i.payload)].join(vp), $3)
}
function k3(i) {
    return [Qo(i.header), Qo(i.payload), H3(i.signature)].join(vp)
}
function Kf(i=Fn.randomBytes(B3)) {
    return zu.generateKeyPairFromSeed(i)
}
async function V3(i, e, t, s, o=ve.fromMiliseconds(Date.now())) {
    const c = {
        alg: N3,
        typ: U3
    }
      , d = wp(s.publicKey)
      , f = o + t
      , y = {
        iss: d,
        sub: i,
        aud: e,
        iat: o,
        exp: f
    }
      , g = K3({
        header: c,
        payload: y
    })
      , m = zu.sign(s.secretKey, g);
    return k3({
        header: c,
        payload: y,
        signature: m
    })
}
const G3 = "PARSE_ERROR"
  , W3 = "INVALID_REQUEST"
  , Y3 = "METHOD_NOT_FOUND"
  , J3 = "INVALID_PARAMS"
  , _p = "INTERNAL_ERROR"
  , Bu = "SERVER_ERROR"
  , Q3 = [-32700, -32600, -32601, -32602, -32603]
  , bs = {
    [G3]: {
        code: -32700,
        message: "Parse error"
    },
    [W3]: {
        code: -32600,
        message: "Invalid Request"
    },
    [Y3]: {
        code: -32601,
        message: "Method not found"
    },
    [J3]: {
        code: -32602,
        message: "Invalid params"
    },
    [_p]: {
        code: -32603,
        message: "Internal error"
    },
    [Bu]: {
        code: -32e3,
        message: "Server error"
    }
}
  , bp = Bu;
function X3(i) {
    return Q3.includes(i)
}
function kf(i) {
    return Object.keys(bs).includes(i) ? bs[i] : bs[bp]
}
function Z3(i) {
    const e = Object.values(bs).find(t=>t.code === i);
    return e || bs[bp]
}
function Ep(i, e, t) {
    return i.message.includes("getaddrinfo ENOTFOUND") || i.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : i
}
var Dp = {}, mi = {}, Vf;
function e6() {
    if (Vf)
        return mi;
    Vf = 1,
    Object.defineProperty(mi, "__esModule", {
        value: !0
    }),
    mi.isBrowserCryptoAvailable = mi.getSubtleCrypto = mi.getBrowerCrypto = void 0;
    function i() {
        return (Yr === null || Yr === void 0 ? void 0 : Yr.crypto) || (Yr === null || Yr === void 0 ? void 0 : Yr.msCrypto) || {}
    }
    mi.getBrowerCrypto = i;
    function e() {
        const s = i();
        return s.subtle || s.webkitSubtle
    }
    mi.getSubtleCrypto = e;
    function t() {
        return !!i() && !!e()
    }
    return mi.isBrowserCryptoAvailable = t,
    mi
}
var wi = {}, Gf;
function t6() {
    if (Gf)
        return wi;
    Gf = 1,
    Object.defineProperty(wi, "__esModule", {
        value: !0
    }),
    wi.isBrowser = wi.isNode = wi.isReactNative = void 0;
    function i() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    wi.isReactNative = i;
    function e() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    wi.isNode = e;
    function t() {
        return !i() && !e()
    }
    return wi.isBrowser = t,
    wi
}
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = si;
    e.__exportStar(e6(), i),
    e.__exportStar(t6(), i)
}
)(Dp);
function Hu(i=3) {
    const e = Date.now() * Math.pow(10, i)
      , t = Math.floor(Math.random() * Math.pow(10, i));
    return e + t
}
function Sp(i=6) {
    return BigInt(Hu(i))
}
function qn(i, e, t) {
    return {
        id: t || Hu(),
        jsonrpc: "2.0",
        method: i,
        params: e
    }
}
function oa(i, e) {
    return {
        id: i,
        jsonrpc: "2.0",
        result: e
    }
}
function aa(i, e, t) {
    return {
        id: i,
        jsonrpc: "2.0",
        error: r6(e, t)
    }
}
function r6(i, e) {
    return typeof i > "u" ? kf(_p) : (typeof i == "string" && (i = Object.assign(Object.assign({}, kf(Bu)), {
        message: i
    })),
    typeof e < "u" && (i.data = e),
    X3(i.code) && (i = Z3(i.code)),
    i)
}
class i6 {
}
class n6 extends i6 {
    constructor() {
        super()
    }
}
class s6 extends n6 {
    constructor(e) {
        super()
    }
}
const o6 = "^https?:"
  , a6 = "^wss?:";
function c6(i) {
    const e = i.match(new RegExp(/^\w+:/,"gi"));
    if (!(!e || !e.length))
        return e[0]
}
function Ip(i, e) {
    const t = c6(i);
    return typeof t > "u" ? !1 : new RegExp(e).test(t)
}
function Wf(i) {
    return Ip(i, o6)
}
function Yf(i) {
    return Ip(i, a6)
}
function u6(i) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(i)
}
function xp(i) {
    return typeof i == "object" && "id"in i && "jsonrpc"in i && i.jsonrpc === "2.0"
}
function Ku(i) {
    return xp(i) && "method"in i
}
function ca(i) {
    return xp(i) && (Di(i) || Wr(i))
}
function Di(i) {
    return "result"in i
}
function Wr(i) {
    return "error"in i
}
class Si extends s6 {
    constructor(e) {
        super(e),
        this.events = new Fr.EventEmitter,
        this.hasRegisteredEventListeners = !1,
        this.connection = this.setConnection(e),
        this.connection.connected && this.registerEventListeners()
    }
    async connect(e=this.connection) {
        await this.open(e)
    }
    async disconnect() {
        await this.close()
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async request(e, t) {
        return this.requestStrict(qn(e.method, e.params || [], e.id || Sp().toString()), t)
    }
    async requestStrict(e, t) {
        return new Promise(async(s,o)=>{
            if (!this.connection.connected)
                try {
                    await this.open()
                } catch (c) {
                    o(c)
                }
            this.events.on(`${e.id}`, c=>{
                Wr(c) ? o(c.error) : s(c.result)
            }
            );
            try {
                await this.connection.send(e, t)
            } catch (c) {
                o(c)
            }
        }
        )
    }
    setConnection(e=this.connection) {
        return e
    }
    onPayload(e) {
        this.events.emit("payload", e),
        ca(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
            type: e.method,
            data: e.params
        })
    }
    onClose(e) {
        e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)),
        this.events.emit("disconnect")
    }
    async open(e=this.connection) {
        this.connection === e && this.connection.connected || (this.connection.connected && this.close(),
        typeof e == "string" && (await this.connection.open(e),
        e = this.connection),
        this.connection = this.setConnection(e),
        await this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", e=>this.onPayload(e)),
        this.connection.on("close", e=>this.onClose(e)),
        this.connection.on("error", e=>this.events.emit("error", e)),
        this.connection.on("register_error", e=>this.onClose()),
        this.hasRegisteredEventListeners = !0)
    }
}
const h6 = ()=>typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws")
  , l6 = ()=>typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u"
  , Jf = i=>i.split("?")[0]
  , Qf = 10
  , f6 = h6();
let d6 = class {
    constructor(e) {
        if (this.url = e,
        this.events = new Fr.EventEmitter,
        this.registering = !1,
        !Yf(e))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        this.url = e
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async open(e=this.url) {
        await this.register(e)
    }
    async close() {
        return new Promise((e,t)=>{
            if (typeof this.socket > "u") {
                t(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = s=>{
                this.onClose(s),
                e()
            }
            ,
            this.socket.close()
        }
        )
    }
    async send(e) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(cn(e))
        } catch (t) {
            this.onError(e.id, t)
        }
    }
    register(e=this.url) {
        if (!Yf(e))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
            new Promise((s,o)=>{
                this.events.once("register_error", c=>{
                    this.resetMaxListeners(),
                    o(c)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.socket > "u")
                        return o(new Error("WebSocket connection is missing or invalid"));
                    s(this.socket)
                }
                )
            }
            )
        }
        return this.url = e,
        this.registering = !0,
        new Promise((t,s)=>{
            const o = new URLSearchParams(e).get("origin")
              , c = Dp.isReactNative() ? {
                headers: {
                    origin: o
                }
            } : {
                rejectUnauthorized: !u6(e)
            }
              , d = new f6(e,[],c);
            l6() ? d.onerror = f=>{
                const y = f;
                s(this.emitError(y.error))
            }
            : d.on("error", f=>{
                s(this.emitError(f))
            }
            ),
            d.onopen = ()=>{
                this.onOpen(d),
                t(d)
            }
        }
        )
    }
    onOpen(e) {
        e.onmessage = t=>this.onPayload(t),
        e.onclose = t=>this.onClose(t),
        this.socket = e,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose(e) {
        this.socket = void 0,
        this.registering = !1,
        this.events.emit("close", e)
    }
    onPayload(e) {
        if (typeof e.data > "u")
            return;
        const t = typeof e.data == "string" ? Ts(e.data) : e.data;
        this.events.emit("payload", t)
    }
    onError(e, t) {
        const s = this.parseError(t)
          , o = s.message || s.toString()
          , c = aa(e, o);
        this.events.emit("payload", c)
    }
    parseError(e, t=this.url) {
        return Ep(e, Jf(t), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Qf && this.events.setMaxListeners(Qf)
    }
    emitError(e) {
        const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Jf(this.url)}`));
        return this.events.emit("register_error", t),
        t
    }
}
;
var Xo = {
    exports: {}
};
Xo.exports;
(function(i, e) {
    var t = 200
      , s = "__lodash_hash_undefined__"
      , o = 1
      , c = 2
      , d = 9007199254740991
      , f = "[object Arguments]"
      , y = "[object Array]"
      , g = "[object AsyncFunction]"
      , m = "[object Boolean]"
      , D = "[object Date]"
      , I = "[object Error]"
      , T = "[object Function]"
      , P = "[object GeneratorFunction]"
      , z = "[object Map]"
      , H = "[object Number]"
      , ie = "[object Null]"
      , U = "[object Object]"
      , j = "[object Promise]"
      , O = "[object Proxy]"
      , A = "[object RegExp]"
      , E = "[object Set]"
      , u = "[object String]"
      , _ = "[object Symbol]"
      , G = "[object Undefined]"
      , W = "[object WeakMap]"
      , se = "[object ArrayBuffer]"
      , ue = "[object DataView]"
      , de = "[object Float32Array]"
      , b = "[object Float64Array]"
      , C = "[object Int8Array]"
      , ee = "[object Int16Array]"
      , Q = "[object Int32Array]"
      , k = "[object Uint8Array]"
      , V = "[object Uint8ClampedArray]"
      , J = "[object Uint16Array]"
      , re = "[object Uint32Array]"
      , _e = /[\\^$.*+?()[\]{}|]/g
      , oe = /^\[object .+?Constructor\]$/
      , be = /^(?:0|[1-9]\d*)$/
      , le = {};
    le[de] = le[b] = le[C] = le[ee] = le[Q] = le[k] = le[V] = le[J] = le[re] = !0,
    le[f] = le[y] = le[se] = le[m] = le[ue] = le[D] = le[I] = le[T] = le[z] = le[H] = le[U] = le[A] = le[E] = le[u] = le[W] = !1;
    var me = typeof Yr == "object" && Yr && Yr.Object === Object && Yr
      , B = typeof self == "object" && self && self.Object === Object && self
      , F = me || B || Function("return this")()
      , L = e && !e.nodeType && e
      , l = L && !0 && i && !i.nodeType && i
      , R = l && l.exports === L
      , ae = R && me.process
      , fe = function() {
        try {
            return ae && ae.binding && ae.binding("util")
        } catch {}
    }()
      , Ie = fe && fe.isTypedArray;
    function Be(S, $) {
        for (var te = -1, pe = S == null ? 0 : S.length, at = 0, Te = []; ++te < pe; ) {
            var ft = S[te];
            $(ft, te, S) && (Te[at++] = ft)
        }
        return Te
    }
    function ke(S, $) {
        for (var te = -1, pe = $.length, at = S.length; ++te < pe; )
            S[at + te] = $[te];
        return S
    }
    function Me(S, $) {
        for (var te = -1, pe = S == null ? 0 : S.length; ++te < pe; )
            if ($(S[te], te, S))
                return !0;
        return !1
    }
    function pt(S, $) {
        for (var te = -1, pe = Array(S); ++te < S; )
            pe[te] = $(te);
        return pe
    }
    function gt(S) {
        return function($) {
            return S($)
        }
    }
    function qe(S, $) {
        return S.has($)
    }
    function xe(S, $) {
        return S == null ? void 0 : S[$]
    }
    function Ne(S) {
        var $ = -1
          , te = Array(S.size);
        return S.forEach(function(pe, at) {
            te[++$] = [at, pe]
        }),
        te
    }
    function Ue(S, $) {
        return function(te) {
            return S($(te))
        }
    }
    function Fe(S) {
        var $ = -1
          , te = Array(S.size);
        return S.forEach(function(pe) {
            te[++$] = pe
        }),
        te
    }
    var Pe = Array.prototype
      , Le = Function.prototype
      , Se = Object.prototype
      , Ce = F["__core-js_shared__"]
      , He = Le.toString
      , Oe = Se.hasOwnProperty
      , Ve = function() {
        var S = /[^.]+$/.exec(Ce && Ce.keys && Ce.keys.IE_PROTO || "");
        return S ? "Symbol(src)_1." + S : ""
    }()
      , We = Se.toString
      , et = RegExp("^" + He.call(Oe).replace(_e, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , tt = R ? F.Buffer : void 0
      , Qe = F.Symbol
      , tr = F.Uint8Array
      , fr = Se.propertyIsEnumerable
      , Jr = Pe.splice
      , rr = Qe ? Qe.toStringTag : void 0
      , oi = Object.getOwnPropertySymbols
      , xi = tt ? tt.isBuffer : void 0
      , Bi = Ue(Object.keys, Object)
      , Dt = br(F, "DataView")
      , yt = br(F, "Map")
      , St = br(F, "Promise")
      , It = br(F, "Set")
      , bt = br(F, "WeakMap")
      , vt = br(Object, "create")
      , Lt = ci(Dt)
      , $t = ci(yt)
      , xt = ci(St)
      , Mt = ci(It)
      , Ot = ci(bt)
      , At = Qe ? Qe.prototype : void 0
      , Pt = At ? At.valueOf : void 0;
    function ht(S) {
        var $ = -1
          , te = S == null ? 0 : S.length;
        for (this.clear(); ++$ < te; ) {
            var pe = S[$];
            this.set(pe[0], pe[1])
        }
    }
    function jt() {
        this.__data__ = vt ? vt(null) : {},
        this.size = 0
    }
    function qt(S) {
        var $ = this.has(S) && delete this.__data__[S];
        return this.size -= $ ? 1 : 0,
        $
    }
    function la(S) {
        var $ = this.__data__;
        if (vt) {
            var te = $[S];
            return te === s ? void 0 : te
        }
        return Oe.call($, S) ? $[S] : void 0
    }
    function fa(S) {
        var $ = this.__data__;
        return vt ? $[S] !== void 0 : Oe.call($, S)
    }
    function da(S, $) {
        var te = this.__data__;
        return this.size += this.has(S) ? 0 : 1,
        te[S] = vt && $ === void 0 ? s : $,
        this
    }
    ht.prototype.clear = jt,
    ht.prototype.delete = qt,
    ht.prototype.get = la,
    ht.prototype.has = fa,
    ht.prototype.set = da;
    function Ar(S) {
        var $ = -1
          , te = S == null ? 0 : S.length;
        for (this.clear(); ++$ < te; ) {
            var pe = S[$];
            this.set(pe[0], pe[1])
        }
    }
    function pa() {
        this.__data__ = [],
        this.size = 0
    }
    function ga(S) {
        var $ = this.__data__
          , te = Hi($, S);
        if (te < 0)
            return !1;
        var pe = $.length - 1;
        return te == pe ? $.pop() : Jr.call($, te, 1),
        --this.size,
        !0
    }
    function ya(S) {
        var $ = this.__data__
          , te = Hi($, S);
        return te < 0 ? void 0 : $[te][1]
    }
    function va(S) {
        return Hi(this.__data__, S) > -1
    }
    function ma(S, $) {
        var te = this.__data__
          , pe = Hi(te, S);
        return pe < 0 ? (++this.size,
        te.push([S, $])) : te[pe][1] = $,
        this
    }
    Ar.prototype.clear = pa,
    Ar.prototype.delete = ga,
    Ar.prototype.get = ya,
    Ar.prototype.has = va,
    Ar.prototype.set = ma;
    function ai(S) {
        var $ = -1
          , te = S == null ? 0 : S.length;
        for (this.clear(); ++$ < te; ) {
            var pe = S[$];
            this.set(pe[0], pe[1])
        }
    }
    function pn() {
        this.size = 0,
        this.__data__ = {
            hash: new ht,
            map: new (yt || Ar),
            string: new ht
        }
    }
    function wa(S) {
        var $ = Oi(this, S).delete(S);
        return this.size -= $ ? 1 : 0,
        $
    }
    function gn(S) {
        return Oi(this, S).get(S)
    }
    function _a(S) {
        return Oi(this, S).has(S)
    }
    function ba(S, $) {
        var te = Oi(this, S)
          , pe = te.size;
        return te.set(S, $),
        this.size += te.size == pe ? 0 : 1,
        this
    }
    ai.prototype.clear = pn,
    ai.prototype.delete = wa,
    ai.prototype.get = gn,
    ai.prototype.has = _a,
    ai.prototype.set = ba;
    function yn(S) {
        var $ = -1
          , te = S == null ? 0 : S.length;
        for (this.__data__ = new ai; ++$ < te; )
            this.add(S[$])
    }
    function Ns(S) {
        return this.__data__.set(S, s),
        this
    }
    function Us(S) {
        return this.__data__.has(S)
    }
    yn.prototype.add = yn.prototype.push = Ns,
    yn.prototype.has = Us;
    function zr(S) {
        var $ = this.__data__ = new Ar(S);
        this.size = $.size
    }
    function Ea() {
        this.__data__ = new Ar,
        this.size = 0
    }
    function Da(S) {
        var $ = this.__data__
          , te = $.delete(S);
        return this.size = $.size,
        te
    }
    function Sa(S) {
        return this.__data__.get(S)
    }
    function Ia(S) {
        return this.__data__.has(S)
    }
    function Ls(S, $) {
        var te = this.__data__;
        if (te instanceof Ar) {
            var pe = te.__data__;
            if (!yt || pe.length < t - 1)
                return pe.push([S, $]),
                this.size = ++te.size,
                this;
            te = this.__data__ = new ai(pe)
        }
        return te.set(S, $),
        this.size = te.size,
        this
    }
    zr.prototype.clear = Ea,
    zr.prototype.delete = Da,
    zr.prototype.get = Sa,
    zr.prototype.has = Ia,
    zr.prototype.set = Ls;
    function $s(S, $) {
        var te = wn(S)
          , pe = !te && Ws(S)
          , at = !te && !pe && Wn(S)
          , Te = !te && !pe && !at && Qs(S)
          , ft = te || pe || at || Te
          , Ft = ft ? pt(S.length, String) : []
          , Xe = Ft.length;
        for (var ct in S)
            ($ || Oe.call(S, ct)) && !(ft && (ct == "length" || at && (ct == "offset" || ct == "parent") || Te && (ct == "buffer" || ct == "byteLength" || ct == "byteOffset") || Hs(ct, Xe))) && Ft.push(ct);
        return Ft
    }
    function Hi(S, $) {
        for (var te = S.length; te--; )
            if (Gs(S[te][0], $))
                return te;
        return -1
    }
    function Vn(S, $, te) {
        var pe = $(S);
        return wn(S) ? pe : ke(pe, te(S))
    }
    function Ki(S) {
        return S == null ? S === void 0 ? G : ie : rr && rr in Object(S) ? zs(S) : Pa(S)
    }
    function Gn(S) {
        return Vi(S) && Ki(S) == f
    }
    function ki(S, $, te, pe, at) {
        return S === $ ? !0 : S == null || $ == null || !Vi(S) && !Vi($) ? S !== S && $ !== $ : Ms(S, $, te, pe, ki, at)
    }
    function Ms(S, $, te, pe, at, Te) {
        var ft = wn(S)
          , Ft = wn($)
          , Xe = ft ? y : Qr(S)
          , ct = Ft ? y : Qr($);
        Xe = Xe == f ? U : Xe,
        ct = ct == f ? U : ct;
        var Tt = Xe == U
          , dr = ct == U
          , zt = Xe == ct;
        if (zt && Wn(S)) {
            if (!Wn($))
                return !1;
            ft = !0,
            Tt = !1
        }
        if (zt && !Tt)
            return Te || (Te = new zr),
            ft || Qs(S) ? vn(S, $, te, pe, at, Te) : Oa(S, $, Xe, te, pe, at, Te);
        if (!(te & o)) {
            var dt = Tt && Oe.call(S, "__wrapped__")
              , ir = dr && Oe.call($, "__wrapped__");
            if (dt || ir) {
                var Br = dt ? S.value() : S
                  , Tr = ir ? $.value() : $;
                return Te || (Te = new zr),
                at(Br, Tr, te, pe, Te)
            }
        }
        return zt ? (Te || (Te = new zr),
        Fs(S, $, te, pe, at, Te)) : !1
    }
    function xa(S) {
        if (!Js(S) || ks(S))
            return !1;
        var $ = _n(S) ? et : oe;
        return $.test(ci(S))
    }
    function js(S) {
        return Vi(S) && Ys(S.length) && !!le[Ki(S)]
    }
    function qs(S) {
        if (!Vs(S))
            return Bi(S);
        var $ = [];
        for (var te in Object(S))
            Oe.call(S, te) && te != "constructor" && $.push(te);
        return $
    }
    function vn(S, $, te, pe, at, Te) {
        var ft = te & o
          , Ft = S.length
          , Xe = $.length;
        if (Ft != Xe && !(ft && Xe > Ft))
            return !1;
        var ct = Te.get(S);
        if (ct && Te.get($))
            return ct == $;
        var Tt = -1
          , dr = !0
          , zt = te & c ? new yn : void 0;
        for (Te.set(S, $),
        Te.set($, S); ++Tt < Ft; ) {
            var dt = S[Tt]
              , ir = $[Tt];
            if (pe)
                var Br = ft ? pe(ir, dt, Tt, $, S, Te) : pe(dt, ir, Tt, S, $, Te);
            if (Br !== void 0) {
                if (Br)
                    continue;
                dr = !1;
                break
            }
            if (zt) {
                if (!Me($, function(Tr, Xr) {
                    if (!qe(zt, Xr) && (dt === Tr || at(dt, Tr, te, pe, Te)))
                        return zt.push(Xr)
                })) {
                    dr = !1;
                    break
                }
            } else if (!(dt === ir || at(dt, ir, te, pe, Te))) {
                dr = !1;
                break
            }
        }
        return Te.delete(S),
        Te.delete($),
        dr
    }
    function Oa(S, $, te, pe, at, Te, ft) {
        switch (te) {
        case ue:
            if (S.byteLength != $.byteLength || S.byteOffset != $.byteOffset)
                return !1;
            S = S.buffer,
            $ = $.buffer;
        case se:
            return !(S.byteLength != $.byteLength || !Te(new tr(S), new tr($)));
        case m:
        case D:
        case H:
            return Gs(+S, +$);
        case I:
            return S.name == $.name && S.message == $.message;
        case A:
        case u:
            return S == $ + "";
        case z:
            var Ft = Ne;
        case E:
            var Xe = pe & o;
            if (Ft || (Ft = Fe),
            S.size != $.size && !Xe)
                return !1;
            var ct = ft.get(S);
            if (ct)
                return ct == $;
            pe |= c,
            ft.set(S, $);
            var Tt = vn(Ft(S), Ft($), pe, at, Te, ft);
            return ft.delete(S),
            Tt;
        case _:
            if (Pt)
                return Pt.call(S) == Pt.call($)
        }
        return !1
    }
    function Fs(S, $, te, pe, at, Te) {
        var ft = te & o
          , Ft = mn(S)
          , Xe = Ft.length
          , ct = mn($)
          , Tt = ct.length;
        if (Xe != Tt && !ft)
            return !1;
        for (var dr = Xe; dr--; ) {
            var zt = Ft[dr];
            if (!(ft ? zt in $ : Oe.call($, zt)))
                return !1
        }
        var dt = Te.get(S);
        if (dt && Te.get($))
            return dt == $;
        var ir = !0;
        Te.set(S, $),
        Te.set($, S);
        for (var Br = ft; ++dr < Xe; ) {
            zt = Ft[dr];
            var Tr = S[zt]
              , Xr = $[zt];
            if (pe)
                var Yn = ft ? pe(Xr, Tr, zt, $, S, Te) : pe(Tr, Xr, zt, S, $, Te);
            if (!(Yn === void 0 ? Tr === Xr || at(Tr, Xr, te, pe, Te) : Yn)) {
                ir = !1;
                break
            }
            Br || (Br = zt == "constructor")
        }
        if (ir && !Br) {
            var Gi = S.constructor
              , Kt = $.constructor;
            Gi != Kt && "constructor"in S && "constructor"in $ && !(typeof Gi == "function" && Gi instanceof Gi && typeof Kt == "function" && Kt instanceof Kt) && (ir = !1)
        }
        return Te.delete(S),
        Te.delete($),
        ir
    }
    function mn(S) {
        return Vn(S, Ta, Bs)
    }
    function Oi(S, $) {
        var te = S.__data__;
        return Ks($) ? te[typeof $ == "string" ? "string" : "hash"] : te.map
    }
    function br(S, $) {
        var te = xe(S, $);
        return xa(te) ? te : void 0
    }
    function zs(S) {
        var $ = Oe.call(S, rr)
          , te = S[rr];
        try {
            S[rr] = void 0;
            var pe = !0
        } catch {}
        var at = We.call(S);
        return pe && ($ ? S[rr] = te : delete S[rr]),
        at
    }
    var Bs = oi ? function(S) {
        return S == null ? [] : (S = Object(S),
        Be(oi(S), function($) {
            return fr.call(S, $)
        }))
    }
    : ot
      , Qr = Ki;
    (Dt && Qr(new Dt(new ArrayBuffer(1))) != ue || yt && Qr(new yt) != z || St && Qr(St.resolve()) != j || It && Qr(new It) != E || bt && Qr(new bt) != W) && (Qr = function(S) {
        var $ = Ki(S)
          , te = $ == U ? S.constructor : void 0
          , pe = te ? ci(te) : "";
        if (pe)
            switch (pe) {
            case Lt:
                return ue;
            case $t:
                return z;
            case xt:
                return j;
            case Mt:
                return E;
            case Ot:
                return W
            }
        return $
    }
    );
    function Hs(S, $) {
        return $ = $ ?? d,
        !!$ && (typeof S == "number" || be.test(S)) && S > -1 && S % 1 == 0 && S < $
    }
    function Ks(S) {
        var $ = typeof S;
        return $ == "string" || $ == "number" || $ == "symbol" || $ == "boolean" ? S !== "__proto__" : S === null
    }
    function ks(S) {
        return !!Ve && Ve in S
    }
    function Vs(S) {
        var $ = S && S.constructor
          , te = typeof $ == "function" && $.prototype || Se;
        return S === te
    }
    function Pa(S) {
        return We.call(S)
    }
    function ci(S) {
        if (S != null) {
            try {
                return He.call(S)
            } catch {}
            try {
                return S + ""
            } catch {}
        }
        return ""
    }
    function Gs(S, $) {
        return S === $ || S !== S && $ !== $
    }
    var Ws = Gn(function() {
        return arguments
    }()) ? Gn : function(S) {
        return Vi(S) && Oe.call(S, "callee") && !fr.call(S, "callee")
    }
      , wn = Array.isArray;
    function Ca(S) {
        return S != null && Ys(S.length) && !_n(S)
    }
    var Wn = xi || st;
    function Aa(S, $) {
        return ki(S, $)
    }
    function _n(S) {
        if (!Js(S))
            return !1;
        var $ = Ki(S);
        return $ == T || $ == P || $ == g || $ == O
    }
    function Ys(S) {
        return typeof S == "number" && S > -1 && S % 1 == 0 && S <= d
    }
    function Js(S) {
        var $ = typeof S;
        return S != null && ($ == "object" || $ == "function")
    }
    function Vi(S) {
        return S != null && typeof S == "object"
    }
    var Qs = Ie ? gt(Ie) : js;
    function Ta(S) {
        return Ca(S) ? $s(S) : qs(S)
    }
    function ot() {
        return []
    }
    function st() {
        return !1
    }
    i.exports = Aa
}
)(Xo, Xo.exports);
var p6 = Xo.exports;
const g6 = Ou(p6);
function y6(i, e) {
    return e = e || {},
    new Promise(function(t, s) {
        var o = new XMLHttpRequest
          , c = []
          , d = []
          , f = {}
          , y = function() {
            return {
                ok: (o.status / 100 | 0) == 2,
                statusText: o.statusText,
                status: o.status,
                url: o.responseURL,
                text: function() {
                    return Promise.resolve(o.responseText)
                },
                json: function() {
                    return Promise.resolve(o.responseText).then(JSON.parse)
                },
                blob: function() {
                    return Promise.resolve(new Blob([o.response]))
                },
                clone: y,
                headers: {
                    keys: function() {
                        return c
                    },
                    entries: function() {
                        return d
                    },
                    get: function(m) {
                        return f[m.toLowerCase()]
                    },
                    has: function(m) {
                        return m.toLowerCase()in f
                    }
                }
            }
        };
        for (var g in o.open(e.method || "get", i, !0),
        o.onload = function() {
            o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(m, D, I) {
                c.push(D = D.toLowerCase()),
                d.push([D, I]),
                f[D] = f[D] ? f[D] + "," + I : I
            }),
            t(y())
        }
        ,
        o.onerror = s,
        o.withCredentials = e.credentials == "include",
        e.headers)
            o.setRequestHeader(g, e.headers[g]);
        o.send(e.body || null)
    }
    )
}
const v6 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: y6
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Xf = xu(v6);
var m6 = self.fetch || (self.fetch = Xf.default || Xf);
const w6 = Ou(m6);
var _6 = {};
function b6(i, e) {
    if (i.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
        t[s] = 255;
    for (var o = 0; o < i.length; o++) {
        var c = i.charAt(o)
          , d = c.charCodeAt(0);
        if (t[d] !== 255)
            throw new TypeError(c + " is ambiguous");
        t[d] = o
    }
    var f = i.length
      , y = i.charAt(0)
      , g = Math.log(f) / Math.log(256)
      , m = Math.log(256) / Math.log(f);
    function D(P) {
        if (P instanceof Uint8Array || (ArrayBuffer.isView(P) ? P = new Uint8Array(P.buffer,P.byteOffset,P.byteLength) : Array.isArray(P) && (P = Uint8Array.from(P))),
        !(P instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (P.length === 0)
            return "";
        for (var z = 0, H = 0, ie = 0, U = P.length; ie !== U && P[ie] === 0; )
            ie++,
            z++;
        for (var j = (U - ie) * m + 1 >>> 0, O = new Uint8Array(j); ie !== U; ) {
            for (var A = P[ie], E = 0, u = j - 1; (A !== 0 || E < H) && u !== -1; u--,
            E++)
                A += 256 * O[u] >>> 0,
                O[u] = A % f >>> 0,
                A = A / f >>> 0;
            if (A !== 0)
                throw new Error("Non-zero carry");
            H = E,
            ie++
        }
        for (var _ = j - H; _ !== j && O[_] === 0; )
            _++;
        for (var G = y.repeat(z); _ < j; ++_)
            G += i.charAt(O[_]);
        return G
    }
    function I(P) {
        if (typeof P != "string")
            throw new TypeError("Expected String");
        if (P.length === 0)
            return new Uint8Array;
        var z = 0;
        if (P[z] !== " ") {
            for (var H = 0, ie = 0; P[z] === y; )
                H++,
                z++;
            for (var U = (P.length - z) * g + 1 >>> 0, j = new Uint8Array(U); P[z]; ) {
                var O = t[P.charCodeAt(z)];
                if (O === 255)
                    return;
                for (var A = 0, E = U - 1; (O !== 0 || A < ie) && E !== -1; E--,
                A++)
                    O += f * j[E] >>> 0,
                    j[E] = O % 256 >>> 0,
                    O = O / 256 >>> 0;
                if (O !== 0)
                    throw new Error("Non-zero carry");
                ie = A,
                z++
            }
            if (P[z] !== " ") {
                for (var u = U - ie; u !== U && j[u] === 0; )
                    u++;
                for (var _ = new Uint8Array(H + (U - u)), G = H; u !== U; )
                    _[G++] = j[u++];
                return _
            }
        }
    }
    function T(P) {
        var z = I(P);
        if (z)
            return z;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: D,
        decodeUnsafe: I,
        decode: T
    }
}
var E6 = b6
  , D6 = E6;
const Op = i=>{
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
        return i;
    if (i instanceof ArrayBuffer)
        return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
        return new Uint8Array(i.buffer,i.byteOffset,i.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , S6 = i=>new TextEncoder().encode(i)
  , I6 = i=>new TextDecoder().decode(i);
class x6 {
    constructor(e, t, s) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s
    }
    encode(e) {
        if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class O6 {
    constructor(e, t, s) {
        if (this.name = e,
        this.prefix = t,
        t.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
        this.baseDecode = s
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(e) {
        return Pp(this, e)
    }
}
class P6 {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Pp(this, e)
    }
    decode(e) {
        const t = e[0]
          , s = this.decoders[t];
        if (s)
            return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Pp = (i,e)=>new P6({
    ...i.decoders || {
        [i.prefix]: i
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class C6 {
    constructor(e, t, s, o) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = s,
        this.baseDecode = o,
        this.encoder = new x6(e,t,s),
        this.decoder = new O6(e,t,o)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const ua = ({name: i, prefix: e, encode: t, decode: s})=>new C6(i,e,t,s)
  , Rs = ({prefix: i, name: e, alphabet: t})=>{
    const {encode: s, decode: o} = D6(t, e);
    return ua({
        prefix: i,
        name: e,
        encode: s,
        decode: c=>Op(o(c))
    })
}
  , A6 = (i,e,t,s)=>{
    const o = {};
    for (let m = 0; m < e.length; ++m)
        o[e[m]] = m;
    let c = i.length;
    for (; i[c - 1] === "="; )
        --c;
    const d = new Uint8Array(c * t / 8 | 0);
    let f = 0
      , y = 0
      , g = 0;
    for (let m = 0; m < c; ++m) {
        const D = o[i[m]];
        if (D === void 0)
            throw new SyntaxError(`Non-${s} character`);
        y = y << t | D,
        f += t,
        f >= 8 && (f -= 8,
        d[g++] = 255 & y >> f)
    }
    if (f >= t || 255 & y << 8 - f)
        throw new SyntaxError("Unexpected end of data");
    return d
}
  , T6 = (i,e,t)=>{
    const s = e[e.length - 1] === "="
      , o = (1 << t) - 1;
    let c = ""
      , d = 0
      , f = 0;
    for (let y = 0; y < i.length; ++y)
        for (f = f << 8 | i[y],
        d += 8; d > t; )
            d -= t,
            c += e[o & f >> d];
    if (d && (c += e[o & f << t - d]),
    s)
        for (; c.length * t & 7; )
            c += "=";
    return c
}
  , Jt = ({name: i, prefix: e, bitsPerChar: t, alphabet: s})=>ua({
    prefix: e,
    name: i,
    encode(o) {
        return T6(o, s, t)
    },
    decode(o) {
        return A6(o, s, t, i)
    }
})
  , R6 = ua({
    prefix: "\0",
    name: "identity",
    encode: i=>I6(i),
    decode: i=>S6(i)
});
var N6 = Object.freeze({
    __proto__: null,
    identity: R6
});
const U6 = Jt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var L6 = Object.freeze({
    __proto__: null,
    base2: U6
});
const $6 = Jt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var M6 = Object.freeze({
    __proto__: null,
    base8: $6
});
const j6 = Rs({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var q6 = Object.freeze({
    __proto__: null,
    base10: j6
});
const F6 = Jt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , z6 = Jt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var B6 = Object.freeze({
    __proto__: null,
    base16: F6,
    base16upper: z6
});
const H6 = Jt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , K6 = Jt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , k6 = Jt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , V6 = Jt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , G6 = Jt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , W6 = Jt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , Y6 = Jt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , J6 = Jt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , Q6 = Jt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var X6 = Object.freeze({
    __proto__: null,
    base32: H6,
    base32upper: K6,
    base32pad: k6,
    base32padupper: V6,
    base32hex: G6,
    base32hexupper: W6,
    base32hexpad: Y6,
    base32hexpadupper: J6,
    base32z: Q6
});
const Z6 = Rs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , eS = Rs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var tS = Object.freeze({
    __proto__: null,
    base36: Z6,
    base36upper: eS
});
const rS = Rs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , iS = Rs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var nS = Object.freeze({
    __proto__: null,
    base58btc: rS,
    base58flickr: iS
});
const sS = Jt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , oS = Jt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , aS = Jt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , cS = Jt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var uS = Object.freeze({
    __proto__: null,
    base64: sS,
    base64pad: oS,
    base64url: aS,
    base64urlpad: cS
});
const Cp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , hS = Cp.reduce((i,e,t)=>(i[t] = e,
i), [])
  , lS = Cp.reduce((i,e,t)=>(i[e.codePointAt(0)] = t,
i), []);
function fS(i) {
    return i.reduce((e,t)=>(e += hS[t],
    e), "")
}
function dS(i) {
    const e = [];
    for (const t of i) {
        const s = lS[t.codePointAt(0)];
        if (s === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s)
    }
    return new Uint8Array(e)
}
const pS = ua({
    prefix: "🚀",
    name: "base256emoji",
    encode: fS,
    decode: dS
});
var gS = Object.freeze({
    __proto__: null,
    base256emoji: pS
})
  , yS = Ap
  , Zf = 128
  , vS = 127
  , mS = ~vS
  , wS = Math.pow(2, 31);
function Ap(i, e, t) {
    e = e || [],
    t = t || 0;
    for (var s = t; i >= wS; )
        e[t++] = i & 255 | Zf,
        i /= 128;
    for (; i & mS; )
        e[t++] = i & 255 | Zf,
        i >>>= 7;
    return e[t] = i | 0,
    Ap.bytes = t - s + 1,
    e
}
var _S = wu
  , bS = 128
  , ed = 127;
function wu(i, s) {
    var t = 0, s = s || 0, o = 0, c = s, d, f = i.length;
    do {
        if (c >= f)
            throw wu.bytes = 0,
            new RangeError("Could not decode varint");
        d = i[c++],
        t += o < 28 ? (d & ed) << o : (d & ed) * Math.pow(2, o),
        o += 7
    } while (d >= bS);
    return wu.bytes = c - s,
    t
}
var ES = Math.pow(2, 7)
  , DS = Math.pow(2, 14)
  , SS = Math.pow(2, 21)
  , IS = Math.pow(2, 28)
  , xS = Math.pow(2, 35)
  , OS = Math.pow(2, 42)
  , PS = Math.pow(2, 49)
  , CS = Math.pow(2, 56)
  , AS = Math.pow(2, 63)
  , TS = function(i) {
    return i < ES ? 1 : i < DS ? 2 : i < SS ? 3 : i < IS ? 4 : i < xS ? 5 : i < OS ? 6 : i < PS ? 7 : i < CS ? 8 : i < AS ? 9 : 10
}
  , RS = {
    encode: yS,
    decode: _S,
    encodingLength: TS
}
  , Tp = RS;
const td = (i,e,t=0)=>(Tp.encode(i, e, t),
e)
  , rd = i=>Tp.encodingLength(i)
  , _u = (i,e)=>{
    const t = e.byteLength
      , s = rd(i)
      , o = s + rd(t)
      , c = new Uint8Array(o + t);
    return td(i, c, 0),
    td(t, c, s),
    c.set(e, o),
    new NS(i,t,e,c)
}
;
class NS {
    constructor(e, t, s, o) {
        this.code = e,
        this.size = t,
        this.digest = s,
        this.bytes = o
    }
}
const Rp = ({name: i, code: e, encode: t})=>new US(i,e,t);
class US {
    constructor(e, t, s) {
        this.name = e,
        this.code = t,
        this.encode = s
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? _u(this.code, t) : t.then(s=>_u(this.code, s))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
const Np = i=>async e=>new Uint8Array(await crypto.subtle.digest(i, e))
  , LS = Rp({
    name: "sha2-256",
    code: 18,
    encode: Np("SHA-256")
})
  , $S = Rp({
    name: "sha2-512",
    code: 19,
    encode: Np("SHA-512")
});
var MS = Object.freeze({
    __proto__: null,
    sha256: LS,
    sha512: $S
});
const Up = 0
  , jS = "identity"
  , Lp = Op
  , qS = i=>_u(Up, Lp(i))
  , FS = {
    code: Up,
    name: jS,
    encode: Lp,
    digest: qS
};
var zS = Object.freeze({
    __proto__: null,
    identity: FS
});
new TextEncoder,
new TextDecoder;
const id = {
    ...N6,
    ...L6,
    ...M6,
    ...q6,
    ...B6,
    ...X6,
    ...tS,
    ...nS,
    ...uS,
    ...gS
};
({
    ...MS,
    ...zS
});
function $p(i) {
    return globalThis.Buffer != null ? new Uint8Array(i.buffer,i.byteOffset,i.byteLength) : i
}
function BS(i=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? $p(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i)
}
function Mp(i, e, t, s) {
    return {
        name: i,
        prefix: e,
        encoder: {
            name: i,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    }
}
const nd = Mp("utf8", "u", i=>"u" + new TextDecoder("utf8").decode(i), i=>new TextEncoder().encode(i.substring(1)))
  , Yc = Mp("ascii", "a", i=>{
    let e = "a";
    for (let t = 0; t < i.length; t++)
        e += String.fromCharCode(i[t]);
    return e
}
, i=>{
    i = i.substring(1);
    const e = BS(i.length);
    for (let t = 0; t < i.length; t++)
        e[t] = i.charCodeAt(t);
    return e
}
)
  , HS = {
    utf8: nd,
    "utf-8": nd,
    hex: id.base16,
    latin1: Yc,
    ascii: Yc,
    binary: Yc,
    ...id
};
function KS(i, e="utf8") {
    const t = HS[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? $p(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`)
}
const jp = "wc"
  , kS = 2
  , ku = "core"
  , ji = `${jp}@2:${ku}:`
  , VS = {
    name: ku,
    logger: "error"
}
  , GS = {
    database: ":memory:"
}
  , WS = "crypto"
  , sd = "client_ed25519_seed"
  , YS = ve.ONE_DAY
  , JS = "keychain"
  , QS = "0.3"
  , XS = "messages"
  , ZS = "0.3"
  , e2 = ve.SIX_HOURS
  , t2 = "publisher"
  , qp = "irn"
  , r2 = "error"
  , Fp = "wss://relay.walletconnect.com"
  , od = "wss://relay.walletconnect.org"
  , i2 = "relayer"
  , er = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , n2 = "_subscription"
  , _i = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , s2 = ve.ONE_SECOND
  , o2 = "2.11.1"
  , a2 = 1e4
  , c2 = "0.3"
  , u2 = "WALLETCONNECT_CLIENT_ID"
  , Gr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}
  , h2 = "subscription"
  , l2 = "0.3"
  , f2 = ve.FIVE_SECONDS * 1e3
  , d2 = "pairing"
  , p2 = "0.3"
  , gs = {
    wc_pairingDelete: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , ws = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , ii = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , g2 = "history"
  , y2 = "0.3"
  , v2 = "expirer"
  , qr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , m2 = "0.3"
  , Jc = "verify-api"
  , Mn = "https://verify.walletconnect.com"
  , bu = "https://verify.walletconnect.org"
  , w2 = [Mn, bu]
  , _2 = "echo"
  , b2 = "https://echo.walletconnect.com";
class E2 {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        this.keychain = new Map,
        this.name = JS,
        this.version = QS,
        this.initialized = !1,
        this.storagePrefix = ji,
        this.init = async()=>{
            if (!this.initialized) {
                const s = await this.getKeyChain();
                typeof s < "u" && (this.keychain = s),
                this.initialized = !0
            }
        }
        ,
        this.has = s=>(this.isInitialized(),
        this.keychain.has(s)),
        this.set = async(s,o)=>{
            this.isInitialized(),
            this.keychain.set(s, o),
            await this.persist()
        }
        ,
        this.get = s=>{
            this.isInitialized();
            const o = this.keychain.get(s);
            if (typeof o > "u") {
                const {message: c} = ce("NO_MATCHING_KEY", `${this.name}: ${s}`);
                throw new Error(c)
            }
            return o
        }
        ,
        this.del = async s=>{
            this.isInitialized(),
            this.keychain.delete(s),
            await this.persist()
        }
        ,
        this.core = e,
        this.logger = Je.generateChildLogger(t, this.name)
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, sp(e))
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? op(e) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class D2 {
    constructor(e, t, s) {
        this.core = e,
        this.logger = t,
        this.name = WS,
        this.initialized = !1,
        this.init = async()=>{
            this.initialized || (await this.keychain.init(),
            this.initialized = !0)
        }
        ,
        this.hasKeys = o=>(this.isInitialized(),
        this.keychain.has(o)),
        this.getClientId = async()=>{
            this.isInitialized();
            const o = await this.getClientSeed()
              , c = Kf(o);
            return wp(c.publicKey)
        }
        ,
        this.generateKeyPair = ()=>{
            this.isInitialized();
            const o = wE();
            return this.setPrivateKey(o.publicKey, o.privateKey)
        }
        ,
        this.signJWT = async o=>{
            this.isInitialized();
            const c = await this.getClientSeed()
              , d = Kf(c)
              , f = yu();
            return await V3(f, o, YS, d)
        }
        ,
        this.generateSharedKey = (o,c,d)=>{
            this.isInitialized();
            const f = this.getPrivateKey(o)
              , y = _E(f, c);
            return this.setSymKey(y, d)
        }
        ,
        this.setSymKey = async(o,c)=>{
            this.isInitialized();
            const d = c || bE(o);
            return await this.keychain.set(d, o),
            d
        }
        ,
        this.deleteKeyPair = async o=>{
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.deleteSymKey = async o=>{
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.encode = async(o,c,d)=>{
            this.isInitialized();
            const f = np(d)
              , y = cn(c);
            if (mf(f)) {
                const I = f.senderPublicKey
                  , T = f.receiverPublicKey;
                o = await this.generateSharedKey(I, T)
            }
            const g = this.getSymKey(o)
              , {type: m, senderPublicKey: D} = f;
            return DE({
                type: m,
                symKey: g,
                message: y,
                senderPublicKey: D
            })
        }
        ,
        this.decode = async(o,c,d)=>{
            this.isInitialized();
            const f = xE(c, d);
            if (mf(f)) {
                const y = f.receiverPublicKey
                  , g = f.senderPublicKey;
                o = await this.generateSharedKey(y, g)
            }
            try {
                const y = this.getSymKey(o)
                  , g = SE({
                    symKey: y,
                    encoded: c
                });
                return Ts(g)
            } catch (y) {
                this.logger.error(`Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`),
                this.logger.error(y)
            }
        }
        ,
        this.getPayloadType = o=>{
            const c = Yo(o);
            return Ps(c.type)
        }
        ,
        this.getPayloadSenderPublicKey = o=>{
            const c = Yo(o);
            return c.senderPublicKey ? lr(c.senderPublicKey, hr) : void 0
        }
        ,
        this.core = e,
        this.logger = Je.generateChildLogger(t, this.name),
        this.keychain = s || new E2(this.core,this.logger)
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t),
        e
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(sd)
        } catch {
            e = yu(),
            await this.keychain.set(sd, e)
        }
        return KS(e, "base16")
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class S2 extends D3 {
    constructor(e, t) {
        super(e, t),
        this.logger = e,
        this.core = t,
        this.messages = new Map,
        this.name = XS,
        this.version = ZS,
        this.initialized = !1,
        this.storagePrefix = ji,
        this.init = async()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const s = await this.getRelayerMessages();
                    typeof s < "u" && (this.messages = s),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (s) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(s)
                } finally {
                    this.initialized = !0
                }
            }
        }
        ,
        this.set = async(s,o)=>{
            this.isInitialized();
            const c = jn(o);
            let d = this.messages.get(s);
            return typeof d > "u" && (d = {}),
            typeof d[c] < "u" || (d[c] = o,
            this.messages.set(s, d),
            await this.persist()),
            c
        }
        ,
        this.get = s=>{
            this.isInitialized();
            let o = this.messages.get(s);
            return typeof o > "u" && (o = {}),
            o
        }
        ,
        this.has = (s,o)=>{
            this.isInitialized();
            const c = this.get(s)
              , d = jn(o);
            return typeof c[d] < "u"
        }
        ,
        this.del = async s=>{
            this.isInitialized(),
            this.messages.delete(s),
            await this.persist()
        }
        ,
        this.logger = Je.generateChildLogger(e, this.name),
        this.core = t
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, sp(e))
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? op(e) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class I2 extends S3 {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        this.events = new Fr.EventEmitter,
        this.name = t2,
        this.queue = new Map,
        this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS * 2),
        this.needsTransportRestart = !1,
        this.publish = async(s,o,c)=>{
            var d;
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: s,
                    message: o,
                    opts: c
                }
            });
            try {
                const f = (c == null ? void 0 : c.ttl) || e2
                  , y = vu(c)
                  , g = (c == null ? void 0 : c.prompt) || !1
                  , m = (c == null ? void 0 : c.tag) || 0
                  , D = (c == null ? void 0 : c.id) || Sp().toString()
                  , I = {
                    topic: s,
                    message: o,
                    opts: {
                        ttl: f,
                        relay: y,
                        prompt: g,
                        tag: m,
                        id: D
                    }
                }
                  , T = setTimeout(()=>this.queue.set(D, I), this.publishTimeout);
                try {
                    await await Ss(this.rpcPublish(s, o, f, y, g, m, D), this.publishTimeout, `Failed to publish payload, please try again. id:${D} tag:${m}`),
                    this.removeRequestFromQueue(D),
                    this.relayer.events.emit(er.publish, I)
                } catch (P) {
                    if (this.logger.debug("Publishing Payload stalled"),
                    this.needsTransportRestart = !0,
                    (d = c == null ? void 0 : c.internal) != null && d.throwOnFailedPublish)
                        throw this.removeRequestFromQueue(D),
                        P;
                    return
                } finally {
                    clearTimeout(T)
                }
                this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: s,
                        message: o,
                        opts: c
                    }
                })
            } catch (f) {
                throw this.logger.debug("Failed to Publish Payload"),
                this.logger.error(f),
                f
            }
        }
        ,
        this.on = (s,o)=>{
            this.events.on(s, o)
        }
        ,
        this.once = (s,o)=>{
            this.events.once(s, o)
        }
        ,
        this.off = (s,o)=>{
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s,o)=>{
            this.events.removeListener(s, o)
        }
        ,
        this.relayer = e,
        this.logger = Je.generateChildLogger(t, this.name),
        this.registerEventListeners()
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    rpcPublish(e, t, s, o, c, d, f) {
        var y, g, m, D;
        const I = {
            method: Ko(o.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: s,
                prompt: c,
                tag: d
            },
            id: f
        };
        return ur((y = I.params) == null ? void 0 : y.prompt) && ((g = I.params) == null || delete g.prompt),
        ur((m = I.params) == null ? void 0 : m.tag) && ((D = I.params) == null || delete D.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: I
        }),
        this.relayer.request(I)
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach(async e=>{
            const {topic: t, message: s, opts: o} = e;
            await this.publish(t, s, o)
        }
        )
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(er.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(er.message_ack, e=>{
            this.removeRequestFromQueue(e.id.toString())
        }
        )
    }
}
class x2 {
    constructor() {
        this.map = new Map,
        this.set = (e,t)=>{
            const s = this.get(e);
            this.exists(e, t) || this.map.set(e, [...s, t])
        }
        ,
        this.get = e=>this.map.get(e) || [],
        this.exists = (e,t)=>this.get(e).includes(t),
        this.delete = (e,t)=>{
            if (typeof t > "u") {
                this.map.delete(e);
                return
            }
            if (!this.map.has(e))
                return;
            const s = this.get(e);
            if (!this.exists(e, t))
                return;
            const o = s.filter(c=>c !== t);
            if (!o.length) {
                this.map.delete(e);
                return
            }
            this.map.set(e, o)
        }
        ,
        this.clear = ()=>{
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var O2 = Object.defineProperty
  , P2 = Object.defineProperties
  , C2 = Object.getOwnPropertyDescriptors
  , ad = Object.getOwnPropertySymbols
  , A2 = Object.prototype.hasOwnProperty
  , T2 = Object.prototype.propertyIsEnumerable
  , cd = (i,e,t)=>e in i ? O2(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , ys = (i,e)=>{
    for (var t in e || (e = {}))
        A2.call(e, t) && cd(i, t, e[t]);
    if (ad)
        for (var t of ad(e))
            T2.call(e, t) && cd(i, t, e[t]);
    return i
}
  , Qc = (i,e)=>P2(i, C2(e));
class R2 extends O3 {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        this.subscriptions = new Map,
        this.topicMap = new x2,
        this.events = new Fr.EventEmitter,
        this.name = h2,
        this.version = l2,
        this.pending = new Map,
        this.cached = [],
        this.initialized = !1,
        this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
        this.pollingInterval = 20,
        this.storagePrefix = ji,
        this.subscribeTimeout = 1e4,
        this.restartInProgress = !1,
        this.batchSubscribeTopicsLimit = 500,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            this.clientId = await this.relayer.core.crypto.getClientId())
        }
        ,
        this.subscribe = async(s,o)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: s,
                    opts: o
                }
            });
            try {
                const c = vu(o)
                  , d = {
                    topic: s,
                    relay: c
                };
                this.pending.set(s, d);
                const f = await this.rpcSubscribe(s, c);
                return this.onSubscribe(f, d),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: s,
                        opts: o
                    }
                }),
                f
            } catch (c) {
                throw this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(c),
                c
            }
        }
        ,
        this.unsubscribe = async(s,o)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            typeof (o == null ? void 0 : o.id) < "u" ? await this.unsubscribeById(s, o.id, o) : await this.unsubscribeByTopic(s, o)
        }
        ,
        this.isSubscribed = async s=>{
            if (this.topics.includes(s))
                return !0;
            const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
            return await new Promise((c,d)=>{
                const f = new ve.Watch;
                f.start(o);
                const y = setInterval(()=>{
                    !this.pending.has(s) && this.topics.includes(s) && (clearInterval(y),
                    f.stop(o),
                    c(!0)),
                    f.elapsed(o) >= f2 && (clearInterval(y),
                    f.stop(o),
                    d(new Error("Subscription resolution timeout")))
                }
                , this.pollingInterval)
            }
            ).catch(()=>!1)
        }
        ,
        this.on = (s,o)=>{
            this.events.on(s, o)
        }
        ,
        this.once = (s,o)=>{
            this.events.once(s, o)
        }
        ,
        this.off = (s,o)=>{
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s,o)=>{
            this.events.removeListener(s, o)
        }
        ,
        this.restart = async()=>{
            this.restartInProgress = !0,
            await this.restore(),
            await this.reset(),
            this.restartInProgress = !1
        }
        ,
        this.relayer = e,
        this.logger = Je.generateChildLogger(t, this.name),
        this.clientId = ""
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(e, t) {
        let s = !1;
        try {
            s = this.getSubscription(e).topic === t
        } catch {}
        return s
    }
    onEnable() {
        this.cached = [],
        this.initialized = !0
    }
    onDisable() {
        this.cached = this.values,
        this.subscriptions.clear(),
        this.topicMap.clear()
    }
    async unsubscribeByTopic(e, t) {
        const s = this.topicMap.get(e);
        await Promise.all(s.map(async o=>await this.unsubscribeById(e, o, t)))
    }
    async unsubscribeById(e, t, s) {
        this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: s
            }
        });
        try {
            const o = vu(s);
            await this.rpcUnsubscribe(e, t, o);
            const c = wt("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, c),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: s
                }
            })
        } catch (o) {
            throw this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(o),
            o
        }
    }
    async rpcSubscribe(e, t) {
        const s = {
            method: Ko(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            await await Ss(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(er.connection_stalled)
        }
        return jn(e + this.clientId)
    }
    async rpcBatchSubscribe(e) {
        if (!e.length)
            return;
        const t = e[0].relay
          , s = {
            method: Ko(t.protocol).batchSubscribe,
            params: {
                topics: e.map(o=>o.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            return await await Ss(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
            this.relayer.events.emit(er.connection_stalled)
        }
    }
    rpcUnsubscribe(e, t, s) {
        const o = {
            method: Ko(s.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: o
        }),
        this.relayer.request(o)
    }
    onSubscribe(e, t) {
        this.setSubscription(e, Qc(ys({}, t), {
            id: e
        })),
        this.pending.delete(t.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(t=>{
            this.setSubscription(t.id, ys({}, t)),
            this.pending.delete(t.topic)
        }
        )
    }
    async onUnsubscribe(e, t, s) {
        this.events.removeAllListeners(t),
        this.hasSubscription(t, e) && this.deleteSubscription(t, s),
        await this.relayer.messages.del(e)
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }),
        this.addSubscription(e, t))
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, ys({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(Gr.created, t)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const s = this.getSubscription(e);
        this.subscriptions.delete(e),
        this.topicMap.delete(s.topic, e),
        this.events.emit(Gr.deleted, Qc(ys({}, s), {
            reason: t
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values),
        this.events.emit(Gr.sync)
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let t = 0; t < e; t++) {
                const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(s)
            }
        }
        this.events.emit(Gr.resubscribed)
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length)
                return;
            if (this.subscriptions.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e)
        }
    }
    async batchSubscribe(e) {
        if (!e.length)
            return;
        const t = await this.rpcBatchSubscribe(e);
        ni(t) && this.onBatchSubscribe(t.map((s,o)=>Qc(ys({}, e[o]), {
            id: s
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(),
        this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
        const e = [];
        this.pending.forEach(t=>{
            e.push(t)
        }
        ),
        await this.batchSubscribe(e)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, async()=>{
            await this.checkPending()
        }
        ),
        this.relayer.on(er.connect, async()=>{
            await this.onConnect()
        }
        ),
        this.relayer.on(er.disconnect, ()=>{
            this.onDisconnect()
        }
        ),
        this.events.on(Gr.created, async e=>{
            const t = Gr.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            await this.persist()
        }
        ),
        this.events.on(Gr.deleted, async e=>{
            const t = Gr.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            await this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(e=>{
            const t = setInterval(()=>{
                this.restartInProgress || (clearInterval(t),
                e())
            }
            , this.pollingInterval)
        }
        )
    }
}
var N2 = Object.defineProperty
  , ud = Object.getOwnPropertySymbols
  , U2 = Object.prototype.hasOwnProperty
  , L2 = Object.prototype.propertyIsEnumerable
  , hd = (i,e,t)=>e in i ? N2(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , $2 = (i,e)=>{
    for (var t in e || (e = {}))
        U2.call(e, t) && hd(i, t, e[t]);
    if (ud)
        for (var t of ud(e))
            L2.call(e, t) && hd(i, t, e[t]);
    return i
}
;
class M2 extends I3 {
    constructor(e) {
        super(e),
        this.protocol = "wc",
        this.version = 2,
        this.events = new Fr.EventEmitter,
        this.name = i2,
        this.transportExplicitlyClosed = !1,
        this.initialized = !1,
        this.connectionAttemptInProgress = !1,
        this.connectionStatusPollingInterval = 20,
        this.staleConnectionErrors = ["socket hang up", "socket stalled"],
        this.hasExperiencedNetworkDisruption = !1,
        this.requestsInFlight = new Map,
        this.request = async t=>{
            this.logger.debug("Publishing Request Payload");
            const s = t.id
              , o = this.provider.request(t);
            this.requestsInFlight.set(s, {
                promise: o,
                request: t
            });
            try {
                return await this.toEstablishConnection(),
                await o
            } catch (c) {
                throw this.logger.debug("Failed to Publish Request"),
                this.logger.error(c),
                c
            } finally {
                this.requestsInFlight.delete(s)
            }
        }
        ,
        this.onPayloadHandler = t=>{
            this.onProviderPayload(t)
        }
        ,
        this.onConnectHandler = ()=>{
            this.events.emit(er.connect)
        }
        ,
        this.onDisconnectHandler = ()=>{
            this.onProviderDisconnect()
        }
        ,
        this.onProviderErrorHandler = t=>{
            this.logger.error(t),
            this.events.emit(er.error, t),
            this.logger.info("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ,
        this.registerProviderListeners = ()=>{
            this.provider.on(_i.payload, this.onPayloadHandler),
            this.provider.on(_i.connect, this.onConnectHandler),
            this.provider.on(_i.disconnect, this.onDisconnectHandler),
            this.provider.on(_i.error, this.onProviderErrorHandler)
        }
        ,
        this.core = e.core,
        this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Je.generateChildLogger(e.logger, this.name) : Je.pino(Je.getDefaultLoggerOptions({
            level: e.logger || r2
        })),
        this.messages = new S2(this.logger,e.core),
        this.subscriber = new R2(this,this.logger),
        this.publisher = new I2(this,this.logger),
        this.relayUrl = (e == null ? void 0 : e.relayUrl) || Fp,
        this.projectId = e.projectId,
        this.bundleId = RE(),
        this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"),
        this.registerEventListeners(),
        await this.createProvider(),
        await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${od}...`),
            await this.restartTransport(od)
        }
        this.initialized = !0,
        setTimeout(async()=>{
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"),
            await this.transportClose(),
            this.transportExplicitlyClosed = !1)
        }
        , a2)
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(e, t, s) {
        this.isInitialized(),
        await this.publisher.publish(e, t, s),
        await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
        })
    }
    async subscribe(e, t) {
        var s;
        this.isInitialized();
        let o = ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
        if (o)
            return o;
        let c;
        const d = f=>{
            f.topic === e && (this.subscriber.off(Gr.created, d),
            c())
        }
        ;
        return await Promise.all([new Promise(f=>{
            c = f,
            this.subscriber.on(Gr.created, d)
        }
        ), new Promise(async f=>{
            o = await this.subscriber.subscribe(e, t),
            f()
        }
        )]),
        o
    }
    async unsubscribe(e, t) {
        this.isInitialized(),
        await this.subscriber.unsubscribe(e, t)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async transportClose() {
        this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."),
        this.requestsInFlight.forEach(async e=>{
            await e.promise
        }
        )),
        this.transportExplicitlyClosed = !0,
        this.hasExperiencedNetworkDisruption && this.connected ? await Ss(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
    }
    async transportOpen(e) {
        if (this.transportExplicitlyClosed = !1,
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress) {
            e && e !== this.relayUrl && (this.relayUrl = e,
            await this.transportClose(),
            await this.createProvider()),
            this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([new Promise(t=>{
                    if (!this.initialized)
                        return t();
                    this.subscriber.once(Gr.resubscribed, ()=>{
                        t()
                    }
                    )
                }
                ), new Promise(async(t,s)=>{
                    try {
                        await Ss(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                    } catch (o) {
                        s(o);
                        return
                    }
                    t()
                }
                )])
            } catch (t) {
                this.logger.error(t);
                const s = t;
                if (!this.isConnectionStalled(s.message))
                    throw t;
                this.provider.events.emit(_i.disconnect)
            } finally {
                this.connectionAttemptInProgress = !1,
                this.hasExperiencedNetworkDisruption = !1
            }
        }
    }
    async restartTransport(e) {
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl,
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await Cf())
            throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some(t=>e.includes(t))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new Si(new d6(jE({
            sdkVersion: o2,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))),
        this.registerProviderListeners()
    }
    async recordMessageEvent(e) {
        const {topic: t, message: s} = e;
        await this.messages.set(t, s)
    }
    async shouldIgnoreMessageEvent(e) {
        const {topic: t, message: s} = e;
        if (!s || s.length === 0)
            return this.logger.debug(`Ignoring invalid/empty message: ${s}`),
            !0;
        if (!await this.subscriber.isSubscribed(t))
            return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),
            !0;
        const o = this.messages.has(t, s);
        return o && this.logger.debug(`Ignoring duplicate message: ${s}`),
        o
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }),
        Ku(e)) {
            if (!e.method.endsWith(n2))
                return;
            const t = e.params
              , {topic: s, message: o, publishedAt: c} = t.data
              , d = {
                topic: s,
                message: o,
                publishedAt: c
            };
            this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace($2({
                type: "event",
                event: t.id
            }, d)),
            this.events.emit(t.id, d),
            await this.acknowledgePayload(e),
            await this.onMessageEvent(d)
        } else
            ca(e) && this.events.emit(er.message_ack, e)
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(er.message, e),
        await this.recordMessageEvent(e))
    }
    async acknowledgePayload(e) {
        const t = oa(e.id, !0);
        await this.provider.connection.send(t)
    }
    unregisterProviderListeners() {
        this.provider.off(_i.payload, this.onPayloadHandler),
        this.provider.off(_i.connect, this.onConnectHandler),
        this.provider.off(_i.disconnect, this.onDisconnectHandler),
        this.provider.off(_i.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        this.events.on(er.connection_stalled, ()=>{
            this.restartTransport().catch(t=>this.logger.error(t))
        }
        );
        let e = await Cf();
        RD(async t=>{
            this.initialized && e !== t && (e = t,
            t ? await this.restartTransport().catch(s=>this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0,
            await this.transportClose().catch(s=>this.logger.error(s))))
        }
        )
    }
    onProviderDisconnect() {
        this.events.emit(er.disconnect),
        this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
        setTimeout(async()=>{
            await this.restartTransport().catch(e=>this.logger.error(e))
        }
        , ve.toMiliseconds(s2)))
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(),
        !this.connected) {
            if (this.connectionAttemptInProgress)
                return await new Promise(e=>{
                    const t = setInterval(()=>{
                        this.connected && (clearInterval(t),
                        e())
                    }
                    , this.connectionStatusPollingInterval)
                }
                );
            await this.restartTransport()
        }
    }
}
var j2 = Object.defineProperty
  , ld = Object.getOwnPropertySymbols
  , q2 = Object.prototype.hasOwnProperty
  , F2 = Object.prototype.propertyIsEnumerable
  , fd = (i,e,t)=>e in i ? j2(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , dd = (i,e)=>{
    for (var t in e || (e = {}))
        q2.call(e, t) && fd(i, t, e[t]);
    if (ld)
        for (var t of ld(e))
            F2.call(e, t) && fd(i, t, e[t]);
    return i
}
;
class ha extends x3 {
    constructor(e, t, s, o=ji, c=void 0) {
        super(e, t, s, o),
        this.core = e,
        this.logger = t,
        this.name = s,
        this.map = new Map,
        this.version = c2,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = ji,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(d=>{
                this.getKey && d !== null && !ur(d) ? this.map.set(this.getKey(d), d) : uD(d) ? this.map.set(d.id, d) : hD(d) && this.map.set(d.topic, d)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        }
        ,
        this.set = async(d,f)=>{
            this.isInitialized(),
            this.map.has(d) ? await this.update(d, f) : (this.logger.debug("Setting value"),
            this.logger.trace({
                type: "method",
                method: "set",
                key: d,
                value: f
            }),
            this.map.set(d, f),
            await this.persist())
        }
        ,
        this.get = d=>(this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: d
        }),
        this.getData(d)),
        this.getAll = d=>(this.isInitialized(),
        d ? this.values.filter(f=>Object.keys(d).every(y=>g6(f[y], d[y]))) : this.values),
        this.update = async(d,f)=>{
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: d,
                update: f
            });
            const y = dd(dd({}, this.getData(d)), f);
            this.map.set(d, y),
            await this.persist()
        }
        ,
        this.delete = async(d,f)=>{
            this.isInitialized(),
            this.map.has(d) && (this.logger.debug("Deleting value"),
            this.logger.trace({
                type: "method",
                method: "delete",
                key: d,
                reason: f
            }),
            this.map.delete(d),
            await this.persist())
        }
        ,
        this.logger = Je.generateChildLogger(t, this.name),
        this.storagePrefix = o,
        this.getKey = c
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s),
            new Error(s)
        }
        return t
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length)
                return;
            if (this.map.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class z2 {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        this.name = d2,
        this.version = p2,
        this.events = new Pu,
        this.initialized = !1,
        this.storagePrefix = ji,
        this.ignoredPayloadTypes = [hn],
        this.registeredMethods = [],
        this.init = async()=>{
            this.initialized || (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        }
        ,
        this.register = ({methods: s})=>{
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...s])]
        }
        ,
        this.create = async()=>{
            this.isInitialized();
            const s = yu()
              , o = await this.core.crypto.setSymKey(s)
              , c = Or(ve.FIVE_MINUTES)
              , d = {
                protocol: qp
            }
              , f = {
                topic: o,
                expiry: c,
                relay: d,
                active: !1
            }
              , y = eD({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: o,
                symKey: s,
                relay: d,
                expiryTimestamp: c
            });
            return await this.pairings.set(o, f),
            await this.core.relayer.subscribe(o),
            this.core.expirer.set(o, c),
            {
                topic: o,
                uri: y
            }
        }
        ,
        this.pair = async s=>{
            this.isInitialized(),
            this.isValidPair(s);
            const {topic: o, symKey: c, relay: d, expiryTimestamp: f} = Sf(s.uri);
            let y;
            if (this.pairings.keys.includes(o) && (y = this.pairings.get(o),
            y.active))
                throw new Error(`Pairing already exists: ${o}. Please try again with a new connection URI.`);
            const g = f || Or(ve.FIVE_MINUTES)
              , m = {
                topic: o,
                relay: d,
                expiry: g,
                active: !1
            };
            return await this.pairings.set(o, m),
            this.core.expirer.set(o, g),
            s.activatePairing && await this.activate({
                topic: o
            }),
            this.events.emit(ws.create, m),
            this.core.crypto.keychain.has(o) || (await this.core.crypto.setSymKey(c, o),
            await this.core.relayer.subscribe(o, {
                relay: d
            })),
            m
        }
        ,
        this.activate = async({topic: s})=>{
            this.isInitialized();
            const o = Or(ve.THIRTY_DAYS);
            await this.pairings.update(s, {
                active: !0,
                expiry: o
            }),
            this.core.expirer.set(s, o)
        }
        ,
        this.ping = async s=>{
            this.isInitialized(),
            await this.isValidPing(s);
            const {topic: o} = s;
            if (this.pairings.keys.includes(o)) {
                const c = await this.sendRequest(o, "wc_pairingPing", {})
                  , {done: d, resolve: f, reject: y} = $n();
                this.events.once(Ut("pairing_ping", c), ({error: g})=>{
                    g ? y(g) : f()
                }
                ),
                await d()
            }
        }
        ,
        this.updateExpiry = async({topic: s, expiry: o})=>{
            this.isInitialized(),
            await this.pairings.update(s, {
                expiry: o
            })
        }
        ,
        this.updateMetadata = async({topic: s, metadata: o})=>{
            this.isInitialized(),
            await this.pairings.update(s, {
                peerMetadata: o
            })
        }
        ,
        this.getPairings = ()=>(this.isInitialized(),
        this.pairings.values),
        this.disconnect = async s=>{
            this.isInitialized(),
            await this.isValidDisconnect(s);
            const {topic: o} = s;
            this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", wt("USER_DISCONNECTED")),
            await this.deletePairing(o))
        }
        ,
        this.sendRequest = async(s,o,c)=>{
            const d = qn(o, c)
              , f = await this.core.crypto.encode(s, d)
              , y = gs[o].req;
            return this.core.history.set(s, d),
            this.core.relayer.publish(s, f, y),
            d.id
        }
        ,
        this.sendResult = async(s,o,c)=>{
            const d = oa(s, c)
              , f = await this.core.crypto.encode(o, d)
              , y = await this.core.history.get(o, s)
              , g = gs[y.request.method].res;
            await this.core.relayer.publish(o, f, g),
            await this.core.history.resolve(d)
        }
        ,
        this.sendError = async(s,o,c)=>{
            const d = aa(s, c)
              , f = await this.core.crypto.encode(o, d)
              , y = await this.core.history.get(o, s)
              , g = gs[y.request.method] ? gs[y.request.method].res : gs.unregistered_method.res;
            await this.core.relayer.publish(o, f, g),
            await this.core.history.resolve(d)
        }
        ,
        this.deletePairing = async(s,o)=>{
            await this.core.relayer.unsubscribe(s),
            await Promise.all([this.pairings.delete(s, wt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), o ? Promise.resolve() : this.core.expirer.del(s)])
        }
        ,
        this.cleanup = async()=>{
            const s = this.pairings.getAll().filter(o=>Mi(o.expiry));
            await Promise.all(s.map(o=>this.deletePairing(o.topic)))
        }
        ,
        this.onRelayEventRequest = s=>{
            const {topic: o, payload: c} = s;
            switch (c.method) {
            case "wc_pairingPing":
                return this.onPairingPingRequest(o, c);
            case "wc_pairingDelete":
                return this.onPairingDeleteRequest(o, c);
            default:
                return this.onUnknownRpcMethodRequest(o, c)
            }
        }
        ,
        this.onRelayEventResponse = async s=>{
            const {topic: o, payload: c} = s
              , d = (await this.core.history.get(o, c.id)).request.method;
            switch (d) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(o, c);
            default:
                return this.onUnknownRpcMethodResponse(d)
            }
        }
        ,
        this.onPairingPingRequest = async(s,o)=>{
            const {id: c} = o;
            try {
                this.isValidPing({
                    topic: s
                }),
                await this.sendResult(c, s, !0),
                this.events.emit(ws.ping, {
                    id: c,
                    topic: s
                })
            } catch (d) {
                await this.sendError(c, s, d),
                this.logger.error(d)
            }
        }
        ,
        this.onPairingPingResponse = (s,o)=>{
            const {id: c} = o;
            setTimeout(()=>{
                Di(o) ? this.events.emit(Ut("pairing_ping", c), {}) : Wr(o) && this.events.emit(Ut("pairing_ping", c), {
                    error: o.error
                })
            }
            , 500)
        }
        ,
        this.onPairingDeleteRequest = async(s,o)=>{
            const {id: c} = o;
            try {
                this.isValidDisconnect({
                    topic: s
                }),
                await this.deletePairing(s),
                this.events.emit(ws.delete, {
                    id: c,
                    topic: s
                })
            } catch (d) {
                await this.sendError(c, s, d),
                this.logger.error(d)
            }
        }
        ,
        this.onUnknownRpcMethodRequest = async(s,o)=>{
            const {id: c, method: d} = o;
            try {
                if (this.registeredMethods.includes(d))
                    return;
                const f = wt("WC_METHOD_UNSUPPORTED", d);
                await this.sendError(c, s, f),
                this.logger.error(f)
            } catch (f) {
                await this.sendError(c, s, f),
                this.logger.error(f)
            }
        }
        ,
        this.onUnknownRpcMethodResponse = s=>{
            this.registeredMethods.includes(s) || this.logger.error(wt("WC_METHOD_UNSUPPORTED", s))
        }
        ,
        this.isValidPair = s=>{
            var o;
            if (!wr(s)) {
                const {message: d} = ce("MISSING_OR_INVALID", `pair() params: ${s}`);
                throw new Error(d)
            }
            if (!cD(s.uri)) {
                const {message: d} = ce("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
                throw new Error(d)
            }
            const c = Sf(s.uri);
            if (!((o = c == null ? void 0 : c.relay) != null && o.protocol)) {
                const {message: d} = ce("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(d)
            }
            if (!(c != null && c.symKey)) {
                const {message: d} = ce("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(d)
            }
            if (c != null && c.expiryTimestamp && ve.toMiliseconds(c == null ? void 0 : c.expiryTimestamp) < Date.now()) {
                const {message: d} = ce("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(d)
            }
        }
        ,
        this.isValidPing = async s=>{
            if (!wr(s)) {
                const {message: c} = ce("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(c)
            }
            const {topic: o} = s;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidDisconnect = async s=>{
            if (!wr(s)) {
                const {message: c} = ce("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(c)
            }
            const {topic: o} = s;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidPairingTopic = async s=>{
            if (!Gt(s, !1)) {
                const {message: o} = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                throw new Error(o)
            }
            if (!this.pairings.keys.includes(s)) {
                const {message: o} = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                throw new Error(o)
            }
            if (Mi(this.pairings.get(s).expiry)) {
                await this.deletePairing(s);
                const {message: o} = ce("EXPIRED", `pairing topic: ${s}`);
                throw new Error(o)
            }
        }
        ,
        this.core = e,
        this.logger = Je.generateChildLogger(t, this.name),
        this.pairings = new ha(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(er.message, async e=>{
            const {topic: t, message: s} = e;
            if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
                return;
            const o = await this.core.crypto.decode(t, s);
            try {
                Ku(o) ? (this.core.history.set(t, o),
                this.onRelayEventRequest({
                    topic: t,
                    payload: o
                })) : ca(o) && (await this.core.history.resolve(o),
                await this.onRelayEventResponse({
                    topic: t,
                    payload: o
                }),
                this.core.history.delete(t, o.id))
            } catch (c) {
                this.logger.error(c)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.core.expirer.on(qr.expired, async e=>{
            const {topic: t} = cp(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
            this.events.emit(ws.expire, {
                topic: t
            }))
        }
        )
    }
}
class B2 extends E3 {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        this.records = new Map,
        this.events = new Fr.EventEmitter,
        this.name = g2,
        this.version = y2,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = ji,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(s=>this.records.set(s.id, s)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.set = (s,o,c)=>{
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: s,
                request: o,
                chainId: c
            }),
            this.records.has(o.id))
                return;
            const d = {
                id: o.id,
                topic: s,
                request: {
                    method: o.method,
                    params: o.params || null
                },
                chainId: c,
                expiry: Or(ve.THIRTY_DAYS)
            };
            this.records.set(d.id, d),
            this.events.emit(ii.created, d)
        }
        ,
        this.resolve = async s=>{
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: s
            }),
            !this.records.has(s.id))
                return;
            const o = await this.getRecord(s.id);
            typeof o.response > "u" && (o.response = Wr(s) ? {
                error: s.error
            } : {
                result: s.result
            },
            this.records.set(o.id, o),
            this.events.emit(ii.updated, o))
        }
        ,
        this.get = async(s,o)=>(this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({
            type: "method",
            method: "get",
            topic: s,
            id: o
        }),
        await this.getRecord(o)),
        this.delete = (s,o)=>{
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: o
            }),
            this.values.forEach(c=>{
                if (c.topic === s) {
                    if (typeof o < "u" && c.id !== o)
                        return;
                    this.records.delete(c.id),
                    this.events.emit(ii.deleted, c)
                }
            }
            )
        }
        ,
        this.exists = async(s,o)=>(this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1),
        this.on = (s,o)=>{
            this.events.on(s, o)
        }
        ,
        this.once = (s,o)=>{
            this.events.once(s, o)
        }
        ,
        this.off = (s,o)=>{
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s,o)=>{
            this.events.removeListener(s, o)
        }
        ,
        this.logger = Je.generateChildLogger(t, this.name)
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const e = [];
        return this.values.forEach(t=>{
            if (typeof t.response < "u")
                return;
            const s = {
                topic: t.topic,
                request: qn(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(s)
        }
        ),
        e
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    async persist() {
        await this.setJsonRpcRecords(this.values),
        this.events.emit(ii.sync)
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length)
                return;
            if (this.records.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e)
        }
    }
    registerEventListeners() {
        this.events.on(ii.created, e=>{
            const t = ii.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            }),
            this.persist()
        }
        ),
        this.events.on(ii.updated, e=>{
            const t = ii.updated;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            }),
            this.persist()
        }
        ),
        this.events.on(ii.deleted, e=>{
            const t = ii.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            }),
            this.persist()
        }
        ),
        this.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, ()=>{
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.records.forEach(e=>{
                ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id))
            }
            )
        } catch (e) {
            this.logger.warn(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class H2 extends P3 {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        this.expirations = new Map,
        this.events = new Fr.EventEmitter,
        this.name = v2,
        this.version = m2,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = ji,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(s=>this.expirations.set(s.target, s)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.has = s=>{
            try {
                const o = this.formatTarget(s);
                return typeof this.getExpiration(o) < "u"
            } catch {
                return !1
            }
        }
        ,
        this.set = (s,o)=>{
            this.isInitialized();
            const c = this.formatTarget(s)
              , d = {
                target: c,
                expiry: o
            };
            this.expirations.set(c, d),
            this.checkExpiry(c, d),
            this.events.emit(qr.created, {
                target: c,
                expiration: d
            })
        }
        ,
        this.get = s=>{
            this.isInitialized();
            const o = this.formatTarget(s);
            return this.getExpiration(o)
        }
        ,
        this.del = s=>{
            if (this.isInitialized(),
            this.has(s)) {
                const o = this.formatTarget(s)
                  , c = this.getExpiration(o);
                this.expirations.delete(o),
                this.events.emit(qr.deleted, {
                    target: o,
                    expiration: c
                })
            }
        }
        ,
        this.on = (s,o)=>{
            this.events.on(s, o)
        }
        ,
        this.once = (s,o)=>{
            this.events.once(s, o)
        }
        ,
        this.off = (s,o)=>{
            this.events.off(s, o)
        }
        ,
        this.removeListener = (s,o)=>{
            this.events.removeListener(s, o)
        }
        ,
        this.logger = Je.generateChildLogger(t, this.name)
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(e) {
        if (typeof e == "string")
            return qE(e);
        if (typeof e == "number")
            return FE(e);
        const {message: t} = ce("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t)
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values),
        this.events.emit(qr.sync)
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length)
                return;
            if (this.expirations.size) {
                const {message: t} = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = e,
            this.logger.debug(`Successfully Restored expirations for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e)
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const {message: s} = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s),
            new Error(s)
        }
        return t
    }
    checkExpiry(e, t) {
        const {expiry: s} = t;
        ve.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t)
    }
    expire(e, t) {
        this.expirations.delete(e),
        this.events.emit(qr.expired, {
            target: e,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e,t)=>this.checkExpiry(t, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, ()=>this.checkExpirations()),
        this.events.on(qr.created, e=>{
            const t = qr.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(qr.expired, e=>{
            const t = qr.expired;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(qr.deleted, e=>{
            const t = qr.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class K2 extends C3 {
    constructor(e, t) {
        super(e, t),
        this.projectId = e,
        this.logger = t,
        this.name = Jc,
        this.initialized = !1,
        this.queue = [],
        this.verifyDisabled = !1,
        this.init = async s=>{
            if (this.verifyDisabled || Bn() || !Hn())
                return;
            const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
            this.verifyUrl !== o && this.removeIframe(),
            this.verifyUrl = o;
            try {
                await this.createIframe()
            } catch (c) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                this.logger.info(c)
            }
            if (!this.initialized) {
                this.removeIframe(),
                this.verifyUrl = bu;
                try {
                    await this.createIframe()
                } catch (c) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                    this.logger.info(c),
                    this.verifyDisabled = !0
                }
            }
        }
        ,
        this.register = async s=>{
            this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId),
            await this.init())
        }
        ,
        this.resolve = async s=>{
            if (this.isDevEnv)
                return "";
            const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
            let c;
            try {
                c = await this.fetchAttestation(s.attestationId, o)
            } catch (d) {
                this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${o}`),
                this.logger.info(d),
                c = await this.fetchAttestation(s.attestationId, bu)
            }
            return c
        }
        ,
        this.fetchAttestation = async(s,o)=>{
            this.logger.info(`resolving attestation: ${s} from url: ${o}`);
            const c = this.startAbortTimer(ve.ONE_SECOND * 2)
              , d = await fetch(`${o}/attestation/${s}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(c),
            d.status === 200 ? await d.json() : void 0
        }
        ,
        this.addToQueue = s=>{
            this.queue.push(s)
        }
        ,
        this.processQueue = ()=>{
            this.queue.length !== 0 && (this.queue.forEach(s=>this.sendPost(s)),
            this.queue = [])
        }
        ,
        this.sendPost = s=>{
            var o;
            try {
                if (!this.iframe)
                    return;
                (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
                this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`)
            } catch {}
        }
        ,
        this.createIframe = async()=>{
            let s;
            const o = c=>{
                c.data === "verify_ready" && (this.initialized = !0,
                this.processQueue(),
                window.removeEventListener("message", o),
                s())
            }
            ;
            await Promise.race([new Promise(c=>{
                if (document.getElementById(Jc))
                    return c();
                window.addEventListener("message", o);
                const d = document.createElement("iframe");
                d.id = Jc,
                d.src = `${this.verifyUrl}/${this.projectId}`,
                d.style.display = "none",
                document.body.append(d),
                this.iframe = d,
                s = c
            }
            ), new Promise((c,d)=>setTimeout(()=>{
                window.removeEventListener("message", o),
                d("verify iframe load timeout")
            }
            , ve.toMiliseconds(ve.FIVE_SECONDS)))])
        }
        ,
        this.removeIframe = ()=>{
            this.iframe && (this.iframe.remove(),
            this.iframe = void 0,
            this.initialized = !1)
        }
        ,
        this.getVerifyUrl = s=>{
            let o = s || Mn;
            return w2.includes(o) || (this.logger.info(`verify url: ${o}, not included in trusted list, assigning default: ${Mn}`),
            o = Mn),
            o
        }
        ,
        this.logger = Je.generateChildLogger(t, this.name),
        this.verifyUrl = Mn,
        this.abortController = new AbortController,
        this.isDevEnv = ju() && _6.IS_VITEST
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController,
        setTimeout(()=>this.abortController.abort(), ve.toMiliseconds(e))
    }
}
class k2 extends A3 {
    constructor(e, t) {
        super(e, t),
        this.projectId = e,
        this.logger = t,
        this.context = _2,
        this.registerDeviceToken = async s=>{
            const {clientId: o, token: c, notificationType: d, enableEncrypted: f=!1} = s
              , y = `${b2}/${this.projectId}/clients`;
            await w6(y, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: o,
                    type: d,
                    token: c,
                    always_raw: f
                })
            })
        }
        ,
        this.logger = Je.generateChildLogger(t, this.context)
    }
}
var V2 = Object.defineProperty
  , pd = Object.getOwnPropertySymbols
  , G2 = Object.prototype.hasOwnProperty
  , W2 = Object.prototype.propertyIsEnumerable
  , gd = (i,e,t)=>e in i ? V2(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , yd = (i,e)=>{
    for (var t in e || (e = {}))
        G2.call(e, t) && gd(i, t, e[t]);
    if (pd)
        for (var t of pd(e))
            W2.call(e, t) && gd(i, t, e[t]);
    return i
}
;
class Vu extends b3 {
    constructor(e) {
        super(e),
        this.protocol = jp,
        this.version = kS,
        this.name = ku,
        this.events = new Fr.EventEmitter,
        this.initialized = !1,
        this.on = (s,o)=>this.events.on(s, o),
        this.once = (s,o)=>this.events.once(s, o),
        this.off = (s,o)=>this.events.off(s, o),
        this.removeListener = (s,o)=>this.events.removeListener(s, o),
        this.projectId = e == null ? void 0 : e.projectId,
        this.relayUrl = (e == null ? void 0 : e.relayUrl) || Fp,
        this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Je.pino(Je.getDefaultLoggerOptions({
            level: (e == null ? void 0 : e.logger) || VS.logger
        }));
        this.logger = Je.generateChildLogger(t, this.name),
        this.heartbeat = new kn.HeartBeat,
        this.crypto = new D2(this,this.logger,e == null ? void 0 : e.keychain),
        this.history = new B2(this,this.logger),
        this.expirer = new H2(this,this.logger),
        this.storage = e != null && e.storage ? e.storage : new f3(yd(yd({}, GS), e == null ? void 0 : e.storageOptions)),
        this.relayer = new M2({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new z2(this,this.logger),
        this.verify = new K2(this.projectId || "",this.logger),
        this.echoClient = new k2(this.projectId || "",this.logger)
    }
    static async init(e) {
        const t = new Vu(e);
        await t.initialize();
        const s = await t.crypto.getClientId();
        return await t.storage.setItem(u2, s),
        t
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            this.initialized = !0,
            this.logger.info("Core Initialization Success")
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
            this.logger.error(e.message),
            e
        }
    }
}
const Y2 = Vu
  , zp = "wc"
  , Bp = 2
  , Hp = "client"
  , Gu = `${zp}@${Bp}:${Hp}:`
  , Xc = {
    name: Hp,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
}
  , vd = "WALLETCONNECT_DEEPLINK_CHOICE"
  , J2 = "proposal"
  , Kp = "Proposal expired"
  , Q2 = "session"
  , zo = ve.SEVEN_DAYS
  , X2 = "engine"
  , bi = {
    wc_sessionPropose: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: ve.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: ve.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: ve.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: ve.THIRTY_SECONDS,
            prompt: !1,
            tag: 1115
        }
    }
}
  , Zc = {
    min: ve.FIVE_MINUTES,
    max: ve.SEVEN_DAYS
}
  , Ei = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , Z2 = "request"
  , eI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var tI = Object.defineProperty
  , rI = Object.defineProperties
  , iI = Object.getOwnPropertyDescriptors
  , md = Object.getOwnPropertySymbols
  , nI = Object.prototype.hasOwnProperty
  , sI = Object.prototype.propertyIsEnumerable
  , wd = (i,e,t)=>e in i ? tI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , cr = (i,e)=>{
    for (var t in e || (e = {}))
        nI.call(e, t) && wd(i, t, e[t]);
    if (md)
        for (var t of md(e))
            sI.call(e, t) && wd(i, t, e[t]);
    return i
}
  , Ln = (i,e)=>rI(i, iI(e));
class oI extends R3 {
    constructor(e) {
        super(e),
        this.name = X2,
        this.events = new Pu,
        this.initialized = !1,
        this.ignoredPayloadTypes = [hn],
        this.requestQueue = {
            state: Ei.idle,
            queue: []
        },
        this.sessionRequestQueue = {
            state: Ei.idle,
            queue: []
        },
        this.requestQueueDelay = ve.ONE_SECOND,
        this.init = async()=>{
            this.initialized || (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            this.client.core.pairing.register({
                methods: Object.keys(bi)
            }),
            this.initialized = !0,
            setTimeout(()=>{
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }
            , ve.toMiliseconds(this.requestQueueDelay)))
        }
        ,
        this.connect = async t=>{
            await this.isInitialized();
            const s = Ln(cr({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            await this.isValidConnect(s);
            const {pairingTopic: o, requiredNamespaces: c, optionalNamespaces: d, sessionProperties: f, relays: y} = s;
            let g = o, m, D = !1;
            if (g && (D = this.client.core.pairing.pairings.get(g).active),
            !g || !D) {
                const {topic: O, uri: A} = await this.client.core.pairing.create();
                g = O,
                m = A
            }
            const I = await this.client.core.crypto.generateKeyPair()
              , T = bi.wc_sessionPropose.req.ttl || ve.FIVE_MINUTES
              , P = Or(T)
              , z = cr({
                requiredNamespaces: c,
                optionalNamespaces: d,
                relays: y ?? [{
                    protocol: qp
                }],
                proposer: {
                    publicKey: I,
                    metadata: this.client.metadata
                },
                expiryTimestamp: P
            }, f && {
                sessionProperties: f
            })
              , {reject: H, resolve: ie, done: U} = $n(T, Kp);
            if (this.events.once(Ut("session_connect"), async({error: O, session: A})=>{
                if (O)
                    H(O);
                else if (A) {
                    A.self.publicKey = I;
                    const E = Ln(cr({}, A), {
                        requiredNamespaces: z.requiredNamespaces,
                        optionalNamespaces: z.optionalNamespaces
                    });
                    await this.client.session.set(A.topic, E),
                    await this.setExpiry(A.topic, A.expiry),
                    g && await this.client.core.pairing.updateMetadata({
                        topic: g,
                        metadata: A.peer.metadata
                    }),
                    ie(E)
                }
            }
            ),
            !g) {
                const {message: O} = ce("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
                throw new Error(O)
            }
            const j = await this.sendRequest({
                topic: g,
                method: "wc_sessionPropose",
                params: z,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(j, cr({
                id: j
            }, z)),
            {
                uri: m,
                approval: U
            }
        }
        ,
        this.pair = async t=>(await this.isInitialized(),
        await this.client.core.pairing.pair(t)),
        this.approve = async t=>{
            await this.isInitialized(),
            await this.isValidApprove(t);
            const {id: s, relayProtocol: o, namespaces: c, sessionProperties: d} = t
              , f = this.client.proposal.get(s);
            let {pairingTopic: y, proposer: g, requiredNamespaces: m, optionalNamespaces: D} = f;
            y = y || "";
            const I = await this.client.core.crypto.generateKeyPair()
              , T = g.publicKey
              , P = await this.client.core.crypto.generateSharedKey(I, T);
            y && s && (await this.client.core.pairing.updateMetadata({
                topic: y,
                metadata: g.metadata
            }),
            await this.sendResult({
                id: s,
                topic: y,
                result: {
                    relay: {
                        protocol: o ?? "irn"
                    },
                    responderPublicKey: I
                }
            }),
            await this.client.proposal.delete(s, wt("USER_DISCONNECTED")),
            await this.client.core.pairing.activate({
                topic: y
            }));
            const z = cr({
                relay: {
                    protocol: o ?? "irn"
                },
                namespaces: c,
                pairingTopic: y,
                controller: {
                    publicKey: I,
                    metadata: this.client.metadata
                },
                expiry: Or(zo)
            }, d && {
                sessionProperties: d
            });
            await this.client.core.relayer.subscribe(P);
            const H = Ln(cr({}, z), {
                topic: P,
                requiredNamespaces: m,
                optionalNamespaces: D,
                pairingTopic: y,
                acknowledged: !1,
                self: z.controller,
                peer: {
                    publicKey: g.publicKey,
                    metadata: g.metadata
                },
                controller: I
            });
            await this.client.session.set(P, H);
            try {
                await this.sendRequest({
                    topic: P,
                    method: "wc_sessionSettle",
                    params: z,
                    throwOnFailedPublish: !0
                })
            } catch (ie) {
                throw this.client.logger.error(ie),
                this.client.session.delete(P, wt("USER_DISCONNECTED")),
                await this.client.core.relayer.unsubscribe(P),
                ie
            }
            return await this.setExpiry(P, Or(zo)),
            {
                topic: P,
                acknowledged: ()=>new Promise(ie=>setTimeout(()=>ie(this.client.session.get(P)), 500))
            }
        }
        ,
        this.reject = async t=>{
            await this.isInitialized(),
            await this.isValidReject(t);
            const {id: s, reason: o} = t
              , {pairingTopic: c} = this.client.proposal.get(s);
            c && (await this.sendError(s, c, o),
            await this.client.proposal.delete(s, wt("USER_DISCONNECTED")))
        }
        ,
        this.update = async t=>{
            await this.isInitialized(),
            await this.isValidUpdate(t);
            const {topic: s, namespaces: o} = t
              , c = await this.sendRequest({
                topic: s,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: o
                }
            })
              , {done: d, resolve: f, reject: y} = $n();
            return this.events.once(Ut("session_update", c), ({error: g})=>{
                g ? y(g) : f()
            }
            ),
            await this.client.session.update(s, {
                namespaces: o
            }),
            {
                acknowledged: d
            }
        }
        ,
        this.extend = async t=>{
            await this.isInitialized(),
            await this.isValidExtend(t);
            const {topic: s} = t
              , o = await this.sendRequest({
                topic: s,
                method: "wc_sessionExtend",
                params: {}
            })
              , {done: c, resolve: d, reject: f} = $n();
            return this.events.once(Ut("session_extend", o), ({error: y})=>{
                y ? f(y) : d()
            }
            ),
            await this.setExpiry(s, Or(zo)),
            {
                acknowledged: c
            }
        }
        ,
        this.request = async t=>{
            await this.isInitialized(),
            await this.isValidRequest(t);
            const {chainId: s, request: o, topic: c, expiry: d=bi.wc_sessionRequest.req.ttl} = t
              , f = Hu()
              , {done: y, resolve: g, reject: m} = $n(d, "Request expired. Please try again.");
            return this.events.once(Ut("session_request", f), ({error: D, result: I})=>{
                D ? m(D) : g(I)
            }
            ),
            await Promise.all([new Promise(async D=>{
                await this.sendRequest({
                    clientRpcId: f,
                    topic: c,
                    method: "wc_sessionRequest",
                    params: {
                        request: Ln(cr({}, o), {
                            expiryTimestamp: Or(d)
                        }),
                        chainId: s
                    },
                    expiry: d,
                    throwOnFailedPublish: !0
                }).catch(I=>m(I)),
                this.client.events.emit("session_request_sent", {
                    topic: c,
                    request: o,
                    chainId: s,
                    id: f
                }),
                D()
            }
            ), new Promise(async D=>{
                const I = await BE(this.client.core.storage, vd);
                zE({
                    id: f,
                    topic: c,
                    wcDeepLink: I
                }),
                D()
            }
            ), y()]).then(D=>D[2])
        }
        ,
        this.respond = async t=>{
            await this.isInitialized(),
            await this.isValidRespond(t);
            const {topic: s, response: o} = t
              , {id: c} = o;
            Di(o) ? await this.sendResult({
                id: c,
                topic: s,
                result: o.result,
                throwOnFailedPublish: !0
            }) : Wr(o) && await this.sendError(c, s, o.error),
            this.cleanupAfterResponse(t)
        }
        ,
        this.ping = async t=>{
            await this.isInitialized(),
            await this.isValidPing(t);
            const {topic: s} = t;
            if (this.client.session.keys.includes(s)) {
                const o = await this.sendRequest({
                    topic: s,
                    method: "wc_sessionPing",
                    params: {}
                })
                  , {done: c, resolve: d, reject: f} = $n();
                this.events.once(Ut("session_ping", o), ({error: y})=>{
                    y ? f(y) : d()
                }
                ),
                await c()
            } else
                this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({
                    topic: s
                })
        }
        ,
        this.emit = async t=>{
            await this.isInitialized(),
            await this.isValidEmit(t);
            const {topic: s, event: o, chainId: c} = t;
            await this.sendRequest({
                topic: s,
                method: "wc_sessionEvent",
                params: {
                    event: o,
                    chainId: c
                }
            })
        }
        ,
        this.disconnect = async t=>{
            await this.isInitialized(),
            await this.isValidDisconnect(t);
            const {topic: s} = t;
            if (this.client.session.keys.includes(s))
                await this.sendRequest({
                    topic: s,
                    method: "wc_sessionDelete",
                    params: wt("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }),
                await this.deleteSession({
                    topic: s,
                    emitEvent: !1
                });
            else if (this.client.core.pairing.pairings.keys.includes(s))
                await this.client.core.pairing.disconnect({
                    topic: s
                });
            else {
                const {message: o} = ce("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
                throw new Error(o)
            }
        }
        ,
        this.find = t=>(this.isInitialized(),
        this.client.session.getAll().filter(s=>oD(s, t))),
        this.getPendingSessionRequests = ()=>this.client.pendingRequest.getAll(),
        this.cleanupDuplicatePairings = async t=>{
            if (t.pairingTopic)
                try {
                    const s = this.client.core.pairing.pairings.get(t.pairingTopic)
                      , o = this.client.core.pairing.pairings.getAll().filter(c=>{
                        var d, f;
                        return ((d = c.peerMetadata) == null ? void 0 : d.url) && ((f = c.peerMetadata) == null ? void 0 : f.url) === t.peer.metadata.url && c.topic && c.topic !== s.topic
                    }
                    );
                    if (o.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`),
                    await Promise.all(o.map(c=>this.client.core.pairing.disconnect({
                        topic: c.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (s) {
                    this.client.logger.error(s)
                }
        }
        ,
        this.deleteSession = async t=>{
            const {topic: s, expirerHasDeleted: o=!1, emitEvent: c=!0, id: d=0} = t
              , {self: f} = this.client.session.get(s);
            await this.client.core.relayer.unsubscribe(s),
            await this.client.session.delete(s, wt("USER_DISCONNECTED")),
            this.client.core.crypto.keychain.has(f.publicKey) && await this.client.core.crypto.deleteKeyPair(f.publicKey),
            this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s),
            o || this.client.core.expirer.del(s),
            this.client.core.storage.removeItem(vd).catch(y=>this.client.logger.warn(y)),
            this.getPendingSessionRequests().forEach(y=>{
                y.topic === s && this.deletePendingSessionRequest(y.id, wt("USER_DISCONNECTED"))
            }
            ),
            c && this.client.events.emit("session_delete", {
                id: d,
                topic: s
            })
        }
        ,
        this.deleteProposal = async(t,s)=>{
            await Promise.all([this.client.proposal.delete(t, wt("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(t)])
        }
        ,
        this.deletePendingSessionRequest = async(t,s,o=!1)=>{
            await Promise.all([this.client.pendingRequest.delete(t, s), o ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(c=>c.id !== t),
            o && (this.sessionRequestQueue.state = Ei.idle,
            this.client.events.emit("session_request_expire", {
                id: t
            }))
        }
        ,
        this.setExpiry = async(t,s)=>{
            this.client.session.keys.includes(t) && await this.client.session.update(t, {
                expiry: s
            }),
            this.client.core.expirer.set(t, s)
        }
        ,
        this.setProposal = async(t,s)=>{
            await this.client.proposal.set(t, s),
            this.client.core.expirer.set(t, Or(bi.wc_sessionPropose.req.ttl))
        }
        ,
        this.setPendingSessionRequest = async t=>{
            const {id: s, topic: o, params: c, verifyContext: d} = t
              , f = c.request.expiryTimestamp || Or(bi.wc_sessionRequest.req.ttl);
            await this.client.pendingRequest.set(s, {
                id: s,
                topic: o,
                params: c,
                verifyContext: d
            }),
            f && this.client.core.expirer.set(s, f)
        }
        ,
        this.sendRequest = async t=>{
            const {topic: s, method: o, params: c, expiry: d, relayRpcId: f, clientRpcId: y, throwOnFailedPublish: g} = t
              , m = qn(o, c, y);
            if (Hn() && eI.includes(o)) {
                const T = jn(JSON.stringify(m));
                this.client.core.verify.register({
                    attestationId: T
                })
            }
            const D = await this.client.core.crypto.encode(s, m)
              , I = bi[o].req;
            return d && (I.ttl = d),
            f && (I.id = f),
            this.client.core.history.set(s, m),
            g ? (I.internal = Ln(cr({}, I.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(s, D, I)) : this.client.core.relayer.publish(s, D, I).catch(T=>this.client.logger.error(T)),
            m.id
        }
        ,
        this.sendResult = async t=>{
            const {id: s, topic: o, result: c, throwOnFailedPublish: d} = t
              , f = oa(s, c)
              , y = await this.client.core.crypto.encode(o, f)
              , g = await this.client.core.history.get(o, s)
              , m = bi[g.request.method].res;
            d ? (m.internal = Ln(cr({}, m.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(o, y, m)) : this.client.core.relayer.publish(o, y, m).catch(D=>this.client.logger.error(D)),
            await this.client.core.history.resolve(f)
        }
        ,
        this.sendError = async(t,s,o)=>{
            const c = aa(t, o)
              , d = await this.client.core.crypto.encode(s, c)
              , f = await this.client.core.history.get(s, t)
              , y = bi[f.request.method].res;
            this.client.core.relayer.publish(s, d, y),
            await this.client.core.history.resolve(c)
        }
        ,
        this.cleanup = async()=>{
            const t = []
              , s = [];
            this.client.session.getAll().forEach(o=>{
                let c = !1;
                Mi(o.expiry) && (c = !0),
                this.client.core.crypto.keychain.has(o.topic) || (c = !0),
                c && t.push(o.topic)
            }
            ),
            this.client.proposal.getAll().forEach(o=>{
                Mi(o.expiryTimestamp) && s.push(o.id)
            }
            ),
            await Promise.all([...t.map(o=>this.deleteSession({
                topic: o
            })), ...s.map(o=>this.deleteProposal(o))])
        }
        ,
        this.onRelayEventRequest = async t=>{
            this.requestQueue.queue.push(t),
            await this.processRequestsQueue()
        }
        ,
        this.processRequestsQueue = async()=>{
            if (this.requestQueue.state === Ei.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = Ei.active;
                const t = this.requestQueue.queue.shift();
                if (t)
                    try {
                        this.processRequest(t),
                        await new Promise(s=>setTimeout(s, 300))
                    } catch (s) {
                        this.client.logger.warn(s)
                    }
            }
            this.requestQueue.state = Ei.idle
        }
        ,
        this.processRequest = t=>{
            const {topic: s, payload: o} = t
              , c = o.method;
            switch (c) {
            case "wc_sessionPropose":
                return this.onSessionProposeRequest(s, o);
            case "wc_sessionSettle":
                return this.onSessionSettleRequest(s, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(s, o);
            case "wc_sessionExtend":
                return this.onSessionExtendRequest(s, o);
            case "wc_sessionPing":
                return this.onSessionPingRequest(s, o);
            case "wc_sessionDelete":
                return this.onSessionDeleteRequest(s, o);
            case "wc_sessionRequest":
                return this.onSessionRequest(s, o);
            case "wc_sessionEvent":
                return this.onSessionEventRequest(s, o);
            default:
                return this.client.logger.info(`Unsupported request method ${c}`)
            }
        }
        ,
        this.onRelayEventResponse = async t=>{
            const {topic: s, payload: o} = t
              , c = (await this.client.core.history.get(s, o.id)).request.method;
            switch (c) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(s, o);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(s, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(s, o);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(s, o);
            case "wc_sessionPing":
                return this.onSessionPingResponse(s, o);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(s, o);
            default:
                return this.client.logger.info(`Unsupported response method ${c}`)
            }
        }
        ,
        this.onRelayEventUnknownPayload = t=>{
            const {topic: s} = t
              , {message: o} = ce("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(o)
        }
        ,
        this.onSessionProposeRequest = async(t,s)=>{
            const {params: o, id: c} = s;
            try {
                this.isValidConnect(cr({}, s.params));
                const d = o.expiryTimestamp || Or(bi.wc_sessionPropose.req.ttl)
                  , f = cr({
                    id: c,
                    pairingTopic: t,
                    expiryTimestamp: d
                }, o);
                await this.setProposal(c, f);
                const y = jn(JSON.stringify(s))
                  , g = await this.getVerifyContext(y, f.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: f,
                    verifyContext: g
                })
            } catch (d) {
                await this.sendError(c, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.onSessionProposeResponse = async(t,s)=>{
            const {id: o} = s;
            if (Di(s)) {
                const {result: c} = s;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: c
                });
                const d = this.client.proposal.get(o);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: d
                });
                const f = d.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: f
                });
                const y = c.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: y
                });
                const g = await this.client.core.crypto.generateSharedKey(f, y);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: g
                });
                const m = await this.client.core.relayer.subscribe(g);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: m
                }),
                await this.client.core.pairing.activate({
                    topic: t
                })
            } else
                Wr(s) && (await this.client.proposal.delete(o, wt("USER_DISCONNECTED")),
                this.events.emit(Ut("session_connect"), {
                    error: s.error
                }))
        }
        ,
        this.onSessionSettleRequest = async(t,s)=>{
            const {id: o, params: c} = s;
            try {
                this.isValidSessionSettleRequest(c);
                const {relay: d, controller: f, expiry: y, namespaces: g, sessionProperties: m, pairingTopic: D} = s.params
                  , I = cr({
                    topic: t,
                    relay: d,
                    expiry: y,
                    namespaces: g,
                    acknowledged: !0,
                    pairingTopic: D,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: f.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: f.publicKey,
                        metadata: f.metadata
                    }
                }, m && {
                    sessionProperties: m
                });
                await this.sendResult({
                    id: s.id,
                    topic: t,
                    result: !0
                }),
                this.events.emit(Ut("session_connect"), {
                    session: I
                }),
                this.cleanupDuplicatePairings(I)
            } catch (d) {
                await this.sendError(o, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.onSessionSettleResponse = async(t,s)=>{
            const {id: o} = s;
            Di(s) ? (await this.client.session.update(t, {
                acknowledged: !0
            }),
            this.events.emit(Ut("session_approve", o), {})) : Wr(s) && (await this.client.session.delete(t, wt("USER_DISCONNECTED")),
            this.events.emit(Ut("session_approve", o), {
                error: s.error
            }))
        }
        ,
        this.onSessionUpdateRequest = async(t,s)=>{
            const {params: o, id: c} = s;
            try {
                const d = `${t}_session_update`
                  , f = jo.get(d);
                if (f && this.isRequestOutOfSync(f, c)) {
                    this.client.logger.info(`Discarding out of sync request - ${c}`);
                    return
                }
                this.isValidUpdate(cr({
                    topic: t
                }, o)),
                await this.client.session.update(t, {
                    namespaces: o.namespaces
                }),
                await this.sendResult({
                    id: c,
                    topic: t,
                    result: !0
                }),
                this.client.events.emit("session_update", {
                    id: c,
                    topic: t,
                    params: o
                }),
                jo.set(d, c)
            } catch (d) {
                await this.sendError(c, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.isRequestOutOfSync = (t,s)=>parseInt(s.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)),
        this.onSessionUpdateResponse = (t,s)=>{
            const {id: o} = s;
            Di(s) ? this.events.emit(Ut("session_update", o), {}) : Wr(s) && this.events.emit(Ut("session_update", o), {
                error: s.error
            })
        }
        ,
        this.onSessionExtendRequest = async(t,s)=>{
            const {id: o} = s;
            try {
                this.isValidExtend({
                    topic: t
                }),
                await this.setExpiry(t, Or(zo)),
                await this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }),
                this.client.events.emit("session_extend", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c),
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionExtendResponse = (t,s)=>{
            const {id: o} = s;
            Di(s) ? this.events.emit(Ut("session_extend", o), {}) : Wr(s) && this.events.emit(Ut("session_extend", o), {
                error: s.error
            })
        }
        ,
        this.onSessionPingRequest = async(t,s)=>{
            const {id: o} = s;
            try {
                this.isValidPing({
                    topic: t
                }),
                await this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }),
                this.client.events.emit("session_ping", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c),
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionPingResponse = (t,s)=>{
            const {id: o} = s;
            setTimeout(()=>{
                Di(s) ? this.events.emit(Ut("session_ping", o), {}) : Wr(s) && this.events.emit(Ut("session_ping", o), {
                    error: s.error
                })
            }
            , 500)
        }
        ,
        this.onSessionDeleteRequest = async(t,s)=>{
            const {id: o} = s;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: s.params
                }),
                await Promise.all([new Promise(c=>{
                    this.client.core.relayer.once(er.publish, async()=>{
                        c(await this.deleteSession({
                            topic: t,
                            id: o
                        }))
                    }
                    )
                }
                ), this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: wt("USER_DISCONNECTED")
                })])
            } catch (c) {
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionRequest = async(t,s)=>{
            const {id: o, params: c} = s;
            try {
                this.isValidRequest(cr({
                    topic: t
                }, c));
                const d = jn(JSON.stringify(qn("wc_sessionRequest", c, o)))
                  , f = this.client.session.get(t)
                  , y = await this.getVerifyContext(d, f.peer.metadata)
                  , g = {
                    id: o,
                    topic: t,
                    params: c,
                    verifyContext: y
                };
                await this.setPendingSessionRequest(g),
                this.addSessionRequestToSessionRequestQueue(g),
                this.processSessionRequestQueue()
            } catch (d) {
                await this.sendError(o, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.onSessionRequestResponse = (t,s)=>{
            const {id: o} = s;
            Di(s) ? this.events.emit(Ut("session_request", o), {
                result: s.result
            }) : Wr(s) && this.events.emit(Ut("session_request", o), {
                error: s.error
            })
        }
        ,
        this.onSessionEventRequest = async(t,s)=>{
            const {id: o, params: c} = s;
            try {
                const d = `${t}_session_event_${c.event.name}`
                  , f = jo.get(d);
                if (f && this.isRequestOutOfSync(f, o)) {
                    this.client.logger.info(`Discarding out of sync request - ${o}`);
                    return
                }
                this.isValidEmit(cr({
                    topic: t
                }, c)),
                this.client.events.emit("session_event", {
                    id: o,
                    topic: t,
                    params: c
                }),
                jo.set(d, o)
            } catch (d) {
                await this.sendError(o, t, d),
                this.client.logger.error(d)
            }
        }
        ,
        this.addSessionRequestToSessionRequestQueue = t=>{
            this.sessionRequestQueue.queue.push(t)
        }
        ,
        this.cleanupAfterResponse = t=>{
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            }),
            setTimeout(()=>{
                this.sessionRequestQueue.state = Ei.idle,
                this.processSessionRequestQueue()
            }
            , ve.toMiliseconds(this.requestQueueDelay))
        }
        ,
        this.cleanupPendingSentRequestsForTopic = ({topic: t, error: s})=>{
            const o = this.client.core.history.pending;
            o.length > 0 && o.filter(c=>c.topic === t && c.request.method === "wc_sessionRequest").forEach(c=>{
                this.events.emit(Ut("session_request", c.request.id), {
                    error: s
                })
            }
            )
        }
        ,
        this.processSessionRequestQueue = ()=>{
            if (this.sessionRequestQueue.state === Ei.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const t = this.sessionRequestQueue.queue[0];
            if (!t) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = Ei.active,
                this.client.events.emit("session_request", t)
            } catch (s) {
                this.client.logger.error(s)
            }
        }
        ,
        this.onPairingCreated = t=>{
            if (t.active)
                return;
            const s = this.client.proposal.getAll().find(o=>o.pairingTopic === t.topic);
            s && this.onSessionProposeRequest(t.topic, qn("wc_sessionPropose", {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties
            }, s.id))
        }
        ,
        this.isValidConnect = async t=>{
            if (!wr(t)) {
                const {message: y} = ce("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(y)
            }
            const {pairingTopic: s, requiredNamespaces: o, optionalNamespaces: c, sessionProperties: d, relays: f} = t;
            if (ur(s) || await this.isValidPairingTopic(s),
            !mD(f, !0)) {
                const {message: y} = ce("MISSING_OR_INVALID", `connect() relays: ${f}`);
                throw new Error(y)
            }
            !ur(o) && Is(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"),
            !ur(c) && Is(c) !== 0 && this.validateNamespaces(c, "optionalNamespaces"),
            ur(d) || this.validateSessionProps(d, "sessionProperties")
        }
        ,
        this.validateNamespaces = (t,s)=>{
            const o = vD(t, "connect()", s);
            if (o)
                throw new Error(o.message)
        }
        ,
        this.isValidApprove = async t=>{
            if (!wr(t))
                throw new Error(ce("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            const {id: s, namespaces: o, relayProtocol: c, sessionProperties: d} = t;
            await this.isValidProposalId(s);
            const f = this.client.proposal.get(s)
              , y = zc(o, "approve()");
            if (y)
                throw new Error(y.message);
            const g = Of(f.requiredNamespaces, o, "approve()");
            if (g)
                throw new Error(g.message);
            if (!Gt(c, !0)) {
                const {message: m} = ce("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
                throw new Error(m)
            }
            ur(d) || this.validateSessionProps(d, "sessionProperties")
        }
        ,
        this.isValidReject = async t=>{
            if (!wr(t)) {
                const {message: c} = ce("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(c)
            }
            const {id: s, reason: o} = t;
            if (await this.isValidProposalId(s),
            !_D(o)) {
                const {message: c} = ce("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
                throw new Error(c)
            }
        }
        ,
        this.isValidSessionSettleRequest = t=>{
            if (!wr(t)) {
                const {message: g} = ce("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(g)
            }
            const {relay: s, controller: o, namespaces: c, expiry: d} = t;
            if (!hp(s)) {
                const {message: g} = ce("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(g)
            }
            const f = lD(o, "onSessionSettleRequest()");
            if (f)
                throw new Error(f.message);
            const y = zc(c, "onSessionSettleRequest()");
            if (y)
                throw new Error(y.message);
            if (Mi(d)) {
                const {message: g} = ce("EXPIRED", "onSessionSettleRequest()");
                throw new Error(g)
            }
        }
        ,
        this.isValidUpdate = async t=>{
            if (!wr(t)) {
                const {message: y} = ce("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(y)
            }
            const {topic: s, namespaces: o} = t;
            await this.isValidSessionTopic(s);
            const c = this.client.session.get(s)
              , d = zc(o, "update()");
            if (d)
                throw new Error(d.message);
            const f = Of(c.requiredNamespaces, o, "update()");
            if (f)
                throw new Error(f.message)
        }
        ,
        this.isValidExtend = async t=>{
            if (!wr(t)) {
                const {message: o} = ce("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(o)
            }
            const {topic: s} = t;
            await this.isValidSessionTopic(s)
        }
        ,
        this.isValidRequest = async t=>{
            if (!wr(t)) {
                const {message: y} = ce("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(y)
            }
            const {topic: s, request: o, chainId: c, expiry: d} = t;
            await this.isValidSessionTopic(s);
            const {namespaces: f} = this.client.session.get(s);
            if (!xf(f, c)) {
                const {message: y} = ce("MISSING_OR_INVALID", `request() chainId: ${c}`);
                throw new Error(y)
            }
            if (!bD(o)) {
                const {message: y} = ce("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
                throw new Error(y)
            }
            if (!SD(f, c, o.method)) {
                const {message: y} = ce("MISSING_OR_INVALID", `request() method: ${o.method}`);
                throw new Error(y)
            }
            if (d && !PD(d, Zc)) {
                const {message: y} = ce("MISSING_OR_INVALID", `request() expiry: ${d}. Expiry must be a number (in seconds) between ${Zc.min} and ${Zc.max}`);
                throw new Error(y)
            }
        }
        ,
        this.isValidRespond = async t=>{
            var s;
            if (!wr(t)) {
                const {message: d} = ce("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(d)
            }
            const {topic: o, response: c} = t;
            try {
                await this.isValidSessionTopic(o)
            } catch (d) {
                throw (s = t == null ? void 0 : t.response) != null && s.id && this.cleanupAfterResponse(t),
                d
            }
            if (!ED(c)) {
                const {message: d} = ce("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(c)}`);
                throw new Error(d)
            }
        }
        ,
        this.isValidPing = async t=>{
            if (!wr(t)) {
                const {message: o} = ce("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(o)
            }
            const {topic: s} = t;
            await this.isValidSessionOrPairingTopic(s)
        }
        ,
        this.isValidEmit = async t=>{
            if (!wr(t)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(f)
            }
            const {topic: s, event: o, chainId: c} = t;
            await this.isValidSessionTopic(s);
            const {namespaces: d} = this.client.session.get(s);
            if (!xf(d, c)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() chainId: ${c}`);
                throw new Error(f)
            }
            if (!DD(o)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(f)
            }
            if (!ID(d, c, o.name)) {
                const {message: f} = ce("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(f)
            }
        }
        ,
        this.isValidDisconnect = async t=>{
            if (!wr(t)) {
                const {message: o} = ce("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(o)
            }
            const {topic: s} = t;
            await this.isValidSessionOrPairingTopic(s)
        }
        ,
        this.getVerifyContext = async(t,s)=>{
            const o = {
                verified: {
                    verifyUrl: s.verifyUrl || Mn,
                    validation: "UNKNOWN",
                    origin: s.url || ""
                }
            };
            try {
                const c = await this.client.core.verify.resolve({
                    attestationId: t,
                    verifyUrl: s.verifyUrl
                });
                c && (o.verified.origin = c.origin,
                o.verified.isScam = c.isScam,
                o.verified.validation = c.origin === new URL(s.url).origin ? "VALID" : "INVALID")
            } catch (c) {
                this.client.logger.info(c)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(o)}`),
            o
        }
        ,
        this.validateSessionProps = (t,s)=>{
            Object.values(t).forEach(o=>{
                if (!Gt(o, !1)) {
                    const {message: c} = ce("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
                    throw new Error(c)
                }
            }
            )
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {message: e} = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(er.message, async e=>{
            const {topic: t, message: s} = e;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
                return;
            const o = await this.client.core.crypto.decode(t, s);
            try {
                Ku(o) ? (this.client.core.history.set(t, o),
                this.onRelayEventRequest({
                    topic: t,
                    payload: o
                })) : ca(o) ? (await this.client.core.history.resolve(o),
                await this.onRelayEventResponse({
                    topic: t,
                    payload: o
                }),
                this.client.core.history.delete(t, o.id)) : this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: o
                })
            } catch (c) {
                this.client.logger.error(c)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(qr.expired, async e=>{
            const {topic: t, id: s} = cp(e.target);
            if (s && this.client.pendingRequest.keys.includes(s))
                return await this.deletePendingSessionRequest(s, ce("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                topic: t,
                expirerHasDeleted: !0
            }),
            this.client.events.emit("session_expire", {
                topic: t
            })) : s && (await this.deleteProposal(s, !0),
            this.client.events.emit("proposal_expire", {
                id: s
            }))
        }
        )
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(ws.create, e=>this.onPairingCreated(e))
    }
    isValidPairingTopic(e) {
        if (!Gt(e, !1)) {
            const {message: t} = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const {message: t} = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (Mi(this.client.core.pairing.pairings.get(e).expiry)) {
            const {message: t} = ce("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t)
        }
    }
    async isValidSessionTopic(e) {
        if (!Gt(e, !1)) {
            const {message: t} = ce("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.session.keys.includes(e)) {
            const {message: t} = ce("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (Mi(this.client.session.get(e).expiry)) {
            await this.deleteSession({
                topic: e
            });
            const {message: t} = ce("EXPIRED", `session topic: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.crypto.keychain.has(e)) {
            const {message: t} = ce("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
            throw await this.deleteSession({
                topic: e
            }),
            new Error(t)
        }
    }
    async isValidSessionOrPairingTopic(e) {
        if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
        else if (Gt(e, !1)) {
            const {message: t} = ce("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        } else {
            const {message: t} = ce("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
    }
    async isValidProposalId(e) {
        if (!wD(e)) {
            const {message: t} = ce("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
            throw new Error(t)
        }
        if (!this.client.proposal.keys.includes(e)) {
            const {message: t} = ce("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (Mi(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const {message: t} = ce("EXPIRED", `proposal id: ${e}`);
            throw new Error(t)
        }
    }
}
class aI extends ha {
    constructor(e, t) {
        super(e, t, J2, Gu),
        this.core = e,
        this.logger = t
    }
}
let cI = class extends ha {
    constructor(e, t) {
        super(e, t, Q2, Gu),
        this.core = e,
        this.logger = t
    }
}
;
class uI extends ha {
    constructor(e, t) {
        super(e, t, Z2, Gu, s=>s.id),
        this.core = e,
        this.logger = t
    }
}
let hI = class kp extends T3 {
    constructor(e) {
        super(e),
        this.protocol = zp,
        this.version = Bp,
        this.name = Xc.name,
        this.events = new Fr.EventEmitter,
        this.on = (s,o)=>this.events.on(s, o),
        this.once = (s,o)=>this.events.once(s, o),
        this.off = (s,o)=>this.events.off(s, o),
        this.removeListener = (s,o)=>this.events.removeListener(s, o),
        this.removeAllListeners = s=>this.events.removeAllListeners(s),
        this.connect = async s=>{
            try {
                return await this.engine.connect(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.pair = async s=>{
            try {
                return await this.engine.pair(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.approve = async s=>{
            try {
                return await this.engine.approve(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.reject = async s=>{
            try {
                return await this.engine.reject(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.update = async s=>{
            try {
                return await this.engine.update(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.extend = async s=>{
            try {
                return await this.engine.extend(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.request = async s=>{
            try {
                return await this.engine.request(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.respond = async s=>{
            try {
                return await this.engine.respond(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.ping = async s=>{
            try {
                return await this.engine.ping(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.emit = async s=>{
            try {
                return await this.engine.emit(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.disconnect = async s=>{
            try {
                return await this.engine.disconnect(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.find = s=>{
            try {
                return this.engine.find(s)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.getPendingSessionRequests = ()=>{
            try {
                return this.engine.getPendingSessionRequests()
            } catch (s) {
                throw this.logger.error(s.message),
                s
            }
        }
        ,
        this.name = (e == null ? void 0 : e.name) || Xc.name,
        this.metadata = (e == null ? void 0 : e.metadata) || UE();
        const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Je.pino(Je.getDefaultLoggerOptions({
            level: (e == null ? void 0 : e.logger) || Xc.logger
        }));
        this.core = (e == null ? void 0 : e.core) || new Y2(e),
        this.logger = Je.generateChildLogger(t, this.name),
        this.session = new cI(this.core,this.logger),
        this.proposal = new aI(this.core,this.logger),
        this.pendingRequest = new uI(this.core,this.logger),
        this.engine = new oI(this)
    }
    static async init(e) {
        const t = new kp(e);
        return await t.initialize(),
        t
    }
    get context() {
        return Je.getLoggerContext(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.engine.init(),
            this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }),
            this.logger.info("SignClient Initialization Success")
        } catch (e) {
            throw this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e
        }
    }
}
;
var Eu = {
    exports: {}
};
(function(i, e) {
    var t = typeof self < "u" ? self : Yr
      , s = function() {
        function c() {
            this.fetch = !1,
            this.DOMException = t.DOMException
        }
        return c.prototype = t,
        new c
    }();
    (function(c) {
        (function(d) {
            var f = {
                searchParams: "URLSearchParams"in c,
                iterable: "Symbol"in c && "iterator"in Symbol,
                blob: "FileReader"in c && "Blob"in c && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in c,
                arrayBuffer: "ArrayBuffer"in c
            };
            function y(b) {
                return b && DataView.prototype.isPrototypeOf(b)
            }
            if (f.arrayBuffer)
                var g = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , m = ArrayBuffer.isView || function(b) {
                    return b && g.indexOf(Object.prototype.toString.call(b)) > -1
                }
                ;
            function D(b) {
                if (typeof b != "string" && (b = String(b)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
                    throw new TypeError("Invalid character in header field name");
                return b.toLowerCase()
            }
            function I(b) {
                return typeof b != "string" && (b = String(b)),
                b
            }
            function T(b) {
                var C = {
                    next: function() {
                        var ee = b.shift();
                        return {
                            done: ee === void 0,
                            value: ee
                        }
                    }
                };
                return f.iterable && (C[Symbol.iterator] = function() {
                    return C
                }
                ),
                C
            }
            function P(b) {
                this.map = {},
                b instanceof P ? b.forEach(function(C, ee) {
                    this.append(ee, C)
                }, this) : Array.isArray(b) ? b.forEach(function(C) {
                    this.append(C[0], C[1])
                }, this) : b && Object.getOwnPropertyNames(b).forEach(function(C) {
                    this.append(C, b[C])
                }, this)
            }
            P.prototype.append = function(b, C) {
                b = D(b),
                C = I(C);
                var ee = this.map[b];
                this.map[b] = ee ? ee + ", " + C : C
            }
            ,
            P.prototype.delete = function(b) {
                delete this.map[D(b)]
            }
            ,
            P.prototype.get = function(b) {
                return b = D(b),
                this.has(b) ? this.map[b] : null
            }
            ,
            P.prototype.has = function(b) {
                return this.map.hasOwnProperty(D(b))
            }
            ,
            P.prototype.set = function(b, C) {
                this.map[D(b)] = I(C)
            }
            ,
            P.prototype.forEach = function(b, C) {
                for (var ee in this.map)
                    this.map.hasOwnProperty(ee) && b.call(C, this.map[ee], ee, this)
            }
            ,
            P.prototype.keys = function() {
                var b = [];
                return this.forEach(function(C, ee) {
                    b.push(ee)
                }),
                T(b)
            }
            ,
            P.prototype.values = function() {
                var b = [];
                return this.forEach(function(C) {
                    b.push(C)
                }),
                T(b)
            }
            ,
            P.prototype.entries = function() {
                var b = [];
                return this.forEach(function(C, ee) {
                    b.push([ee, C])
                }),
                T(b)
            }
            ,
            f.iterable && (P.prototype[Symbol.iterator] = P.prototype.entries);
            function z(b) {
                if (b.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                b.bodyUsed = !0
            }
            function H(b) {
                return new Promise(function(C, ee) {
                    b.onload = function() {
                        C(b.result)
                    }
                    ,
                    b.onerror = function() {
                        ee(b.error)
                    }
                }
                )
            }
            function ie(b) {
                var C = new FileReader
                  , ee = H(C);
                return C.readAsArrayBuffer(b),
                ee
            }
            function U(b) {
                var C = new FileReader
                  , ee = H(C);
                return C.readAsText(b),
                ee
            }
            function j(b) {
                for (var C = new Uint8Array(b), ee = new Array(C.length), Q = 0; Q < C.length; Q++)
                    ee[Q] = String.fromCharCode(C[Q]);
                return ee.join("")
            }
            function O(b) {
                if (b.slice)
                    return b.slice(0);
                var C = new Uint8Array(b.byteLength);
                return C.set(new Uint8Array(b)),
                C.buffer
            }
            function A() {
                return this.bodyUsed = !1,
                this._initBody = function(b) {
                    this._bodyInit = b,
                    b ? typeof b == "string" ? this._bodyText = b : f.blob && Blob.prototype.isPrototypeOf(b) ? this._bodyBlob = b : f.formData && FormData.prototype.isPrototypeOf(b) ? this._bodyFormData = b : f.searchParams && URLSearchParams.prototype.isPrototypeOf(b) ? this._bodyText = b.toString() : f.arrayBuffer && f.blob && y(b) ? (this._bodyArrayBuffer = O(b.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(b) || m(b)) ? this._bodyArrayBuffer = O(b) : this._bodyText = b = Object.prototype.toString.call(b) : this._bodyText = "",
                    this.headers.get("content-type") || (typeof b == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(b) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                f.blob && (this.blob = function() {
                    var b = z(this);
                    if (b)
                        return b;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? z(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ie)
                }
                ),
                this.text = function() {
                    var b = z(this);
                    if (b)
                        return b;
                    if (this._bodyBlob)
                        return U(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(j(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                f.formData && (this.formData = function() {
                    return this.text().then(G)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function u(b) {
                var C = b.toUpperCase();
                return E.indexOf(C) > -1 ? C : b
            }
            function _(b, C) {
                C = C || {};
                var ee = C.body;
                if (b instanceof _) {
                    if (b.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = b.url,
                    this.credentials = b.credentials,
                    C.headers || (this.headers = new P(b.headers)),
                    this.method = b.method,
                    this.mode = b.mode,
                    this.signal = b.signal,
                    !ee && b._bodyInit != null && (ee = b._bodyInit,
                    b.bodyUsed = !0)
                } else
                    this.url = String(b);
                if (this.credentials = C.credentials || this.credentials || "same-origin",
                (C.headers || !this.headers) && (this.headers = new P(C.headers)),
                this.method = u(C.method || this.method || "GET"),
                this.mode = C.mode || this.mode || null,
                this.signal = C.signal || this.signal,
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && ee)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(ee)
            }
            _.prototype.clone = function() {
                return new _(this,{
                    body: this._bodyInit
                })
            }
            ;
            function G(b) {
                var C = new FormData;
                return b.trim().split("&").forEach(function(ee) {
                    if (ee) {
                        var Q = ee.split("=")
                          , k = Q.shift().replace(/\+/g, " ")
                          , V = Q.join("=").replace(/\+/g, " ");
                        C.append(decodeURIComponent(k), decodeURIComponent(V))
                    }
                }),
                C
            }
            function W(b) {
                var C = new P
                  , ee = b.replace(/\r?\n[\t ]+/g, " ");
                return ee.split(/\r?\n/).forEach(function(Q) {
                    var k = Q.split(":")
                      , V = k.shift().trim();
                    if (V) {
                        var J = k.join(":").trim();
                        C.append(V, J)
                    }
                }),
                C
            }
            A.call(_.prototype);
            function se(b, C) {
                C || (C = {}),
                this.type = "default",
                this.status = C.status === void 0 ? 200 : C.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in C ? C.statusText : "OK",
                this.headers = new P(C.headers),
                this.url = C.url || "",
                this._initBody(b)
            }
            A.call(se.prototype),
            se.prototype.clone = function() {
                return new se(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new P(this.headers),
                    url: this.url
                })
            }
            ,
            se.error = function() {
                var b = new se(null,{
                    status: 0,
                    statusText: ""
                });
                return b.type = "error",
                b
            }
            ;
            var ue = [301, 302, 303, 307, 308];
            se.redirect = function(b, C) {
                if (ue.indexOf(C) === -1)
                    throw new RangeError("Invalid status code");
                return new se(null,{
                    status: C,
                    headers: {
                        location: b
                    }
                })
            }
            ,
            d.DOMException = c.DOMException;
            try {
                new d.DOMException
            } catch {
                d.DOMException = function(C, ee) {
                    this.message = C,
                    this.name = ee;
                    var Q = Error(C);
                    this.stack = Q.stack
                }
                ,
                d.DOMException.prototype = Object.create(Error.prototype),
                d.DOMException.prototype.constructor = d.DOMException
            }
            function de(b, C) {
                return new Promise(function(ee, Q) {
                    var k = new _(b,C);
                    if (k.signal && k.signal.aborted)
                        return Q(new d.DOMException("Aborted","AbortError"));
                    var V = new XMLHttpRequest;
                    function J() {
                        V.abort()
                    }
                    V.onload = function() {
                        var re = {
                            status: V.status,
                            statusText: V.statusText,
                            headers: W(V.getAllResponseHeaders() || "")
                        };
                        re.url = "responseURL"in V ? V.responseURL : re.headers.get("X-Request-URL");
                        var _e = "response"in V ? V.response : V.responseText;
                        ee(new se(_e,re))
                    }
                    ,
                    V.onerror = function() {
                        Q(new TypeError("Network request failed"))
                    }
                    ,
                    V.ontimeout = function() {
                        Q(new TypeError("Network request failed"))
                    }
                    ,
                    V.onabort = function() {
                        Q(new d.DOMException("Aborted","AbortError"))
                    }
                    ,
                    V.open(k.method, k.url, !0),
                    k.credentials === "include" ? V.withCredentials = !0 : k.credentials === "omit" && (V.withCredentials = !1),
                    "responseType"in V && f.blob && (V.responseType = "blob"),
                    k.headers.forEach(function(re, _e) {
                        V.setRequestHeader(_e, re)
                    }),
                    k.signal && (k.signal.addEventListener("abort", J),
                    V.onreadystatechange = function() {
                        V.readyState === 4 && k.signal.removeEventListener("abort", J)
                    }
                    ),
                    V.send(typeof k._bodyInit > "u" ? null : k._bodyInit)
                }
                )
            }
            return de.polyfill = !0,
            c.fetch || (c.fetch = de,
            c.Headers = P,
            c.Request = _,
            c.Response = se),
            d.Headers = P,
            d.Request = _,
            d.Response = se,
            d.fetch = de,
            Object.defineProperty(d, "__esModule", {
                value: !0
            }),
            d
        }
        )({})
    }
    )(s),
    s.fetch.ponyfill = !0,
    delete s.fetch.polyfill;
    var o = s;
    e = o.fetch,
    e.default = o.fetch,
    e.fetch = o.fetch,
    e.Headers = o.Headers,
    e.Request = o.Request,
    e.Response = o.Response,
    i.exports = e
}
)(Eu, Eu.exports);
var lI = Eu.exports;
const _d = Ou(lI)
  , fI = {
    Accept: "application/json",
    "Content-Type": "application/json"
}
  , dI = "POST"
  , bd = {
    headers: fI,
    method: dI
}
  , Ed = 10;
class zi {
    constructor(e, t=!1) {
        if (this.url = e,
        this.disableProviderPing = t,
        this.events = new Fr.EventEmitter,
        this.isAvailable = !1,
        this.registering = !1,
        !Wf(e))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        this.url = e,
        this.disableProviderPing = t
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async open(e=this.url) {
        await this.register(e)
    }
    async close() {
        if (!this.isAvailable)
            throw new Error("Connection already closed");
        this.onClose()
    }
    async send(e, t) {
        this.isAvailable || await this.register();
        try {
            const s = cn(e)
              , c = await (await _d(this.url, Object.assign(Object.assign({}, bd), {
                body: s
            }))).json();
            this.onPayload({
                data: c
            })
        } catch (s) {
            this.onError(e.id, s)
        }
    }
    async register(e=this.url) {
        if (!Wf(e))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
            new Promise((s,o)=>{
                this.events.once("register_error", c=>{
                    this.resetMaxListeners(),
                    o(c)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.isAvailable > "u")
                        return o(new Error("HTTP connection is missing or invalid"));
                    s()
                }
                )
            }
            )
        }
        this.url = e,
        this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const t = cn({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await _d(e, Object.assign(Object.assign({}, bd), {
                    body: t
                }))
            }
            this.onOpen()
        } catch (t) {
            const s = this.parseError(t);
            throw this.events.emit("register_error", s),
            this.onClose(),
            s
        }
    }
    onOpen() {
        this.isAvailable = !0,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1,
        this.registering = !1,
        this.events.emit("close")
    }
    onPayload(e) {
        if (typeof e.data > "u")
            return;
        const t = typeof e.data == "string" ? Ts(e.data) : e.data;
        this.events.emit("payload", t)
    }
    onError(e, t) {
        const s = this.parseError(t)
          , o = s.message || s.toString()
          , c = aa(e, o);
        this.events.emit("payload", c)
    }
    parseError(e, t=this.url) {
        return Ep(e, t, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Ed && this.events.setMaxListeners(Ed)
    }
}
const Dd = "error"
  , pI = "wss://relay.walletconnect.com"
  , gI = "wc"
  , yI = "universal_provider"
  , Sd = `${gI}@2:${yI}:`
  , vI = "https://rpc.walletconnect.com/v1/"
  , Ii = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var vs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Du = {
    exports: {}
};
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(i, e) {
    (function() {
        var t, s = "4.17.21", o = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", g = 500, m = "__lodash_placeholder__", D = 1, I = 2, T = 4, P = 1, z = 2, H = 1, ie = 2, U = 4, j = 8, O = 16, A = 32, E = 64, u = 128, _ = 256, G = 512, W = 30, se = "...", ue = 800, de = 16, b = 1, C = 2, ee = 3, Q = 1 / 0, k = 9007199254740991, V = 17976931348623157e292, J = NaN, re = 4294967295, _e = re - 1, oe = re >>> 1, be = [["ary", u], ["bind", H], ["bindKey", ie], ["curry", j], ["curryRight", O], ["flip", G], ["partial", A], ["partialRight", E], ["rearg", _]], le = "[object Arguments]", me = "[object Array]", B = "[object AsyncFunction]", F = "[object Boolean]", L = "[object Date]", l = "[object DOMException]", R = "[object Error]", ae = "[object Function]", fe = "[object GeneratorFunction]", Ie = "[object Map]", Be = "[object Number]", ke = "[object Null]", Me = "[object Object]", pt = "[object Promise]", gt = "[object Proxy]", qe = "[object RegExp]", xe = "[object Set]", Ne = "[object String]", Ue = "[object Symbol]", Fe = "[object Undefined]", Pe = "[object WeakMap]", Le = "[object WeakSet]", Se = "[object ArrayBuffer]", Ce = "[object DataView]", He = "[object Float32Array]", Oe = "[object Float64Array]", Ve = "[object Int8Array]", We = "[object Int16Array]", et = "[object Int32Array]", tt = "[object Uint8Array]", Qe = "[object Uint8ClampedArray]", tr = "[object Uint16Array]", fr = "[object Uint32Array]", Jr = /\b__p \+= '';/g, rr = /\b(__p \+=) '' \+/g, oi = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xi = /&(?:amp|lt|gt|quot|#39);/g, Bi = /[&<>"']/g, Dt = RegExp(xi.source), yt = RegExp(Bi.source), St = /<%-([\s\S]+?)%>/g, It = /<%([\s\S]+?)%>/g, bt = /<%=([\s\S]+?)%>/g, vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lt = /^\w*$/, $t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xt = /[\\^$.*+?()[\]{}|]/g, Mt = RegExp(xt.source), Ot = /^\s+/, At = /\s/, Pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ht = /\{\n\/\* \[wrapped with (.+)\] \*/, jt = /,? & /, qt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, la = /[()=,{}\[\]\/\s]/, fa = /\\(\\)?/g, da = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ar = /\w*$/, pa = /^[-+]0x[0-9a-f]+$/i, ga = /^0b[01]+$/i, ya = /^\[object .+?Constructor\]$/, va = /^0o[0-7]+$/i, ma = /^(?:0|[1-9]\d*)$/, ai = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, pn = /($^)/, wa = /['\n\r\u2028\u2029\\]/g, gn = "\\ud800-\\udfff", _a = "\\u0300-\\u036f", ba = "\\ufe20-\\ufe2f", yn = "\\u20d0-\\u20ff", Ns = _a + ba + yn, Us = "\\u2700-\\u27bf", zr = "a-z\\xdf-\\xf6\\xf8-\\xff", Ea = "\\xac\\xb1\\xd7\\xf7", Da = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Sa = "\\u2000-\\u206f", Ia = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ls = "A-Z\\xc0-\\xd6\\xd8-\\xde", $s = "\\ufe0e\\ufe0f", Hi = Ea + Da + Sa + Ia, Vn = "['’]", Ki = "[" + gn + "]", Gn = "[" + Hi + "]", ki = "[" + Ns + "]", Ms = "\\d+", xa = "[" + Us + "]", js = "[" + zr + "]", qs = "[^" + gn + Hi + Ms + Us + zr + Ls + "]", vn = "\\ud83c[\\udffb-\\udfff]", Oa = "(?:" + ki + "|" + vn + ")", Fs = "[^" + gn + "]", mn = "(?:\\ud83c[\\udde6-\\uddff]){2}", Oi = "[\\ud800-\\udbff][\\udc00-\\udfff]", br = "[" + Ls + "]", zs = "\\u200d", Bs = "(?:" + js + "|" + qs + ")", Qr = "(?:" + br + "|" + qs + ")", Hs = "(?:" + Vn + "(?:d|ll|m|re|s|t|ve))?", Ks = "(?:" + Vn + "(?:D|LL|M|RE|S|T|VE))?", ks = Oa + "?", Vs = "[" + $s + "]?", Pa = "(?:" + zs + "(?:" + [Fs, mn, Oi].join("|") + ")" + Vs + ks + ")*", ci = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Gs = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ws = Vs + ks + Pa, wn = "(?:" + [xa, mn, Oi].join("|") + ")" + Ws, Ca = "(?:" + [Fs + ki + "?", ki, mn, Oi, Ki].join("|") + ")", Wn = RegExp(Vn, "g"), Aa = RegExp(ki, "g"), _n = RegExp(vn + "(?=" + vn + ")|" + Ca + Ws, "g"), Ys = RegExp([br + "?" + js + "+" + Hs + "(?=" + [Gn, br, "$"].join("|") + ")", Qr + "+" + Ks + "(?=" + [Gn, br + Bs, "$"].join("|") + ")", br + "?" + Bs + "+" + Hs, br + "+" + Ks, Gs, ci, Ms, wn].join("|"), "g"), Js = RegExp("[" + zs + gn + Ns + $s + "]"), Vi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Qs = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ta = -1, ot = {};
        ot[He] = ot[Oe] = ot[Ve] = ot[We] = ot[et] = ot[tt] = ot[Qe] = ot[tr] = ot[fr] = !0,
        ot[le] = ot[me] = ot[Se] = ot[F] = ot[Ce] = ot[L] = ot[R] = ot[ae] = ot[Ie] = ot[Be] = ot[Me] = ot[qe] = ot[xe] = ot[Ne] = ot[Pe] = !1;
        var st = {};
        st[le] = st[me] = st[Se] = st[Ce] = st[F] = st[L] = st[He] = st[Oe] = st[Ve] = st[We] = st[et] = st[Ie] = st[Be] = st[Me] = st[qe] = st[xe] = st[Ne] = st[Ue] = st[tt] = st[Qe] = st[tr] = st[fr] = !0,
        st[R] = st[ae] = st[Pe] = !1;
        var S = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
        }
          , $ = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , te = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , pe = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , at = parseFloat
          , Te = parseInt
          , ft = typeof vs == "object" && vs && vs.Object === Object && vs
          , Ft = typeof self == "object" && self && self.Object === Object && self
          , Xe = ft || Ft || Function("return this")()
          , ct = e && !e.nodeType && e
          , Tt = ct && !0 && i && !i.nodeType && i
          , dr = Tt && Tt.exports === ct
          , zt = dr && ft.process
          , dt = function() {
            try {
                var M = Tt && Tt.require && Tt.require("util").types;
                return M || zt && zt.binding && zt.binding("util")
            } catch {}
        }()
          , ir = dt && dt.isArrayBuffer
          , Br = dt && dt.isDate
          , Tr = dt && dt.isMap
          , Xr = dt && dt.isRegExp
          , Yn = dt && dt.isSet
          , Gi = dt && dt.isTypedArray;
        function Kt(M, Y, K) {
            switch (K.length) {
            case 0:
                return M.call(Y);
            case 1:
                return M.call(Y, K[0]);
            case 2:
                return M.call(Y, K[0], K[1]);
            case 3:
                return M.call(Y, K[0], K[1], K[2])
            }
            return M.apply(Y, K)
        }
        function Wp(M, Y, K, ge) {
            for (var Ae = -1, rt = M == null ? 0 : M.length; ++Ae < rt; ) {
                var Bt = M[Ae];
                Y(ge, Bt, K(Bt), M)
            }
            return ge
        }
        function Rr(M, Y) {
            for (var K = -1, ge = M == null ? 0 : M.length; ++K < ge && Y(M[K], K, M) !== !1; )
                ;
            return M
        }
        function Yp(M, Y) {
            for (var K = M == null ? 0 : M.length; K-- && Y(M[K], K, M) !== !1; )
                ;
            return M
        }
        function Ju(M, Y) {
            for (var K = -1, ge = M == null ? 0 : M.length; ++K < ge; )
                if (!Y(M[K], K, M))
                    return !1;
            return !0
        }
        function Pi(M, Y) {
            for (var K = -1, ge = M == null ? 0 : M.length, Ae = 0, rt = []; ++K < ge; ) {
                var Bt = M[K];
                Y(Bt, K, M) && (rt[Ae++] = Bt)
            }
            return rt
        }
        function Xs(M, Y) {
            var K = M == null ? 0 : M.length;
            return !!K && bn(M, Y, 0) > -1
        }
        function Ra(M, Y, K) {
            for (var ge = -1, Ae = M == null ? 0 : M.length; ++ge < Ae; )
                if (K(Y, M[ge]))
                    return !0;
            return !1
        }
        function mt(M, Y) {
            for (var K = -1, ge = M == null ? 0 : M.length, Ae = Array(ge); ++K < ge; )
                Ae[K] = Y(M[K], K, M);
            return Ae
        }
        function Ci(M, Y) {
            for (var K = -1, ge = Y.length, Ae = M.length; ++K < ge; )
                M[Ae + K] = Y[K];
            return M
        }
        function Na(M, Y, K, ge) {
            var Ae = -1
              , rt = M == null ? 0 : M.length;
            for (ge && rt && (K = M[++Ae]); ++Ae < rt; )
                K = Y(K, M[Ae], Ae, M);
            return K
        }
        function Jp(M, Y, K, ge) {
            var Ae = M == null ? 0 : M.length;
            for (ge && Ae && (K = M[--Ae]); Ae--; )
                K = Y(K, M[Ae], Ae, M);
            return K
        }
        function Ua(M, Y) {
            for (var K = -1, ge = M == null ? 0 : M.length; ++K < ge; )
                if (Y(M[K], K, M))
                    return !0;
            return !1
        }
        var Qp = La("length");
        function Xp(M) {
            return M.split("")
        }
        function Zp(M) {
            return M.match(qt) || []
        }
        function Qu(M, Y, K) {
            var ge;
            return K(M, function(Ae, rt, Bt) {
                if (Y(Ae, rt, Bt))
                    return ge = rt,
                    !1
            }),
            ge
        }
        function Zs(M, Y, K, ge) {
            for (var Ae = M.length, rt = K + (ge ? 1 : -1); ge ? rt-- : ++rt < Ae; )
                if (Y(M[rt], rt, M))
                    return rt;
            return -1
        }
        function bn(M, Y, K) {
            return Y === Y ? lg(M, Y, K) : Zs(M, Xu, K)
        }
        function eg(M, Y, K, ge) {
            for (var Ae = K - 1, rt = M.length; ++Ae < rt; )
                if (ge(M[Ae], Y))
                    return Ae;
            return -1
        }
        function Xu(M) {
            return M !== M
        }
        function Zu(M, Y) {
            var K = M == null ? 0 : M.length;
            return K ? Ma(M, Y) / K : J
        }
        function La(M) {
            return function(Y) {
                return Y == null ? t : Y[M]
            }
        }
        function $a(M) {
            return function(Y) {
                return M == null ? t : M[Y]
            }
        }
        function eh(M, Y, K, ge, Ae) {
            return Ae(M, function(rt, Bt, ut) {
                K = ge ? (ge = !1,
                rt) : Y(K, rt, Bt, ut)
            }),
            K
        }
        function tg(M, Y) {
            var K = M.length;
            for (M.sort(Y); K--; )
                M[K] = M[K].value;
            return M
        }
        function Ma(M, Y) {
            for (var K, ge = -1, Ae = M.length; ++ge < Ae; ) {
                var rt = Y(M[ge]);
                rt !== t && (K = K === t ? rt : K + rt)
            }
            return K
        }
        function ja(M, Y) {
            for (var K = -1, ge = Array(M); ++K < M; )
                ge[K] = Y(K);
            return ge
        }
        function rg(M, Y) {
            return mt(Y, function(K) {
                return [K, M[K]]
            })
        }
        function th(M) {
            return M && M.slice(0, sh(M) + 1).replace(Ot, "")
        }
        function Er(M) {
            return function(Y) {
                return M(Y)
            }
        }
        function qa(M, Y) {
            return mt(Y, function(K) {
                return M[K]
            })
        }
        function Jn(M, Y) {
            return M.has(Y)
        }
        function rh(M, Y) {
            for (var K = -1, ge = M.length; ++K < ge && bn(Y, M[K], 0) > -1; )
                ;
            return K
        }
        function ih(M, Y) {
            for (var K = M.length; K-- && bn(Y, M[K], 0) > -1; )
                ;
            return K
        }
        function ig(M, Y) {
            for (var K = M.length, ge = 0; K--; )
                M[K] === Y && ++ge;
            return ge
        }
        var ng = $a(S)
          , sg = $a($);
        function og(M) {
            return "\\" + pe[M]
        }
        function ag(M, Y) {
            return M == null ? t : M[Y]
        }
        function En(M) {
            return Js.test(M)
        }
        function cg(M) {
            return Vi.test(M)
        }
        function ug(M) {
            for (var Y, K = []; !(Y = M.next()).done; )
                K.push(Y.value);
            return K
        }
        function Fa(M) {
            var Y = -1
              , K = Array(M.size);
            return M.forEach(function(ge, Ae) {
                K[++Y] = [Ae, ge]
            }),
            K
        }
        function nh(M, Y) {
            return function(K) {
                return M(Y(K))
            }
        }
        function Ai(M, Y) {
            for (var K = -1, ge = M.length, Ae = 0, rt = []; ++K < ge; ) {
                var Bt = M[K];
                (Bt === Y || Bt === m) && (M[K] = m,
                rt[Ae++] = K)
            }
            return rt
        }
        function eo(M) {
            var Y = -1
              , K = Array(M.size);
            return M.forEach(function(ge) {
                K[++Y] = ge
            }),
            K
        }
        function hg(M) {
            var Y = -1
              , K = Array(M.size);
            return M.forEach(function(ge) {
                K[++Y] = [ge, ge]
            }),
            K
        }
        function lg(M, Y, K) {
            for (var ge = K - 1, Ae = M.length; ++ge < Ae; )
                if (M[ge] === Y)
                    return ge;
            return -1
        }
        function fg(M, Y, K) {
            for (var ge = K + 1; ge--; )
                if (M[ge] === Y)
                    return ge;
            return ge
        }
        function Dn(M) {
            return En(M) ? pg(M) : Qp(M)
        }
        function Hr(M) {
            return En(M) ? gg(M) : Xp(M)
        }
        function sh(M) {
            for (var Y = M.length; Y-- && At.test(M.charAt(Y)); )
                ;
            return Y
        }
        var dg = $a(te);
        function pg(M) {
            for (var Y = _n.lastIndex = 0; _n.test(M); )
                ++Y;
            return Y
        }
        function gg(M) {
            return M.match(_n) || []
        }
        function yg(M) {
            return M.match(Ys) || []
        }
        var vg = function M(Y) {
            Y = Y == null ? Xe : Sn.defaults(Xe.Object(), Y, Sn.pick(Xe, Qs));
            var K = Y.Array
              , ge = Y.Date
              , Ae = Y.Error
              , rt = Y.Function
              , Bt = Y.Math
              , ut = Y.Object
              , za = Y.RegExp
              , mg = Y.String
              , Nr = Y.TypeError
              , to = K.prototype
              , wg = rt.prototype
              , In = ut.prototype
              , ro = Y["__core-js_shared__"]
              , io = wg.toString
              , nt = In.hasOwnProperty
              , _g = 0
              , oh = function() {
                var r = /[^.]+$/.exec(ro && ro.keys && ro.keys.IE_PROTO || "");
                return r ? "Symbol(src)_1." + r : ""
            }()
              , no = In.toString
              , bg = io.call(ut)
              , Eg = Xe._
              , Dg = za("^" + io.call(nt).replace(xt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , so = dr ? Y.Buffer : t
              , Ti = Y.Symbol
              , oo = Y.Uint8Array
              , ah = so ? so.allocUnsafe : t
              , ao = nh(ut.getPrototypeOf, ut)
              , ch = ut.create
              , uh = In.propertyIsEnumerable
              , co = to.splice
              , hh = Ti ? Ti.isConcatSpreadable : t
              , Qn = Ti ? Ti.iterator : t
              , Wi = Ti ? Ti.toStringTag : t
              , uo = function() {
                try {
                    var r = Zi(ut, "defineProperty");
                    return r({}, "", {}),
                    r
                } catch {}
            }()
              , Sg = Y.clearTimeout !== Xe.clearTimeout && Y.clearTimeout
              , Ig = ge && ge.now !== Xe.Date.now && ge.now
              , xg = Y.setTimeout !== Xe.setTimeout && Y.setTimeout
              , ho = Bt.ceil
              , lo = Bt.floor
              , Ba = ut.getOwnPropertySymbols
              , Og = so ? so.isBuffer : t
              , lh = Y.isFinite
              , Pg = to.join
              , Cg = nh(ut.keys, ut)
              , Ht = Bt.max
              , Qt = Bt.min
              , Ag = ge.now
              , Tg = Y.parseInt
              , fh = Bt.random
              , Rg = to.reverse
              , Ha = Zi(Y, "DataView")
              , Xn = Zi(Y, "Map")
              , Ka = Zi(Y, "Promise")
              , xn = Zi(Y, "Set")
              , Zn = Zi(Y, "WeakMap")
              , es = Zi(ut, "create")
              , fo = Zn && new Zn
              , On = {}
              , Ng = en(Ha)
              , Ug = en(Xn)
              , Lg = en(Ka)
              , $g = en(xn)
              , Mg = en(Zn)
              , po = Ti ? Ti.prototype : t
              , ts = po ? po.valueOf : t
              , dh = po ? po.toString : t;
            function v(r) {
                if (Ct(r) && !Re(r) && !(r instanceof Ye)) {
                    if (r instanceof Ur)
                        return r;
                    if (nt.call(r, "__wrapped__"))
                        return pl(r)
                }
                return new Ur(r)
            }
            var Pn = function() {
                function r() {}
                return function(n) {
                    if (!Et(n))
                        return {};
                    if (ch)
                        return ch(n);
                    r.prototype = n;
                    var a = new r;
                    return r.prototype = t,
                    a
                }
            }();
            function go() {}
            function Ur(r, n) {
                this.__wrapped__ = r,
                this.__actions__ = [],
                this.__chain__ = !!n,
                this.__index__ = 0,
                this.__values__ = t
            }
            v.templateSettings = {
                escape: St,
                evaluate: It,
                interpolate: bt,
                variable: "",
                imports: {
                    _: v
                }
            },
            v.prototype = go.prototype,
            v.prototype.constructor = v,
            Ur.prototype = Pn(go.prototype),
            Ur.prototype.constructor = Ur;
            function Ye(r) {
                this.__wrapped__ = r,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = re,
                this.__views__ = []
            }
            function jg() {
                var r = new Ye(this.__wrapped__);
                return r.__actions__ = pr(this.__actions__),
                r.__dir__ = this.__dir__,
                r.__filtered__ = this.__filtered__,
                r.__iteratees__ = pr(this.__iteratees__),
                r.__takeCount__ = this.__takeCount__,
                r.__views__ = pr(this.__views__),
                r
            }
            function qg() {
                if (this.__filtered__) {
                    var r = new Ye(this);
                    r.__dir__ = -1,
                    r.__filtered__ = !0
                } else
                    r = this.clone(),
                    r.__dir__ *= -1;
                return r
            }
            function Fg() {
                var r = this.__wrapped__.value()
                  , n = this.__dir__
                  , a = Re(r)
                  , h = n < 0
                  , p = a ? r.length : 0
                  , w = X0(0, p, this.__views__)
                  , x = w.start
                  , N = w.end
                  , q = N - x
                  , X = h ? N : x - 1
                  , Z = this.__iteratees__
                  , ne = Z.length
                  , he = 0
                  , ye = Qt(q, this.__takeCount__);
                if (!a || !h && p == q && ye == q)
                    return Mh(r, this.__actions__);
                var Ee = [];
                e: for (; q-- && he < ye; ) {
                    X += n;
                    for (var ze = -1, De = r[X]; ++ze < ne; ) {
                        var Ge = Z[ze]
                          , Ze = Ge.iteratee
                          , Ir = Ge.type
                          , or = Ze(De);
                        if (Ir == C)
                            De = or;
                        else if (!or) {
                            if (Ir == b)
                                continue e;
                            break e
                        }
                    }
                    Ee[he++] = De
                }
                return Ee
            }
            Ye.prototype = Pn(go.prototype),
            Ye.prototype.constructor = Ye;
            function Yi(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.clear(); ++n < a; ) {
                    var h = r[n];
                    this.set(h[0], h[1])
                }
            }
            function zg() {
                this.__data__ = es ? es(null) : {},
                this.size = 0
            }
            function Bg(r) {
                var n = this.has(r) && delete this.__data__[r];
                return this.size -= n ? 1 : 0,
                n
            }
            function Hg(r) {
                var n = this.__data__;
                if (es) {
                    var a = n[r];
                    return a === y ? t : a
                }
                return nt.call(n, r) ? n[r] : t
            }
            function Kg(r) {
                var n = this.__data__;
                return es ? n[r] !== t : nt.call(n, r)
            }
            function kg(r, n) {
                var a = this.__data__;
                return this.size += this.has(r) ? 0 : 1,
                a[r] = es && n === t ? y : n,
                this
            }
            Yi.prototype.clear = zg,
            Yi.prototype.delete = Bg,
            Yi.prototype.get = Hg,
            Yi.prototype.has = Kg,
            Yi.prototype.set = kg;
            function ui(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.clear(); ++n < a; ) {
                    var h = r[n];
                    this.set(h[0], h[1])
                }
            }
            function Vg() {
                this.__data__ = [],
                this.size = 0
            }
            function Gg(r) {
                var n = this.__data__
                  , a = yo(n, r);
                if (a < 0)
                    return !1;
                var h = n.length - 1;
                return a == h ? n.pop() : co.call(n, a, 1),
                --this.size,
                !0
            }
            function Wg(r) {
                var n = this.__data__
                  , a = yo(n, r);
                return a < 0 ? t : n[a][1]
            }
            function Yg(r) {
                return yo(this.__data__, r) > -1
            }
            function Jg(r, n) {
                var a = this.__data__
                  , h = yo(a, r);
                return h < 0 ? (++this.size,
                a.push([r, n])) : a[h][1] = n,
                this
            }
            ui.prototype.clear = Vg,
            ui.prototype.delete = Gg,
            ui.prototype.get = Wg,
            ui.prototype.has = Yg,
            ui.prototype.set = Jg;
            function hi(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.clear(); ++n < a; ) {
                    var h = r[n];
                    this.set(h[0], h[1])
                }
            }
            function Qg() {
                this.size = 0,
                this.__data__ = {
                    hash: new Yi,
                    map: new (Xn || ui),
                    string: new Yi
                }
            }
            function Xg(r) {
                var n = Po(this, r).delete(r);
                return this.size -= n ? 1 : 0,
                n
            }
            function Zg(r) {
                return Po(this, r).get(r)
            }
            function e0(r) {
                return Po(this, r).has(r)
            }
            function t0(r, n) {
                var a = Po(this, r)
                  , h = a.size;
                return a.set(r, n),
                this.size += a.size == h ? 0 : 1,
                this
            }
            hi.prototype.clear = Qg,
            hi.prototype.delete = Xg,
            hi.prototype.get = Zg,
            hi.prototype.has = e0,
            hi.prototype.set = t0;
            function Ji(r) {
                var n = -1
                  , a = r == null ? 0 : r.length;
                for (this.__data__ = new hi; ++n < a; )
                    this.add(r[n])
            }
            function r0(r) {
                return this.__data__.set(r, y),
                this
            }
            function i0(r) {
                return this.__data__.has(r)
            }
            Ji.prototype.add = Ji.prototype.push = r0,
            Ji.prototype.has = i0;
            function Kr(r) {
                var n = this.__data__ = new ui(r);
                this.size = n.size
            }
            function n0() {
                this.__data__ = new ui,
                this.size = 0
            }
            function s0(r) {
                var n = this.__data__
                  , a = n.delete(r);
                return this.size = n.size,
                a
            }
            function o0(r) {
                return this.__data__.get(r)
            }
            function a0(r) {
                return this.__data__.has(r)
            }
            function c0(r, n) {
                var a = this.__data__;
                if (a instanceof ui) {
                    var h = a.__data__;
                    if (!Xn || h.length < o - 1)
                        return h.push([r, n]),
                        this.size = ++a.size,
                        this;
                    a = this.__data__ = new hi(h)
                }
                return a.set(r, n),
                this.size = a.size,
                this
            }
            Kr.prototype.clear = n0,
            Kr.prototype.delete = s0,
            Kr.prototype.get = o0,
            Kr.prototype.has = a0,
            Kr.prototype.set = c0;
            function ph(r, n) {
                var a = Re(r)
                  , h = !a && tn(r)
                  , p = !a && !h && $i(r)
                  , w = !a && !h && !p && Rn(r)
                  , x = a || h || p || w
                  , N = x ? ja(r.length, mg) : []
                  , q = N.length;
                for (var X in r)
                    (n || nt.call(r, X)) && !(x && (X == "length" || p && (X == "offset" || X == "parent") || w && (X == "buffer" || X == "byteLength" || X == "byteOffset") || pi(X, q))) && N.push(X);
                return N
            }
            function gh(r) {
                var n = r.length;
                return n ? r[tc(0, n - 1)] : t
            }
            function u0(r, n) {
                return Co(pr(r), Qi(n, 0, r.length))
            }
            function h0(r) {
                return Co(pr(r))
            }
            function ka(r, n, a) {
                (a !== t && !kr(r[n], a) || a === t && !(n in r)) && li(r, n, a)
            }
            function rs(r, n, a) {
                var h = r[n];
                (!(nt.call(r, n) && kr(h, a)) || a === t && !(n in r)) && li(r, n, a)
            }
            function yo(r, n) {
                for (var a = r.length; a--; )
                    if (kr(r[a][0], n))
                        return a;
                return -1
            }
            function l0(r, n, a, h) {
                return Ri(r, function(p, w, x) {
                    n(h, p, a(p), x)
                }),
                h
            }
            function yh(r, n) {
                return r && ei(n, kt(n), r)
            }
            function f0(r, n) {
                return r && ei(n, yr(n), r)
            }
            function li(r, n, a) {
                n == "__proto__" && uo ? uo(r, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: a,
                    writable: !0
                }) : r[n] = a
            }
            function Va(r, n) {
                for (var a = -1, h = n.length, p = K(h), w = r == null; ++a < h; )
                    p[a] = w ? t : xc(r, n[a]);
                return p
            }
            function Qi(r, n, a) {
                return r === r && (a !== t && (r = r <= a ? r : a),
                n !== t && (r = r >= n ? r : n)),
                r
            }
            function Lr(r, n, a, h, p, w) {
                var x, N = n & D, q = n & I, X = n & T;
                if (a && (x = p ? a(r, h, p, w) : a(r)),
                x !== t)
                    return x;
                if (!Et(r))
                    return r;
                var Z = Re(r);
                if (Z) {
                    if (x = ey(r),
                    !N)
                        return pr(r, x)
                } else {
                    var ne = Xt(r)
                      , he = ne == ae || ne == fe;
                    if ($i(r))
                        return Fh(r, N);
                    if (ne == Me || ne == le || he && !p) {
                        if (x = q || he ? {} : sl(r),
                        !N)
                            return q ? H0(r, f0(x, r)) : B0(r, yh(x, r))
                    } else {
                        if (!st[ne])
                            return p ? r : {};
                        x = ty(r, ne, N)
                    }
                }
                w || (w = new Kr);
                var ye = w.get(r);
                if (ye)
                    return ye;
                w.set(r, x),
                Ul(r) ? r.forEach(function(De) {
                    x.add(Lr(De, n, a, De, r, w))
                }) : Rl(r) && r.forEach(function(De, Ge) {
                    x.set(Ge, Lr(De, n, a, Ge, r, w))
                });
                var Ee = X ? q ? fc : lc : q ? yr : kt
                  , ze = Z ? t : Ee(r);
                return Rr(ze || r, function(De, Ge) {
                    ze && (Ge = De,
                    De = r[Ge]),
                    rs(x, Ge, Lr(De, n, a, Ge, r, w))
                }),
                x
            }
            function d0(r) {
                var n = kt(r);
                return function(a) {
                    return vh(a, r, n)
                }
            }
            function vh(r, n, a) {
                var h = a.length;
                if (r == null)
                    return !h;
                for (r = ut(r); h--; ) {
                    var p = a[h]
                      , w = n[p]
                      , x = r[p];
                    if (x === t && !(p in r) || !w(x))
                        return !1
                }
                return !0
            }
            function mh(r, n, a) {
                if (typeof r != "function")
                    throw new Nr(d);
                return us(function() {
                    r.apply(t, a)
                }, n)
            }
            function is(r, n, a, h) {
                var p = -1
                  , w = Xs
                  , x = !0
                  , N = r.length
                  , q = []
                  , X = n.length;
                if (!N)
                    return q;
                a && (n = mt(n, Er(a))),
                h ? (w = Ra,
                x = !1) : n.length >= o && (w = Jn,
                x = !1,
                n = new Ji(n));
                e: for (; ++p < N; ) {
                    var Z = r[p]
                      , ne = a == null ? Z : a(Z);
                    if (Z = h || Z !== 0 ? Z : 0,
                    x && ne === ne) {
                        for (var he = X; he--; )
                            if (n[he] === ne)
                                continue e;
                        q.push(Z)
                    } else
                        w(n, ne, h) || q.push(Z)
                }
                return q
            }
            var Ri = kh(Zr)
              , wh = kh(Wa, !0);
            function p0(r, n) {
                var a = !0;
                return Ri(r, function(h, p, w) {
                    return a = !!n(h, p, w),
                    a
                }),
                a
            }
            function vo(r, n, a) {
                for (var h = -1, p = r.length; ++h < p; ) {
                    var w = r[h]
                      , x = n(w);
                    if (x != null && (N === t ? x === x && !Sr(x) : a(x, N)))
                        var N = x
                          , q = w
                }
                return q
            }
            function g0(r, n, a, h) {
                var p = r.length;
                for (a = je(a),
                a < 0 && (a = -a > p ? 0 : p + a),
                h = h === t || h > p ? p : je(h),
                h < 0 && (h += p),
                h = a > h ? 0 : $l(h); a < h; )
                    r[a++] = n;
                return r
            }
            function _h(r, n) {
                var a = [];
                return Ri(r, function(h, p, w) {
                    n(h, p, w) && a.push(h)
                }),
                a
            }
            function Wt(r, n, a, h, p) {
                var w = -1
                  , x = r.length;
                for (a || (a = iy),
                p || (p = []); ++w < x; ) {
                    var N = r[w];
                    n > 0 && a(N) ? n > 1 ? Wt(N, n - 1, a, h, p) : Ci(p, N) : h || (p[p.length] = N)
                }
                return p
            }
            var Ga = Vh()
              , bh = Vh(!0);
            function Zr(r, n) {
                return r && Ga(r, n, kt)
            }
            function Wa(r, n) {
                return r && bh(r, n, kt)
            }
            function mo(r, n) {
                return Pi(n, function(a) {
                    return gi(r[a])
                })
            }
            function Xi(r, n) {
                n = Ui(n, r);
                for (var a = 0, h = n.length; r != null && a < h; )
                    r = r[ti(n[a++])];
                return a && a == h ? r : t
            }
            function Eh(r, n, a) {
                var h = n(r);
                return Re(r) ? h : Ci(h, a(r))
            }
            function nr(r) {
                return r == null ? r === t ? Fe : ke : Wi && Wi in ut(r) ? Q0(r) : hy(r)
            }
            function Ya(r, n) {
                return r > n
            }
            function y0(r, n) {
                return r != null && nt.call(r, n)
            }
            function v0(r, n) {
                return r != null && n in ut(r)
            }
            function m0(r, n, a) {
                return r >= Qt(n, a) && r < Ht(n, a)
            }
            function Ja(r, n, a) {
                for (var h = a ? Ra : Xs, p = r[0].length, w = r.length, x = w, N = K(w), q = 1 / 0, X = []; x--; ) {
                    var Z = r[x];
                    x && n && (Z = mt(Z, Er(n))),
                    q = Qt(Z.length, q),
                    N[x] = !a && (n || p >= 120 && Z.length >= 120) ? new Ji(x && Z) : t
                }
                Z = r[0];
                var ne = -1
                  , he = N[0];
                e: for (; ++ne < p && X.length < q; ) {
                    var ye = Z[ne]
                      , Ee = n ? n(ye) : ye;
                    if (ye = a || ye !== 0 ? ye : 0,
                    !(he ? Jn(he, Ee) : h(X, Ee, a))) {
                        for (x = w; --x; ) {
                            var ze = N[x];
                            if (!(ze ? Jn(ze, Ee) : h(r[x], Ee, a)))
                                continue e
                        }
                        he && he.push(Ee),
                        X.push(ye)
                    }
                }
                return X
            }
            function w0(r, n, a, h) {
                return Zr(r, function(p, w, x) {
                    n(h, a(p), w, x)
                }),
                h
            }
            function ns(r, n, a) {
                n = Ui(n, r),
                r = ul(r, n);
                var h = r == null ? r : r[ti(Mr(n))];
                return h == null ? t : Kt(h, r, a)
            }
            function Dh(r) {
                return Ct(r) && nr(r) == le
            }
            function _0(r) {
                return Ct(r) && nr(r) == Se
            }
            function b0(r) {
                return Ct(r) && nr(r) == L
            }
            function ss(r, n, a, h, p) {
                return r === n ? !0 : r == null || n == null || !Ct(r) && !Ct(n) ? r !== r && n !== n : E0(r, n, a, h, ss, p)
            }
            function E0(r, n, a, h, p, w) {
                var x = Re(r)
                  , N = Re(n)
                  , q = x ? me : Xt(r)
                  , X = N ? me : Xt(n);
                q = q == le ? Me : q,
                X = X == le ? Me : X;
                var Z = q == Me
                  , ne = X == Me
                  , he = q == X;
                if (he && $i(r)) {
                    if (!$i(n))
                        return !1;
                    x = !0,
                    Z = !1
                }
                if (he && !Z)
                    return w || (w = new Kr),
                    x || Rn(r) ? rl(r, n, a, h, p, w) : Y0(r, n, q, a, h, p, w);
                if (!(a & P)) {
                    var ye = Z && nt.call(r, "__wrapped__")
                      , Ee = ne && nt.call(n, "__wrapped__");
                    if (ye || Ee) {
                        var ze = ye ? r.value() : r
                          , De = Ee ? n.value() : n;
                        return w || (w = new Kr),
                        p(ze, De, a, h, w)
                    }
                }
                return he ? (w || (w = new Kr),
                J0(r, n, a, h, p, w)) : !1
            }
            function D0(r) {
                return Ct(r) && Xt(r) == Ie
            }
            function Qa(r, n, a, h) {
                var p = a.length
                  , w = p
                  , x = !h;
                if (r == null)
                    return !w;
                for (r = ut(r); p--; ) {
                    var N = a[p];
                    if (x && N[2] ? N[1] !== r[N[0]] : !(N[0]in r))
                        return !1
                }
                for (; ++p < w; ) {
                    N = a[p];
                    var q = N[0]
                      , X = r[q]
                      , Z = N[1];
                    if (x && N[2]) {
                        if (X === t && !(q in r))
                            return !1
                    } else {
                        var ne = new Kr;
                        if (h)
                            var he = h(X, Z, q, r, n, ne);
                        if (!(he === t ? ss(Z, X, P | z, h, ne) : he))
                            return !1
                    }
                }
                return !0
            }
            function Sh(r) {
                if (!Et(r) || sy(r))
                    return !1;
                var n = gi(r) ? Dg : ya;
                return n.test(en(r))
            }
            function S0(r) {
                return Ct(r) && nr(r) == qe
            }
            function I0(r) {
                return Ct(r) && Xt(r) == xe
            }
            function x0(r) {
                return Ct(r) && Lo(r.length) && !!ot[nr(r)]
            }
            function Ih(r) {
                return typeof r == "function" ? r : r == null ? vr : typeof r == "object" ? Re(r) ? Ph(r[0], r[1]) : Oh(r) : Gl(r)
            }
            function Xa(r) {
                if (!cs(r))
                    return Cg(r);
                var n = [];
                for (var a in ut(r))
                    nt.call(r, a) && a != "constructor" && n.push(a);
                return n
            }
            function O0(r) {
                if (!Et(r))
                    return uy(r);
                var n = cs(r)
                  , a = [];
                for (var h in r)
                    h == "constructor" && (n || !nt.call(r, h)) || a.push(h);
                return a
            }
            function Za(r, n) {
                return r < n
            }
            function xh(r, n) {
                var a = -1
                  , h = gr(r) ? K(r.length) : [];
                return Ri(r, function(p, w, x) {
                    h[++a] = n(p, w, x)
                }),
                h
            }
            function Oh(r) {
                var n = pc(r);
                return n.length == 1 && n[0][2] ? al(n[0][0], n[0][1]) : function(a) {
                    return a === r || Qa(a, r, n)
                }
            }
            function Ph(r, n) {
                return yc(r) && ol(n) ? al(ti(r), n) : function(a) {
                    var h = xc(a, r);
                    return h === t && h === n ? Oc(a, r) : ss(n, h, P | z)
                }
            }
            function wo(r, n, a, h, p) {
                r !== n && Ga(n, function(w, x) {
                    if (p || (p = new Kr),
                    Et(w))
                        P0(r, n, x, a, wo, h, p);
                    else {
                        var N = h ? h(mc(r, x), w, x + "", r, n, p) : t;
                        N === t && (N = w),
                        ka(r, x, N)
                    }
                }, yr)
            }
            function P0(r, n, a, h, p, w, x) {
                var N = mc(r, a)
                  , q = mc(n, a)
                  , X = x.get(q);
                if (X) {
                    ka(r, a, X);
                    return
                }
                var Z = w ? w(N, q, a + "", r, n, x) : t
                  , ne = Z === t;
                if (ne) {
                    var he = Re(q)
                      , ye = !he && $i(q)
                      , Ee = !he && !ye && Rn(q);
                    Z = q,
                    he || ye || Ee ? Re(N) ? Z = N : Rt(N) ? Z = pr(N) : ye ? (ne = !1,
                    Z = Fh(q, !0)) : Ee ? (ne = !1,
                    Z = zh(q, !0)) : Z = [] : hs(q) || tn(q) ? (Z = N,
                    tn(N) ? Z = Ml(N) : (!Et(N) || gi(N)) && (Z = sl(q))) : ne = !1
                }
                ne && (x.set(q, Z),
                p(Z, q, h, w, x),
                x.delete(q)),
                ka(r, a, Z)
            }
            function Ch(r, n) {
                var a = r.length;
                if (a)
                    return n += n < 0 ? a : 0,
                    pi(n, a) ? r[n] : t
            }
            function Ah(r, n, a) {
                n.length ? n = mt(n, function(w) {
                    return Re(w) ? function(x) {
                        return Xi(x, w.length === 1 ? w[0] : w)
                    }
                    : w
                }) : n = [vr];
                var h = -1;
                n = mt(n, Er(we()));
                var p = xh(r, function(w, x, N) {
                    var q = mt(n, function(X) {
                        return X(w)
                    });
                    return {
                        criteria: q,
                        index: ++h,
                        value: w
                    }
                });
                return tg(p, function(w, x) {
                    return z0(w, x, a)
                })
            }
            function C0(r, n) {
                return Th(r, n, function(a, h) {
                    return Oc(r, h)
                })
            }
            function Th(r, n, a) {
                for (var h = -1, p = n.length, w = {}; ++h < p; ) {
                    var x = n[h]
                      , N = Xi(r, x);
                    a(N, x) && os(w, Ui(x, r), N)
                }
                return w
            }
            function A0(r) {
                return function(n) {
                    return Xi(n, r)
                }
            }
            function ec(r, n, a, h) {
                var p = h ? eg : bn
                  , w = -1
                  , x = n.length
                  , N = r;
                for (r === n && (n = pr(n)),
                a && (N = mt(r, Er(a))); ++w < x; )
                    for (var q = 0, X = n[w], Z = a ? a(X) : X; (q = p(N, Z, q, h)) > -1; )
                        N !== r && co.call(N, q, 1),
                        co.call(r, q, 1);
                return r
            }
            function Rh(r, n) {
                for (var a = r ? n.length : 0, h = a - 1; a--; ) {
                    var p = n[a];
                    if (a == h || p !== w) {
                        var w = p;
                        pi(p) ? co.call(r, p, 1) : nc(r, p)
                    }
                }
                return r
            }
            function tc(r, n) {
                return r + lo(fh() * (n - r + 1))
            }
            function T0(r, n, a, h) {
                for (var p = -1, w = Ht(ho((n - r) / (a || 1)), 0), x = K(w); w--; )
                    x[h ? w : ++p] = r,
                    r += a;
                return x
            }
            function rc(r, n) {
                var a = "";
                if (!r || n < 1 || n > k)
                    return a;
                do
                    n % 2 && (a += r),
                    n = lo(n / 2),
                    n && (r += r);
                while (n);
                return a
            }
            function Ke(r, n) {
                return wc(cl(r, n, vr), r + "")
            }
            function R0(r) {
                return gh(Nn(r))
            }
            function N0(r, n) {
                var a = Nn(r);
                return Co(a, Qi(n, 0, a.length))
            }
            function os(r, n, a, h) {
                if (!Et(r))
                    return r;
                n = Ui(n, r);
                for (var p = -1, w = n.length, x = w - 1, N = r; N != null && ++p < w; ) {
                    var q = ti(n[p])
                      , X = a;
                    if (q === "__proto__" || q === "constructor" || q === "prototype")
                        return r;
                    if (p != x) {
                        var Z = N[q];
                        X = h ? h(Z, q, N) : t,
                        X === t && (X = Et(Z) ? Z : pi(n[p + 1]) ? [] : {})
                    }
                    rs(N, q, X),
                    N = N[q]
                }
                return r
            }
            var Nh = fo ? function(r, n) {
                return fo.set(r, n),
                r
            }
            : vr
              , U0 = uo ? function(r, n) {
                return uo(r, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Cc(n),
                    writable: !0
                })
            }
            : vr;
            function L0(r) {
                return Co(Nn(r))
            }
            function $r(r, n, a) {
                var h = -1
                  , p = r.length;
                n < 0 && (n = -n > p ? 0 : p + n),
                a = a > p ? p : a,
                a < 0 && (a += p),
                p = n > a ? 0 : a - n >>> 0,
                n >>>= 0;
                for (var w = K(p); ++h < p; )
                    w[h] = r[h + n];
                return w
            }
            function $0(r, n) {
                var a;
                return Ri(r, function(h, p, w) {
                    return a = n(h, p, w),
                    !a
                }),
                !!a
            }
            function _o(r, n, a) {
                var h = 0
                  , p = r == null ? h : r.length;
                if (typeof n == "number" && n === n && p <= oe) {
                    for (; h < p; ) {
                        var w = h + p >>> 1
                          , x = r[w];
                        x !== null && !Sr(x) && (a ? x <= n : x < n) ? h = w + 1 : p = w
                    }
                    return p
                }
                return ic(r, n, vr, a)
            }
            function ic(r, n, a, h) {
                var p = 0
                  , w = r == null ? 0 : r.length;
                if (w === 0)
                    return 0;
                n = a(n);
                for (var x = n !== n, N = n === null, q = Sr(n), X = n === t; p < w; ) {
                    var Z = lo((p + w) / 2)
                      , ne = a(r[Z])
                      , he = ne !== t
                      , ye = ne === null
                      , Ee = ne === ne
                      , ze = Sr(ne);
                    if (x)
                        var De = h || Ee;
                    else
                        X ? De = Ee && (h || he) : N ? De = Ee && he && (h || !ye) : q ? De = Ee && he && !ye && (h || !ze) : ye || ze ? De = !1 : De = h ? ne <= n : ne < n;
                    De ? p = Z + 1 : w = Z
                }
                return Qt(w, _e)
            }
            function Uh(r, n) {
                for (var a = -1, h = r.length, p = 0, w = []; ++a < h; ) {
                    var x = r[a]
                      , N = n ? n(x) : x;
                    if (!a || !kr(N, q)) {
                        var q = N;
                        w[p++] = x === 0 ? 0 : x
                    }
                }
                return w
            }
            function Lh(r) {
                return typeof r == "number" ? r : Sr(r) ? J : +r
            }
            function Dr(r) {
                if (typeof r == "string")
                    return r;
                if (Re(r))
                    return mt(r, Dr) + "";
                if (Sr(r))
                    return dh ? dh.call(r) : "";
                var n = r + "";
                return n == "0" && 1 / r == -Q ? "-0" : n
            }
            function Ni(r, n, a) {
                var h = -1
                  , p = Xs
                  , w = r.length
                  , x = !0
                  , N = []
                  , q = N;
                if (a)
                    x = !1,
                    p = Ra;
                else if (w >= o) {
                    var X = n ? null : G0(r);
                    if (X)
                        return eo(X);
                    x = !1,
                    p = Jn,
                    q = new Ji
                } else
                    q = n ? [] : N;
                e: for (; ++h < w; ) {
                    var Z = r[h]
                      , ne = n ? n(Z) : Z;
                    if (Z = a || Z !== 0 ? Z : 0,
                    x && ne === ne) {
                        for (var he = q.length; he--; )
                            if (q[he] === ne)
                                continue e;
                        n && q.push(ne),
                        N.push(Z)
                    } else
                        p(q, ne, a) || (q !== N && q.push(ne),
                        N.push(Z))
                }
                return N
            }
            function nc(r, n) {
                return n = Ui(n, r),
                r = ul(r, n),
                r == null || delete r[ti(Mr(n))]
            }
            function $h(r, n, a, h) {
                return os(r, n, a(Xi(r, n)), h)
            }
            function bo(r, n, a, h) {
                for (var p = r.length, w = h ? p : -1; (h ? w-- : ++w < p) && n(r[w], w, r); )
                    ;
                return a ? $r(r, h ? 0 : w, h ? w + 1 : p) : $r(r, h ? w + 1 : 0, h ? p : w)
            }
            function Mh(r, n) {
                var a = r;
                return a instanceof Ye && (a = a.value()),
                Na(n, function(h, p) {
                    return p.func.apply(p.thisArg, Ci([h], p.args))
                }, a)
            }
            function sc(r, n, a) {
                var h = r.length;
                if (h < 2)
                    return h ? Ni(r[0]) : [];
                for (var p = -1, w = K(h); ++p < h; )
                    for (var x = r[p], N = -1; ++N < h; )
                        N != p && (w[p] = is(w[p] || x, r[N], n, a));
                return Ni(Wt(w, 1), n, a)
            }
            function jh(r, n, a) {
                for (var h = -1, p = r.length, w = n.length, x = {}; ++h < p; ) {
                    var N = h < w ? n[h] : t;
                    a(x, r[h], N)
                }
                return x
            }
            function oc(r) {
                return Rt(r) ? r : []
            }
            function ac(r) {
                return typeof r == "function" ? r : vr
            }
            function Ui(r, n) {
                return Re(r) ? r : yc(r, n) ? [r] : dl(it(r))
            }
            var M0 = Ke;
            function Li(r, n, a) {
                var h = r.length;
                return a = a === t ? h : a,
                !n && a >= h ? r : $r(r, n, a)
            }
            var qh = Sg || function(r) {
                return Xe.clearTimeout(r)
            }
            ;
            function Fh(r, n) {
                if (n)
                    return r.slice();
                var a = r.length
                  , h = ah ? ah(a) : new r.constructor(a);
                return r.copy(h),
                h
            }
            function cc(r) {
                var n = new r.constructor(r.byteLength);
                return new oo(n).set(new oo(r)),
                n
            }
            function j0(r, n) {
                var a = n ? cc(r.buffer) : r.buffer;
                return new r.constructor(a,r.byteOffset,r.byteLength)
            }
            function q0(r) {
                var n = new r.constructor(r.source,Ar.exec(r));
                return n.lastIndex = r.lastIndex,
                n
            }
            function F0(r) {
                return ts ? ut(ts.call(r)) : {}
            }
            function zh(r, n) {
                var a = n ? cc(r.buffer) : r.buffer;
                return new r.constructor(a,r.byteOffset,r.length)
            }
            function Bh(r, n) {
                if (r !== n) {
                    var a = r !== t
                      , h = r === null
                      , p = r === r
                      , w = Sr(r)
                      , x = n !== t
                      , N = n === null
                      , q = n === n
                      , X = Sr(n);
                    if (!N && !X && !w && r > n || w && x && q && !N && !X || h && x && q || !a && q || !p)
                        return 1;
                    if (!h && !w && !X && r < n || X && a && p && !h && !w || N && a && p || !x && p || !q)
                        return -1
                }
                return 0
            }
            function z0(r, n, a) {
                for (var h = -1, p = r.criteria, w = n.criteria, x = p.length, N = a.length; ++h < x; ) {
                    var q = Bh(p[h], w[h]);
                    if (q) {
                        if (h >= N)
                            return q;
                        var X = a[h];
                        return q * (X == "desc" ? -1 : 1)
                    }
                }
                return r.index - n.index
            }
            function Hh(r, n, a, h) {
                for (var p = -1, w = r.length, x = a.length, N = -1, q = n.length, X = Ht(w - x, 0), Z = K(q + X), ne = !h; ++N < q; )
                    Z[N] = n[N];
                for (; ++p < x; )
                    (ne || p < w) && (Z[a[p]] = r[p]);
                for (; X--; )
                    Z[N++] = r[p++];
                return Z
            }
            function Kh(r, n, a, h) {
                for (var p = -1, w = r.length, x = -1, N = a.length, q = -1, X = n.length, Z = Ht(w - N, 0), ne = K(Z + X), he = !h; ++p < Z; )
                    ne[p] = r[p];
                for (var ye = p; ++q < X; )
                    ne[ye + q] = n[q];
                for (; ++x < N; )
                    (he || p < w) && (ne[ye + a[x]] = r[p++]);
                return ne
            }
            function pr(r, n) {
                var a = -1
                  , h = r.length;
                for (n || (n = K(h)); ++a < h; )
                    n[a] = r[a];
                return n
            }
            function ei(r, n, a, h) {
                var p = !a;
                a || (a = {});
                for (var w = -1, x = n.length; ++w < x; ) {
                    var N = n[w]
                      , q = h ? h(a[N], r[N], N, a, r) : t;
                    q === t && (q = r[N]),
                    p ? li(a, N, q) : rs(a, N, q)
                }
                return a
            }
            function B0(r, n) {
                return ei(r, gc(r), n)
            }
            function H0(r, n) {
                return ei(r, il(r), n)
            }
            function Eo(r, n) {
                return function(a, h) {
                    var p = Re(a) ? Wp : l0
                      , w = n ? n() : {};
                    return p(a, r, we(h, 2), w)
                }
            }
            function Cn(r) {
                return Ke(function(n, a) {
                    var h = -1
                      , p = a.length
                      , w = p > 1 ? a[p - 1] : t
                      , x = p > 2 ? a[2] : t;
                    for (w = r.length > 3 && typeof w == "function" ? (p--,
                    w) : t,
                    x && sr(a[0], a[1], x) && (w = p < 3 ? t : w,
                    p = 1),
                    n = ut(n); ++h < p; ) {
                        var N = a[h];
                        N && r(n, N, h, w)
                    }
                    return n
                })
            }
            function kh(r, n) {
                return function(a, h) {
                    if (a == null)
                        return a;
                    if (!gr(a))
                        return r(a, h);
                    for (var p = a.length, w = n ? p : -1, x = ut(a); (n ? w-- : ++w < p) && h(x[w], w, x) !== !1; )
                        ;
                    return a
                }
            }
            function Vh(r) {
                return function(n, a, h) {
                    for (var p = -1, w = ut(n), x = h(n), N = x.length; N--; ) {
                        var q = x[r ? N : ++p];
                        if (a(w[q], q, w) === !1)
                            break
                    }
                    return n
                }
            }
            function K0(r, n, a) {
                var h = n & H
                  , p = as(r);
                function w() {
                    var x = this && this !== Xe && this instanceof w ? p : r;
                    return x.apply(h ? a : this, arguments)
                }
                return w
            }
            function Gh(r) {
                return function(n) {
                    n = it(n);
                    var a = En(n) ? Hr(n) : t
                      , h = a ? a[0] : n.charAt(0)
                      , p = a ? Li(a, 1).join("") : n.slice(1);
                    return h[r]() + p
                }
            }
            function An(r) {
                return function(n) {
                    return Na(kl(Kl(n).replace(Wn, "")), r, "")
                }
            }
            function as(r) {
                return function() {
                    var n = arguments;
                    switch (n.length) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(n[0]);
                    case 2:
                        return new r(n[0],n[1]);
                    case 3:
                        return new r(n[0],n[1],n[2]);
                    case 4:
                        return new r(n[0],n[1],n[2],n[3]);
                    case 5:
                        return new r(n[0],n[1],n[2],n[3],n[4]);
                    case 6:
                        return new r(n[0],n[1],n[2],n[3],n[4],n[5]);
                    case 7:
                        return new r(n[0],n[1],n[2],n[3],n[4],n[5],n[6])
                    }
                    var a = Pn(r.prototype)
                      , h = r.apply(a, n);
                    return Et(h) ? h : a
                }
            }
            function k0(r, n, a) {
                var h = as(r);
                function p() {
                    for (var w = arguments.length, x = K(w), N = w, q = Tn(p); N--; )
                        x[N] = arguments[N];
                    var X = w < 3 && x[0] !== q && x[w - 1] !== q ? [] : Ai(x, q);
                    if (w -= X.length,
                    w < a)
                        return Xh(r, n, Do, p.placeholder, t, x, X, t, t, a - w);
                    var Z = this && this !== Xe && this instanceof p ? h : r;
                    return Kt(Z, this, x)
                }
                return p
            }
            function Wh(r) {
                return function(n, a, h) {
                    var p = ut(n);
                    if (!gr(n)) {
                        var w = we(a, 3);
                        n = kt(n),
                        a = function(N) {
                            return w(p[N], N, p)
                        }
                    }
                    var x = r(n, a, h);
                    return x > -1 ? p[w ? n[x] : x] : t
                }
            }
            function Yh(r) {
                return di(function(n) {
                    var a = n.length
                      , h = a
                      , p = Ur.prototype.thru;
                    for (r && n.reverse(); h--; ) {
                        var w = n[h];
                        if (typeof w != "function")
                            throw new Nr(d);
                        if (p && !x && Oo(w) == "wrapper")
                            var x = new Ur([],!0)
                    }
                    for (h = x ? h : a; ++h < a; ) {
                        w = n[h];
                        var N = Oo(w)
                          , q = N == "wrapper" ? dc(w) : t;
                        q && vc(q[0]) && q[1] == (u | j | A | _) && !q[4].length && q[9] == 1 ? x = x[Oo(q[0])].apply(x, q[3]) : x = w.length == 1 && vc(w) ? x[N]() : x.thru(w)
                    }
                    return function() {
                        var X = arguments
                          , Z = X[0];
                        if (x && X.length == 1 && Re(Z))
                            return x.plant(Z).value();
                        for (var ne = 0, he = a ? n[ne].apply(this, X) : Z; ++ne < a; )
                            he = n[ne].call(this, he);
                        return he
                    }
                })
            }
            function Do(r, n, a, h, p, w, x, N, q, X) {
                var Z = n & u
                  , ne = n & H
                  , he = n & ie
                  , ye = n & (j | O)
                  , Ee = n & G
                  , ze = he ? t : as(r);
                function De() {
                    for (var Ge = arguments.length, Ze = K(Ge), Ir = Ge; Ir--; )
                        Ze[Ir] = arguments[Ir];
                    if (ye)
                        var or = Tn(De)
                          , xr = ig(Ze, or);
                    if (h && (Ze = Hh(Ze, h, p, ye)),
                    w && (Ze = Kh(Ze, w, x, ye)),
                    Ge -= xr,
                    ye && Ge < X) {
                        var Nt = Ai(Ze, or);
                        return Xh(r, n, Do, De.placeholder, a, Ze, Nt, N, q, X - Ge)
                    }
                    var Vr = ne ? a : this
                      , vi = he ? Vr[r] : r;
                    return Ge = Ze.length,
                    N ? Ze = ly(Ze, N) : Ee && Ge > 1 && Ze.reverse(),
                    Z && q < Ge && (Ze.length = q),
                    this && this !== Xe && this instanceof De && (vi = ze || as(vi)),
                    vi.apply(Vr, Ze)
                }
                return De
            }
            function Jh(r, n) {
                return function(a, h) {
                    return w0(a, r, n(h), {})
                }
            }
            function So(r, n) {
                return function(a, h) {
                    var p;
                    if (a === t && h === t)
                        return n;
                    if (a !== t && (p = a),
                    h !== t) {
                        if (p === t)
                            return h;
                        typeof a == "string" || typeof h == "string" ? (a = Dr(a),
                        h = Dr(h)) : (a = Lh(a),
                        h = Lh(h)),
                        p = r(a, h)
                    }
                    return p
                }
            }
            function uc(r) {
                return di(function(n) {
                    return n = mt(n, Er(we())),
                    Ke(function(a) {
                        var h = this;
                        return r(n, function(p) {
                            return Kt(p, h, a)
                        })
                    })
                })
            }
            function Io(r, n) {
                n = n === t ? " " : Dr(n);
                var a = n.length;
                if (a < 2)
                    return a ? rc(n, r) : n;
                var h = rc(n, ho(r / Dn(n)));
                return En(n) ? Li(Hr(h), 0, r).join("") : h.slice(0, r)
            }
            function V0(r, n, a, h) {
                var p = n & H
                  , w = as(r);
                function x() {
                    for (var N = -1, q = arguments.length, X = -1, Z = h.length, ne = K(Z + q), he = this && this !== Xe && this instanceof x ? w : r; ++X < Z; )
                        ne[X] = h[X];
                    for (; q--; )
                        ne[X++] = arguments[++N];
                    return Kt(he, p ? a : this, ne)
                }
                return x
            }
            function Qh(r) {
                return function(n, a, h) {
                    return h && typeof h != "number" && sr(n, a, h) && (a = h = t),
                    n = yi(n),
                    a === t ? (a = n,
                    n = 0) : a = yi(a),
                    h = h === t ? n < a ? 1 : -1 : yi(h),
                    T0(n, a, h, r)
                }
            }
            function xo(r) {
                return function(n, a) {
                    return typeof n == "string" && typeof a == "string" || (n = jr(n),
                    a = jr(a)),
                    r(n, a)
                }
            }
            function Xh(r, n, a, h, p, w, x, N, q, X) {
                var Z = n & j
                  , ne = Z ? x : t
                  , he = Z ? t : x
                  , ye = Z ? w : t
                  , Ee = Z ? t : w;
                n |= Z ? A : E,
                n &= ~(Z ? E : A),
                n & U || (n &= ~(H | ie));
                var ze = [r, n, p, ye, ne, Ee, he, N, q, X]
                  , De = a.apply(t, ze);
                return vc(r) && hl(De, ze),
                De.placeholder = h,
                ll(De, r, n)
            }
            function hc(r) {
                var n = Bt[r];
                return function(a, h) {
                    if (a = jr(a),
                    h = h == null ? 0 : Qt(je(h), 292),
                    h && lh(a)) {
                        var p = (it(a) + "e").split("e")
                          , w = n(p[0] + "e" + (+p[1] + h));
                        return p = (it(w) + "e").split("e"),
                        +(p[0] + "e" + (+p[1] - h))
                    }
                    return n(a)
                }
            }
            var G0 = xn && 1 / eo(new xn([, -0]))[1] == Q ? function(r) {
                return new xn(r)
            }
            : Rc;
            function Zh(r) {
                return function(n) {
                    var a = Xt(n);
                    return a == Ie ? Fa(n) : a == xe ? hg(n) : rg(n, r(n))
                }
            }
            function fi(r, n, a, h, p, w, x, N) {
                var q = n & ie;
                if (!q && typeof r != "function")
                    throw new Nr(d);
                var X = h ? h.length : 0;
                if (X || (n &= ~(A | E),
                h = p = t),
                x = x === t ? x : Ht(je(x), 0),
                N = N === t ? N : je(N),
                X -= p ? p.length : 0,
                n & E) {
                    var Z = h
                      , ne = p;
                    h = p = t
                }
                var he = q ? t : dc(r)
                  , ye = [r, n, a, h, p, Z, ne, w, x, N];
                if (he && cy(ye, he),
                r = ye[0],
                n = ye[1],
                a = ye[2],
                h = ye[3],
                p = ye[4],
                N = ye[9] = ye[9] === t ? q ? 0 : r.length : Ht(ye[9] - X, 0),
                !N && n & (j | O) && (n &= ~(j | O)),
                !n || n == H)
                    var Ee = K0(r, n, a);
                else
                    n == j || n == O ? Ee = k0(r, n, N) : (n == A || n == (H | A)) && !p.length ? Ee = V0(r, n, a, h) : Ee = Do.apply(t, ye);
                var ze = he ? Nh : hl;
                return ll(ze(Ee, ye), r, n)
            }
            function el(r, n, a, h) {
                return r === t || kr(r, In[a]) && !nt.call(h, a) ? n : r
            }
            function tl(r, n, a, h, p, w) {
                return Et(r) && Et(n) && (w.set(n, r),
                wo(r, n, t, tl, w),
                w.delete(n)),
                r
            }
            function W0(r) {
                return hs(r) ? t : r
            }
            function rl(r, n, a, h, p, w) {
                var x = a & P
                  , N = r.length
                  , q = n.length;
                if (N != q && !(x && q > N))
                    return !1;
                var X = w.get(r)
                  , Z = w.get(n);
                if (X && Z)
                    return X == n && Z == r;
                var ne = -1
                  , he = !0
                  , ye = a & z ? new Ji : t;
                for (w.set(r, n),
                w.set(n, r); ++ne < N; ) {
                    var Ee = r[ne]
                      , ze = n[ne];
                    if (h)
                        var De = x ? h(ze, Ee, ne, n, r, w) : h(Ee, ze, ne, r, n, w);
                    if (De !== t) {
                        if (De)
                            continue;
                        he = !1;
                        break
                    }
                    if (ye) {
                        if (!Ua(n, function(Ge, Ze) {
                            if (!Jn(ye, Ze) && (Ee === Ge || p(Ee, Ge, a, h, w)))
                                return ye.push(Ze)
                        })) {
                            he = !1;
                            break
                        }
                    } else if (!(Ee === ze || p(Ee, ze, a, h, w))) {
                        he = !1;
                        break
                    }
                }
                return w.delete(r),
                w.delete(n),
                he
            }
            function Y0(r, n, a, h, p, w, x) {
                switch (a) {
                case Ce:
                    if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
                        return !1;
                    r = r.buffer,
                    n = n.buffer;
                case Se:
                    return !(r.byteLength != n.byteLength || !w(new oo(r), new oo(n)));
                case F:
                case L:
                case Be:
                    return kr(+r, +n);
                case R:
                    return r.name == n.name && r.message == n.message;
                case qe:
                case Ne:
                    return r == n + "";
                case Ie:
                    var N = Fa;
                case xe:
                    var q = h & P;
                    if (N || (N = eo),
                    r.size != n.size && !q)
                        return !1;
                    var X = x.get(r);
                    if (X)
                        return X == n;
                    h |= z,
                    x.set(r, n);
                    var Z = rl(N(r), N(n), h, p, w, x);
                    return x.delete(r),
                    Z;
                case Ue:
                    if (ts)
                        return ts.call(r) == ts.call(n)
                }
                return !1
            }
            function J0(r, n, a, h, p, w) {
                var x = a & P
                  , N = lc(r)
                  , q = N.length
                  , X = lc(n)
                  , Z = X.length;
                if (q != Z && !x)
                    return !1;
                for (var ne = q; ne--; ) {
                    var he = N[ne];
                    if (!(x ? he in n : nt.call(n, he)))
                        return !1
                }
                var ye = w.get(r)
                  , Ee = w.get(n);
                if (ye && Ee)
                    return ye == n && Ee == r;
                var ze = !0;
                w.set(r, n),
                w.set(n, r);
                for (var De = x; ++ne < q; ) {
                    he = N[ne];
                    var Ge = r[he]
                      , Ze = n[he];
                    if (h)
                        var Ir = x ? h(Ze, Ge, he, n, r, w) : h(Ge, Ze, he, r, n, w);
                    if (!(Ir === t ? Ge === Ze || p(Ge, Ze, a, h, w) : Ir)) {
                        ze = !1;
                        break
                    }
                    De || (De = he == "constructor")
                }
                if (ze && !De) {
                    var or = r.constructor
                      , xr = n.constructor;
                    or != xr && "constructor"in r && "constructor"in n && !(typeof or == "function" && or instanceof or && typeof xr == "function" && xr instanceof xr) && (ze = !1)
                }
                return w.delete(r),
                w.delete(n),
                ze
            }
            function di(r) {
                return wc(cl(r, t, vl), r + "")
            }
            function lc(r) {
                return Eh(r, kt, gc)
            }
            function fc(r) {
                return Eh(r, yr, il)
            }
            var dc = fo ? function(r) {
                return fo.get(r)
            }
            : Rc;
            function Oo(r) {
                for (var n = r.name + "", a = On[n], h = nt.call(On, n) ? a.length : 0; h--; ) {
                    var p = a[h]
                      , w = p.func;
                    if (w == null || w == r)
                        return p.name
                }
                return n
            }
            function Tn(r) {
                var n = nt.call(v, "placeholder") ? v : r;
                return n.placeholder
            }
            function we() {
                var r = v.iteratee || Ac;
                return r = r === Ac ? Ih : r,
                arguments.length ? r(arguments[0], arguments[1]) : r
            }
            function Po(r, n) {
                var a = r.__data__;
                return ny(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map
            }
            function pc(r) {
                for (var n = kt(r), a = n.length; a--; ) {
                    var h = n[a]
                      , p = r[h];
                    n[a] = [h, p, ol(p)]
                }
                return n
            }
            function Zi(r, n) {
                var a = ag(r, n);
                return Sh(a) ? a : t
            }
            function Q0(r) {
                var n = nt.call(r, Wi)
                  , a = r[Wi];
                try {
                    r[Wi] = t;
                    var h = !0
                } catch {}
                var p = no.call(r);
                return h && (n ? r[Wi] = a : delete r[Wi]),
                p
            }
            var gc = Ba ? function(r) {
                return r == null ? [] : (r = ut(r),
                Pi(Ba(r), function(n) {
                    return uh.call(r, n)
                }))
            }
            : Nc
              , il = Ba ? function(r) {
                for (var n = []; r; )
                    Ci(n, gc(r)),
                    r = ao(r);
                return n
            }
            : Nc
              , Xt = nr;
            (Ha && Xt(new Ha(new ArrayBuffer(1))) != Ce || Xn && Xt(new Xn) != Ie || Ka && Xt(Ka.resolve()) != pt || xn && Xt(new xn) != xe || Zn && Xt(new Zn) != Pe) && (Xt = function(r) {
                var n = nr(r)
                  , a = n == Me ? r.constructor : t
                  , h = a ? en(a) : "";
                if (h)
                    switch (h) {
                    case Ng:
                        return Ce;
                    case Ug:
                        return Ie;
                    case Lg:
                        return pt;
                    case $g:
                        return xe;
                    case Mg:
                        return Pe
                    }
                return n
            }
            );
            function X0(r, n, a) {
                for (var h = -1, p = a.length; ++h < p; ) {
                    var w = a[h]
                      , x = w.size;
                    switch (w.type) {
                    case "drop":
                        r += x;
                        break;
                    case "dropRight":
                        n -= x;
                        break;
                    case "take":
                        n = Qt(n, r + x);
                        break;
                    case "takeRight":
                        r = Ht(r, n - x);
                        break
                    }
                }
                return {
                    start: r,
                    end: n
                }
            }
            function Z0(r) {
                var n = r.match(ht);
                return n ? n[1].split(jt) : []
            }
            function nl(r, n, a) {
                n = Ui(n, r);
                for (var h = -1, p = n.length, w = !1; ++h < p; ) {
                    var x = ti(n[h]);
                    if (!(w = r != null && a(r, x)))
                        break;
                    r = r[x]
                }
                return w || ++h != p ? w : (p = r == null ? 0 : r.length,
                !!p && Lo(p) && pi(x, p) && (Re(r) || tn(r)))
            }
            function ey(r) {
                var n = r.length
                  , a = new r.constructor(n);
                return n && typeof r[0] == "string" && nt.call(r, "index") && (a.index = r.index,
                a.input = r.input),
                a
            }
            function sl(r) {
                return typeof r.constructor == "function" && !cs(r) ? Pn(ao(r)) : {}
            }
            function ty(r, n, a) {
                var h = r.constructor;
                switch (n) {
                case Se:
                    return cc(r);
                case F:
                case L:
                    return new h(+r);
                case Ce:
                    return j0(r, a);
                case He:
                case Oe:
                case Ve:
                case We:
                case et:
                case tt:
                case Qe:
                case tr:
                case fr:
                    return zh(r, a);
                case Ie:
                    return new h;
                case Be:
                case Ne:
                    return new h(r);
                case qe:
                    return q0(r);
                case xe:
                    return new h;
                case Ue:
                    return F0(r)
                }
            }
            function ry(r, n) {
                var a = n.length;
                if (!a)
                    return r;
                var h = a - 1;
                return n[h] = (a > 1 ? "& " : "") + n[h],
                n = n.join(a > 2 ? ", " : " "),
                r.replace(Pt, `{
/* [wrapped with ` + n + `] */
`)
            }
            function iy(r) {
                return Re(r) || tn(r) || !!(hh && r && r[hh])
            }
            function pi(r, n) {
                var a = typeof r;
                return n = n ?? k,
                !!n && (a == "number" || a != "symbol" && ma.test(r)) && r > -1 && r % 1 == 0 && r < n
            }
            function sr(r, n, a) {
                if (!Et(a))
                    return !1;
                var h = typeof n;
                return (h == "number" ? gr(a) && pi(n, a.length) : h == "string" && n in a) ? kr(a[n], r) : !1
            }
            function yc(r, n) {
                if (Re(r))
                    return !1;
                var a = typeof r;
                return a == "number" || a == "symbol" || a == "boolean" || r == null || Sr(r) ? !0 : Lt.test(r) || !vt.test(r) || n != null && r in ut(n)
            }
            function ny(r) {
                var n = typeof r;
                return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null
            }
            function vc(r) {
                var n = Oo(r)
                  , a = v[n];
                if (typeof a != "function" || !(n in Ye.prototype))
                    return !1;
                if (r === a)
                    return !0;
                var h = dc(a);
                return !!h && r === h[0]
            }
            function sy(r) {
                return !!oh && oh in r
            }
            var oy = ro ? gi : Uc;
            function cs(r) {
                var n = r && r.constructor
                  , a = typeof n == "function" && n.prototype || In;
                return r === a
            }
            function ol(r) {
                return r === r && !Et(r)
            }
            function al(r, n) {
                return function(a) {
                    return a == null ? !1 : a[r] === n && (n !== t || r in ut(a))
                }
            }
            function ay(r) {
                var n = No(r, function(h) {
                    return a.size === g && a.clear(),
                    h
                })
                  , a = n.cache;
                return n
            }
            function cy(r, n) {
                var a = r[1]
                  , h = n[1]
                  , p = a | h
                  , w = p < (H | ie | u)
                  , x = h == u && a == j || h == u && a == _ && r[7].length <= n[8] || h == (u | _) && n[7].length <= n[8] && a == j;
                if (!(w || x))
                    return r;
                h & H && (r[2] = n[2],
                p |= a & H ? 0 : U);
                var N = n[3];
                if (N) {
                    var q = r[3];
                    r[3] = q ? Hh(q, N, n[4]) : N,
                    r[4] = q ? Ai(r[3], m) : n[4]
                }
                return N = n[5],
                N && (q = r[5],
                r[5] = q ? Kh(q, N, n[6]) : N,
                r[6] = q ? Ai(r[5], m) : n[6]),
                N = n[7],
                N && (r[7] = N),
                h & u && (r[8] = r[8] == null ? n[8] : Qt(r[8], n[8])),
                r[9] == null && (r[9] = n[9]),
                r[0] = n[0],
                r[1] = p,
                r
            }
            function uy(r) {
                var n = [];
                if (r != null)
                    for (var a in ut(r))
                        n.push(a);
                return n
            }
            function hy(r) {
                return no.call(r)
            }
            function cl(r, n, a) {
                return n = Ht(n === t ? r.length - 1 : n, 0),
                function() {
                    for (var h = arguments, p = -1, w = Ht(h.length - n, 0), x = K(w); ++p < w; )
                        x[p] = h[n + p];
                    p = -1;
                    for (var N = K(n + 1); ++p < n; )
                        N[p] = h[p];
                    return N[n] = a(x),
                    Kt(r, this, N)
                }
            }
            function ul(r, n) {
                return n.length < 2 ? r : Xi(r, $r(n, 0, -1))
            }
            function ly(r, n) {
                for (var a = r.length, h = Qt(n.length, a), p = pr(r); h--; ) {
                    var w = n[h];
                    r[h] = pi(w, a) ? p[w] : t
                }
                return r
            }
            function mc(r, n) {
                if (!(n === "constructor" && typeof r[n] == "function") && n != "__proto__")
                    return r[n]
            }
            var hl = fl(Nh)
              , us = xg || function(r, n) {
                return Xe.setTimeout(r, n)
            }
              , wc = fl(U0);
            function ll(r, n, a) {
                var h = n + "";
                return wc(r, ry(h, fy(Z0(h), a)))
            }
            function fl(r) {
                var n = 0
                  , a = 0;
                return function() {
                    var h = Ag()
                      , p = de - (h - a);
                    if (a = h,
                    p > 0) {
                        if (++n >= ue)
                            return arguments[0]
                    } else
                        n = 0;
                    return r.apply(t, arguments)
                }
            }
            function Co(r, n) {
                var a = -1
                  , h = r.length
                  , p = h - 1;
                for (n = n === t ? h : n; ++a < n; ) {
                    var w = tc(a, p)
                      , x = r[w];
                    r[w] = r[a],
                    r[a] = x
                }
                return r.length = n,
                r
            }
            var dl = ay(function(r) {
                var n = [];
                return r.charCodeAt(0) === 46 && n.push(""),
                r.replace($t, function(a, h, p, w) {
                    n.push(p ? w.replace(fa, "$1") : h || a)
                }),
                n
            });
            function ti(r) {
                if (typeof r == "string" || Sr(r))
                    return r;
                var n = r + "";
                return n == "0" && 1 / r == -Q ? "-0" : n
            }
            function en(r) {
                if (r != null) {
                    try {
                        return io.call(r)
                    } catch {}
                    try {
                        return r + ""
                    } catch {}
                }
                return ""
            }
            function fy(r, n) {
                return Rr(be, function(a) {
                    var h = "_." + a[0];
                    n & a[1] && !Xs(r, h) && r.push(h)
                }),
                r.sort()
            }
            function pl(r) {
                if (r instanceof Ye)
                    return r.clone();
                var n = new Ur(r.__wrapped__,r.__chain__);
                return n.__actions__ = pr(r.__actions__),
                n.__index__ = r.__index__,
                n.__values__ = r.__values__,
                n
            }
            function dy(r, n, a) {
                (a ? sr(r, n, a) : n === t) ? n = 1 : n = Ht(je(n), 0);
                var h = r == null ? 0 : r.length;
                if (!h || n < 1)
                    return [];
                for (var p = 0, w = 0, x = K(ho(h / n)); p < h; )
                    x[w++] = $r(r, p, p += n);
                return x
            }
            function py(r) {
                for (var n = -1, a = r == null ? 0 : r.length, h = 0, p = []; ++n < a; ) {
                    var w = r[n];
                    w && (p[h++] = w)
                }
                return p
            }
            function gy() {
                var r = arguments.length;
                if (!r)
                    return [];
                for (var n = K(r - 1), a = arguments[0], h = r; h--; )
                    n[h - 1] = arguments[h];
                return Ci(Re(a) ? pr(a) : [a], Wt(n, 1))
            }
            var yy = Ke(function(r, n) {
                return Rt(r) ? is(r, Wt(n, 1, Rt, !0)) : []
            })
              , vy = Ke(function(r, n) {
                var a = Mr(n);
                return Rt(a) && (a = t),
                Rt(r) ? is(r, Wt(n, 1, Rt, !0), we(a, 2)) : []
            })
              , my = Ke(function(r, n) {
                var a = Mr(n);
                return Rt(a) && (a = t),
                Rt(r) ? is(r, Wt(n, 1, Rt, !0), t, a) : []
            });
            function wy(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (n = a || n === t ? 1 : je(n),
                $r(r, n < 0 ? 0 : n, h)) : []
            }
            function _y(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (n = a || n === t ? 1 : je(n),
                n = h - n,
                $r(r, 0, n < 0 ? 0 : n)) : []
            }
            function by(r, n) {
                return r && r.length ? bo(r, we(n, 3), !0, !0) : []
            }
            function Ey(r, n) {
                return r && r.length ? bo(r, we(n, 3), !0) : []
            }
            function Dy(r, n, a, h) {
                var p = r == null ? 0 : r.length;
                return p ? (a && typeof a != "number" && sr(r, n, a) && (a = 0,
                h = p),
                g0(r, n, a, h)) : []
            }
            function gl(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var p = a == null ? 0 : je(a);
                return p < 0 && (p = Ht(h + p, 0)),
                Zs(r, we(n, 3), p)
            }
            function yl(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var p = h - 1;
                return a !== t && (p = je(a),
                p = a < 0 ? Ht(h + p, 0) : Qt(p, h - 1)),
                Zs(r, we(n, 3), p, !0)
            }
            function vl(r) {
                var n = r == null ? 0 : r.length;
                return n ? Wt(r, 1) : []
            }
            function Sy(r) {
                var n = r == null ? 0 : r.length;
                return n ? Wt(r, Q) : []
            }
            function Iy(r, n) {
                var a = r == null ? 0 : r.length;
                return a ? (n = n === t ? 1 : je(n),
                Wt(r, n)) : []
            }
            function xy(r) {
                for (var n = -1, a = r == null ? 0 : r.length, h = {}; ++n < a; ) {
                    var p = r[n];
                    h[p[0]] = p[1]
                }
                return h
            }
            function ml(r) {
                return r && r.length ? r[0] : t
            }
            function Oy(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var p = a == null ? 0 : je(a);
                return p < 0 && (p = Ht(h + p, 0)),
                bn(r, n, p)
            }
            function Py(r) {
                var n = r == null ? 0 : r.length;
                return n ? $r(r, 0, -1) : []
            }
            var Cy = Ke(function(r) {
                var n = mt(r, oc);
                return n.length && n[0] === r[0] ? Ja(n) : []
            })
              , Ay = Ke(function(r) {
                var n = Mr(r)
                  , a = mt(r, oc);
                return n === Mr(a) ? n = t : a.pop(),
                a.length && a[0] === r[0] ? Ja(a, we(n, 2)) : []
            })
              , Ty = Ke(function(r) {
                var n = Mr(r)
                  , a = mt(r, oc);
                return n = typeof n == "function" ? n : t,
                n && a.pop(),
                a.length && a[0] === r[0] ? Ja(a, t, n) : []
            });
            function Ry(r, n) {
                return r == null ? "" : Pg.call(r, n)
            }
            function Mr(r) {
                var n = r == null ? 0 : r.length;
                return n ? r[n - 1] : t
            }
            function Ny(r, n, a) {
                var h = r == null ? 0 : r.length;
                if (!h)
                    return -1;
                var p = h;
                return a !== t && (p = je(a),
                p = p < 0 ? Ht(h + p, 0) : Qt(p, h - 1)),
                n === n ? fg(r, n, p) : Zs(r, Xu, p, !0)
            }
            function Uy(r, n) {
                return r && r.length ? Ch(r, je(n)) : t
            }
            var Ly = Ke(wl);
            function wl(r, n) {
                return r && r.length && n && n.length ? ec(r, n) : r
            }
            function $y(r, n, a) {
                return r && r.length && n && n.length ? ec(r, n, we(a, 2)) : r
            }
            function My(r, n, a) {
                return r && r.length && n && n.length ? ec(r, n, t, a) : r
            }
            var jy = di(function(r, n) {
                var a = r == null ? 0 : r.length
                  , h = Va(r, n);
                return Rh(r, mt(n, function(p) {
                    return pi(p, a) ? +p : p
                }).sort(Bh)),
                h
            });
            function qy(r, n) {
                var a = [];
                if (!(r && r.length))
                    return a;
                var h = -1
                  , p = []
                  , w = r.length;
                for (n = we(n, 3); ++h < w; ) {
                    var x = r[h];
                    n(x, h, r) && (a.push(x),
                    p.push(h))
                }
                return Rh(r, p),
                a
            }
            function _c(r) {
                return r == null ? r : Rg.call(r)
            }
            function Fy(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (a && typeof a != "number" && sr(r, n, a) ? (n = 0,
                a = h) : (n = n == null ? 0 : je(n),
                a = a === t ? h : je(a)),
                $r(r, n, a)) : []
            }
            function zy(r, n) {
                return _o(r, n)
            }
            function By(r, n, a) {
                return ic(r, n, we(a, 2))
            }
            function Hy(r, n) {
                var a = r == null ? 0 : r.length;
                if (a) {
                    var h = _o(r, n);
                    if (h < a && kr(r[h], n))
                        return h
                }
                return -1
            }
            function Ky(r, n) {
                return _o(r, n, !0)
            }
            function ky(r, n, a) {
                return ic(r, n, we(a, 2), !0)
            }
            function Vy(r, n) {
                var a = r == null ? 0 : r.length;
                if (a) {
                    var h = _o(r, n, !0) - 1;
                    if (kr(r[h], n))
                        return h
                }
                return -1
            }
            function Gy(r) {
                return r && r.length ? Uh(r) : []
            }
            function Wy(r, n) {
                return r && r.length ? Uh(r, we(n, 2)) : []
            }
            function Yy(r) {
                var n = r == null ? 0 : r.length;
                return n ? $r(r, 1, n) : []
            }
            function Jy(r, n, a) {
                return r && r.length ? (n = a || n === t ? 1 : je(n),
                $r(r, 0, n < 0 ? 0 : n)) : []
            }
            function Qy(r, n, a) {
                var h = r == null ? 0 : r.length;
                return h ? (n = a || n === t ? 1 : je(n),
                n = h - n,
                $r(r, n < 0 ? 0 : n, h)) : []
            }
            function Xy(r, n) {
                return r && r.length ? bo(r, we(n, 3), !1, !0) : []
            }
            function Zy(r, n) {
                return r && r.length ? bo(r, we(n, 3)) : []
            }
            var ev = Ke(function(r) {
                return Ni(Wt(r, 1, Rt, !0))
            })
              , tv = Ke(function(r) {
                var n = Mr(r);
                return Rt(n) && (n = t),
                Ni(Wt(r, 1, Rt, !0), we(n, 2))
            })
              , rv = Ke(function(r) {
                var n = Mr(r);
                return n = typeof n == "function" ? n : t,
                Ni(Wt(r, 1, Rt, !0), t, n)
            });
            function iv(r) {
                return r && r.length ? Ni(r) : []
            }
            function nv(r, n) {
                return r && r.length ? Ni(r, we(n, 2)) : []
            }
            function sv(r, n) {
                return n = typeof n == "function" ? n : t,
                r && r.length ? Ni(r, t, n) : []
            }
            function bc(r) {
                if (!(r && r.length))
                    return [];
                var n = 0;
                return r = Pi(r, function(a) {
                    if (Rt(a))
                        return n = Ht(a.length, n),
                        !0
                }),
                ja(n, function(a) {
                    return mt(r, La(a))
                })
            }
            function _l(r, n) {
                if (!(r && r.length))
                    return [];
                var a = bc(r);
                return n == null ? a : mt(a, function(h) {
                    return Kt(n, t, h)
                })
            }
            var ov = Ke(function(r, n) {
                return Rt(r) ? is(r, n) : []
            })
              , av = Ke(function(r) {
                return sc(Pi(r, Rt))
            })
              , cv = Ke(function(r) {
                var n = Mr(r);
                return Rt(n) && (n = t),
                sc(Pi(r, Rt), we(n, 2))
            })
              , uv = Ke(function(r) {
                var n = Mr(r);
                return n = typeof n == "function" ? n : t,
                sc(Pi(r, Rt), t, n)
            })
              , hv = Ke(bc);
            function lv(r, n) {
                return jh(r || [], n || [], rs)
            }
            function fv(r, n) {
                return jh(r || [], n || [], os)
            }
            var dv = Ke(function(r) {
                var n = r.length
                  , a = n > 1 ? r[n - 1] : t;
                return a = typeof a == "function" ? (r.pop(),
                a) : t,
                _l(r, a)
            });
            function bl(r) {
                var n = v(r);
                return n.__chain__ = !0,
                n
            }
            function pv(r, n) {
                return n(r),
                r
            }
            function Ao(r, n) {
                return n(r)
            }
            var gv = di(function(r) {
                var n = r.length
                  , a = n ? r[0] : 0
                  , h = this.__wrapped__
                  , p = function(w) {
                    return Va(w, r)
                };
                return n > 1 || this.__actions__.length || !(h instanceof Ye) || !pi(a) ? this.thru(p) : (h = h.slice(a, +a + (n ? 1 : 0)),
                h.__actions__.push({
                    func: Ao,
                    args: [p],
                    thisArg: t
                }),
                new Ur(h,this.__chain__).thru(function(w) {
                    return n && !w.length && w.push(t),
                    w
                }))
            });
            function yv() {
                return bl(this)
            }
            function vv() {
                return new Ur(this.value(),this.__chain__)
            }
            function mv() {
                this.__values__ === t && (this.__values__ = Ll(this.value()));
                var r = this.__index__ >= this.__values__.length
                  , n = r ? t : this.__values__[this.__index__++];
                return {
                    done: r,
                    value: n
                }
            }
            function wv() {
                return this
            }
            function _v(r) {
                for (var n, a = this; a instanceof go; ) {
                    var h = pl(a);
                    h.__index__ = 0,
                    h.__values__ = t,
                    n ? p.__wrapped__ = h : n = h;
                    var p = h;
                    a = a.__wrapped__
                }
                return p.__wrapped__ = r,
                n
            }
            function bv() {
                var r = this.__wrapped__;
                if (r instanceof Ye) {
                    var n = r;
                    return this.__actions__.length && (n = new Ye(this)),
                    n = n.reverse(),
                    n.__actions__.push({
                        func: Ao,
                        args: [_c],
                        thisArg: t
                    }),
                    new Ur(n,this.__chain__)
                }
                return this.thru(_c)
            }
            function Ev() {
                return Mh(this.__wrapped__, this.__actions__)
            }
            var Dv = Eo(function(r, n, a) {
                nt.call(r, a) ? ++r[a] : li(r, a, 1)
            });
            function Sv(r, n, a) {
                var h = Re(r) ? Ju : p0;
                return a && sr(r, n, a) && (n = t),
                h(r, we(n, 3))
            }
            function Iv(r, n) {
                var a = Re(r) ? Pi : _h;
                return a(r, we(n, 3))
            }
            var xv = Wh(gl)
              , Ov = Wh(yl);
            function Pv(r, n) {
                return Wt(To(r, n), 1)
            }
            function Cv(r, n) {
                return Wt(To(r, n), Q)
            }
            function Av(r, n, a) {
                return a = a === t ? 1 : je(a),
                Wt(To(r, n), a)
            }
            function El(r, n) {
                var a = Re(r) ? Rr : Ri;
                return a(r, we(n, 3))
            }
            function Dl(r, n) {
                var a = Re(r) ? Yp : wh;
                return a(r, we(n, 3))
            }
            var Tv = Eo(function(r, n, a) {
                nt.call(r, a) ? r[a].push(n) : li(r, a, [n])
            });
            function Rv(r, n, a, h) {
                r = gr(r) ? r : Nn(r),
                a = a && !h ? je(a) : 0;
                var p = r.length;
                return a < 0 && (a = Ht(p + a, 0)),
                $o(r) ? a <= p && r.indexOf(n, a) > -1 : !!p && bn(r, n, a) > -1
            }
            var Nv = Ke(function(r, n, a) {
                var h = -1
                  , p = typeof n == "function"
                  , w = gr(r) ? K(r.length) : [];
                return Ri(r, function(x) {
                    w[++h] = p ? Kt(n, x, a) : ns(x, n, a)
                }),
                w
            })
              , Uv = Eo(function(r, n, a) {
                li(r, a, n)
            });
            function To(r, n) {
                var a = Re(r) ? mt : xh;
                return a(r, we(n, 3))
            }
            function Lv(r, n, a, h) {
                return r == null ? [] : (Re(n) || (n = n == null ? [] : [n]),
                a = h ? t : a,
                Re(a) || (a = a == null ? [] : [a]),
                Ah(r, n, a))
            }
            var $v = Eo(function(r, n, a) {
                r[a ? 0 : 1].push(n)
            }, function() {
                return [[], []]
            });
            function Mv(r, n, a) {
                var h = Re(r) ? Na : eh
                  , p = arguments.length < 3;
                return h(r, we(n, 4), a, p, Ri)
            }
            function jv(r, n, a) {
                var h = Re(r) ? Jp : eh
                  , p = arguments.length < 3;
                return h(r, we(n, 4), a, p, wh)
            }
            function qv(r, n) {
                var a = Re(r) ? Pi : _h;
                return a(r, Uo(we(n, 3)))
            }
            function Fv(r) {
                var n = Re(r) ? gh : R0;
                return n(r)
            }
            function zv(r, n, a) {
                (a ? sr(r, n, a) : n === t) ? n = 1 : n = je(n);
                var h = Re(r) ? u0 : N0;
                return h(r, n)
            }
            function Bv(r) {
                var n = Re(r) ? h0 : L0;
                return n(r)
            }
            function Hv(r) {
                if (r == null)
                    return 0;
                if (gr(r))
                    return $o(r) ? Dn(r) : r.length;
                var n = Xt(r);
                return n == Ie || n == xe ? r.size : Xa(r).length
            }
            function Kv(r, n, a) {
                var h = Re(r) ? Ua : $0;
                return a && sr(r, n, a) && (n = t),
                h(r, we(n, 3))
            }
            var kv = Ke(function(r, n) {
                if (r == null)
                    return [];
                var a = n.length;
                return a > 1 && sr(r, n[0], n[1]) ? n = [] : a > 2 && sr(n[0], n[1], n[2]) && (n = [n[0]]),
                Ah(r, Wt(n, 1), [])
            })
              , Ro = Ig || function() {
                return Xe.Date.now()
            }
            ;
            function Vv(r, n) {
                if (typeof n != "function")
                    throw new Nr(d);
                return r = je(r),
                function() {
                    if (--r < 1)
                        return n.apply(this, arguments)
                }
            }
            function Sl(r, n, a) {
                return n = a ? t : n,
                n = r && n == null ? r.length : n,
                fi(r, u, t, t, t, t, n)
            }
            function Il(r, n) {
                var a;
                if (typeof n != "function")
                    throw new Nr(d);
                return r = je(r),
                function() {
                    return --r > 0 && (a = n.apply(this, arguments)),
                    r <= 1 && (n = t),
                    a
                }
            }
            var Ec = Ke(function(r, n, a) {
                var h = H;
                if (a.length) {
                    var p = Ai(a, Tn(Ec));
                    h |= A
                }
                return fi(r, h, n, a, p)
            })
              , xl = Ke(function(r, n, a) {
                var h = H | ie;
                if (a.length) {
                    var p = Ai(a, Tn(xl));
                    h |= A
                }
                return fi(n, h, r, a, p)
            });
            function Ol(r, n, a) {
                n = a ? t : n;
                var h = fi(r, j, t, t, t, t, t, n);
                return h.placeholder = Ol.placeholder,
                h
            }
            function Pl(r, n, a) {
                n = a ? t : n;
                var h = fi(r, O, t, t, t, t, t, n);
                return h.placeholder = Pl.placeholder,
                h
            }
            function Cl(r, n, a) {
                var h, p, w, x, N, q, X = 0, Z = !1, ne = !1, he = !0;
                if (typeof r != "function")
                    throw new Nr(d);
                n = jr(n) || 0,
                Et(a) && (Z = !!a.leading,
                ne = "maxWait"in a,
                w = ne ? Ht(jr(a.maxWait) || 0, n) : w,
                he = "trailing"in a ? !!a.trailing : he);
                function ye(Nt) {
                    var Vr = h
                      , vi = p;
                    return h = p = t,
                    X = Nt,
                    x = r.apply(vi, Vr),
                    x
                }
                function Ee(Nt) {
                    return X = Nt,
                    N = us(Ge, n),
                    Z ? ye(Nt) : x
                }
                function ze(Nt) {
                    var Vr = Nt - q
                      , vi = Nt - X
                      , Wl = n - Vr;
                    return ne ? Qt(Wl, w - vi) : Wl
                }
                function De(Nt) {
                    var Vr = Nt - q
                      , vi = Nt - X;
                    return q === t || Vr >= n || Vr < 0 || ne && vi >= w
                }
                function Ge() {
                    var Nt = Ro();
                    if (De(Nt))
                        return Ze(Nt);
                    N = us(Ge, ze(Nt))
                }
                function Ze(Nt) {
                    return N = t,
                    he && h ? ye(Nt) : (h = p = t,
                    x)
                }
                function Ir() {
                    N !== t && qh(N),
                    X = 0,
                    h = q = p = N = t
                }
                function or() {
                    return N === t ? x : Ze(Ro())
                }
                function xr() {
                    var Nt = Ro()
                      , Vr = De(Nt);
                    if (h = arguments,
                    p = this,
                    q = Nt,
                    Vr) {
                        if (N === t)
                            return Ee(q);
                        if (ne)
                            return qh(N),
                            N = us(Ge, n),
                            ye(q)
                    }
                    return N === t && (N = us(Ge, n)),
                    x
                }
                return xr.cancel = Ir,
                xr.flush = or,
                xr
            }
            var Gv = Ke(function(r, n) {
                return mh(r, 1, n)
            })
              , Wv = Ke(function(r, n, a) {
                return mh(r, jr(n) || 0, a)
            });
            function Yv(r) {
                return fi(r, G)
            }
            function No(r, n) {
                if (typeof r != "function" || n != null && typeof n != "function")
                    throw new Nr(d);
                var a = function() {
                    var h = arguments
                      , p = n ? n.apply(this, h) : h[0]
                      , w = a.cache;
                    if (w.has(p))
                        return w.get(p);
                    var x = r.apply(this, h);
                    return a.cache = w.set(p, x) || w,
                    x
                };
                return a.cache = new (No.Cache || hi),
                a
            }
            No.Cache = hi;
            function Uo(r) {
                if (typeof r != "function")
                    throw new Nr(d);
                return function() {
                    var n = arguments;
                    switch (n.length) {
                    case 0:
                        return !r.call(this);
                    case 1:
                        return !r.call(this, n[0]);
                    case 2:
                        return !r.call(this, n[0], n[1]);
                    case 3:
                        return !r.call(this, n[0], n[1], n[2])
                    }
                    return !r.apply(this, n)
                }
            }
            function Jv(r) {
                return Il(2, r)
            }
            var Qv = M0(function(r, n) {
                n = n.length == 1 && Re(n[0]) ? mt(n[0], Er(we())) : mt(Wt(n, 1), Er(we()));
                var a = n.length;
                return Ke(function(h) {
                    for (var p = -1, w = Qt(h.length, a); ++p < w; )
                        h[p] = n[p].call(this, h[p]);
                    return Kt(r, this, h)
                })
            })
              , Dc = Ke(function(r, n) {
                var a = Ai(n, Tn(Dc));
                return fi(r, A, t, n, a)
            })
              , Al = Ke(function(r, n) {
                var a = Ai(n, Tn(Al));
                return fi(r, E, t, n, a)
            })
              , Xv = di(function(r, n) {
                return fi(r, _, t, t, t, n)
            });
            function Zv(r, n) {
                if (typeof r != "function")
                    throw new Nr(d);
                return n = n === t ? n : je(n),
                Ke(r, n)
            }
            function em(r, n) {
                if (typeof r != "function")
                    throw new Nr(d);
                return n = n == null ? 0 : Ht(je(n), 0),
                Ke(function(a) {
                    var h = a[n]
                      , p = Li(a, 0, n);
                    return h && Ci(p, h),
                    Kt(r, this, p)
                })
            }
            function tm(r, n, a) {
                var h = !0
                  , p = !0;
                if (typeof r != "function")
                    throw new Nr(d);
                return Et(a) && (h = "leading"in a ? !!a.leading : h,
                p = "trailing"in a ? !!a.trailing : p),
                Cl(r, n, {
                    leading: h,
                    maxWait: n,
                    trailing: p
                })
            }
            function rm(r) {
                return Sl(r, 1)
            }
            function im(r, n) {
                return Dc(ac(n), r)
            }
            function nm() {
                if (!arguments.length)
                    return [];
                var r = arguments[0];
                return Re(r) ? r : [r]
            }
            function sm(r) {
                return Lr(r, T)
            }
            function om(r, n) {
                return n = typeof n == "function" ? n : t,
                Lr(r, T, n)
            }
            function am(r) {
                return Lr(r, D | T)
            }
            function cm(r, n) {
                return n = typeof n == "function" ? n : t,
                Lr(r, D | T, n)
            }
            function um(r, n) {
                return n == null || vh(r, n, kt(n))
            }
            function kr(r, n) {
                return r === n || r !== r && n !== n
            }
            var hm = xo(Ya)
              , lm = xo(function(r, n) {
                return r >= n
            })
              , tn = Dh(function() {
                return arguments
            }()) ? Dh : function(r) {
                return Ct(r) && nt.call(r, "callee") && !uh.call(r, "callee")
            }
              , Re = K.isArray
              , fm = ir ? Er(ir) : _0;
            function gr(r) {
                return r != null && Lo(r.length) && !gi(r)
            }
            function Rt(r) {
                return Ct(r) && gr(r)
            }
            function dm(r) {
                return r === !0 || r === !1 || Ct(r) && nr(r) == F
            }
            var $i = Og || Uc
              , pm = Br ? Er(Br) : b0;
            function gm(r) {
                return Ct(r) && r.nodeType === 1 && !hs(r)
            }
            function ym(r) {
                if (r == null)
                    return !0;
                if (gr(r) && (Re(r) || typeof r == "string" || typeof r.splice == "function" || $i(r) || Rn(r) || tn(r)))
                    return !r.length;
                var n = Xt(r);
                if (n == Ie || n == xe)
                    return !r.size;
                if (cs(r))
                    return !Xa(r).length;
                for (var a in r)
                    if (nt.call(r, a))
                        return !1;
                return !0
            }
            function vm(r, n) {
                return ss(r, n)
            }
            function mm(r, n, a) {
                a = typeof a == "function" ? a : t;
                var h = a ? a(r, n) : t;
                return h === t ? ss(r, n, t, a) : !!h
            }
            function Sc(r) {
                if (!Ct(r))
                    return !1;
                var n = nr(r);
                return n == R || n == l || typeof r.message == "string" && typeof r.name == "string" && !hs(r)
            }
            function wm(r) {
                return typeof r == "number" && lh(r)
            }
            function gi(r) {
                if (!Et(r))
                    return !1;
                var n = nr(r);
                return n == ae || n == fe || n == B || n == gt
            }
            function Tl(r) {
                return typeof r == "number" && r == je(r)
            }
            function Lo(r) {
                return typeof r == "number" && r > -1 && r % 1 == 0 && r <= k
            }
            function Et(r) {
                var n = typeof r;
                return r != null && (n == "object" || n == "function")
            }
            function Ct(r) {
                return r != null && typeof r == "object"
            }
            var Rl = Tr ? Er(Tr) : D0;
            function _m(r, n) {
                return r === n || Qa(r, n, pc(n))
            }
            function bm(r, n, a) {
                return a = typeof a == "function" ? a : t,
                Qa(r, n, pc(n), a)
            }
            function Em(r) {
                return Nl(r) && r != +r
            }
            function Dm(r) {
                if (oy(r))
                    throw new Ae(c);
                return Sh(r)
            }
            function Sm(r) {
                return r === null
            }
            function Im(r) {
                return r == null
            }
            function Nl(r) {
                return typeof r == "number" || Ct(r) && nr(r) == Be
            }
            function hs(r) {
                if (!Ct(r) || nr(r) != Me)
                    return !1;
                var n = ao(r);
                if (n === null)
                    return !0;
                var a = nt.call(n, "constructor") && n.constructor;
                return typeof a == "function" && a instanceof a && io.call(a) == bg
            }
            var Ic = Xr ? Er(Xr) : S0;
            function xm(r) {
                return Tl(r) && r >= -k && r <= k
            }
            var Ul = Yn ? Er(Yn) : I0;
            function $o(r) {
                return typeof r == "string" || !Re(r) && Ct(r) && nr(r) == Ne
            }
            function Sr(r) {
                return typeof r == "symbol" || Ct(r) && nr(r) == Ue
            }
            var Rn = Gi ? Er(Gi) : x0;
            function Om(r) {
                return r === t
            }
            function Pm(r) {
                return Ct(r) && Xt(r) == Pe
            }
            function Cm(r) {
                return Ct(r) && nr(r) == Le
            }
            var Am = xo(Za)
              , Tm = xo(function(r, n) {
                return r <= n
            });
            function Ll(r) {
                if (!r)
                    return [];
                if (gr(r))
                    return $o(r) ? Hr(r) : pr(r);
                if (Qn && r[Qn])
                    return ug(r[Qn]());
                var n = Xt(r)
                  , a = n == Ie ? Fa : n == xe ? eo : Nn;
                return a(r)
            }
            function yi(r) {
                if (!r)
                    return r === 0 ? r : 0;
                if (r = jr(r),
                r === Q || r === -Q) {
                    var n = r < 0 ? -1 : 1;
                    return n * V
                }
                return r === r ? r : 0
            }
            function je(r) {
                var n = yi(r)
                  , a = n % 1;
                return n === n ? a ? n - a : n : 0
            }
            function $l(r) {
                return r ? Qi(je(r), 0, re) : 0
            }
            function jr(r) {
                if (typeof r == "number")
                    return r;
                if (Sr(r))
                    return J;
                if (Et(r)) {
                    var n = typeof r.valueOf == "function" ? r.valueOf() : r;
                    r = Et(n) ? n + "" : n
                }
                if (typeof r != "string")
                    return r === 0 ? r : +r;
                r = th(r);
                var a = ga.test(r);
                return a || va.test(r) ? Te(r.slice(2), a ? 2 : 8) : pa.test(r) ? J : +r
            }
            function Ml(r) {
                return ei(r, yr(r))
            }
            function Rm(r) {
                return r ? Qi(je(r), -k, k) : r === 0 ? r : 0
            }
            function it(r) {
                return r == null ? "" : Dr(r)
            }
            var Nm = Cn(function(r, n) {
                if (cs(n) || gr(n)) {
                    ei(n, kt(n), r);
                    return
                }
                for (var a in n)
                    nt.call(n, a) && rs(r, a, n[a])
            })
              , jl = Cn(function(r, n) {
                ei(n, yr(n), r)
            })
              , Mo = Cn(function(r, n, a, h) {
                ei(n, yr(n), r, h)
            })
              , Um = Cn(function(r, n, a, h) {
                ei(n, kt(n), r, h)
            })
              , Lm = di(Va);
            function $m(r, n) {
                var a = Pn(r);
                return n == null ? a : yh(a, n)
            }
            var Mm = Ke(function(r, n) {
                r = ut(r);
                var a = -1
                  , h = n.length
                  , p = h > 2 ? n[2] : t;
                for (p && sr(n[0], n[1], p) && (h = 1); ++a < h; )
                    for (var w = n[a], x = yr(w), N = -1, q = x.length; ++N < q; ) {
                        var X = x[N]
                          , Z = r[X];
                        (Z === t || kr(Z, In[X]) && !nt.call(r, X)) && (r[X] = w[X])
                    }
                return r
            })
              , jm = Ke(function(r) {
                return r.push(t, tl),
                Kt(ql, t, r)
            });
            function qm(r, n) {
                return Qu(r, we(n, 3), Zr)
            }
            function Fm(r, n) {
                return Qu(r, we(n, 3), Wa)
            }
            function zm(r, n) {
                return r == null ? r : Ga(r, we(n, 3), yr)
            }
            function Bm(r, n) {
                return r == null ? r : bh(r, we(n, 3), yr)
            }
            function Hm(r, n) {
                return r && Zr(r, we(n, 3))
            }
            function Km(r, n) {
                return r && Wa(r, we(n, 3))
            }
            function km(r) {
                return r == null ? [] : mo(r, kt(r))
            }
            function Vm(r) {
                return r == null ? [] : mo(r, yr(r))
            }
            function xc(r, n, a) {
                var h = r == null ? t : Xi(r, n);
                return h === t ? a : h
            }
            function Gm(r, n) {
                return r != null && nl(r, n, y0)
            }
            function Oc(r, n) {
                return r != null && nl(r, n, v0)
            }
            var Wm = Jh(function(r, n, a) {
                n != null && typeof n.toString != "function" && (n = no.call(n)),
                r[n] = a
            }, Cc(vr))
              , Ym = Jh(function(r, n, a) {
                n != null && typeof n.toString != "function" && (n = no.call(n)),
                nt.call(r, n) ? r[n].push(a) : r[n] = [a]
            }, we)
              , Jm = Ke(ns);
            function kt(r) {
                return gr(r) ? ph(r) : Xa(r)
            }
            function yr(r) {
                return gr(r) ? ph(r, !0) : O0(r)
            }
            function Qm(r, n) {
                var a = {};
                return n = we(n, 3),
                Zr(r, function(h, p, w) {
                    li(a, n(h, p, w), h)
                }),
                a
            }
            function Xm(r, n) {
                var a = {};
                return n = we(n, 3),
                Zr(r, function(h, p, w) {
                    li(a, p, n(h, p, w))
                }),
                a
            }
            var Zm = Cn(function(r, n, a) {
                wo(r, n, a)
            })
              , ql = Cn(function(r, n, a, h) {
                wo(r, n, a, h)
            })
              , ew = di(function(r, n) {
                var a = {};
                if (r == null)
                    return a;
                var h = !1;
                n = mt(n, function(w) {
                    return w = Ui(w, r),
                    h || (h = w.length > 1),
                    w
                }),
                ei(r, fc(r), a),
                h && (a = Lr(a, D | I | T, W0));
                for (var p = n.length; p--; )
                    nc(a, n[p]);
                return a
            });
            function tw(r, n) {
                return Fl(r, Uo(we(n)))
            }
            var rw = di(function(r, n) {
                return r == null ? {} : C0(r, n)
            });
            function Fl(r, n) {
                if (r == null)
                    return {};
                var a = mt(fc(r), function(h) {
                    return [h]
                });
                return n = we(n),
                Th(r, a, function(h, p) {
                    return n(h, p[0])
                })
            }
            function iw(r, n, a) {
                n = Ui(n, r);
                var h = -1
                  , p = n.length;
                for (p || (p = 1,
                r = t); ++h < p; ) {
                    var w = r == null ? t : r[ti(n[h])];
                    w === t && (h = p,
                    w = a),
                    r = gi(w) ? w.call(r) : w
                }
                return r
            }
            function nw(r, n, a) {
                return r == null ? r : os(r, n, a)
            }
            function sw(r, n, a, h) {
                return h = typeof h == "function" ? h : t,
                r == null ? r : os(r, n, a, h)
            }
            var zl = Zh(kt)
              , Bl = Zh(yr);
            function ow(r, n, a) {
                var h = Re(r)
                  , p = h || $i(r) || Rn(r);
                if (n = we(n, 4),
                a == null) {
                    var w = r && r.constructor;
                    p ? a = h ? new w : [] : Et(r) ? a = gi(w) ? Pn(ao(r)) : {} : a = {}
                }
                return (p ? Rr : Zr)(r, function(x, N, q) {
                    return n(a, x, N, q)
                }),
                a
            }
            function aw(r, n) {
                return r == null ? !0 : nc(r, n)
            }
            function cw(r, n, a) {
                return r == null ? r : $h(r, n, ac(a))
            }
            function uw(r, n, a, h) {
                return h = typeof h == "function" ? h : t,
                r == null ? r : $h(r, n, ac(a), h)
            }
            function Nn(r) {
                return r == null ? [] : qa(r, kt(r))
            }
            function hw(r) {
                return r == null ? [] : qa(r, yr(r))
            }
            function lw(r, n, a) {
                return a === t && (a = n,
                n = t),
                a !== t && (a = jr(a),
                a = a === a ? a : 0),
                n !== t && (n = jr(n),
                n = n === n ? n : 0),
                Qi(jr(r), n, a)
            }
            function fw(r, n, a) {
                return n = yi(n),
                a === t ? (a = n,
                n = 0) : a = yi(a),
                r = jr(r),
                m0(r, n, a)
            }
            function dw(r, n, a) {
                if (a && typeof a != "boolean" && sr(r, n, a) && (n = a = t),
                a === t && (typeof n == "boolean" ? (a = n,
                n = t) : typeof r == "boolean" && (a = r,
                r = t)),
                r === t && n === t ? (r = 0,
                n = 1) : (r = yi(r),
                n === t ? (n = r,
                r = 0) : n = yi(n)),
                r > n) {
                    var h = r;
                    r = n,
                    n = h
                }
                if (a || r % 1 || n % 1) {
                    var p = fh();
                    return Qt(r + p * (n - r + at("1e-" + ((p + "").length - 1))), n)
                }
                return tc(r, n)
            }
            var pw = An(function(r, n, a) {
                return n = n.toLowerCase(),
                r + (a ? Hl(n) : n)
            });
            function Hl(r) {
                return Pc(it(r).toLowerCase())
            }
            function Kl(r) {
                return r = it(r),
                r && r.replace(ai, ng).replace(Aa, "")
            }
            function gw(r, n, a) {
                r = it(r),
                n = Dr(n);
                var h = r.length;
                a = a === t ? h : Qi(je(a), 0, h);
                var p = a;
                return a -= n.length,
                a >= 0 && r.slice(a, p) == n
            }
            function yw(r) {
                return r = it(r),
                r && yt.test(r) ? r.replace(Bi, sg) : r
            }
            function vw(r) {
                return r = it(r),
                r && Mt.test(r) ? r.replace(xt, "\\$&") : r
            }
            var mw = An(function(r, n, a) {
                return r + (a ? "-" : "") + n.toLowerCase()
            })
              , ww = An(function(r, n, a) {
                return r + (a ? " " : "") + n.toLowerCase()
            })
              , _w = Gh("toLowerCase");
            function bw(r, n, a) {
                r = it(r),
                n = je(n);
                var h = n ? Dn(r) : 0;
                if (!n || h >= n)
                    return r;
                var p = (n - h) / 2;
                return Io(lo(p), a) + r + Io(ho(p), a)
            }
            function Ew(r, n, a) {
                r = it(r),
                n = je(n);
                var h = n ? Dn(r) : 0;
                return n && h < n ? r + Io(n - h, a) : r
            }
            function Dw(r, n, a) {
                r = it(r),
                n = je(n);
                var h = n ? Dn(r) : 0;
                return n && h < n ? Io(n - h, a) + r : r
            }
            function Sw(r, n, a) {
                return a || n == null ? n = 0 : n && (n = +n),
                Tg(it(r).replace(Ot, ""), n || 0)
            }
            function Iw(r, n, a) {
                return (a ? sr(r, n, a) : n === t) ? n = 1 : n = je(n),
                rc(it(r), n)
            }
            function xw() {
                var r = arguments
                  , n = it(r[0]);
                return r.length < 3 ? n : n.replace(r[1], r[2])
            }
            var Ow = An(function(r, n, a) {
                return r + (a ? "_" : "") + n.toLowerCase()
            });
            function Pw(r, n, a) {
                return a && typeof a != "number" && sr(r, n, a) && (n = a = t),
                a = a === t ? re : a >>> 0,
                a ? (r = it(r),
                r && (typeof n == "string" || n != null && !Ic(n)) && (n = Dr(n),
                !n && En(r)) ? Li(Hr(r), 0, a) : r.split(n, a)) : []
            }
            var Cw = An(function(r, n, a) {
                return r + (a ? " " : "") + Pc(n)
            });
            function Aw(r, n, a) {
                return r = it(r),
                a = a == null ? 0 : Qi(je(a), 0, r.length),
                n = Dr(n),
                r.slice(a, a + n.length) == n
            }
            function Tw(r, n, a) {
                var h = v.templateSettings;
                a && sr(r, n, a) && (n = t),
                r = it(r),
                n = Mo({}, n, h, el);
                var p = Mo({}, n.imports, h.imports, el), w = kt(p), x = qa(p, w), N, q, X = 0, Z = n.interpolate || pn, ne = "__p += '", he = za((n.escape || pn).source + "|" + Z.source + "|" + (Z === bt ? da : pn).source + "|" + (n.evaluate || pn).source + "|$", "g"), ye = "//# sourceURL=" + (nt.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ta + "]") + `
`;
                r.replace(he, function(De, Ge, Ze, Ir, or, xr) {
                    return Ze || (Ze = Ir),
                    ne += r.slice(X, xr).replace(wa, og),
                    Ge && (N = !0,
                    ne += `' +
__e(` + Ge + `) +
'`),
                    or && (q = !0,
                    ne += `';
` + or + `;
__p += '`),
                    Ze && (ne += `' +
((__t = (` + Ze + `)) == null ? '' : __t) +
'`),
                    X = xr + De.length,
                    De
                }),
                ne += `';
`;
                var Ee = nt.call(n, "variable") && n.variable;
                if (!Ee)
                    ne = `with (obj) {
` + ne + `
}
`;
                else if (la.test(Ee))
                    throw new Ae(f);
                ne = (q ? ne.replace(Jr, "") : ne).replace(rr, "$1").replace(oi, "$1;"),
                ne = "function(" + (Ee || "obj") + `) {
` + (Ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ne + `return __p
}`;
                var ze = Vl(function() {
                    return rt(w, ye + "return " + ne).apply(t, x)
                });
                if (ze.source = ne,
                Sc(ze))
                    throw ze;
                return ze
            }
            function Rw(r) {
                return it(r).toLowerCase()
            }
            function Nw(r) {
                return it(r).toUpperCase()
            }
            function Uw(r, n, a) {
                if (r = it(r),
                r && (a || n === t))
                    return th(r);
                if (!r || !(n = Dr(n)))
                    return r;
                var h = Hr(r)
                  , p = Hr(n)
                  , w = rh(h, p)
                  , x = ih(h, p) + 1;
                return Li(h, w, x).join("")
            }
            function Lw(r, n, a) {
                if (r = it(r),
                r && (a || n === t))
                    return r.slice(0, sh(r) + 1);
                if (!r || !(n = Dr(n)))
                    return r;
                var h = Hr(r)
                  , p = ih(h, Hr(n)) + 1;
                return Li(h, 0, p).join("")
            }
            function $w(r, n, a) {
                if (r = it(r),
                r && (a || n === t))
                    return r.replace(Ot, "");
                if (!r || !(n = Dr(n)))
                    return r;
                var h = Hr(r)
                  , p = rh(h, Hr(n));
                return Li(h, p).join("")
            }
            function Mw(r, n) {
                var a = W
                  , h = se;
                if (Et(n)) {
                    var p = "separator"in n ? n.separator : p;
                    a = "length"in n ? je(n.length) : a,
                    h = "omission"in n ? Dr(n.omission) : h
                }
                r = it(r);
                var w = r.length;
                if (En(r)) {
                    var x = Hr(r);
                    w = x.length
                }
                if (a >= w)
                    return r;
                var N = a - Dn(h);
                if (N < 1)
                    return h;
                var q = x ? Li(x, 0, N).join("") : r.slice(0, N);
                if (p === t)
                    return q + h;
                if (x && (N += q.length - N),
                Ic(p)) {
                    if (r.slice(N).search(p)) {
                        var X, Z = q;
                        for (p.global || (p = za(p.source, it(Ar.exec(p)) + "g")),
                        p.lastIndex = 0; X = p.exec(Z); )
                            var ne = X.index;
                        q = q.slice(0, ne === t ? N : ne)
                    }
                } else if (r.indexOf(Dr(p), N) != N) {
                    var he = q.lastIndexOf(p);
                    he > -1 && (q = q.slice(0, he))
                }
                return q + h
            }
            function jw(r) {
                return r = it(r),
                r && Dt.test(r) ? r.replace(xi, dg) : r
            }
            var qw = An(function(r, n, a) {
                return r + (a ? " " : "") + n.toUpperCase()
            })
              , Pc = Gh("toUpperCase");
            function kl(r, n, a) {
                return r = it(r),
                n = a ? t : n,
                n === t ? cg(r) ? yg(r) : Zp(r) : r.match(n) || []
            }
            var Vl = Ke(function(r, n) {
                try {
                    return Kt(r, t, n)
                } catch (a) {
                    return Sc(a) ? a : new Ae(a)
                }
            })
              , Fw = di(function(r, n) {
                return Rr(n, function(a) {
                    a = ti(a),
                    li(r, a, Ec(r[a], r))
                }),
                r
            });
            function zw(r) {
                var n = r == null ? 0 : r.length
                  , a = we();
                return r = n ? mt(r, function(h) {
                    if (typeof h[1] != "function")
                        throw new Nr(d);
                    return [a(h[0]), h[1]]
                }) : [],
                Ke(function(h) {
                    for (var p = -1; ++p < n; ) {
                        var w = r[p];
                        if (Kt(w[0], this, h))
                            return Kt(w[1], this, h)
                    }
                })
            }
            function Bw(r) {
                return d0(Lr(r, D))
            }
            function Cc(r) {
                return function() {
                    return r
                }
            }
            function Hw(r, n) {
                return r == null || r !== r ? n : r
            }
            var Kw = Yh()
              , kw = Yh(!0);
            function vr(r) {
                return r
            }
            function Ac(r) {
                return Ih(typeof r == "function" ? r : Lr(r, D))
            }
            function Vw(r) {
                return Oh(Lr(r, D))
            }
            function Gw(r, n) {
                return Ph(r, Lr(n, D))
            }
            var Ww = Ke(function(r, n) {
                return function(a) {
                    return ns(a, r, n)
                }
            })
              , Yw = Ke(function(r, n) {
                return function(a) {
                    return ns(r, a, n)
                }
            });
            function Tc(r, n, a) {
                var h = kt(n)
                  , p = mo(n, h);
                a == null && !(Et(n) && (p.length || !h.length)) && (a = n,
                n = r,
                r = this,
                p = mo(n, kt(n)));
                var w = !(Et(a) && "chain"in a) || !!a.chain
                  , x = gi(r);
                return Rr(p, function(N) {
                    var q = n[N];
                    r[N] = q,
                    x && (r.prototype[N] = function() {
                        var X = this.__chain__;
                        if (w || X) {
                            var Z = r(this.__wrapped__)
                              , ne = Z.__actions__ = pr(this.__actions__);
                            return ne.push({
                                func: q,
                                args: arguments,
                                thisArg: r
                            }),
                            Z.__chain__ = X,
                            Z
                        }
                        return q.apply(r, Ci([this.value()], arguments))
                    }
                    )
                }),
                r
            }
            function Jw() {
                return Xe._ === this && (Xe._ = Eg),
                this
            }
            function Rc() {}
            function Qw(r) {
                return r = je(r),
                Ke(function(n) {
                    return Ch(n, r)
                })
            }
            var Xw = uc(mt)
              , Zw = uc(Ju)
              , e_ = uc(Ua);
            function Gl(r) {
                return yc(r) ? La(ti(r)) : A0(r)
            }
            function t_(r) {
                return function(n) {
                    return r == null ? t : Xi(r, n)
                }
            }
            var r_ = Qh()
              , i_ = Qh(!0);
            function Nc() {
                return []
            }
            function Uc() {
                return !1
            }
            function n_() {
                return {}
            }
            function s_() {
                return ""
            }
            function o_() {
                return !0
            }
            function a_(r, n) {
                if (r = je(r),
                r < 1 || r > k)
                    return [];
                var a = re
                  , h = Qt(r, re);
                n = we(n),
                r -= re;
                for (var p = ja(h, n); ++a < r; )
                    n(a);
                return p
            }
            function c_(r) {
                return Re(r) ? mt(r, ti) : Sr(r) ? [r] : pr(dl(it(r)))
            }
            function u_(r) {
                var n = ++_g;
                return it(r) + n
            }
            var h_ = So(function(r, n) {
                return r + n
            }, 0)
              , l_ = hc("ceil")
              , f_ = So(function(r, n) {
                return r / n
            }, 1)
              , d_ = hc("floor");
            function p_(r) {
                return r && r.length ? vo(r, vr, Ya) : t
            }
            function g_(r, n) {
                return r && r.length ? vo(r, we(n, 2), Ya) : t
            }
            function y_(r) {
                return Zu(r, vr)
            }
            function v_(r, n) {
                return Zu(r, we(n, 2))
            }
            function m_(r) {
                return r && r.length ? vo(r, vr, Za) : t
            }
            function w_(r, n) {
                return r && r.length ? vo(r, we(n, 2), Za) : t
            }
            var __ = So(function(r, n) {
                return r * n
            }, 1)
              , b_ = hc("round")
              , E_ = So(function(r, n) {
                return r - n
            }, 0);
            function D_(r) {
                return r && r.length ? Ma(r, vr) : 0
            }
            function S_(r, n) {
                return r && r.length ? Ma(r, we(n, 2)) : 0
            }
            return v.after = Vv,
            v.ary = Sl,
            v.assign = Nm,
            v.assignIn = jl,
            v.assignInWith = Mo,
            v.assignWith = Um,
            v.at = Lm,
            v.before = Il,
            v.bind = Ec,
            v.bindAll = Fw,
            v.bindKey = xl,
            v.castArray = nm,
            v.chain = bl,
            v.chunk = dy,
            v.compact = py,
            v.concat = gy,
            v.cond = zw,
            v.conforms = Bw,
            v.constant = Cc,
            v.countBy = Dv,
            v.create = $m,
            v.curry = Ol,
            v.curryRight = Pl,
            v.debounce = Cl,
            v.defaults = Mm,
            v.defaultsDeep = jm,
            v.defer = Gv,
            v.delay = Wv,
            v.difference = yy,
            v.differenceBy = vy,
            v.differenceWith = my,
            v.drop = wy,
            v.dropRight = _y,
            v.dropRightWhile = by,
            v.dropWhile = Ey,
            v.fill = Dy,
            v.filter = Iv,
            v.flatMap = Pv,
            v.flatMapDeep = Cv,
            v.flatMapDepth = Av,
            v.flatten = vl,
            v.flattenDeep = Sy,
            v.flattenDepth = Iy,
            v.flip = Yv,
            v.flow = Kw,
            v.flowRight = kw,
            v.fromPairs = xy,
            v.functions = km,
            v.functionsIn = Vm,
            v.groupBy = Tv,
            v.initial = Py,
            v.intersection = Cy,
            v.intersectionBy = Ay,
            v.intersectionWith = Ty,
            v.invert = Wm,
            v.invertBy = Ym,
            v.invokeMap = Nv,
            v.iteratee = Ac,
            v.keyBy = Uv,
            v.keys = kt,
            v.keysIn = yr,
            v.map = To,
            v.mapKeys = Qm,
            v.mapValues = Xm,
            v.matches = Vw,
            v.matchesProperty = Gw,
            v.memoize = No,
            v.merge = Zm,
            v.mergeWith = ql,
            v.method = Ww,
            v.methodOf = Yw,
            v.mixin = Tc,
            v.negate = Uo,
            v.nthArg = Qw,
            v.omit = ew,
            v.omitBy = tw,
            v.once = Jv,
            v.orderBy = Lv,
            v.over = Xw,
            v.overArgs = Qv,
            v.overEvery = Zw,
            v.overSome = e_,
            v.partial = Dc,
            v.partialRight = Al,
            v.partition = $v,
            v.pick = rw,
            v.pickBy = Fl,
            v.property = Gl,
            v.propertyOf = t_,
            v.pull = Ly,
            v.pullAll = wl,
            v.pullAllBy = $y,
            v.pullAllWith = My,
            v.pullAt = jy,
            v.range = r_,
            v.rangeRight = i_,
            v.rearg = Xv,
            v.reject = qv,
            v.remove = qy,
            v.rest = Zv,
            v.reverse = _c,
            v.sampleSize = zv,
            v.set = nw,
            v.setWith = sw,
            v.shuffle = Bv,
            v.slice = Fy,
            v.sortBy = kv,
            v.sortedUniq = Gy,
            v.sortedUniqBy = Wy,
            v.split = Pw,
            v.spread = em,
            v.tail = Yy,
            v.take = Jy,
            v.takeRight = Qy,
            v.takeRightWhile = Xy,
            v.takeWhile = Zy,
            v.tap = pv,
            v.throttle = tm,
            v.thru = Ao,
            v.toArray = Ll,
            v.toPairs = zl,
            v.toPairsIn = Bl,
            v.toPath = c_,
            v.toPlainObject = Ml,
            v.transform = ow,
            v.unary = rm,
            v.union = ev,
            v.unionBy = tv,
            v.unionWith = rv,
            v.uniq = iv,
            v.uniqBy = nv,
            v.uniqWith = sv,
            v.unset = aw,
            v.unzip = bc,
            v.unzipWith = _l,
            v.update = cw,
            v.updateWith = uw,
            v.values = Nn,
            v.valuesIn = hw,
            v.without = ov,
            v.words = kl,
            v.wrap = im,
            v.xor = av,
            v.xorBy = cv,
            v.xorWith = uv,
            v.zip = hv,
            v.zipObject = lv,
            v.zipObjectDeep = fv,
            v.zipWith = dv,
            v.entries = zl,
            v.entriesIn = Bl,
            v.extend = jl,
            v.extendWith = Mo,
            Tc(v, v),
            v.add = h_,
            v.attempt = Vl,
            v.camelCase = pw,
            v.capitalize = Hl,
            v.ceil = l_,
            v.clamp = lw,
            v.clone = sm,
            v.cloneDeep = am,
            v.cloneDeepWith = cm,
            v.cloneWith = om,
            v.conformsTo = um,
            v.deburr = Kl,
            v.defaultTo = Hw,
            v.divide = f_,
            v.endsWith = gw,
            v.eq = kr,
            v.escape = yw,
            v.escapeRegExp = vw,
            v.every = Sv,
            v.find = xv,
            v.findIndex = gl,
            v.findKey = qm,
            v.findLast = Ov,
            v.findLastIndex = yl,
            v.findLastKey = Fm,
            v.floor = d_,
            v.forEach = El,
            v.forEachRight = Dl,
            v.forIn = zm,
            v.forInRight = Bm,
            v.forOwn = Hm,
            v.forOwnRight = Km,
            v.get = xc,
            v.gt = hm,
            v.gte = lm,
            v.has = Gm,
            v.hasIn = Oc,
            v.head = ml,
            v.identity = vr,
            v.includes = Rv,
            v.indexOf = Oy,
            v.inRange = fw,
            v.invoke = Jm,
            v.isArguments = tn,
            v.isArray = Re,
            v.isArrayBuffer = fm,
            v.isArrayLike = gr,
            v.isArrayLikeObject = Rt,
            v.isBoolean = dm,
            v.isBuffer = $i,
            v.isDate = pm,
            v.isElement = gm,
            v.isEmpty = ym,
            v.isEqual = vm,
            v.isEqualWith = mm,
            v.isError = Sc,
            v.isFinite = wm,
            v.isFunction = gi,
            v.isInteger = Tl,
            v.isLength = Lo,
            v.isMap = Rl,
            v.isMatch = _m,
            v.isMatchWith = bm,
            v.isNaN = Em,
            v.isNative = Dm,
            v.isNil = Im,
            v.isNull = Sm,
            v.isNumber = Nl,
            v.isObject = Et,
            v.isObjectLike = Ct,
            v.isPlainObject = hs,
            v.isRegExp = Ic,
            v.isSafeInteger = xm,
            v.isSet = Ul,
            v.isString = $o,
            v.isSymbol = Sr,
            v.isTypedArray = Rn,
            v.isUndefined = Om,
            v.isWeakMap = Pm,
            v.isWeakSet = Cm,
            v.join = Ry,
            v.kebabCase = mw,
            v.last = Mr,
            v.lastIndexOf = Ny,
            v.lowerCase = ww,
            v.lowerFirst = _w,
            v.lt = Am,
            v.lte = Tm,
            v.max = p_,
            v.maxBy = g_,
            v.mean = y_,
            v.meanBy = v_,
            v.min = m_,
            v.minBy = w_,
            v.stubArray = Nc,
            v.stubFalse = Uc,
            v.stubObject = n_,
            v.stubString = s_,
            v.stubTrue = o_,
            v.multiply = __,
            v.nth = Uy,
            v.noConflict = Jw,
            v.noop = Rc,
            v.now = Ro,
            v.pad = bw,
            v.padEnd = Ew,
            v.padStart = Dw,
            v.parseInt = Sw,
            v.random = dw,
            v.reduce = Mv,
            v.reduceRight = jv,
            v.repeat = Iw,
            v.replace = xw,
            v.result = iw,
            v.round = b_,
            v.runInContext = M,
            v.sample = Fv,
            v.size = Hv,
            v.snakeCase = Ow,
            v.some = Kv,
            v.sortedIndex = zy,
            v.sortedIndexBy = By,
            v.sortedIndexOf = Hy,
            v.sortedLastIndex = Ky,
            v.sortedLastIndexBy = ky,
            v.sortedLastIndexOf = Vy,
            v.startCase = Cw,
            v.startsWith = Aw,
            v.subtract = E_,
            v.sum = D_,
            v.sumBy = S_,
            v.template = Tw,
            v.times = a_,
            v.toFinite = yi,
            v.toInteger = je,
            v.toLength = $l,
            v.toLower = Rw,
            v.toNumber = jr,
            v.toSafeInteger = Rm,
            v.toString = it,
            v.toUpper = Nw,
            v.trim = Uw,
            v.trimEnd = Lw,
            v.trimStart = $w,
            v.truncate = Mw,
            v.unescape = jw,
            v.uniqueId = u_,
            v.upperCase = qw,
            v.upperFirst = Pc,
            v.each = El,
            v.eachRight = Dl,
            v.first = ml,
            Tc(v, function() {
                var r = {};
                return Zr(v, function(n, a) {
                    nt.call(v.prototype, a) || (r[a] = n)
                }),
                r
            }(), {
                chain: !1
            }),
            v.VERSION = s,
            Rr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
                v[r].placeholder = v
            }),
            Rr(["drop", "take"], function(r, n) {
                Ye.prototype[r] = function(a) {
                    a = a === t ? 1 : Ht(je(a), 0);
                    var h = this.__filtered__ && !n ? new Ye(this) : this.clone();
                    return h.__filtered__ ? h.__takeCount__ = Qt(a, h.__takeCount__) : h.__views__.push({
                        size: Qt(a, re),
                        type: r + (h.__dir__ < 0 ? "Right" : "")
                    }),
                    h
                }
                ,
                Ye.prototype[r + "Right"] = function(a) {
                    return this.reverse()[r](a).reverse()
                }
            }),
            Rr(["filter", "map", "takeWhile"], function(r, n) {
                var a = n + 1
                  , h = a == b || a == ee;
                Ye.prototype[r] = function(p) {
                    var w = this.clone();
                    return w.__iteratees__.push({
                        iteratee: we(p, 3),
                        type: a
                    }),
                    w.__filtered__ = w.__filtered__ || h,
                    w
                }
            }),
            Rr(["head", "last"], function(r, n) {
                var a = "take" + (n ? "Right" : "");
                Ye.prototype[r] = function() {
                    return this[a](1).value()[0]
                }
            }),
            Rr(["initial", "tail"], function(r, n) {
                var a = "drop" + (n ? "" : "Right");
                Ye.prototype[r] = function() {
                    return this.__filtered__ ? new Ye(this) : this[a](1)
                }
            }),
            Ye.prototype.compact = function() {
                return this.filter(vr)
            }
            ,
            Ye.prototype.find = function(r) {
                return this.filter(r).head()
            }
            ,
            Ye.prototype.findLast = function(r) {
                return this.reverse().find(r)
            }
            ,
            Ye.prototype.invokeMap = Ke(function(r, n) {
                return typeof r == "function" ? new Ye(this) : this.map(function(a) {
                    return ns(a, r, n)
                })
            }),
            Ye.prototype.reject = function(r) {
                return this.filter(Uo(we(r)))
            }
            ,
            Ye.prototype.slice = function(r, n) {
                r = je(r);
                var a = this;
                return a.__filtered__ && (r > 0 || n < 0) ? new Ye(a) : (r < 0 ? a = a.takeRight(-r) : r && (a = a.drop(r)),
                n !== t && (n = je(n),
                a = n < 0 ? a.dropRight(-n) : a.take(n - r)),
                a)
            }
            ,
            Ye.prototype.takeRightWhile = function(r) {
                return this.reverse().takeWhile(r).reverse()
            }
            ,
            Ye.prototype.toArray = function() {
                return this.take(re)
            }
            ,
            Zr(Ye.prototype, function(r, n) {
                var a = /^(?:filter|find|map|reject)|While$/.test(n)
                  , h = /^(?:head|last)$/.test(n)
                  , p = v[h ? "take" + (n == "last" ? "Right" : "") : n]
                  , w = h || /^find/.test(n);
                p && (v.prototype[n] = function() {
                    var x = this.__wrapped__
                      , N = h ? [1] : arguments
                      , q = x instanceof Ye
                      , X = N[0]
                      , Z = q || Re(x)
                      , ne = function(Ge) {
                        var Ze = p.apply(v, Ci([Ge], N));
                        return h && he ? Ze[0] : Ze
                    };
                    Z && a && typeof X == "function" && X.length != 1 && (q = Z = !1);
                    var he = this.__chain__
                      , ye = !!this.__actions__.length
                      , Ee = w && !he
                      , ze = q && !ye;
                    if (!w && Z) {
                        x = ze ? x : new Ye(this);
                        var De = r.apply(x, N);
                        return De.__actions__.push({
                            func: Ao,
                            args: [ne],
                            thisArg: t
                        }),
                        new Ur(De,he)
                    }
                    return Ee && ze ? r.apply(this, N) : (De = this.thru(ne),
                    Ee ? h ? De.value()[0] : De.value() : De)
                }
                )
            }),
            Rr(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
                var n = to[r]
                  , a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru"
                  , h = /^(?:pop|shift)$/.test(r);
                v.prototype[r] = function() {
                    var p = arguments;
                    if (h && !this.__chain__) {
                        var w = this.value();
                        return n.apply(Re(w) ? w : [], p)
                    }
                    return this[a](function(x) {
                        return n.apply(Re(x) ? x : [], p)
                    })
                }
            }),
            Zr(Ye.prototype, function(r, n) {
                var a = v[n];
                if (a) {
                    var h = a.name + "";
                    nt.call(On, h) || (On[h] = []),
                    On[h].push({
                        name: n,
                        func: a
                    })
                }
            }),
            On[Do(t, ie).name] = [{
                name: "wrapper",
                func: t
            }],
            Ye.prototype.clone = jg,
            Ye.prototype.reverse = qg,
            Ye.prototype.value = Fg,
            v.prototype.at = gv,
            v.prototype.chain = yv,
            v.prototype.commit = vv,
            v.prototype.next = mv,
            v.prototype.plant = _v,
            v.prototype.reverse = bv,
            v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = Ev,
            v.prototype.first = v.prototype.head,
            Qn && (v.prototype[Qn] = wv),
            v
        }
          , Sn = vg();
        Tt ? ((Tt.exports = Sn)._ = Sn,
        ct._ = Sn) : Xe._ = Sn
    }
    ).call(vs)
}
)(Du, Du.exports);
var mI = Object.defineProperty
  , wI = Object.defineProperties
  , _I = Object.getOwnPropertyDescriptors
  , Id = Object.getOwnPropertySymbols
  , bI = Object.prototype.hasOwnProperty
  , EI = Object.prototype.propertyIsEnumerable
  , xd = (i,e,t)=>e in i ? mI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Bo = (i,e)=>{
    for (var t in e || (e = {}))
        bI.call(e, t) && xd(i, t, e[t]);
    if (Id)
        for (var t of Id(e))
            EI.call(e, t) && xd(i, t, e[t]);
    return i
}
  , DI = (i,e)=>wI(i, _I(e));
function qi(i, e, t) {
    var s;
    const o = yE(i);
    return ((s = e.rpcMap) == null ? void 0 : s[o.reference]) || `${vI}?chainId=${o.namespace}:${o.reference}&projectId=${t}`
}
function dn(i) {
    return i.includes(":") ? i.split(":")[1] : i
}
function Vp(i) {
    return i.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)
}
function SI(i, e) {
    const t = Object.keys(e.namespaces).filter(o=>o.includes(i));
    if (!t.length)
        return [];
    const s = [];
    return t.forEach(o=>{
        const c = e.namespaces[o].accounts;
        s.push(...c)
    }
    ),
    s
}
function Od(i={}, e={}) {
    const t = Pd(i)
      , s = Pd(e);
    return Du.exports.merge(t, s)
}
function Pd(i) {
    var e, t, s, o;
    const c = {};
    if (!Is(i))
        return c;
    for (const [d,f] of Object.entries(i)) {
        const y = qu(d) ? [d] : f.chains
          , g = f.methods || []
          , m = f.events || []
          , D = f.rpcMap || {}
          , I = ms(d);
        c[I] = DI(Bo(Bo({}, c[I]), f), {
            chains: Fc(y, (e = c[I]) == null ? void 0 : e.chains),
            methods: Fc(g, (t = c[I]) == null ? void 0 : t.methods),
            events: Fc(m, (s = c[I]) == null ? void 0 : s.events),
            rpcMap: Bo(Bo({}, D), (o = c[I]) == null ? void 0 : o.rpcMap)
        })
    }
    return c
}
function II(i) {
    return i.includes(":") ? i.split(":")[2] : i
}
function xI(i) {
    const e = {};
    for (const [t,s] of Object.entries(i)) {
        const o = s.methods || []
          , c = s.events || []
          , d = s.accounts || []
          , f = qu(t) ? [t] : s.chains ? s.chains : Vp(s.accounts);
        e[t] = {
            chains: f,
            methods: o,
            events: c,
            accounts: d
        }
    }
    return e
}
function eu(i) {
    return typeof i == "number" ? i : i.includes("0x") ? parseInt(i, 16) : (i = i.includes(":") ? i.split(":")[1] : i,
    isNaN(Number(i)) ? i : Number(i))
}
const Gp = {}
  , _t = i=>Gp[i]
  , tu = (i,e)=>{
    Gp[i] = e
}
;
class OI {
    constructor(e) {
        this.name = "polkadot",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || qi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Si(new zi(s,_t("disableProviderPing")))
    }
}
class PI {
    constructor(e) {
        this.name = "eip155",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    async request(e) {
        switch (e.request.method) {
        case "eth_requestAccounts":
            return this.getAccounts();
        case "eth_accounts":
            return this.getAccounts();
        case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(e);
        case "eth_chainId":
            return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
        this.chainId = parseInt(e),
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId.toString();
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    createHttpProvider(e, t) {
        const s = t || qi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Si(new zi(s,_t("disableProviderPing")))
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            var s;
            const o = parseInt(dn(t));
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    getHttpProvider() {
        const e = this.chainId
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    async handleSwitchChain(e) {
        var t, s;
        let o = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
        o = o.startsWith("0x") ? o : `0x${o}`;
        const c = parseInt(o, 16);
        if (this.isChainApproved(c))
            this.setDefaultChain(`${c}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
            await this.client.request({
                topic: e.topic,
                request: {
                    method: e.request.method,
                    params: [{
                        chainId: o
                    }]
                },
                chainId: (s = this.namespace.chains) == null ? void 0 : s[0]
            }),
            this.setDefaultChain(`${c}`);
        else
            throw new Error(`Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`)
    }
}
class CI {
    constructor(e) {
        this.name = "solana",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || qi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Si(new zi(s,_t("disableProviderPing")))
    }
}
class AI {
    constructor(e) {
        this.name = "cosmos",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || qi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Si(new zi(s,_t("disableProviderPing")))
    }
}
class TI {
    constructor(e) {
        this.name = "cip34",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            const s = this.getCardanoRPCUrl(t)
              , o = dn(t);
            e[o] = this.createHttpProvider(o, s)
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    getCardanoRPCUrl(e) {
        const t = this.namespace.rpcMap;
        if (t)
            return t[e]
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || this.getCardanoRPCUrl(e);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Si(new zi(s,_t("disableProviderPing")))
    }
}
class RI {
    constructor(e) {
        this.name = "elrond",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || qi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Si(new zi(s,_t("disableProviderPing")))
    }
}
class NI {
    constructor(e) {
        this.name = "multiversx",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || qi(e, this.namespace, this.client.core.projectId);
        if (!s)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Si(new zi(s,_t("disableProviderPing")))
    }
}
class UI {
    constructor(e) {
        this.name = "near",
        this.namespace = e.namespace,
        this.events = _t("events"),
        this.client = _t("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            const s = t || qi(`${this.name}:${e}`, this.namespace);
            if (!s)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s)
        }
        this.events.emit(Ii.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t=>{
            var s;
            e[t] = this.createHttpProvider(t, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }
        ),
        e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || qi(e, this.namespace);
        return typeof s > "u" ? void 0 : new Si(new zi(s,_t("disableProviderPing")))
    }
}
var LI = Object.defineProperty
  , $I = Object.defineProperties
  , MI = Object.getOwnPropertyDescriptors
  , Cd = Object.getOwnPropertySymbols
  , jI = Object.prototype.hasOwnProperty
  , qI = Object.prototype.propertyIsEnumerable
  , Ad = (i,e,t)=>e in i ? LI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Ho = (i,e)=>{
    for (var t in e || (e = {}))
        jI.call(e, t) && Ad(i, t, e[t]);
    if (Cd)
        for (var t of Cd(e))
            qI.call(e, t) && Ad(i, t, e[t]);
    return i
}
  , ru = (i,e)=>$I(i, MI(e));
class Wu {
    constructor(e) {
        this.events = new Pu,
        this.rpcProviders = {},
        this.shouldAbortPairingAttempt = !1,
        this.maxPairingAttempts = 10,
        this.disableProviderPing = !1,
        this.providerOpts = e,
        this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Je.pino(Je.getDefaultLoggerOptions({
            level: (e == null ? void 0 : e.logger) || Dd
        })),
        this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1
    }
    static async init(e) {
        const t = new Wu(e);
        return await t.initialize(),
        t
    }
    async request(e, t, s) {
        const [o,c] = this.validateChain(t);
        if (!this.session)
            throw new Error("Please call connect() before request()");
        return await this.getProvider(o).request({
            request: Ho({}, e),
            chainId: `${o}:${c}`,
            topic: this.session.topic,
            expiry: s
        })
    }
    sendAsync(e, t, s, o) {
        const c = new Date().getTime();
        this.request(e, s, o).then(d=>t(null, oa(c, d))).catch(d=>t(d, void 0))
    }
    async enable() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }),
        await this.requestAccounts()
    }
    async disconnect() {
        var e;
        if (!this.session)
            throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (e = this.session) == null ? void 0 : e.topic,
            reason: wt("USER_DISCONNECTED")
        }),
        await this.cleanup()
    }
    async connect(e) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (this.setNamespaces(e),
        await this.cleanupPendingPairings(),
        !e.skipPairing)
            return await this.pair(e.pairingTopic)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(e) {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
            if (this.shouldAbortPairingAttempt)
                throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
                throw new Error("Max auto pairing attempts reached");
            const {uri: s, approval: o} = await this.client.connect({
                pairingTopic: e,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            s && (this.uri = s,
            this.events.emit("display_uri", s)),
            await o().then(c=>{
                this.session = c;
                const d = xI(c.namespaces);
                this.namespaces = Od(this.namespaces, d),
                this.persist("namespaces", this.namespaces)
            }
            ).catch(c=>{
                if (c.message !== Kp)
                    throw c;
                t++
            }
            )
        } while (!this.session);
        return this.onConnect(),
        this.session
    }
    setDefaultChain(e, t) {
        try {
            if (!this.session)
                return;
            const [s,o] = this.validateChain(e);
            this.getProvider(s).setDefaultChain(o, t)
        } catch (s) {
            if (!/Please call connect/.test(s.message))
                throw s
        }
    }
    async cleanupPendingPairings(e={}) {
        this.logger.info("Cleaning up inactive pairings...");
        const t = this.client.pairing.getAll();
        if (ni(t)) {
            for (const s of t)
                e.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"),
        this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
        this.client.session.length) {
            const e = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[e]),
            this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"),
        await this.createClient(),
        await this.checkStorage(),
        this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await hI.init({
            logger: this.providerOpts.logger || Dd,
            relayUrl: this.providerOpts.relayUrl || pI,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }),
        this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        const e = [...new Set(Object.keys(this.session.namespaces).map(t=>ms(t)))];
        tu("client", this.client),
        tu("events", this.events),
        tu("disableProviderPing", this.disableProviderPing),
        e.forEach(t=>{
            if (!this.session)
                return;
            const s = SI(t, this.session)
              , o = Vp(s)
              , c = Od(this.namespaces, this.optionalNamespaces)
              , d = ru(Ho({}, c[t]), {
                accounts: s,
                chains: o
            });
            switch (t) {
            case "eip155":
                this.rpcProviders[t] = new PI({
                    namespace: d
                });
                break;
            case "solana":
                this.rpcProviders[t] = new CI({
                    namespace: d
                });
                break;
            case "cosmos":
                this.rpcProviders[t] = new AI({
                    namespace: d
                });
                break;
            case "polkadot":
                this.rpcProviders[t] = new OI({
                    namespace: d
                });
                break;
            case "cip34":
                this.rpcProviders[t] = new TI({
                    namespace: d
                });
                break;
            case "elrond":
                this.rpcProviders[t] = new RI({
                    namespace: d
                });
                break;
            case "multiversx":
                this.rpcProviders[t] = new NI({
                    namespace: d
                });
                break;
            case "near":
                this.rpcProviders[t] = new UI({
                    namespace: d
                });
                break
            }
        }
        )
    }
    registerEventListeners() {
        if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", e=>{
            this.events.emit("session_ping", e)
        }
        ),
        this.client.on("session_event", e=>{
            const {params: t} = e
              , {event: s} = t;
            if (s.name === "accountsChanged") {
                const o = s.data;
                o && ni(o) && this.events.emit("accountsChanged", o.map(II))
            } else if (s.name === "chainChanged") {
                const o = t.chainId
                  , c = t.event.data
                  , d = ms(o)
                  , f = eu(o) !== eu(c) ? `${d}:${eu(c)}` : o;
                this.onChainChanged(f)
            } else
                this.events.emit(s.name, s.data);
            this.events.emit("session_event", e)
        }
        ),
        this.client.on("session_update", ({topic: e, params: t})=>{
            var s;
            const {namespaces: o} = t
              , c = (s = this.client) == null ? void 0 : s.session.get(e);
            this.session = ru(Ho({}, c), {
                namespaces: o
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: e,
                params: t
            })
        }
        ),
        this.client.on("session_delete", async e=>{
            await this.cleanup(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", ru(Ho({}, wt("USER_DISCONNECTED")), {
                data: e.topic
            }))
        }
        ),
        this.on(Ii.DEFAULT_CHAIN_CHANGED, e=>{
            this.onChainChanged(e, !0)
        }
        )
    }
    getProvider(e) {
        if (!this.rpcProviders[e])
            throw new Error(`Provider not found: ${e}`);
        return this.rpcProviders[e]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(e=>{
            var t;
            this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e])
        }
        )
    }
    setNamespaces(e) {
        const {namespaces: t, optionalNamespaces: s, sessionProperties: o} = e;
        t && Object.keys(t).length && (this.namespaces = t),
        s && Object.keys(s).length && (this.optionalNamespaces = s),
        this.sessionProperties = o,
        this.persist("namespaces", t),
        this.persist("optionalNamespaces", s)
    }
    validateChain(e) {
        const [t,s] = (e == null ? void 0 : e.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, s];
        if (t && !Object.keys(this.namespaces || {}).map(d=>ms(d)).includes(t))
            throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && s)
            return [t, s];
        const o = ms(Object.keys(this.namespaces)[0])
          , c = this.rpcProviders[o].getDefaultChain();
        return [o, c]
    }
    async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts()
    }
    onChainChanged(e, t=!1) {
        if (!this.namespaces)
            return;
        const [s,o] = this.validateChain(e);
        o && (t || this.getProvider(s).setDefaultChain(o),
        this.namespaces[s] ? this.namespaces[s].defaultChain = o : this.namespaces[`${s}:${o}`] ? this.namespaces[`${s}:${o}`].defaultChain = o : this.namespaces[`${s}:${o}`] = {
            defaultChain: o
        },
        this.persist("namespaces", this.namespaces),
        this.events.emit("chainChanged", o))
    }
    onConnect() {
        this.createProviders(),
        this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0,
        this.namespaces = void 0,
        this.optionalNamespaces = void 0,
        this.sessionProperties = void 0,
        this.persist("namespaces", void 0),
        this.persist("optionalNamespaces", void 0),
        this.persist("sessionProperties", void 0),
        await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(e, t) {
        this.client.core.storage.setItem(`${Sd}/${e}`, t)
    }
    async getFromStore(e) {
        return await this.client.core.storage.getItem(`${Sd}/${e}`)
    }
}
const FI = Wu
  , zI = "wc"
  , BI = "ethereum_provider"
  , HI = `${zI}@2:${BI}:`
  , KI = "https://rpc.walletconnect.com/v1/"
  , Su = ["eth_sendTransaction", "personal_sign"]
  , kI = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
  , Iu = ["chainChanged", "accountsChanged"]
  , VI = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var GI = Object.defineProperty
  , WI = Object.defineProperties
  , YI = Object.getOwnPropertyDescriptors
  , Td = Object.getOwnPropertySymbols
  , JI = Object.prototype.hasOwnProperty
  , QI = Object.prototype.propertyIsEnumerable
  , Rd = (i,e,t)=>e in i ? GI(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , _s = (i,e)=>{
    for (var t in e || (e = {}))
        JI.call(e, t) && Rd(i, t, e[t]);
    if (Td)
        for (var t of Td(e))
            QI.call(e, t) && Rd(i, t, e[t]);
    return i
}
  , Nd = (i,e)=>WI(i, YI(e));
function Zo(i) {
    return Number(i[0].split(":")[1])
}
function iu(i) {
    return `0x${i.toString(16)}`
}
function XI(i) {
    const {chains: e, optionalChains: t, methods: s, optionalMethods: o, events: c, optionalEvents: d, rpcMap: f} = i;
    if (!ni(e))
        throw new Error("Invalid chains");
    const y = {
        chains: e,
        methods: s || Su,
        events: c || Iu,
        rpcMap: _s({}, e.length ? {
            [Zo(e)]: f[Zo(e)]
        } : {})
    }
      , g = c == null ? void 0 : c.filter(T=>!Iu.includes(T))
      , m = s == null ? void 0 : s.filter(T=>!Su.includes(T));
    if (!t && !d && !o && !(g != null && g.length) && !(m != null && m.length))
        return {
            required: e.length ? y : void 0
        };
    const D = (g == null ? void 0 : g.length) && (m == null ? void 0 : m.length) || !t
      , I = {
        chains: [...new Set(D ? y.chains.concat(t || []) : t)],
        methods: [...new Set(y.methods.concat(o != null && o.length ? o : kI))],
        events: [...new Set(y.events.concat(d != null && d.length ? d : VI))],
        rpcMap: f
    };
    return {
        required: e.length ? y : void 0,
        optional: t.length ? I : void 0
    }
}
class Yu {
    constructor() {
        this.events = new Fr.EventEmitter,
        this.namespace = "eip155",
        this.accounts = [],
        this.chainId = 1,
        this.STORAGE_KEY = HI,
        this.on = (e,t)=>(this.events.on(e, t),
        this),
        this.once = (e,t)=>(this.events.once(e, t),
        this),
        this.removeListener = (e,t)=>(this.events.removeListener(e, t),
        this),
        this.off = (e,t)=>(this.events.off(e, t),
        this),
        this.parseAccount = e=>this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e,
        this.signer = {},
        this.rpc = {}
    }
    static async init(e) {
        const t = new Yu;
        return await t.initialize(e),
        t
    }
    async request(e, t) {
        return await this.signer.request(e, this.formatChainId(this.chainId), t)
    }
    sendAsync(e, t, s) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s)
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(),
        await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(e) {
        if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        const {required: t, optional: s} = XI(this.rpc);
        try {
            const o = await new Promise(async(d,f)=>{
                var y;
                this.rpc.showQrModal && ((y = this.modal) == null || y.subscribeModal(g=>{
                    !g.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                    f(new Error("Connection request reset. Please try again.")))
                }
                )),
                await this.signer.connect(Nd(_s({
                    namespaces: _s({}, t && {
                        [this.namespace]: t
                    })
                }, s && {
                    optionalNamespaces: {
                        [this.namespace]: s
                    }
                }), {
                    pairingTopic: e == null ? void 0 : e.pairingTopic
                })).then(g=>{
                    d(g)
                }
                ).catch(g=>{
                    f(new Error(g.message))
                }
                )
            }
            );
            if (!o)
                return;
            const c = vE(o.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c),
            this.setAccounts(c),
            this.events.emit("connect", {
                chainId: iu(this.chainId)
            })
        } catch (o) {
            throw this.signer.logger.error(o),
            o
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(),
        this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", e=>{
            const {params: t} = e
              , {event: s} = t;
            s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data),
            this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data),
            this.events.emit("session_event", e)
        }
        ),
        this.signer.on("chainChanged", e=>{
            const t = parseInt(e);
            this.chainId = t,
            this.events.emit("chainChanged", iu(this.chainId)),
            this.persist()
        }
        ),
        this.signer.on("session_update", e=>{
            this.events.emit("session_update", e)
        }
        ),
        this.signer.on("session_delete", e=>{
            this.reset(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", Nd(_s({}, wt("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED"
            }))
        }
        ),
        this.signer.on("display_uri", e=>{
            var t, s;
            this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(),
            (s = this.modal) == null || s.openModal({
                uri: e
            })),
            this.events.emit("display_uri", e)
        }
        )
    }
    switchEthereumChain(e) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: e.toString(16)
            }]
        })
    }
    isCompatibleChainId(e) {
        return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(e) {
        return `${this.namespace}:${e}`
    }
    parseChainId(e) {
        return Number(e.split(":")[1])
    }
    setChainIds(e) {
        const t = e.filter(s=>this.isCompatibleChainId(s)).map(s=>this.parseChainId(s));
        t.length && (this.chainId = t[0],
        this.events.emit("chainChanged", iu(this.chainId)),
        this.persist())
    }
    setChainId(e) {
        if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            this.chainId = t,
            this.switchEthereumChain(t)
        }
    }
    parseAccountId(e) {
        const [t,s,o] = e.split(":");
        return {
            chainId: `${t}:${s}`,
            address: o
        }
    }
    setAccounts(e) {
        this.accounts = e.filter(t=>this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t=>this.parseAccountId(t).address),
        this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(e) {
        var t, s;
        const o = (t = e == null ? void 0 : e.chains) != null ? t : []
          , c = (s = e == null ? void 0 : e.optionalChains) != null ? s : []
          , d = o.concat(c);
        if (!d.length)
            throw new Error("No chains specified in either `chains` or `optionalChains`");
        const f = o.length ? (e == null ? void 0 : e.methods) || Su : []
          , y = o.length ? (e == null ? void 0 : e.events) || Iu : []
          , g = (e == null ? void 0 : e.optionalMethods) || []
          , m = (e == null ? void 0 : e.optionalEvents) || []
          , D = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(d, e.projectId)
          , I = (e == null ? void 0 : e.qrModalOptions) || void 0;
        return {
            chains: o == null ? void 0 : o.map(T=>this.formatChainId(T)),
            optionalChains: c.map(T=>this.formatChainId(T)),
            methods: f,
            events: y,
            optionalMethods: g,
            optionalEvents: m,
            rpcMap: D,
            showQrModal: !!(e != null && e.showQrModal),
            qrModalOptions: I,
            projectId: e.projectId,
            metadata: e.metadata
        }
    }
    buildRpcMap(e, t) {
        const s = {};
        return e.forEach(o=>{
            s[o] = this.getRpcUrl(o, t)
        }
        ),
        s
    }
    async initialize(e) {
        if (this.rpc = this.getRpcConfig(e),
        this.chainId = this.rpc.chains.length ? Zo(this.rpc.chains) : Zo(this.rpc.optionalChains),
        this.signer = await FI.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: e.disableProviderPing,
            relayUrl: e.relayUrl,
            storageOptions: e.storageOptions
        }),
        this.registerEventListeners(),
        await this.loadPersistedSession(),
        this.rpc.showQrModal) {
            let t;
            try {
                const {WalletConnectModal: s} = await I_(()=>import("./index-Y24zFsm8.js").then(o=>o.i), __vite__mapDeps([0, 1, 2]));
                t = s
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (t)
                try {
                    this.modal = new t(_s({
                        projectId: this.rpc.projectId
                    }, this.rpc.qrModalOptions))
                } catch (s) {
                    throw this.signer.logger.error(s),
                    new Error("Could not generate WalletConnectModal Instance")
                }
        }
    }
    loadConnectOpts(e) {
        if (!e)
            return;
        const {chains: t, optionalChains: s, rpcMap: o} = e;
        t && ni(t) && (this.rpc.chains = t.map(c=>this.formatChainId(c)),
        t.forEach(c=>{
            this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c)
        }
        )),
        s && ni(s) && (this.rpc.optionalChains = [],
        this.rpc.optionalChains = s == null ? void 0 : s.map(c=>this.formatChainId(c)),
        s.forEach(c=>{
            this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c)
        }
        ))
    }
    getRpcUrl(e, t) {
        var s;
        return ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) || `${KI}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session)
            return;
        const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
          , t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
        this.setChainIds(e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts),
        this.setAccounts(t == null ? void 0 : t.accounts)
    }
    reset() {
        this.chainId = 1,
        this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(e) {
        return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map(t=>this.parseAccount(t))
    }
}
const v5 = Yu;
export {v5 as EthereumProvider, VI as OPTIONAL_EVENTS, kI as OPTIONAL_METHODS, Iu as REQUIRED_EVENTS, Su as REQUIRED_METHODS, Yu as default};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/index-Y24zFsm8.js", "assets/index-zOfEP0jm.js", "assets/index-CNUnR93S.css"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
