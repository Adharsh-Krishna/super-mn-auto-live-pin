import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './index.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question-container hero-bkg-animated">
                <div className="container-heading">
                    FAQ
                </div>
                <div className="faq-container">
                    <div>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <div className="question-header">
                                    Hello World!!0
                                </div>
                            </ExpansionPanelSummary>
                            <div className="question-body-container">
                                <ExpansionPanelDetails>
                                    <div className="question-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                        lacus
                                        ex,
                                        sit amet blandit leo lobortis eget.
                                    </div>
                                </ExpansionPanelDetails>
                            </div>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <div className="question-header">
                                    Hello World!!1
                                </div>
                            </ExpansionPanelSummary>
                            <div className="question-body-container">
                                <ExpansionPanelDetails>
                                    <div className="question-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                        lacus
                                        ex,
                                        sit amet blandit leo lobortis eget.
                                    </div>
                                </ExpansionPanelDetails>
                            </div>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <div className="question-header">
                                    Hello World!!2
                                </div>
                            </ExpansionPanelSummary>
                            <div className="question-body-container">
                                <ExpansionPanelDetails>
                                    <div className="question-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                        lacus
                                        ex,
                                        sit amet blandit leo lobortis eget.
                                    </div>
                                </ExpansionPanelDetails>
                            </div>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <div className="question-header">
                                    Hello World!!3
                                </div>
                            </ExpansionPanelSummary>
                            <div className="question-body-container">
                                <ExpansionPanelDetails>
                                    <div className="question-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                                        lacus
                                        ex,
                                        sit amet blandit leo lobortis eget.
                                    </div>
                                </ExpansionPanelDetails>
                            </div>
                        </ExpansionPanel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;