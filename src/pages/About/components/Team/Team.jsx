import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember from './TeamMember';
import './Team.scss';

import logo from 'assets/images/2.jpeg';
import kevinImage from 'assets/images/2.jpeg';
import dennisImage from 'assets/images/2.jpeg';

import shahzodaImage from 'assets/images/2.jpeg';
import vincentImage from 'assets/images/2.jpeg';
import rohmaImage from 'assets/images/2.jpeg';
import tylerImage from 'assets/images/2.jpeg';
import siamImage from 'assets/images/2.jpeg';

const Team = () => {
  return (
    <section className="about-team">
      <h2>Meet The Team</h2>
      <section className="about-team-position position-eboard">
        <h3>
          <strong>Executive Board Members</strong>
        </h3>
        <div className="about-2022-2023-board">
          <h4>June 2022 - May 2023</h4>
          <div className="about-team-teammembers">
            {/* 150 characters max for description */}
            <TeamMember image={logo} firstName="Syeda" lastName="Kazmi">
              Hi! I&apos;m an Executive Board Member of the Brooklyn College
              Computer Science Club.
            </TeamMember>
            <TeamMember image={logo} firstName="Junninho" lastName="Thomas">
              Hi! I&apos;m an Executive Board Member of the Brooklyn College
              Computer Science Club.
            </TeamMember>
            <TeamMember
              image={kevinImage}
              firstName="Kevin"
              lastName="Tam"
              website="https://kevintamcs.com"
            >
              Hello! I&apos;m Kevin, a Computer Science student. I develop
              software and experiences that captivate users on all platforms.
            </TeamMember>
            <TeamMember image={logo} firstName="Neissa" lastName="Dorsinville">
              Hi! I&apos;m an Executive Board Member of the Brooklyn College
              Computer Science Club.
            </TeamMember>
            <TeamMember
              image={dennisImage}
              firstName="Dennis"
              lastName="Klimenkov"
              website="https://www.linkedin.com/in/dennis-klimenkov"
            >
              Hi! I&apos;m Dennis, a Computer Science student at Brooklyn
              College. I&apos;m trying to write code that will make the world a
              better place one day!
            </TeamMember>
          </div>
        </div>

        <div className="about-2022-2022-board">
          <h4>May 2022 - June 2022</h4>
          <div className="about-team-teammembers">
            <TeamMember
              image={shahzodaImage}
              firstName="Shahzoda"
              lastName="Davlatova"
            >
              I&apos;m a student studying Computational Math with a minor
              Physics. My interests are reading, traveling, and long boarding.
            </TeamMember>
            <TeamMember image={vincentImage} firstName="Vincent" lastName="Xie">
              In my free time I attend hackathons and sleep. If you want to talk
              about hackathons and what they are or just want to talk tech, come
              say hi!
            </TeamMember>
            <TeamMember image={rohmaImage} firstName="Rohma" lastName="Khan">
              I&apos;m a Brooklyn College alumni interested in baking, movies
              and meditation!
            </TeamMember>
            <TeamMember image={tylerImage} firstName="Tyler" lastName="Carway">
              On top of my passion for coding I also enjoy videogames, starting
              but never finishing Netflix series, playing boardgames, and
              hanging out with my friends.
            </TeamMember>
            <TeamMember image={siamImage} firstName="Siam" lastName="Rahman">
              I love wrestling, biking, video games and WWII planes. If any one
              of you wanna talk about video games or planes I&apos;d be psyched
              to do so.
            </TeamMember>
          </div>
        </div>
      </section>
      <section className="about-team-position position-software-engineer">
        <h3>
          <strong>Software Engineers</strong>
        </h3>
        <div className="about-2022-2023-board">
          <h4>June 2022 - May 2023</h4>
          <div className="about-team-teammembers">
            {/* 150 characters max for description */}
            <TeamMember
              image={kevinImage}
              firstName="Kevin"
              lastName="Tam"
              website="https://kevintamcs.com"
            >
              Hello! I&apos;m Kevin, a Computer Science student. I develop
              software and experiences that captivate users on all platforms.
            </TeamMember>
            <TeamMember
              image={dennisImage}
              firstName="Dennis"
              lastName="Klimenkov"
              website="https://www.linkedin.com/in/dennis-klimenkov"
            >
              Hi! I&apos;m Dennis, a Computer Science student at Brooklyn
              College. I&apos;m trying to write code that will make the world a
              better place one day!
            </TeamMember>
            <TeamMember image={logo} firstName="Junninho" lastName="Thomas">
              Hi! I&apos;m an Executive Board Member of the Brooklyn College
              Computer Science Club.
            </TeamMember>
          </div>
        </div>
      </section>

     {/*  <article className="about-team-join">
        <p>
          Interested in joining the team? We&apos;re currently looking for
          volunteers to help out with the club!&nbsp;
          <Link to="/contribute">
            Click here to learn more about our open positions and to apply now.
          </Link>
        </p>
      </article> */}
    </section>
  );
};

export default Team;
