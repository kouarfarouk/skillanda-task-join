
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import NavBar from '@/components/NavBar';
import { 
  Clock, 
  Calendar, 
  CheckSquare, 
  Flag, 
  MessageSquare, 
  Paperclip,
  Users, 
  UserPlus, 
  X,
  Send
} from 'lucide-react';

// Mock data for a specific task
const mockTask = {
  id: 1,
  title: 'Website Redesign',
  description: 'Improve the user experience and visual design of our company website. This includes updating the homepage, product pages, and contact form to align with our new brand guidelines. We need to ensure the site is fully responsive and optimized for all devices.',
  status: 'In Progress',
  priority: 'High',
  dueDate: '2025-06-15',
  createdAt: '2025-05-01',
  progress: 35,
  members: [
    { id: 1, name: 'Alex Brown', avatar: 'https://i.pravatar.cc/150?img=11', role: 'Creator' },
    { id: 2, name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?img=32', role: 'Designer' },
    { id: 3, name: 'Taylor Kim', avatar: 'https://i.pravatar.cc/150?img=28', role: 'Developer' }
  ],
  joinRequests: [
    { id: 4, name: 'Sam Wilson', avatar: 'https://i.pravatar.cc/150?img=15', role: 'UI/UX Designer' },
    { id: 5, name: 'Casey Martinez', avatar: 'https://i.pravatar.cc/150?img=29', role: 'Frontend Developer' }
  ],
  tags: ['Design', 'Frontend', 'UX'],
  subtasks: [
    { id: 1, title: 'Create wireframes', completed: true },
    { id: 2, title: 'Design new homepage', completed: true },
    { id: 3, title: 'Implement responsive navigation', completed: false },
    { id: 4, title: 'Update product catalog', completed: false },
    { id: 5, title: 'Test on mobile devices', completed: false }
  ],
  messages: [
    { id: 1, user: { id: 1, name: 'Alex Brown', avatar: 'https://i.pravatar.cc/150?img=11' }, text: 'I\'ve uploaded the design files to the shared folder. Let me know what you think!', timestamp: '2025-05-18T14:30:00' },
    { id: 2, user: { id: 999, name: 'You', avatar: 'https://i.pravatar.cc/150?img=50' }, text: 'These look great! I\'ll start implementing the homepage design this week.', timestamp: '2025-05-18T15:45:00' },
    { id: 3, user: { id: 3, name: 'Taylor Kim', avatar: 'https://i.pravatar.cc/150?img=28' }, text: 'Just a quick question - are we using the new color palette for all pages or just the homepage?', timestamp: '2025-05-19T09:15:00' },
    { id: 4, user: { id: 999, name: 'You', avatar: 'https://i.pravatar.cc/150?img=50' }, text: 'All pages should use the new palette. I\'ve added the color codes to the project documentation.', timestamp: '2025-05-19T10:22:00' }
  ]
};

const currentUserId = 999; // Mock current user ID

const TaskDetail = () => {
  const { id } = useParams<{id: string}>();
  const { toast } = useToast();
  const [newMessage, setNewMessage] = useState('');
  
  // In a real app, we would fetch the task based on the ID
  const task = mockTask;
  
  // Function to calculate days until due date
  const getDaysUntilDue = () => {
    const dueDate = new Date(task.dueDate);
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const daysUntilDue = getDaysUntilDue();
  
  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the team.",
    });
    
    setNewMessage('');
  };

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
        {/* Task Header */}
        <div className="mb-6 bg-white rounded-lg shadow p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{task.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="text-gray-600">Edit</Button>
              <Button className="bg-teal-600 hover:bg-teal-700">Update Status</Button>
            </div>
          </div>
          
          <div className="bg-sky-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`rounded-full p-2 ${daysUntilDue < 3 ? 'bg-red-100' : 'bg-blue-100'}`}>
                <Clock className={`h-5 w-5 ${daysUntilDue < 3 ? 'text-red-600' : 'text-blue-600'}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Time Remaining</p>
                <p className={`font-medium ${daysUntilDue < 3 ? 'text-red-600' : 'text-gray-900'}`}>
                  {daysUntilDue} days
                </p>
              </div>
            </div>
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${task.progress}%` }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{task.progress}% Complete</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Task Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{task.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {task.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-sky-50 text-sky-700 hover:bg-sky-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {task.members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      {member.role === 'Creator' && (
                        <Badge className="bg-indigo-100 text-indigo-800">Creator</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subtasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {task.subtasks.map((subtask) => (
                    <div key={subtask.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`flex-shrink-0 rounded-full p-1 ${subtask.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <CheckSquare className={`h-4 w-4 ${subtask.completed ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-grow">
                        <p className={`text-sm ${subtask.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {subtask.title}
                        </p>
                      </div>
                      {!subtask.completed && (
                        <Button variant="outline" size="sm">Mark Complete</Button>
                      )}
                    </div>
                  ))}
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">Add Subtask</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Chat */}
          <div className="space-y-6">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Team Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Message Input Form */}
                <form onSubmit={handleSendMessage} className="space-y-3">
                  <div className="flex gap-2">
                    <Textarea 
                      placeholder="Type your message..." 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 min-h-[60px] resize-none"
                    />
                    <div className="flex flex-col gap-2">
                      <Button type="button" variant="outline" size="icon">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button type="submit" className="bg-teal-600 hover:bg-teal-700" size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </form>

                {/* Messages */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {task.messages.map((message) => {
                    const isCurrentUser = message.user.id === currentUserId;
                    return (
                      <div key={message.id} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[80%] ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage src={message.user.avatar} />
                            <AvatarFallback>{message.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className={`rounded-lg p-3 ${isCurrentUser ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                            <div className={`flex items-center gap-2 mb-1 ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                              <p className={`text-xs font-medium ${isCurrentUser ? 'text-teal-100' : 'text-gray-600'}`}>
                                {message.user.name}
                              </p>
                              <p className={`text-xs ${isCurrentUser ? 'text-teal-200' : 'text-gray-500'}`}>
                                {new Date(message.timestamp).toLocaleString()}
                              </p>
                            </div>
                            <p className="text-sm">{message.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskDetail;
