import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import "./skills.html"

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container" id="tech">
          <div className="skills-bar">
            <h1 className="skills-heading">Technical skills</h1>
            <font>    </font>
              <font>    </font>
              <font>    </font>
              <font>    </font>
              <font>    </font>
              <font>    </font>

            {/* {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : ( */}
              {/* <img
                alt="Skills"
                src={require("../../assets/images/airbnbLogo.png")}
              /> */}
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-plain.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg"} width="70" height="70"/>
              <font>    </font>
              <font>    </font>
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"} width="70" height="70"/>
            




           
            

            
          </div>
          

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
