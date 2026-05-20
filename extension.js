// ADS1115 extension para microBlock IDE v3.0.0
// KidBright32 — ADC I2C 16-bit, 4 canales

// ── 1. Bloques visuales ────────────────────────────────────────────
Blockly.defineBlocksWithJsonArray([
  {
    "type": "ADS1115_begin",
    "message0": "inicializar ADS1115 direccion %1",
    "args0": [{"type":"field_dropdown","name":"ADDR","options":[
      ["0x48 (ADDR-GND)","0x48"],
      ["0x49 (ADDR-VCC)","0x49"],
      ["0x4A (ADDR-SDA)","0x4A"],
      ["0x4B (ADDR-SCL)","0x4B"]
    ]}],
    "previousStatement":null,"nextStatement":null,
    "colour":230,
    "tooltip":"Inicializa el ADS1115. ADDR a GND = direccion 0x48.",
    "helpUrl":""
  },
  {
    "type": "ADS1115_set_gain",
    "message0": "ADS1115 ganancia %1",
    "args0": [{"type":"field_dropdown","name":"GAIN","options":[
      ["+-6.144 V","0"],
      ["+-4.096 V","1"],
      ["+-2.048 V (default)","2"],
      ["+-1.024 V","3"],
      ["+-0.512 V","4"],
      ["+-0.256 V","5"]
    ]}],
    "previousStatement":null,"nextStatement":null,
    "colour":230,
    "tooltip":"Rango de medicion. Para sensores 3.3V usa +-4.096V.",
    "helpUrl":""
  },
  {
    "type": "ADS1115_read_raw",
    "message0": "ADS1115 RAW canal %1",
    "args0": [{"type":"field_dropdown","name":"CHANNEL","options":[
      ["A0","0"],["A1","1"],["A2","2"],["A3","3"]
    ]}],
    "output":"Number","colour":160,
    "tooltip":"Valor crudo -32768 a 32767.","helpUrl":""
  },
  {
    "type": "ADS1115_read_mv",
    "message0": "ADS1115 voltaje mV canal %1",
    "args0": [{"type":"field_dropdown","name":"CHANNEL","options":[
      ["A0","0"],["A1","1"],["A2","2"],["A3","3"]
    ]}],
    "output":"Number","colour":160,
    "tooltip":"Voltaje en miliVoltios.","helpUrl":""
  },
  {
    "type": "ADS1115_read_v",
    "message0": "ADS1115 voltaje V canal %1",
    "args0": [{"type":"field_dropdown","name":"CHANNEL","options":[
      ["A0","0"],["A1","1"],["A2","2"],["A3","3"]
    ]}],
    "output":"Number","colour":160,
    "tooltip":"Voltaje en Voltios (2 decimales).","helpUrl":""
  },
  {
    "type": "ADS1115_read_percent",
    "message0": "ADS1115 porcentaje % canal %1",
    "args0": [{"type":"field_dropdown","name":"CHANNEL","options":[
      ["A0","0"],["A1","1"],["A2","2"],["A3","3"]
    ]}],
    "output":"Number","colour":160,
    "tooltip":"Porcentaje 0-100%.","helpUrl":""
  }
]);

// ── 2. Generadores MicroPython ──────────────────────────────────────
Blockly.Python["ADS1115_begin"] = function(block) {
  Blockly.Python.definitions_["import_ADS1115"] = "import ADS1115";
  return "ADS1115.begin(" + block.getFieldValue("ADDR") + ")\n";
};
Blockly.Python["ADS1115_set_gain"] = function(block) {
  Blockly.Python.definitions_["import_ADS1115"] = "import ADS1115";
  return "ADS1115.set_gain(" + block.getFieldValue("GAIN") + ")\n";
};
Blockly.Python["ADS1115_read_raw"] = function(block) {
  Blockly.Python.definitions_["import_ADS1115"] = "import ADS1115";
  return ["ADS1115.read_raw(" + block.getFieldValue("CHANNEL") + ")", Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python["ADS1115_read_mv"] = function(block) {
  Blockly.Python.definitions_["import_ADS1115"] = "import ADS1115";
  return ["ADS1115.read_voltage(" + block.getFieldValue("CHANNEL") + ")", Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python["ADS1115_read_v"] = function(block) {
  Blockly.Python.definitions_["import_ADS1115"] = "import ADS1115";
  return ["ADS1115.read_voltage_v(" + block.getFieldValue("CHANNEL") + ")", Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python["ADS1115_read_percent"] = function(block) {
  Blockly.Python.definitions_["import_ADS1115"] = "import ADS1115";
  return ["ADS1115.read_percent(" + block.getFieldValue("CHANNEL") + ")", Blockly.Python.ORDER_FUNCTION_CALL];
};

// ── 3. Registro de la extension ────────────────────────────────────
// window.extension garantiza scope global independientemente de
// como el IDE ejecute este archivo (eval, new Function, script tag).
// blocks:[] vacio = el IDE no intenta descargas adicionales.
window.extension = {
  name: "ADS1115",
  description: "ADC I2C 16-bit, 4 canales para KidBright32",
  author: "pcvargas",
  version: "1.0.0",
  color: "#006a99",
  category: "Sensors",
  icon: "static/icon.png",
  blocks: [],
  modules: ["modules/ADS1115.py"],
  toolbox: '<category name="ADS1115" colour="230">'
    + '<block type="ADS1115_begin"><field name="ADDR">0x48</field></block>'
    + '<block type="ADS1115_set_gain"><field name="GAIN">2</field></block>'
    + '<block type="ADS1115_read_raw"><field name="CHANNEL">0</field></block>'
    + '<block type="ADS1115_read_mv"><field name="CHANNEL">0</field></block>'
    + '<block type="ADS1115_read_v"><field name="CHANNEL">0</field></block>'
    + '<block type="ADS1115_read_percent"><field name="CHANNEL">0</field></block>'
    + '</category>'
};
