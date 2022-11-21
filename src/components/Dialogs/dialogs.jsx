import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import {Form, Field, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";

const PostSchema = Yup.object().shape({
    newMessageText: Yup.string()
        .min(1, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required')
})

const Dialogs = (props) => {
    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map (d => <DialogItem name ={d.name} key={d.id}/>)
    let messagesElements = state.messages.map (m => <Message message={m.message} key={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                <div> {messagesElements}</div>
                <AddMessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm = (props) =>{
    let addNewMessage = (values) => {
        props.addMessage(values);
    }
       return (
           <Formik
               initialValues={{
                   newMessageText:""}}
               validationSchema={PostSchema}
               onSubmit={(values, {resetForm})=>{
                       addNewMessage(values.newMessageText);
                       resetForm({values:''})
                   }
           }
           >
               {()=>(
        <Form>
            <div className={s.text}>
        <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter your message"}/>
                <ErrorMessage name="newMessageText" component="div"/>
    </div>

        <div className={s.button}>
            <button type={'submit'}> New message </button>
        </div>
        </Form>
               )}
           </Formik>

)
}
export default Dialogs;