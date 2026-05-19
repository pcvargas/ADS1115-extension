// blocks/generators_ADS1115.js
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
