import React, { useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const Profile = () => {
  const { token, setToken, setCartItems, navigate } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const initials = useMemo(() => {
    if (!user?.name) return 'U';
    return user.name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase();
  }, [user]);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  useEffect(() => {
    async function fetchData() {
      if (!token) { setLoading(false); return; }
      try {
        const profileRes = await axios.post('/api/user/profile', {}, { headers: { token } });
        if (profileRes.data?.success) {
          setUser(profileRes.data.user);
          setFormName(profileRes.data.user?.name || '');
          setFormEmail(profileRes.data.user?.email || '');
        }
      } catch (e) {
        // no-op
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [token]);

  const isDirty = (formName !== (user?.name || '')) || (formEmail !== (user?.email || ''));

  const onSave = async () => {
    if (!formName?.trim() || !formEmail?.trim()) {
      toast.error('Name and email are required');
      return;
    }
    setSaving(true);
    try {
      const res = await axios.post('/api/user/profile/update', { name: formName.trim(), email: formEmail.trim() }, { headers: { token } });
      if (res.data?.success) {
        setUser(res.data.user);
        toast.success('Profile updated');
        setIsEditing(false);
      } else {
        toast.error(res.data?.message || 'Update failed');
      }
    } catch (e) {
      toast.error(e.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  if (!token) {
    return (
      <div className="py-16 text-center">
        <p className="text-xl mb-4">You are not logged in.</p>
        <button onClick={() => navigate('/login')} className="btn btn-primary">Login</button>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="surface p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full flex items-center justify-center text-xl font-semibold"
               style={{background: 'linear-gradient(135deg, #1F2937, #0B1220)'}}>
            {initials}
          </div>
          <div>
            <h1 className="text-2xl font-semibold">My Profile</h1>
            <p className="muted text-sm">Manage your account information</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-4 rounded-lg border border-[var(--border)]">
            <p className="muted text-xs mb-1">Name</p>
            <input
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              className="w-full px-3 py-2 border border-[var(--border)] rounded bg-[var(--bg-800)]"
              disabled={!isEditing}
              placeholder="Your name"
            />
          </div>
          <div className="p-4 rounded-lg border border-[var(--border)]">
            <p className="muted text-xs mb-1">Email</p>
            <input
              type="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[var(--border)] rounded bg-[var(--bg-800)]"
              disabled={!isEditing}
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-8">
          {!isEditing ? (
            <>
              <button onClick={() => setIsEditing(true)} className="btn btn-primary">Edit Profile</button>
              <button onClick={() => navigate('/orders')} className="btn btn-secondary">View Orders</button>
              <button onClick={logout} className="btn btn-secondary">Logout</button>
            </>
          ) : (
            <>
              <button onClick={onSave} className="btn btn-primary" disabled={!isDirty || saving}>
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={() => { setFormName(user?.name || ''); setFormEmail(user?.email || ''); setIsEditing(false); }}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
