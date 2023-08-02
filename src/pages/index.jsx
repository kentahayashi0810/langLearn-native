import { SearchBar } from "../components/elements/common/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
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
            />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
