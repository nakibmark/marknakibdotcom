import { HeadFC } from "gatsby";
import * as React from "react";

const AboutPage = () => {
  return (
    <main>
      <h1>About Mark</h1>
      <p>
        Hello! I am a software engineer and team lead from New England (prev.
        Boston, now CT). I started programming at a young age with my dad's old
        Borland C++ book. Now I mostly do web development. I've worked at
        companies ranging from 3-person consultancies to Fortune #5. I enjoy
        solving "people problems", being highly product-focused, leading teams
        of engineers, and building software that doesn't suck.
      </p>
      <p>
        Outside of work I am a husband, and father of two. I love DIY, lifting
        weights, and playing with my cat.
      </p>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Mark</title>;
