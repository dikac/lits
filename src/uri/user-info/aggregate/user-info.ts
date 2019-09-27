import UserInfoInterface from "../user-info";

export default interface UserInfo<Ui extends UserInfoInterface = UserInfoInterface> {
    userInfo() : Ui;
}