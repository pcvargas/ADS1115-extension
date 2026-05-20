Blockly.Python["ADS1115_begin"]=function(b){Blockly.Python.definitions_["import_ADS1115"]="import ADS1115";return"ADS1115.begin("+b.getFieldValue("ADDR")+")\n";};
Blockly.Python["ADS1115_set_gain"]=function(b){Blockly.Python.definitions_["import_ADS1115"]="import ADS1115";return"ADS1115.set_gain("+b.getFieldValue("GAIN")+")\n";};
Blockly.Python["ADS1115_read_raw"]=function(b){Blockly.Python.definitions_["import_ADS1115"]="import ADS1115";return["ADS1115.read_raw("+b.getFieldValue("CHANNEL")+")",Blockly.Python.ORDER_FUNCTION_CALL];};
Blockly.Python["ADS1115_read_mv"]=function(b){Blockly.Python.definitions_["import_ADS1115"]="import ADS1115";return["ADS1115.read_voltage("+b.getFieldValue("CHANNEL")+")",Blockly.Python.ORDER_FUNCTION_CALL];};
Blockly.Python["ADS1115_read_v"]=function(b){Blockly.Python.definitions_["import_ADS1115"]="import ADS1115";return["ADS1115.read_voltage_v("+b.getFieldValue("CHANNEL")+")",Blockly.Python.ORDER_FUNCTION_CALL];};
Blockly.Python["ADS1115_read_percent"]=function(b){Blockly.Python.definitions_["import_ADS1115"]="import ADS1115";return["ADS1115.read_percent("+b.getFieldValue("CHANNEL")+")",Blockly.Python.ORDER_FUNCTION_CALL];};
