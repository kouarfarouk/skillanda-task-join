
import React from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { 
  PlusCircle, 
  Users,
  Calendar, 
  Clock 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Projects = () => {
  const navigate = useNavigate();
  
  // Mock projects data
  const projects = [
    {
      id: 1,
      name: 'Website Overhaul Project',
      description: 'Complete redesign and development of company website',
      status: 'In Progress',
      dueDate: '2025-08-25',
      progress: 32,
      members: [
        { id: 1, name: 'Alex Brown', avatar: 'https://i.pravatar.cc/150?img=11' },
        { id: 2, name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?img=32' },
        { id: 3, name: 'Taylor Kim', avatar: 'https://i.pravatar.cc/150?img=28' }
      ],
      taskCount: 12,
      completedTasks: 5
    },
    {
      id: 2,
      name: 'Mobile Application',
      description: 'Develop a companion mobile app for our main service',
      status: 'Planning',
      dueDate: '2025-09-15',
      progress: 10,
      members: [
        { id: 2, name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?img=32' },
        { id: 4, name: 'Sam Wilson', avatar: 'https://i.pravatar.cc/150?img=15' }
      ],
      taskCount: 8,
      completedTasks: 1
    },
    {
      id: 3,
      name: 'Q2 Marketing Campaign',
      description: 'Plan and execute marketing campaign for Q2 product launch',
      status: 'Not Started',
      dueDate: '2025-07-01',
      progress: 0,
      members: [
        { id: 5, name: 'Casey Martinez', avatar: 'https://i.pravatar.cc/150?img=29' },
        { id: 1, name: 'Alex Brown', avatar: 'https://i.pravatar.cc/150?img=11' }
      ],
      taskCount: 6,
      completedTasks: 0
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

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-1">Manage your work projects and teams</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-teal-600 hover:bg-teal-700"
              onClick={() => navigate('/create-project')}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Project
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="my">My Projects</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                        <p className="text-gray-600 mt-1">{project.description}</p>
                      </div>
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Due {new Date(project.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{project.completedTasks}/{project.taskCount} Tasks</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex -space-x-2">
                        {project.members.slice(0, 3).map((member) => (
                          <Avatar key={member.id} className="h-8 w-8 border-2 border-white">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        ))}
                        {project.members.length > 3 && (
                          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium border-2 border-white">
                            +{project.members.length - 3}
                          </div>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate(`/projects/${project.id}`)}
                      >
                        <Users className="h-4 w-4 mr-1" />
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="my">
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No assigned projects</h3>
              <p className="mt-2 text-gray-500">You aren't assigned to any projects yet.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="archived">
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No archived projects</h3>
              <p className="mt-2 text-gray-500">There are no archived projects to display.</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Projects;
