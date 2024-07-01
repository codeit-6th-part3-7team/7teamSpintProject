import IcoBurger from "@/public/assets/ic_burger.svg";
import ImgLogo from "@/public/assets/img_logo.webp";
import { Group, Menu } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-20">
      <header className="fixed z-10 h-20 w-full bg-white px-10 drop-shadow-md md:px-20">
        <Group justify="space-between" h="100%">
          <Group justify="space-between" gap={40} h="100%">
            <Link href="/">
              <Image src={ImgLogo} width={107} height={30} alt="로고" />
            </Link>
            <Group h="100%" gap={40} visibleFrom="sm">
              <Link href="/wikilist" className="text-14 text-gray-800">
                위키목록
              </Link>
              <Link href="/boards" className="text-14 text-gray-800">
                자유게시판
              </Link>
            </Group>
          </Group>
          <Group>
            <Group visibleFrom="sm">
              <Link href="/login" className="text-sm text-gray-400">
                로그인
              </Link>
            </Group>
            <Group hiddenFrom="sm">
              <Menu width={110} position="bottom" radius="md" shadow="md" withinPortal>
                <Menu.Target>
                  <Image src={IcoBurger} width={24} height={24} alt="메뉴" className="cursor-pointer" />
                </Menu.Target>

                <Menu.Dropdown>
                  <Link href="/wikilist" className="flex justify-center p-2 text-14 text-gray-800">
                    위키 목록
                  </Link>
                  <Link href="/boards" className="flex justify-center p-2 text-14 text-gray-800">
                    자유게시판
                  </Link>
                  <Link href="/mypage" className="flex justify-center p-2 text-14 text-gray-800">
                    계정 설정
                  </Link>
                  <Link href="/wiki" className="flex justify-center p-2 text-14 text-gray-800">
                    내 위키
                  </Link>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Group>
      </header>
    </div>
  );
}
