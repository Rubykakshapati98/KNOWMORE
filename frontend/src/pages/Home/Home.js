import { Card } from "antd";
import React, { useEffect, useRef } from "react";
import { Empty } from "antd";
import { Helmet } from "react-helmet";
import axios from "axios";
import ServicesList from "./service";
import Testimonial from "./testimonials";
import About from "./about";
import 'bootstrap/dist/css/bootstrap.css';
import "remixicon/fonts/remixicon.css";
// import 'remixicon'
import { Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Tabs } from "antd";
import { Skeleton } from "antd";
import "./Home.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import 'react-parallax-mousemove'
import {
  dispatchLogin,
  dispatchGetUser,
  fetchUser,
} from "../../redux/actions/authAction";
import {
  Listcoursesbypobularity,
  ListcoursesbyTopic,
} from "../../redux/actions/courseActions";
import Error from "../../components/utils/Error";

const Home = () => {
 
        document.addEventListener("mousemove", parallax);
        function parallax(e) {
            document.querySelectorAll(".object").forEach(function (move) {
                var moving_value = move.getAttribute("data-value");
                var x = (e.clientX * moving_value) / 250;
                var y = (e.clientY * moving_value) / 250;
                move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
            })
        }


  

  const dispatch = useDispatch();
  const ListCoursesReducer = useSelector((state) => state.ListCoursesReducer);
  const { loading, courses, error } = ListCoursesReducer;
  const ListCoursesbyPobularityReducer = useSelector(
    (state) => state.ListCoursesbyPobularityReducer
  );
  const {
    loading: loadingpobular,
    courses: coursespobular,
    error: errorpobular,
  } = ListCoursesbyPobularityReducer;
  const menuref = useRef(null);
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const pobularref = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const executeScroll = () => menuref.current.scrollIntoView();

  const { TabPane } = Tabs;
  useEffect(() => {
    const getToken = async () => {
      // make post request : hey db get me some data and return it to me
      const res = await axios.post("/user/refresh_token", null);
      dispatch({
        type: "GET_TOKEN",
        payload: res.data.access_token,
      });
    };
    getToken();
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());
        //Get user infor
        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
    dispatch(ListcoursesbyTopic("Development"));
    dispatch(ListcoursesbyTopic("marketing"));
    dispatch(Listcoursesbypobularity());
  }, [auth.isLogged, token, dispatch]);
  const changetopic = (key) => {
    switch (key) {
      case "1":
        dispatch(ListcoursesbyTopic("Development"));
        break;
      case "2":
        dispatch(ListcoursesbyTopic("marketing"));
        console.log("case 2");
        break;
      case "3":
        dispatch(ListcoursesbyTopic("Business"));
        console.log("case 3");
        break;
      case "4":
        dispatch(ListcoursesbyTopic("photography"));
        console.log("case 4");
        break;
      case "5":
        dispatch(ListcoursesbyTopic("music"));
        console.log("case 5");
        break;
      case "6":
        dispatch(ListcoursesbyTopic("design"));
        console.log("case 6");
        break;
      default:
        break;
    }
  };
  

  return (
    <div>
      <Helmet>
        <title>GYAN GUN</title>
      </Helmet>
      <section class="gyan">
        <div class="container1">
        <h2 class="object" data-value="3">GYANGUN<br></br><span>future of learning,</span> </h2>
{/*         
     
        <p class="object" data-value="" >your learning partner, anytime, anywhere!</p> */}
        
     
        
        <img src="asset/soplo.png" class="object" data-value="10" alt="" id="soplo"></img>
        <img src="asset/cohete.png" class="object" data-value="-20" alt="" id="cohete"></img>
        <img src="asset/senial.png" class="object" data-value="40" alt="" id="senial"></img>
        <img src="asset/soporte.png" class="object" data-value="-10" alt="" id="soporte"></img>
        <img src="asset/astronauta.png" class="object" data-value="10" alt="" id="astronauta"></img>
        <img src="asset/mundo1.png" class="object" data-value="-30" alt="" id="mundo1"></img>
        <img src="asset/asteroride1.png" class="object" data-value="-40" alt="" id="asteroride1"></img>
        <img src="asset/asteroide2.png" class="object" data-value="-20" alt="" id="asteroide2"></img>
        <img src="asset/mundo2.png" class="object" data-value="-30" alt="" id="mundo2"></img>
        <img src="asset/logo.png" class="object" data-value="20" alt="" id="logo"></img>

        </div>
        
      </section>
      
      
     
      {/* <About/> */}
    
      
      <section className="Courses_Popular mt-5" ref={pobularref}>
      <Row>
      <Col lg="12" className="mt-5 mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Courses</h2>
            </Col>

            
          </Row>
        <div className="coursecards">
          {loadingpobular ? (
            <Skeleton />
          ) : errorpobular ? (
            <Error error={errorpobular} />
          ) : coursespobular.length === 0 ? (
            <Empty />
          ) : (
            <Slider {...settings}>
              {coursespobular.map((course, index) => (
                <>
                  <CourseCard
                    key={course._id}
                    data-index={index}
                    course={course}
                  />
                </>
              ))}
            </Slider>
          )}
        </div>
      </section>
      
      
    
  
      <section className="Menu1 mt-5" id="Menu1" ref={menuref}>
      <h3 className="section__title mt-5">A broad selection of courses</h3>
        <Tabs defaultActiveKey="1" onTabClick={changetopic}>
          <TabPane tab="Devlopement" key="1">
            <div className="Tab_Content">
              <h5>Expand your career opportunities with Development</h5>

              <div id="paragraphbtn">
                <p>
                Take one of Gyangun's range of courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. 
                You’ll learn how to build everything from games to sites to apps. 
                  <br />
                  
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Development"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        <CourseCard
                          key={course._id}
                          data-index={index}
                          course={course}
                        />
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Marekting" key="2">
            <div className="Tab_Content">
              <h2>Become a Markter</h2>

              <div id="paragraphbtn">
                <p>
                  Marketing is more than a concentration within a business
                  major. More accurately, it describes a collection of skills
                  that are useful in any career. As a professional discipline,
                  marketing is a vital function of any business’ operation. It
                  explores customer perceptions and journeys as primary sources
                  of profit. It also utilizes various data to make smart and
                  insightful business decisions.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Marketing"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        <CourseCard
                          key={course._id}
                          data-index={index}
                          course={course}
                        />
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Business" key="3">
            <div className="Tab_Content">
              <h2>Improve your soft skills</h2>
              <div id="paragraphbtn">
                <p>
                  Personal development is a lifelong process. It is a way for
                  people to assess their skills and qualities, consider their
                  aims in life and set goals in order to realise and maximise
                  their potential.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Self-Dev"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        <CourseCard
                          key={course._id}
                          data-index={index}
                          course={course}
                        />
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Photography" key="4">
            <div className="Tab_Content">
              <h2>Become a Photographer</h2>
              <div id="paragraphbtn">
                <p>
                  Learning about light, exposure, color, tone, composition and
                  timing will help you produce more creative, more interesting,
                  more noticeable photographs. ... Learning to appreciate
                  different types of light and when some light is better for
                  making photos than others, will help you create more
                  outstanding photographs.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Photography"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        <CourseCard
                          key={course._id}
                          data-index={index}
                          course={course}
                        />
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Music" key="5">
            <div className="Tab_Content">
              <h2>Become a Musician</h2>

              <div id="paragraphbtn">
                <p>
                  Learning a musical instrument not only sustains and feeds the
                  brain, but it also improves so many other cognitive and
                  physical aspects of the human body. It's been widely studied
                  and proven that learning a musical instrument improves memory;
                  it not only improves your cognitive memory but also muscle
                  memory as well.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Music"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        <CourseCard
                          key={course._id}
                          data-index={index}
                          course={course}
                        />
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Design" key="6">
            <div className="Tab_Content">
              <h2>Become a Designer</h2>
              <div id="paragraphbtn">
                <p>
                  Millions of UK workers are at risk of being replaced by robots
                  within 15 years, a study claims. It's depressing news for
                  many, but if you learn something that machines could never do,
                  then you'll be future-proofing your career for many decades to
                  come. Graphic design is creative and requires human-led
                  intelligence and ideas to respond to trends, tastes, and what
                  has already been before. It will never be something a robot
                  can mimic. Sure, the technology to create will continue to
                  make our lives easier as designers, but they'll never replace
                  us. Never.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Design"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        <CourseCard
                          key={course._id}
                          data-index={index}
                          course={course}
                        />
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
        </Tabs>
      </section>
     
      <section className="Categorys_Popular mt-5">
    
      <div class="category_heading ">
      <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Categories
              </h2>
        

      </div>
              

           
         
        <div className="Categorycards mt-5">
          <CategoryCard
            title="Development"
            image="https://trendlyne-media-mumbai-new.s3.amazonaws.com/post-files/2022-07-22/None-87c78b83595d45fcb315b46fc081d472.gif"
          />
          <CategoryCard
            title="Design"
            image="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif"
          />
          <CategoryCard
            title="Digital Marketing"
            image="https://media4.giphy.com/media/gHiRWOaXGGHOY5w6f3/giphy.gif"
          />
          <CategoryCard
            title="Music"
            image="https://static01.nyt.com/images/2021/02/06/arts/03fiveminutes-quartet/03fiveminutes-quartet-superJumbo.gif"
          />
          <CategoryCard
            title="Photography"
            image="https://i.pinimg.com/originals/30/5e/6d/305e6d104bcec6cf420b108f2152a5d4.gif"
          />
          <CategoryCard
            title="Medical"
            image="https://cdn.dribbble.com/users/679372/screenshots/3841396/doc_2.gif"
          />
          <CategoryCard
            title="Business"
            image="https://www.gifimages.pics/images/quotes/english/general/gif-for-business-professional-man-52650-161524.gif"
          />
          <CategoryCard
            title="Education"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/65626933112811.56a01870441f4.gif"
          />
        </div>
      </section>
      <section class="our-service">
      <Row>
      <Col lg="12" className=" mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
      </section>
      
      <section className="Become_Teacher mt-5">
        <div className="background">
        <div className="paragraph">
            <h1>Become a Teacher with us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
               bibendum lacus at massa semper efficitur. Nullam dui ante, rutrum eu magna imperdiet, cursus 
              tempus ligula. Vestibulum finibus tincidunt est sed tincidunt.</p>
            <button className="Btn" id="Joinusbtn">
              Join Us
            </button>
          </div>
          <img
            src="https://expertshare.live/wp-content/uploads/2021/08/elearning-platform-top-image-1.svg"
            alt="Teacher"
          />
          
        </div>
      </section>
      
      <section className="m-5 client">
      <Container>
          <Row>
          <Col lg="12" className=" client1">
             
              <h2 className="section__title">OUR TEAM</h2>
              <h6 className="section__subtitle">What our Team Says</h6>
            </Col>
           
           

           
          </Row>
        </Container>
       
        <Testimonial />
      </section>


      
    </div>



  );
};

export default Home;
