import Section from "@/components/Section/Section"


const Project = ({ params }: {params:{id:string}}) => {
    return <Section className="py-0" description={true} projectId={parseInt(params.id)} />;
};

export default Project

