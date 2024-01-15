import { useSelector, useDispatch } from 'react-redux';
import { useGetGitHubUserByNameQuery } from '../redux/gitHubUsers/gitHubUsersApiSlice';
import GitUserCard from './GitUserCard';


const ResulGitHubUsers = () => {
  const { users } = useSelector((state) => state.gituser);
 const dispatch = useDispatch()

  const { isLoading, data: gitUsersData } = useGetGitHubUserByNameQuery(users);


  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <GitUserCard
        gituser={gitUsersData}
          // avatar={gitUsersData?.avatar_url}
          // name={gitUsersData?.name}
          // location={gitUsersData?.location}
          // bio={gitUsersData?.bio}
        />
      )}
    </div>
  );
};
export default ResulGitHubUsers;
