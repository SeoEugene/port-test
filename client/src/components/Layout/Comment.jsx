import React, { forwardRef, useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Comment = forwardRef((props, mainRightRef) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();



        const data = {
            name: name,
            password: password,
            comment: comment
        };

        if (name === "" || password === "" || comment === "") {
            return alert("빈칸을 채워주시면 좋겠습니다.");
        }
        if (name.length > 4 || /\d/.test(name)) {
            return alert("이름은 네글자까지만 쓸수있고, 숫자는 사용하지 못합니다.")
        }
        if (password.length !== 4 || !/^[0-9]+$/.test(password)) {
            return alert("비밀번호는 네 글자이어야하고, 숫자로만 구성되어야 합니다.");
        }


        try {

            axios
                .post("/api/comment/write", data)
                .then((response) => {
                    if (response.data.success) {
                        // alert("글 작성 완료")
                        window.location.reload();
                        setName('');
                        setPassword('');
                        setComment('');
                    } else {
                        alert("댓글 작성 실패")
                    }
                })
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };


    const [commentlist, setCommentList] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.post("/api/comment/list");
                if (response.data.success) {
                    console.log(response.data);
                    setCommentList([...response.data.commentList]);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchComments();

    }, []);









    const [selectedComment, setSelectedComment] = useState('')
    const handleEdit = (comment) => {
        setSelectedComment(comment);
        console.log(selectedComment)
    }



    return (
        <div ref={mainRightRef} className="main-right">
            <div className="mr-inner">
                <div className="mr-inner-top">
                    <div className="title">comment<span>M</span></div>
                </div>
                <div className="mr-inner-bom">
                    <div className="commentBox">
                        {commentlist.map((comment, key) => {
                            return (
                                <div className="commnet" key={key}>
                                    <p>{comment.comment}</p>
                                    <span onClick={() => handleEdit(comment)}>{comment.name}

                                        {selectedComment === comment && (
                                            <ul className="edit">
                                                <li><Link to="/">수정</Link></li>
                                                <li><Link to="/">삭제</Link></li>
                                            </ul>
                                        )}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="commnet-input">
                        <input
                            type="text"
                            className="name"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="password"
                            className="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="text"
                            className="comment__text"
                            placeholder="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button onClick={handleSubmit}>enter</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Comment;