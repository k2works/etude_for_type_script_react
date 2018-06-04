import * as React from "react";
import {Button, Col, FormControl, HelpBlock} from "react-bootstrap";
import * as Checkbox from "react-bootstrap/lib/Checkbox";
import * as ControlLabel from "react-bootstrap/lib/ControlLabel";
import * as Form from "react-bootstrap/lib/Form";
import * as FormGroup from "react-bootstrap/lib/FormGroup";
import * as Glyphicon from "react-bootstrap/lib/Glyphicon";
import * as InputGroup from "react-bootstrap/lib/InputGroup";
import * as Radio from "react-bootstrap/lib/Radio";
import {RouteComponentProps} from "react-router";


interface IOwnProps extends RouteComponentProps<any>{}

const AppForm: React.SFC<IOwnProps> = (props) => {
    return (
        <div>
            <div>
                <h2>NormalForm</h2>
                {formInstance}
            </div>
            <div>
                <h2>ValidateForm</h2>
                {validateFormInstance}
            </div>
            <div>
                <h2>InlineForm</h2>
                {inlineForm}
            </div>
            <div>
                <h2>HorizontalForm</h2>
                {horizontalForm}
            </div>
        </div>
    )
};

function FieldGroup({ id, label, help, ...props }: any) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const formInstance = (
    <form>
        <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
            help=""
        />
        <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            help=""
        />
        <FieldGroup id="formControlsPassword" label="Password" type="password" help=""/>
        <FieldGroup
            id="formControlsFile"
            type="file"
            label="File"
            help="Example block-level help text here."
        />

        <Checkbox checked={true} readOnly={true}>
            Checkbox
        </Checkbox>
        <Radio checked={true} readOnly={true}>
            Radio
        </Radio>

        <FormGroup>
            <Checkbox inline={true}>1</Checkbox> <Checkbox inline={true}>2</Checkbox>{' '}
            <Checkbox inline={true}>3</Checkbox>
        </FormGroup>
        <FormGroup>
            <Radio name="radioGroup" inline={true}>
                1
            </Radio>{' '}
            <Radio name="radioGroup" inline={true}>
                2
            </Radio>{' '}
            <Radio name="radioGroup" inline={true}>
                3
            </Radio>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
            </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Multiple select</ControlLabel>
            <FormControl componentClass="select" multiple={true}>
                <option value="select">select (multiple)</option>
                <option value="other">...</option>
            </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>

        <FormGroup>
            <ControlLabel>Static text</ControlLabel>
            <FormControl.Static>email@example.com</FormControl.Static>
        </FormGroup>

        <Button type="submit">Submit</Button>
    </form>
);

const validateFormInstance = (
    <form>
    <FormGroup controlId="formValidationSuccess1" validationState="success">
        <ControlLabel>Input with success</ControlLabel>
        <FormControl type="text"/>
        <HelpBlock>Help text with validation state.</HelpBlock>
    </FormGroup>

    <FormGroup controlId="formValidationWarning1" validationState="warning">
        <ControlLabel>Input with warning</ControlLabel>
        <FormControl type="text"/>
    </FormGroup>

    <FormGroup controlId="formValidationError1" validationState="error">
        <ControlLabel>Input with error</ControlLabel>
        <FormControl type="text"/>
    </FormGroup>

    <FormGroup controlId="formValidationNull" validationState={null}>
        <ControlLabel>Input with no validation state</ControlLabel>
        <FormControl type="text"/>
    </FormGroup>

    <FormGroup controlId="formValidationSuccess2" validationState="success">
        <ControlLabel>Input with success and feedback icon</ControlLabel>
        <FormControl type="text"/>
        <FormControl.Feedback/>
    </FormGroup>

    <FormGroup controlId="formValidationWarning2" validationState="warning">
        <ControlLabel>Input with warning and feedback icon</ControlLabel>
        <FormControl type="text"/>
        <FormControl.Feedback/>
    </FormGroup>

    <FormGroup controlId="formValidationError2" validationState="error">
        <ControlLabel>Input with error and feedback icon</ControlLabel>
        <FormControl type="text"/>
        <FormControl.Feedback/>
    </FormGroup>

    <FormGroup controlId="formValidationSuccess3" validationState="success">
        <ControlLabel>Input with success and custom feedback icon</ControlLabel>
        <FormControl type="text"/>
        <FormControl.Feedback>
            <Glyphicon glyph="music"/>
        </FormControl.Feedback>
    </FormGroup>

    <FormGroup controlId="formValidationWarning3" validationState="warning">
        <ControlLabel>Input group with warning</ControlLabel>
        <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl type="text"/>
        </InputGroup>
        <FormControl.Feedback/>
    </FormGroup>

    <Form componentClass="fieldset" horizontal={true}>
        <FormGroup controlId="formValidationError3" validationState="error">
            <Col componentClass={ControlLabel} xs={3}>
                Input with error
            </Col>
            <Col xs={9}>
                <FormControl type="text"/>
                <FormControl.Feedback/>
            </Col>
        </FormGroup>

        <FormGroup controlId="formValidationSuccess4" validationState="success">
            <Col componentClass={ControlLabel} xs={3}>
                Input group with success
            </Col>
            <Col xs={9}>
                <InputGroup>
                    <InputGroup.Addon>@</InputGroup.Addon>
                    <FormControl type="text"/>
                </InputGroup>
                <FormControl.Feedback/>
            </Col>
        </FormGroup>
    </Form>

    <Form componentClass="fieldset" inline={true}>
        <FormGroup controlId="formValidationWarning4" validationState="warning">
            <ControlLabel>Input with warning</ControlLabel>{' '}
            <FormControl type="text"/>
            <FormControl.Feedback/>
        </FormGroup>{' '}
        <FormGroup controlId="formValidationError4" validationState="error">
            <ControlLabel>Input group with error</ControlLabel>{' '}
            <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text"/>
            </InputGroup>
            <FormControl.Feedback/>
        </FormGroup>
    </Form>

    <Checkbox validationState="success">Checkbox with success</Checkbox>
    <Radio validationState="warning">Radio with warning</Radio>
    <Checkbox validationState="error">Checkbox with error</Checkbox>

    {/* This requires React 15's <span>-less spaces to be exactly correct. */}
    <FormGroup validationState="success">
        <Checkbox inline={true}>Checkbox</Checkbox> <Checkbox inline={true}>with</Checkbox>{' '}
        <Checkbox inline={true}>success</Checkbox>
    </FormGroup>
    </form>
);

const inlineForm = (
    <Form inline={true}>
        <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>{' '}
            <FormControl type="text" placeholder="Jane Doe" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>{' '}
            <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>{' '}
        <Button type="submit">Send invitation</Button>
    </Form>
)

const horizontalForm = (
    <Form horizontal={true}>
        <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
                Email
            </Col>
            <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
            </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
                Password
            </Col>
            <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
            </Col>
        </FormGroup>

        <FormGroup>
            <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
            </Col>
        </FormGroup>

        <FormGroup>
            <Col smOffset={2} sm={10}>
                <Button type="submit">Sign in</Button>
            </Col>
        </FormGroup>
    </Form>
)

export default AppForm;
