export const Error = ({ message, code }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center text-2xl font-bold mb-4">
                {code ? `${code} - ` : ""}
                {message}
            </div>
            <button
                onClick={() => {
                    window.location.reload();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Reload
            </button>
        </div>
    );
};