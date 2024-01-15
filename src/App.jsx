import './App.css';
import GitUserForm from './components/GitUserForm';
import GitUsersRepos from './components/GitUsersRepos';
import ResulGitHubUsers from './components/ResulGitHubUsers';

function App() {
  return (
    <>
      <h1>GitHubUsers</h1>
      <GitUserForm />
      <ResulGitHubUsers />
      <GitUsersRepos />
    </>
  );
}

export default App;
