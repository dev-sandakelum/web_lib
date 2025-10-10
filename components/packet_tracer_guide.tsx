import React from 'react';
import { BookOpen, Terminal, Network, Settings, HelpCircle } from 'lucide-react';

export default function PacketTracerGuide() {
  const sections = [
    {
      title: "Basic Router Commands",
      icon: <Network className="w-6 h-6" />,
      commands: [
        {
          command: "enable",
          syntax: "Router> enable",
          description: "Enters privileged EXEC mode from user EXEC mode. This mode provides access to all router commands and is password-protected.",
          why: "Required to configure the router, view sensitive information, and execute privileged commands.",
          example: "Router> enable\nRouter#",
          alternatives: ["en (shorthand)"]
        },
        {
          command: "configure terminal",
          syntax: "Router# configure terminal",
          description: "Enters global configuration mode from privileged EXEC mode. This is where you make changes to the running configuration.",
          why: "All configuration changes to the router must be made from this mode.",
          example: "Router# configure terminal\nRouter(config)#",
          alternatives: ["config t (shorthand)", "conf t"]
        },
        {
          command: "hostname",
          syntax: "Router(config)# hostname [name]",
          description: "Assigns a unique name to the router. This name appears in the command prompt.",
          why: "Makes it easier to identify routers in a network, especially when managing multiple devices.",
          example: "Router(config)# hostname R1\nR1(config)#",
          alternatives: []
        },
        {
          command: "no ip domain-lookup",
          syntax: "Router(config)# no ip domain-lookup",
          description: "Disables DNS lookup on the router. Prevents the router from trying to resolve mistyped commands as domain names.",
          why: "Speeds up the CLI by preventing delays when you mistype commands.",
          example: "R1(config)# no ip domain-lookup",
          alternatives: []
        }
      ]
    },
    {
      title: "Password & Security Commands",
      icon: <Settings className="w-6 h-6" />,
      commands: [
        {
          command: "enable secret",
          syntax: "Router(config)# enable secret [password]",
          description: "Sets an encrypted password for privileged EXEC mode. Uses MD5 encryption.",
          why: "Provides secure access control to privileged mode. Takes precedence over 'enable password'.",
          example: "R1(config)# enable secret cisco12345",
          alternatives: ["enable password (unencrypted, less secure)"]
        },
        {
          command: "line console 0",
          syntax: "Router(config)# line console 0",
          description: "Enters line configuration mode for the console port (physical access).",
          why: "Secures console access with passwords and timeout settings.",
          example: "R1(config)# line con 0\nR1(config-line)#",
          alternatives: ["line con 0"]
        },
        {
          command: "password",
          syntax: "Router(config-line)# password [password]",
          description: "Sets a password for the current line (console or VTY).",
          why: "Prevents unauthorized access through console or remote connections.",
          example: "R1(config-line)# password ciscoconpass",
          alternatives: []
        },
        {
          command: "login",
          syntax: "Router(config-line)# login",
          description: "Enables password checking on the line. Without this, password is set but not enforced.",
          why: "Activates the password protection on console or VTY lines.",
          example: "R1(config-line)# login",
          alternatives: ["login local (uses local database)"]
        },
        {
          command: "exec-timeout",
          syntax: "Router(config-line)# exec-timeout [minutes] [seconds]",
          description: "Sets the timeout for idle sessions. After this time, the session closes automatically.",
          why: "Security measure to prevent unauthorized access through unattended sessions.",
          example: "R1(config-line)# exec-timeout 5 0\n(5 minutes, 0 seconds)",
          alternatives: ["exec-timeout 0 0 (disables timeout)"]
        },
        {
          command: "service password-encryption",
          syntax: "Router(config)# service password-encryption",
          description: "Encrypts all plain text passwords in the configuration file using Cisco Type 7 encryption.",
          why: "Adds basic security by hiding passwords in configuration files. Note: Type 7 is weak encryption.",
          example: "R1(config)# service password-encryption",
          alternatives: []
        },
        {
          command: "security passwords min-length",
          syntax: "Router(config)# security passwords min-length [number]",
          description: "Sets minimum password length requirement for all passwords.",
          why: "Enforces password policy to improve security.",
          example: "R1(config)# security passwords min-length 10",
          alternatives: []
        }
      ]
    },
    {
      title: "Interface Configuration Commands",
      icon: <Network className="w-6 h-6" />,
      commands: [
        {
          command: "interface",
          syntax: "Router(config)# interface [type] [number]",
          description: "Enters interface configuration mode for a specific interface.",
          why: "Required to configure IP addresses, descriptions, and other interface-specific settings.",
          example: "R1(config)# interface gigabitEthernet 0/0/0\nR1(config-if)#",
          alternatives: ["int g0/0 (shorthand)"]
        },
        {
          command: "ip address",
          syntax: "Router(config-if)# ip address [ip] [subnet-mask]",
          description: "Assigns an IPv4 address and subnet mask to an interface.",
          why: "Interfaces need IP addresses to route packets and communicate on networks.",
          example: "R1(config-if)# ip address 192.168.1.1 255.255.255.0",
          alternatives: ["ip address dhcp (get IP from DHCP)"]
        },
        {
          command: "ipv6 address",
          syntax: "Router(config-if)# ipv6 address [ipv6]/[prefix]",
          description: "Assigns an IPv6 address and prefix length to an interface.",
          why: "Enables IPv6 routing on the interface for modern networking.",
          example: "R1(config-if)# ipv6 address 2401:AAAA::1/64",
          alternatives: ["ipv6 enable (enables IPv6 with link-local only)"]
        },
        {
          command: "description",
          syntax: "Router(config-if)# description [text]",
          description: "Adds a description to an interface for documentation purposes.",
          why: "Helps identify the purpose or connection of each interface for troubleshooting.",
          example: "R1(config-if)# description Connection to PC-A",
          alternatives: []
        },
        {
          command: "no shutdown",
          syntax: "Router(config-if)# no shutdown",
          description: "Activates an interface. By default, router interfaces are administratively down.",
          why: "Interfaces must be manually enabled to start forwarding traffic.",
          example: "R1(config-if)# no shutdown\n%LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to up",
          alternatives: ["shutdown (disables interface)"]
        }
      ]
    },
    {
      title: "DHCP Configuration Commands",
      icon: <Settings className="w-6 h-6" />,
      commands: [
        {
          command: "ip dhcp pool",
          syntax: "Router(config)# ip dhcp pool [pool-name]",
          description: "Creates a DHCP pool and enters DHCP configuration mode for IPv4.",
          why: "Allows the router to act as a DHCP server, automatically assigning IP addresses to clients.",
          example: "R1(config)# ip dhcp pool LAN1\nR1(dhcp-config)#",
          alternatives: []
        },
        {
          command: "network",
          syntax: "Router(dhcp-config)# network [network-id] [subnet-mask]",
          description: "Specifies the network range for the DHCP pool to assign addresses from.",
          why: "Defines which IP addresses can be allocated to DHCP clients.",
          example: "R1(dhcp-config)# network 192.168.1.0 255.255.255.0",
          alternatives: []
        },
        {
          command: "default-router",
          syntax: "Router(dhcp-config)# default-router [ip-address]",
          description: "Specifies the default gateway that will be assigned to DHCP clients.",
          why: "Clients need a default gateway to communicate outside their local network.",
          example: "R1(dhcp-config)# default-router 192.168.1.1",
          alternatives: []
        },
        {
          command: "ipv6 dhcp pool",
          syntax: "Router(config)# ipv6 dhcp pool [pool-name]",
          description: "Creates a DHCPv6 pool and enters DHCPv6 configuration mode.",
          why: "Enables the router to provide IPv6 addresses automatically to clients.",
          example: "R1(config)# ipv6 dhcp pool LAN1\nR1(config-dhcpv6)#",
          alternatives: []
        },
        {
          command: "address prefix",
          syntax: "Router(config-dhcpv6)# address prefix [ipv6-prefix]/[length]",
          description: "Specifies the IPv6 address prefix for the DHCPv6 pool.",
          why: "Defines the range of IPv6 addresses available for assignment.",
          example: "R1(config-dhcpv6)# address prefix 2401:AAAA::/64",
          alternatives: []
        },
        {
          command: "ipv6 dhcp server",
          syntax: "Router(config-if)# ipv6 dhcp server [pool-name]",
          description: "Enables DHCPv6 server on an interface and associates it with a pool.",
          why: "Activates DHCP service on the specific interface for IPv6 clients.",
          example: "R1(config-if)# ipv6 dhcp server LAN1",
          alternatives: []
        },
        {
          command: "ipv6 unicast-routing",
          syntax: "Router(config)# ipv6 unicast-routing",
          description: "Enables IPv6 routing on the router. Required for IPv6 to function.",
          why: "Without this, the router won't forward IPv6 packets or send Router Advertisements.",
          example: "R1(config)# ipv6 unicast-routing",
          alternatives: []
        }
      ]
    },
    {
      title: "Verification & Show Commands",
      icon: <Terminal className="w-6 h-6" />,
      commands: [
        {
          command: "show running-config",
          syntax: "Router# show running-config",
          description: "Displays the current active configuration stored in RAM.",
          why: "Shows all current settings and configurations. Changes here are lost on reboot unless saved.",
          example: "R1# show running-config",
          alternatives: ["sh run (shorthand)"]
        },
        {
          command: "show startup-config",
          syntax: "Router# show startup-config",
          description: "Displays the configuration stored in NVRAM that loads on startup.",
          why: "Shows the saved configuration. This is what the router will use after a reboot.",
          example: "R1# show startup-config",
          alternatives: ["sh start (shorthand)"]
        },
        {
          command: "show ip interface brief",
          syntax: "Router# show ip interface brief",
          description: "Displays a summary of all interfaces with their IP addresses and status.",
          why: "Quick way to check interface status (up/down) and IP addresses.",
          example: "R1# show ip interface brief\nInterface      IP-Address      Status    Protocol\nGig0/0         192.168.1.1     up        up",
          alternatives: ["sh ip int br (shorthand)"]
        },
        {
          command: "show ip route",
          syntax: "Router# show ip route",
          description: "Displays the IPv4 routing table with all known routes.",
          why: "Shows how the router will forward packets to different networks.",
          example: "R1# show ip route\nC 192.168.1.0/24 is directly connected, GigabitEthernet0/0",
          alternatives: []
        },
        {
          command: "show version",
          syntax: "Router# show version",
          description: "Displays hardware and software information including IOS version, uptime, and memory.",
          why: "Essential for troubleshooting and verifying router specifications.",
          example: "R1# show version",
          alternatives: ["sh ver (shorthand)"]
        },
        {
          command: "show interface",
          syntax: "Router# show interface [type] [number]",
          description: "Displays detailed information about a specific interface or all interfaces.",
          why: "Provides detailed statistics, errors, and status for troubleshooting.",
          example: "R1# show interface gigabitEthernet 0/0",
          alternatives: ["sh int g0/0 (shorthand)"]
        }
      ]
    },
    {
      title: "Configuration Management Commands",
      icon: <BookOpen className="w-6 h-6" />,
      commands: [
        {
          command: "copy running-config startup-config",
          syntax: "Router# copy running-config startup-config",
          description: "Saves the current configuration from RAM to NVRAM.",
          why: "Preserves configuration changes so they persist after a reboot.",
          example: "R1# copy running-config startup-config\nDestination filename [startup-config]? [Enter]\nBuilding configuration...\n[OK]",
          alternatives: ["copy run start (shorthand)", "write memory", "wr"]
        },
        {
          command: "erase startup-config",
          syntax: "Router# erase startup-config",
          description: "Deletes the startup configuration from NVRAM.",
          why: "Resets the router to factory defaults (after reload).",
          example: "R1# erase startup-config\nErasing the nvram filesystem will remove all files! Continue? [confirm]",
          alternatives: ["write erase"]
        },
        {
          command: "reload",
          syntax: "Router# reload",
          description: "Restarts the router. Loads startup-config after reboot.",
          why: "Required to apply certain changes or to reset the router.",
          example: "R1# reload\nSystem configuration has been modified. Save? [yes/no]: no\nProceed with reload? [confirm]",
          alternatives: []
        },
        {
          command: "exit",
          syntax: "Router(config)# exit",
          description: "Exits current mode and returns to previous mode.",
          why: "Navigation between different configuration modes.",
          example: "R1(config-if)# exit\nR1(config)#",
          alternatives: ["end (returns to privileged mode)", "Ctrl-Z"]
        },
        {
          command: "banner motd",
          syntax: "Router(config)# banner motd [delimiter] [message] [delimiter]",
          description: "Creates a message-of-the-day banner displayed on login.",
          why: "Displays legal warnings or important information to users.",
          example: "R1(config)# banner motd #Unauthorized access prohibited!#",
          alternatives: []
        }
      ]
    },
    {
      title: "SSH Configuration Commands",
      icon: <Settings className="w-6 h-6" />,
      commands: [
        {
          command: "ip domain-name",
          syntax: "Router(config)# ip domain-name [domain-name]",
          description: "Sets the domain name for the router, required for SSH key generation.",
          why: "Hostname and domain name are needed to create RSA encryption keys for SSH.",
          example: "R1(config)# ip domain-name CCNA-lab.com",
          alternatives: []
        },
        {
          command: "username",
          syntax: "Router(config)# username [name] privilege [level] secret [password]",
          description: "Creates a local user account with privilege level and encrypted password.",
          why: "Provides individual user authentication for SSH and console access.",
          example: "R1(config)# username admin privilege 15 secret adminpass1",
          alternatives: ["username [name] password [pass] (unencrypted)"]
        },
        {
          command: "crypto key generate rsa",
          syntax: "Router(config)# crypto key generate rsa general-keys modulus [size]",
          description: "Generates RSA key pairs for SSH encryption. Modulus size should be at least 1024.",
          why: "Creates the encryption keys necessary for SSH to function securely.",
          example: "R1(config)# crypto key generate rsa general-keys modulus 1024\nThe name for the keys will be: R1.CCNA-lab.com",
          alternatives: []
        },
        {
          command: "transport input ssh",
          syntax: "Router(config-line)# transport input ssh",
          description: "Configures VTY lines to accept only SSH connections, blocking Telnet.",
          why: "Enforces secure remote access by allowing only encrypted SSH connections.",
          example: "R1(config-line)# transport input ssh",
          alternatives: ["transport input all (allows all)", "transport input telnet (Telnet only)"]
        },
        {
          command: "login local",
          syntax: "Router(config-line)# login local",
          description: "Enables authentication using the local username database.",
          why: "Required for SSH to use locally configured username/password combinations.",
          example: "R1(config-line)# login local",
          alternatives: ["login (uses line password only)"]
        }
      ]
    },
    {
      title: "Switch-Specific Commands",
      icon: <Network className="w-6 h-6" />,
      commands: [
        {
          command: "interface vlan 1",
          syntax: "Switch(config)# interface vlan 1",
          description: "Enters configuration mode for the virtual interface VLAN 1 (management VLAN).",
          why: "Allows remote management of the switch by assigning an IP address.",
          example: "Switch(config)# interface vlan 1\nSwitch(config-if)#",
          alternatives: ["int vlan 1 (shorthand)"]
        },
        {
          command: "ip default-gateway",
          syntax: "Switch(config)# ip default-gateway [ip-address]",
          description: "Sets the default gateway for the switch (Layer 2 switches only).",
          why: "Enables the switch to communicate with devices outside its local network for management.",
          example: "Switch(config)# ip default-gateway 192.168.1.1",
          alternatives: []
        },
        {
          command: "show vlan",
          syntax: "Switch# show vlan",
          description: "Displays VLAN information including which ports are assigned to each VLAN.",
          why: "Verifies VLAN configuration and port assignments.",
          example: "Switch# show vlan brief",
          alternatives: ["sh vlan brief (shorthand)"]
        },
        {
          command: "delete flash:vlan.dat",
          syntax: "Switch# delete flash:vlan.dat",
          description: "Deletes the VLAN database file from flash memory.",
          why: "Part of the process to completely reset a switch to factory defaults.",
          example: "Switch# delete flash:vlan.dat\nDelete filename [vlan.dat]? [Enter]",
          alternatives: []
        }
      ]
    }
  ];

  const questions = [
    {
      q: "What is the difference between 'enable password' and 'enable secret'?",
      a: "'enable password' stores the password in plain text (visible in config), while 'enable secret' uses MD5 encryption. If both are configured, 'enable secret' takes precedence. Always use 'enable secret' for better security."
    },
    {
      q: "Why do router interfaces need the 'no shutdown' command but switch ports don't?",
      a: "Router interfaces are administratively down by default for security reasons (they might be connected to external networks). Switch ports are administratively up by default because they're typically used for internal network connections. This is a security design feature."
    },
    {
      q: "What happens if you reload the router without saving the configuration?",
      a: "All changes made to the running-config will be lost. The router will boot with the startup-config stored in NVRAM. If there's no startup-config, it will boot with a blank configuration."
    },
    {
      q: "What is the purpose of 'ipv6 unicast-routing' command?",
      a: "This global command enables the router to forward IPv6 packets between interfaces and send Router Advertisement messages. Without it, the router won't route IPv6 traffic or enable IPv6 autoconfiguration for clients."
    },
    {
      q: "What is APIPA and when does it occur?",
      a: "APIPA (Automatic Private IP Addressing) assigns an IP in the range 169.254.0.1 to 169.254.255.254 when a DHCP client cannot find a DHCP server. These addresses are not routable, so devices can only communicate within the same local network."
    },
    {
      q: "Why use 'service password-encryption' if the encryption is weak?",
      a: "Type 7 encryption used by this command is easily decrypted and only provides basic protection against casual viewing of passwords. It's better than plain text but should not be relied upon for security. Always use 'enable secret' and 'username secret' which use stronger encryption."
    },
    {
      q: "What does 'exec-timeout 5 0' mean?",
      a: "It sets a 5-minute, 0-second idle timeout. If there's no activity for 5 minutes, the session automatically disconnects. This is a security feature to prevent unauthorized access through unattended sessions."
    },
    {
      q: "What is the difference between running-config and startup-config?",
      a: "Running-config is the active configuration in RAM (volatile memory) - it's what the router is currently using. Startup-config is stored in NVRAM (non-volatile memory) - it's what loads when the router boots. Changes to running-config are lost on reboot unless saved to startup-config."
    },
    {
      q: "What does the 'C' code mean in 'show ip route'?",
      a: "'C' stands for 'Connected' and indicates networks that are directly connected to the router's interfaces. These routes are automatically added when you configure an IP address and enable an interface."
    },
    {
      q: "Why do you need both a hostname and domain name for SSH?",
      a: "The hostname and domain name are concatenated to create the Fully Qualified Domain Name (FQDN), which is used as the identity for the RSA key pair. For example, hostname 'R1' and domain 'cisco.com' creates keys named 'R1.cisco.com'."
    },
    {
      q: "What is the minimum RSA modulus size recommended for SSH?",
      a: "The minimum recommended size is 1024 bits, though 2048 bits is preferred for stronger security. Anything less than 1024 bits is considered insecure by modern standards."
    },
    {
      q: "What is the difference between 'login' and 'login local'?",
      a: "'login' uses the password configured on the line (line vty or line con). 'login local' uses the username/password database configured with the 'username' command. 'login local' provides better security with individual user accounts."
    },
    {
      q: "In DHCP configuration, what is the difference between 'network' and 'default-router'?",
      a: "'network' defines the range of IP addresses the DHCP server can assign to clients. 'default-router' specifies the gateway address that will be given to clients so they can communicate outside their local network."
    },
    {
      q: "What is the purpose of 'logging synchronous'?",
      a: "It prevents IOS messages and debug output from interrupting your command input. Messages appear on a new line, and your command line is reprinted below them, making the CLI easier to use."
    },
    {
      q: "Why should you use 'transport input ssh' instead of 'transport input all'?",
      a: "'transport input ssh' allows only secure SSH connections and blocks insecure Telnet. 'transport input all' allows both SSH and Telnet, which creates a security vulnerability because Telnet transmits passwords in plain text."
    },
    {
      q: "What is the difference between IPv4 DHCP and IPv6 DHCP configuration?",
      a: "IPv4 DHCP uses 'ip dhcp pool' and 'network' commands. IPv6 DHCP uses 'ipv6 dhcp pool', 'address prefix', and requires 'ipv6 dhcp server' on interfaces. IPv6 also has autoconfiguration (SLAAC) as an alternative to DHCP."
    },
    {
      q: "What does 'privilege 15' mean in the username command?",
      a: "Privilege levels range from 0-15, where level 15 is the highest (equivalent to privileged EXEC mode). Setting a user to privilege 15 gives them full administrative access to all router commands."
    },
    {
      q: "Why do switches need 'ip default-gateway' but routers don't?",
      a: "Layer 2 switches need a default gateway to send management traffic (like SSH) to networks outside their local subnet. Routers use routing tables instead and don't need a default gateway for forwarding traffic, though they can have one for management purposes."
    },
    {
      q: "What is the purpose of 'show ip interface brief'?",
      a: "It provides a quick summary of all interfaces showing their IP addresses, Layer 1 status (up/down based on physical connection), and Layer 2 protocol status (up/down based on line protocol). It's the fastest way to check interface status."
    },
    {
      q: "What does '/64' mean in an IPv6 address like '2401:AAAA::1/64'?",
      a: "The /64 is the prefix length, indicating that the first 64 bits are the network portion and the remaining 64 bits are for host addresses. /64 is the standard subnet size for IPv6 LANs, providing 2^64 possible host addresses."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Cisco Packet Tracer</h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-1">Complete Command Reference Guide</h2>
            </div>
          </div>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg">
            Comprehensive guide to router, switch, and network configuration commands
          </p>
        </div>

        {/* Table of Contents */}
        <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 border-b border-blue-200">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            Table of Contents
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {sections.map((section, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <span className="text-blue-600 flex-shrink-0">{section.icon}</span>
                <span className="font-medium">{section.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Command Sections */}
        <div className="p-4 sm:p-6 lg:p-8">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 border-b-2 border-blue-600">
                <div className="text-blue-600 flex-shrink-0">{section.icon}</div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{section.title}</h2>
              </div>

              {section.commands.map((cmd, cmdIdx) => (
                <div key={cmdIdx} className="mb-6 sm:mb-8 p-4 sm:p-5 lg:p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg sm:text-xl font-bold text-indigo-600 mb-3 break-words">{cmd.command}</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">Syntax:</span>
                      <pre className="mt-2 p-2 sm:p-3 bg-gray-800 text-green-400 rounded font-mono text-xs sm:text-sm overflow-x-auto">
                        {cmd.syntax}
                      </pre>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">Description:</span>
                      <p className="mt-1 text-gray-600 text-sm sm:text-base leading-relaxed">{cmd.description}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">Why Use This:</span>
                      <p className="mt-1 text-gray-600 text-sm sm:text-base leading-relaxed">{cmd.why}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">Example:</span>
                      <pre className="mt-2 p-2 sm:p-3 bg-gray-800 text-green-400 rounded font-mono text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-all sm:break-normal">
                        {cmd.example}
                      </pre>
                    </div>

                    {cmd.alternatives.length > 0 && (
                      <div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">Alternative Commands:</span>
                        <ul className="mt-2 list-disc list-inside text-gray-600 text-sm sm:text-base">
                          {cmd.alternatives.map((alt, altIdx) => (
                            <li key={altIdx} className="ml-4 break-words">{alt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Practice Questions */}
        <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-indigo-600">
            <HelpCircle className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-800">Practice Questions & Answers</h2>
          </div>

          <div className="space-y-6">
            {questions.map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border-l-4 border-indigo-600 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q{idx + 1}: {item.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-indigo-600">Answer:</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference Cheat Sheet */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-blue-600" />
            Quick Reference Cheat Sheet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Mode Transitions</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Router&gt;</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">User EXEC</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">→ enable</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Router#</span>
                  <span className="text-xs bg-blue-200 px-2 py-1 rounded">Privileged EXEC</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">→ configure terminal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Router(config)#</span>
                  <span className="text-xs bg-green-200 px-2 py-1 rounded">Global Config</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">→ interface g0/0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Router(config-if)#</span>
                  <span className="text-xs bg-yellow-200 px-2 py-1 rounded">Interface Config</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Essential Shortcuts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-mono text-gray-700">Tab</span>
                  <span className="text-gray-600">Complete command</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-gray-700">Ctrl-Z</span>
                  <span className="text-gray-600">Return to privileged mode</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-gray-700">Ctrl-C</span>
                  <span className="text-gray-600">Cancel current command</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-gray-700">?</span>
                  <span className="text-gray-600">Context-sensitive help</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-gray-700">Up Arrow</span>
                  <span className="text-gray-600">Previous command</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-gray-700">Ctrl-A</span>
                  <span className="text-gray-600">Move to beginning of line</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-gray-700">Ctrl-E</span>
                  <span className="text-gray-600">Move to end of line</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Common IP Ranges</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Class A Private:</span>
                  <span className="ml-2 font-mono text-gray-600">10.0.0.0 - 10.255.255.255</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Class B Private:</span>
                  <span className="ml-2 font-mono text-gray-600">172.16.0.0 - 172.31.255.255</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Class C Private:</span>
                  <span className="ml-2 font-mono text-gray-600">192.168.0.0 - 192.168.255.255</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">APIPA Range:</span>
                  <span className="ml-2 font-mono text-gray-600">169.254.0.0 - 169.254.255.255</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Loopback:</span>
                  <span className="ml-2 font-mono text-gray-600">127.0.0.0 - 127.255.255.255</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Subnet Mask Quick Reference</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-700">/24</span>
                  <span className="text-gray-600">255.255.255.0 (254 hosts)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">/25</span>
                  <span className="text-gray-600">255.255.255.128 (126 hosts)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">/26</span>
                  <span className="text-gray-600">255.255.255.192 (62 hosts)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">/27</span>
                  <span className="text-gray-600">255.255.255.224 (30 hosts)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">/28</span>
                  <span className="text-gray-600">255.255.255.240 (14 hosts)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">/29</span>
                  <span className="text-gray-600">255.255.255.248 (6 hosts)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">/30</span>
                  <span className="text-gray-600">255.255.255.252 (2 hosts)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting Tips */}
        <div className="p-8 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Troubleshooting Tips</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <h3 className="font-bold text-red-700 mb-2">Problem: Cannot ping between devices</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Check if interfaces are up: <code className="bg-gray-200 px-2 py-1 rounded">show ip interface brief</code></li>
                <li>Verify IP addresses are in the same subnet or proper routing exists</li>
                <li>Ensure &quot;no shutdown&quot; was used on router interfaces</li>
                <li>Check if correct cables are used (straight-through vs crossover)</li>
                <li>Verify default gateway is configured on PCs</li>
              </ul>
            </div>

            <div className="p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <h3 className="font-bold text-yellow-700 mb-2 text-sm sm:text-base">Problem: DHCP not working</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Verify DHCP pool is configured with network and default-router</li>
                <li>Check if router interface is in the same subnet as DHCP pool</li>
                <li>Ensure router interface has an IP address assigned</li>
                <li>For IPv6 DHCP, verify &quot;ipv6 unicast-routing&quot; is enabled</li>
                <li>Try releasing and renewing: Set to Static then back to DHCP</li>
              </ul>
            </div>

            <div className="p-3 sm:p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h3 className="font-bold text-blue-700 mb-2 text-sm sm:text-base">Problem: SSH connection refused</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Verify domain name is set: <code className="bg-gray-200 px-2 py-1 rounded">ip domain-name</code></li>
                <li>Check RSA keys are generated: <code className="bg-gray-200 px-2 py-1 rounded">crypto key generate rsa</code></li>
                <li>Ensure VTY lines have &quot;transport input ssh&quot; and &quot;login local&quot;</li>
                <li>Verify username is created with proper privilege level</li>
                <li>Check if VTY lines are available (not all in use)</li>
              </ul>
            </div>

            <div className="p-3 sm:p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <h3 className="font-bold text-green-700 mb-2 text-sm sm:text-base">Problem: Configuration lost after reload</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Always save configuration: <code className="bg-gray-200 px-2 py-1 rounded">copy run start</code></li>
                <li>Verify save was successful: <code className="bg-gray-200 px-2 py-1 rounded">show startup-config</code></li>
                <li>Check NVRAM has space available</li>
                <li>For switches, also save VLAN database if modified</li>
              </ul>
            </div>

            <div className="p-3 sm:p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
              <h3 className="font-bold text-purple-700 mb-2 text-sm sm:text-base">Problem: Cannot access router remotely</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Verify PC and router are in same subnet or routing is configured</li>
                <li>Check VTY lines have password configured and &quot;login&quot; enabled</li>
                <li>Ensure router interface is up and has correct IP address</li>
                <li>Test connectivity with ping before attempting Telnet/SSH</li>
                <li>For switches, verify VLAN 1 interface is up and has IP address</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-green-50 to-teal-50">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Best Practices</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-3 sm:mb-4">✓ Security</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Always use &quot;enable secret&quot; instead of &quot;enable password&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Use SSH instead of Telnet for remote access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Set minimum password length (at least 10 characters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Configure exec-timeout to prevent unauthorized access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Use &quot;service password-encryption&quot; for basic protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Create individual user accounts with &quot;username&quot; command</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 sm:mb-4">✓ Configuration Management</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Always save configuration after changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Use meaningful hostnames for network devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Add descriptions to all interfaces for documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Create banner messages for legal warnings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Keep backup copies of configurations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Document network topology and IP addressing schemes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4">✓ Network Design</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Use private IP ranges for internal networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Plan subnetting before implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Reserve IP addresses for network devices (routers, switches)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Use DHCP for end-user devices to simplify management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Keep network segments logically organized</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Use /30 subnets for point-to-point router links</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4">✓ Troubleshooting</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Use &quot;show&quot; commands extensively for verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Always check physical layer first (cables, ports)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Verify IP addressing and subnet masks match</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Use ping and traceroute for connectivity testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Check routing tables before blaming configurations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Work systematically from Layer 1 to Layer 7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 text-center">
          <p className="text-lg font-semibold">Computer Networks</p>
          <p className="text-blue-100">Hasitha Sandakelum</p>
          <p className="text-blue-200 text-sm mt-2">Study hard and practice regularly! 🚀</p>
        </div>
      </div>
    </div>
  );
}