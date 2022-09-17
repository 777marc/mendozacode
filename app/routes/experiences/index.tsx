import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getExperiences } from "../../models/experience.server";

export const loader = async () => {
  const experienceItems = await getExperiences();
  return json(experienceItems);
};

export default function Experiences() {
  const experiences = useLoaderData<typeof loader>();
  console.log("ex", experiences);
  return (
    <main>
      <h1>Experiences</h1>
      {experiences.map((ex) => {
        return (
          <>
            <p>{ex.title}</p>
            <p>{ex.body}</p>
          </>
        );
      })}
    </main>
  );
}
