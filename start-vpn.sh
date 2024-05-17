#!/bin/sh

# Read our environment variables
VPN_GATEWAY=${VPN_GATEWAY}
IPSEC_PSK=${IPSEC_PSK}
VPN_USER=${VPN_USER}
VPN_PASSWORD=${VPN_PASSWORD}

# Add VPN connection
nmcli connection add connection.id myvpn \
con-name myvpn \
type vpn \
vpn-type l2tp \
ifname -- \
connection.autoconnect no \
ipv4.method auto \
vpn.data "gateway=${VPN_GATEWAY},ipsec-enabled=yes,ipsec-psk=0s$(echo -n "${IPSEC_PSK}" | base64),user=${VPN_USER},password-flags=0" \
vpn.secrets "password=${VPN_PASSWORD}"

# VPN start 
nmcli connection up myvpn

# Start hono/bun
bun run start  
