
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import NavBar from '@/components/NavBar';

// Mock data for skillers
const mockSkillers = [
  {
    id: 1,
    name: 'Alex Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=1',
    totalPoints: 2847,
    githubUrl: 'https://github.com/alexrod',
    skills: ['React', 'Node.js', 'TypeScript'],
    completedTasks: 47,
    rating: 4.9,
    rateCount: 23,
    tagline: 'Building scalable web applications with passion',
    socialLinks: {
      twitter: 'https://twitter.com/alexrod',
      linkedin: 'https://linkedin.com/in/alexrod'
    },
    category: ['bestRated', 'top5', 'fastResponders', 'mostTasks']
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=5',
    totalPoints: 3156,
    githubUrl: 'https://github.com/sarahchen',
    skills: ['Python', 'Machine Learning', 'AWS'],
    completedTasks: 62,
    rating: 4.8,
    rateCount: 31,
    tagline: 'AI enthusiast crafting intelligent solutions',
    socialLinks: {
      twitter: 'https://twitter.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen'
    },
    category: ['bestRated', 'top5', 'top10', 'mostTasks']
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    avatar: 'https://i.pravatar.cc/150?img=3',
    totalPoints: 2234,
    githubUrl: 'https://github.com/marcusj',
    skills: ['Vue.js', 'PHP', 'MySQL'],
    completedTasks: 38,
    rating: 4.7,
    rateCount: 18,
    tagline: 'Full-stack developer with 5+ years experience',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/marcusj'
    },
    category: ['top10', 'top20', 'previouslyCollaborated', 'fastResponders']
  },
  {
    id: 4,
    name: 'Emily Zhang',
    avatar: 'https://i.pravatar.cc/150?img=9',
    totalPoints: 1987,
    githubUrl: 'https://github.com/emilyzhang',
    skills: ['Flutter', 'Dart', 'Firebase'],
    completedTasks: 29,
    rating: 4.6,
    rateCount: 14,
    tagline: 'Mobile-first developer creating beautiful apps',
    socialLinks: {
      twitter: 'https://twitter.com/emilyzhang',
      linkedin: 'https://linkedin.com/in/emilyzhang'
    },
    category: ['top20', 'fastResponders', 'previouslyCollaborated']
  }
];

const Skillers = () => {
  const [activeTab, setActiveTab] = useState('bestRated');

  const getFilteredSkillers = (category: string) => {
    return mockSkillers.filter(skiller => skiller.category.includes(category));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : index < rating
            ? 'fill-yellow-200 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Discover Developers Building the Future</h1>
            <p className="text-gray-600">Explore top contributors on Skillanda — sorted by impact, speed, and reliability.</p>
          </div>
        </div>

        {/* Tabs for filtering */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6 flex-wrap h-auto">
            <TabsTrigger value="bestRated">Best Rated</TabsTrigger>
            <TabsTrigger value="top5">Top 5%</TabsTrigger>
            <TabsTrigger value="top10">Top 10%</TabsTrigger>
            <TabsTrigger value="top20">Top 20%</TabsTrigger>
            <TabsTrigger value="previouslyCollaborated">Previously Collaborated</TabsTrigger>
            <TabsTrigger value="fastResponders">Fast Responders</TabsTrigger>
            <TabsTrigger value="mostTasks">Most Tasks Finished</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bestRated">
            <SkillerGrid skillers={getFilteredSkillers('bestRated')} />
          </TabsContent>
          
          <TabsContent value="top5">
            <SkillerGrid skillers={getFilteredSkillers('top5')} />
          </TabsContent>
          
          <TabsContent value="top10">
            <SkillerGrid skillers={getFilteredSkillers('top10')} />
          </TabsContent>
          
          <TabsContent value="top20">
            <SkillerGrid skillers={getFilteredSkillers('top20')} />
          </TabsContent>
          
          <TabsContent value="previouslyCollaborated">
            <SkillerGrid skillers={getFilteredSkillers('previouslyCollaborated')} />
          </TabsContent>
          
          <TabsContent value="fastResponders">
            <SkillerGrid skillers={getFilteredSkillers('fastResponders')} />
          </TabsContent>
          
          <TabsContent value="mostTasks">
            <SkillerGrid skillers={getFilteredSkillers('mostTasks')} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

type SkillerGridProps = {
  skillers: typeof mockSkillers;
};

const SkillerGrid = ({ skillers }: SkillerGridProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : index < rating
            ? 'fill-yellow-200 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skillers.map((skiller) => (
        <Card key={skiller.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={skiller.avatar} />
                <AvatarFallback>{skiller.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold">{skiller.name}</CardTitle>
                <p className="text-sm text-gray-600">{skiller.totalPoints.toLocaleString()} points</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pb-4">
            {/* Tagline */}
            {skiller.tagline && (
              <p className="text-sm text-gray-600 italic mb-4 line-clamp-2">"{skiller.tagline}"</p>
            )}
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {skiller.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-sky-50 text-sky-700 hover:bg-sky-100">
                  {skill}
                </Badge>
              ))}
            </div>
            
            {/* Stats */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Completed Tasks:</span>
                <span className="font-medium">{skiller.completedTasks}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Rating:</span>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {renderStars(skiller.rating)}
                  </div>
                  <span className="font-medium">{skiller.rating}</span>
                  <span className="text-gray-500">({skiller.rateCount})</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {skiller.githubUrl && (
                  <a href={skiller.githubUrl} target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {skiller.socialLinks.twitter && (
                  <a href={skiller.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                     className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {skiller.socialLinks.linkedin && (
                  <a href={skiller.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                     className="text-gray-600 hover:text-blue-800 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
              
              <a href={`/skiller/${skiller.id}`} 
                 className="text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1 text-sm">
                View Profile
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Skillers;
