module.exports = {
  "object.and":
    "{{#label}} 包含 {{#presentWithLabels}} 但不存在项 {{#missingWithLabels}}",
  "object.assert": "{{#label}} 不能匹配断言",
  "object.base": "{{#label}} 必须为 {{#type}} 类型",
  "object.instance": "{{#label}} 必须为 {{:#type}} 的实例",
  "object.length": "{{#label}} 必须包含{{#limit}}个项",
  "object.max": "{{#label}} 最多包含{{#limit}}个项",
  "object.min": "{{#label}} 最少包含{{#limit}}个项",
  "object.missing": "{{#label}} 必须包含 {{#peersWithLabels}} 中的一个项",
  "object.nand": "{{:#mainWithLabel}} 与 {{#peersWithLabels}} 不能同时存在",
  "object.oxor": "{{#label}} 与 {{#peersWithLabels}} 可选特有项存在冲突",
  "object.pattern.match": "{{#label}} 项不匹配要求",
  "object.refType": "{{#label}} 必须为引用的类型",
  "object.regex": "{{#label}} 必须为正则表达式",
  "object.rename.multiple":
    "{{#label}} 不能重命名 {{:#from}} 为 {{:#to}}，因为与其它重命名的项冲突",
  "object.rename.override":
    "{{#label}} 不能重命名 {{:#from}}，因为 {{:#to}} 已存在",
  "object.schema": "{{#label}} 必须为 {{#type}} 类型的 joi 校验对象",
  "object.unknown": "{{#label}} 值不允许",
  "object.with": "{{:#mainWithLabel}} 缺少了所需的项 {{:#peerWithLabel}}",
  "object.without": "{{:#mainWithLabel}} 与 {{:#peerWithLabel}} 禁止项存在冲突",
  "object.xor": "{{#label}} 与 {{#peersWithLabels}} 特有项存在冲突",
};
