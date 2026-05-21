Blockly.defineBlocksWithJsonArray(
[{
  "type": "ads1115_setup",
  "message0": "ADS1115 configurar pines I2C SDA: %1 SCL: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "sda",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "scl",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2C3E50",
  "tooltip": "Inicializa el bus I2C y el módulo ADS1115.",
  "helpUrl": ""
},
{
  "type": "ads1115_read",
  "message0": "ADS1115 leer canal %1 (0-3)",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#2C3E50",
  "tooltip": "Obtiene la lectura analógica pura (0-32767) del canal seleccionado.",
  "helpUrl": ""
}]
);
