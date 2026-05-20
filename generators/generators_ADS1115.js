Blockly.Python['ads1115_init'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ads1115'] = 'from ads1115 import ADS1115';
  
  // En las placas KidBright32, el bus I2C nativo usa SDA=21 y SCL=22
  Blockly.Python.setups_['setup_ads1115'] = 'i2c_bus = machine.I2C(0, sda=machine.Pin(21), scl=machine.Pin(22))\nadc_ext = ADS1115(i2c_bus)';
  return '';
};

Blockly.Python['ads1115_read'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ads1115'] = 'from ads1115 import ADS1115';
  
  var code = 'adc_ext.read(' + dropdown_channel + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
