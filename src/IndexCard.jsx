import { useState } from 'react';

const dataStructures = [
    { id: 1, type: "Array", description: "A collection of elements identified by index or key." },
    { id: 2, type: "Linked List", description: "A linear collection of data elements, where the linear order is not given by their physical placement in memory." },
    { id: 3, type: "Stack", description: "A collection of elements that follows the Last In, First Out (LIFO) principle." },
    { id: 4, type: "Queue", description: "A collection of elements that follows the First In, First Out (FIFO) principle." },
    { id: 5, type: "Tree", description: "A hierarchical structure that consists of nodes, with a single node as the root, and sub-nodes as children." },
    { id: 6, type: "Graph", description: "A collection of nodes connected by edges, used to represent pairwise relationships between objects." },
    { id: 7, type: "Hash Table", description: "A data structure that maps keys to values for highly efficient lookup." },
    { id: 8, type: "Heap", description: "A specialized tree-based data structure that satisfies the heap property." },
    { id: 9, type: "Trie", description: "A type of search tree used to store a dynamic set or associative array where the keys are usually strings." },
    { id: 10, type: "Set", description: "A collection of distinct objects, typically used to test for membership." }
];

function IndexCard() {

    // Get the current index
    const [index, setIndex] = useState(0);

    // Flip the card
    const [flip, setFlip] = useState(false);

    // Get the current data structure
    const dataStructure = dataStructures[index];

    // Flip the card
    const flipCard = () => {
        if (flip == true) {
            setFlip(false);
        } else {
            setFlip(true);
        }
    }

    // Get the next card
    const nextCard = () => {
        if (index < 9) { 
            setIndex(index + 1); 
        } else {
            setIndex(0);
        } 
        setFlip(false);
    }

    return (
        <>
            <button className="flashcard" onClick={flipCard}>
                {flip ? dataStructure.description : dataStructure.type}
            </button>
            <button className="flipCard" onClick={nextCard}>Next</button>
        </>
    );
}

export default IndexCard;