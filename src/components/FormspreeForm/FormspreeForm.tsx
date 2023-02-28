import { useForm, ValidationError } from '@formspree/react';
import { FormspreeForm } from 'interfaces/FormspreeForm';
import React from 'react';

const FormspreeForm: React.FC<FormspreeForm> = ({ formId }) => {
    const [handleSubmit, setHandleSubmit] = useForm(formId);

    const borderStyle: string =
        'border-2 border border-gray-200 hover:bg-slate-200';
    const containerStyle: string = 'max-w-5xl mx-auto my-5';

    if (handleSubmit.succeeded) {
        return <p className={containerStyle}>Thank you for contacting us!</p>;
    }

    return (
        <React.Fragment>
            <form onSubmit={setHandleSubmit} className={containerStyle}>
                <label htmlFor="email">Email Address</label>
                <div>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className={borderStyle}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={handleSubmit.errors}
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        className={borderStyle}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={handleSubmit.errors}
                    />
                </div>
                <div>
                    <button
                        className="btn"
                        type="submit"
                        disabled={handleSubmit.submitting}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default FormspreeForm;
