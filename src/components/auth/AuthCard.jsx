const AuthCard = ({ title, description, children }) => {
    return (
        <div className="w-full max-w-md border border-gray-200 bg-white rounded-lg shadow-sm">
            <div className="p-6 text-center align-items-center">
                <div className="d-flex justify-content-center">
                    <img
                        src="/logo.png"
                        alt="QueueFree Logo"
                        height="80px"
                        width="80px"
                    />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {title}
                </h2>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="px-6 pb-6">{children}</div>
        </div>
    );
};

export default AuthCard;
