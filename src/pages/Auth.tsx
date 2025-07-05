
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Phone, Mail, User, MessageCircle, Apple, Facebook } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        console.log('User already logged in, redirecting to home');
        navigate('/');
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        
        if (event === 'SIGNED_IN' && session?.user) {
          toast({
            title: "Success!",
            description: "Successfully logged in.",
          });
          navigate('/');
        } else if (event === 'TOKEN_REFRESHED') {
          console.log('Token refreshed');
        } else if (event === 'USER_UPDATED') {
          console.log('User updated');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError('');
    
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth`
        }
      });
      
      if (error) {
        console.error('Google auth error:', error);
        throw error;
      }
      
      console.log('Google auth initiated:', data);
    } catch (error: any) {
      console.error('Google auth error:', error);
      setError(error.message);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      if (isLogin) {
        console.log('Attempting login for:', email);
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) {
          console.error('Login error:', error);
          throw error;
        }
        
        if (data.user) {
          console.log('Login successful:', data.user.email);
          toast({
            title: "Success!",
            description: "Successfully logged in.",
          });
          navigate('/');
        }
      } else {
        if (password !== repeatPassword) {
          throw new Error('Passwords do not match');
        }
        
        console.log('Attempting signup for:', email);
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth`,
            data: {
              name,
              mobile,
            }
          }
        });
        
        if (error) {
          console.error('Signup error:', error);
          throw error;
        }
        
        if (data.user) {
          if (data.user.email_confirmed_at) {
            console.log('User immediately confirmed:', data.user.email);
            toast({
              title: "Success!",
              description: "Account created and confirmed!",
            });
            navigate('/');
          } else {
            console.log('Confirmation email sent to:', data.user.email);
            setMessage('Please check your email and click the confirmation link to complete your registration.');
            toast({
              title: "Check your email",
              description: "We've sent you a confirmation link.",
            });
          }
        }
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      setError(error.message);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resendConfirmation = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth`
        }
      });
      
      if (error) throw error;
      
      setMessage('Confirmation email resent. Please check your inbox.');
      toast({
        title: "Email sent",
        description: "Confirmation email has been resent.",
      });
    } catch (error: any) {
      setError(error.message);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 border border-gray-200">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-400 to-green-500 text-white px-4 py-2 rounded-full text-xl font-bold mr-2">
              India
            </div>
            <span className="text-green-600 text-xl font-bold flex items-center">Filings</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Login to Your Account' : 'Create Your Account'}
          </h1>
          <p className="text-gray-600 text-sm">
            {isLogin ? 'Access your business services dashboard' : 'Join thousands of satisfied customers'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 font-medium text-sm ${
              isLogin 
                ? 'bg-white text-green-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 font-medium text-sm ${
              !isLogin 
                ? 'bg-white text-green-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  className="w-full pl-10"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="flex">
                <div className="flex items-center bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-sm">+91</span>
                </div>
                <Input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required={!isLogin}
                  className="flex-1 rounded-l-none"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {!isLogin && (
              <p className="text-xs text-gray-500 mt-1">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Repeat Password</label>
              <Input
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required={!isLogin}
                className="w-full"
                placeholder="Repeat your password"
              />
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-green-600 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>
          )}

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{error}</div>
          )}

          {message && (
            <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">
              {message}
              {!isLogin && (
                <button
                  type="button"
                  onClick={resendConfirmation}
                  className="block mt-2 text-green-700 underline hover:text-green-800"
                  disabled={loading}
                >
                  Resend confirmation email
                </button>
              )}
            </div>
          )}

          {!isLogin && (
            <div className="text-xs text-gray-500">
              By continuing, you agree to IndiaFilings{' '}
              <a href="#" className="text-green-600 hover:underline">Terms of Use</a> and{' '}
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>.
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-md transition-colors duration-200"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Please wait...
              </div>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              type="button"
              onClick={handleGoogleAuth}
              disabled={loading}
              variant="outline"
              className="w-full flex items-center justify-center space-x-3 py-3 border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-medium">Google</span>
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-600">
              Need help? {' '}
              <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                Contact Support
              </a>
            </div>
            <div className="text-center text-xs text-gray-500 mt-2">
              Trusted by 10,00,000+ businesses across India
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
