interface BlogType {
  slug: string;
  content: string;
  title: string;
  description: string;
  image: string;
}

const sampleBlogs: BlogType[] = [
  // Sample data for blog posts

  {
      slug: 'tailwind-css-best-practices',
      content: 'Learn the best practices for using Tailwind CSS to build responsive UI designs.',
      title: 'Tailwind CSS Best Practices',
      description: 'Learn the best practices for using Tailwind CSS to build beautiful and responsive UI designs.',
      image: "/tail.jpg",
    },
    {
      slug: 'mastering-next-js-15',
      content: 'An introductory guide to using Next.js for server-side rendered applications.',
      title: 'Next.js for Beginners',
      description: 'An introductory guide to using Next.js, a popular React framework for building server-side rendered applications.',
      image: "/next.png",

    },
    {
      slug: "mastering-git-and-github",
      content: "A complete guide to mastering Git and GitHub, from basics to workflows.",
      title: "Mastering Git and GitHub",
      description: 'A complete guide to mastering Git and GitHub, from basic commands to collaborative workflows.',
      image:"/git1.jpg"
    },
    {
      slug: 'js-tutorial',
      content: 'A comprehensive guide to learning JavaScript, covering fundamentals, best practices, ES6 features, and asynchronous programming.',
      title: 'JavaScript Tutorial',
      description: 'A comprehensive guide to learning JavaScript, including variables, functions, loops, best practices, ES6 features, and asynchronous JavaScript.',
      image:"/js.png"
    },
    
    {
      slug: "ultimate-python-tutorial",
      content: "A comprehensive tutorial for learning Python, from basic concepts to advanced programming techniques.",
      title: "Ultimate Python Tutorial",
      description: "A complete guide to mastering Python, covering everything from fundamentals to more advanced programming concepts, with practical examples and exercises.",
      image:"/python.jpg"
  },
  {
    slug: "html-tutorial",
    content: "A comprehensive tutorial for learning html, from basic concepts to advanced programming techniques.",
    title: "HTML Tutorial",
    description:"Comprehensive guide on learning HTML, from the basics of structuring web pages to advanced elements and semantics.",
    image:"/html1.jpg"
  }
  ];

   
  

export default sampleBlogs;
