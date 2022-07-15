/**
 *  webpack中object-defineproperty-ie8的使用，处理ie8兼容性
 */
var origDefineProperty = Object.defineProperty;
var arePropertyDescriptorsSupported = function () {
    var obj = {};
    try {
        origDefineProperty(obj, "x", { enumerable: false, value: obj });
        for (var _ in obj) {
            return false;
        }
        return obj.x === obj;
        // ![](
        //     "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5c7f3ae78eb4f75a16529ee8ee34768~tplv-k3u1fbpfcp-watermark.image"
        // );
    } catch (e) {
        /* this is IE 8. */
        return false;
    }
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

if (!supportsDescriptors) {
    Object.defineProperty = function (a, b, c) {
        //IE8支持修改元素节点的属性
        if (origDefineProperty && a.nodeType == 1) {
            return origDefineProperty(a, b, c);
        } else {
            a[b] = c.value || (c.get && c.get());
        }
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = from < 0 ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
            from += len;
        }
        for (; from < len; from++) {
            if (from in this && this[from] === elt) {
                return from;
            }
        }
        return -1;
    };
}
