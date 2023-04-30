var $ = Object.defineProperty;
var Y = (e, t2, E) => t2 in e ? $(e, t2, { enumerable: true, configurable: true, writable: true, value: E }) : e[t2] = E;
var S = (e, t2, E) => (Y(e, typeof t2 != "symbol" ? t2 + "" : t2, E), E), D = (e, t2, E) => {
  if (!t2.has(e))
    throw TypeError("Cannot " + E);
};
var N = (e, t2, E) => (D(e, t2, "read from private field"), E ? E.call(e) : t2.get(e)), O = (e, t2, E) => {
  if (t2.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(e) : t2.set(e, E);
}, l = (e, t2, E, s) => (D(e, t2, "write to private field"), s ? s.call(e, E) : t2.set(e, E), E);
function n() {
  return {
    COOKIE_NAMESPACE: "cookie",
    SESSION_STORAGE_NAMESPACE: "sessionStorage",
    LOCAL_STORAGE_NAMESPACE: "localStorage",
    COOKIE_STORE_NAMESPACE: "cookieStore",
    LOCATION_NAMESPACE: "location",
    NETWORK_NAMESPACE: "network",
    ELEMENT_NAMESPACE: "element",
    ELEMENTS_NAMESPACE: "elements",
    FORM_NAMESPACE: "form",
    INPUT_NAMESPACE: "input",
    CONNECTION_NAMESPACE: "connection",
    WINDOW_NAMESPACE: "window",
    ON: ".on",
    OFF: "off"
  };
}
const k = n().OFF;
function i(e) {
  return {
    WINDOW: {
      // Methods
      GET_URL: e.LOCATION_NAMESPACE + ".getUrl",
      // Events
      ON_URL_CHANGE: e.LOCATION_NAMESPACE + e.ON + "UrlChange"
    },
    NETWORK: {
      // Methods
      FETCH: e.NETWORK_NAMESPACE + ".fetch",
      // Events
      ON_FETCH: e.NETWORK_NAMESPACE + e.ON + "Fetch",
      ON_HTTP: e.NETWORK_NAMESPACE + e.ON + "HTTP"
    },
    STORE: {
      // Methods
      GET_COOKIE: e.COOKIE_NAMESPACE + ".getItem",
      SET_COOKIE: e.COOKIE_NAMESPACE + ".setItem",
      GET_SESSION_STORAGE_ITEM: e.SESSION_STORAGE_NAMESPACE + ".getItem",
      SET_SESSION_STORAGE_ITEM: e.SESSION_STORAGE_NAMESPACE + ".setItem",
      GET_LOCAL_STORAGE_ITEM: e.LOCAL_STORAGE_NAMESPACE + ".getItem",
      SET_LOCAL_STORAGE_ITEM: e.LOCAL_STORAGE_NAMESPACE + ".setItem",
      GET_COOKIE_STORE_ITEM: e.COOKIE_STORE_NAMESPACE + ".get",
      SET_COOKIE_STORE_ITEM: e.COOKIE_STORE_NAMESPACE + ".set",
      // Events
      ON_COOKIE_CHANGE: e.COOKIE_NAMESPACE + e.ON + "Change",
      ON_SESSION_STORAGE_CHANGE: e.SESSION_STORAGE_NAMESPACE + e.ON + "Change",
      ON_LOCAL_STORAGE_CHANGE: e.LOCAL_STORAGE_NAMESPACE + e.ON + "Change",
      ON_COOKIE_STORE_CHANGE: e.COOKIE_STORE_NAMESPACE + e.ON + "Change"
    },
    ELEMENT: {
      // Methods
      ADD: e.ELEMENT_NAMESPACE + ".add",
      FIND: e.ELEMENT_NAMESPACE + ".find",
      EXISTS: e.ELEMENT_NAMESPACE + ".exists",
      REMOVE: e.ELEMENT_NAMESPACE + ".remove",
      REPLACE: e.ELEMENT_NAMESPACE + ".replace",
      ADD_STYLES: e.ELEMENT_NAMESPACE + ".addStyles",
      RESTORE_STYLES: e.ELEMENT_NAMESPACE + ".restoreStyles",
      REMOVE_CLASSES: e.ELEMENT_NAMESPACE + ".removeClasses",
      // Events
      ON_TOGGLE: e.ELEMENT_NAMESPACE + e.ON + "Toggle",
      ON_MUTATION: e.ELEMENT_NAMESPACE + e.ON + "Mutation",
      ON_CLICK: e.ELEMENT_NAMESPACE + e.ON + "Click",
      ON_HOVER: e.ELEMENT_NAMESPACE + e.ON + "Hover",
      ON_MOUSEDOWN: e.ELEMENT_NAMESPACE + e.ON + "MouseDown",
      ON_MOUSEUP: e.ELEMENT_NAMESPACE + e.ON + "MouseUp"
    },
    ELEMENTS: {
      ADD: e.ELEMENTS_NAMESPACE + ".add",
      FIND: e.ELEMENTS_NAMESPACE + ".find",
      REMOVE: e.ELEMENTS_NAMESPACE + ".remove",
      REPLACE: e.ELEMENTS_NAMESPACE + ".replace",
      ADD_STYLES: e.ELEMENTS_NAMESPACE + ".addStyles",
      RESTORE_STYLES: e.ELEMENTS_NAMESPACE + ".restoreStyles",
      REMOVE_CLASSES: e.ELEMENTS_NAMESPACE + ".removeClasses"
    },
    FORM: {
      // Events
      ON_SUBMIT: e.FORM_NAMESPACE + e.ON + "Submit"
    },
    INPUT: {
      // Events
      ON_CHANGE: e.INPUT_NAMESPACE + e.ON + "Change",
      ON_FOCUS: e.INPUT_NAMESPACE + e.ON + "Focus",
      ON_BLUR: e.INPUT_NAMESPACE + e.ON + "Blur",
      ON_INPUT: e.INPUT_NAMESPACE + e.ON + "Input"
    },
    CONNECTION: {
      // Methods
      DISCONNECT: e.CONNECTION_NAMESPACE + ".disconnect",
      // Events
      ON_DISCONNECT: e.CONNECTION_NAMESPACE + e.ON + "Disconnect"
    }
  };
}
const T = n(), V = i(T).WINDOW;
i(T).NETWORK;
i(T).STORE;
i(T).ELEMENT;
i(T).ELEMENTS;
i(T).FORM;
i(T).INPUT;
const v = i(T).CONNECTION;
const A = () => ({
  SYSTEM: {
    // Methods
    ECHO: "echo",
    REQUEST_PERMISSIONS: "requestPermissions",
    SEND_MESSAGE: "sendMessage",
    OPEN_APP: "openApp",
    // Events
    ON_MESSAGE: "message"
  },
  SESSION: {
    GET_SESSION: "getSession",
    // Events
    ON_CHANGE: "sessionChange"
  },
  APP: {
    // Methods
    MAXIMIZE: "maximize",
    MINIMIZE: "minimize",
    RESTORE: "restore",
    SET_BADGE: "setBadge",
    CLOSE: "closeApp",
    // Events
    ON_MAXIMIZE: "maximize",
    ON_MINIMIZE: "minimize",
    ON_RESTORE: "restore"
  },
  ELEMENT: {
    // Methods - used by service since worker doesn't have access to DOM
    QUERY: "QUERY"
    // TODO: move to beam-client?
  },
  USER: {
    // Methods
    // GET_USER: 'getUser',
    SET_USER: "setUser",
    // Events
    ON_CHANGE: "userChange"
  },
  RESOURCE: {
    // Methods
    // GET_RESOURCE: 'getResource',
    SET_RESOURCE: "setResource",
    CLEAR_RESOURCE: "clearResource",
    // Events
    ON_CHANGE: "resourceChange"
  },
  NOTIFICATION: {
    // Methods
    PUSH: "pushNotification",
    CLEAR: "clearNotifications",
    // Events
    ON_CLICK: "notificationClick"
  },
  STORE: {
    // Methods
    SET_ITEM: "setStoreItem",
    GET_ITEM: "getStoreItem",
    REMOVE_ITEM: "removeStoreItem"
  }
}), a = A().SYSTEM, w = A().SESSION, R = A().APP, y = A().ELEMENT, x = A().RESOURCE, m = A().NOTIFICATION, p = A().STORE, F = A().USER, Oe = self, K = !!Oe.WorkerGlobalScope, oe = K || `${self.name ?? ""}`.startsWith("portal"), q = "0.3.4";
var g, o, I, P, L, G, _, U, d;
class H {
  /**
   *
   * @param options Allows to set the request timeout in milliseconds. Default is 0 (no timeout).
   */
  constructor(t2, E, s) {
    S(this, "id");
    O(this, g, null);
    O(this, o, []);
    O(this, I, /* @__PURE__ */ new Map());
    O(this, P, /* @__PURE__ */ new Map());
    O(this, L, 0);
    O(this, G, "*");
    O(this, _, void 0);
    S(this, "openApp", (t3, E2) => this.sendRequest(a.OPEN_APP, { appId: t3, message: E2 }));
    S(this, "uuid", () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t3) {
      var E2 = Math.random() * 16 | 0, s2 = t3 == "x" ? E2 : E2 & 3 | 8;
      return s2.toString(16);
    }));
    O(this, U, (t3, E2, s2 = N(this, L)) => new Promise((M, C) => {
      let c = null;
      s2 && (c = setTimeout(() => {
        C(new Error("timeout"));
      }, s2)), N(this, I).set(t3, { path: E2, timer: c, resolve: M, reject: C });
    }));
    O(this, d, async (t3) => {
      if (N(this, o).push(t3), clearTimeout(N(this, g)), N(this, o).length >= 10) {
        this.postMessage({ batch: N(this, o) }), N(this, o).length = 0;
        return;
      }
      l(this, g, setTimeout(() => {
        this.postMessage({ batch: N(this, o) }), N(this, o).length = 0;
      }, 1));
    });
    S(this, "postMessage", (t3) => {
      K ? N(this, _).postMessage(t3) : oe && N(this, _).postMessage(t3, N(this, G));
    });
    S(this, "setContext", (t3) => {
      l(this, _, t3);
    });
    S(this, "sendRequest", async (t3, ...E2) => {
      const s2 = this.uuid();
      return N(this, d).call(this, { id: s2, path: t3, version: q, args: E2 }), N(this, U).call(this, s2, t3);
    });
    S(this, "subscribe", (t3, E2 = "*", s2) => {
      const r = this.uuid();
      return N(this, P).set(r, s2), N(this, d).call(this, { id: r, version: q, path: "on." + t3, args: [E2] }), () => {
        N(this, P).delete(r), setTimeout(() => {
          this.postMessage({ id: r, path: k + "." + t3, args: [E2] });
        }, 0);
      };
    });
    S(this, "disconnect", () => {
      N(this, _) && this.postMessage({ id: this.id, path: v.DISCONNECT });
    });
    S(this, "echo", (t3) => this.sendRequest(a.ECHO, t3));
    S(this, "requestPermissions", (t3) => this.sendRequest(a.REQUEST_PERMISSIONS, t3));
    S(this, "getSession", async () => this.sendRequest(w.GET_SESSION));
    S(this, "setBadge", (t3) => this.sendRequest(R.SET_BADGE, t3));
    S(this, "closeApp", () => this.sendRequest(R.CLOSE));
    S(this, "pushNotification", (t3) => this.sendRequest(m.PUSH, t3));
    S(this, "clearNotifications", (t3) => this.sendRequest(m.CLEAR, t3));
    S(this, "setStoreItem", (t3, E2, s2) => this.sendRequest(p.SET_ITEM, t3, E2, s2));
    S(this, "getStoreItem", async (t3, E2, s2) => this.sendRequest(p.GET_ITEM, t3, s2).then((r) => r ?? E2 ? E2 : r));
    S(this, "removeStoreItem", (t3, E2) => this.sendRequest(p.REMOVE_ITEM, t3, E2));
    S(this, "onSessionChange", (t3) => this.subscribe(w.ON_CHANGE, "*", t3));
    S(this, "onMaximize", (t3) => this.subscribe(R.ON_MAXIMIZE, "*", t3));
    S(this, "onMinimize", (t3) => this.subscribe(R.MINIMIZE, "*", t3));
    S(this, "onRestore", (t3) => this.subscribe(R.RESTORE, "*", t3));
    S(this, "onResourceChange", (t3 = "*", E2) => this.subscribe(x.ON_CHANGE, t3, E2));
    S(this, "onMessage", (t3) => this.subscribe(m.ON_CLICK, "*", t3));
    S(this, "onUserChange", (t3) => () => this.subscribe(F.ON_CHANGE, "*", t3));
    s && l(this, L, s.requestTimeout || 0), this.id = this.uuid(), l(this, _, t2), E.addEventListener("message", (r) => {
      const { id: M, data: C, error: c } = r.data, u = N(this, I).get(M);
      if (u)
        u.timer && clearTimeout(u.timer), N(this, I).delete(M), c ? u.reject(c) : u.resolve(C);
      else {
        const h = N(this, P).get(M);
        h && h(C);
      }
    });
  }
}
g = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
class ie extends H {
  constructor(E, s) {
    super(E, E, s);
    S(this, "query", async (E2) => {
      const s2 = typeof E2 == "string" ? E2 : E2.toString();
      return await this.sendRequest(y.QUERY, s2);
    });
    S(this, "$", (E2) => {
      const s2 = new Proxy(() => {
      }, {});
      return this.generatePathFromProxy(s2).$(E2);
    });
    S(this, "openApp", (E2, s2) => this.sendRequest(a.OPEN_APP, { appId: E2, message: s2 }));
    S(this, "setResource", (E2) => this.sendRequest(x.SET_RESOURCE, E2));
    S(this, "clearResource", (E2) => this.sendRequest(x.CLEAR_RESOURCE, E2));
    S(this, "setUser", (E2) => this.sendRequest(F.SET_USER, E2));
    S(this, "sendMessage", (E2) => this.sendRequest(a.SEND_MESSAGE, E2));
    S(this, "generatePathFromProxy", (E2) => {
      const s2 = [], r = {
        get(M, C) {
          return s2.push(C.toString()), new Proxy(() => {
          }, r);
        },
        apply(M, C, c) {
          const u = c.map((W) => JSON.stringify(W)).join(", "), h = s2[s2.length - 1];
          return h === "toString" ? s2.slice(0, -1).join(".") : (s2[s2.length - 1] = `${h}(${u})`, new Proxy(() => {
          }, r));
        }
        // Add a valueOf() method to return the string path when the proxy is coerced to a primitive value
        // valueOf() {
        //   return pathParts.join('.')
        // },
      };
      return new Proxy(() => {
      }, r);
    });
    S(this, "requestPermissions", (E2) => this.sendRequest(a.REQUEST_PERMISSIONS, E2));
  }
}
let b;
const _e = () => {
  if (!K)
    throw new Error("usePortalService must be called from a web worker");
  return b || (b = new ie(self)), b;
}, ue = V;
const t = "patient";
async function main() {
  const portal = _e();
  portal.subscribe(ue.ON_URL_CHANGE, "*", (url) => {
    if (!url)
      return;
    const regex = new RegExp("/\\d+$");
    const match = url.match(regex);
    const patientId = ((match == null ? void 0 : match.length) ? match[0] : "").substring(1);
    if (patientId) {
      portal.setResource({
        id: patientId,
        type: t
      });
    } else {
      portal.clearResource(t);
    }
  });
}
main();
export {
  main as default
};
