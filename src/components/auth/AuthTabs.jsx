const AuthTabs = ({ tabs }) => {
  return (
    <div className="flex justify-center"> {/* Center the tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 font-medium text-sm ${
              tab.active 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={tab.onClick}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default AuthTabs;