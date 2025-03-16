import ChapterCard from "./components/ChapterCard";
import TitleCard from "./components/TitleCard";


export default function Home() {

  let associationChapters = [
    {
      title: "Data Science",
      subtitle: "Data the new oil.",
      content: "Join our Data Science Club to explore the fascinating world of data analysis, machine learning, and artificial intelligence. Whether you're a beginner or an expert, our club offers resources, workshops, and a community to help you grow your skills and knowledge."
    },

    {
      title: "Cyber Security",
      subtitle: "Guardians of the Byte.",
      content: "Join our Cyber Security Club to delve into the critical field of protecting digital information. Our club provides insights into the latest security practices, ethical hacking, and defense strategies. Whether you're new to the field or a seasoned professional, we offer workshops, resources, and a community to enhance your skills and knowledge."
    },
    {
      title: "ROBOTICS",
      subtitle: "We make nice bots.",
      content: "Join our Robotics Club to explore the exciting world of robotics and automation. Our club offers hands-on projects, workshops, and resources to help you build and program robots. Whether you're a beginner or an experienced roboticist, you'll find a community of like-minded enthusiasts to collaborate and grow with."
    }
  ]

  return (
    <div style={{ margin: "50px" }}>
      <TitleCard
        associationName={"CSE ASSOCIATION"}
        departmentName={"Department of Computing and Technology"}
      />
      <TitleCard
        associationName={"LAW SOCIETY"}
        departmentName={"Department of Law"}
      />
      {associationChapters.map(function (chapter, index) {
        return (
          <ChapterCard
            key={index}
            title={chapter.title}
            subtitle={chapter.subtitle}
            content={chapter.content}
          />)
      })}
    </div>
  )
}