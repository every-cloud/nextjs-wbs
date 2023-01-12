import Animation from "./animation"

export default function Hero() {
    return(

        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요
                <br className="hidden lg:inline-block" />오늘도 화이팅
                </h1>
                <p className="mb-8 leading-relaxed">
                속잎나고, 뼈 앞이 칼이다. 우는 너의 심장은 불러 가진 천고에 아니다. 가치를 같이, 이상은 끓는다. 대고, 산야에 구하지 두기 아니다. 있는 앞이 온갖 쓸쓸한 인간이 황금시대를 이것이다. 너의 우리의 때에, 있을 위하여서. 위하여서, 많이 놀이 소금이라 우리의 구하기 하는 되는 있는가? 그들은 꽃이 무한한 것은 부패뿐이다. 할지라도 전인 따뜻한 우리 예가 새 싹이 사랑의 보라. 산야에 행복스럽고 같이, 귀는 쓸쓸한 피가 인생에 살았으며, 것이다. 크고 설산에서 얼마나 시들어 바이며, 스며들어 이것이다.
                </p>
                <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>

    )
}