import { SearchBar } from "../components/elements/common/SearchBar";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex justify-center w-full">
        <div className="w-full">
          <SearchBar
            onSubmit={(searchWord) => {
              // TODO: 検索結果表示画面に遷移する
              console.log(searchWord);
            }}
          />
        </div>
      </div>
    </main>
  );
}
