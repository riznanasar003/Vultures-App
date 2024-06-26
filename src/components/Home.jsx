import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">

                <div className="row">
                    <br /><br />
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    
                    <center>
                    <img src="https://r2.erweima.ai/imgcompressed/compressed_faaf238904f593192f212257814f4e71.webp" height="450px"></img>
                    </center>
                </div>
                    <h4><center>FORGET EVERYTHING AND RISE (F.E.A.R)</center></h4>
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://thumbs.dreamstime.com/b/teamwork-team-together-collaboration-business-communication-outd-outdoors-concept-48568990.jpg" class="d-block w-100" alt="..." height="550px" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-44-e1478037191772.jpg" class="d-block w-100" alt="..." height="550px" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.wondershare.com/edrawmind/articles2023/teamwork-and-collaboration/team-work-vs-collaboration.jpg" class="d-block w-100" alt="..." height="550px" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <br /><br />


            <br /><br />
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card">
                                <img src="https://i0.wp.com/northshoretribe.com/wp-content/uploads/images/leadership-communication-styles-HGz.jpeg?fit=1200%2C686&ssl=1"
                                    height="250px" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title" >LEADERSHIP</h5>
                                    <p class="card-text">Effective leaders have a clear vision for the future and can create strategies to achieve long-term goals. They inspire and guide their team towards these objectives.Good leaders are decisive and can make informed, timely decisions. They weigh the pros and cons, consider input from others, and choose the best course of action. Good communicators convey their messages clearly and concisely.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card">
                                <img src="https://static.vecteezy.com/system/resources/previews/006/948/446/non_2x/time-management-concept-business-people-working-near-the-big-clock-time-schedule-and-business-plan-flat-style-illustration-vector.jpg"
                                    height="250px" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title" >TIME MANAGEMENT</h5>
                                    <p class="card-text"> Effective time management involves identifying and focusing on the most important tasks. Creating a detailed plan or schedule helps in organizing tasks and allocating time efficiently. This includes setting deadlines and breaking down larger tasks into manageable chunks.Presence of mind involves being fully aware of the current situation and surroundings. </p>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card">
                                <img src="https://habs.uq.edu.au/files/56773/WTH%20Multitasking%201.png" height="250px" class="card-img-top"
                                    alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title" >MULTITASKING</h5>
                                    <p class="card-text">Multitasking is all about doing multiple things at once. We might juggle tasks like folding laundry while talking on the phone, or switch rapidly between checking emails and writing reports. It feels productive, but research suggests our brains don't truly multitask. While multitasking might seem like a shortcut, it can actually slow us down and lead to mistakes.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <div class="card">
                                <img src="https://media.npr.org/assets/img/2016/05/16/professionalism-101_slide-15f9f4e4ec1ee7c3c3076357735dad55956e1c4e.jpg"
                                    height="250px" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title" >PROFESSIONALISM</h5>
                                    <p class="card-text">Professionalism is the cornerstone of a successful workplace. It's the glue that holds trust, respect, and productivity together. At its core, professionalism is about how you conduct yourself – it's about showing you're serious, competent, and someone others can rely on. There are a few key aspects to professionalism. First and foremost is being prepared and dependable.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Home