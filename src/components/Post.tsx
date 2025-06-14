export default function Post() {
    return (
        <div data-class="post"
             className="border overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-transform duration-[0.2s] ease-[ease] rounded-lg border-solid border-[#ddd] hover:translate-y-[-5px]">
            <img src="https://via.placeholder.com/400x180" alt="..." className="w-full h-[180px] object-cover" />
            <div data-class="post-content" className="p-4">
                <h3 className="text-[1.2rem] mb-2">Vue 3 Composition API</h3>
                <p className="text-[#555] text-[0.95rem]">컴포지션 API의 핵심 개념과 예제 정리</p>
            </div>
        </div>
    )
}

