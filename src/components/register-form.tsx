import { cn } from "@/lib/utils"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState} from "react";
import {useNavigate} from "react-router";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


interface RegisterFormProps {
    handleSubmit: (username:string,email:string,password:string,confirmPassword:string) => Promise<void>;
    error?: string;
    className?: string;
}

export function RegisterForm({className,handleSubmit, error,...props}:RegisterFormProps) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();



    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Register</CardTitle>
                    <CardDescription>
                        Enter a email, username and password below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <form>

                        <div className="flex flex-col gap-6">
                            {error && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4"/>
                                    <AlertTitle>Something went wrong!</AlertTitle>
                                    <AlertDescription>
                                        {error}
                                    </AlertDescription>
                                </Alert>
                            )
                            }
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="Confirm password">Confirm Password</Label>
                                <Input id="Confirmpassword" type="password" required
                                       onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                            <Button type="submit" className="w-full" onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(username, email, password, confirmPassword)
                            }}>
                                Register
                            </Button>
                            <Button variant="outline" className="w-full">
                                Register with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <a onClick={() => navigate('/login')} className="underline underline-offset-4">
                                Sign In
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
