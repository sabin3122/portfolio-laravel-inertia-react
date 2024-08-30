import React from "react";

export default function Aboutme() {
    return (
        <div id="Aboutme" className="bg-gray-200 p-8 md:h-100 h-auto">
            <div className="container mx-auto">
            <h1 className="text-4xl font-bold p-8 text-center">About me</h1>
                <div className="flex flex-col md:flex-row items-center justify-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                    {/* Image and Personal Info */}
                    
                    <div className="flex-shrink-0 pr-8 text-center md:text-left pt-0">
                        <img
                            src="/images/profile.JPG"  // Ensure the image is placed in the public/images directory
                            alt="Profile Picture"
                            className="w-80 h-80 rounded-full object-cover object-center mx-auto md:mx-0"
                        />
                        <h2 className="text-2xl font-semibold mt-4">Veshnath Acharya</h2>
                        <p className="text-blue-600 font-medium">Electronics Communication<br/> and Information Engineer & <br/>Software Developer</p>
                    </div>

                    {/* About Me Text */}
                    <div className="text-lg leading-relaxed md:max-w-2xl pt-6">
                        <p>
                            I am a passionate software developer with a strong background in web development and a keen interest in emerging technologies. My journey in tech began with a fascination for how things work, which led me to explore programming and software engineering. 
                            Over the years, I've honed my skills in various programming languages and frameworks, allowing me to build robust, scalable applications that solve real-world problems.
                        </p>
                        <p className="mt-4">
                            I thrive in collaborative environments and enjoy working on projects that challenge me to think creatively and push the boundaries of what's possible. Outside of coding, I am an avid learner, constantly seeking out new knowledge to stay ahead in this ever-evolving field. When I'm not at my computer, you can find me exploring the outdoors, reading up on the latest tech trends, or experimenting with new recipes in the kitchen.
                        </p>
                        <p className="mt-4">
                            I believe in the power of technology to make a positive impact, and I am excited to continue growing in my career while contributing to meaningful projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
