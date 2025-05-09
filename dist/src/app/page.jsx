'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiCheck, FiAward, FiStar } from "react-icons/fi";
export default function Home() {
    return (<div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Lingo-DBT</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Master DBT Skills</span>
                <span className="block text-primary-600">Through Gamified Learning</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Lingo-DBT is an interactive platform inspired by Duolingo that helps you learn
                Dialectical Behavior Therapy skills through engaging exercises, streaks, and
                achievement systems.
              </p>
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Journey
                    <FiArrowRight className="ml-2"/>
                  </Button>
                </Link>
                <Link href="/learn">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Skills
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[320px] rounded-xl bg-white p-2 shadow-xl ring-1 ring-gray-200">
                <div className="h-full overflow-hidden rounded-lg bg-primary-50">
                  <div className="h-24 bg-primary-600 p-4 text-white">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-white/20"></div>
                      <div className="ml-4">
                        <div className="text-xl font-bold">Day 8</div>
                        <div className="text-sm">Keep your streak going!</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white p-4 shadow-sm">
                        <h3 className="font-bold text-gray-800">Mindfulness</h3>
                        <div className="mt-2 h-2 rounded-full bg-gray-200">
                          <div className="h-full w-2/3 rounded-full bg-primary-500"></div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm">
                        <h3 className="font-bold text-gray-800">Distress Tolerance</h3>
                        <div className="mt-2 h-2 rounded-full bg-gray-200">
                          <div className="h-full w-1/3 rounded-full bg-primary-500"></div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-white p-4 shadow-sm">
                        <h3 className="font-bold text-gray-800">Achievements</h3>
                        <div className="mt-2 flex">
                          <FiAward className="h-6 w-6 text-yellow-500"/>
                          <FiAward className="h-6 w-6 text-yellow-500"/>
                          <FiAward className="h-6 w-6 text-gray-300"/>
                          <FiAward className="h-6 w-6 text-gray-300"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Learn DBT Skills in a Fun, Engaging Way
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform breaks down complex DBT concepts into bite-sized, interactive exercises
              that make learning both effective and enjoyable.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <FiCheck className="h-10 w-10 text-primary-600"/>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Daily Streaks</h3>
              <p className="mt-2 text-gray-600">
                Build a habit of practicing DBT skills with daily streak tracking and reminders.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <FiStar className="h-10 w-10 text-primary-600"/>
              <h3 className="mt-4 text-lg font-bold text-gray-900">XP & Levels</h3>
              <p className="mt-2 text-gray-600">
                Earn experience points as you complete exercises and track your progress through levels.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <FiAward className="h-10 w-10 text-primary-600"/>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Achievements</h3>
              <p className="mt-2 text-gray-600">
                Unlock achievements as you master different DBT skills and complete challenges.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <svg className="h-10 w-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Four Core Modules</h3>
              <p className="mt-2 text-gray-600">
                Structured learning path covering Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your DBT Journey?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join thousands of users who are building emotional resilience skills with Lingo-DBT.
            </p>
            <div className="mt-8">
              <Link href="/register">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <span className="text-gray-500">© 2025 Lingo-DBT. All rights reserved.</span>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-base text-gray-500">
                Designed with ❤️ for mental health and wellbeing
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>);
}
