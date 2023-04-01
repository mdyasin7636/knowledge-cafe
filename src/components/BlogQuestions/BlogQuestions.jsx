import React from 'react';

const BlogQuestions = () => {
    return (
        <div>
            <div>
                <div className='mb-4 border p-4 rounded-md'>
                    <h1 className="text-2xl font-bold text-blue-800 mb-2" >Q: What is the difference between Props and State</h1>
                    <p className="text-lg font-medium text-teal-950">Ans: The difference between Props and State are that props are used to pass data between components and are read-only, while state is used to manage a component's internal state and it is mutable. Props are passed down from a parent component to a child component, while state is managed locally within a component.</p>
                </div>
                <div className='mb-4 border p-4 rounded-md'>
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">Q: How does useState work?</h1>
                    <p className="text-lg font-medium text-teal-950">Ans: useState is a React hook used to manage state within a functional component, it is initialized with an initial state value and returns an array with the current state value and a setter function to update it, When the setter function is called with a new value, React updates the state and re-renders the component to reflect the changes.</p>
                </div>
                <div className='mb-4 border p-4 rounded-md'>
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">Q: Purpose of useEffect other than fetching data</h1>
                    <p className="text-lg font-medium text-teal-950">Ans: The Purpose of useEffect other than fetching data is that useEffect hook in React is commonly used to fetch data from an API but it can also be used for other purposes such as updating the document title, setting up event listeners, and cleaning up after a component. By running code after a component is mounted or updated, useEffect can be used to create more complex and interactive components that respond to user actions and update the document state.</p>
                </div>
                <div className='mb-4 border p-4 rounded-md'>
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">Q: How Does React work?</h1>
                    <p className="text-lg font-medium text-teal-950">Ans: React works by creating a virtual representation of the UI called the Virtual DOM, updating it efficiently and rendering the changes to the actual DOM. This allows us to create complex and dynamic user interfaces that are fast and responsive.</p>
                </div>
            </div>
        </div>
    );
};

export default BlogQuestions;