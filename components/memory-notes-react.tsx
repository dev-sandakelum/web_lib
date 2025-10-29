import React from 'react';

const MemoryTechNotes = () => {
  return (
    <div className="min-h-screen bg-white p-2">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center py-3 border-b-4 border-gray-800 mb-4">
          <h1 className="text-xl font-bold text-gray-800 mb-1">📚 Computer Architecture</h1>
          <h2 className="text-base font-semibold text-gray-700 mb-1">Memory Technologies</h2>
          <p className="text-xs text-gray-500">ICT1152 | Comprehensive Study Notes</p>
        </header>

        {/* Internal Memory Section */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 INTERNAL MEMORY
          </h2>
          
          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Memory Evolution
            </h3>
            <div className="text-xs px-1 leading-relaxed">
              <strong>Earlier:</strong> Ferromagnetic cores<br/>
              <strong>Today:</strong> Semiconductor chips
            </div>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              DRAM (Dynamic RAM)
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li><span className="text-red-600 font-bold">Storage:</span> Charge on capacitors</li>
              <li><span className="text-red-600 font-bold">Type:</span> Analog, volatile</li>
              <li><span className="text-red-600 font-bold">Feature:</span> Requires refresh (charge leaks)</li>
              <li><span className="text-red-600 font-bold">Pros:</span> High density, cheaper</li>
              <li><span className="text-red-600 font-bold">Use:</span> Main memory</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              SRAM (Static RAM)
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li><span className="text-red-600 font-bold">Storage:</span> Flip-flop logic gates</li>
              <li><span className="text-red-600 font-bold">Type:</span> Digital, volatile</li>
              <li><span className="text-red-600 font-bold">Feature:</span> No refresh needed</li>
              <li><span className="text-red-600 font-bold">Pros:</span> Faster</li>
              <li><span className="text-red-600 font-bold">Cons:</span> Expensive, lower density</li>
              <li><span className="text-red-600 font-bold">Use:</span> Cache memory</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              DRAM vs SRAM
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-300 p-1.5 text-left">Feature</th>
                    <th className="border border-gray-300 p-1.5 text-left">DRAM</th>
                    <th className="border border-gray-300 p-1.5 text-left">SRAM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 p-1.5">Speed</td><td className="border border-gray-300 p-1.5">Slower</td><td className="border border-gray-300 p-1.5">Faster</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">Density</td><td className="border border-gray-300 p-1.5">Higher</td><td className="border border-gray-300 p-1.5">Lower</td></tr>
                  <tr><td className="border border-gray-300 p-1.5">Cost</td><td className="border border-gray-300 p-1.5">Cheaper</td><td className="border border-gray-300 p-1.5">Expensive</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">Refresh</td><td className="border border-gray-300 p-1.5">Required</td><td className="border border-gray-300 p-1.5">Not needed</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              ROM (Read Only Memory)
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li>Permanent data, non-volatile</li>
              <li>Written during manufacturing</li>
              <li>Use: System programs, microprogramming</li>
              <li>Drawback: High cost, no error tolerance</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              ROM Types
            </h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-2 rounded text-xs leading-relaxed">
              <strong className="block text-yellow-700 mb-1 text-xs">PROM</strong>
              Written once electrically • Non-volatile • Less expensive
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-2 rounded text-xs leading-relaxed">
              <strong className="block text-yellow-700 mb-1 text-xs">EPROM</strong>
              UV erasure • Erase all before write • Multiple updates
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-2 rounded text-xs leading-relaxed">
              <strong className="block text-yellow-700 mb-1 text-xs">EEPROM</strong>
              Electrical erase • Write anytime • No prior erasure needed
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-2 rounded text-xs leading-relaxed">
              <strong className="block text-yellow-700 mb-1 text-xs">Flash Memory</strong>
              Fast electrical erase (seconds) • Block-level • High density
            </div>
          </div>
        </section>

        {/* Error Correction Section */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 ERROR CORRECTION
          </h2>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Error Types
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li><strong>Hard:</strong> Permanent physical defects</li>
              <li><strong>Soft:</strong> Random, nondestructive (power/particles)</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Hamming Code
            </h3>
            <div className="text-xs px-1 mb-2">
              Detects & corrects 1-bit errors
            </div>
            
            <div className="bg-blue-50 p-2 my-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-200">
              2<sup className="text-[10px]">K</sup> - 1 ≥ M + K
            </div>
            
            <div className="text-xs px-1 mb-2">
              M = data bits | K = check bits
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-300 p-1.5">M</th>
                    <th className="border border-gray-300 p-1.5">K</th>
                    <th className="border border-gray-300 p-1.5">Overhead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 p-1.5 text-center">4</td><td className="border border-gray-300 p-1.5 text-center">3</td><td className="border border-gray-300 p-1.5 text-center">75%</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5 text-center">8</td><td className="border border-gray-300 p-1.5 text-center">4</td><td className="border border-gray-300 p-1.5 text-center">50%</td></tr>
                  <tr><td className="border border-gray-300 p-1.5 text-center">16</td><td className="border border-gray-300 p-1.5 text-center">5</td><td className="border border-gray-300 p-1.5 text-center">31.25%</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5 text-center">32</td><td className="border border-gray-300 p-1.5 text-center">6</td><td className="border border-gray-300 p-1.5 text-center">18.75%</td></tr>
                  <tr><td className="border border-gray-300 p-1.5 text-center">64</td><td className="border border-gray-300 p-1.5 text-center">7</td><td className="border border-gray-300 p-1.5 text-center">10.94%</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Syndrome Word
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li>XOR of stored vs calculated ECC</li>
              <li><strong>All 0s:</strong> No error</li>
              <li><strong>Non-zero:</strong> Shows error position</li>
              <li>Check bits at powers of 2 (1,2,4,8...)</li>
            </ul>
          </div>
        </section>

        {/* DRAM Improvements */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 DRAM IMPROVEMENTS
          </h2>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              SDRAM
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li>Synchronized with clock</li>
              <li>CPU knows when data ready</li>
              <li>1 transfer per cycle</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              DDR SDRAM
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li>Double-Data-Rate</li>
              <li>2 transfers per cycle</li>
              <li>Doubles speed</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              RDRAM
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li>Rambus DRAM</li>
              <li>28 wires, max 12cm bus</li>
              <li>Intel Pentium/Itanium</li>
            </ul>
          </div>
        </section>

        {/* External Memory */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 EXTERNAL MEMORY
          </h2>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Magnetic Disk
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li><strong>Substrate:</strong> Nonmagnetic (Al/glass)</li>
              <li><strong>Coating:</strong> Magnetizable layer</li>
              <li><strong>Glass benefit:</strong> Better uniformity, fewer errors</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Data Organization
            </h3>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li><strong>Tracks:</strong> Concentric rings (1000s)</li>
              <li><strong>Sectors:</strong> Data transfer units</li>
              <li><strong>Intertrack gaps:</strong> Prevent errors</li>
              <li><strong>Cylinder:</strong> Same track position on all platters</li>
            </ul>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Recording Methods
            </h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-2 rounded text-xs leading-relaxed">
              <strong className="block text-yellow-700 mb-1 text-xs">CAV (Constant Angular Velocity)</strong>
              Fixed speed • Direct addressing • Low outer track density
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-2 rounded text-xs leading-relaxed">
              <strong className="block text-yellow-700 mb-1 text-xs">MZR (Multiple Zone Recording)</strong>
              16 zones typical • Outer zones = more sectors • Max capacity
            </div>
          </div>

          <div className="mb-3 px-1">
            <h3 className="text-sm font-bold text-gray-800 mb-2 py-1.5 px-2 bg-gray-100 border-l-4 border-blue-500 rounded">
              Physical Types
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-300 p-1.5 text-left">Type</th>
                    <th className="border border-gray-300 p-1.5 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 p-1.5">Fixed-head</td><td className="border border-gray-300 p-1.5">1 head/track (rare)</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">Movable</td><td className="border border-gray-300 p-1.5">1 head, extends/retracts</td></tr>
                  <tr><td className="border border-gray-300 p-1.5">Nonremovable</td><td className="border border-gray-300 p-1.5">Permanent (PC HDD)</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">Removable</td><td className="border border-gray-300 p-1.5">Can swap</td></tr>
                  <tr><td className="border border-gray-300 p-1.5">Double-sided</td><td className="border border-gray-300 p-1.5">Both sides coated</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">Multi-platter</td><td className="border border-gray-300 p-1.5">1 head/surface</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* RAID */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 RAID LEVELS
          </h2>

          <div className="text-xs px-1 mb-3 leading-relaxed">
            <strong>Purpose:</strong> Data redundancy + Performance<br/>
            Multiple physical = Single logical drive
          </div>

          <div className="space-y-2 px-1">
            <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded text-xs leading-relaxed">
              <strong className="block text-gray-800 mb-1 text-xs">RAID 0 - Striping</strong>
              • No redundancy<br/>
              • ✓ Performance boost<br/>
              • ✗ Any disk fails = data loss
            </div>

            <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded text-xs leading-relaxed">
              <strong className="block text-gray-800 mb-1 text-xs">RAID 1 - Mirroring</strong>
              • Data duplicated<br/>
              • ✓ High reliability, no downtime<br/>
              • ✗ Double disks (expensive)
            </div>

            <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded text-xs leading-relaxed">
              <strong className="block text-gray-800 mb-1 text-xs">RAID 2 - Hamming</strong>
              • Multiple parity disks<br/>
              • Status: Obsolete (disks have ECC)
            </div>

            <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded text-xs leading-relaxed">
              <strong className="block text-gray-800 mb-1 text-xs">RAID 3 - Bit Parity</strong>
              • 1 parity disk, bit-wise data<br/>
              • ✓ High transfer rate<br/>
              • ✗ Poor I/O performance
            </div>

            <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded text-xs leading-relaxed">
              <strong className="block text-gray-800 mb-1 text-xs">RAID 4 - Block Parity</strong>
              • Large strips (16k-32k)<br/>
              • ✗ Parity disk bottleneck
            </div>

            <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded text-xs leading-relaxed">
              <strong className="block text-gray-800 mb-1 text-xs">RAID 5 - Distributed Parity</strong>
              • Parity across all disks<br/>
              • ✓ Most popular (servers)<br/>
              • ✗ Cannot recover 2-disk failure<br/>
              • Capacity: (N-1) × disk size
            </div>

            <div className="bg-gray-100 border-l-4 border-blue-500 p-2 rounded text-xs leading-relaxed">
              <strong className="block text-gray-800 mb-1 text-xs">RAID 6 - Double Parity</strong>
              • 2 parity calculations<br/>
              • ✓ Survives 3-disk failure<br/>
              • ✗ Write penalty<br/>
              • Capacity: (N-2) × disk size
            </div>
          </div>
        </section>

        {/* Magnetic Tape */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 MAGNETIC TAPE
          </h2>

          <ul className="text-xs space-y-1 ml-4 list-disc px-1">
            <li><strong>Medium:</strong> Polyester + magnetic coating</li>
            <li><strong>Width:</strong> 0.38-1.27cm</li>
            <li><strong>Access:</strong> Sequential only</li>
            <li><strong>Speed:</strong> Slowest</li>
            <li><strong>Cost:</strong> Very cheap</li>
            <li><strong>Use:</strong> Backup/Archive</li>
          </ul>
        </section>

        {/* Key Formulas */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 KEY FORMULAS
          </h2>

          <div className="space-y-2 px-1">
            <div className="bg-blue-50 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-200">
              2<sup className="text-[10px]">K</sup> - 1 ≥ M + K
            </div>
            
            <div className="bg-blue-50 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-200">
              Overhead = (K/M) × 100%
            </div>
            
            <div className="bg-blue-50 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-200">
              Syndrome: Z = X ⊕ Y
            </div>
            
            <div className="bg-blue-50 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-200">
              RAID 5: (N-1) × Size
            </div>
            
            <div className="bg-blue-50 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-200">
              RAID 6: (N-2) × Size
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-5">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-sm font-bold rounded-md shadow mb-3">
            🔷 QUICK REFERENCE
          </h2>

          <div className="overflow-x-auto px-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border border-gray-300 p-1.5 text-left">Tech</th>
                  <th className="border border-gray-300 p-1.5 text-left">Volatile</th>
                  <th className="border border-gray-300 p-1.5 text-left">Speed</th>
                  <th className="border border-gray-300 p-1.5 text-left">Use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 p-1.5">SRAM</td><td className="border border-gray-300 p-1.5">Yes</td><td className="border border-gray-300 p-1.5">Fast</td><td className="border border-gray-300 p-1.5">Cache</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">DRAM</td><td className="border border-gray-300 p-1.5">Yes</td><td className="border border-gray-300 p-1.5">Med</td><td className="border border-gray-300 p-1.5">Main Mem</td></tr>
                <tr><td className="border border-gray-300 p-1.5">ROM</td><td className="border border-gray-300 p-1.5">No</td><td className="border border-gray-300 p-1.5">Fast</td><td className="border border-gray-300 p-1.5">System</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">Flash</td><td className="border border-gray-300 p-1.5">No</td><td className="border border-gray-300 p-1.5">Med</td><td className="border border-gray-300 p-1.5">Storage</td></tr>
                <tr><td className="border border-gray-300 p-1.5">HDD</td><td className="border border-gray-300 p-1.5">No</td><td className="border border-gray-300 p-1.5">Med</td><td className="border border-gray-300 p-1.5">Secondary</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 p-1.5">Tape</td><td className="border border-gray-300 p-1.5">No</td><td className="border border-gray-300 p-1.5">Slow</td><td className="border border-gray-300 p-1.5">Backup</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-6 pt-3 border-t-2 border-gray-200 text-gray-500 text-[11px]">
          <p className="font-semibold">ICT1152 - Computer Architecture</p>
          <p>Memory Technologies Notes</p>
          <p className="mt-1">Press Ctrl+P / Cmd+P to save as PDF</p>
        </footer>
      </div>
    </div>
  );
};

export default MemoryTechNotes;