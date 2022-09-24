import React from "react"

const About = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center md:w-1/2 py-4 space-y-16">
        <h1 className="text-2xl font-semibold tracking-wide border-b-4 border-green-600">
          About Us
        </h1>
        <div className="text-sm leading-7 space-y-4">
          <p>
            Drinkpie Company was founded in 2014 by two friends who wanted to
            create a company that would bring people together around their love
            for cocktails. We believe that everyone should have access to great
            tasting drinks at any time of day and we want to make sure that our
            customers feel good about what they drink. Our goal is to provide
            high quality products at affordable prices while giving back to the
            community.
          </p>
          <p>
            Our mission is to offer the highest quality spirits and mixers at
            the best value possible. We strive to give back to the community by
            donating 10% of our profits to non-profits that help others.
          </p>
          <p>
            We are proud to say that we are 100% employee owned and operated.
            All of our employees are given stock options in the company.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
