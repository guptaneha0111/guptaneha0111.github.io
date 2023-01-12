import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./MyGithub.css";

const MyGithub = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <h1 className="githead">
          GitHub Statistics & Calender section
        </h1>
      <div  className="GithubContainer">
        <GitHubCalendar
          username="guptaneha0111"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
      <div className="statsDiv">
        <img
        className='statsdiv1'
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=guptaneha0111&show_icons=true&locale=en"
          alt="guptaneha0111"
        />
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=guptaneha0111&"
          alt="guptaneha0111"
        />
      </div>
    </div>
)
}

export default MyGithub