import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import matter from "gray-matter"
import fs from "fs"
import Onthispage from '@/app/components/Onthispage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { Metadata } from 'next' 

 
type Props = {
  params: { slug: string, title: string, description: string }
  
}

// https://ondrejsevcik.com/blog/building-perfect-markdown-processor-for-my-blog


export default async function BlogPage({ params }: { params: { slug: string } }) {
  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype) 
  .use(rehypeStringify) 
  .use(rehypeSlug)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  },
)
  .use(rehypeAutolinkHeadings)


const filePath = `content/${params.slug}.md`
const fileContent = fs.readFileSync(filePath, "utf-8");
const {data, content} = matter(fileContent)

const htmlContent = (await processor.process(content)).toString()
  return (
   <MaxWidthWrapper className='prose dark:prose-invert'> 
   <div className='flex flex-col lg:flex-row'> 
    <div className='w-full lg:w-3/4 px-4 lg:px-16'> 
        <h1 className="text-2xl md:text-3xl">{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html: htmlContent}}></div> 
    </div>
        <Onthispage className="hidden lg:block lg:text-sm w-full lg:w-1/4 lg:px-4" htmlContent={htmlContent}/>
   </div>
 
   </MaxWidthWrapper>
  )
}  


export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent)
  return {
    title: `${data.title} - ProgrammingWithBilqeesShahid`, 
    description: data.description
  }
}

