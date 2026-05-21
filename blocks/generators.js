Blockly.Python['ads1115_init'] = function(block) {
  var dropdown_sda = block.getFieldValue('SDA');
  var dropdown_scl = block.getFieldValue('SCL');
  
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ads1115'] = 'from ads1115 import ADS1115';
  
  var code = `i2c_bus = machine.I2C(0, sda=machine.Pin(${dropdown_sda}), scl=machine.Pin(${dropdown_scl}))\nadc_ext = ADS1115(i2c_bus)\n`;
  return code;
};

Blockly.Python['ads1115_read'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = `adc_ext.read_channel(${dropdown_channel})`;
  return [code, Blockly.Python.ORDER_NONE];
};
