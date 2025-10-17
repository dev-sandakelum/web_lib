"use client";
import React, { useState } from 'react';
import { BookOpen, Terminal, Network, Settings, HelpCircle, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

export default function PacketTracerGuide() {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
  const [expandedCommands, setExpandedCommands] = useState<Record<string, boolean>>({});
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const toggleSection = (sectionIdx: number) => {
    setExpandedSections((prev: Record<number, boolean>) => ({
      ...prev,
      [sectionIdx]: !prev[sectionIdx]
    }));
  };
  
  const toggleCommand = (key: string) => {
    setExpandedCommands((prev: Record<string, boolean>) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const scrollToSection = (sectionIdx: number | string) => {
    const element = document.getElementById(`section-${sectionIdx}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowMobileMenu(false);
    }
  };

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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sticky Mobile Navigation */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
        {/* <div className="flex items-center justify-between p-3 sm:p-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white">Packet Tracer Guide</h1>
              <p className="text-xs text-blue-100 hidden sm:block">Complete Command Reference</p>
            </div>
          </div>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div> */}
        
        {/* Mobile Dropdown Menu */}
        {showMobileMenu && (
          <div className="bg-white border-t border-blue-200 shadow-lg max-h-[70vh] overflow-y-auto">
            <div className="p-4 space-y-2">
              {sections.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(idx)}
                  className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span className="text-blue-600">{section.icon}</span>
                  <span className="font-medium text-gray-800 text-sm">{section.title}</span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('qa')}
                className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-blue-50 transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-800 text-sm">Practice Q&A</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-2xl">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Cisco Packet Tracer</h2>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100 mt-1">
                Complete Command Reference Guide
              </p>
            </div>
          </div>
        </div>

        {/* Command Sections */}
        <div className="p-3 sm:p-4 lg:p-8">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} id={`section-${sectionIdx}`} className="mb-4 sm:mb-6 scroll-mt-20">
              {/* Section Header - Collapsible */}
              <button
                onClick={() => toggleSection(sectionIdx)}
                className="w-full flex items-center justify-between gap-3 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0">{section.icon}</div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold text-left">{section.title}</h2>
                </div>
                {expandedSections[sectionIdx] ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                )}
              </button>

              {/* Collapsible Content */}
              {expandedSections[sectionIdx] && (
                <div className="mt-3 space-y-3 sm:space-y-4">
                  {section.commands.map((cmd, cmdIdx) => {
                    const cmdKey = `${sectionIdx}-${cmdIdx}`;
                    return (
                      <div
                        key={cmdIdx}
                        className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                      >
                        {/* Command Header - Collapsible */}
                        <button
                          onClick={() => toggleCommand(cmdKey)}
                          className="w-full flex items-center justify-between gap-2 p-3 sm:p-4 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-indigo-600 text-left break-words">
                            {cmd.command}
                          </h3>
                          {expandedCommands[cmdKey] ? (
                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-500" />
                          )}
                        </button>

                        {/* Command Details */}
                        {expandedCommands[cmdKey] && (
                          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 border-t border-gray-200">
                            <div>
                              <span className="font-semibold text-gray-700 text-xs sm:text-sm">Syntax:</span>
                              <pre className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-800 text-green-400 rounded font-mono text-xs overflow-x-auto">
{cmd.syntax}
                              </pre>
                            </div>

                            <div>
                              <span className="font-semibold text-gray-700 text-xs sm:text-sm">Description:</span>
                              <p className="mt-1 text-gray-600 text-xs sm:text-sm leading-relaxed">
                                {cmd.description}
                              </p>
                            </div>

                            <div>
                              <span className="font-semibold text-gray-700 text-xs sm:text-sm">Why Use This:</span>
                              <p className="mt-1 text-gray-600 text-xs sm:text-sm leading-relaxed">{cmd.why}</p>
                            </div>

                            <div>
                              <span className="font-semibold text-gray-700 text-xs sm:text-sm">Example:</span>
                              <pre className="mt-1 sm:mt-2 p-2 sm:p-3 bg-gray-800 text-green-400 rounded font-mono text-xs overflow-x-auto whitespace-pre-wrap">
{cmd.example}
                              </pre>
                            </div>

                            {cmd.alternatives.length > 0 && (
                              <div>
                                <span className="font-semibold text-gray-700 text-xs sm:text-sm">
                                  Alternative Commands:
                                </span>
                                <ul className="mt-1 sm:mt-2 list-disc list-inside text-gray-600 text-xs sm:text-sm space-y-1">
                                  {cmd.alternatives.map((alt, altIdx) => (
                                    <li key={altIdx} className="ml-2 sm:ml-4 break-words">
                                      {alt}
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

        {/* Practice Questions */}
        <div id="section-qa" className="p-3 sm:p-4 lg:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 scroll-mt-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 border-b-2 border-indigo-600">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Practice Q&A</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {questions.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-lg border-l-4 border-indigo-600 shadow-md overflow-hidden"
              >
                <summary className="cursor-pointer p-3 sm:p-4 lg:p-6 font-bold text-gray-800 text-sm sm:text-base hover:bg-indigo-50 transition-colors list-none">
                  <div className="flex items-start justify-between gap-2">
                    <span>Q{idx + 1}: {item.q}</span>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </div>
                </summary>
                <div className="p-3 sm:p-4 lg:p-6 pt-0 text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed border-t border-gray-100">
                  <span className="font-semibold text-indigo-600">Answer:</span> {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6 text-center">
          <p className="text-base sm:text-lg font-semibold">Computer Networks</p>
          <p className="text-xs sm:text-sm font-medium mt-2 text-white opacity-80">
            Created by Hasitha Sandakelum
          </p>
          <p className="text-blue-200 text-xs sm:text-sm mt-2">Study hard and practice regularly! 🚀</p>
        </div>
      </div>
    </div>
  );
}