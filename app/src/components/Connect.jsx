import { MY_GITHUB_URL, MY_LINKEDIN_URL } from '../constants';

function Connect() {
  return (
    <div className="container">
      <h3 className="text">Connect</h3>
      <p className="text">
        GitHub:&nbsp;
        <a target="_blank" href={MY_GITHUB_URL} className="contrast">@ehong07</a>
      </p>
      <p className="text">
        LinkedIn:&nbsp;
        <a target="_blank" href={MY_LINKEDIN_URL} className="contrast">@easakhong</a>
      </p>
    </div>
  );
}

export default Connect;
