import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User,
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase/config';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, photoURL: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (name: string, photoURL: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Login with email and password
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Register with email and password
  const register = async (email: string, password: string, name: string, photoURL: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the user profile
    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: photoURL || 'https://i.pravatar.cc/150?u=' + email
    });
    
    setCurrentUser({
      ...userCredential.user,
      displayName: name,
      photoURL: photoURL || 'https://i.pravatar.cc/150?u=' + email
    });
  };

  // Login with Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
  };

  // Update user profile
  const updateUserProfile = async (name: string, photoURL: string) => {
    if (!currentUser) return;
    
    await updateProfile(currentUser, {
      displayName: name,
      photoURL: photoURL
    });
    
    // Update the local state to reflect changes immediately
    setCurrentUser({
      ...currentUser,
      displayName: name,
      photoURL: photoURL
    });
  };

  // Reset password
  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    register,
    loginWithGoogle,
    logout,
    updateUserProfile,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};