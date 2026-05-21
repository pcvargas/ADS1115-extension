Blockly.Python['ads1115_setup'] = function(block) {
  var value_sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC) || '21';
  var value_scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC) || '22';
  
  Blockly.Python.definitions_['from_machine_import_pin_i2c'] = 'import machine';
  Blockly.Python.definitions_['import_time_ms'] = 'import time';

  // Inyección segura del controlador nativo de MicroPython en la cabecera
  Blockly.Python.definitions_['class_ads1115_driver'] = 
    'class ADS1115_EXT:\n' +
    '    def __init__(self, i2c, addr=0x48):\n' +
    '        self.i2c = i2c\n' +
    '        self.addr = addr\n' +
    '    def read(self, ch):\n' +
    '        cfg = 0x8283 | ((ch + 4) << 12)\n' +
    '        d = bytearray(2)\n' +
    '        d[0] = (cfg >> 8) & 0xFF\n' +
    '        d[1] = cfg & 0xFF\n' +
    '        self.i2c.writeto_mem(self.addr, 0x01, d)\n' +
    '        time.sleep_ms(10)\n' +
    '        r = self.i2c.readfrom_mem(self.addr, 0x00, 2)\n' +
    '        v = (r[0] << 8) | r[1]\n' +
    '        return v - 65536 if v > 32767 else v\n';

  var code = `i2c_bus = machine.I2C(0, sda=machine.Pin(${value_sda}), scl=machine.Pin(${value_scl}))\nadc_ext = ADS1115_EXT(i2c_bus)\n`;
  return code;
};

Blockly.Python['ads1115_read'] = function(block) {
  var value_channel = Blockly.Python.valueToCode(block, 'channel', Blockly.Python.ORDER_ATOMIC) || '0';
  
  var code = `adc_ext.read(${value_channel})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
