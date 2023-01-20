import { Button, Card, Rate } from 'antd'
import React from 'react'
import  {Link} from 'react-router-dom' 
const CourseCard = ({ course }) => {
    
    return (
        <div className = 'coursecard'>
            <Card
                style={{ width: 250,marginRight:'10px' }}
                 cover={<img style = {{height : '180px',objectFit : 'cover'}} alt="example" src={course.image} />} 
                >
                        
           <div class="course-name">
           <h5>
                   
                   {course.name}
                   
               </h5>
           </div>
                
                <h4>${course.price}</h4>
                
                <div class='content-detail' >
	 									<p class='content-p'>{course.description}</p>

 								</div>
                                 
                 
                 <button className="Btn" id="readbtn">
                <div id="spin"></div>
                <Link to={`/courses/${course._id}`} className="linkmorebtn">
                  {" "}
                 Read More...
                </Link>
              </button>
                                 
            
               
            </Card>
        </div>
   


    )
    
}

export default CourseCard