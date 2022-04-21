import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";
import { ProfileForm } from "../components/profile-form";
import styles from "../components/profile-form/profile-form.module.css";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, isVisibleProfile, phone } = useSelector(
    (state) => state.profile
  );

  return (
    <div className={styles.profile}>
      <button onClick={() => dispatch(toggleVisibleProfile())}>
        PROFILE VISIBLE
      </button>
      <div>
        {isVisibleProfile && (
          <div className={styles.info}>
            <h3>
              FirstName: <span>{firstName}</span>
            </h3>
            <h3>
              LastName: <span>{lastName}</span>
            </h3>
            <h3>
            phone: <span>{phone}</span>
            </h3>
          </div>
        )}
        <hr />
        <ProfileForm firstName={firstName} lastName={lastName} phone={phone} />
      </div>
    </div>
  );
};
