"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CryptoNews } from '@/components/crypto-news'
import { MarketOverview } from '@/components/market-overview'
import { Github, Mail } from 'lucide-react'
import { signInWithGoogle, signInWithGithub, signInWithEmail, createAccount } from '@/lib/auth'
import { useToast } from '@/components/ui/use-toast'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleEmailAuth = async (isSignUp: boolean) => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      if (isSignUp) {
        await createAccount(email, password)
        toast({
          title: "Account created",
          description: "Welcome to AI Forge!",
        })
      } else {
        await signInWithEmail(email, password)
        toast({
          title: "Welcome back!",
          description: "Successfully signed in",
        })
      }
    } catch (error: any) {
      toast({
        title: "Authentication error",
        description: error.message || "An error occurred during authentication",
        variant: "destructive",
      })
    }
    setIsLoading(false)
  }

  const handleSocialAuth = async (provider: 'google' | 'github') => {
    setIsLoading(true)
    try {
      if (provider === 'google') {
        await signInWithGoogle()
      } else {
        await signInWithGithub()
      }
      toast({
        title: "Welcome!",
        description: "Successfully signed in",
      })
    } catch (error: any) {
      toast({
        title: "Authentication error",
        description: error.message || "An error occurred during authentication",
        variant: "destructive",
      })
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Auth Form */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md"
            >
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                      className="w-full" 
                      onClick={() => handleEmailAuth(false)}
                      disabled={isLoading}
                    >
                      Sign In
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="signup">
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                      className="w-full"
                      onClick={() => handleEmailAuth(true)}
                      disabled={isLoading}
                    >
                      Create Account
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleSocialAuth('google')}
                  disabled={isLoading}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleSocialAuth('github')}
                  disabled={isLoading}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Market Info */}
          <div className="space-y-8">
            <MarketOverview />
            <CryptoNews />
          </div>
        </div>
      </div>
    </div>
  )
}