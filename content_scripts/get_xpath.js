/**
 * getX-Path
 * https://www.npmjs.com/package/get-xpath?activeTab=readme
 */
function e() {
  return (e = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      }).apply(this, arguments);
}
var r = { ignoreId: !1 };
function getXPath(n, i) {
  var o = e({}, r, i),
    a = n;
  if (a && a.id && !o.ignoreId) return '//*[@id="' + a.id + '"]';
  for (var t = []; a && Node.ELEMENT_NODE === a.nodeType; ) {
    for (var d = 0, p = !1, f = a.previousSibling; f; )
      f.nodeType !== Node.DOCUMENT_TYPE_NODE &&
        f.nodeName === a.nodeName &&
        d++,
        (f = f.previousSibling);
    for (f = a.nextSibling; f; ) {
      if (f.nodeName === a.nodeName) {
        p = !0;
        break;
      }
      f = f.nextSibling;
    }
    t.push(
      (a.prefix ? a.prefix + ":" : "") +
        a.localName +
        (d || p ? "[" + (d + 1) + "]" : "")
    ),
      (a = a.parentNode);
  }
  return t.length ? "/" + t.reverse().join("/") : "";
};

Object.assign(window, {
    getXPath
  });
  
