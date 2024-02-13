import React from "react";
import ubemy from "../assets/projects/Ubemy.png";
import ProjectItem from "./ProjectItem";
import tastytogo from "../assets/projects/TastyToGo.png";
import ecommerce from "../assets/projects/ShopSmart.png";
import recipe from "../assets/projects/Recipe-App.png";
import todo from "../assets/projects/ToDo-App.png";
import weather from "../assets/projects/Weather-App.png";
import todo_react from "../assets/projects/To-Do-App.png";
import chat from "../assets/projects/Chat-App.png";
import blog from "../assets/projects/Blog-App.png";
import ecommerce_react from "../assets/projects/Ecommerce-app.png";
import food_react from "../assets/projects/Food-App.png";
import ProjectItemReact from "./ProjectItemReact";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="E-learning app"
            backgroundImg={ubemy}
            projectUrl="/ubemy"
          />
          <ProjectItem
            title="Food app"
            backgroundImg={tastytogo}
            projectUrl="/food"
          />
          <ProjectItem
            title="E-commerce app"
            backgroundImg={ecommerce}
            projectUrl="/ecommerce"
          />
          <ProjectItem
            title="Recipe app"
            backgroundImg={recipe}
            projectUrl="/recipe"
          />
          <ProjectItem
            title="ToDo app"
            backgroundImg={todo}
            projectUrl="/todo_next"
          />
          <ProjectItemReact
            title="Chat app"
            backgroundImg={chat}
            projectUrl="/chat"
          />
          <ProjectItemReact
            title="Blog app"
            backgroundImg={blog}
            projectUrl="/blog"
          />
          <ProjectItemReact
            title="Food app"
            backgroundImg={food_react}
            projectUrl="/food_react"
          />
          <ProjectItemReact
            title="E-commerce app"
            backgroundImg={ecommerce_react}
            projectUrl="/ecommerce_react"
          />
          <ProjectItemReact
            title="ToDo app"
            backgroundImg={todo_react}
            projectUrl="/todo_react"
          />
          <ProjectItemReact
            title="Weather app"
            backgroundImg={weather}
            projectUrl="/weather"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
