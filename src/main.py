# QR - code image generator program for SYSTEM SOFTWARE 
import qrcode
img = qrcode.make("System number: 1\n")
img.save('This_system_qrcode.jpg')