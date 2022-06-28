import React from "react";

function Footer() {

    return (
        <div>
            <footer >
                        <div className="row row-2" style={{textAlign: 'center', padding:"1.5%"}}>
                            <h3>Made with ❤️ and 💪🏻 by Shanu!! 😊</h3>
                        </div>
                <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
                    <div className="col-12">
                        <div className="row my-4 row-1 no-gutters">
                            <div className="col-sm-3 col-auto text-center"><a href="https://www.youtube.com/channel/UCnT6Z9ay-snq1c0lZkEtYjg"><small>&#9400; College Tech With Shanu</small></a></div><div className="col-md-3 col-auto "></div><div className="col-md-3 col-auto"></div>
                            <div  className="col  my-auto text-md-left  text-right "> <small>kumarshanupersonal@gmail.com <span style={{paddingLeft:"2%"}}><a  href="https://github.com/Kr-Shanu"><img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-1024.png" className="img-fluid " width="25" alt="sd" /></a></span>
                                <span style={{paddingLeft:"2%"}}><a href="https://www.linkedin.com/in/kr-shanu/"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png" className="img-fluid " width="25" alt="sdf" /></a></span></small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;