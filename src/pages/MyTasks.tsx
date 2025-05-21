
import React from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const MyTasks = () => {
  const navigate = useNavigate();
  
  // Mock tasks data
  const myTasks = [
    {
      id: 1,
      title: 'Website Redesign',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2025-06-15',
      progress: 35,
      tags: ['Design', 'Frontend', 'UX']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      status: 'Planning',
      priority: 'Medium',
      dueDate: '2025-07-10',
      progress: 10,
      tags: ['Mobile', 'React Native', 'API']
    },
    {
      id: 3,
      title: 'Content Creation for Blog',
      status: 'Not Started',
      priority: 'Low',
      dueDate: '2025-06-22',
      progress: 0,
      tags: ['Content', 'Marketing']
    }
  ];

  // Get status color
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Not Started': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
            <p className="text-gray-600 mt-1">Manage and track your assigned tasks</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-teal-600 hover:bg-teal-700"
              onClick={() => navigate('/create-task')}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Create New Task
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active Tasks</TabsTrigger>
            <TabsTrigger value="completed">Completed Tasks</TabsTrigger>
            <TabsTrigger value="created">Created By Me</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myTasks.map((task) => (
                <Card 
                  key={task.id} 
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/tasks/${task.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{task.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                        <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{task.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-teal-600 h-2 rounded-full" 
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {task.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="bg-sky-50 text-sky-700 hover:bg-sky-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No completed tasks</h3>
              <p className="mt-2 text-gray-500">You don't have any completed tasks yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="created">
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No created tasks</h3>
              <p className="mt-2 text-gray-500">You haven't created any tasks yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MyTasks;
