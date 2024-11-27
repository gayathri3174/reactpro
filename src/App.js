import logo from './logo.svg';
import './App.css';
import Image1 from './assests/images/image1.png.webp';
import Image2 from './assests/images/image2.png.webp';


function App() {
  const data = [
    { id: 109, name: "gayathri", address: "Balapur Hyderabad", qualification: "MCA" , discription :"It is a long establIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here" },
    { id: 110, name: "priya ", address: "Balapur Hyderabad", qualification: "Btech" , discription :"It is a long establIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has "},
    { id: 110, name: "sharavani ", address: "Balapur Hyderabad", qualification: "Btech",discription :"It is a long establIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."  },
    { id: 110, name: "sharavani ", address: "Balapur Hyderabad", qualification: "Btech" , discription:"It is a long establIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " },
    { id: 110, name: "sharavani ", address: "Balapur Hyderabad", qualification: "Btech" , discription : "It is a long establIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here" }


  ]

  return (

    <div className="list_of_students" >
      <h1 className="title">List of students</h1>
      <div className="student_main_section container  ">
      <div className="student_section row ">
      {data.map((student) =>
       
        
            <div className ="student_details col-sm-12 col-md-6 col-lg-4 ">
             <div className='details  '>
              <img  src={Image1} alt='image1' />
             <h1>{student.id}</h1>
              <p>{student.name}</p>
              <p>{student.address}</p>
             <p>{student.discription}</p>
              </div>

            </div>
         
       
      )}
       </div>
       </div>
       

    </div>
  );
}

export default App;
