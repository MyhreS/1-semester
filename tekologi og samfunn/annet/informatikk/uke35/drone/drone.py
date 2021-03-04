import time
import socket


#Tilkobling

host = ''
port = 9000
Andreas = (host,port) 

sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
address = ("192.168.10.1", 8889)
sock.bind(Andreas)

# Kommandoer til dronen

msg = "command"
msg = msg.encode(encoding="utf-8") 
sent = sock.sendto(msg, address)

time.sleep (1)

msg = "takeoff"
msg = msg.encode(encoding="utf-8") 
sent = sock.sendto(msg, address)

time.sleep (5)

msg = "forward 70"
msg = msg.encode(encoding="utf-8") 
sent = sock.sendto(msg, address)

time.sleep (5)

msg = "cw 180"
msg = msg.encode(encoding="utf-8") 
sent = sock.sendto(msg, address)

time.sleep (5)

msg = "forward 70"
msg = msg.encode(encoding="utf-8") 
sent = sock.sendto(msg, address)

time.sleep (5)

msg = "land"
msg = msg.encode(encoding="utf-8") 
sent = sock.sendto(msg, address)