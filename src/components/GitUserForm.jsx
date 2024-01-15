import { useForm } from 'react-hook-form';
import { findUser } from '../redux/gitHubUsers/gitHubUsersSlice';
import { useDispatch } from 'react-redux';

const GitUserForm = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  function hamdleFindGitHubUser(data) {
    dispatch(findUser(data.gitUser.toLowerCase()));
  }
  return (
    <form className='ui form' onSubmit={handleSubmit(hamdleFindGitHubUser)}>
      <input {...register('gitUser')} type="text" />
      <button className="ui button" type="submit">
        Get User
      </button>
    </form>
  );
};
export default GitUserForm;
