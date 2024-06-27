import UserCard from "@/src/components/UserCard";
import instance from "@/src/apis/axios";
import Image from "next/image";
import searchIcon from "@/public/ic_search.svg";
import { useEffect, useState } from "react";
import { Article } from "@/src/types/wikiListTypes";

export default function WikiList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await instance.get(`/profiles`, { params: { name: value } });
        // TODO: 데이터 전송 확인
        // eslint-disable-next-line no-console
        console.log(response.data);
        if (Array.isArray(response.data.list)) {
          setArticles(response.data.list);
        } else {
          // NOTE: 배열이 아닐시 에러 출력
          // eslint-disable-next-line no-console
          console.error("API did not return an array");
        }
      } catch (error) {
        // NOTE: API 응답 실패시 에러 출력
        // eslint-disable-next-line no-console
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, [value]);

  const searchResults = value ? articles.filter((article) => article.name.toLowerCase().includes(value.toLowerCase())) : articles;

  return (
    <div>
      <div>헤더</div>
      <div className="flex justify-center align-center mx-[20px]">
        <div className="relative w-[860px]">
          <input
            type="text"
            name="위키 검색"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="이름으로 위키 찾기"
            className="w-full h-[45px] m-auto bg-gray-100 rounded-20 py-[10px] pl-[55px] outline-none"
          />
          <div className="absolute left-[20px] top-1/2 transform -translate-y-1/2">
            <Image src={searchIcon} alt="검색 아이콘" width={22} height={22} draggable="false" />
          </div>
        </div>
      </div>
      <div className="w-[860px] mb-[60px] m-auto my-[16px] text-[16px] font-[400] text-gray-400">
        {value ? (
          <span>
            &quot;{value}&quot;님을 총 {searchResults.length}명 찾았습니다.
          </span>
        ) : (
          <br />
        )}
      </div>
      {value ? searchResults.map((article) => <UserCard key={article.id} articles={[article]} />) : <p>검색 결과가 없습니다.</p>}
      <div>페이지네이션</div>
    </div>
  );
}
