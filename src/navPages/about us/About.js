import React from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import logo from 'img/hero-min.jpg';


const About = () => {
  return (
    <>
      <Navbar />
      <section className="pt-16 bg-blueGray-50">
        <div className="mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-500">
                <img alt="..." src={logo} className="w-full align-middle rounded-t-lg" />
                <blockquote className="relative p-6 mb-4">
                  {/* <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                      <polygon points="-30,95 583,95 583,65" className="text-blue-500 fill-current"></polygon>
                    </svg> */}
                  <h4 className="text-xl font-bold text-white">
                    Our Mission Statement.
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Our mission is to preach and teach all nations and every creature, 
                    the gospel of our Lord and Saviour Jesus Christ, in both words and Life and with it, 
                    bring the lost sheep to the Kingdom of God
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="basis-auto m-4 mb-6 md:mb-0 w-full px-3 lg:px-6">
                <h2 className="text-3xl font-bold mb-6 text-primary">About us</h2>
                <p className="text-gray-500 mb-6">
                  God and His Word are One. God's Word represents His Heart's
                  desire. Jesus is the Word by whom God speaks to us. The Holy
                  Spirit is the One who reveals Jesus to us.
                </p>
                <p className="text-gray-500 mb-6">
                  At City Of Jesus International Ministry, we believe that God and His Word are One.
                  God's Word represents His heart's desire, and Jesus is the Word by whom God speaks to us.
                  The Holy Spirit is the One who reveals Jesus to us.
                  We believe that Holy men of God were carried along by the Holy Spirit as they spoke the message
                  that came from God. The Words of God are Spirit and Life.
                </p>
                <p className="text-gray-500 mb-6">
                  We believe that the Holy Bible is the perfect union between the Word and Spirit of God in our hearts.
                  It is more than long-ago events and ancient wisdom.
                  It is God's message of grace and truth to us today (2 Timothy 3:16; 2 Peter 1:21).
                </p>
                <p className="text-gray-500 mb-6">
                  We believe that sin points one to eternal death and destruction,
                  but God's Word points one to life. If Christ Jesus is our Lord and Saviour,
                  a new body, a new soul, and a new spirit await us one day.
                  God's Spirit joins Himself to our spirit to declare that we are God's children -
                  children who are set free from sin and its penalties (Romans 8:16).
                </p>
                <p className="text-gray-500 mb-6">
                  We believe that salvation is to be set free from sin and its penalties,
                  and it is received by faith in the cleansing power of the Blood of Jesus Christ.
                  Each person has to accept Jesus as his or her personal Lord and Saviour,
                  otherwise Jesus' death will not save him or her. That is, they must be born again.
                </p>
                <p className="text-gray-500 mb-6">
                  Not only must we have God's Word, but also His Spirit, mixed with
                  repentance and faith in our hearts. Repentance is the only hope for God's mercy.
                  Where there is repentance, there is mercy, and where there is mercy,
                  there is forgiveness, healing, Salvation, and all of God's blessings.
                </p>
                <p className="text-gray-500 mb-6">
                  We believe that divine healing is the supernatural power of God bringing
                  health to the human body, and it is received by faith in the finished work of
                  our Lord and Saviour Jesus Christ. All the punishment Jesus Christ received
                  before and during His crucifixion was for our healing - spirit, soul, and body.
                  By His stripes, we are healed. Jesus went to the Cross and made us fit for God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
