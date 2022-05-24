import React, { PureComponent } from 'react';
import ProjectsComponent from './Projects.component';
import { commissionsProjects, passionProjects } from './Projects.config';

class ProjectsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      category: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectProjects = this.selectProjects.bind(this);
  }

  handleClick = (e) => {
    const newCategory = e.target.textContent;
    this.setState({ category: newCategory });
  };

  selectCategory = (category) => this.setState({ category });

  selectProjects = (category) =>
    category === 'COMMISSIONS'
      ? commissionsProjects
      : category === 'PASSION'
      ? passionProjects
      : console.error('WRONG CATEGORY INPUTTED');

  render() {
    const { category } = this.state;
    const { elements } = this.props;

    return (
      <ProjectsComponent
        elements={elements}
        category={category}
        handleClick={this.handleClick}
        selectCategory={this.selectCategory}
        selectProjects={this.selectProjects}
      />
    );
  }
}

export default ProjectsContainer;
