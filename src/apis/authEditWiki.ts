import axiosInstance from "@/src/apis/axios";
import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";

type AuthEditRequestBody = {
  securityAnswer: string;
};

type AuthEditResponseBody = {
  registeredAt: string;
  userId: number;
};

export default async function authEditWiki(answer: string, wikiCode: string): Promise<AuthEditResponseBody | boolean> {
  try {
    const requestBody: AuthEditRequestBody = {
      securityAnswer: answer,
    };
    const response = await axiosInstance.post<AuthEditResponseBody>(`profiles/${wikiCode}/ping`, requestBody);
    // note 200 response외의 리스폰스 반환 시 오류 알림
    if (response.status === 200) {
      return response.data;
    }
    // note 예상치 못한 상태 코드 확인
    notifications.show({
      title: "오류",
      message: `${response.status} 오류가 발생했습니다`,
      color: "red",
    });
    return false;
  } catch (error) {
    if (error instanceof AxiosError) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 400) {
        notifications.show({
          title: "Error",
          message: "정답이 아닙니다",
          color: "red",
        });
      } else {
        // note 400 에러 외에 wikiCode 오류 또는 api 경로 오류 발생 시 알림
        notifications.show({
          title: "Error",
          message: "알 수 없는 오류가 발생했습니다. 다시 시도해주세요",
          color: "red",
        });
      }
    } else {
      notifications.show({
        title: "Error",
        message: "예기치 못한 오류가 발생했습니다. 새로고침 후 다시 시도해주세요",
        color: "red",
      });
    }
    return false;
  }
}
