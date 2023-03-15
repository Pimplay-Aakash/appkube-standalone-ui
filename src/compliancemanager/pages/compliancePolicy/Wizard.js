import React from "react";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
    };
  }

  onClickStepButton = (activeStep) => {
    this.setState({
      currentStep: activeStep,
    });
  };

  createStepLine = () => {
    const { steps } = this.props;
    const { currentStep } = this.state;
    const retData = [];
    if (steps && steps.length > 0) {
      const totalSteps = steps.length;
      for (let i = 0; i < totalSteps; i++) {
        const step = steps[i];
        retData.push(
          <div
            className={`wizard-step-button ${
              currentStep === i ? "active" : ""
            }`}
            onClick={(e) => this.onClickStepButton(i)}
          >
            {step.name}
          </div>
        );
      }
    }
    return retData;
  };

  createStepContainer = () => {
    const { steps } = this.props;
    const { currentStep } = this.state;
    const retData = [];
    if (steps && steps.length > 0) {
      const totalSteps = steps.length;
      for (let i = 0; i < totalSteps; i++) {
        const step = steps[i];
        retData.push(
          <div
            className={`wizard-step-component ${
              currentStep === i ? "" : "d-none"
            }`}
          >
            {step.component}
          </div>
        );
      }
    }
    return retData;
  };

  render() {
    const { currentStep } = this.state;
    const { steps } = this.props;
    return (
      <div>
        <div className="wizard-step-line-container">
          {this.createStepLine()}
        </div>
        <div className="wizard-step-component-container">
          {this.createStepContainer()}
          <div className="d-block text-center next">
            {currentStep < steps.length - 1 && (
              <button
                onClick={(e) => this.onClickStepButton(currentStep + 1)}
                className="blue-button m-r-0 m-b-0"
              >
                Next
              </button>
            )}
            {currentStep >= steps.length - 1 && (
              <button className="blue-button m-r-0 m-b-0">Next</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
