import Parser from "html-react-parser";
import Image from "next/image";
import { ActionIcon, Button, Flex, useMatches } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import IcoPencil from "@/public/assets/ic_pencil.svg";
import IcoBin from "@/public/assets/ic_bin.svg";
import IcoHeart from "@/public/assets/ic_heart.svg";
import IcoHeartOn from "@/public/assets/ic_heart_on.svg";
import Link from "next/link";
import axios from "@/src/apis/axios";
import { useRouter } from "next/router";

export interface ArticleType {
  id: number;
  title: string;
  content: string;
  image: string;
  updatedAt: Date;
  writer: {
    id: number;
    name: string;
  };
  likeCount: number;
  isLiked: boolean;
}

interface BoardProps {
  initialValues: ArticleType;
}

export default function Board({ initialValues }: BoardProps) {
  const [values] = useState(initialValues);
  const [like, setLike] = useState(initialValues.isLiked);
  const [likeCount, setLikeCount] = useState(initialValues.likeCount);
  const router = useRouter();
  const btnColor = useMatches({
    base: "transparent",
    sm: "green",
  });
  const btnSize = useMatches({
    base: "compact-xs",
    sm: "sm",
  });

  const handleHeart = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      await axios.post(`/articles/${values.id}/like`);
      setLikeCount((prevValue) => prevValue + 1);
    } else {
      await axios.delete(`/articles/${values.id}/like`);
      setLikeCount((prevValue) => prevValue - 1);
    }
    setLike(!e.target.checked);
  };

  const handleDelete = async () => {
    await axios.delete(`/articles/${values.id}`);
    router.push("/boards");
  };

  return (
    <div className="flex justify-center align-middle">
      <Flex direction="column" w={{ base: "100%", lg: 1060 }} mih="40vh" pt={46} pb={30} px={30} mx={{ base: 20, sm: 60, lg: 0 }} my={{ base: 20, sm: 40, lg: 60 }} className="bg-white drop-shadow-md">
        <h2 className="order-1 text-16 font-semibold text-gray-800 md:text-20 lg:text-24">{values.title}</h2>
        <Flex my={24} justify="space-between" className="order-3">
          <p className="text-12 text-gray-400 md:text-16">
            <strong className="mr-2 font-normal">{values.writer.name}</strong>
            <strong className="font-normal">{values.updatedAt instanceof Date ? values.updatedAt.toLocaleDateString() : new Date(values.updatedAt).toLocaleDateString()}</strong>
          </p>
          <label htmlFor="like" className="flex">
            {like ? (
              <Image src={IcoHeartOn} width={18} height={18} alt="아이콘" aria-hidden="true" className="mr-1" />
            ) : (
              <Image src={IcoHeart} width={18} height={18} alt="아이콘" aria-hidden="true" className="mr-1" />
            )}
            <span>{likeCount}</span>
          </label>
          <input type="checkbox" id="like" checked={like} onChange={handleHeart} className="hidden" />
        </Flex>
        <Flex direction="column" py={{ base: 16, sm: 20 }} className="order-4">
          {Parser(values.content)}
        </Flex>
        <Flex gap={{ base: 12, lg: 14 }} mt={-31} className="order-2 self-end">
          <Button href={`/boards/${values.id}/edit`} component={Link} type="submit" color={btnColor} size={btnSize} className="mantine-visible-from-sm">
            수정하기
          </Button>
          <ActionIcon variant="transparent" aria-label="수정하기" className="mantine-hidden-from-sm">
            <Image src={IcoPencil} width={24} height={24} alt="아이콘" aria-hidden="true" />
          </ActionIcon>
          <Button type="submit" color={btnColor} size={btnSize} className="mantine-visible-from-sm" onClick={handleDelete}>
            삭제하기
          </Button>
          <ActionIcon variant="transparent" aria-label="삭제하기" className="mantine-hidden-from-sm" onClick={handleDelete}>
            <Image src={IcoBin} width={24} height={24} alt="아이콘" aria-hidden="true" />
          </ActionIcon>
        </Flex>
      </Flex>
    </div>
  );
}