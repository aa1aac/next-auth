import Layout from "../component/Layout";

import useUser from "../data/useUser";

const IndexPage = () => {
  const { user, loading, loggedIn } = useUser();

  const DisplayInfo = () => {
    if (loading) return <div className="container"> Loading... </div>;
    if (loggedIn && user._id)
      return (
        <div className="container">
          {" "}
          Id: {user._id} <br />
          Email: {user.email} <br />
        </div>
      );

    return <div className="container"> Login to get info </div>;
  };
  return (
    <Layout title="index">
      <DisplayInfo />
    </Layout>
  );
};

export default IndexPage;
