import ic_chevron from "@/public/ic_chevron.webp";
import ic_profile_skeleton from "@/public/ic_profile_skeleton.webp";
import { ProfileCardData } from "@/src/types/ProfileResponse";
import Image from "next/image";

type ProfileCardProps = {
  profileData: ProfileCardData;
  profileImage: string | null;
  toggleProfile: () => void;
  isProfileOpen: boolean;
};

const labels: Record<keyof ProfileCardData, string> = {
  city: "거주 도시",
  mbti: "MBTI",
  job: "직업",
  sns: "SNS 계정",
  birthday: "생일",
  nickname: "별명",
  bloodType: "혈액형",
  nationality: "국적",
};

export default function ProfileCard({ profileData, profileImage, toggleProfile, isProfileOpen }: ProfileCardProps) {
  return (
    <section
      className={`flex flex-col rounded-xl border-none px-5 py-3 shadow-lg shadow-gray-300 transition-all duration-300 ease-in-out md:px-5 md:py-6 xl:h-[671px] xl:max-w-[320px] xl:p-[30px] ${isProfileOpen ? "h-[260px] md:h-[290px]" : "h-[126px] md:h-[135px]"}`}
    >
      <article className="flex flex-grow gap-5 md:gap-8 xl:flex-col xl:gap-[30px]">
        <Image className="size-[62px] rounded-full object-cover md:size-[71px] xl:m-[30px] xl:size-[200px]" src={profileImage || ic_profile_skeleton} alt="프로필이미지" />
        <div className={`flex flex-col gap-2 truncate transition-all duration-300 ease-in-out xl:h-[304px] xl:gap-4 ${isProfileOpen ? "h-[205px] md:h-[234px]" : "h-[70px] md:h-[80px]"}`}>
          {Object.entries(profileData).map(([key, value]) => (
            <div key={key} className="flex gap-5">
              <div className="w-20 text-12 text-gray-400 md:text-14">{labels[key as keyof ProfileCardData]}</div>
              <div className="min-w-40 truncate text-12 text-gray-800 md:text-14">{value.length > 0 ? value : "정보없음"}</div>
            </div>
          ))}
        </div>
      </article>
      <button className="mx-auto xl:hidden" type="button" onClick={toggleProfile}>
        <Image
          src={ic_chevron}
          className={`h-6 w-6 transform transition-transform duration-300 ease-in-out ${isProfileOpen ? "rotate-180" : ""}`}
          alt={`${isProfileOpen ? "프로필 상세 닫기" : "프로필 상세 보기"}`}
        />
      </button>
    </section>
  );
}
