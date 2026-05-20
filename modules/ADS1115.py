# ADS1115.py - Driver MicroPython para KidBright32
# microBlock IDE v3.0.0  |  I2C Bus 1: SCL=Pin(5), SDA=Pin(4)
from machine import Pin, I2C
import os

_REG_CONV = 0x00
_REG_CFG  = 0x01
_MUX = {0: 0x4000, 1: 0x5000, 2: 0x6000, 3: 0x7000}
_GAIN_REG = [0x0000, 0x0200, 0x0400, 0x0600, 0x0800, 0x0A00]
_GAIN_MV  = [0.1875, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125]

_i2c = None
_addr = 0x48
_gi = 2

def _bus():
    m = os.uname().machine
    if "KidBright32" in m: return I2C(1, scl=Pin(5), sda=Pin(4), freq=100000)
    if "KidMotor V4" in m: return I2C(0, scl=Pin(5), sda=Pin(4), freq=100000)
    if "Mbits" in m:       return I2C(0, scl=Pin(21), sda=Pin(22), freq=100000)
    return I2C(0, scl=Pin(22), sda=Pin(21), freq=100000)

def _wr(r, v):
    _i2c.writeto(_addr, bytes([r, (v >> 8) & 0xFF, v & 0xFF]))

def _rd(r):
    _i2c.writeto(_addr, bytes([r]))
    b = _i2c.readfrom(_addr, 2)
    return (b[0] << 8) | b[1]

def _raw(ch):
    global _i2c
    if _i2c is None: _i2c = _bus()
    cfg = 0x8000 | _MUX.get(ch, 0x4000) | _GAIN_REG[_gi] | 0x0100 | 0x0080 | 0x0003
    _wr(_REG_CFG, cfg)
    from time import sleep_ms
    sleep_ms(10)
    while not (_rd(_REG_CFG) & 0x8000): sleep_ms(1)
    v = _rd(_REG_CONV)
    return v - 65536 if v > 32767 else v

def begin(addr=0x48):
    global _i2c, _addr
    _addr = addr
    _i2c = _bus()

def set_gain(g):
    global _gi
    if 0 <= g <= 5: _gi = g

def read_raw(ch): return _raw(ch)
def read_voltage(ch): return _raw(ch) * _GAIN_MV[_gi]
def read_voltage_v(ch): return round(read_voltage(ch) / 1000.0, 2)
def read_percent(ch):
    v = _raw(ch)
    if v < 0: v = 0
    return round((v / 32767.0) * 100.0, 1)
