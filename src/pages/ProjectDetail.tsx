
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Edit2, 
  Save, 
  X, 
  Calendar,
  Users,
  CheckCircle,
  Clock,
  Plus
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock project data - in real app this would come from API based on id
  const [projectData, setProjectData] = useState({
    id: 1,
    name: 'Website Overhaul Project',
    description: 'Complete redesign and development of company website with modern UI/UX principles and responsive design.',
    status: 'In Progress',
    dueDate: '2025-08-25',
    progress: 32,
    members: [
      { id: 1, name: 'Alex Brown', avatar: 'https://i.pravatar.cc/150?img=11', role: 'Project Manager' },
      { id: 2, name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?img=32', role: 'Frontend Developer' },
      { id: 3, name: 'Taylor Kim', avatar: 'https://i.pravatar.cc/150?img=28', role: 'UI/UX Designer' }
    ],
    taskCount: 12,
    completedTasks: 5
  });

  // Mock tasks data
  const tasks = [
    {
      id: 1,
      title: 'Design new homepage layout',
      status: 'Completed',
      assignee: 'Taylor Kim',
      dueDate: '2025-06-15',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Implement responsive navigation',
      status: 'In Progress',
      assignee: 'Jordan Lee',
      dueDate: '2025-06-20',
      priority: 'High'
    },
    {
      id: 3,
      title: 'Create contact form component',
      status: 'Todo',
      assignee: 'Jordan Lee',
      dueDate: '2025-06-25',
      priority: 'Medium'
    },
    {
      id: 4,
      title: 'Set up analytics tracking',
      status: 'Todo',
      assignee: 'Alex Brown',
      dueDate: '2025-07-01',
      priority: 'Low'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Not Started': return 'bg-gray-100 text-gray-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Todo': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSave = () => {
    console.log('Saving project:', projectData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/projects')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project Info Card */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Project Details</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    {isEditing ? (
                      <>
                        <Button size="sm" onClick={handleSave}>
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Project Name</label>
                  {isEditing ? (
                    <Input 
                      value={projectData.name}
                      onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
                    />
                  ) : (
                    <p className="text-lg font-semibold">{projectData.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Description</label>
                  {isEditing ? (
                    <Textarea 
                      value={projectData.description}
                      onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-700">{projectData.description}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 mb-2 block">Status</label>
                    <Badge className={getStatusColor(projectData.status)}>{projectData.status}</Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 mb-2 block">Due Date</label>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{new Date(projectData.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Progress</label>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{projectData.completedTasks}/{projectData.taskCount} Tasks Completed</span>
                      <span className="font-medium">{projectData.progress}%</span>
                    </div>
                    <Progress value={projectData.progress} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Members Card */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectData.members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Users className="h-4 w-4 mr-2" />
                    Add Member
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tasks Section */}
        <Card className="mt-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Project Tasks</CardTitle>
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{task.title}</h4>
                    <div className="flex gap-2">
                      <Badge className={getTaskStatusColor(task.status)} variant="secondary">
                        {task.status}
                      </Badge>
                      <Badge className={getPriorityColor(task.priority)} variant="secondary">
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {task.assignee}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Due {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                    {task.status === 'Completed' && (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProjectDetail;
