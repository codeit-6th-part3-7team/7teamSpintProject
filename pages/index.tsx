import LandingImg_01 from "@/public/assets/img_landing_01.webp";
import LandingImg_02 from "@/public/assets/img_landing_02.webp";
import LandingImg_03 from "@/public/assets/img_landing_03.webp";
import LandingImg_04 from "@/public/assets/img_landing_04.webp";
import LandingImg_05 from "@/public/assets/img_landing_05.webp";
import LandingImg_06 from "@/public/assets/img_landing_06.webp";
import LandingImg_07 from "@/public/assets/img_landing_07.webp";
import LandingImg_08 from "@/public/assets/img_landing_08.webp";
import LandingImg_09 from "@/public/assets/img_landing_09.webp";
import LandingImg_10 from "@/public/assets/img_landing_10.webp";
import Header from "@/src/components/Header";
import { Box, Button, Flex, Grid, useMatches } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const btnSize = useMatches({
    base: "lg",
    sm: "xl",
  });
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute -left-10 -right-10 bottom-0 h-56 translate-y-1/2 rounded-1/2 bg-gray-800" />
        <Flex bg="#F1F4FD" direction="column" align="center">
          <Flex pt={{ base: 100, sm: 120 }}>
            <Box className="mb-10 text-center font-nexon text-gray-800">
              <h2 className="text-40 font-light leading-70 md:text-60 md:leading-100">남들이 만드는</h2>
              <h2 className="text-60 font-bold leading-70 md:text-90 md:leading-100">나만의 위키</h2>
            </Box>
          </Flex>
          <Button component={Link} href="/wiki" variant="filled" color="#474D66" size={btnSize} radius="md">
            위키 만들기
          </Button>
          <div className="isolate">
            <Box w={{ base: 336, sm: 498 }} h={{ base: 398, sm: 590 }} mt={44}>
              <Image src={LandingImg_01} alt="위키 이미지" width={0} height={0} className="w-full" />
            </Box>
          </div>
        </Flex>
      </div>
      <div>
        <Box bg="#474D66" pt={{ base: 100, sm: 153, lg: 131 }} pb={{ base: 100, sm: 160, lg: 200 }}>
          <Box px={20} mx="auto" my={0} maw={924}>
            <Flex gap={{ base: 10, sm: 20, lg: 40 }} justify="center">
              <Flex direction="column" justify="space-between" w={{ base: "35.5vw", sm: "35.2vw", lg: 364 }} gap={10}>
                <Flex direction="column" gap={{ base: 10, sm: 20 }} className="font-nexon">
                  <strong className="text-10 text-green-200 md:text-20 xl:text-30">WRITE</strong>
                  <Box className="text-16 leading-20 text-white md:text-32 md:leading-40 xl:text-50 xl:leading-60">
                    <h3>친구의 위키,</h3>
                    <h3>직접 작성해봐요</h3>
                  </Box>
                </Flex>
                <Box className="rounded-[20px] bg-green-200" pr={{ base: 0, sm: 40, lg: 54 }}>
                  <Image src={LandingImg_02} alt="키보드 이미지" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Flex>
              <Box w={{ base: "51.2vw", sm: "49vw", lg: 520 }}>
                <Image src={LandingImg_03} alt="위키 예시 이미지" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
      <div>
        <Box bg="#F1F4FD" pt={{ base: 100, sm: 160, lg: 200 }} pb={{ base: 100, sm: 160, lg: 200 }} className="overflow-hidden">
          <Box px={20} mx="auto" my={0} maw={924}>
            <Flex direction="column" align="flex-end" gap={{ base: 10, sm: 20 }} className="font-nexon">
              <strong className="text-10 text-green-200 md:text-20 xl:text-30">SHARE</strong>
              <Box className="text-right text-16 leading-20 text-gray-800 md:text-32 md:leading-40 xl:text-50 xl:leading-60">
                <h3>내 위키 만들고</h3>
                <h3>친구에게 공유해요</h3>
              </Box>
            </Flex>
          </Box>
          <Flex justify="center">
            <Grid maw={1920} mx="-15.4vw" mt={{ base: 40, sm: 80, lg: 120 }} gutter={{ base: "2.7vw", sm: "2.7vw", lg: "3.6vw" }}>
              <Grid.Col span={2}>
                <Box w="100%" h="100%" bg="#DEE5F5" className="rounded-[25px]" />
              </Grid.Col>
              <Grid.Col span={2}>
                <Box bg="#B2A5FD" className="rounded-[25px]">
                  <Image src={LandingImg_04} alt="알림 이미지" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Grid.Col>
              <Grid.Col span={2}>
                <Box bg="#ADEDDE" className="rounded-[25px]">
                  <Image src={LandingImg_05} alt="위키 로고 이미지" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Grid.Col>
              <Grid.Col span={2}>
                <Box bg="#DEE5F5" className="rounded-[25px]">
                  <Image src={LandingImg_06} alt="위키 이미지" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Grid.Col>
              <Grid.Col span={2}>
                <Box bg="#DEE5F5" className="rounded-[25px]">
                  <Image src={LandingImg_07} alt="메시지 이미지" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Grid.Col>
              <Grid.Col span={2}>
                <Box w="100%" h="100%" bg="#DEE5F5" className="rounded-[25px]" />
              </Grid.Col>
            </Grid>
          </Flex>
        </Box>
      </div>
      <div>
        <Box bg="#ECF0FA" pt={{ base: 100, sm: 160, lg: 200 }} pb={{ base: 100, sm: 160, lg: 200 }}>
          <Box px={20} mx="auto" my={0} maw={924}>
            <Flex direction="column" gap={{ base: 10, sm: 20 }} className="font-nexon">
              <strong className="text-10 text-green-200 md:text-20 xl:text-30">SHARE</strong>
              <Box className="text-16 leading-20 text-gray-800 md:text-32 md:leading-40 xl:text-50 xl:leading-60">
                <h3>내 위키 만들고</h3>
                <h3>친구에게 공유해요</h3>
              </Box>
            </Flex>
            <Flex mt={{ base: 40, sm: 80, lg: 120 }} direction="column" gap={{ base: 10, sm: 22, lg: 40 }}>
              <Box>
                <Image src={LandingImg_08} alt="위키 예시 이미지" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
              </Box>
              <Grid gutter={{ base: 10, sm: 22, lg: 40 }}>
                <Grid.Col span={4}>
                  <Box bg="#8E66FF" className="rounded-[20px]">
                    <Image src={LandingImg_09} alt="알림 이미지" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
                  </Box>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Image src={LandingImg_10} alt="알림 예시 이미지" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
                </Grid.Col>
              </Grid>
            </Flex>
          </Box>
        </Box>
      </div>
      <div>
        <Flex bg="#474D66" direction="column" gap={40} align="center" py={{ base: 100, sm: 160, lg: 200 }}>
          <h2 className="font-nexon text-30 font-semibold text-white md:text-60">나만의 위키 만들어 보기</h2>
          <Button component={Link} href="/wiki" variant="white" color="#474D66" size={btnSize} radius="md">
            지금 시작하기
          </Button>
        </Flex>
      </div>
      <footer>
        <Box py={{ base: 40, sm: 60, lg: 80 }} bg="#3B415B" className="px-10 text-white md:px-20">
          <Flex direction="column">
            <strong className="mb-1 text-10 md:text-16">Copyright ⓒ Wikied. All Rights Reserved</strong>
            <p className="text-8 md:text-14">
              <span>사업자등록번호 000-00-00000 </span>
              <span aria-hidden="true">|</span>
              <span> 통신판매신고 제2020-서울-00000호 </span>
              <span aria-hidden="true">|</span>
              <span> 대표 : 이지은</span>
            </p>
            <p className="text-8 md:text-14">서울특별시 중구 청계천로 123, 위키드빌딩</p>
            <ul className="mt-2.5 flex gap-4 text-8 md:mt-5 md:text-14">
              <li>
                <Link href="/">서비스 이용약관</Link>
              </li>
              <li>
                <Link href="/">개인정보 취급방침</Link>
              </li>
              <li>
                <Link href="/">전자금융거래 기본약관</Link>
              </li>
            </ul>
          </Flex>
        </Box>
      </footer>
    </>
  );
}
