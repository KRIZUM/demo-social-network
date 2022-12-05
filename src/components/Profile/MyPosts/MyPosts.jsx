import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const PostSchema = Yup.object().shape({
    newPostText: Yup.string()
        .min(1, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required')
        })

const MyPosts = React.memo(props => {
    let state = props.profilePage;
    let postsElements = state.posts.map(p => <Post message={p.message} Like={p.like} key={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h2>My posts </h2>
            <div>
                <AddPostForm addPost={props.addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
)
const AddPostForm = (props) =>{
    let addNewPost = (values) => {
        props.addPost(values);
    }

    return (
        <Formik
            initialValues={{
                newPostText:""}}
            validationSchema={PostSchema}
            onSubmit={(values, {resetForm})=>{
                addNewPost(values.newPostText);
                resetForm({values:''})
            }
            }
        >
            {()=>(
                <Form>
                    <div className={s.post}>
                        <Field component={"textarea"} name={"newPostText"} placeholder={"Enter your post"} validate={PostSchema}/>
                        <ErrorMessage name="newPostText" component="div"/>
                    </div>

                    <div className={s.button}>
                        <button type={'submit'}> New Post </button>
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default MyPosts