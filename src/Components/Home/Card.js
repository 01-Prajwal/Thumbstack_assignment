import React, { useEffect, useState } from 'react'
import './Card.scss'
const Card = () => {

	return (
		<>
			<div class="curved-div">
				<h1 className='curv-head'>You Have Landed On Correct Place </h1>
				{/* <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lorem, porttitor nec vulputate sit amet...
  </p> */}
				<svg viewBox="0 0 1440 319">
					<path fill="#fff" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
			</div>
			<div class="container1">
				<div class="display">

					<div class="display-item">
						<div class="card huxi">
							<div class="card-top"></div>
							<div class="card-profile">
								<div class="profile-image">
								</div>
							</div>
							<div class="card-info">
								<div class="info-title">
									<h2 className='my-name'>Prajwal Bhange</h2>
									<h3>Web Developer</h3>
								</div>
								<div class="info-follow">
									{/* <div class="follow-followers">
							<span>274</span><br />
							<span>Followers</span>
						</div> */}
									{/* <div class="follow-following">
							<span>56</span><br />
							<span>Following</span>
						</div> */}

								</div>
								<div class="info-bio">
									{/* Proin non rhoncus sapien. Cras tempus odio elit, eget hendrerit neque sollicitudin at. Suspendisse feugiat nunc quis venenatis volutpat. Cras finibus sit amet velit vel dignissim. Curabitur vehicula porttitor leo a tincidunt.  */}
									<p>As a web developer and React enthusiast, I am passionate about crafting immersive digital experiences and building user-friendly interfaces. Currently in my fourth year of computer engineering, I have dedicated myself to honing my skills in front-end development and staying up to date with the latest web technologies.My journey into the world of web development began with a curiosity for design and a desire to bring creative visions to life. Through hands-on projects and constant exploration, I have developed a strong foundation in HTML, CSS, and JavaScript, which has served as a stepping stone for my proficiency in React.</p>

								</div>


								<div class="info-social">
									<div class="social-icons">
										<div class="sm twitter">
											<i class="fa fa-twitter" aria-hidden="true"></i>
										</div>
										<div class="sm facebook">
											<i class="fa fa-facebook" aria-hidden="true"></i>
										</div>
										<div class="sm pint">
											<i class="fa fa-pinterest" aria-hidden="true"></i>
										</div>
										<div class="sm px500">
											<i class="fa fa-500px" aria-hidden="true"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="dashboard">
						<h2>Why Choose ME? </h2>
						<div className="">
						<h4>Below Are </h4>
						<h4> My Skills </h4>
						</div>
							
						<div className="skill">
							<div className="html">
								<span>HTML</span>
								<svg>
									<circle class="bg" cx="57" cy="57" r="52" />
									<circle class="meter-1" cx="57" cy="57" r="52" />
								</svg>
							</div>
							<div className="html">
							<span>CSS</span>
							
							<svg>
								<circle class="bg" cx="57" cy="57" r="52" />
								<circle class="meter-2" cx="57" cy="57" r="52" />
							</svg>
							</div>
							<div className="html">
							<span>JS</span>
							<svg>
								<circle class="bg" cx="57" cy="57" r="52" />
								<circle class="meter-3" cx="57" cy="57" r="52" />
							</svg>

							</div>
							<div className="html">
							<span>REACT</span>
							<svg>
								<circle class="bg" cx="57" cy="57" r="52" />
								<circle class="meter-4" cx="57" cy="57" r="52" />
							</svg>
							</div>
						</div>
					</div>


				</div>
			</div>

		</>
	)
}

export default Card