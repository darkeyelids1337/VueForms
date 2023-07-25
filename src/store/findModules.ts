const requireModel = require.context(
  ".",
  true,
  /^(?!.*(actions|mutations|getters|index|findModules|interfaces)).*\.ts$/
);
const modules: any = {};
requireModel.keys().forEach((item) => {
  console.log(item.split(".ts")[0]);
  const moduleName = item.replace("./", "").replace("/state.ts", "");
  modules[moduleName] = {
    ...requireModel(item).default,
  };
});
export default modules;
