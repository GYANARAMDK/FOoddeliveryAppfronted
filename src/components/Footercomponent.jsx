// import React from 'react'
import { Container, Row, Col } from 'reactstrap'; // Import Reactstrap components
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
export default function Footercomponent() {
  return (
    <>
           <div className="flex flex-col justify-between  bg-gray-600 text-white h-[40vh]">
            <div className="m-4 flex ">
                <div className="flex justify-center items-center gap-4 w-[30vw]">
                    <div>
                    <img src="footerlogo.png" alt="company logo" className="h-[60px] " />
                    </div>
                     <div>
                    <img src="companyname.png" alt="company name" className="h-[20px]"/>
                    </div>
                </div>
                <div className="flex justify-evenly items-center gap-4 w-[70vw] ">
                    <button className="text-black font-bold h-[30px]">
                        contact us
                    </button>
                    <button className="text-black font-bold h-[30px]">
                        jobs
                    </button>
                    <button className="text-black font-bold h-[30px] ">
                        services
                    </button>
                    <button className="text-black font-bold h-[30px]">
                        life at savorbite
                    </button>
                </div>
            </div>
            <div className="m-4 flex ">
                <div className="flex  gap-4">
                    <button className="bg-white my-3 px-4 rounded">
                     <a className=" no-underline whitespace-nowrap" href="">privacy policy</a>
                    </button>
                    <button className="bg-white my-3 px-4 rounded">
                    <a className=" no-underline whitespace-nowrap" href="">terms of condition</a>
                    </button>
                </div>
                <Container>
        <Row>
          <Col className="text-center ">
            <h5 className='text-2xl text-black'>Follow Us</h5>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/GYANARAMDK" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaGithub size={30} />
              </a>
              <a href="https://x.com/gyanaramdh2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/dgyanaram/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
                <div className="text-black text-center py-2 px-4 whitespace-nowrap flex items-center">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </div>
    </>
  )
}
