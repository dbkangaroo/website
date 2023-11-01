
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(require('vue-script2'));

    // 单页应用的数据统计支持
    router.beforeEach((to, from, next) => {
        if (typeof _hmt !== "undefined") {
          if (to.path) {
            _hmt.push(["_trackPageview", to.fullPath]);
          }
        }
        
        next();
      });
}
