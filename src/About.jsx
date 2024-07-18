import { Link } from "react-router-dom";

function About(){
  return(
    <>
      <div id="hot-air-balloon"></div>
      <section className="text-gray-600 body-font p-5 my-4 mt-40 md:h-screen flex justify-center">
          <div className="text-center max-w-6xl">
              {/* <div className="text-left lg:w-12/12 w-full shadow-md p-3 bg-[#ffffffb0] hover:scale-[101%] transition-transform rounded-md"> */}
                <h1 className="title-font sm:text-5xl  mb-4 font-medium text-gray-900 text-4xl style_header">Here i am!</h1>
                <p className="about_sub_title">
                I'm Dhananjay and I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Since the day I was first introduced to a computer, its working mechanism piqued my curiosity, and growing up I have been engrossed in sharpening my technical skills with the aim of developing something on my own. To fulfill my curiosity, I've chosen my career path as a web developer.
                </p>
              {/* </div> */}

              {/* <div className="lg:w-4/12 shadow-md p-3">

              </div> */}
          </div>
      </section>
    </>
  )
}

export default About;

