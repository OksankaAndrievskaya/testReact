import * as React from "react";
import {FormAccountProps} from "./form-account.props";
import {Field, Form, Formik} from 'formik';

class AccountModal extends React.Component<FormAccountProps> {
    render() {

        const {
            values,
            onSubmit,
            onDelete,
            handleClose,
        } = this.props;
        return (
            <Form>
                <div className='fields'>
                    <p className="middle-text text-center description">Добавьте заголовок</p>
                    <Field
                        className="textarea form-style bot-messenger"
                        component="textarea"
                        name="name"
                        type='text'
                        placeholder="Заголовок"
                    >
                    </Field>
                </div>
                <div id="next-btn" className=" text-center">
                <button
                    className="button btn-next middle-text"
                    onClick={() => {
                        onDelete(values);
                        handleClose();
                    }}
                >
                    Удалить
                </button>
                <button
                    className="button btn-next middle-text"
                    onClick={() => {
                        onSubmit(values);
                        handleClose();
                    }

                    }
                >

                    Сохранить
                </button>
                </div>
            </Form>
        )
    }

}


export {AccountModal};
