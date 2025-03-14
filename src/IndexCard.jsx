import { useState } from 'react';

const computerScienceTerms = [
    { id: 1, type: "Array", description: "A collection of elements identified by index or key." },
    { id: 2, type: "Linked List", description: "A linear collection of data elements, where the linear order is not given by their physical placement in memory." },
    { id: 3, type: "Stack", description: "A collection of elements that follows the Last In, First Out (LIFO) principle." },
    { id: 4, type: "Queue", description: "A collection of elements that follows the First In, First Out (FIFO) principle." },
    { id: 5, type: "Tree", description: "A hierarchical structure that consists of nodes, with a single node as the root, and sub-nodes as children." },
    { id: 6, type: "Graph", description: "A collection of nodes connected by edges, used to represent pairwise relationships between objects." },
    { id: 7, type: "Hash Table", description: "A data structure that maps keys to values for highly efficient lookup." },
    { id: 8, type: "Heap", description: "A specialized tree-based data structure that satisfies the heap property." },
    { id: 9, type: "Trie", description: "A type of search tree used to store a dynamic set or associative array where the keys are usually strings." },
    { id: 10, type: "Set", description: "A collection of distinct objects, typically used to test for membership." },
    { id: 11, type: "Class", description: "A blueprint for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods)." },
    { id: 12, type: "Object", description: "An instance of a class that consists of a state and behavior." },
    { id: 13, type: "Inheritance", description: "A mechanism where a new class is derived from an existing class." },
    { id: 14, type: "Encapsulation", description: "The bundling of data with the methods that operate on that data, restricting direct access to some of the object's components." },
    { id: 15, type: "Polymorphism", description: "The ability of different classes to be treated as instances of the same class through inheritance." },
    { id: 16, type: "Abstraction", description: "The concept of hiding the complex implementation details and showing only the necessary features of an object." },
    { id: 17, type: "Binary Search", description: "An efficient algorithm for finding an item from a sorted list of items, with a time complexity of O(log n)." },
    { id: 18, type: "Merge Sort", description: "A divide and conquer algorithm that was invented by John von Neumann in 1945. It has a time complexity of O(n log n)." },
    { id: 19, type: "Quick Sort", description: "An efficient sorting algorithm that, on average, makes O(n log n) comparisons to sort n items." },
    { id: 20, type: "Breadth-First Search (BFS)", description: "An algorithm for traversing or searching tree or graph data structures. It starts at the tree root and explores all nodes at the present depth level before moving on to the nodes at the next depth level." },
    { id: 21, type: "Depth-First Search (DFS)", description: "An algorithm for traversing or searching tree or graph data structures. It starts at the root and explores as far as possible along each branch before backtracking." },
    { id: 22, type: "Dijkstra's Algorithm", description: "An algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks." },
    { id: 23, type: "A* Algorithm", description: "An algorithm that is used in pathfinding and graph traversal. It is an extension of Dijkstra's algorithm with an added heuristic to guide the search." },
    { id: 24, type: "Dynamic Programming", description: "A method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the subproblems are overlapping." },
    { id: 25, type: "Greedy Algorithm", description: "An algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit." }
];

function IndexCard() {

    // Get the current index
    const [index, setIndex] = useState(0);

    // Flip the card
    const [flip, setFlip] = useState(false);

    // Get the current computer science term
    const term = computerScienceTerms[index];

    // Flip the card
    const flipCard = () => {
        setFlip(!flip);
    }

    // Get the next card
    const nextCard = () => {
        if (index < computerScienceTerms.length - 1) { 
            setIndex(index + 1); 
        } else {
            setIndex(0);
        } 
        setFlip(false);
    }

    return (
        <>
            <button className="flashcard" onClick={flipCard}>
                {flip ? term.type : term.description}
            </button>
            <button className="flipCard" onClick={nextCard}>Next</button>
        </>
    );
}

function TermLength () {

    // Get the length of the computer science terms
    const termLength = computerScienceTerms.length;

    return (
        <>
            <p className='termlength'>{termLength}</p>
        </>
    )
}

export default IndexCard;
export { TermLength };
