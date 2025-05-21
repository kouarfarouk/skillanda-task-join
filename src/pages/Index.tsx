
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#0EA5E9"/>
                <path d="M14 20H26M20 14V26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">Skillanda</h1>
            </div>
            <nav className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600 font-medium">Home</a>
              <a href="/tasks" className="text-gray-600 hover:text-teal-600 font-medium">Explorer</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 font-medium">My Tasks</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 font-medium">Projects</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-50"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button
                className="bg-teal-600 hover:bg-teal-700"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-24 text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">Task Management For Teams</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Skillanda helps teams organize, track, and manage their work together. Create projects, assign tasks, and collaborate in real-time.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-lg px-8"
              onClick={() => navigate('/tasks')}
            >
              Explore Tasks
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8"
              onClick={() => navigate('/projects')}
            >
              View Projects
            </Button>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-sky-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Create & Manage Tasks</h4>
              <p className="text-gray-600">Create tasks, assign them to team members, set deadlines, and track progress all in one place.</p>
            </Card>
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-teal-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Join Public Tasks</h4>
              <p className="text-gray-600">Browse publicly available tasks, request to join, and collaborate with other team members.</p>
            </Card>
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Team Communication</h4>
              <p className="text-gray-600">Chat with team members directly within tasks, share updates, and stay connected.</p>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-r from-teal-600 to-sky-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join Skillanda today and transform how your team works together.</p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/signup')}
            >
              Create Free Account
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#0EA5E9"/>
                <path d="M14 20H26M20 14V26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-gray-900 font-semibold">Skillanda</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-teal-600">Features</a>
              <a href="#" className="text-gray-600 hover:text-teal-600">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-teal-600">Documentation</a>
              <a href="#" className="text-gray-600 hover:text-teal-600">About Us</a>
            </div>
            <div className="mt-4 md:mt-0 text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Skillanda. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
