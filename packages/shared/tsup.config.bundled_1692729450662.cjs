var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// tsup.config.js
__export(exports, {
  default: () => tsup_config_default
});
var import_plugin_jsx = __toModule(require("@svgr/plugin-jsx"));
var import_esbuild_plugin_svgr = __toModule(require("esbuild-plugin-svgr"));
var import_tsup = __toModule(require("tsup"));
var tsup_config_default = (0, import_tsup.defineConfig)({
  esbuildPlugins: [(0, import_esbuild_plugin_svgr.default)({ svgo: false, plugins: [import_plugin_jsx.default] })]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBqc3ggZnJvbSAnQHN2Z3IvcGx1Z2luLWpzeCdcbmltcG9ydCBzdmdyIGZyb20gJ2VzYnVpbGQtcGx1Z2luLXN2Z3InXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlc2J1aWxkUGx1Z2luczogW3N2Z3IoeyBzdmdvOiBmYWxzZSwgcGx1Z2luczogW2pzeF0gfSldLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBZ0I7QUFDaEIsaUNBQWlCO0FBQ2pCLGtCQUE2QjtBQUU3QixJQUFPLHNCQUFRLDhCQUFhO0FBQUEsRUFDMUIsZ0JBQWdCLENBQUMsd0NBQUssRUFBRSxNQUFNLE9BQU8sU0FBUyxDQUFDO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
