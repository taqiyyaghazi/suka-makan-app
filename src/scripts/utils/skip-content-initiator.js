import { createSkipContentTemplate } from '../views/templates/template-creator';

const SkipContentInitiator = {
  async init({ skipContentContainer, target }) {
    this.skipContentContainer = skipContentContainer;
    this.target = target;

    await this.renderSkipContent();
  },
  async renderSkipContent() {
    this.skipContentContainer.innerHTML = createSkipContentTemplate(
      this.target,
    );
  },
};

export default SkipContentInitiator;
