Blockly.Blocks['ads1115_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inicializar ADS1115 I2C")
        .appendField("SDA")
        .appendField(new Blockly.FieldDropdown([["21","21"], ["22","22"], ["4","4"], ["5","5"]]), "SDA")
        .appendField("SCL")
        .appendField(new Blockly.FieldDropdown([["22","22"], ["21","21"], ["14","14"], ["15","15"]]), "SCL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2C3E50");
    this.setTooltip("Configura e inicializa el bus I2C para el módulo ADS1115 en la ESP32.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ads1115_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leer Canal")
        .appendField(new Blockly.FieldDropdown([["A0","0"], ["A1","1"], ["A2","2"], ["A3","3"]]), "CHANNEL")
        .appendField("del ADS1115");
    this.setOutput(true, "Number");
    this.setColour("#2C3E50");
    this.setTooltip("Retorna el valor analógico crudo (0 a 32767) del canal seleccionado.");
    this.setHelpUrl("");
  }
};
