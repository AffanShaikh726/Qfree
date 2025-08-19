import { useState } from "react";
import { Users, Home, Menu } from "react-feather";
import Button from "$/components/Button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-base-100 w-full">
            <div className="max-w-7xl mx-auto w-full">
                <nav className=" backdrop-blur-sm bg-white/80 md:backdrop-blur-none md:bg-transparent flex items-center justify-between h-16 px-4 md:px-6">
                    {/* Brand/logo left */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Qfree Logo"
                            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md object-cover"
                        />
                        <span className=" text-2xl md:text-3xl font-bold text-base-content">
                            Qfree
                        </span>
                    </div>
                    {/* Hamburger menu for mobile */}
                    <button
                        className="md:hidden p-2 rounded hover:bg-gray-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                    {/* Nav links center (desktop) */}
                    <div className="hidden md:flex gap-8">
                        <a
                            href="#features"
                            className="p-2 px-4 group font-bold text-gray-700"
                        >
                            Features
                            <div className="bg-gray-700 h-[2.4px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </a>
                        <a
                            href="#how-it-works"
                            className="p-2 px-4 group font-bold text-gray-700"
                        >
                            How It Works
                            <div className="bg-gray-700 h-[2.4px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </a>
                        <a
                            href="#contact"
                            className="p-2 px-4 group font-bold text-gray-700"
                        >
                            Contacts
                            <div className="bg-gray-700 h-[2.4px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </a>
                    </div>
                    {/* Login buttons right (desktop) */}
                    <div className="hidden md:flex gap-2">
                        <Button
                            className="btn btn-sm bg-green-400 hover:bg-green-500 text-white border-none shadow-none rounded-full transition-colors duration-200"
                            icon={Users}
                            onClick={() =>
                                (window.location.href = "/StudentAuth")
                            }
                        >
                            Student
                        </Button>
                        <Button
                            className="btn btn-sm bg-orange-400 hover:bg-orange-500 text-white border-none shadow-none rounded-full transition-colors duration-200"
                            icon={Home}
                            onClick={() =>
                                (window.location.href = "/StallOwnerAuth")
                            }
                        >
                            Vendor
                        </Button>
                    </div>
                </nav>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/80 backdrop-blur border-t border-gray-200 px-4 pb-4">
                    <div className="flex flex-col gap-4 mt-2">
                        <a
                            href="#features"
                            className="text-base-content hover:text-primary transition font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-base-content hover:text-primary transition font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            How It Works
                        </a>
                        <a
                            href="#contact"
                            className="text-base-content hover:text-primary transition font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <div className="max-w-[200px] mx-auto w-full flex flex-col gap-2 ">
                            <Button
                                className="btn btn-sm bg-green-400 hover:bg-green-500 text-white border-none shadow-none w-full rounded-full transition-colors duration-200"
                                icon={Users}
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.location.href = "/StudentAuth";
                                }}
                            >
                                Student
                            </Button>
                            <Button
                                className="btn btn-sm bg-orange-400 hover:bg-orange-500 text-white border-none shadow-none w-full rounded-full transition-colors duration-200"
                                icon={Home}
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.location.href = "/StallOwnerAuth";
                                }}
                            >
                                Vendor
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
