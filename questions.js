// Array of questions grouped by category (25 questions each)
const questions = [
    {
        category: "programming",
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a correct way to declare a variable in JavaScript?",
                options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
                correctAnswer: 0,
            },
            {
                question: "How do you write comment in Python?",
                options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
                correctAnswer: 1,
            },
            {
                question: "What does CSS stand for?",
                options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
                correctAnswer: 0,
            },
            {
                question: "In JavaScript, how do you create a function?",
                options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
                correctAnswer: 3,
            },
            {
                question: "What does the 'typeof' operator do in JavaScript?",
                options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
                correctAnswer: 0,
            },
            {
                question: "In C, how do you define a function?",
                options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is a characteristic of Python?",
                options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
                correctAnswer: 3,
            },
            {
                question: "Which language is used for Android development?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correctAnswer: 1,
            },
            {
                question: "What is the purpose of the 'forEach()' method in JavaScript?",
                options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
                correctAnswer: 3,
            },
            {
                question: "What does the 'return' keyword do in a function?",
                options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is NOT a semantic HTML element?",
                options: ["<header>", "<footer>", "<div>", "<article>"],
                correctAnswer: 2,
            },
            {
                question: "What is the primary purpose of a 'for' loop in programming?",
                options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
                correctAnswer: 0,
            },
            {
                question: "Which data structure is ideal for LIFO (Last In First Out)?",
                options: ["Queue", "Stack", "Linked list", "Array"],
                correctAnswer: 1,
            },
            {
                question: "Which command is used in Git to store changes in the repository?",
                options: ["git commit", "git push", "git pull", "git add"],
                correctAnswer: 0,
            },
            {
                question: "What does the 'map()' function do in JavaScript?",
                options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
                correctAnswer: 2,
            },
            {
                question: "What is an IDE?",
                options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is a feature of object-oriented programming?",
                options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
                correctAnswer: 0,
            },
            {
                question: "What does SQL stand for?",
                options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
                correctAnswer: 3,
            },
            {
                question: "Which of these is an example of a non-relational database?",
                options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
                correctAnswer: 0,
            },
            {
                question: "How do you write comment in CSS?",
                options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following algorithms is used to sort an array by comparing elements?",
                options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
                correctAnswer: 0,
            },
            {
                question: "What does the 'finally' block in Java do?",
                options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
                correctAnswer: 2,
            },
            {
                question: "Which data structure is best for searching elements quickly?",
                options: ["Binary search tree", "Array", "Linked list", "Queue"],
                correctAnswer: 0,
            },
            {
                question: "What is the correct syntax for a JavaScript if statement?",
                options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
                correctAnswer: 0,
            },
        ],
    },
    {
        category: "geography",
        questions: [
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                correctAnswer: 1,
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "South Korea", "Japan", "Thailand"],
                correctAnswer: 2,
            },
            {
                question: "What is the largest ocean in the world?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: 3,
            },
            {
                question: "Which country has the largest population in the world?",
                options: ["India", "China", "United States", "Indonesia"],
                correctAnswer: 1,
            },
            {
                question: "Which country is known for the Great Barrier Reef?",
                options: ["Australia", "United States", "South Africa", "New Zealand"],
                correctAnswer: 0,
            },
            {
                question: "Which is the smallest country in the world?",
                options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
                correctAnswer: 2,
            },
            {
                question: "Which is the tallest mountain in the world?",
                options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
                correctAnswer: 2,
            },
            {
                question: "What is the capital of Canada?",
                options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
                correctAnswer: 0,
            },
            {
                question: "Which desert is the largest hot desert in the world?",
                options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
                correctAnswer: 2,
            },
            {
                question: "Which country is known as the Land of the Midnight Sun?",
                options: ["Sweden", "Finland", "Norway", "Denmark"],
                correctAnswer: 2,
            },
            {
                question: "What is the longest mountain range in the world?",
                options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
                correctAnswer: 2,
            },
            {
                question: "Which river flows through Egypt?",
                options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
                correctAnswer: 2,
            },
            {
                question: "Which is the largest island in the world?",
                options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
                correctAnswer: 0,
            },
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
                correctAnswer: 2,
            },
            {
                question: "Which country has the most time zones?",
                options: ["United States", "Russia", "Canada", "Australia"],
                correctAnswer: 1,
            },
            {
                question: "Which country is known for the Eiffel Tower?",
                options: ["Germany", "Italy", "Spain", "France"],
                correctAnswer: 3,
            },
            {
                question: "Which is the most populous city in the world?",
                options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
                correctAnswer: 0,
            },
            {
                question: "Which mountain range is located in South America?",
                options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
                correctAnswer: 3,
            },
            {
                "question": "Which continent is home to the largest desert in the world?",
                "options": ["Asia", "Africa", "South America", "Australia"],
                "correctAnswer": 1
            },
            {
                question: "What is the capital of Brazil?",
                options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
                correctAnswer: 2,
            },
            {
                question: "What is the official language of Brazil?",
                options: ["Spanish", "English", "Portuguese", "French"],
                correctAnswer: 2,
            },
            {
                question: "Which country has the most volcanoes?",
                options: ["Japan", "Indonesia", "United States", "Italy"],
                correctAnswer: 1,
            },
            {
                question: "Which city is known as the Big Apple?",
                options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
                correctAnswer: 1,
            },
            {
                question: "Which ocean is located to the east of Africa?",
                options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
                correctAnswer: 3,
            },
            {
                question: "Which is the second largest continent by area?",
                options: ["Asia", "Africa", "North America", "Europe"],
                correctAnswer: 1,
            },
        ],
    },
    {
        "category": "dsa",
        "questions": [
            {
                "question": "Which data structure uses LIFO (Last In, First Out) ordering?",
                "options": ["Queue", "Stack", "Heap", "Linked List"],
                "correctAnswer": 1
            },
            {
                "question": "Which data structure uses FIFO (First In, First Out) ordering?",
                "options": ["Queue", "Stack", "Heap", "Graph"],
                "correctAnswer": 0
            },
            {
                "question": "What is the time complexity of searching in a balanced binary search tree (BST)?",
                "options": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                "correctAnswer": 1
            },
            {
                "question": "Which sorting algorithm has the worst-case time complexity of O(n²)?",
                "options": ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
                "correctAnswer": 2
            },
            {
                "question": "Which data structure is best for implementing recursion?",
                "options": ["Queue", "Stack", "Heap", "Array"],
                "correctAnswer": 1
            },
            {
                "question": "Which searching algorithm works efficiently on sorted arrays?",
                "options": ["Linear Search", "Binary Search", "Breadth-First Search", "Depth-First Search"],
                "correctAnswer": 1
            },
            {
                "question": "Which of the following is a linear data structure?",
                "options": ["Tree", "Graph", "Stack", "Hash Table"],
                "correctAnswer": 2
            },
            {
                "question": "What is the time complexity of inserting an element at the end of an array (if space is available)?",
                "options": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                "correctAnswer": 2
            },
            {
                "question": "Which sorting algorithm is best suited for nearly sorted data?",
                "options": ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
                "correctAnswer": 2
            },
            {
                "question": "Which data structure is used in breadth-first search (BFS)?",
                "options": ["Stack", "Queue", "Heap", "Linked List"],
                "correctAnswer": 1
            },
            {
                "question": "Which data structure is used in depth-first search (DFS)?",
                "options": ["Stack", "Queue", "Heap", "Hash Table"],
                "correctAnswer": 0
            },
            {
                "question": "What is the worst-case time complexity of Quick Sort?",
                "options": ["O(n²)", "O(n log n)", "O(log n)", "O(n)"],
                "correctAnswer": 0
            },
            {
                "question": "Which data structure is best suited for implementing LRU cache?",
                "options": ["Queue", "Stack", "Heap", "Hash Map + Doubly Linked List"],
                "correctAnswer": 3
            },
            {
                "question": "Which of the following is a non-linear data structure?",
                "options": ["Array", "Stack", "Tree", "Queue"],
                "correctAnswer": 2
            },
            {
                "question": "What is the space complexity of an adjacency matrix for a graph with V vertices?",
                "options": ["O(V)", "O(V²)", "O(log V)", "O(1)"],
                "correctAnswer": 1
            },
            {
                "question": "What is the best-case time complexity of Bubble Sort?",
                "options": ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
                "correctAnswer": 2
            },
            {
                "question": "Which of the following data structures supports fast retrieval but not ordered access?",
                "options": ["Array", "Stack", "Hash Table", "Linked List"],
                "correctAnswer": 2
            },
            {
                "question": "Which of the following is NOT an application of stack?",
                "options": ["Function calls", "Undo/Redo feature", "Page replacement algorithms", "Expression evaluation"],
                "correctAnswer": 2
            },
            {
                "question": "Which data structure is best suited for implementing priority queues?",
                "options": ["Queue", "Stack", "Heap", "Linked List"],
                "correctAnswer": 2
            },
            {
                "question": "Which of the following operations is the most efficient for a hash table?",
                "options": ["Searching", "Sorting", "Traversal", "Heapify"],
                "correctAnswer": 0
            },
            {
                "question": "Which algorithm is used for finding the shortest path in a weighted graph?",
                "options": ["DFS", "BFS", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
                "correctAnswer": 2
            },
            {
                "question": "Which traversal method is used in pre-order traversal of a binary tree?",
                "options": ["Left → Right → Root", "Right → Root → Left", "Root → Left → Right", "Left → Root → Right"],
                "correctAnswer": 2
            },
            {
                "question": "Which data structure is used to implement a circular queue efficiently?",
                "options": ["Array", "Linked List", "Stack", "Heap"],
                "correctAnswer": 0
            },
            {
                "question": "Which algorithm is used for cycle detection in a graph?",
                "options": ["Floyd’s Cycle Detection", "Dijkstra's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm"],
                "correctAnswer": 0
            },
            {
                "question": "Which tree traversal method gives a sorted order for a binary search tree (BST)?",
                "options": ["Pre-order", "Post-order", "In-order", "Level-order"],
                "correctAnswer": 2
            },
        ],
    },

    {
        "category": "history",
        "questions": [
            {
                "question": "Who was the first President of the United States?",
                "options": ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
                "correctAnswer": 2
            },
            {
                "question": "Which year did World War I begin?",
                "options": ["1912", "1914", "1916", "1918"],
                "correctAnswer": 1
            },
            {
                "question": "Who was the leader of Germany during World War II?",
                "options": ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Benito Mussolini"],
                "correctAnswer": 2
            },
            {
                "question": "Which ancient civilization built the pyramids of Giza?",
                "options": ["Romans", "Greeks", "Egyptians", "Mesopotamians"],
                "correctAnswer": 2
            },
            {
                "question": "Who was the first emperor of China?",
                "options": ["Liu Bang", "Qin Shi Huang", "Kublai Khan", "Sun Yat-sen"],
                "correctAnswer": 1
            },
            {
                "question": "Which famous ship sank after hitting an iceberg in 1912?",
                "options": ["Lusitania", "Titanic", "Bismarck", "Queen Mary"],
                "correctAnswer": 1
            },
            {
                "question": "Who was the first man to walk on the moon?",
                "options": ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
                "correctAnswer": 2
            },
            {
                "question": "Which country gifted the Statue of Liberty to the United States?",
                "options": ["Germany", "France", "United Kingdom", "Italy"],
                "correctAnswer": 1
            },
            {
                "question": "What was the name of the period of intellectual and artistic growth in Europe during the 14th-17th centuries?",
                "options": ["The Enlightenment", "The Middle Ages", "The Renaissance", "The Industrial Revolution"],
                "correctAnswer": 2
            },
            {
                "question": "Which war was fought between the North and South regions of the United States?",
                "options": ["Revolutionary War", "Civil War", "World War I", "Cold War"],
                "correctAnswer": 1
            },
            {
                "question": "Who was the first female Prime Minister of the United Kingdom?",
                "options": ["Margaret Thatcher", "Angela Merkel", "Indira Gandhi", "Theresa May"],
                "correctAnswer": 0
            },
            {
                "question": "Which empire was ruled by Julius Caesar?",
                "options": ["Ottoman Empire", "Byzantine Empire", "Roman Empire", "Greek Empire"],
                "correctAnswer": 2
            },
            {
                "question": "Which revolution led to the rise of Napoleon Bonaparte?",
                "options": ["American Revolution", "Russian Revolution", "French Revolution", "Industrial Revolution"],
                "correctAnswer": 2
            },
            {
                "question": "Which U.S. president abolished slavery?",
                "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
                "correctAnswer": 2
            },
            {
                "question": "What was the name of the political and military conflict between the U.S. and Soviet Union after World War II?",
                "options": ["World War III", "Cold War", "Vietnam War", "Korean War"],
                "correctAnswer": 1
            },
            {
                "question": "Which document was signed in 1776 to declare American independence?",
                "options": ["The U.S. Constitution", "The Bill of Rights", "The Declaration of Independence", "The Federalist Papers"],
                "correctAnswer": 2
            },
            {
                "question": "Who was the founder of the Mongol Empire?",
                "options": ["Kublai Khan", "Genghis Khan", "Attila the Hun", "Alexander the Great"],
                "correctAnswer": 1
            },
            {
                "question": "What year did Christopher Columbus first reach the Americas?",
                "options": ["1492", "1501", "1607", "1776"],
                "correctAnswer": 0
            },
            {
                "question": "Which city was divided by a wall from 1961 to 1989?",
                "options": ["Moscow", "Berlin", "Vienna", "Prague"],
                "correctAnswer": 1
            },
            {
                "question": "Which leader is known for his role in India's independence?",
                "options": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
                "correctAnswer": 1
            },
            {
                "question": "Which ancient city was buried under volcanic ash after the eruption of Mount Vesuvius in AD 79?",
                "options": ["Pompeii", "Athens", "Rome", "Alexandria"],
                "correctAnswer": 0
            },
            {
                "question": "Which country was the first to grant women the right to vote?",
                "options": ["United States", "United Kingdom", "New Zealand", "Canada"],
                "correctAnswer": 2
            },
            {
                "question": "What was the main cause of the Great Depression in 1929?",
                "options": ["World War I", "Stock Market Crash", "Inflation", "Bank Failures"],
                "correctAnswer": 1
            },
            {
                "question": "Which treaty ended World War I?",
                "options": ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Vienna"],
                "correctAnswer": 0
            },
            {
                "question": "Which ancient wonder was located in Babylon?",
                "options": ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens of Babylon", "Lighthouse of Alexandria"],
                "correctAnswer": 2
            },
        ],
    },
];
