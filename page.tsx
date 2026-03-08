'use client';
import { useState, useEffect } from 'react';
import { Play, Download, Settings, Code, FileText } from 'lucide-react';

export default function Home() {
  const [code, setCode] = useState('-- Select a template or industry to start');
  const [logs, setLogs] = useState('Workspace initialized.');
  const [industry, setIndustry] = useState('Marketplace');

  const onCompile = async () => {
    setLogs('Compiling...');
    // Real call would use fetch('/api/compiler/compile')
    setTimeout(() => setLogs('Compiling...\n[SUCCESS] Validator compiled to PlutusV2.\nArtifacts ready for download.'), 1000);
  };

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-[#cccccc] font-sans">
      {/* Sidebar */}
      <div className="w-16 border-r border-[#333] flex flex-col items-center py-4 space-y-6">
        <Code size={24} className="text-blue-500" />
        <FileText size={24} />
        <Settings size={24} />
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="h-12 border-b border-[#333] flex items-center px-4 justify-between bg-[#252526]">
            <div className="flex space-x-4 items-center">
               <span className="font-bold text-sm">Coxy Plutus Builder</span>
               <select className="bg-[#3c3c3c] text-xs px-2 py-1" value={industry} onChange={e => setIndustry(e.target.value)}>
                  <option>Marketplace</option>
                  <option>Auction</option>
                  <option>DAO</option>
               </select>
               <button onClick={onCompile} className="flex items-center space-x-1 bg-green-700 hover:bg-green-600 px-3 py-1 text-white rounded text-xs">
                  <Play size={14} /> <span>Compile</span>
               </button>
            </div>
            <button className="flex items-center space-x-1 bg-[#3c3c3c] px-3 py-1 rounded text-xs">
               <Download size={14} /> <span>Download .plutus</span>
            </button>
          </div>

          <div className="flex-1 flex">
            {/* Editor Container */}
            <div className="flex-1 border-r border-[#333] bg-[#1e1e1e]">
               <textarea 
                  className="w-full h-full p-4 bg-transparent outline-none font-mono text-sm resize-none"
                  value={code}
                  onChange={e => setCode(e.target.value)}
               />
            </div>
            
            {/* Console */}
            <div className="w-1/3 flex flex-col bg-[#1e1e1e]">
              <div className="p-2 border-b border-[#333] text-xs font-bold uppercase">Compilation Logs</div>
              <div className="flex-1 p-4 font-mono text-xs overflow-auto text-green-400 leading-relaxed whitespace-pre-wrap">
                {logs}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}