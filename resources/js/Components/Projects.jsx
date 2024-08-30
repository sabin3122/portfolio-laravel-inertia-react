import React from "react";
import { useState,useEffect } from "react";

export default function Projects() {
    const[projects,setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
        .then(response => response.json())
        .then(data=>setProjects(data))
        .catch(error => console.error('error fetching data',error)); 
    
    }, []);


    return (
        <div id="Projects" className="bg-white py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid grid-cols-1  gap-10 ">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gradient-to-r from-blue-500 to-purple-600 p-6  rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-lg mb-4">{project.description}</p>
                            <a href={project.link} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
