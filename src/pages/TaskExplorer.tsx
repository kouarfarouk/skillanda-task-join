
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import NavBar from '@/components/NavBar';

// Mock data for tasks
const mockTasks = [
  {
    id: 1,
    title: 'Website Redesign',
    description: 'Improve the user experience and visual design of our company website.',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2025-06-15',
    members: ['AB', 'CD', 'EF'],
    tags: ['Design', 'Frontend'],
    creator: {
      name: 'Alex Brown',
      avatar: 'https://i.pravatar.cc/150?img=11'
    }
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Create a cross-platform mobile app for our product.',
    status: 'Planning',
    priority: 'Medium',
    dueDate: '2025-07-30',
    members: ['MN', 'OP'],
    tags: ['Mobile', 'Development'],
    creator: {
      name: 'Maria Garcia',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  },
  {
    id: 3,
    title: 'Data Analysis for Q2',
    description: 'Analyze user behavior data from the second quarter and create reports.',
    status: 'Planning',
    priority: 'Medium',
    dueDate: '2025-06-10',
    members: ['GH'],
    tags: ['Analytics', 'Research'],
    creator: {
      name: 'James Wilson',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  },
  {
    id: 4,
    title: 'Marketing Campaign',
    description: 'Plan and execute a marketing campaign for our new product launch.',
    status: 'Not Started',
    priority: 'High',
    dueDate: '2025-08-01',
    members: ['IJ', 'KL'],
    tags: ['Marketing', 'Strategy'],
    creator: {
      name: 'Sophia Lee',
      avatar: 'https://i.pravatar.cc/150?img=7'
    }
  },
  {
    id: 5,
    title: 'API Integration',
    description: 'Integrate third-party payment processing API with our platform.',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2025-06-20',
    members: ['QR', 'ST'],
    tags: ['Backend', 'API'],
    creator: {
      name: 'David Chen',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  },
  {
    id: 6,
    title: 'User Testing',
    description: 'Conduct user testing sessions for the new interface.',
    status: 'Not Started',
    priority: 'Low',
    dueDate: '2025-07-15',
    members: ['UV'],
    tags: ['UX', 'Testing'],
    creator: {
      name: 'Emma Johnson',
      avatar: 'https://i.pravatar.cc/150?img=9'
    }
  }
];

const TaskExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const [joinedTasks, setJoinedTasks] = useState<number[]>([]);
  const [requestedTasks, setRequestedTasks] = useState<number[]>([]);

  const handleJoinRequest = (taskId: number) => {
    if (joinedTasks.includes(taskId) || requestedTasks.includes(taskId)) {
      return;
    }
    
    setRequestedTasks([...requestedTasks, taskId]);
    toast({
      title: "Join Request Sent",
      description: "The task owner will review your request.",
      duration: 3000
    });
  };

  const filteredTasks = mockTasks.filter((task) => {
    return task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Not Started': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Task Explorer</h1>
            <p className="text-gray-600">Discover and join public tasks</p>
          </div>
          
          <div className="w-full md:w-1/3">
            <Input 
              placeholder="Search tasks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Tasks</TabsTrigger>
            <TabsTrigger value="inProgress">In Progress</TabsTrigger>
            <TabsTrigger value="planning">Planning</TabsTrigger>
            <TabsTrigger value="notStarted">Not Started</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => (
                <TaskCard 
                  key={task.id}
                  task={task}
                  isRequested={requestedTasks.includes(task.id)}
                  isJoined={joinedTasks.includes(task.id)}
                  onJoinRequest={handleJoinRequest}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="inProgress">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.filter(task => task.status === 'In Progress').map((task) => (
                <TaskCard 
                  key={task.id}
                  task={task}
                  isRequested={requestedTasks.includes(task.id)}
                  isJoined={joinedTasks.includes(task.id)}
                  onJoinRequest={handleJoinRequest}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="planning">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.filter(task => task.status === 'Planning').map((task) => (
                <TaskCard 
                  key={task.id}
                  task={task}
                  isRequested={requestedTasks.includes(task.id)}
                  isJoined={joinedTasks.includes(task.id)}
                  onJoinRequest={handleJoinRequest}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="notStarted">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.filter(task => task.status === 'Not Started').map((task) => (
                <TaskCard 
                  key={task.id}
                  task={task}
                  isRequested={requestedTasks.includes(task.id)}
                  isJoined={joinedTasks.includes(task.id)}
                  onJoinRequest={handleJoinRequest}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

type TaskCardProps = {
  task: typeof mockTasks[0];
  isRequested: boolean;
  isJoined: boolean;
  onJoinRequest: (taskId: number) => void;
};

const TaskCard = ({ task, isRequested, isJoined, onJoinRequest }: TaskCardProps) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Not Started': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{task.title}</CardTitle>
          <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{task.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {task.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-sky-50 text-sky-700 hover:bg-sky-100">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
          </div>
          <div className="text-sm text-gray-500">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-7 w-7">
              <AvatarImage src={task.creator.avatar} />
              <AvatarFallback>{task.creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{task.creator.name}</span>
          </div>
          
          <div className="flex -space-x-2">
            {task.members.slice(0, 3).map((member, index) => (
              <Avatar key={index} className="h-6 w-6 border-2 border-white">
                <AvatarFallback className="text-xs bg-teal-500 text-white">{member}</AvatarFallback>
              </Avatar>
            ))}
            {task.members.length > 3 && (
              <Avatar className="h-6 w-6 border-2 border-white">
                <AvatarFallback className="text-xs bg-gray-500 text-white">
                  +{task.members.length - 3}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {isJoined ? (
          <Button variant="outline" className="w-full bg-teal-50 text-teal-700 hover:bg-teal-100 border-teal-200" disabled>
            Joined
          </Button>
        ) : isRequested ? (
          <Button variant="outline" className="w-full bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200" disabled>
            Request Pending
          </Button>
        ) : (
          <Button 
            variant="default" 
            className="w-full bg-teal-600 hover:bg-teal-700"
            onClick={() => onJoinRequest(task.id)}
          >
            Request to Join
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TaskExplorer;
