
import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import profileImg from "../assets/images/satya//profile.jpg";
import firstImg from "../assets/images/satya//01.jpg";
import secondImg from "../assets/images/satya//02.jpg";
import thirdImg from "../assets/images/satya//03.jpg";
import fourthImg from "../assets/images/satya//04.jpg";

const Home = () => {

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '220px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={profileImg}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Satya Narayan Epili</MDBTypography>
                  <MDBCardText>Odisha</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Posts</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">17543</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Friends</MDBCardText>
                  </div>
                  <div>
                    <a className="font-italic mb-0"
                      href="https://www.facebook.com/profile.php?id=100004794945437"> Facebook Profile </a>
                  </div>
                </div>

                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">60</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Posts</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">69.87k</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">256</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                  <div>
                    <a className="font-italic mb-0" href="https://www.instagram.com/satyanarayanepili/">
                      Instagram Profile
                    </a>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Lives in Dubai</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Pubg lover (S12K King 👑 👑 👑)  </MDBCardText>
                    <MDBCardText className="font-italic mb-1">Dancer & Singer</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={firstImg}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={secondImg}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src={thirdImg}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={fourthImg}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div >
  )

}

export default Home