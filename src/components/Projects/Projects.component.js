import React, { PureComponent } from 'react';
import Project from '../Project/Project.component';
import { categories } from './Projects.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar';
import Slider from 'react-slick';

import './Projects.style.scss';

class Projects extends PureComponent {
  render() {
    const { elements, category, handleClick, selectCategory, selectProjects } =
      this.props;

    return (
      <div className="projects" id="Projects">
        <div className="projects__left"></div>
        <div className="projects__right">
          <Navbar elements={elements} />
          <div className="projects__container">
            {categories.map((c, idx) => (
              <div
                key={idx}
                className={`projects__category ${c.toLowerCase()} ${
                  category === ''
                    ? 'default'
                    : category === c
                    ? 'selected'
                    : 'unselected'
                }`}
              >
                <h3
                  className="projects__title"
                  onClick={() => selectCategory(c)}
                >
                  {c[0] + c.slice(1).toLowerCase()}
                </h3>
                <div className="projects__reel">
                  <Slider
                    accessibility={true}
                    infinite={false}
                    arrows={true}
                    dots={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                  >
                    {selectProjects(c).map((p, idx) => (
                      <Project
                        key={idx}
                        mini={true}
                        name={p.name}
                        picture={p.picture}
                        link={p.link}
                        gitLink={p.gitLink}
                        description={p.description}
                        usedTech={p.usedTech}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`projects__back ${category && 'active'}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faUndo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
