import React from 'react';
import { Activity, Wifi, Server, Users } from 'lucide-react';
import { ShardStatus } from '../types';
import SpotlightCard from '../components/SpotlightCard';

const shards: ShardStatus[] = [
  {
    id: 0,
    status: 'Operational',
    lastUpdated: '30s ago',
    uptime: '1d 10h 13m',
    latency: '20ms',
    servers: 1024,
    users: 295640
  },
  {
    id: 1,
    status: 'Operational',
    lastUpdated: '32s ago',
    uptime: '1d 17h 54m',
    latency: '22ms',
    servers: 1004,
    users: 212773
  }
];

const StatusCard: React.FC<{ shard: ShardStatus }> = ({ shard }) => (
  <SpotlightCard className="p-8 rounded-[2.5rem]">
      <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white tracking-tight">Shard {shard.id}</h3>
          <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <Activity size={12} /> {shard.lastUpdated}
          </span>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2 ${
          shard.status === 'Operational' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
        }`}>
          <span className={`w-2 h-2 rounded-full ${shard.status === 'Operational' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
          {shard.status}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Uptime</p>
          <p className="text-white font-mono font-semibold flex items-center gap-2">
              <Activity size={16} className="text-gray-600" />
              {shard.uptime}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Latency</p>
          <p className="text-white font-mono font-semibold flex items-center gap-2">
              <Wifi size={16} className="text-gray-600" />
              {shard.latency}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Servers</p>
          <p className="text-white font-mono font-semibold flex items-center gap-2">
              <Server size={16} className="text-gray-600" />
              {shard.servers.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Users</p>
          <p className="text-white font-mono font-semibold flex items-center gap-2">
              <Users size={16} className="text-gray-600" />
              {shard.users.toLocaleString()}
          </p>
        </div>
      </div>
  </SpotlightCard>
);

const Status: React.FC = () => {
  const totalUsers = shards.reduce((acc, s) => acc + s.users, 0);
  const totalServers = shards.reduce((acc, s) => acc + s.servers, 0);

  return (
    <div className="min-h-[80vh] animate-fade-in flex flex-col items-center w-full">
      <div className="text-center mb-4">
        <p className="text-gray-500 text-sm">Last updated: {new Date().toLocaleTimeString()}</p>
      </div>

      <div className="w-full max-w-4xl mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
        <h1 className="text-3xl font-bold text-white tracking-tight">System Status</h1>
        <div className="w-full md:w-64">
             <input 
                type="text" 
                placeholder="Server ID" 
                className="w-full bg-dark-700/50 border border-white/5 text-white text-sm rounded-full px-4 py-3 focus:outline-none focus:border-white/20 transition-colors"
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {shards.map(shard => (
          <StatusCard key={shard.id} shard={shard} />
        ))}
      </div>

        <SpotlightCard className="mt-12 grid grid-cols-2 gap-8 text-center w-full max-w-lg p-10 rounded-[3rem]">
            <div>
                <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-wider">Total Users</p>
                <p className="text-4xl font-black text-white tracking-tight">{totalUsers.toLocaleString()}</p>
            </div>
            <div>
                <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-wider">Total Servers</p>
                <p className="text-4xl font-black text-white tracking-tight">{totalServers.toLocaleString()}</p>
            </div>
        </SpotlightCard>

    </div>
  );
};

export default Status;