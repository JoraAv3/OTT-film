import React from 'react';
import { useAuthStore } from '@/hooks/useAuthStore';
import { User, Mail, Shield, CreditCard, ChevronRight, Settings, Bell, HelpCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/shared/lib/utils';

export const Profile = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="pt-24 pb-20 px-4 md:px-12 max-w-5xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-none">
          <div className="flex flex-col items-center p-8 bg-white dark:bg-[#1C1C24] rounded-2xl border border-black/5 dark:border-white/5 mb-8">
            <img src={user?.avatarUrl} alt={user?.name} className="w-24 h-24 rounded-full border-4 border-accent mb-4" />
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <div className="mt-4 px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded-full uppercase tracking-wider">
              {user?.subscription?.planId.split('-')[1]} Member
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <ProfileNavItem icon={<User size={18} />} label="Personal Info" active />
            <ProfileNavItem icon={<CreditCard size={18} />} label="Subscription" to="/subscription" />
            <ProfileNavItem icon={<Bell size={18} />} label="Notifications" />
            <ProfileNavItem icon={<Shield size={18} />} label="Security" />
            <ProfileNavItem icon={<Settings size={18} />} label="Settings" />
            <ProfileNavItem icon={<HelpCircle size={18} />} label="Help Center" />
            <button
              onClick={logout}
              className="mt-4 w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
            >
              Sign Out
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-gray-500">Manage your profile and subscription preferences</p>
          </div>

          <section className="bg-white dark:bg-[#1C1C24] rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden mb-12">
            <div className="p-6 border-b border-black/5 dark:border-white/5">
              <h3 className="font-bold">Personal Information</h3>
            </div>
            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <ProfileField label="Full Name" value={user?.name || ''} />
                <ProfileField label="Email Address" value={user?.email || ''} />
                <ProfileField label="Country" value="United States" />
                <ProfileField label="Birth Date" value="1990-01-01" />
              </div>
              <button className="px-6 py-2 bg-accent text-white font-bold rounded-lg hover:bg-accent-hover transition-all text-sm">
                Save Changes
              </button>
            </div>
          </section>

          <section className="bg-white dark:bg-[#1C1C24] rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden">
            <div className="p-6 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
              <h3 className="font-bold">Current Subscription</h3>
              <Link to="/subscription" className="text-sm text-accent font-bold hover:underline">Change Plan</Link>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-6 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider">{user?.subscription?.planId.split('-')[1]} Plan</h4>
                  <p className="text-sm text-gray-500">Next billing date: Jan 15, 2026</p>
                </div>
                <div className="ml-auto text-xl font-bold text-accent">$15.99/mo</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const ProfileNavItem = ({ icon, label, to, active = false }: { icon: React.ReactNode; label: string; to?: string; active?: boolean }) => {
  const Component = to ? Link : 'button';
  return (
    <Component
      to={to as any}
      className={cn(
        "flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-all",
        active
          ? "bg-accent text-white"
          : "hover:bg-black/5 dark:hover:bg-white/5 text-gray-500"
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        {label}
      </div>
      <ChevronRight size={16} />
    </Component>
  );
};

const ProfileField = ({ label, value }: { label: string; value: string }) => (
  <div>
    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{label}</label>
    <div className="w-full px-4 py-3 bg-black/5 dark:bg-[#14141A] rounded-xl text-sm font-medium border border-transparent focus-within:border-accent transition-all">
      {value}
    </div>
  </div>
);
