'use client';
import React, { useState } from 'react';
import MainLayout from '../../components/layouts/main-layout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { FiArrowRight, FiCheck, FiLock } from 'react-icons/fi';
// Mock data for UI demonstration
const modules = [
    {
        id: 'm1',
        name: 'Mindfulness',
        description: 'Learn to focus on the present moment without judgment',
        progress: 65,
        isActive: true,
        skills: [
            {
                id: 's1',
                name: 'Observe',
                description: 'Notice experiences without getting caught in them',
                masteryLevel: 3,
                isUnlocked: true,
                lessons: [
                    {
                        id: 'l1',
                        name: 'Introduction to Observation',
                        description: 'Understanding how to observe thoughts and feelings',
                        isCompleted: true,
                        exercises: 5,
                        xpReward: 20
                    },
                    {
                        id: 'l2',
                        name: 'Mindful Breathing',
                        description: 'Practice observing your breath without judgment',
                        isCompleted: true,
                        exercises: 3,
                        xpReward: 15
                    },
                    {
                        id: 'l3',
                        name: 'Body Scan Practice',
                        description: 'Learn to observe bodily sensations mindfully',
                        isCompleted: false,
                        exercises: 4,
                        xpReward: 25
                    }
                ]
            },
            {
                id: 's2',
                name: 'Describe',
                description: 'Put words to your experience, without judgment',
                masteryLevel: 2,
                isUnlocked: true,
                lessons: [
                    {
                        id: 'l4',
                        name: 'Labeling Thoughts',
                        description: 'Practice identifying and naming thoughts',
                        isCompleted: true,
                        exercises: 4,
                        xpReward: 20
                    },
                    {
                        id: 'l5',
                        name: 'Expressing Emotions',
                        description: 'Learn to accurately describe emotional states',
                        isCompleted: false,
                        exercises: 5,
                        xpReward: 25
                    }
                ]
            },
            {
                id: 's3',
                name: 'Participate',
                description: 'Enter fully into the current moment\'s activity',
                masteryLevel: 1,
                isUnlocked: true,
                lessons: [
                    {
                        id: 'l6',
                        name: 'Engaging Fully',
                        description: 'Practice being completely present in activities',
                        isCompleted: false,
                        exercises: 3,
                        xpReward: 15
                    }
                ]
            },
            {
                id: 's4',
                name: 'Non-judgmental',
                description: 'See but don\'t evaluate as good or bad',
                masteryLevel: 0,
                isUnlocked: false,
                lessons: [
                    {
                        id: 'l7',
                        name: 'Recognizing Judgments',
                        description: 'Learn to identify when you\'re making judgments',
                        isCompleted: false,
                        exercises: 4,
                        xpReward: 20
                    }
                ]
            }
        ]
    },
    {
        id: 'm2',
        name: 'Distress Tolerance',
        description: 'Skills to help accept and survive crisis situations',
        progress: 30,
        isActive: true,
        skills: [
            {
                id: 's5',
                name: 'STOP',
                description: 'Stop, Take a step back, Observe, Proceed mindfully',
                masteryLevel: 2,
                isUnlocked: true,
                lessons: [
                    {
                        id: 'l8',
                        name: 'Crisis Survival',
                        description: 'Techniques to get through overwhelming situations',
                        isCompleted: true,
                        exercises: 5,
                        xpReward: 25
                    }
                ]
            },
            {
                id: 's6',
                name: 'TIPP',
                description: 'Temperature, Intense exercise, Paced breathing, Paired muscle relaxation',
                masteryLevel: 1,
                isUnlocked: true,
                lessons: [
                    {
                        id: 'l9',
                        name: 'Physical Techniques',
                        description: 'Learn physical methods to reduce distress quickly',
                        isCompleted: false,
                        exercises: 4,
                        xpReward: 20
                    }
                ]
            }
        ]
    }
];
export default function LearnPage() {
    const [selectedModule, setSelectedModule] = useState(modules[0]);
    const [selectedSkill, setSelectedSkill] = useState(null);
    // Reset selected skill when module changes
    const handleModuleSelect = (module) => {
        setSelectedModule(module);
        setSelectedSkill(null);
    };
    // Function to render mastery level stars
    const renderMasteryStars = (level) => {
        const safeLevel = level || 0;
        return Array(5).fill(0).map((_, i) => (<span key={i} className={i < safeLevel ? "text-yellow-500" : "text-gray-300"}>★</span>));
    };
    return (<MainLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Learning Path</h1>
        </div>

        {/* Module Selector */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {modules.map((module) => (<Card key={module.id} className={`w-64 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow ${selectedModule.id === module.id ? 'border-primary-500 ring-2 ring-primary-200' : ''}`} onClick={() => handleModuleSelect(module)}>
              <div className="h-2 bg-gray-200">
                <div className="h-full bg-primary-500" style={{ width: `${module.progress}%` }}></div>
              </div>
              <CardHeader>
                <CardTitle>{module.name}</CardTitle>
                <CardDescription className="line-clamp-2">{module.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="text-sm text-gray-500">
                  Progress: {module.progress}%
                </div>
              </CardFooter>
            </Card>))}
        </div>

        {/* Skills */}
        {selectedModule && (<div>
            <h2 className="text-2xl font-bold mb-4">
              {selectedModule.name} Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedModule.skills.map((skill) => (<Card key={skill.id} className={`cursor-pointer hover:shadow-md transition-shadow ${(selectedSkill === null || selectedSkill === void 0 ? void 0 : selectedSkill.id) === skill.id ? 'border-primary-500 ring-2 ring-primary-200' : ''} ${!skill.isUnlocked ? 'opacity-70' : ''}`} onClick={() => skill.isUnlocked && setSelectedSkill(skill)}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        {!skill.isUnlocked && <FiLock className="mr-2 text-gray-400"/>}
                        {skill.name}
                      </CardTitle>
                      <div className="text-sm">{renderMasteryStars(skill.masteryLevel)}</div>
                    </div>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      {skill.isUnlocked ? (<div className="flex justify-between">
                          <span>{skill.lessons.length} lessons</span>
                          <span>{skill.lessons.filter((l) => l.isCompleted).length}/{skill.lessons.length} completed</span>
                        </div>) : (<div className="text-center text-gray-500">
                          Complete previous skills to unlock
                        </div>)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant={skill.isUnlocked ? "primary" : "ghost"} className="w-full" disabled={!skill.isUnlocked}>
                      {skill.isUnlocked ? 'Practice Skill' : 'Locked'}
                    </Button>
                  </CardFooter>
                </Card>))}
            </div>
          </div>)}

        {/* Lessons for selected skill */}
        {selectedSkill && (<div>
            <h2 className="text-2xl font-bold mb-4">
              {selectedSkill.name} Lessons
            </h2>
            <div className="space-y-4">
              {selectedSkill.lessons.map((lesson) => (<Card key={lesson.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        {lesson.isCompleted && (<FiCheck className="mr-2 text-green-500"/>)}
                        {lesson.name}
                      </CardTitle>
                      <div className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm">
                        {lesson.xpReward} XP
                      </div>
                    </div>
                    <CardDescription>{lesson.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">
                      {lesson.exercises} exercises
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      {lesson.isCompleted ? 'Review Lesson' : 'Start Lesson'}
                      <FiArrowRight className="ml-2"/>
                    </Button>
                  </CardFooter>
                </Card>))}
            </div>
          </div>)}
      </div>
    </MainLayout>);
}
