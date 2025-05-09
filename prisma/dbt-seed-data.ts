/**
 * DBT Seed Data
 * 
 * This file contains comprehensive DBT (Dialectical Behavior Therapy) content structured for our 
 * Duolingo-inspired learning application. The data follows the structure of our database schema
 * with modules, skills, lessons, and exercises.
 */

export const dbtModules = [
  {
    name: "Mindfulness",
    description: "Learn to be fully aware and present in the moment, observing thoughts and feelings without judgment.",
    orderIndex: 1,
    imageUrl: "/images/modules/mindfulness.jpg",
    skills: [
      {
        name: "Wise Mind",
        description: "Balance between your emotional mind and reasonable mind.",
        orderIndex: 1,
        imageUrl: "/images/skills/wise-mind.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Understanding the Three Mind States",
            description: "Learn about Reasonable Mind, Emotion Mind, and Wise Mind.",
            orderIndex: 1,
            xpReward: 10,
            exercises: [
              {
                type: "multiple_choice",
                question: "Which mind state involves thinking logically and rationally?",
                correctAnswer: "Reasonable Mind",
                options: JSON.stringify(["Emotion Mind", "Reasonable Mind", "Wise Mind", "Wandering Mind"]),
                explanation: "Reasonable Mind is the state where you think logically, focusing on facts and rational thinking.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "Which mind state involves strong feelings driving your thoughts and actions?",
                correctAnswer: "Emotion Mind",
                options: JSON.stringify(["Wise Mind", "Emotion Mind", "Reasonable Mind", "Judgmental Mind"]),
                explanation: "Emotion Mind is when your feelings control your thinking and behavior.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "What is Wise Mind?",
                correctAnswer: "The integration of both Emotion Mind and Reasonable Mind",
                options: JSON.stringify([
                  "The integration of both Emotion Mind and Reasonable Mind", 
                  "Purely logical thinking", 
                  "Making decisions based only on emotions", 
                  "Ignoring both emotions and logic"
                ]),
                explanation: "Wise Mind is the balanced integration of both emotional experience and logical analysis.",
                difficultyLevel: 2
              },
              {
                type: "text_input",
                question: "Complete this sentence: Wise Mind combines _______ and _______ to make balanced decisions.",
                correctAnswer: "emotion,reason",
                options: JSON.stringify([]),
                explanation: "Wise Mind combines emotion and reason to make balanced decisions.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Recognizing Your Mind States",
            description: "Learn to identify which mind state you're in at different times.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "You receive criticism at work and immediately think 'I'm going to get fired!' Which mind state are you in?",
                correctAnswer: "Emotion Mind",
                options: JSON.stringify(["Reasonable Mind", "Emotion Mind", "Wise Mind", "No Mind"]),
                explanation: "This catastrophic thinking is driven by fear, indicating Emotion Mind is active.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "When making a major life decision, you carefully analyze all the pros and cons without considering how you feel about each option. Which mind state are you in?",
                correctAnswer: "Reasonable Mind",
                options: JSON.stringify(["Emotion Mind", "Reasonable Mind", "Wise Mind", "Analytical Mind"]),
                explanation: "Focusing solely on logical analysis without considering emotional impact is Reasonable Mind.",
                difficultyLevel: 2
              },
              {
                type: "text_input",
                question: "Describe a situation where you were in Emotion Mind recently:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "Self-reflective exercise to identify Emotion Mind states in your life.",
                difficultyLevel: 3
              }
            ]
          },
          {
            name: "Practicing Wise Mind",
            description: "Exercises to help you access your Wise Mind in daily situations.",
            orderIndex: 3,
            xpReward: 20,
            exercises: [
              {
                type: "text_input",
                question: "Describe a decision you need to make. What does your Reasonable Mind say?",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "This exercise helps you identify the logical analysis part of decision-making.",
                difficultyLevel: 3
              },
              {
                type: "text_input",
                question: "For the same decision, what does your Emotion Mind say? How do you feel about each option?",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "This exercise helps you acknowledge emotional components of decision-making.",
                difficultyLevel: 3
              },
              {
                type: "text_input",
                question: "Now, take a moment to breathe deeply and ask your Wise Mind what to do. What answer comes?",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "This exercise practices integrating both reason and emotion for balanced decisions.",
                difficultyLevel: 3
              }
            ]
          }
        ]
      },
      {
        name: "What Skills",
        description: "Observe, Describe, and Participate - the 'what' skills of mindfulness.",
        orderIndex: 2,
        imageUrl: "/images/skills/what-skills.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Observing",
            description: "Learn to notice and attend to events, emotions, and other responses without trying to change them.",
            orderIndex: 1,
            xpReward: 10,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does 'observing' mean in mindfulness practice?",
                correctAnswer: "Noticing without reacting",
                options: JSON.stringify([
                  "Noticing without reacting", 
                  "Analyzing why you feel a certain way", 
                  "Changing negative thoughts to positive ones", 
                  "Avoiding uncomfortable sensations"
                ]),
                explanation: "Observing means simply noticing what is happening without immediate judgment or reaction.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "Which of the following is an example of 'observing'?",
                correctAnswer: "Noticing your heart racing without trying to calm down",
                options: JSON.stringify([
                  "Analyzing why you're feeling anxious", 
                  "Telling yourself to stop being afraid", 
                  "Noticing your heart racing without trying to calm down", 
                  "Distracting yourself from unpleasant sensations"
                ]),
                explanation: "Simply noticing bodily sensations without trying to change them is a pure observation.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Describing",
            description: "Learn to apply labels to what you observe using words.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does 'describing' mean in mindfulness practice?",
                correctAnswer: "Putting words to what you observe",
                options: JSON.stringify([
                  "Analyzing why things happen", 
                  "Putting words to what you observe", 
                  "Judging experiences as good or bad", 
                  "Changing negative thoughts"
                ]),
                explanation: "Describing means putting factual words to your observations, like 'My heart is beating fast' rather than 'I'm panicking.'",
                difficultyLevel: 1
              },
              {
                type: "text_input",
                question: "Practice describing: Instead of 'I'm so angry!', write a more descriptive statement about anger:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "A good description might be 'I notice my jaw is tight, my face feels hot, and I'm having thoughts about being treated unfairly.'",
                difficultyLevel: 3
              }
            ]
          },
          {
            name: "Participating",
            description: "Learn to fully engage in the present moment activity.",
            orderIndex: 3,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does 'participating' mean in mindfulness practice?",
                correctAnswer: "Fully engaging in the present activity without self-consciousness",
                options: JSON.stringify([
                  "Multi-tasking efficiently", 
                  "Planning while doing activities", 
                  "Fully engaging in the present activity without self-consciousness", 
                  "Analyzing your performance while doing tasks"
                ]),
                explanation: "Participating means becoming one with your activity, fully immersed without separation between 'you' and what you're doing.",
                difficultyLevel: 2
              },
              {
                type: "text_input",
                question: "Describe an activity where you've experienced 'flow' or complete immersion:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "Flow states are perfect examples of participating - when you're so engaged that time seems to disappear.",
                difficultyLevel: 2
              }
            ]
          }
        ]
      },
      {
        name: "How Skills",
        description: "Non-judgmentally, One-mindfully, and Effectively - the 'how' skills of mindfulness.",
        orderIndex: 3,
        imageUrl: "/images/skills/how-skills.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Non-judgmentally",
            description: "Learn to take a non-judgmental stance, seeing but not evaluating.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "Which statement demonstrates a non-judgmental observation?",
                correctAnswer: "I notice I didn't finish the project on time",
                options: JSON.stringify([
                  "I notice I didn't finish the project on time", 
                  "I'm such a failure for not finishing on time", 
                  "It's terrible that I missed the deadline", 
                  "I always mess up important deadlines"
                ]),
                explanation: "Non-judgmental statements simply state facts without adding evaluations like good/bad or success/failure.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "When practicing non-judgmental stance, what do you do with judgments that arise?",
                correctAnswer: "Notice them without attaching to them",
                options: JSON.stringify([
                  "Try to suppress them completely", 
                  "Replace them with positive judgments", 
                  "Notice them without attaching to them", 
                  "Analyze why you're being judgmental"
                ]),
                explanation: "Being non-judgmental doesn't mean never having judgments arise, but rather noticing them without getting caught up in them.",
                difficultyLevel: 3
              }
            ]
          },
          {
            name: "One-mindfully",
            description: "Learn to focus attention on one thing in the present moment.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does it mean to do something 'one-mindfully'?",
                correctAnswer: "Doing one thing at a time with full attention",
                options: JSON.stringify([
                  "Doing one thing at a time with full attention", 
                  "Multi-tasking efficiently", 
                  "Planning your next activity while doing the current one", 
                  "Doing things quickly to save time"
                ]),
                explanation: "One-mindfully means doing exactly what you're doing while you're doing it, with complete attention.",
                difficultyLevel: 1
              },
              {
                type: "text_input",
                question: "Identify three common activities where you typically multi-task instead of being one-mindful:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "Common examples include scrolling on phone while watching TV, thinking about work while with family, or planning the day while showering.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Effectively",
            description: "Learn to focus on what works rather than what's 'right' or 'fair'.",
            orderIndex: 3,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does it mean to act 'effectively'?",
                correctAnswer: "Doing what works in the situation, not what you feel should work",
                options: JSON.stringify([
                  "Always following the rules", 
                  "Doing what's morally right regardless of outcome", 
                  "Doing what works in the situation, not what you feel should work", 
                  "Finding the quickest solution"
                ]),
                explanation: "Being effective means focusing on what will work to achieve your goals in reality, not what 'should' work in an ideal world.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "Your boss is unfairly critical of your work. Acting effectively would involve:",
                correctAnswer: "Staying calm and addressing their concerns professionally",
                options: JSON.stringify([
                  "Arguing to prove you're right", 
                  "Complaining to coworkers about the unfairness", 
                  "Ignoring the feedback completely", 
                  "Staying calm and addressing their concerns professionally"
                ]),
                explanation: "Even though the criticism may be unfair, the effective response focuses on what will work best for your goals.",
                difficultyLevel: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Distress Tolerance",
    description: "Learn skills to tolerate pain in difficult situations without making things worse.",
    orderIndex: 2,
    imageUrl: "/images/modules/distress-tolerance.jpg",
    skills: [
      {
        name: "Crisis Survival Skills",
        description: "Skills to help you get through intense emotional situations without making them worse.",
        orderIndex: 1,
        imageUrl: "/images/skills/crisis-survival.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "TIPP Skills",
            description: "Temperature, Intense exercise, Paced breathing, and Progressive muscle relaxation to change your physiology quickly.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does the 'T' in TIPP stand for?",
                correctAnswer: "Temperature",
                options: JSON.stringify(["Time", "Temperature", "Tension", "Thinking"]),
                explanation: "T stands for Temperature. Changing your body temperature can rapidly change your emotional state.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "Which TIPP skill involves splashing cold water on your face?",
                correctAnswer: "Temperature",
                options: JSON.stringify(["Intense exercise", "Temperature", "Paced breathing", "Progressive muscle relaxation"]),
                explanation: "Using cold temperature (like cold water on your face) activates the mammalian dive reflex, which helps reduce emotional intensity.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "How does intense exercise help in an emotional crisis?",
                correctAnswer: "It burns excess stress chemicals like adrenaline",
                options: JSON.stringify([
                  "It distracts you from problems", 
                  "It burns excess stress chemicals like adrenaline", 
                  "It makes you too tired to be emotional", 
                  "It's a form of punishment for negative emotions"
                ]),
                explanation: "Intense exercise helps burn off the stress chemicals that fuel intense emotions, helping your body return to baseline.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "STOP Skill",
            description: "Stop, Take a step back, Observe, Proceed mindfully - a skill for crisis moments.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does the 'S' in STOP stand for?",
                correctAnswer: "Stop",
                options: JSON.stringify(["Start", "Stop", "Slow", "Sense"]),
                explanation: "S stands for Stop - literally stop yourself from reacting impulsively in a crisis moment.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "What does 'Take a step back' mean in the STOP skill?",
                correctAnswer: "Remove yourself from the situation physically or mentally",
                options: JSON.stringify([
                  "Move backward physically", 
                  "Think about the past", 
                  "Remove yourself from the situation physically or mentally", 
                  "Take a step down from leadership"
                ]),
                explanation: "Taking a step back means creating space between you and the triggering situation - physically leaving if possible, or mentally detaching if not.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Distraction with ACCEPTS",
            description: "Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, and Sensations - ways to distract from emotional pain.",
            orderIndex: 3,
            xpReward: 20,
            exercises: [
              {
                type: "multiple_choice",
                question: "Which of these is an example of the 'Activities' distraction technique?",
                correctAnswer: "Going for a walk when feeling upset",
                options: JSON.stringify([
                  "Going for a walk when feeling upset", 
                  "Comparing your situation to worse situations", 
                  "Volunteering at a shelter", 
                  "Holding an ice cube in your hand"
                ]),
                explanation: "Activities distraction involves engaging in activities that take your mind off distress, like walking, hobbies, or chores.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "What does the 'C' for Contributing mean in ACCEPTS?",
                correctAnswer: "Doing something to help others",
                options: JSON.stringify([
                  "Comparing yourself to others", 
                  "Creating new thoughts", 
                  "Controlling your environment", 
                  "Doing something to help others"
                ]),
                explanation: "Contributing means shifting focus by doing something for others, which can create positive emotions and meaning during distress.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Self-Soothing",
            description: "Using your five senses to comfort yourself during distress.",
            orderIndex: 4,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "Which of these is a vision-based self-soothing technique?",
                correctAnswer: "Looking at beautiful nature photographs",
                options: JSON.stringify([
                  "Listening to calming music", 
                  "Looking at beautiful nature photographs", 
                  "Using a scented candle", 
                  "Taking a warm bath"
                ]),
                explanation: "Self-soothing with vision involves viewing things that are pleasing or calming to look at.",
                difficultyLevel: 1
              },
              {
                type: "text_input",
                question: "List one self-soothing technique for each of the five senses that you could use:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "Examples might include: Vision (looking at art), Hearing (listening to nature sounds), Smell (essential oils), Taste (savoring a cup of tea), and Touch (wearing soft clothing).",
                difficultyLevel: 3
              }
            ]
          }
        ]
      },
      {
        name: "Reality Acceptance Skills",
        description: "Skills to help you accept reality as it is, even when it's painful.",
        orderIndex: 2,
        imageUrl: "/images/skills/reality-acceptance.jpg",
        isAdvanced: true,
        lessons: [
          {
            name: "Radical Acceptance",
            description: "Learning to accept reality completely, as it is, without fighting against it.",
            orderIndex: 1,
            xpReward: 20,
            exercises: [
              {
                type: "multiple_choice",
                question: "What is radical acceptance?",
                correctAnswer: "Complete acceptance of reality as it is, not as you wish it to be",
                options: JSON.stringify([
                  "Agreeing with everything that happens", 
                  "Complete acceptance of reality as it is, not as you wish it to be", 
                  "Giving up and letting bad things happen", 
                  "Approving of painful situations"
                ]),
                explanation: "Radical acceptance means accepting reality completely, not fighting against what has already happened or cannot be changed.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "Which of these is NOT radical acceptance?",
                correctAnswer: "Saying 'I'm fine with this' while still feeling angry about it",
                options: JSON.stringify([
                  "Acknowledging that something painful happened even though you don't like it", 
                  "Recognizing that reality is what it is, regardless of your wishes", 
                  "Saying 'I'm fine with this' while still feeling angry about it", 
                  "Accepting that some things cannot be changed no matter how unfair they seem"
                ]),
                explanation: "Radical acceptance isn't pretending to be okay with something while resisting it internally - it's genuine acceptance.",
                difficultyLevel: 3
              }
            ]
          },
          {
            name: "Turning the Mind",
            description: "Learning to turn your mind toward acceptance again and again.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What is 'turning the mind'?",
                correctAnswer: "Choosing over and over to accept reality when your mind rebels",
                options: JSON.stringify([
                  "Changing your opinion", 
                  "Distracting yourself from problems", 
                  "Choosing over and over to accept reality when your mind rebels", 
                  "Overthinking situations"
                ]),
                explanation: "Turning the mind is the intentional, repeated choice to accept reality each time you notice yourself fighting against it.",
                difficultyLevel: 2
              },
              {
                type: "text_input",
                question: "Describe a situation where you need to practice 'turning the mind' toward acceptance:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "Examples might include accepting a chronic illness, a relationship ending, or any situation you find yourself repeatedly resisting.",
                difficultyLevel: 3
              }
            ]
          },
          {
            name: "Willingness vs. Willfulness",
            description: "Learning the difference between willingness to participate in reality and willfully fighting against it.",
            orderIndex: 3,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What is the difference between willingness and willfulness?",
                correctAnswer: "Willingness is opening to reality; willfulness is fighting against it",
                options: JSON.stringify([
                  "Willingness is being happy; willfulness is being sad", 
                  "Willingness is opening to reality; willfulness is fighting against it", 
                  "Willingness is being weak; willfulness is being strong", 
                  "Willingness is giving up; willfulness is trying harder"
                ]),
                explanation: "Willingness means being open to doing what's effective in reality; willfulness means refusing to tolerate reality as it is.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "Which is an example of willfulness?",
                correctAnswer: "Refusing to complete a work assignment because 'it shouldn't be my job'",
                options: JSON.stringify([
                  "Accepting help when you need it even though you prefer independence", 
                  "Studying for an exam you feel anxious about", 
                  "Refusing to complete a work assignment because 'it shouldn't be my job'", 
                  "Taking medicine that doesn't taste good because it helps you heal"
                ]),
                explanation: "Willfulness often involves refusal based on what 'should' be rather than what is, like refusing a task because you believe you shouldn't have to do it.",
                difficultyLevel: 3
              }
            ]
          }
        ]
      },
      {
        name: "IMPROVE the Moment",
        description: "Skills to improve difficult moments when you can't solve the problem immediately.",
        orderIndex: 3,
        imageUrl: "/images/skills/improve.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Imagery and Meaning",
            description: "Using imagery and finding meaning to help cope with distress.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "How can imagery help during emotional distress?",
                correctAnswer: "It can temporarily transport your mind to a calmer or safer place",
                options: JSON.stringify([
                  "It can solve your problems", 
                  "It can temporarily transport your mind to a calmer or safer place", 
                  "It will make others treat you better", 
                  "It will erase painful memories"
                ]),
                explanation: "Imagery provides mental relief by creating a different experience in your mind when physical reality is distressing.",
                difficultyLevel: 2
              },
              {
                type: "text_input",
                question: "Describe a peaceful scene you could visualize when in distress:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "Personal peaceful scenes might include beaches, forests, mountains, or a cozy room - any place that feels safe and calming.",
                difficultyLevel: 1
              }
            ]
          },
          {
            name: "Prayer and Relaxation",
            description: "Using prayer, relaxation, and one thing at a time focus to reduce distress.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "How can the 'one thing in the moment' skill help during distress?",
                correctAnswer: "It reduces overwhelm by narrowing your focus to just one thing",
                options: JSON.stringify([
                  "It helps you multi-task to solve all problems at once", 
                  "It reduces overwhelm by narrowing your focus to just one thing", 
                  "It helps you avoid dealing with problems", 
                  "It helps you predict future problems"
                ]),
                explanation: "Focusing on one thing in the moment prevents the mind from escalating distress by jumping between multiple concerns.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "Which of these is a relaxation technique that can help in distress?",
                correctAnswer: "Progressive muscle relaxation",
                options: JSON.stringify([
                  "Reviewing past mistakes", 
                  "Progressive muscle relaxation", 
                  "Planning for all possible problems", 
                  "Analyzing why you're upset"
                ]),
                explanation: "Progressive muscle relaxation is a systematic technique that reduces physical tension, which in turn can reduce emotional distress.",
                difficultyLevel: 1
              }
            ]
          },
          {
            name: "Encouragement and Vacation",
            description: "Using self-encouragement and brief mental vacations to cope with distress.",
            orderIndex: 3,
            xpReward: 15,
            exercises: [
              {
                type: "text_input",
                question: "Write a brief encouraging statement you could say to yourself when in distress:",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "Self-encouragement might sound like 'You can get through this, you've handled difficult things before' or 'This feeling won't last forever.'",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "What does taking a 'vacation' mean in the IMPROVE skill?",
                correctAnswer: "Taking a brief mental or physical break from the distressing situation",
                options: JSON.stringify([
                  "Planning a holiday", 
                  "Taking a brief mental or physical break from the distressing situation", 
                  "Permanently avoiding problems", 
                  "Moving to a new location"
                ]),
                explanation: "A vacation in this context means giving yourself a short respite from the situation - like a mental break, a walk, or a brief pleasurable activity.",
                difficultyLevel: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Emotion Regulation",
    description: "Learn to understand, identify, and manage your emotions more effectively.",
    orderIndex: 3,
    imageUrl: "/images/modules/emotion-regulation.jpg",
    skills: [
      {
        name: "Understanding and Naming Emotions",
        description: "Skills to better understand what emotions are and how to identify them.",
        orderIndex: 1,
        imageUrl: "/images/skills/understanding-emotions.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "What Emotions Do For You",
            description: "Understanding the function and purpose of emotions.",
            orderIndex: 1,
            xpReward: 10,
            exercises: [
              {
                type: "multiple_choice",
                question: "What is one of the main functions of emotions?",
                correctAnswer: "They communicate to others and motivate our actions",
                options: JSON.stringify([
                  "They punish us for mistakes", 
                  "They communicate to others and motivate our actions", 
                  "They prevent us from thinking clearly", 
                  "They exist to make life difficult"
                ]),
                explanation: "Emotions serve as signals both to ourselves and others, and they motivate us to take actions important for survival and well-being.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "What function does fear serve?",
                correctAnswer: "It alerts us to danger and prepares us to protect ourselves",
                options: JSON.stringify([
                  "It makes us look weak to others", 
                  "It alerts us to danger and prepares us to protect ourselves", 
                  "It prevents us from taking risks", 
                  "It has no useful function"
                ]),
                explanation: "Fear is a survival mechanism that alerts us to potential threats and prepares our bodies for protective action.",
                difficultyLevel: 1
              }
            ]
          },
          {
            name: "Identifying Your Emotions",
            description: "Learning to recognize and name different emotions.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "Which of these is a physical sign of anxiety?",
                correctAnswer: "Racing heart",
                options: JSON.stringify([
                  "Racing heart", 
                  "Feeling heavy and slow", 
                  "Muscles becoming relaxed", 
                  "Decreased alertness"
                ]),
                explanation: "Anxiety often manifests physically as increased heart rate, muscle tension, and rapid breathing due to the 'fight or flight' response.",
                difficultyLevel: 1
              },
              {
                type: "text_input",
                question: "Describe a recent situation where you experienced an emotion. What physical sensations, thoughts, and urges did you notice?",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "This exercise helps you practice identifying the components of emotions in your own experience.",
                difficultyLevel: 2
              }
            ]
          }
        ]
      },
      {
        name: "Check the Facts",
        description: "Skills to examine whether your emotional reactions fit the facts of the situation.",
        orderIndex: 2,
        imageUrl: "/images/skills/check-facts.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Emotions and Facts",
            description: "Understanding how interpretations, not events themselves, cause emotions.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What causes emotions?",
                correctAnswer: "Your interpretations about events, not the events themselves",
                options: JSON.stringify([
                  "Other people's actions", 
                  "Your interpretations about events, not the events themselves", 
                  "Random chemical fluctuations in the brain", 
                  "External situations and events"
                ]),
                explanation: "Emotions arise from our interpretations and thoughts about situations, which is why different people can have different emotional reactions to the same event.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "Your friend doesn't return your text for two days. Which interpretation is likely to lead to feeling hurt?",
                correctAnswer: "My friend is ignoring me because they don't value our friendship",
                options: JSON.stringify([
                  "My friend must be very busy lately", 
                  "My friend is ignoring me because they don't value our friendship", 
                  "My friend might have lost their phone or had technical issues", 
                  "I wonder if something happened to my friend and if they're okay"
                ]),
                explanation: "The interpretation that your friend is intentionally ignoring you because they don't value you is likely to trigger feelings of hurt or rejection.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Finding the Facts",
            description: "Learning to separate facts from interpretations.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "Which statement is a fact, not an interpretation?",
                correctAnswer: "My boss asked me to redo part of my project",
                options: JSON.stringify([
                  "My boss hates my work", 
                  "My boss asked me to redo part of my project", 
                  "My boss thinks I'm incompetent", 
                  "My boss is being unfair to me"
                ]),
                explanation: "A fact is something that can be objectively observed or verified, like specific words or actions. Interpretations involve assumptions about meaning or intent.",
                difficultyLevel: 2
              },
              {
                type: "text_input",
                question: "Think of a recent emotional situation. What were the objective facts, separate from your interpretations?",
                correctAnswer: "any",
                options: JSON.stringify([]),
                explanation: "This exercise helps practice separating observable facts from subjective interpretations that may be fueling emotional reactions.",
                difficultyLevel: 3
              }
            ]
          }
        ]
      },
      {
        name: "Opposite Action",
        description: "Skills to change emotions by acting opposite to the action urge that comes with the emotion.",
        orderIndex: 3,
        imageUrl: "/images/skills/opposite-action.jpg",
        isAdvanced: true,
        lessons: [
          {
            name: "Understanding Action Urges",
            description: "Learning to identify the action impulses that come with different emotions.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What is an 'action urge'?",
                correctAnswer: "A strong impulse to behave in certain ways when feeling specific emotions",
                options: JSON.stringify([
                  "A logical plan for solving problems", 
                  "A strong impulse to behave in certain ways when feeling specific emotions", 
                  "The ability to control your actions", 
                  "An urge to take any action rather than doing nothing"
                ]),
                explanation: "Action urges are the behavioral impulses that typically accompany specific emotions, like the urge to run when afraid or withdraw when sad.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "Which action urge is typically associated with anger?",
                correctAnswer: "The urge to attack or confront",
                options: JSON.stringify([
                  "The urge to hide or escape", 
                  "The urge to attack or confront", 
                  "The urge to seek comfort from others", 
                  "The urge to freeze or become inactive"
                ]),
                explanation: "Anger typically comes with the urge to attack, defend, or confront whatever is perceived as threatening or unfair.",
                difficultyLevel: 1
              }
            ]
          },
          {
            name: "Practicing Opposite Action",
            description: "Learning to act opposite to emotion-driven urges when they aren't helpful.",
            orderIndex: 2,
            xpReward: 20,
            exercises: [
              {
                type: "multiple_choice",
                question: "What is the opposite action for anxiety/fear?",
                correctAnswer: "Approaching what you fear in a safe way",
                options: JSON.stringify([
                  "Avoiding the feared situation completely", 
                  "Approaching what you fear in a safe way", 
                  "Distracting yourself from your fear", 
                  "Analyzing why you're afraid"
                ]),
                explanation: "The opposite action for fear is approach rather than avoidance - gradually facing what you fear in appropriate, safe ways.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "What is the opposite action for sadness/depression?",
                correctAnswer: "Getting active and engaging with life",
                options: JSON.stringify([
                  "Resting and isolating yourself", 
                  "Getting active and engaging with life", 
                  "Analyzing why you feel sad", 
                  "Watching sad movies to release emotions"
                ]),
                explanation: "The opposite action for sadness is behavioral activation - getting active and engaged rather than withdrawing and being passive.",
                difficultyLevel: 2
              }
            ]
          }
        ]
      },
      {
        name: "PLEASE Skills",
        description: "Taking care of your Physical health to reduce emotional vulnerability.",
        orderIndex: 4,
        imageUrl: "/images/skills/please-skills.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Physical Health and Emotions",
            description: "Understanding how physical health affects emotional resilience.",
            orderIndex: 1,
            xpReward: 10,
            exercises: [
              {
                type: "multiple_choice",
                question: "How does physical health affect your emotions?",
                correctAnswer: "Physical health problems can make you more vulnerable to intense negative emotions",
                options: JSON.stringify([
                  "Physical health has no impact on emotions", 
                  "Physical health problems can make you more vulnerable to intense negative emotions", 
                  "Only mental health affects emotions, not physical health", 
                  "Good physical health guarantees good emotional health"
                ]),
                explanation: "Physical health problems or neglecting basic physical needs can lower your threshold for emotional distress, making you more vulnerable to negative emotions.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "What does 'emotional vulnerability' mean?",
                correctAnswer: "Being more susceptible to intense, negative emotional reactions",
                options: JSON.stringify([
                  "Being emotionally open with others", 
                  "Being more susceptible to intense, negative emotional reactions", 
                  "Having weak emotions", 
                  "Crying easily"
                ]),
                explanation: "Emotional vulnerability refers to having a lowered threshold for emotional reactivity, making it easier to experience intense, negative emotions.",
                difficultyLevel: 1
              }
            ]
          },
          {
            name: "PLEASE Skills Overview",
            description: "Learning the components of the PLEASE skills for physical health.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does the 'PL' in PLEASE skills stand for?",
                correctAnswer: "Treating PhysicaL illness",
                options: JSON.stringify([
                  "Treating PhysicaL illness", 
                  "PLanning ahead", 
                  "PLeasant activities", 
                  "PLacating others"
                ]),
                explanation: "PL stands for treating PhysicaL illness - getting proper treatment for health problems and taking prescribed medications.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "What does the 'E' in PLEASE skills stand for?",
                correctAnswer: "Balanced Eating",
                options: JSON.stringify([
                  "Exercise", 
                  "Balanced Eating", 
                  "Energy conservation", 
                  "Eliminate stress"
                ]),
                explanation: "E represents balanced Eating - maintaining regular, nutritious meals and avoiding skipping meals or emotional eating.",
                difficultyLevel: 1
              }
            ]
          },
          {
            name: "Sleep and Exercise",
            description: "Understanding the importance of sleep and exercise for emotional health.",
            orderIndex: 3,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "How does lack of sleep affect emotions?",
                correctAnswer: "It increases irritability and emotional reactivity",
                options: JSON.stringify([
                  "It has no effect on emotions", 
                  "It increases irritability and emotional reactivity", 
                  "It makes you feel more positive", 
                  "It helps you stay emotionally detached"
                ]),
                explanation: "Sleep deprivation significantly increases emotional reactivity, making you more vulnerable to irritability, anxiety, and other negative emotions.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "How does regular exercise help with emotions?",
                correctAnswer: "It releases endorphins and reduces stress hormones",
                options: JSON.stringify([
                  "It makes you too tired to have emotions", 
                  "It releases endorphins and reduces stress hormones", 
                  "It distracts you from having feelings", 
                  "It has no effect on emotions"
                ]),
                explanation: "Regular exercise releases mood-enhancing chemicals like endorphins while reducing stress hormones like cortisol, improving emotional regulation.",
                difficultyLevel: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Interpersonal Effectiveness",
    description: "Learn skills for maintaining relationships while achieving your objectives and maintaining self-respect.",
    orderIndex: 4,
    imageUrl: "/images/modules/interpersonal-effectiveness.jpg",
    skills: [
      {
        name: "DEAR MAN Skills",
        description: "Skills for getting your objectives met in interpersonal situations.",
        orderIndex: 1,
        imageUrl: "/images/skills/dear-man.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Describe and Express",
            description: "The first two steps of DEAR MAN: clearly describing the situation and expressing feelings.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does the 'D' in DEAR MAN stand for?",
                correctAnswer: "Describe the situation factually",
                options: JSON.stringify([
                  "Demand what you want", 
                  "Describe the situation factually", 
                  "Defend your position", 
                  "Discourage resistance"
                ]),
                explanation: "D stands for Describe - clearly and factually describing the situation without judgments or interpretations.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "Which is an example of effectively 'Describing' a situation?",
                correctAnswer: "You said you would clean the kitchen yesterday, but it hasn't been done yet",
                options: JSON.stringify([
                  "You never help around the house and I'm sick of it", 
                  "You said you would clean the kitchen yesterday, but it hasn't been done yet", 
                  "You're so lazy and inconsiderate about housework", 
                  "You always make me do everything while you do nothing"
                ]),
                explanation: "Effective describing focuses on specific observable facts without judgments, labels, or generalizations like 'always' or 'never'.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Assert and Reinforce",
            description: "How to clearly ask for what you want and reinforce the other person.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does the 'A' in DEAR MAN stand for?",
                correctAnswer: "Assert your wishes clearly",
                options: JSON.stringify([
                  "Argue your position", 
                  "Assert your wishes clearly", 
                  "Avoid conflict", 
                  "Analyze the problem"
                ]),
                explanation: "A stands for Assert - clearly expressing what you want or don't want without apologizing or being wishy-washy.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "What does 'Reinforce' mean in DEAR MAN?",
                correctAnswer: "Explaining the positive effects of getting what you want",
                options: JSON.stringify([
                  "Repeating your request multiple times", 
                  "Explaining the positive effects of getting what you want", 
                  "Rewarding the other person after they do what you want", 
                  "Strengthening your position with facts"
                ]),
                explanation: "Reinforce means explaining the positive consequences or benefits to the other person if they do what you're asking.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Mindful, Appear Confident, Negotiate",
            description: "The final skills for maintaining focus and finding workable compromises.",
            orderIndex: 3,
            xpReward: 20,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does being 'Mindful' in DEAR MAN refer to?",
                correctAnswer: "Staying focused on your objective and avoiding distractions",
                options: JSON.stringify([
                  "Meditating before difficult conversations", 
                  "Staying focused on your objective and avoiding distractions", 
                  "Being mindful of the other person's feelings", 
                  "Thinking before you speak"
                ]),
                explanation: "Being Mindful in DEAR MAN means maintaining focus on your objective and not getting sidetracked by other issues or attacks.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "What does the 'N' for Negotiate mean in DEAR MAN?",
                correctAnswer: "Being willing to give to get",
                options: JSON.stringify([
                  "Never giving in", 
                  "Being willing to give to get", 
                  "Navigating difficult conversations", 
                  "Noting the other person's objections"
                ]),
                explanation: "Negotiate means being willing to give the other person something in order to get what you want - finding an acceptable middle ground.",
                difficultyLevel: 2
              }
            ]
          }
        ]
      },
      {
        name: "GIVE Skills",
        description: "Skills for maintaining relationships while asking for what you need.",
        orderIndex: 2,
        imageUrl: "/images/skills/give-skills.jpg",
        isAdvanced: false,
        lessons: [
          {
            name: "Being Gentle and Interested",
            description: "How to approach conversations with gentleness and genuine interest.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does being 'Gentle' in the GIVE skills involve?",
                correctAnswer: "Being respectful and avoiding attacks, threats, or judgments",
                options: JSON.stringify([
                  "Being soft-spoken and quiet", 
                  "Being respectful and avoiding attacks, threats, or judgments", 
                  "Always agreeing with the other person", 
                  "Never expressing negative emotions"
                ]),
                explanation: "Being Gentle means approaching the conversation in a respectful way, without attacks, threats, or judgments that might damage the relationship.",
                difficultyLevel: 1
              },
              {
                type: "multiple_choice",
                question: "How do you show you're 'Interested' according to the GIVE skills?",
                correctAnswer: "Listening to the other person's response without interrupting",
                options: JSON.stringify([
                  "Asking lots of questions", 
                  "Listening to the other person's response without interrupting", 
                  "Showing curiosity about topics unrelated to the conversation", 
                  "Taking notes during the conversation"
                ]),
                explanation: "Being Interested involves actively listening to the other person's point of view with an open mind, without interrupting or planning your response while they're speaking.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Validate and Easy Manner",
            description: "How to validate others' perspectives and use an easy manner.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does 'Validate' mean in the GIVE skills?",
                correctAnswer: "Acknowledging the other person's feelings, wants, and difficulties",
                options: JSON.stringify([
                  "Agreeing with everything they say", 
                  "Acknowledging the other person's feelings, wants, and difficulties", 
                  "Verifying that what they're saying is true", 
                  "Proving that your perspective is valid"
                ]),
                explanation: "Validating means acknowledging and accepting the other person's emotions and perspective as understandable, even if you don't agree with them.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "Which statement is an example of validation?",
                correctAnswer: "I can see why you'd feel frustrated by that situation",
                options: JSON.stringify([
                  "You're right to be upset", 
                  "I can see why you'd feel frustrated by that situation", 
                  "You shouldn't feel that way", 
                  "I've felt the same way before"
                ]),
                explanation: "Validation acknowledges that the person's feelings make sense given their perspective, without necessarily agreeing with their view or saying they're right.",
                difficultyLevel: 2
              }
            ]
          }
        ]
      },
      {
        name: "FAST Skills",
        description: "Skills for maintaining self-respect during interpersonal interactions.",
        orderIndex: 3,
        imageUrl: "/images/skills/fast-skills.jpg",
        isAdvanced: true,
        lessons: [
          {
            name: "Fair and No Apologies",
            description: "Learning to be fair to yourself and others, and avoiding unnecessary apologies.",
            orderIndex: 1,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does being 'Fair' mean in the FAST skills?",
                correctAnswer: "Being fair to both yourself and the other person",
                options: JSON.stringify([
                  "Always letting others have their way", 
                  "Being fair to both yourself and the other person", 
                  "Making sure you get what you deserve", 
                  "Treating everyone exactly the same"
                ]),
                explanation: "Being Fair means being fair to both yourself and the other person - not being overly self-sacrificing or overly demanding.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "What does 'No Apologies' mean in the FAST skills?",
                correctAnswer: "Not apologizing for making a request or having an opinion",
                options: JSON.stringify([
                  "Never saying you're sorry for anything", 
                  "Not apologizing for making a request or having an opinion", 
                  "Refusing to apologize when you've made a mistake", 
                  "Making others apologize to you"
                ]),
                explanation: "No Apologies means not apologizing for existing, having an opinion, or making a legitimate request. It doesn't mean never apologizing when you've actually done something wrong.",
                difficultyLevel: 2
              }
            ]
          },
          {
            name: "Stick to Values and Truthful",
            description: "Learning to maintain your values and be truthful in interactions.",
            orderIndex: 2,
            xpReward: 15,
            exercises: [
              {
                type: "multiple_choice",
                question: "What does 'Stick to values' mean in the FAST skills?",
                correctAnswer: "Standing by your own beliefs and values",
                options: JSON.stringify([
                  "Insisting others follow your moral code", 
                  "Standing by your own beliefs and values", 
                  "Being inflexible in all situations", 
                  "Judging others by your values"
                ]),
                explanation: "Sticking to values means staying true to your own principles and moral values, not compromising them to please others or avoid conflict.",
                difficultyLevel: 2
              },
              {
                type: "multiple_choice",
                question: "What does being 'Truthful' mean in the FAST skills?",
                correctAnswer: "Not lying or exaggerating to get what you want",
                options: JSON.stringify([
                  "Telling everyone exactly what you think of them", 
                  "Not lying or exaggerating to get what you want", 
                  "Forcing others to admit the truth", 
                  "Pointing out when others are being dishonest"
                ]),
                explanation: "Being Truthful means avoiding lies, exaggerations, or acting helpless to manipulate others. It builds integrity and self-respect.",
                difficultyLevel: 1
              }
            ]
          }
        ]
      }
    ]
  }
];
