import Form from 'next/form';
import Image from 'next/image';

export default function Searchbar() {
    return (
        <Form action="/search" className="flex items-align justify-between w-2/5 shadow-md/25  rounded-md p-3 ">
            {/* On submission, the input value will be appended to
                the URL, e.g. /search?query=abc */}
            <input name="query" placeholder="Search for a Pokémon..."/>
            <button type="submit" className="bg-indigo-400 rounded-md px-1">
                <Image
                    src="/Search.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="p-1"
                />
            </button>
        </Form>
    )
}