import machine
import time

class ADS1115:
    def __init__(self, i2c, address=0x48):
        self.i2c = i2c
        self.address = address

    def read(self, channel=0):
        # Configuración single-ended para canales 0-3 (Rango de 4.096V)
        config = 0x8383 | ((4 + channel) << 12)
        config_bytes = bytes([(config >> 8) & 0xFF, config & 0xFF])
        
        # Escribir en el registro de configuración (0x01)
        self.i2c.writeto_mem(self.address, 0x01, config_bytes)
        
        # Esperar a que finalice la conversión de la señal (10ms)
        time.sleep_ms(10)
        
        # Leer los 2 bytes del registro de conversión (0x00)
        data = self.i2c.readfrom_mem(self.address, 0x00, 2)
        value = (data[0] << 8) | data[1]
        
        # Ajuste de signo para enteros de 16 bits
        if value > 32767:
            value -= 65536
        return value
