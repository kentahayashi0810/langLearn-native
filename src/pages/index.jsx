import { MdArrowForward } from "react-icons/md";
import { SearchBar } from "../components/elements/common/SearchBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <div className="container mx-auto flex justify-center max-w-[1000px]">
        <div className="w-full">
          <div className="h-[100vh] flex flex-col justify-center">
            <div className="relative">
              <Image
                src={"/question-bubble-light.svg"}
                alt="?"
                width={111}
                height={76}
                className="absolute left-0 bottom-0"
              />
              <Image
                src={"/question-bubble-dark.svg"}
                alt="?"
                width={166}
                height={121}
                className="absolute right-0 bottom-0"
              />
            </div>
            <h2 className="font-bold text-5xl text-center mb-6">
              ネイティブはなんて言う?
            </h2>
            <SearchBar
              onSubmit={(searchWord) => {
                // TODO: 検索結果表示画面に遷移する
                console.log(searchWord);
              }}
=======
    <main>
      <div className="container mx-auto max-w-[1000px] pb-10 md:pb-0">
        <div className="flex h-[100vh] flex-col justify-center px-4">
          <div className="relative">
            <Image
              src={"/question-bubble-light.svg"}
              alt="?"
              width={111}
              height={76}
              className="absolute bottom-0 left-0"
            />
            <Image
              src={"/question-bubble-dark.svg"}
              alt="?"
              width={166}
              height={121}
              className="absolute bottom-0 right-0"
>>>>>>> 41477525173e977224a78fc423b63bc99ad11505
            />
          </div>
          <h2 className="mb-6 text-center text-[min(8vw,3rem)] font-bold">
            ネイティブはなんて言う?
          </h2>
          <SearchBar
            onSubmit={(searchWord) => {
              // TODO: 検索結果表示画面に遷移する
              console.log(searchWord);
            }}
          />
        </div>
        <div className="min-h-[100vh]">
          <div className="relative mb-10 h-[100vw] md:hidden">
            <Image
              className="object-cover"
              src={"/about-image.jpeg"}
              alt={"about-image"}
              fill={true}
            />
          </div>
          <div className="px-4">
            <h3 className="z-50 mb-10 text-[min(5.6vw,2.25rem)] font-bold">
              ｢この単語、実際どう使うんだろう？｣
            </h3>
            <div className="mb-10 flex">
              <div className="md:mr-16">
                <p className="text-[min(4.8vw,1.25rem)]">
                  なんて思ったことはありませんか？
                  <br />
                  <br />
                  単語を勉強するとき、日本語での意味を覚えると思います。
                  <br className="hidden md:inline" />
                  ですが、それだけでは実際の会話で使うことは難しいです。
                  <br className="hidden md:inline" />
                  なぜなら、その単語が使われる”文脈”が分からないからです。
                  <br />
                  <br />
                  せっかく時間をかけて覚えた単語も、実際に使えなきゃ意味がない。
                  <br className="hidden md:inline" />
                  そんな問題を解決するために生まれたのがこのサイトです。
                  <br />
                  <br />
                  このサイトではユーザーが自由に音声を投稿し、その音声を聞いて他のユーザーが学習できるシステムになっています。
                  <br />
                  <br />
                  お互いに助け合いながら素晴らしい学習環境を作り上げていきましょう！
                  <br />
                </p>
              </div>
              <div className="relative hidden md:block md:w-[360px]">
                <Image
                  className="object-cover"
                  src={"/about-image.jpeg"}
                  alt={"about-image"}
                  fill={true}
                />
              </div>
            </div>
            {/* TODO: 使い方へ遷移 */}
            <Link href="/">
              <div className="relative z-50 flex items-center">
                <MdArrowForward className="mr-4 fill-primary" size={40} />
                <p className="text-[min(5.2vw,1.5rem)] text-primary">
                  詳しい使い方を見る
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
