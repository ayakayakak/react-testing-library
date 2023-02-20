type User = {
  id: number;
  name: string;
};

type CardsProps = {
  userInfos: User[];
};

export const Cards: React.VFC<CardsProps> = ({ userInfos }) => {
  return (
    <>
      {userInfos.length === 0 ? (
        <p>ユーザー情報は0です</p>
      ) : (
        <ul>
          {userInfos.map((userInfo) => (
            <li key={userInfo.id}>
              id:{userInfo.id} name:{userInfo.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};