Blockly.Blocks['ads1115_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inicializar ADS1115 (I2C)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8E44AD");
    this.setTooltip("Configura el módulo ADS1115 usando los pines I2C estándar de la KidBright (SDA=21, SCL=22).");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ads1115_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Leer ADS1115 Canal")
        .appendField(new Blockly.FieldDropdown([
            ["A0", "0"], 
            ["A1", "1"], 
            ["A2", "2"], 
            ["A3", "3"]
        ]), "CHANNEL");
    this.setOutput(true, "Number");
    this.setColour("#8E44AD");
    this.setTooltip("Devuelve la lectura digital de alta resolución (0 a 32767) del canal seleccionado.");
    this.setHelpUrl("");
  }
};
