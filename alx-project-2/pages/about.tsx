import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

const About = () => {
  return (
     <div className="container">
      <Header />
      <h1 className="text-3xl font-bold pl-3 my-4">About Job Explorer</h1>
      <p className="mb-6">
        Job Explorer is a platform to discover and share job roles like Frontend Developer, Backend Engineer, and more. Create and view posts to learn about exciting career opportunities.
      </p>
      <div className="flex flex-col gap-4 items-center">
        <Button size="small" shape="rounded-sm">Explore Jobs</Button>
        <Button size="medium" shape="rounded-md">Share a Post</Button>
        <Button size="large" shape="rounded-full">Contact Us</Button>
      </div>
    </div>
  )
}

export default About
