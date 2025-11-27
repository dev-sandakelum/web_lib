"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Terminal,
  Network,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Check,
  Save,
} from "lucide-react";

export default function PacketTracerGuideV2() {
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({});
  const [expandedTasks, setExpandedTasks] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSection = (sectionIdx: number) => {
    setExpandedSections((prev: Record<number, boolean>) => ({
      ...prev,
      [sectionIdx]: !prev[sectionIdx],
    }));
  };

  const toggleTask = (key: string) => {
    setExpandedTasks((prev: Record<string, boolean>) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const scrollToSection = (sectionIdx: number | string) => {
    const element = document.getElementById(`section-${sectionIdx}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    {
      title: "Initial Router Setup",
      icon: <Zap className="w-6 h-6" />,
      description: "Complete workflow for setting up a new router from scratch",
      tasks: [
        {
          taskName: "Basic Router Configuration",
          goal: "Set up hostname, disable DNS lookup, and configure minimum password length",
          steps: [
            { cmd: "enable", desc: "Enter privileged EXEC mode" },
            {
              cmd: "configure terminal",
              desc: "Enter global configuration mode",
            },
            { cmd: "hostname R1", desc: "Assign router name as R1" },
            {
              cmd: "no ip domain-lookup",
              desc: "Disable DNS lookup to prevent delays",
            },
            {
              cmd: "security passwords min-length 10",
              desc: "Set minimum password length to 10 characters",
            },
          ],
          fullExample: `Router> enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# no ip domain-lookup
R1(config)# security passwords min-length 10`,
          why: "These foundational settings establish the router's identity and basic security requirements before proceeding with other configurations.",
          tips: [
            "Always disable DNS lookup to prevent command delays",
            "Use descriptive hostnames for easier network management",
          ],
        },
      ],
    },
    {
      title: "Securing the Router",
      icon: <Settings className="w-6 h-6" />,
      description:
        "Complete security configuration for console, VTY, and privileged access",
      tasks: [
        {
          taskName: "Secure Console Access",
          goal: "Protect the physical console port with password and timeout",
          steps: [
            {
              cmd: "line console 0",
              desc: "Enter console line configuration mode",
            },
            { cmd: "password ciscoconpass", desc: "Set console password" },
            { cmd: "login", desc: "Enable password checking" },
            { cmd: "exec-timeout 5 0", desc: "Set 5-minute idle timeout" },
            {
              cmd: "logging synchronous",
              desc: "Prevent log messages from interrupting commands",
            },
            { cmd: "exit", desc: "Return to global config mode" },
          ],
          fullExample: `R1(config)# line console 0
R1(config-line)# password ciscoconpass
R1(config-line)# login
R1(config-line)# exec-timeout 5 0
R1(config-line)# logging synchronous
R1(config-line)# exit`,
          why: "Console security prevents unauthorized physical access to the router. The timeout automatically disconnects idle sessions, and logging synchronous prevents system messages from interrupting your commands.",
          tips: [
            "Use strong passwords (min 10 characters)",
            "exec-timeout 5 0 means 5 minutes, 0 seconds",
            "logging synchronous is crucial for a clean CLI experience",
          ],
        },
        {
          taskName: "Secure Remote Access (VTY Lines)",
          goal: "Configure virtual terminal lines for remote Telnet/SSH access",
          steps: [
            { cmd: "line vty 0 4", desc: "Enter VTY lines 0-4 configuration" },
            { cmd: "password ciscovtypass", desc: "Set VTY password" },
            { cmd: "login", desc: "Enable password checking" },
            { cmd: "exec-timeout 5 0", desc: "Set 5-minute idle timeout" },
            {
              cmd: "logging synchronous",
              desc: "Prevent log messages from interrupting",
            },
            { cmd: "exit", desc: "Return to global config mode" },
          ],
          fullExample: `R1(config)# line vty 0 4
R1(config-line)# password ciscovtypass
R1(config-line)# login
R1(config-line)# exec-timeout 5 0
R1(config-line)# logging synchronous
R1(config-line)# exit`,
          why: "VTY lines are used for Telnet/SSH remote access. Securing them prevents unauthorized remote login attempts. Lines 0-4 means 5 simultaneous connections are allowed.",
          tips: [
            "VTY = Virtual TeletYpe (remote access)",
            "Configure all 5 lines (0-4) for consistency",
          ],
        },
        {
          taskName: "Secure Privileged Mode",
          goal: "Set encrypted password for privileged EXEC mode access",
          steps: [
            {
              cmd: "enable secret cisco12345",
              desc: "Set encrypted privileged password (MD5)",
            },
            {
              cmd: "service password-encryption",
              desc: "Encrypt all plain text passwords in config",
            },
          ],
          fullExample: `R1(config)# enable secret cisco12345
R1(config)# service password-encryption`,
          why: "Enable secret uses strong MD5 encryption and takes precedence over 'enable password'. Service password-encryption adds basic Type 7 encryption to other passwords, though Type 7 is easily decrypted and only protects against casual viewing.",
          tips: [
            "ALWAYS use 'enable secret' not 'enable password'",
            "Type 7 encryption (service password-encryption) is weak but better than nothing",
          ],
        },
        {
          taskName: "Add Warning Banner",
          goal: "Display legal warning message on login",
          steps: [
            {
              cmd: "banner motd #Unauthorized access prohibited!#",
              desc: "Create message-of-the-day banner using # as delimiter",
            },
          ],
          fullExample: `R1(config)# banner motd #Unauthorized access prohibited!#`,
          why: "Legal banners warn users about authorized use and can be important for prosecution of unauthorized access. The delimiter (#) can be any character not in your message.",
          tips: [
            "Choose a delimiter that doesn't appear in your message",
            "Keep it professional and legally appropriate",
          ],
        },
      ],
    },
    {
      title: "Configuring Router Interfaces",
      icon: <Network className="w-6 h-6" />,
      description: "Set up IPv4 and IPv6 addresses on router interfaces",
      tasks: [
        {
          taskName: "Configure IPv4 on Interface",
          goal: "Assign IPv4 address and activate a router interface",
          steps: [
            {
              cmd: "interface gigabitEthernet 0/0/0",
              desc: "Enter interface configuration mode",
            },
            {
              cmd: "description Connection to PC-A",
              desc: "Add interface description for documentation",
            },
            {
              cmd: "ip address 192.168.1.1 255.255.255.0",
              desc: "Assign IPv4 address and subnet mask",
            },
            { cmd: "no shutdown", desc: "Activate the interface" },
            { cmd: "exit", desc: "Return to global config mode" },
          ],
          fullExample: `R1(config)# interface gigabitEthernet 0/0/0
R1(config-if)# description Connection to PC-A
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit

%LINK-5-CHANGED: Interface GigabitEthernet0/0/0, changed state to up`,
          why: "Router interfaces are administratively down by default (for security). They must be manually enabled with 'no shutdown'. The IP address allows the router to route packets on this network segment.",
          tips: [
            "Always add descriptions to document connections",
            "Router interfaces DOWN by default, switch ports UP by default",
            "Use 'no shut' as shorthand for 'no shutdown'",
          ],
        },
        {
          taskName: "Configure IPv6 on Interface",
          goal: "Assign IPv6 address and enable IPv6 routing",
          steps: [
            {
              cmd: "ipv6 unicast-routing",
              desc: "Enable IPv6 routing globally (REQUIRED FIRST)",
            },
            {
              cmd: "interface gigabitEthernet 0/0/1",
              desc: "Enter interface configuration mode",
            },
            {
              cmd: "description Connection to Network B",
              desc: "Add interface description",
            },
            {
              cmd: "ipv6 address 2401:AAAA::1/64",
              desc: "Assign IPv6 address with /64 prefix",
            },
            { cmd: "no shutdown", desc: "Activate the interface" },
            { cmd: "exit", desc: "Return to global config mode" },
          ],
          fullExample: `R1(config)# ipv6 unicast-routing
R1(config)# interface gigabitEthernet 0/0/1
R1(config-if)# description Connection to Network B
R1(config-if)# ipv6 address 2401:AAAA::1/64
R1(config-if)# no shutdown
R1(config-if)# exit`,
          why: "IPv6 routing MUST be globally enabled with 'ipv6 unicast-routing' first. Without this command, the router won't forward IPv6 packets or send Router Advertisements for SLAAC.",
          tips: [
            "CRITICAL: Enable 'ipv6 unicast-routing' before configuring IPv6 addresses",
            "IPv6 addresses use /prefix notation instead of subnet masks",
            ":: in IPv6 represents consecutive zeros",
          ],
        },
        {
          taskName: "Configure Multiple Interfaces",
          goal: "Set up three router interfaces for inter-network routing",
          steps: [
            {
              cmd: "interface gigabitEthernet 0/0/0",
              desc: "Configure first interface",
            },
            {
              cmd: "ip address 192.168.1.10 255.255.255.0",
              desc: "Assign IP for Network 1",
            },
            { cmd: "no shutdown", desc: "Activate interface" },
            { cmd: "exit", desc: "Exit interface config" },
            {
              cmd: "interface gigabitEthernet 0/0/1",
              desc: "Configure second interface",
            },
            {
              cmd: "ip address 192.168.2.10 255.255.255.0",
              desc: "Assign IP for Network 2",
            },
            { cmd: "no shutdown", desc: "Activate interface" },
            { cmd: "exit", desc: "Exit interface config" },
            {
              cmd: "interface gigabitEthernet 0/0/2",
              desc: "Configure third interface",
            },
            {
              cmd: "ip address 192.168.3.10 255.255.255.0",
              desc: "Assign IP for Network 3",
            },
            { cmd: "no shutdown", desc: "Activate interface" },
            { cmd: "exit", desc: "Exit interface config" },
          ],
          fullExample: `R1(config)# interface gigabitEthernet 0/0/0
R1(config-if)# ip address 192.168.1.10 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit
R1(config)# interface gigabitEthernet 0/0/1
R1(config-if)# ip address 192.168.2.10 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit
R1(config)# interface gigabitEthernet 0/0/2
R1(config-if)# ip address 192.168.3.10 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit`,
          why: "Routers connect different networks. Each interface needs a unique IP address in its respective subnet. PCs on different subnets will use these IPs as their default gateway.",
          tips: [
            "Each interface must be on a different subnet",
            "The router IP becomes the default gateway for devices on that subnet",
            "Use .1, .254, or .10 for router IPs by convention",
          ],
        },
      ],
    },
    {
      title: "Setting Up DHCP Server",
      icon: <Network className="w-6 h-6" />,
      description: "Configure router as DHCP server for IPv4 and IPv6",
      tasks: [
        {
          taskName: "Configure IPv4 DHCP Server (Single Network)",
          goal: "Set up DHCP pool to automatically assign IPv4 addresses",
          steps: [
            { cmd: "ip dhcp pool LAN1", desc: "Create DHCP pool named LAN1" },
            {
              cmd: "network 192.168.1.0 255.255.255.0",
              desc: "Define network range for address assignment",
            },
            {
              cmd: "default-router 192.168.1.1",
              desc: "Specify default gateway for clients",
            },
            { cmd: "exit", desc: "Return to global config mode" },
          ],
          fullExample: `R1(config)# ip dhcp pool LAN1
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.1
R1(dhcp-config)# exit`,
          why: "DHCP automatically assigns IP addresses to clients, eliminating manual configuration. Clients also receive the default gateway needed to communicate outside their subnet. The router will automatically assign addresses from the network range (avoiding its own interface IP).",
          tips: [
            "The network address is the subnet's network ID, not a host IP",
            "default-router is the gateway IP (usually the router's interface IP)",
            "Optional: add 'dns-server' command for DNS configuration",
          ],
        },
        {
          taskName: "Configure IPv4 DHCP Server (Multiple Networks)",
          goal: "Set up DHCP for three different subnets",
          steps: [
            { cmd: "ip dhcp pool NETone", desc: "Create first DHCP pool" },
            {
              cmd: "network 192.168.1.0 255.255.255.0",
              desc: "Define Network 1 range",
            },
            {
              cmd: "default-router 192.168.1.254",
              desc: "Set Network 1 gateway",
            },
            { cmd: "exit", desc: "Exit pool config" },
            { cmd: "ip dhcp pool NETtwo", desc: "Create second DHCP pool" },
            {
              cmd: "network 192.168.2.0 255.255.255.0",
              desc: "Define Network 2 range",
            },
            {
              cmd: "default-router 192.168.2.254",
              desc: "Set Network 2 gateway",
            },
            { cmd: "exit", desc: "Exit pool config" },
          ],
          fullExample: `R1(config)# ip dhcp pool NETone
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.254
R1(dhcp-config)# exit
R1(config)# ip dhcp pool NETtwo
R1(dhcp-config)# network 192.168.2.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.2.254
R1(dhcp-config)# exit`,
          why: "When a router connects multiple subnets, each subnet needs its own DHCP pool. The router automatically determines which pool to use based on which interface the DHCP request arrives on.",
          tips: [
            "Use descriptive pool names",
            "Each pool must have unique network range",
            "Gateway must match router's interface IP on that subnet",
          ],
        },
        {
          taskName: "Configure IPv6 DHCP Server (Stateful)",
          goal: "Set up DHCPv6 for complete IPv6 address assignment",
          steps: [
            {
              cmd: "ipv6 unicast-routing",
              desc: "Enable IPv6 routing (required)",
            },
            {
              cmd: "ipv6 dhcp pool LAN1",
              desc: "Create DHCPv6 pool named LAN1",
            },
            {
              cmd: "address prefix 2401:AAAA::/64",
              desc: "Define IPv6 address prefix for pool",
            },
            {
              cmd: "prefix-delegation pool LAN1",
              desc: "Enable prefix delegation",
            },
            { cmd: "exit", desc: "Return to global config mode" },
            {
              cmd: "ipv6 local pool LAN1 2401:AAAA::/112 64",
              desc: "Create local IPv6 address pool",
            },
            {
              cmd: "interface gigabitEthernet 0/0/0",
              desc: "Enter interface where DHCP will be active",
            },
            {
              cmd: "ipv6 address 2401:AAAA::FFFF/64",
              desc: "Assign interface IPv6 address",
            },
            {
              cmd: "ipv6 dhcp server LAN1",
              desc: "Enable DHCPv6 server on interface",
            },
            { cmd: "ipv6 enable", desc: "Enable IPv6 on interface" },
            { cmd: "no shutdown", desc: "Activate interface" },
            { cmd: "exit", desc: "Return to global config mode" },
          ],
          fullExample: `R1(config)# ipv6 unicast-routing
R1(config)# ipv6 dhcp pool LAN1
R1(config-dhcpv6)# address prefix 2401:AAAA::/64
R1(config-dhcpv6)# prefix-delegation pool LAN1
R1(config-dhcpv6)# exit
R1(config)# ipv6 local pool LAN1 2401:AAAA::/112 64
R1(config)# interface gigabitEthernet 0/0/0
R1(config-if)# ipv6 address 2401:AAAA::FFFF/64
R1(config-if)# ipv6 dhcp server LAN1
R1(config-if)# ipv6 enable
R1(config-if)# no shutdown
R1(config-if)# exit`,
          why: "DHCPv6 stateful provides complete address configuration including DNS servers. Unlike SLAAC (autoconfiguration), DHCPv6 stateful gives the server full control over address assignment and tracking.",
          tips: [
            "IPv6 has three address assignment methods: Static, SLAAC, and DHCPv6",
            "Stateful DHCPv6 is more complex but provides better tracking",
            "The /112 pool provides 65,536 addresses from the /64 subnet",
          ],
        },
        {
          taskName: "Configure IPv6 Autoconfiguration (SLAAC)",
          goal: "Enable IPv6 SLAAC for automatic address assignment",
          steps: [
            {
              cmd: "ipv6 unicast-routing",
              desc: "Enable IPv6 routing globally",
            },
            {
              cmd: "interface gigabitEthernet 0/0/0",
              desc: "Enter interface config",
            },
            {
              cmd: "ipv6 address 2401:AAAA::FFFF/64",
              desc: "Assign IPv6 address to interface",
            },
            { cmd: "no shutdown", desc: "Activate interface" },
            { cmd: "exit", desc: "Exit interface config" },
          ],
          fullExample: `R1(config)# ipv6 unicast-routing
R1(config)# interface gigabitEthernet 0/0/0
R1(config-if)# ipv6 address 2401:AAAA::FFFF/64
R1(config-if)# no shutdown
R1(config-if)# exit`,
          why: "When 'ipv6 unicast-routing' is enabled, the router automatically sends Router Advertisement (RA) messages. Clients use these RAs to autoconfigure their IPv6 addresses using SLAAC (Stateless Address Autoconfiguration). This is simpler than DHCPv6 but provides less control.",
          tips: [
            "SLAAC is the simplest IPv6 address assignment method",
            "Router Advertisements are sent automatically every 200 seconds",
            "Clients generate their own address using the prefix from RA",
            "No server-side database of assigned addresses",
          ],
        },
      ],
    },
    {
      title: "Enabling SSH Access",
      icon: <Terminal className="w-6 h-6" />,
      description: "Configure secure remote access using SSH protocol",
      tasks: [
        {
          taskName: "Complete SSH Setup",
          goal: "Enable SSH and disable insecure Telnet access",
          steps: [
            {
              cmd: "ip domain-name CCNA-lab.com",
              desc: "Set domain name (required for SSH key generation)",
            },
            {
              cmd: "username admin privilege 15 secret adminpass1",
              desc: "Create local admin user with full privileges (level 15)",
            },
            {
              cmd: "crypto key generate rsa general-keys modulus 1024",
              desc: "Generate 1024-bit RSA encryption keys",
            },
            { cmd: "line vty 0 4", desc: "Enter VTY configuration mode" },
            {
              cmd: "transport input ssh",
              desc: "Allow ONLY SSH connections (block Telnet)",
            },
            {
              cmd: "login local",
              desc: "Use local username database for authentication",
            },
            { cmd: "exit", desc: "Return to global config mode" },
          ],
          fullExample: `R1(config)# ip domain-name CCNA-lab.com
R1(config)# username admin privilege 15 secret adminpass1
R1(config)# crypto key generate rsa general-keys modulus 1024
The name for the keys will be: R1.CCNA-lab.com
Choose the size of the key modulus in the range of 360 to 2048
How many bits in the modulus [512]: 1024
% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]

R1(config)# line vty 0 4
R1(config-line)# transport input ssh
R1(config-line)# login local
R1(config-line)# exit`,
          why: "SSH provides encrypted remote access, protecting passwords and data from eavesdropping. Telnet sends everything in plain text and should NEVER be used. The hostname and domain name combine to create the FQDN (R1.CCNA-lab.com) used for RSA key generation. 'privilege 15' gives full admin rights.",
          tips: [
            "Hostname + Domain = FQDN for key generation (R1.CCNA-lab.com)",
            "Use minimum 1024-bit modulus (2048 is more secure)",
            "'transport input ssh' blocks Telnet completely",
            "'login local' uses username/password instead of line password",
          ],
        },
        {
          taskName: "Connect via SSH from PC",
          goal: "Remotely access router using SSH client",
          steps: [
            {
              cmd: "ssh -l admin 192.168.1.1",
              desc: "Connect to router IP using username 'admin'",
            },
            {
              cmd: "[Enter password when prompted]",
              desc: "Enter the password (adminpass1)",
            },
          ],
          fullExample: `PC> ssh -l admin 192.168.1.1
Password: [adminpass1]

R1>`,
          why: "SSH encrypts all communication between the client and router. The -l flag specifies the username. After successful login, you can manage the router remotely as if connected via console cable.",
          tips: [
            "Format: ssh -l [username] [router-IP]",
            "Telnet is insecure: telnet 192.168.1.1",
            "SSH uses port 22, Telnet uses port 23",
          ],
        },
      ],
    },
    {
      title: "Switch Configuration",
      icon: <Network className="w-6 h-6" />,
      description: "Basic switch setup and management",
      tasks: [
        {
          taskName: "Configure Switch Management",
          goal: "Set up switch for remote management via IP address",
          steps: [
            { cmd: "enable", desc: "Enter privileged mode" },
            { cmd: "configure terminal", desc: "Enter global config mode" },
            { cmd: "hostname S1", desc: "Assign switch hostname" },
            {
              cmd: "interface vlan 1",
              desc: "Enter VLAN 1 (management VLAN) configuration",
            },
            {
              cmd: "ip address 192.168.1.2 255.255.255.0",
              desc: "Assign IP to management interface",
            },
            {
              cmd: "no shutdown",
              desc: "Activate VLAN 1 interface (CRITICAL)",
            },
            { cmd: "exit", desc: "Return to global config mode" },
            {
              cmd: "ip default-gateway 192.168.1.1",
              desc: "Set default gateway for switch management",
            },
          ],
          fullExample: `Switch> enable
Switch# configure terminal
Switch(config)# hostname S1
S1(config)# interface vlan 1
S1(config-if)# ip address 192.168.1.2 255.255.255.0
S1(config-if)# no shutdown
S1(config-if)# exit
S1(config)# ip default-gateway 192.168.1.1`,
          why: "Layer 2 switches need an IP address on VLAN 1 (the default management VLAN) for remote management. Without 'no shutdown' on VLAN 1, the IP is configured but inactive, and remote access won't work. The default gateway allows the switch to communicate with devices on other networks.",
          tips: [
            "CRITICAL: Must use 'no shutdown' on interface vlan 1",
            "Switch IPs are for management only (Layer 2 switches don't route)",
            "Default gateway is usually the router's IP",
            "Verify with: show ip interface brief",
          ],
        },
        {
          taskName: "Complete Switch Security Setup",
          goal: "Secure all access points to the switch",
          steps: [
            { cmd: "hostname S1", desc: "Set hostname" },
            {
              cmd: "enable secret class",
              desc: "Set privileged mode password",
            },
            { cmd: "line console 0", desc: "Configure console" },
            { cmd: "password cisco", desc: "Set console password" },
            { cmd: "login", desc: "Enable console password checking" },
            { cmd: "exit", desc: "Exit line config" },
            {
              cmd: "line vty 0 15",
              desc: "Configure VTY lines (switches have 0-15)",
            },
            { cmd: "password cisco", desc: "Set VTY password" },
            { cmd: "login", desc: "Enable VTY password checking" },
            { cmd: "exit", desc: "Exit line config" },
            {
              cmd: "service password-encryption",
              desc: "Encrypt passwords in config",
            },
          ],
          fullExample: `S1(config)# hostname S1
S1(config)# enable secret class
S1(config)# line console 0
S1(config-line)# password cisco
S1(config-line)# login
S1(config-line)# exit
S1(config)# line vty 0 15
S1(config-line)# password cisco
S1(config-line)# login
S1(config-line)# exit
S1(config)# service password-encryption`,
          why: "Complete security requires protecting console access (physical), VTY access (remote), and privileged mode. Switches have 16 VTY lines (0-15) compared to routers which have 5 (0-4).",
          tips: [
            "Switches: line vty 0 15 (16 lines)",
            "Routers: line vty 0 4 (5 lines)",
            "Use same security principles as routers",
          ],
        },
        {
          taskName: "Reset Switch to Factory Defaults",
          goal: "Completely erase switch configuration and VLAN database",
          steps: [
            { cmd: "delete flash:vlan.dat", desc: "Delete VLAN database file" },
            { cmd: "[Press Enter]", desc: "Confirm filename" },
            { cmd: "[Press Enter]", desc: "Confirm deletion" },
            {
              cmd: "erase startup-config",
              desc: "Erase startup configuration from NVRAM",
            },
            { cmd: "[Press Enter]", desc: "Confirm erasure" },
            { cmd: "reload", desc: "Restart the switch" },
            { cmd: "no", desc: "Don't save current config when prompted" },
            { cmd: "[Press Enter]", desc: "Confirm reload" },
          ],
          fullExample: `Switch# delete flash:vlan.dat
Delete filename [vlan.dat]? [Enter]
Delete flash:vlan.dat? [confirm] [Enter]

Switch# erase startup-config
Erasing the nvram filesystem will remove all files! Continue? [confirm] [Enter]
[OK]

Switch# reload
System configuration has been modified. Save? [yes/no]: no
Proceed with reload? [confirm] [Enter]`,
          why: "Complete reset requires TWO steps: (1) Delete vlan.dat to remove VLAN database, (2) Erase startup-config to remove configuration. Just doing one isn't enough. This returns the switch to factory default state.",
          tips: [
            "MUST delete both vlan.dat AND startup-config",
            "If vlan.dat doesn't exist, you'll see 'No such file' - that's OK",
            "Type 'no' when asked to save during reload",
            "After reload, type 'no' at setup dialog prompt",
          ],
        },
      ],
    },
    {
      title: "Verification & Troubleshooting",
      icon: <Check className="w-6 h-6" />,
      description: "Commands to verify and troubleshoot configurations",
      tasks: [
        {
          taskName: "Verify Interface Configuration",
          goal: "Check interface status and IP addresses",
          steps: [
            {
              cmd: "show ip interface brief",
              desc: "Quick summary of all interfaces",
            },
            {
              cmd: "show interface g0/0/0",
              desc: "Detailed info about specific interface",
            },
            { cmd: "show ip route", desc: "View routing table" },
          ],
          fullExample: `R1# show ip interface brief
Interface          IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0 192.168.1.1     YES manual up                    up
GigabitEthernet0/1 192.168.2.1     YES manual up                    up

R1# show interface gigabitEthernet 0/0/0
GigabitEthernet0/0 is up, line protocol is up
  Hardware is iGbE, address is 0001.9717.1101
  Internet address is 192.168.1.1/24
  [... detailed statistics ...]

R1# show ip route
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area

C    192.168.1.0/24 is directly connected, GigabitEthernet0/0
C    192.168.2.0/24 is directly connected, GigabitEthernet0/1`,
          why: "'show ip interface brief' gives quick status overview. 'show interface' provides detailed statistics for troubleshooting. 'show ip route' shows how the router will forward packets - 'C' means directly connected networks.",
          tips: [
            "Status = Layer 1 (physical), Protocol = Layer 2 (data link)",
            "Both must be 'up' for interface to work",
            "'administratively down' = needs 'no shutdown'",
            "Use 'sh ip int br' as shorthand",
          ],
        },
        {
          taskName: "Verify Configuration Files",
          goal: "Check running and saved configurations",
          steps: [
            {
              cmd: "show running-config",
              desc: "Display current active config (RAM)",
            },
            {
              cmd: "show startup-config",
              desc: "Display saved config (NVRAM)",
            },
            {
              cmd: "show version",
              desc: "Display IOS version, uptime, hardware info",
            },
          ],
          fullExample: `R1# show running-config
Building configuration...
Current configuration : 1234 bytes
!
version 15.1
hostname R1
[... full configuration ...]

R1# show startup-config
Using 1234 out of 65536 bytes
!
version 15.1
hostname R1
[... saved configuration ...]

R1# show version
Cisco IOS Software, C1900 Software
Version 15.1(4)M4, RELEASE SOFTWARE (fc2)
System uptime is 2 hours, 34 minutes
[... version details ...]`,
          why: "Running-config is in RAM (active, but lost on reboot). Startup-config is in NVRAM (loaded on boot). 'show version' helps verify IOS version, hardware specs, and uptime for troubleshooting.",
          tips: [
            "Running-config = current settings (RAM, volatile)",
            "Startup-config = saved settings (NVRAM, permanent)",
            "Changes to running-config are lost unless saved",
            "Use 'show run | begin interface' to filter output",
          ],
        },
        {
          taskName: "Test Network Connectivity",
          goal: "Verify network communication between devices",
          steps: [
            {
              cmd: "ping 192.168.1.2",
              desc: "Test connectivity to IP address",
            },
            {
              cmd: "traceroute 192.168.1.2",
              desc: "Show path packets take to destination",
            },
          ],
          fullExample: `R1# ping 192.168.1.2
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.1.2, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms

R1# traceroute 192.168.1.2
Type escape sequence to abort.
Tracing the route to 192.168.1.2
  1 192.168.1.1 4 msec 4 msec 4 msec
  2 192.168.1.2 8 msec 8 msec 8 msec`,
          why: "Ping tests basic connectivity using ICMP echo requests. '!' means success, '.' means timeout. Traceroute shows each hop (router) packets traverse, useful for finding where connectivity fails.",
          tips: [
            "Ping symbols: ! = success, . = timeout, U = unreachable",
            "From PC command prompt use: tracert (Windows)",
            "From router/switch CLI use: traceroute",
            "Ping tests Layer 3 connectivity",
          ],
        },
        {
          taskName: "Check DHCP Operation",
          goal: "Verify DHCP server is assigning addresses",
          steps: [
            { cmd: "show ip dhcp binding", desc: "Display active DHCP leases" },
            { cmd: "show ip dhcp pool", desc: "Display DHCP pool statistics" },
          ],
          fullExample: `R1# show ip dhcp binding
IP address       Client-ID/              Lease expiration        Type
                 Hardware address
192.168.1.10     0001.9717.1101          Mar 02 2013 12:00 AM    Automatic
192.168.1.11     0001.9717.1102          Mar 02 2013 12:00 AM    Automatic

R1# show ip dhcp pool
Pool LAN1 :
 Utilization mark (high/low)    : 100 / 0
 Subnet size (first/next)       : 0 / 0
 Total addresses                : 254
 Leased addresses               : 2
 Pending event                  : none`,
          why: "These commands verify DHCP is working correctly. 'show ip dhcp binding' shows which IPs were assigned to which MAC addresses. 'show ip dhcp pool' shows pool utilization and statistics.",
          tips: [
            "Check bindings to see active leases",
            "If no bindings appear, DHCP might not be working",
            "Verify DHCP pool configuration if no addresses are leased",
          ],
        },
      ],
    },
    {
      title: "Saving & Managing Configuration",
      icon: <Save className="w-6 h-6" />,
      description: "Save, backup, and manage router/switch configurations",
      tasks: [
        {
          taskName: "Save Running Configuration",
          goal: "Save current config to survive reboot",
          steps: [
            {
              cmd: "copy running-config startup-config",
              desc: "Copy RAM config to NVRAM",
            },
            { cmd: "[Press Enter]", desc: "Confirm destination filename" },
          ],
          fullExample: `R1# copy running-config startup-config
Destination filename [startup-config]? [Enter]
Building configuration...
[OK]
R1#`,
          why: "All configuration changes are made to running-config (RAM), which is volatile and lost on reboot. Copying to startup-config (NVRAM) makes changes permanent. Without this step, all your work is lost when the device restarts!",
          tips: [
            "Shorthand: copy run start",
            "Even shorter: wr (write memory)",
            "ALWAYS save after making changes",
            "Unsaved changes show warning on reload/exit",
          ],
        },
        {
          taskName: "Reset Device Configuration",
          goal: "Erase configuration and restart device",
          steps: [
            {
              cmd: "erase startup-config",
              desc: "Delete startup configuration",
            },
            { cmd: "[Press Enter]", desc: "Confirm erasure" },
            { cmd: "reload", desc: "Restart the device" },
            { cmd: "no", desc: "Don't save current config" },
            { cmd: "[Press Enter]", desc: "Confirm reload" },
          ],
          fullExample: `R1# erase startup-config
Erasing the nvram filesystem will remove all files! Continue? [confirm] [Enter]
[OK]
Erase of nvram: complete

R1# reload
System configuration has been modified. Save? [yes/no]: no
Proceed with reload? [confirm] [Enter]`,
          why: "This completely resets the device to factory defaults. After reload, running-config will be blank because there's no startup-config to load. Essential for starting fresh or redeploying equipment.",
          tips: [
            "Running-config is not affected until reload",
            "Type 'no' when asked to save",
            "For switches, also delete vlan.dat file",
            "Device boots with blank config after reload",
          ],
        },
        {
          taskName: "Compare Running vs Startup Config",
          goal: "See what changes haven't been saved",
          steps: [
            { cmd: "show running-config", desc: "View current active config" },
            { cmd: "show startup-config", desc: "View saved config" },
          ],
          fullExample: `R1# show running-config
[Shows current configuration with recent changes]

R1# show startup-config
[Shows last saved configuration]`,
          why: "Compare these two to see which changes haven't been saved yet. Any differences will be lost on reboot unless you 'copy run start'.",
          tips: [
            "Look for the 'System configuration modified' message",
            "This message appears when running differs from startup",
            "Always save after verification",
          ],
        },
      ],
    },
    {
      title: "Common Lab Scenarios",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Step-by-step guides for typical lab exercises",
      tasks: [
        {
          taskName: "Connect Two Networks Through Router",
          goal: "Allow PCs on different subnets to communicate",
          steps: [
            {
              cmd: "Router Setup:",
              desc: "Configure two interfaces with different subnets",
            },
            { cmd: "interface g0/0/0", desc: "First interface" },
            {
              cmd: "ip address 192.168.1.1 255.255.255.0",
              desc: "Network 1 gateway",
            },
            { cmd: "no shutdown", desc: "Activate" },
            { cmd: "exit", desc: "" },
            { cmd: "interface g0/0/1", desc: "Second interface" },
            {
              cmd: "ip address 192.168.2.1 255.255.255.0",
              desc: "Network 2 gateway",
            },
            { cmd: "no shutdown", desc: "Activate" },
            { cmd: "PC Setup:", desc: "Configure PCs with router as gateway" },
            { cmd: "PC-A: IP 192.168.1.10, Gateway 192.168.1.1", desc: "" },
            { cmd: "PC-B: IP 192.168.2.10, Gateway 192.168.2.1", desc: "" },
          ],
          fullExample: `ROUTER:
R1(config)# interface g0/0/0
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit
R1(config)# interface g0/0/1
R1(config-if)# ip address 192.168.2.1 255.255.255.0
R1(config-if)# no shutdown

PC-A (Desktop > IP Configuration):
IP Address: 192.168.1.10
Subnet Mask: 255.255.255.0
Default Gateway: 192.168.1.1

PC-B (Desktop > IP Configuration):
IP Address: 192.168.2.10
Subnet Mask: 255.255.255.0
Default Gateway: 192.168.2.1

Test: ping 192.168.2.10 from PC-A should succeed`,
          why: "Routers connect different networks. Each interface needs an IP in its respective subnet. PCs use the router's interface IP as their default gateway to reach other subnets.",
          tips: [
            "Each interface must be on different subnet",
            "Gateway IP = Router's interface IP",
            "Test with ping between PCs",
            "Use 'show ip route' on router to see connected networks",
          ],
        },
        {
          taskName: "Set Up Router with DHCP for Three Subnets",
          goal: "Create a router that serves DHCP to three networks",
          steps: [
            { cmd: "Configure Interfaces:", desc: "" },
            { cmd: "int g0/0/0", desc: "" },
            { cmd: "ip address 192.168.1.10 255.255.255.0", desc: "" },
            { cmd: "no shut", desc: "" },
            { cmd: "int g0/0/1", desc: "" },
            { cmd: "ip address 192.168.2.10 255.255.255.0", desc: "" },
            { cmd: "no shut", desc: "" },
            { cmd: "int g0/0/2", desc: "" },
            { cmd: "ip address 192.168.3.10 255.255.255.0", desc: "" },
            { cmd: "no shut", desc: "" },
            { cmd: "Configure DHCP Pools:", desc: "" },
            { cmd: "ip dhcp pool NET1", desc: "" },
            { cmd: "network 192.168.1.0 255.255.255.0", desc: "" },
            { cmd: "default-router 192.168.1.10", desc: "" },
            { cmd: "ip dhcp pool NET2", desc: "" },
            { cmd: "network 192.168.2.0 255.255.255.0", desc: "" },
            { cmd: "default-router 192.168.2.10", desc: "" },
            { cmd: "ip dhcp pool NET3", desc: "" },
            { cmd: "network 192.168.3.0 255.255.255.0", desc: "" },
            { cmd: "default-router 192.168.3.10", desc: "" },
          ],
          fullExample: `R1(config)# interface g0/0/0
R1(config-if)# ip address 192.168.1.10 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# interface g0/0/1
R1(config-if)# ip address 192.168.2.10 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# interface g0/0/2
R1(config-if)# ip address 192.168.3.10 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit

R1(config)# ip dhcp pool NET1
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.10
R1(dhcp-config)# exit
R1(config)# ip dhcp pool NET2
R1(dhcp-config)# network 192.168.2.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.2.10
R1(dhcp-config)# exit
R1(config)# ip dhcp pool NET3
R1(dhcp-config)# network 192.168.3.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.3.10
R1(dhcp-config)# exit

Set PCs to DHCP mode, they'll auto-receive IPs and gateways`,
          why: "This is a common lab scenario where a single router serves multiple networks. Each subnet gets its own DHCP pool. The router automatically determines which pool to use based on the interface the DHCP request comes from.",
          tips: [
            "Create one pool per subnet",
            "Gateway matches router interface IP",
            "Router auto-excludes its own IP from assignment",
            "Set PCs to DHCP mode to test",
          ],
        },
      ],
    },
  ];

  const questions = [
    {
      q: "What's the difference between running-config and startup-config?",
      a: "Running-config is the active configuration in RAM (volatile) - it's what the device is currently using. Startup-config is stored in NVRAM (non-volatile) - it loads when the device boots. Changes to running-config are LOST on reboot unless saved with 'copy run start'.",
    },
    {
      q: "Why do router interfaces need 'no shutdown' but switch ports don't?",
      a: "Router interfaces are administratively down by default for security (they might connect to untrusted networks). Switch ports are up by default because they're typically for internal trusted network connections. This is a deliberate security design choice.",
    },
    {
      q: "What happens if I reload without saving the configuration?",
      a: "ALL changes to running-config are lost! The device boots with the old startup-config from NVRAM. If there's no startup-config (after 'erase startup-config'), it boots blank with no configuration at all.",
    },
    {
      q: "Why is 'ipv6 unicast-routing' required for IPv6?",
      a: "This global command enables the router to: (1) Forward IPv6 packets between interfaces, (2) Send Router Advertisement messages for SLAAC autoconfiguration. Without it, IPv6 simply won't work - the router won't route IPv6 traffic.",
    },
    {
      q: "What's the difference between 'enable password' and 'enable secret'?",
      a: "'enable password' stores passwords in plain text (visible in config with 'show run'). 'enable secret' uses MD5 encryption which is much more secure. If both are configured, 'enable secret' takes precedence. ALWAYS use 'enable secret' in production.",
    },
    {
      q: "Why does SSH need both hostname and domain-name?",
      a: "The hostname and domain name combine to create the FQDN (Fully Qualified Domain Name) used as the identity for RSA key generation. For example: hostname 'R1' + domain 'cisco.com' = keys named 'R1.cisco.com'. Both are required before generating RSA keys.",
    },
    {
      q: "What is APIPA and when does it appear?",
      a: "APIPA (Automatic Private IP Addressing) assigns an IP in the range 169.254.0.1 to 169.254.255.254 when a DHCP client cannot find a DHCP server. If you see 169.254.x.x addresses, it means DHCP failed. These addresses are NOT routable beyond the local subnet.",
    },
    {
      q: "Why use 'service password-encryption' if it's weak?",
      a: "Type 7 encryption used by this command is easily decrypted online and only protects against casual viewing (shoulder surfing). It's better than plain text but NOT secure against determined attackers. Always use 'enable secret' and 'username secret' for strong protection.",
    },
    {
      q: "What does 'C' mean in 'show ip route' output?",
      a: "'C' stands for 'Connected' and indicates networks directly connected to the router's interfaces. These routes are automatically added when you configure an IP address on an interface and enable it with 'no shutdown'. No routing protocol needed for connected networks.",
    },
    {
      q: "How do I know if my configuration was saved?",
      a: "If you see 'System configuration has been modified. Save?' when exiting or reloading, changes haven't been saved. Compare 'show run' vs 'show start' - any differences will be lost on reboot. Always use 'copy run start' after making changes.",
    },
    {
      q: "Why won't my switch respond to pings even though it has an IP?",
      a: "Most likely you forgot 'no shutdown' on interface VLAN 1! Even though you configured an IP address, the VLAN 1 interface is administratively down by default. Use 'show ip interface brief' to check - you need 'no shut' to activate it.",
    },
    {
      q: "What's the difference between DHCP, Static, and SLAAC for IPv6?",
      a: "Static: Manually configure each address. SLAAC (Stateless Autoconfiguration): Router sends prefix, clients auto-generate their own address. DHCPv6 Stateful: Server assigns and tracks all addresses. SLAAC is simplest but gives less control. DHCPv6 provides full server control and tracking.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Cisco Packet Tracer
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100 mt-1">
                Task-Based Command Guide
              </p>
              <p className="text-xs sm:text-sm text-blue-200 mt-2">
                Organized by workflows and real-world scenarios
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-blue-50 p-4 border-b-2 border-blue-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Quick Jump:
          </h3>
          <div className="flex flex-wrap gap-2">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(idx)}
                className="px-3 py-1 bg-white text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors shadow-sm"
              >
                {section.title}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("qa")}
              className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-medium hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Q&A
            </button>
          </div>
        </div>

        {/* Task Sections */}
        <div className="p-3 sm:p-4 lg:p-8">
          {sections.map((section, sectionIdx) => (
            <div
              key={sectionIdx}
              id={`section-${sectionIdx}`}
              className="mb-6 sm:mb-8 scroll-mt-20"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(sectionIdx)}
                className="w-full flex items-center justify-between gap-3 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <div className="text-left">
                    <h2 className="text-lg sm:text-xl font-bold">
                      {section.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-100 mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>
                {expandedSections[sectionIdx] ? (
                  <ChevronUp className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0" />
                )}
              </button>

              {/* Tasks */}
              {expandedSections[sectionIdx] && (
                <div className="mt-4 space-y-4">
                  {section.tasks.map((task, taskIdx) => {
                    const taskKey = `${sectionIdx}-${taskIdx}`;
                    return (
                      <div
                        key={taskIdx}
                        className="bg-gray-50 rounded-lg border-2 border-gray-200 overflow-hidden shadow-sm"
                      >
                        {/* Task Header */}
                        <button
                          onClick={() => toggleTask(taskKey)}
                          className="w-full flex items-center justify-between gap-2 p-4 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <div className="text-left">
                            <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                              {task.taskName}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                              <span className="font-semibold">Goal:</span>{" "}
                              {task.goal}
                            </p>
                          </div>
                          {expandedTasks[taskKey] ? (
                            <ChevronUp className="w-5 h-5 flex-shrink-0 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-500" />
                          )}
                        </button>

                        {/* Task Details */}
                        {expandedTasks[taskKey] && (
                          <div className="p-4 space-y-4 border-t-2 border-gray-200">
                            {/* Step-by-Step */}
                            <div>
                              <h4 className="font-semibold text-gray-700 text-sm mb-2">
                                📝 Step-by-Step:
                              </h4>
                              <div className="space-y-2">
                                {task.steps.map((step, stepIdx) => (
                                  <div
                                    key={stepIdx}
                                    className="flex gap-3 items-start"
                                  >
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">
                                      {stepIdx + 1}
                                    </span>
                                    <div className="flex-1">
                                      <code className="text-xs sm:text-sm bg-gray-800 text-green-400 px-2 py-1 rounded font-mono">
                                        {step.cmd}
                                      </code>
                                      <p className="text-xs text-gray-600 mt-1">
                                        {step.desc}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Full Example */}
                            <div>
                              <h4 className="font-semibold text-gray-700 text-sm mb-2">
                                💻 Complete Example:
                              </h4>
                              <pre className="p-3 bg-gray-900 text-green-400 rounded font-mono text-xs overflow-x-auto whitespace-pre-wrap">
                                {task.fullExample}
                              </pre>
                            </div>

                            {/* Why This Works */}
                            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                              <h4 className="font-semibold text-blue-800 text-sm mb-1">
                                💡 Why This Works:
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                {task.why}
                              </p>
                            </div>

                            {/* Tips */}
                            {task.tips && task.tips.length > 0 && (
                              <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                                <h4 className="font-semibold text-yellow-800 text-sm mb-2">
                                  ⚡ Pro Tips:
                                </h4>
                                <ul className="space-y-1">
                                  {task.tips.map((tip, tipIdx) => (
                                    <li
                                      key={tipIdx}
                                      className="text-xs sm:text-sm text-gray-700 flex gap-2"
                                    >
                                      <span className="text-yellow-600">•</span>
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Q&A Section */}
        <div
          id="section-qa"
          className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 scroll-mt-20"
        >
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-indigo-600">
            <HelpCircle className="w-8 h-8 text-indigo-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Common Questions & Answers
            </h2>
          </div>

          <div className="space-y-3">
            {questions.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-lg border-l-4 border-indigo-600 shadow-md overflow-hidden"
              >
                <summary className="cursor-pointer p-4 font-bold text-gray-800 text-sm sm:text-base hover:bg-indigo-50 transition-colors list-none">
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex gap-2">
                      <span className="text-indigo-600">Q{idx + 1}:</span>
                      <span>{item.q}</span>
                    </span>
                    <ChevronDown className="w-5 h-5 flex-shrink-0 group-open:rotate-180 transition-transform text-indigo-600" />
                  </div>
                </summary>
                <div className="p-4 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                  <span className="font-semibold text-indigo-600">Answer:</span>{" "}
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 text-center">
          <p className="text-lg font-semibold">Computer Networks - ICT1163</p>
          <p className="text-sm font-medium mt-2">
            University of Ruhuna - Faculty of Technology
          </p>
          <p className="text-sm font-medium mt-1 text-blue-100">
            Created by Hasitha Sandakelum
          </p>
          <p className="text-blue-200 text-sm mt-3">
            💡 Tip: Practice each task multiple times until it becomes second
            nature!
          </p>
        </div>
      </div>
    </div>
  );
}
