import { MdArrowForward } from "react-icons/md";
import { SearchBar } from "../components/elements/common/SearchBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-[1000px] pb-10 md:pb-0">
        <div className="h-[100vh] flex flex-col justify-center px-4">
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
          <h2 className="font-bold text-[min(8vw,3rem)] text-center mb-6">
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
          <div className="relative h-[100vw] mb-10 md:hidden">
            <Image
              className="object-cover"
              src={"/about-image.jpeg"}
              alt={"about-image"}
              fill={true}
            />
          </div>
          <div className="px-4">
            <h3 className="text-[min(5.6vw,2.25rem)] font-bold mb-10 z-50">
              ｢この単語、実際どう使うんだろう？｣
            </h3>
            <div className="flex mb-10">
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
              <div className="relative md:w-[360px] hidden md:block">
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
              <div className="relative flex items-center z-50">
                <MdArrowForward className="mr-4 fill-primary" size={40} />
                <p className="text-primary text-[min(5.2vw,1.5rem)]">
                  詳しい使い方を見る
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
