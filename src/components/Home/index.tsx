import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from 'components/Home/Home.module.css';

import { State } from 'reducers';
import { ActionType, User, Post, getUsers, getPosts } from 'actions';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ActionType.CUSTOM_ERROR,
      payload: 'This is a custom error message',
    });

    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

  const users = useSelector((state: State) => state.users.slice(0, 10));
  const posts = useSelector((state: State) => state.posts.slice(0, 10));

  // TODO resolve container reflow from fetching items
  return (
    <section className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>React App</h1>
      </header>
      <article className={styles.article}>
        <div className={styles.section}>
          <h2 className={styles.section__title}>Users</h2>
          <div className={styles.section__content}>
            {users.map((user: User) => {
              return (
                <div key={user.id}>
                  <span>{user.username}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.section__title}>Posts</h2>
          <div className={styles.section__content}>
            {posts.map((post: Post) => {
              return (
                <div key={post.id}>
                  <span>{post.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}

export { Home };
