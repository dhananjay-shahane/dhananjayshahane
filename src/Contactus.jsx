export default function Contactus() {
  return(
    <>
       <section className="text-gray-600 body-font flex justify-center">
            <div className="px-5 py-24 mx-auto">
                  <div className="flex flex-col text_animation text-center w-full mb-12">
                    <h1 className="sm:text-5xl text-4xl letters font-medium title-font mb-4 dark_heading text-gray-900 style_header">Contact Us</h1>
                  </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                      <div className="flex flex-wrap -m-2">
                          <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="contact_input" />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="contact_input" />
                            </div>
                          </div>
                          <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="contact_input_textarea"></textarea>
                            </div>
                          </div>
                      </div>
                      <div className="flex justify-center"><button className="btnTheme">Send</button></div>
                  </div>
              </div>
          </section>
    </>
  ) 
}
