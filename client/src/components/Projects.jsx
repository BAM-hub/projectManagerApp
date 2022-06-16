import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/project";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Somthing Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
