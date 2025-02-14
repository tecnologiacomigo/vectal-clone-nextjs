const WelcomeScreen: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <img src="/vectal.svg" alt="Vectal Logo" className="w-16 h-16 mb-4 text-white" />
      <h1 className="text-xl font-semibold mb-2">Welcome to Chat</h1>
      <p className="text-center text-white">
        What can I help you with?
      </p>
    </div>
  );

export default WelcomeScreen;