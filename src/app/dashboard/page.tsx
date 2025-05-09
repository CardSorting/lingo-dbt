'use client';

import React from 'react';
import MainLayout from '../../components/layouts/main-layout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { FiArrowRight, FiAward, FiCalendar, FiCheck, FiLayers, FiTrendingUp } from 'react-icons/fi';

// Mock data for UI demonstration
const user = {
  name: 'Alex Johnson',
  level: 5,
  xp: 2540,
  nextLevelXp: 3000,
  currentStreak: 8,
  totalDaysCompleted: 36,
};

const modules = [
  {
    id: 'm1',
    name: 'Mindfulness',
    description: 'Learn to focus on the present moment without judgment',
    progress: 65,
    imageUrl: '/mindfulness.jpg',
    skills: [
      { id: 's1', name: 'Observe', isUnlocked: true, masteryLevel: 3 },
      { id: 's2', name: 'Describe', isUnlocked: true, masteryLevel: 2 },
      { id: 's3', name: 'Participate', isUnlocked: true, masteryLevel: 1 },
      { id: 's4', name: 'Non-judgmental', isUnlocked: false, masteryLevel: 0 },
    ],
  },
  {
    id: 'm2',
    name: 'Distress Tolerance',
    description: 'Skills to help accept and survive crisis situations',
    progress: 30,
    imageUrl: '/distress.jpg',
    skills: [
      { id: 's5', name: 'STOP', isUnlocked: true, masteryLevel: 2 },
      { id: 's6', name: 'TIPP', isUnlocked: true, masteryLevel: 1 },
      { id: 's7', name: 'Pros & Cons', isUnlocked: false, masteryLevel: 0 },
      { id: 's8', name: 'Radical Acceptance', isUnlocked: false, masteryLevel: 0 },
    ],
  },
  {
    id: 'm3',
    name: 'Emotion Regulation',
    description: 'Recognize and manage intense emotional responses',
    progress: 10,
    imageUrl: '/emotion.jpg',
    skills: [
      { id: 's9', name: 'Identify Emotions', isUnlocked: true, masteryLevel: 1 },
      { id: 's10', name: 'Check the Facts', isUnlocked: false, masteryLevel: 0 },
      { id: 's11', name: 'Opposite Action', isUnlocked: false, masteryLevel: 0 },
      { id: 's12', name: 'Problem Solving', isUnlocked: false, masteryLevel: 0 },
    ],
  },
  {
    id: 'm4',
    name: 'Interpersonal Effectiveness',
    description: 'Build and maintain positive relationships',
    progress: 0,
    imageUrl: '/interpersonal.jpg',
    skills: [
      { id: 's13', name: 'DEAR MAN', isUnlocked: false, masteryLevel: 0 },
      { id: 's14', name: 'GIVE', isUnlocked: false, masteryLevel: 0 },
      { id: 's15', name: 'FAST', isUnlocked: false, masteryLevel: 0 },
      { id: 's16', name: 'Validating Others', isUnlocked: false, masteryLevel: 0 },
    ],
  },
];

const recentAchievements = [
  { id: 'a1', name: 'First Step', description: 'Complete your first exercise', earned: '2 days ago' },
  { id: 'a2', name: 'Habit Forming', description: 'Complete exercises for 7 consecutive days', earned: '1 day ago' },
];

export default function Dashboard() {
  // Calculate XP progress percentage
  const xpProgressPercentage = Math.min(Math.round((user.xp / user.nextLevelXp) * 100), 100);

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome and Stats Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Welcome Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Welcome back, {user.name}!</CardTitle>
              <CardDescription>
                Keep up your {user.currentStreak} day streak! Continue your learning journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Level {user.level} • {user.xp}/{user.nextLevelXp} XP</div>
                    <div className="text-sm font-medium">{xpProgressPercentage}%</div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${xpProgressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <Button className="w-full">
                  Continue Learning <FiArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Current Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FiCalendar className="mr-2 h-8 w-8 text-primary-500" />
                <div>
                  <div className="text-2xl font-bold">{user.currentStreak} days</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Days Practiced</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FiCheck className="mr-2 h-8 w-8 text-primary-500" />
                <div>
                  <div className="text-2xl font-bold">{user.totalDaysCompleted} days</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Modules Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Learning Path</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <Card key={module.id} className="overflow-hidden">
                <div className="h-3 bg-gray-200">
                  <div
                    className="h-full bg-primary-500"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
                <CardHeader>
                  <CardTitle>{module.name}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress: {module.progress}%</span>
                      <span>{module.skills.filter(s => s.isUnlocked).length}/{module.skills.length} skills unlocked</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.skills.map((skill) => (
                        <div
                          key={skill.id}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            skill.isUnlocked
                              ? 'bg-primary-100 text-primary-700'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {skill.name}
                          {skill.masteryLevel > 0 && (
                            <span className="ml-1">{Array(skill.masteryLevel).fill('★').join('')}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={module.progress === 0 ? 'outline' : 'primary'}
                    className="w-full"
                  >
                    {module.progress === 0 ? 'Start Learning' : 'Continue Learning'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Achievements Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentAchievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <FiAward className="h-6 w-6 text-yellow-500" />
                    <CardTitle className="text-lg">{achievement.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-2">Earned: {achievement.earned}</p>
                </CardContent>
              </Card>
            ))}
            <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
              <FiAward className="h-8 w-8 text-gray-400 mb-2" />
              <h3 className="font-medium text-gray-600">More to Unlock!</h3>
              <p className="text-center text-sm text-gray-500 mt-1">
                Complete more exercises to earn achievements
              </p>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
