FROM node:20-bookworm-slim

# Install necessary packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    network-manager \
    network-manager-l2tp \
    iproute2 \
    supervisor \
    curl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy configuration files
COPY supervisord.conf /etc/supervisord.conf
COPY start-vpn.sh /usr/local/bin/start-vpn.sh

# Make the start-vpn script executable
RUN chmod +x /usr/local/bin/start-vpn.sh

# Set the working directory
WORKDIR /usr/src/app

# Copy application files
COPY . .

# Install application dependencies
RUN npm install

# Start services using Supervisor
# https://fly.io/docs/app-guides/multiple-processes/
CMD ["supervisord", "-c", "/etc/supervisord.conf"]
