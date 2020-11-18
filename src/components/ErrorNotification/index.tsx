import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from 'components/ErrorNotification/ErrorNotification.module.css';

import { usePrevious } from 'hooks';
import { State } from 'reducers';
import { ActionType } from 'actions';

function ErrorNotification() {
  const dispatch = useDispatch();
  const errors = useSelector((state: State) => state.errors);

  const [errorLength, setErrorLength] = useState(0);
  const prevLength = usePrevious(errorLength);

  // FIXME resolve error duplication rendering
  useEffect(() => {
    if (prevLength !== errors.length) {
      setErrorLength(errors.length);
      setTimeout(() => {
        dispatch({ type: ActionType.RESET_ERROR });
      }, 3000);
    }
  }, [dispatch, errors]);

  return (
    <>
      {errors.map((message: string, index: number) => (
        <div
          key={index}
          className={styles.error}
          style={{ top: 80 + index * 50 }}
        >
          <p className={styles.error__message}>{message}</p>
        </div>
      ))}
    </>
  );
}

export { ErrorNotification };
