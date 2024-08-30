import React,{useState,useEffect,useCallback} from "react";
import {router} from "@inertiajs/react";

const AdminPanel = () => {

    const[projects ,setProjects] = useState([]);
    const[formData, setFormData] = useState({
        id:null,
        title:'',
        description:'',
        link:''
    });

    const[isEditing, setIsEditing] = useState(false);
    const[loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!loaded){
       router.get('/admin/projects', {}, {
            onSuccess: ({ props }) => {
                console.log('Projects from server:', props.projects); // Should log the array of projects
                setProjects(props.projects || []); // Ensure projects is not undefined
                setLoaded(true);
            },
        });
    }
    }, [loaded]);



    const handleChange = (e) => {
        const{name,value}=e.target
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isEditing){
            router.put(`/admin/projects/${formData.id}`,formData,{
              onSuccess:()=>{
                resetForm();
              }  
            });
        }else{
            router.post('/admin/projects',formData,{
                onSuccess:()=>{
                    resetForm();
                    alert('Project added successfully');
                }
            });
        }
    };

    const resetForm = () => {
        setFormData({
            id:null,
            title:'',
            description:'',
            link:''
        });
        setIsEditing(false);
    };

    const handleEdit = (project) => {
        setFormData({
            id:project.id,
            title:project.title,
            description:project.description,
            link:project.link
        });
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this project?')){
            router.delete(`/admin/projects/${id}`);
        }
    };

    return (
        <div className="container md:max-w-full p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Manage Projects</h1>

            {/* project form*/ }
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="title">Project Title</label>
                    <input 
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-md" 
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
                    <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="link">Project link</label>
                    <input 
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-md" 
                    required
                    />
                </div>
                <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    {isEditing ? 'Update Project' : 'Add Project'}
                </button>
                <button
                type="button"
                onClick={resetForm}
                className="ml-2 mx-4 bg-red-500 text-white px-4 py-2 rounded-md">
                    Cancel
                </button>
            </form>

            {/* project list */ }
            
            <h2 className="text-xl font-bold mb-4">Project List</h2>
            {projects.length > 0 ? (
            <ul className="space-y-4">
                {projects.map((project) => (
                    <li key={project.id} className="border p-4 rounded-md">
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                        <a href="{project.link}" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{project.link}</a>
                        <div className="mt-2">
                            <button
                                onClick={() => handleEdit(project)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(project.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>                    
                ))}
            </ul>):(
                <p>No projects found.</p>
            )}
           
        </div>
    );
};

export default AdminPanel;