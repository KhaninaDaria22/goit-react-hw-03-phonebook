import { Component } from "react";
import { FormSection, FormTitle } from "./Section.styled";

class Section extends Component {
    render() {
        const {title, children} = this.props;
        return(
            <FormSection>
                <FormTitle>{title}</FormTitle>
                {children}
            </FormSection>
        );
    }
}

export default Section;