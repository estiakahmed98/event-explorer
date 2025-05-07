import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { User as UserIcon, Mail, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import PageHeader from '../components/common/PageHeader';

const MyProfile = () => {
  const { currentUser, updateUserProfile } = useAuth();
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.displayName || '');
      setPhotoURL(currentUser.photoURL || '');
    }
  }, [currentUser]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Name cannot be empty');
      return;
    }
    
    try {
      setLoading(true);
      await updateUserProfile(name, photoURL);
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Helmet>
        <title>My Profile - Event Explorer</title>
      </Helmet>
      
      <PageHeader 
        title="My Profile" 
        description="View and manage your account information"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary-600 text-white p-6 flex flex-col items-center justify-center">
                  <div className="mb-4 relative">
                    <img 
                      src={currentUser?.photoURL || 'https://i.pravatar.cc/150'} 
                      alt={currentUser?.displayName || 'User'} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-1">{currentUser?.displayName}</h2>
                  <p className="text-primary-100 text-sm">{currentUser?.email}</p>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Account Information</h3>
                    {!isEditing && (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="btn btn-sm btn-outline"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <UserIcon className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field pl-10"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="photoURL" className="block text-gray-700 mb-2">Photo URL</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <ImageIcon className="w-5 h-5 text-gray-400" />
                          </div>
                          <input
                            type="url"
                            id="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="input-field pl-10"
                            placeholder="https://example.com/photo.jpg"
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-3 pt-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditing(false);
                            // Reset to original values
                            setName(currentUser?.displayName || '');
                            setPhotoURL(currentUser?.photoURL || '');
                          }}
                          className="btn btn-outline"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Name</p>
                        <div className="flex items-center">
                          <UserIcon className="w-5 h-5 mr-2 text-primary-500" />
                          <p className="text-gray-800">{currentUser?.displayName || 'Not set'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 mr-2 text-primary-500" />
                          <p className="text-gray-800">{currentUser?.email}</p>
                        </div>
                      </div>
                      
                      {currentUser?.metadata?.creationTime && (
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Member Since</p>
                          <p className="text-gray-800">
                            {new Date(currentUser.metadata.creationTime).toLocaleDateString()}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;