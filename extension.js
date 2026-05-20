var extension = {
  name: "ADS1115",
  description: "ADC I2C 16-bit, 4 canales para KidBright32",
  author: "pcvargas",
  version: "1.0.0",
  color: "#006a99",
  category: "Sensors",
  icon: "static/icon.png",
  blocks: [
    "blocks/blocks_ADS1115.js",
    "blocks/generators_ADS1115.js"
  ],
  modules: [
    "modules/ADS1115.py"
  ],
  toolbox: '<category name="ADS1115" colour="230">'
    + '<block type="ADS1115_begin"><field name="ADDR">0x48</field></block>'
    + '<block type="ADS1115_set_gain"><field name="GAIN">2</field></block>'
    + '<block type="ADS1115_read_raw"><field name="CHANNEL">0</field></block>'
    + '<block type="ADS1115_read_mv"><field name="CHANNEL">0</field></block>'
    + '<block type="ADS1115_read_v"><field name="CHANNEL">0</field></block>'
    + '<block type="ADS1115_read_percent"><field name="CHANNEL">0</field></block>'
    + '</category>'
};
