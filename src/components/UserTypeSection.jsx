import { useRouter } from "next/navigation"; // 1. Import useRouter

import { Users, Home, Shield } from "react-feather";
import Button from "$/components/Button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "$/components/Card";

const UserTypeSection = () => {
    const router = useRouter(); // 2. Initialize the router

    const userTypes = [
        {
            icon: Users,
            title: "Students",
            description:
                "Pre-order meals, skip queues, and enjoy hassle-free dining between classes.",
            features: [
                "Browse multiple stall menus",
                "Choose pickup time slots",
                "UPI payment integration",
                "Order history & favorites",
                "QR code pickup",
            ],
            buttonText: "Student Portal",
            buttonVariant: "primary",
            gradient: "from-blue-600 to-blue-400",
            // 3. Add a path for navigation
            path: "/StudentAuth",
        },
        {
            icon: Home,
            title: "Stall Owners",
            description:
                "Manage your menu, track orders, and grow your business with data insights.",
            features: [
                "Real-time order management",
                "Menu & pricing control",
                "Sales analytics & reports",
                "Customer feedback system",
                "Inventory tracking",
            ],
            buttonText: "Vendor Dashboard",
            buttonVariant: "secondary",
            gradient: "from-orange-500 to-orange-300",
            // 3. Add a path for navigation
            path: "/StallOwnerAuth",
        },
        {
            icon: Shield,
            title: "Admin Panel",
            description:
                "Oversee the entire system, manage users, and monitor platform performance.",
            features: [
                "User management system",
                "Stall approval process",
                "Platform analytics",
                "Payment monitoring",
                "System configuration",
            ],
            buttonText: "Admin Access",
            buttonVariant: "tertiary",
            gradient: "from-gray-600 to-gray-400",
            // 3. Add a path for navigation (you can change this if needed)
            path: "/admin-auth",
        },
    ];

    return (
        <section className="py-20 bg-[#ffd500]">
            <div className="container px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                        Choose Your{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            Portal
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Different experiences tailored for students, vendors,
                        and administrators.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {userTypes.map((userType, index) => (
                        <Card key={index} className="relative">
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-5 group-hover:opacity-10 transition-all duration-300 pointer-events-none z-0`}
                            ></div>

                            <CardHeader className="relative z-10">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div
                                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${userType.gradient} flex items-center justify-center`}
                                    >
                                        <userType.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>{userType.title}</CardTitle>
                                </div>
                                <CardDescription>
                                    {userType.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-6 relative z-10">
                                <ul className="space-y-3">
                                    {userType.features.map(
                                        (feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center space-x-2"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                <span className="text-sm text-gray-600">
                                                    {feature}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>

                                <Button
                                    variant={userType.buttonVariant}
                                    className="w-full"
                                    type="button"
                                    onClick={() => {
                                        if (!userType.path) return;
                                        // Optional: console.log to verify it fires
                                        console.log(
                                            "Navigating to",
                                            userType.path
                                        );
                                        router.push(userType.path);
                                    }}
                                >
                                    {userType.buttonText}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserTypeSection;
