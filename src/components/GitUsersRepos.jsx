import { useSelector } from 'react-redux';
import { useGetGitHubUserByReposQuery } from '../redux/gitHubUsers/gitHubUsersApiSlice';

const GitUsersRepos = () => {
  const { users } = useSelector((state) => state.gituser);
  console.log("🚀 ~ GitUsersRepos ~ user:", users)

  const { data } = useGetGitHubUserByReposQuery(users);
  return (
    <div style={{ maxHeight: '130px' }}>
      {data?.map((repos) => (
        <div className="ui card"> {repos.name} </div>
      ))}
    </div>
  );
};
export default GitUsersRepos;
