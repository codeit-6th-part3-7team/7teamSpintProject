import axiosInstance from "@/src/apis/axios";
import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";

type CheckWikiStatusResponseBody = {
  registeredAt: string;
  userId: number;
};

export default async function checkWikiStatus(wikiCode: string): Promise<boolean> {
  try {
    const response = await axiosInstance.get<CheckWikiStatusResponseBody>(`profiles/${wikiCode}/ping`);

    if (response.status === 204) {
      // note 수정 중이 아닌 경우 true 반환
      return true;
    }
    if (response.status === 200) {
      // note 수정 중인 경우 수정상태 관련 정보 반환
      notifications.show({
        title: "수정 중",
        message: "현재 다른 사용자가 위키를 수정 중 입니다",
        color: "yellow",
      });
      return false;
    }
    // note 예상치 못한 상태 코드 확인
    notifications.show({
      title: "오류",
      message: `${response.status} 오류가 발생했습니다`,
      color: "red",
    });
    return false;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const { status } = error.response;
      if (status === 404) {
        // note wikiCode 잘못됐을 때
        notifications.show({
          title: "없는 프로필",
          message: "프로필을 찾을 수 없습니다. 새로고침 후 다시 시도해주세요",
          color: "red",
        });
      } else {
        notifications.show({
          title: "Error",
          message: "알 수 없는 오류가 발생했습니다",
          color: "red",
        });
      }
    } else {
      notifications.show({
        title: "Error",
        message: "예기치 못한 오류가 발생했습니다",
        color: "red",
      });
    }
    return false;
  }
}
