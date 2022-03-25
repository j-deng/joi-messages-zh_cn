module.exports = {
  "date.base": "{{#label}} 必须为合法的日期",
  "date.format":
    '{{#label}} 格式必须为 {msg("date.format." + #format) || #format}',
  "date.greater": "{{#label}}必须大于 {{:#limit}}",
  "date.less": "{{#label}} 必须小于 {{:#limit}}",
  "date.max": "{{#label}} 必须小于等于 {{:#limit}}",
  "date.min": "{{#label}} 必须大于等于 {{:#limit}}",

  // Messages used in date.format

  "date.format.iso": "ISO 8601 日期格式",
  "date.format.javascript": "时间戳（毫秒）",
  "date.format.unix": "时间戳（秒）",
};
